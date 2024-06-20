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
import useVersionStore from '@/store/modules/version'

defineOptions({
  name: 'SurveyBillManagementList',
})
// 路由
const router = useRouter()
// 版本
const versionStore = useVersionStore()
// 查询版本
const version = ref()
// 分页配置
const { pagination, onSizeChange, onCurrentChange, onSortChange } = usePagination()
const tabbar = useTabbar()
const settingsStore = useSettingsStore()
// 表格控件-展示列
const columns = ref([
  // 表格控件-展示列
  {
    label: '等级名称',
    prop: 'a',
    sortable: true,
    // 不可更改
    disableCheck: false,
    // 默认展示
    checked: true,
  },
])
// 定义数据
const data = ref<any>({
  loading: false,
  // 表格是否自适应高度
  tableAutoHeight: false,
  // 表格控件-是否展示边框
  border: true,
  // 表格控件-是否展示斑马条
  stripe: false,
  // 表格控件-控制表格大小
  lineHeight: 'default',
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
    page: 1,
    limit: 10,
    version: '',
    name: '',
    id: '',
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
async function getDataList() {
  data.value.loading = true
  version.value = await versionStore.getVersion
  api.list({ page: 1, limit: 10 }).then((res: any) => {
    data.value.loading = false
    data.value.dataList = res.data.result
    pagination.value.total = Number.parseInt(res.data.total)
  })
}
// 查询
function queryData() {
  data.value.loading = true
  api.list(data.value.search).then((res: any) => {
    data.value.loading = false
    data.value.dataList = res.data.result
    pagination.value.total = Number.parseInt(res.data.total)
  })
}
// 重置筛选数据
function onReset() {
  Object.assign(data.value.search, {
    page: 1,
    limit: 10,
    version: '',
    name: '',
    id: '',
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

// 导出
async function onExport() {
  try {
    const { data } = await api.export({ page: 1, limit: 10, id: '', name: '', versionId: '' })
    // 将数据转换为 Blob 对象
    const blob = new Blob([data], { type: 'application/octet-stream' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = '租户管理.xlsx'
    // 模拟点击下载
    a.click()
    // 清理工作
    window.URL.revokeObjectURL(url)
  }
  catch (error) {
    console.error('导出失败', error)
  }
}
// 修改状态
async function changeStatus(row: any) {
  ElMessageBox.confirm(`确认将状态修改成「${row.active === 1 ? '启用' : '禁用'}」吗？`, '确认信息')
    .then(async () => {
      const { status } = await api.edit({ id: row.id, active: row.active, phone: row.phone, email: row.email })
      status === 1
      && ElMessage.success({
        message: '修改「状态」成功',
        center: true,
      })
      getDataList()
    })
    .catch(() => {
      getDataList()
    })
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
          // 回显菜单等级
          menulev: row.menuLevel,
          // 回显菜单
          path: row.path,
          // 回显权限
          auths: JSON.stringify(row.auths),
        },
      })
    }
    else {
      router.push({
        name: 'multilevel_menu_examplePermissionsEdit',
        params: {
          id: row.id,
          // 回显菜单等级
          menulev: row.menuLevel,
          // 回显菜单
          path: row.path,
          // 回显权限
          auths: JSON.stringify(row.auths),
        },
      })
    }
  }
  else {
    data.value.formModeProps.id = row.id
    data.value.formModeProps.row = JSON.stringify(row)
    data.value.formModeProps.visible = true
  }
}
// 重置密码
function onResetPassword(row: any) {
  ElMessageBox.confirm(`确认将「${row.name}」的密码重置为 “123456” 吗？`, '确认信息').then(() => {
    api.reset({ id: row.id }).then(() => {
      ElMessage.success({
        message: '重置成功',
        center: true,
      })
      getDataList()
    })
  }).catch(() => {})
}
</script>

<template>
  <div :class="{ 'absolute-container': data.tableAutoHeight }">
    <PageMain>
      <SearchBar :show-toggle="false">
        <template #default="{ fold, toggle }">
          <ElForm :model="data.search" size="default" label-width="100px" inline-message inline class="search-form">
            <ElFormItem>
              <ElInput v-model="data.search.id" placeholder="租户ID" clearable />
            </ElFormItem>
            <ElFormItem>
              <ElInput v-model="data.search.name" placeholder="租户名称" clearable />
            </ElFormItem>
            <ElFormItem>
              <el-select v-model="data.search.version" placeholder="请选择版本">
                <el-option v-for="item in version" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </ElFormItem>
            <ElFormItem v-show="fold">
              <el-select v-model="data.search.version" placeholder="租户来源">
                <el-option v-for="item in version" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </ElFormItem>
            <ElFormItem v-show="fold">
              <el-select v-model="data.search.version" placeholder="账户类型">
                <el-option v-for="item in version" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </ElFormItem>
            <ElFormItem>
              <ElButton type="primary" @click="queryData()">
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
              <ElButton link @click="toggle">
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
          <el-button size="default" @click="onExport">
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
        :data="data.dataList" highlight-current-row height="100%" @sort-change="onSortChange"
        @selection-change="data.batch.selectionDataList = $event"
      >
        <el-table-column align="center" prop="a" show-overflow-tooltip type="selection" />
        <ElTableColumn show-overflow-tooltip align="center" prop="id" width="80" label="租户ID" />
        <ElTableColumn show-overflow-tooltip align="center" prop="type" label="账户类型">
          <template #default="{ row }">
            {{ row.type === 'personal' ? '个人' : '公司' }}
          </template>
        </ElTableColumn>
        <ElTableColumn show-overflow-tooltip align="center" prop="name" label="用户名">
          <template #default="{ row }">
            {{ row.name ? row.name : '暂无数据' }}
          </template>
        </ElTableColumn>
        <ElTableColumn show-overflow-tooltip align="center" prop="companyName" label="公司名称">
          <template #default="{ row }">
            {{ row.companyName ? row.companyName : '暂无数据' }}
          </template>
        </ElTableColumn>
        <ElTableColumn show-overflow-tooltip align="center" prop="version" label="版本" />
        <ElTableColumn show-overflow-tooltip align="center" prop="countryName" label="国家">
          <template #default="{ row }">
            {{ row.countryName ? row.countryName : '暂无数据' }}
          </template>
        </ElTableColumn>
        <ElTableColumn show-overflow-tooltip align="center" prop="email" label="邮箱">
          <template #default="{ row }">
            {{ row.email ? row.email : '暂无数据' }}
          </template>
        </ElTableColumn>
        <ElTableColumn show-overflow-tooltip align="center" prop="phone" label="手机号码">
          <template #default="{ row }">
            {{ row.phone ? row.phone : '暂无数据' }}
          </template>
        </ElTableColumn>
        <ElTableColumn show-overflow-tooltip align="center" prop="date" label="期限" />
        <ElTableColumn align="center" show-overflow-tooltip prop="active" label="状态">
          <template #default="{ row }">
            <ElSwitch
              v-model="row.active" inline-prompt active-text="开启" inactive-text="关闭" :active-value="1"
              :inactive-value="2"
              @change="changeStatus(row)"
            />
          </template>
        </ElTableColumn>
        <ElTableColumn show-overflow-tooltip align="center" prop="registerFrom" label="租户来源" />
        <el-table-column align="center" prop="i" label="操作" show-overflow-tooltip width="180">
          <template #default="{ row }">
            <el-button size="small" plain type="primary" @click="onResetPassword(row)">
              重置密码
            </el-button>
            <el-button size="small" plain type="primary" @click="onEdit(row)">
              编辑
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
    <FormMode
      v-if="data.formMode === 'dialog' || data.formMode === 'drawer'" :id="data.formModeProps.id"
      v-model="data.formModeProps.visible" :row="data.formModeProps.row" :mode="data.formMode" @success="getDataList"
    />
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
