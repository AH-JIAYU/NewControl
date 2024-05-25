<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import FormMode from './components/FormMode/index.vue'
import edit from './components/edit/index.vue'
import eventBus from '@/utils/eventBus'
import api from '@/api/modules/tenant_tenantTemplate'

defineOptions({
  name: 'TenantTenantTemplateList',
})
// 分页配置
const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()
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
const detailRef = ref()
const editRef = ref()
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
    id: '',
    name: '',
    default: false,
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
// 获取列表
function getDataList() {
  data.value.loading = true
  const params = {
    ...getParams(),
    ...(data.value.search.title && { title: data.value.search.title }),
  }
  api.list(params).then((res: any) => {
    data.value.loading = false
    data.value.dataList = res.data.list
    pagination.value.total = res.data.total
  })
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
  editRef.value.showEdit()
}
// 设计模板
function pageEdit(row: any) {
  detailRef.value.showEdit(row)
}
// 修改
function onEdit(row: any) {
  editRef.value.showEdit(row)
}
// 删除
function onDel(row: any) {
  ElMessageBox.confirm(`确认删除「${row.title}」吗？`, '确认信息').then(() => {
    api.delete(row.id).then(() => {
      getDataList()
      ElMessage.success({
        message: '模拟删除成功',
        center: true,
      })
    })
  }).catch(() => {})
}
</script>

<template>
  <div :class="{ 'absolute-container': data.tableAutoHeight }">
    <PageHeader title="租户模板管理" />
    <PageMain>
      <SearchBar :show-toggle="false">
        <template #default="{ fold, toggle }">
          <ElForm :model="data.search" size="default" label-width="100px" inline-message inline class="search-form">
            <ElFormItem>
              <ElInput v-model="data.search.id" placeholder="ID" clearable @keydown.enter="currentChange()" @clear="currentChange()" />
            </ElFormItem>
            <ElFormItem>
              <el-select v-model="data.search.name" value-key="" placeholder="模板名称" clearable filterable />
            </ElFormItem>
            <ElFormItem>
              <el-select v-model="data.search.default" value-key="" placeholder="状态" clearable filterable />
            </ElFormItem>
            <ElFormItem>
              <ElButton type="primary" @click="currentChange()">
                <template #icon>
                  <SvgIcon name="i-ep:search" />
                </template>
                筛选
              </ElButton>
              <ElButton link disabled @click="toggle">
                <template #icon>
                  <SvgIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top' " />
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
        <ElTableColumn v-if="data.batch.enable" align="center" type="selection" fixed />
        <ElTableColumn align="center" show-overflow-tooltip prop="id" label="ID" />
        <ElTableColumn align="center" show-overflow-tooltip prop="name" label="模板名称" />
        <ElTableColumn align="center" show-overflow-tooltip prop="updatedAt" label="修改时间" />
        <ElTableColumn align="center" show-overflow-tooltip prop="default" label="状态">
          <ElSwitch inline-prompt active-text="默认" inactive-text="否" />
        </ElTableColumn>
        <ElTableColumn label="操作" width="250" align="center" fixed="right">
          <template #default="scope">
            <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
              编辑
            </ElButton>
            <ElButton type="primary" size="small" plain @click="pageEdit(scope.row)">
              设计模板
            </ElButton>
            <ElButton type="danger" size="small" plain @click="onDel(scope.row)">
              删除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      <ElPagination :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size" :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination" background @size-change="sizeChange" @current-change="currentChange" />
    </PageMain>
    <FormMode :id="data.formModeProps.id" ref="detailRef" :row="data.formModeProps.row" @success="getDataList" />
    <edit ref="editRef" />
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
