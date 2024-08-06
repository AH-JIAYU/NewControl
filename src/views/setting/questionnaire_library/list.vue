<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import FormMode from './components/FormMode/index.vue'
import Edit from './components/Edit/index.vue'
import eventBus from '@/utils/eventBus'
import api from '@/api/modules/setting_questionnaireLibrary'
import useSettingsStore from '@/store/modules/settings'
import useProblemStore from '@/store/modules/problem.ts'

defineOptions({
  name: 'questionnaire_library',
})
// 问题
const problemStore = useProblemStore()
// 路由
const router = useRouter()
// 分页
const { pagination, onSizeChange, onCurrentChange, onSortChange } = usePagination()
const tabbar = useTabbar()
const settingsStore = useSettingsStore()
// 定义表单
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
  // 设计问卷
  formModeProps: {
    visible: false,
    id: '',
    row: '',
  },
  // 新增
  editProps: {
    id: '',
    visible: false,
    row: '',
  },
  // 搜索
  search: {
    countryId: '',
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
// 获取数据
function getDataList() {
  data.value.loading = true
  api.list({}).then((res: any) => {
    data.value.loading = false
    data.value.dataList = res.data
    pagination.value.total = res.data?.length
  })
}
// 每页数量切换
function sizeChange(size: number) {
  onSizeChange(size)
}
// 当前页码切换（翻页）
function currentChange(page = 1) {
  onCurrentChange(page)
}
// 字段排序
function sortChange({ prop, order }: { prop: string, order: string }) {
  onSortChange(prop, order)
}
// 添加国家标题
function onCreate() {
  data.value.editProps.id = ''
  data.value.editProps.row = ''
  data.value.editProps.visible = true
}
// 编辑国家标题
function onEdit(row: any) {
  data.value.editProps.id = row.id
  data.value.editProps.row = JSON.stringify(row)
  data.value.editProps.visible = true
}
// 修改状态
async function changeStatus(item: any) {
  try {
    ElMessageBox.confirm(`确认将状态修改成「${item.status === 1 ? '启用' : '禁用'}」吗？`, '确认信息')
      .then(async () => {
        const { status } = await api.edit(item)
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
  catch (error) {
    console.error(error)
  }
}
// 设计模板
function EditSurvey(row: any) {
  if (data.value.formMode === 'router') {
    if (
      settingsStore.settings.tabbar.enable
      && settingsStore.settings.tabbar.mergeTabsBy !== 'activeMenu'
    ) {
      tabbar.open({
        name: 'screenLibraryEdit',
        params: {
          id: row.projectProblemCategoryId,
        },
      })
    }
    else {
      router.push({
        name: 'screenLibraryEdit',
        params: {
          id: row.projectProblemCategoryId,
        },
      })
    }
  }
  else {
    data.value.formModeProps.id = row.id
    data.value.formModeProps.row = JSON.stringify(row)
    problemStore.country = row
    data.value.formModeProps.visible = true
  }
}
// 删除国家
function onDelCountry(row: any) {
  ElMessageBox.confirm(`确认删除「${row.countryName}」吗？`, '确认信息')
    .then(() => {
      api.delete({ countryId: row.countryId }).then(() => {
        getDataList()
        ElMessage.success({
          message: '删除成功',
          center: true,
        })
      })
    })
    .catch(() => { })
}
// 删除标题
function onDelProject(row: any) {
  ElMessageBox.confirm(`确认删除「${row.categoryName}」吗？`, '确认信息')
    .then(() => {
      api
        .delete({ id: row.projectProblemCategoryId })
        .then(() => {
          getDataList()
          ElMessage.success({
            message: '删除成功',
            center: true,
          })
        })
    })
    .catch(() => { })
}
</script>

<template>
  <div :class="{ 'absolute-container': data.tableAutoHeight }">
    <PageMain>
      <SearchBar :show-toggle="false">
        <template #default="{ fold, toggle }">
          <ElForm :model="data.search" size="default" label-width="100px" inline-message inline class="search-form">
            <ElFormItem label="国家">
              <ElInput
                v-model="data.search.countryId" placeholder="请输入国家，支持模糊查询" clearable
                @keydown.enter="currentChange()" @clear="currentChange()"
              />
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
                  <SvgIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top'" />
                </template>
                {{ fold ? "展开" : "收起" }}
              </ElButton>
            </ElFormItem>
          </ElForm>
        </template>
      </SearchBar>
      <ElDivider border-style="dashed" />
      <ElSpace wrap>
        <ElButton type="primary" size="default" @click="onCreate">
          <template #icon>
            <SvgIcon name="i-ep:plus" />
          </template>
          新增前置问卷库
        </ElButton>
      </ElSpace>
      <ElTable
        v-loading="data.loading" class="my-4" :data="data.dataList" highlight-current-row stripe border
        height="100%" @sort-change="sortChange" @selection-change="data.batch.selectionDataList = $event"
      >
        <el-table-column type="expand" width="55">
          <template #default="{ row }">
            <div m="4">
              <div m="4">
                <h2>该国家下所有问卷</h2>
              </div>
              <el-table :data="row.categories" highlight-current-row class="hide-table-header">
                <el-table-column prop="categoryName" label="标题" />
                <ElTableColumn prop="status" label="状态">
                  <template #default="scope">
                    <ElSwitch
                      v-model="scope.row.status" active-text="启用" inactive-text="禁用" inline-prompt
                      :active-value="1" :inactive-value="2" @change="changeStatus(scope.row)"
                    />
                  </template>
                </ElTableColumn>
                <el-table-column prop="createTime" label="创建时间" />
                <ElTableColumn width="250" align="center" label="操作" fixed="right">
                  <template #default="scope">
                    <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
                      编辑
                    </ElButton>
                    <ElButton type="primary" size="small" plain @click="EditSurvey(scope.row)">
                      设计问卷
                    </ElButton>
                    <ElButton type="danger" size="small" plain @click="onDelProject(scope.row)">
                      删除
                    </ElButton>
                  </template>
                </ElTableColumn>
              </el-table>
            </div>
          </template>
        </el-table-column>
        <ElTableColumn prop="countryName" label="国家" />
        <ElTableColumn label="操作" width="250" align="center" fixed="right">
          <template #default="scope">
            <ElButton type="danger" size="small" plain @click="onDelCountry(scope.row)">
              删除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      <ElPagination
        :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size"
        :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination"
        background @size-change="sizeChange" @current-change="currentChange"
      />
    </PageMain>
    <Edit
      v-if="data.editProps.visible" :id="data.editProps.id" v-model="data.editProps.visible"
      :row="data.editProps.row" @success="getDataList"
    />
    <FormMode
      v-if="data.formModeProps.visible" :id="data.formModeProps.id" v-model="data.formModeProps.visible"
      :mode="data.formMode" :row="data.formModeProps.row" @success="getDataList"
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
