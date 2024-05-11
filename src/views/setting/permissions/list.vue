<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import FormMode from './components/FormMode/index.vue'
import eventBus from '@/utils/eventBus'
import api from '@/api/modules/setting_permissions'
import apiMenu from '@/api/modules/menu'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'SettingPermissionsList',
})

const router = useRouter()
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()
const tabbar = useTabbar()
const settingsStore = useSettingsStore()

const data = ref({
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
    menulev: 1, // 路由等级
    id: '',
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
    const data = permissions.filter(item => item.menu === menuItem.name)
    menuItem.auths = data
    return []
  })
}

async function getDataList() {
  data.value.loading = true
  const permissions = await api.list()
  const menus = await apiMenu.list()
  // 处理数据 将权限里的menu和路由里的name相同的数据添加到路由的permissions里
  recursion(menus.data, permissions.data)
  data.value.dataList = menus.data
  data.value.loading = false
}

// // 当前页码切换（翻页）
// function currentChange(page = 1) {
//   onCurrentChange(page).then(() => getDataList())
// }

function onCreate() {
  if (data.value.formMode === 'router') {
    if (settingsStore.settings.tabbar.enable && settingsStore.settings.tabbar.mergeTabsBy !== 'activeMenu') {
      tabbar.open({
        name: 'multilevel_menu_examplePermissionsCreate',
      })
    }
    else {
      router.push({
        name: 'multilevel_menu_examplePermissionsCreate',
      })
    }
  }
  else {
    data.value.formModeProps.id = ''
    data.value.formModeProps.visible = true
  }
}

function onEdit(row: any) {
  if (data.value.formMode === 'router') {
    if (settingsStore.settings.tabbar.enable && settingsStore.settings.tabbar.mergeTabsBy !== 'activeMenu') {
      tabbar.open({
        name: 'multilevel_menu_examplePermissionsEdit',
        params: {
          id: row.id,
          menulev: row.menuLevel,
        },
      })
    }
    else {
      router.push({
        name: 'multilevel_menu_examplePermissionsEdit',
        params: {
          id: row.id,
          menulev: row.menuLevel,
        },
      })
    }
  }
  else {
    data.value.formModeProps.id = row.id
    data.value.formModeProps.menulev = row.menuLevel
    data.value.formModeProps.visible = true
  }
}

function onDel(row: any) {
  ElMessageBox.confirm(`确认删除「${row.title}」吗？`, '确认信息').then(() => {
    api.delete(row.id).then(() => {
      getDataList()
      // ElMessage.success({
      //   message: '模拟删除成功',
      //   center: true,
      // })
    })
  }).catch(() => { })
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
      <ElTable :data="data.dataList" row-key="id" stripe highlight-current-row default-expand-all border
        :style="{ lineHeight: 'normal' }">
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
            <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
              编辑
            </ElButton>
            <ElButton type="danger" size="small" plain @click="onDel(scope.row)">
              删除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      {{data.formModeProps.menulev}}
    </PageMain>
    <FormMode v-if="data.formMode === 'dialog' || data.formMode === 'drawer'" :id="data.formModeProps.id"
      :menulev="data.formModeProps.menulev" v-model="data.formModeProps.visible" :mode="data.formMode"
      @success="getDataList" />
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .page-header {
    margin-bottom: 0;
  }

  .page-main {
    flex: 1;
    overflow: auto;

    :deep(.main-container) {
      flex: 1;
      overflow: auto;
      display: flex;
      flex-direction: column;
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
    margin-inline: -20px;
    width: calc(100% + 40px);
  }
}
</style>
