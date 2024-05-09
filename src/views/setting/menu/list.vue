<route lang="yaml">
meta:
  enabled: false
</route>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import FormMode from './components/FormMode/index.vue'
import apiMenu from '@/api/modules/menu'
import useSettingsStore from '@/store/modules/settings'

defineOptions({
  name: 'PagesExampleMenuList',
})

const router = useRouter()
const tabbar = useTabbar()
const settingsStore = useSettingsStore()

const data = ref<any>({
  loading: false,
  // 表格是否自适应高度
  tableAutoHeight: true,
  // 列表数据
  dataList: [],
  // 抽屉
  formModeProps: {
    visible: false,
    id: '',
    parentId: '',
  },
})

onMounted(() => {
  getDataList()
})

function getDataList() {
  data.value.loading = true
  apiMenu.list().then((res: any) => {
    data.value.loading = false
    data.value.dataList = res.data
  })
}

// 添加id赋值给parentId
function onCreate(row?: any) {
  data.value.formModeProps.id = '' //添加时不应有id 组件里 prop为只读 通过父置空id
  data.value.formModeProps.parentId = row.id ?? ''
  data.value.formModeProps.visible = true
}
// 编辑时id赋值给id 通过id请求 parentId
function onEdit(row: any) {
  data.value.formModeProps.id = row.id ?? ''
  data.value.formModeProps.parentId = '' //添加时不应有parentId 组件里 prop为只读 通过父置空parentId
  data.value.formModeProps.visible = true
}

function onDel(row: any) {
  ElMessageBox.confirm(`确认删除「${row.meta.title}」吗？`, '确认信息').then(() => {
    apiMenu.delete(row.id).then(() => {
      getDataList()
      ElMessage.success({
        message: '模拟删除成功',
        center: true,
      })
    })
  }).catch(() => { })
}
</script>

<template>
  <div :class="{ 'absolute-container': data.tableAutoHeight }">
    <PageMain>
      <ElSpace>
        <ElButton type="primary" size="default" @click="onCreate">
          <template #icon>
            <SvgIcon name="i-ep:plus" />
          </template>
          新增主导航
        </ElButton>
      </ElSpace>
      <ElTable
        v-loading="data.loading" class="mt-4" :data="data.dataList" row-key="id" stripe highlight-current-row
        default-expand-all border height="100%"
      >
        <ElTableColumn prop="meta.title" label="标题" min-width="200" fixed="left" />
        <ElTableColumn label="路由" width="200">
          <template #default="{ row }">
            <span :title="row.path">{{ row.path }}</span>
          </template>
        </ElTableColumn>
        <ElTableColumn label="页面组件" width="200">
          <template #default="{ row }">
            <ElTag v-if="row.component === 'Layout'">
              Layout
            </ElTag>
            <span v-else :title="row.component">{{ row.component }}</span>
          </template>
        </ElTableColumn>
        <ElTableColumn label="图标" width="90" align="center">
          <template #default="{ row }">
            <div style="display: flex; justify-content: center;">
              <SvgIcon v-if="row.meta.icon" :name="row.meta.icon" :size="24" />
            </div>
          </template>
        </ElTableColumn>
        <ElTableColumn label="激活图标" width="90" align="center">
          <template #default="{ row }">
            <SvgIcon v-if="row.meta.activeIcon" :name="row.meta.activeIcon" :size="24" />
          </template>
        </ElTableColumn>
        <ElTableColumn label="菜单" width="80" align="center">
          <template #default="{ row }">
            <ElTag v-if="typeof row.meta.menu === 'boolean'" :type="row.meta.menu ? 'success' : 'danger'">
              {{ row.meta.menu ? '显示' : '隐藏' }}
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="面包屑" width="80" align="center">
          <template #default="{ row }">
            <ElTag v-if="typeof row.meta.breadcrumb === 'boolean'" :type="row.meta.breadcrumb ? 'success' : 'danger'">
              {{ row.meta.breadcrumb ? '显示' : '隐藏' }}
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="操作" width="250" align="center" fixed="right">
          <template #default="scope">
            <ElButton type="info" size="small" plain @click="onCreate(scope.row)">
              新增导航
            </ElButton>
            <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
              编辑
            </ElButton>
            <ElButton type="danger" size="small" plain @click="onDel(scope.row)">
              删除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
    </PageMain>
    <FormMode
      :id="data.formModeProps.id" v-model="data.formModeProps.visible"
      :parent-id="data.formModeProps.parentId"
      @success="getDataList"
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

:deep(.el-table td.el-table__cell div) {
  @include text-overflow;
}
</style>