<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import FormMode from './components/FormMode/index.vue'
import eventBus from '@/utils/eventBus'
import api from '@/api/modules/setting_basisDictionary'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'SettingBasisDictionaryList',
})

const router = useRouter()
const { pagination, getParams, onSizeChange, onCurrentChange } = usePagination()
// const { pagination, getParams, onSizeChange, onCurrentChange, onSortChange } = usePagination()
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
  formMode: 'router' as 'router' | 'dialog' | 'drawer',
  // 详情
  formModeProps: {
    visible: false,
    id: '',
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
  detailList: [],
  defaultProps: {
    children: 'children',
    label: 'label',
  },
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

function getDataList() {
  data.value.loading = true
  const params = {
    ...getParams(),
    ...(data.value.search.title && { title: data.value.search.title }),
  }
  api.list(params).then((res: any) => {
    data.value.loading = false
    data.value.dataList = res.data
    pagination.value.total = res.data.total
  })
  // api.detail(params).then((res: any) => {
  //   data.value.loading = false
  //   data.value.detailList = res.data
  //   pagination.value.total = 10
  // })
}

// 每页数量切换
function sizeChange(size: number) {
  onSizeChange(size).then(() => getDataList())
}

// 当前页码切换（翻页）
function currentChange(page = 1) {
  onCurrentChange(page).then(() => getDataList())
}

// // 字段排序
// function sortChange({ prop, order }: { prop: string, order: string }) {
//   onSortChange(prop, order).then(() => getDataList())
// }

function onCreate() {
  if (data.value.formMode === 'router') {
    if (settingsStore.settings.tabbar.enable && settingsStore.settings.tabbar.mergeTabsBy !== 'activeMenu') {
      tabbar.open({
        name: 'basis_dictionaryCreate',
      })
    }
    else {
      router.push({
        name: 'basis_dictionaryCreate',
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
        name: 'basis_dictionaryEdit',
        params: {
          id: row.id,
        },
      })
    }
    else {
      router.push({
        name: 'basis_dictionaryEdit',
        params: {
          id: row.id,
        },
      })
    }
  }
  else {
    data.value.formModeProps.id = row.id
    data.value.formModeProps.visible = true
  }
}

// function onDel(row: any) {
//   ElMessageBox.confirm(`确认删除「${row.title}」吗？`, '确认信息').then(() => {
//     api.delete(row.id).then(() => {
//       getDataList()
//       ElMessage.success({
//         message: '模拟删除成功',
//         center: true,
//       })
//     })
//   }).catch(() => {})
// }
</script>

<template>
  <div :class="{ 'absolute-container': data.tableAutoHeight }">
    <PageHeader title="基础字典管理" />
    <PageMain>
      <el-row :gutter="20">
        <el-col :lg="6" :md="8" :sm="24" :xl="4" :xs="24">
          <el-card shadow="hover">
            <el-button
              class="tree-button"
              icon=""
              type="primary"
              @click="onCreate"
            >
              添加字典分类
            </el-button>
            <el-input
              placeholder="请输入字典名称"
              clearable
            />
            <el-tree
              :props="data.defaultProps"
              :highlight-current="true" node-key="id" default-expand-all
              :default-expanded-keys="['root']" :data="data.dataList"
            >
              <template #default="{ data }">
                <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="data.code"
                  placement="left"
                >
                  <span style="width: 140px;">{{ data.name }}</span>
                </el-tooltip>
                <el-tag
                  style="float: right;"
                  @click="onEdit"
                >
                  编辑
                </el-tag>
                <el-tag
                  v-if="!data.children"
                  class="ml-2"
                  type="danger"
                  style="float: right;"
                >
                  删除
                </el-tag>
              </template>
            </el-tree>
          </el-card>
        </el-col>
        <el-col :lg="18" :md="16" :sm="24" :xl="20" :xs="24">
          <el-card shadow="hover">
            <el-button
              type="primary"
            >
              添加
            </el-button>
            <el-table
              v-loading="data.loading"
              :data="data.detailList"
              lazy border
              row-key="value"
              :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
            >
              <el-table-column label="key值" prop="key" show-overflow-tooltip />
              <el-table-column
                label="字典值"
                prop="value"
                show-overflow-tooltip
              />
              <el-table-column label="备注" prop="remark" show-overflow-tooltip />
              <el-table-column label="操作" show-overflow-tooltip width="400">
                <template #default="{ row }">
                  <el-button
                    v-if="row.level < 3"
                    text
                    type="primary"
                  >
                    添加子项
                  </el-button>
                  <el-button text type="primary">
                    编辑
                  </el-button>
                  <el-button text type="primary">
                    删除
                  </el-button>
                </template>
              </el-table-column>
              <template #empty>
                <el-empty description="暂无数据" />
              </template>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
      <ElPagination :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size" :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination" background @size-change="sizeChange" @current-change="currentChange" />
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

.tree-button {
  width: 100%;
  margin-bottom: 10px;
}

.el-button--primary {
  margin-bottom: 10px;
}

:deep() {
  .el-tree {
    margin-top: 10px;

    &-node__label {
      display: block;
      width: 100%;
    }
  }
}
</style>
