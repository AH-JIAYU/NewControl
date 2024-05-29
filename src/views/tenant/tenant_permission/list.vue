<script setup lang="ts">
import FormMode from './components/FormMode/index.vue'
import Edit from './components/Edit/index.vue'
import eventBus from '@/utils/eventBus'
import api from '@/api/modules/tenant_tenantPermission'
import usetenantMenuStore from '@/store/modules/tenantMenu'
import useSettingsStore from '@/store/modules/settings'
import useTenantButtonPermissionStore from '@/store/modules/tenantButtonPermission'

defineOptions({
  name: 'TenantTenantPermissionList',
})
const buttonPer = useTenantButtonPermissionStore()
const tenantMenuStore = usetenantMenuStore() // 路由 store
const router = useRouter()
const tabbar = useTabbar()
const settingsStore = useSettingsStore()
provide('success', getDataList)
const data = ref<any>({
  loading: false,
  // 表格是否自适应高度
  tableAutoHeight: false,
  /**
   * 详情展示模式
   * router 路由跳转
   * dialog 对话框
   * drawer 抽屉
   */
  formMode: 'drawer' as 'router' | 'dialog' | 'drawer',
  // 详情
  formModeProps: {
    visible: false,
    menulev: 1, // 菜单等级
    path: '', // 菜单
    auths: [], // 权限
    id: '',
  },
  EditProps: {
    id: '',
    visible: false, // 添加时的弹框
    row: '',
  },
  // 搜索
  search: {
    title: '',
  },
  // 列表数据
  dataList: [],
})

onMounted(() => {
  getDataList()
  if (data.value.formMode === 'router') {
    eventBus.on('get-data-list', () => {
      getDataList()
    })
  }
})

onBeforeUnmount(() => {
  if (data.value.formMode === 'router') {
    eventBus.off('get-data-list')
  }
})

function recursion(menus: any[], permissions: any[]) {
  menus.forEach((menuItem: any) => {
    if (!!menuItem.children && menuItem.children.length > 0) {
      menuItem.auths = recursion(menuItem.children, permissions)
    }
    const data = permissions.filter(item => item.menu === menuItem.path)
    menuItem.auths = data
    return []
  })
}
// 获取数据
async function getDataList() {
  data.value.loading = true
  const permissions = await api.list()
  buttonPer.tenantPermissions = permissions.data // 存store
  const menus: any = await tenantMenuStore.gettenantMenu // 从store获取原始路由
  // 处理数据 将权限里的menu和路由里的name相同的数据添加到路由的permissions里
  recursion(menus, permissions.data)
  data.value.dataList = menus
  data.value.loading = false
  if (data.value.formModeProps.id) {
    // 当通过inject的success(即getDataList)调用该方法时 是会有id的用于编辑删除更新 DetailForm里的数据
    const obj = findObjectById(data.value.dataList, data.value.formModeProps.id)
    data.value.formModeProps.auths = JSON.stringify(obj.auths)
  }
}
// 通过id递归查找对象
function findObjectById(arr: any, targetId: any) {
  for (const obj of arr) {
    if (obj.id === targetId) {
      return obj
    }
    if (obj.children) {
      const result: any = findObjectById(obj.children, targetId)
      if (result) {
        return result
      }
    }
  }
  return null
}
// 新增
function onCreate() {
  data.value.EditProps.id = 11
  data.value.EditProps.visible = true
  data.value.EditProps.row = JSON.stringify({})
}
// 修改
function onEdit(row: any) {
  if (data.value.formMode === 'router') {
    if (
      settingsStore.settings.tabbar.enable
      && settingsStore.settings.tabbar.mergeTabsBy !== 'activeMenu'
    ) {
      tabbar.open({
        name: 'multilevel_menu_examplePermissionsEdit',
        params: {
          id: row.id,
          menulev: row.menuLevel, // 回显菜单等级
          path: row.path, // 回显菜单
          auths: JSON.stringify(row.auths), // 回显权限
        },
      })
    }
    else {
      router.push({
        name: 'multilevel_menu_examplePermissionsEdit',
        params: {
          id: row.id,
          menulev: row.menuLevel, // 回显菜单等级
          path: row.path, // 回显菜单
          auths: JSON.stringify(row.auths), // 回显权限
        },
      })
    }
  }
  else {
    data.value.formModeProps.id = row.id
    data.value.formModeProps.menulev = row.menuLevel
    data.value.formModeProps.auths = JSON.stringify(row.auths)
    data.value.formModeProps.visible = true
  }
}
</script>

<template>
  <div :class="{ 'absolute-container': data.tableAutoHeight }">
    <PageHeader title="权限管理管理" />
    <PageMain>
      <ElSpace wrap>
        <ElButton type="primary" size="default" @click="onCreate">
          <template #icon>
            <SvgIcon name="i-ep:plus" />
          </template>
          新增按钮权限
        </ElButton>
      </ElSpace>
      <ElTable
        v-loading="data.loading" :data="data.dataList" row-key="id" stripe highlight-current-row default-expand-all border
        :style="{ lineHeight: 'normal' }"
      >
        <ElTableColumn prop="meta.title" width="300" label="模块" />
        <ElTableColumn label="权限">
          <template #default="{ row }">
            <el-tag v-for="item in row.auths" :key="item.id" type="primary">
              {{ item.label }}
            </el-tag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="操作" width="250" align="center" fixed="right">
          <template #default="scope">
            <div v-if="scope.row.menuLevel > 2 && scope.row.auths.length">
              <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
                详情
              </ElButton>
            </div>
          </template>
        </ElTableColumn>
      </ElTable>
    </PageMain>
    <FormMode
      v-if="data.formMode === 'dialog' || data.formMode === 'drawer'" :id="data.formModeProps.id"
      v-model="data.formModeProps.visible" :path="data.formModeProps.path" :auths="data.formModeProps.auths"
      :menulev="data.formModeProps.menulev" :mode="data.formMode" @success="getDataList"
    />
    <Edit v-if="data.EditProps.visible" v-model="data.EditProps.visible" @success="getDataList" />
  </div>
</template>

<style lang="scss" scoped>
:deep {
  .el-tag {
    margin-right: 10px;
  }
}

.absolute-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .page-header {
    margin-bottom: 0;
  }

  .page-main {
    flex: 1;
    overflow: auto;

    :deep(.main-container) {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: auto;
    }
  }
}

.page-main {
  .search-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    margin-bottom: -18px;

    :deep(.el-form-item) {
      grid-column: auto / span 1;

      &:last-child {
        grid-column-end: -1;

        .el-form-item__content {
          justify-content: flex-end;
        }
      }
    }
  }

  .el-divider {
    width: calc(100% + 40px);
    margin-inline: -20px;
  }
}
</style>
