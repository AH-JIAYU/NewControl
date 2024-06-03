<route lang="yaml">
  meta:
    title: 列表页
  </route>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted, ref } from 'vue'
import FormMode from './components/FormMode/index.vue'
import api from '@/api/modules/tenant_tenantManage'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'SurveyBillManagementList',
})

const router = useRouter()
// 分页配置
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()
const tabbar = useTabbar()
const settingsStore = useSettingsStore()

// 表格控件-展示列
const columns = ref([
  // 表格控件-展示列
  {
    label: '等级名称',
    prop: 'a',
    sortable: true,
    disableCheck: false, // 不可更改
    checked: true, // 默认展示
  },
])
const data = ref<any>({
  loading: false,
  tableAutoHeight: false, // 表格是否自适应高度
  border: true, // 表格控件-是否展示边框
  stripe: false, // 表格控件-是否展示斑马条
  lineHeight: 'default', // 表格控件-控制表格大小
  checkList: [],
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
    id: '',
    row: '',
  },
  // 搜索
  search: {
    title: '',
  },
  // 批量操作
  batch: {
    enable: false,
    selectionDataList: [],
  },
  // 列表数据
  dataList: [],
})

onMounted(() => {
  getDataList()
})
// 获取数据
function getDataList() {
  data.value.loading = true
  const params = {
    ...getParams(),
    ...(data.value.search.title && { title: data.value.search.title }),
  }
  api.list(params).then((res: any) => {
    data.value.dataList = res.data.list
    pagination.value.total = res.data.total
  })
  data.value.loading = false
}
// 重置筛选数据
function onReset() {
  Object.assign(data.value.search, {
    title: '',
  })
  getDataList()
}
// 每页数量切换
function sizeChange(size: number) {
  onSizeChange(size).then(() => getDataList())
}

// 当前页码切换（翻页）
function currentChange(page = 1) {
  onCurrentChange(page).then(() => getDataList())
}

// 字段排序
function sortChange({ prop, order }: { prop: string, order: string }) {
  onSortChange(prop, order).then(() => getDataList())
}

// 新增
function onCreate() {
  data.value.formModeProps.id = ''
  data.value.formModeProps.visible = true
  data.value.formModeProps.row = JSON.stringify({})
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
// 重置密码
function onResetPassword() {
  // ElMessageBox.confirm(`确认将「${row.account}」的密码重置为 “123456” 吗？`, '确认信息').then(() => {
  //   apiManager.passwordReset(row.id).then(() => {
  //     ElMessage.success({
  //       message: '模拟重置成功',
  //       center: true,
  //     })
  //   })
  // }).catch(() => {})
}
// 删除
function onDel() {
  // ElMessageBox.confirm(`确认删除「${row.meta.title}」吗？`, '确认信息').then(() => {
  //   api.delete().then((res: any) => {
  //     getDataList()
  //     ElMessage[res.status === 1 ? 'success' : 'error']({
  //       message: res.status === 1 ? '删除成功' : '请求失败',
  //       center: true,
  //     })
  //   })
  // }).catch(() => { })
}
</script>

<template>
  <div :class="{ 'absolute-container': data.tableAutoHeight }">
    <PageMain>
      <SearchBar :show-toggle="false">
        <template #default="{ fold, toggle }">
          <ElForm :model="data.search" size="default" label-width="100px" inline-message inline class="search-form">
            <ElFormItem>
              <ElInput
                v-model="data.search.title" placeholder="租户ID" clearable @keydown.enter="currentChange()"
                @clear="currentChange()"
              />
            </ElFormItem>
            <ElFormItem>
              <ElInput
                v-model="data.search.title" placeholder="租户名称" clearable @keydown.enter="currentChange()"
                @clear="currentChange()"
              />
            </ElFormItem>
            <ElFormItem>
              <el-select v-model="data.search.title" value-key="" placeholder="版本" clearable filterable />
            </ElFormItem>
            <!-- <ElFormItem v-show="!fold">
              <el-select v-model="data.search.title" value-key="" placeholder="角色" clearable filterable />
            </ElFormItem>
            <ElFormItem v-show="!fold">
              <el-select v-model="data.search.title" value-key="" placeholder="租户来源" clearable filterable />
            </ElFormItem> -->
            <ElFormItem>
              <ElButton type="primary" @click="currentChange()">
                <template #icon>
                  <SvgIcon name="i-ep:search" />
                </template>
                筛选
              </ElButton>
              <ElButton @click="onReset">
                <template #icon>
                  <div class="i-grommet-icons:power-reset h-1em w-1em" />
                </template>
                重置
              </ElButton>
              <ElButton disabled link @click="toggle">
                <template #icon>
                  <SvgIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top'" />
                </template>
                {{ fold ? '展开' : '收起' }}
              </ElButton>
            </ElFormItem>
          </ElForm>
        </template>
      </SearchBar>
      <ElDivider border-style="dashed" />
      <el-row>
        <FormLeftPanel>
          <el-button size="default" type="primary" @click="onCreate">
            新增
          </el-button>
        </FormLeftPanel>
        <FormRightPanel>
          <el-button size="default">
            导出
          </el-button>
          <TabelControl
            v-model:border="data.border" v-model:tableAutoHeight="data.tableAutoHeight"
            v-model:checkList="data.checkList" v-model:columns="columns" v-model:line-height="data.lineHeight"
            v-model:stripe="data.stripe" style="margin-left: 12px;" @query-data="getDataList"
          />
        </FormRightPanel>
      </el-row>
      <ElTable
        v-loading="data.loading" :border="data.border" :size="data.lineHeight" :stripe="data.stripe" class="my-4"
        :data="data.dataList" highlight-current-row height="100%" @sort-change="sortChange"
        @selection-change="data.batch.selectionDataList = $event"
      >
        <el-table-column align="center" prop="a" show-overflow-tooltip type="selection" />
        <ElTableColumn show-overflow-tooltip align="center" prop="" width="80" label="租户ID" />
        <ElTableColumn show-overflow-tooltip align="center" prop="title" label="租户名称" />
        <ElTableColumn show-overflow-tooltip align="center" prop="" label="版本" />
        <ElTableColumn show-overflow-tooltip align="center" prop="" label="国家" />
        <ElTableColumn show-overflow-tooltip align="center" prop="" label="邮箱" />
        <ElTableColumn show-overflow-tooltip align="center" prop="" label="手机号码" />
        <ElTableColumn show-overflow-tooltip align="center" prop="" label="期限" />
        <ElTableColumn align="center" show-overflow-tooltip prop="" label="状态">
          <ElSwitch inline-prompt active-text="启用" inactive-text="禁用" />
        </ElTableColumn>
        <!-- <ElTableColumn show-overflow-tooltip align="center" prop="" label="租户来源" /> -->
        <el-table-column align="center" prop="i" label="操作" show-overflow-tooltip width="260">
          <template #default="{ row }">
            <el-button size="small" plain type="primary" @click="onResetPassword()">
              重置密码
            </el-button>
            <el-button size="small" plain type="primary" @click="onEdit(row)">
              编辑
            </el-button>
            <el-button size="small" plain type="danger" @click="onDel()">
              删除
            </el-button>
          </template>
        </el-table-column>
      </ElTable>
      <ElPagination
        :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size"
        :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination"
        background @size-change="sizeChange" @current-change="currentChange"
      />
    </PageMain>
    <FormMode v-if="data.formMode === 'dialog' || data.formMode === 'drawer'" :id="data.formModeProps.id" v-model="data.formModeProps.visible" :mode="data.formMode" @success="getDataList" />
  </div>
</template>

  <style lang="scss" scoped>
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
