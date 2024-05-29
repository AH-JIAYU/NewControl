<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'Edit',
})
const { pagination, onSizeChange, onCurrentChange } = usePagination()
const activeName = ref('first')
const loading = ref(false)
const data = [
  { id: 1, name: 'admin' },
  { id: 12, name: 'admin' },
  { id: 13, name: 'admin' },
  { id: 14, name: 'admin' },
  { id: 21, name: 'admin' },
  { id: 20, name: 'admin' },
]
// 弹框开关变量
const dialogTableVisible = ref(false)
// 提交数据
function onSubmit() {

}
// 获取数据
async function showEdit() {
  dialogTableVisible.value = true
}
// 每页数量切换
function sizeChange(size: number) {
  onSizeChange(size).then(() => showEdit())
}

// 当前页码切换（翻页）
function currentChange(page = 1) {
  onCurrentChange(page).then(() => showEdit())
}
// 弹框关闭事件
function closeHandler() {
  // 移除校验
  // formRef.value.resetFields()

  // delete formData.id
  // // 重置表单
  // Object.assign(formData, defaultState)
  dialogTableVisible.value = false
}
// 暴露方法
defineExpose({ showEdit })
</script>

<template>
  <div>
    <el-dialog
      v-model="dialogTableVisible"
      title="编辑"
      width="700"
      :before-close="closeHandler"
    >
      <el-form label-width="80px" :inline="false">
        <el-form-item label="版本名称">
          <el-text class="mx-1">
            管理员
          </el-text>
        </el-form-item>
        <el-form-item label="版本描述">
          <el-text class="mx-1">
            xxxxxxxxxxxxxxxxxxx
          </el-text>
        </el-form-item>
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="功能清单" name="first">
            <el-form-item label="菜单名称">
              <el-text class="mx-1">
                账号管理
              </el-text>
            </el-form-item>
            <el-form-item label="按钮权限">
              <el-text class="mx-1">
                查看 启用 禁用
              </el-text>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="关联人员" name="second">
            <ElTable
              v-loading="loading" class="my-4" :data="data" stripe highlight-current-row border
              height="100%"
            >
              <ElTableColumn type="index" align="center" fixed />
              <ElTableColumn prop="id" align="center" width="300" label="用户ID" />
              <ElTableColumn prop="name" align="center" label="用户名称" />
            </ElTable>
            <ElPagination
              :current-page="pagination.page" :total="pagination.total" :page-size="pagination.size"
              :page-sizes="pagination.sizes" :layout="pagination.layout" :hide-on-single-page="false" class="pagination"
              background @size-change="sizeChange" @current-change="currentChange"
            />
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <template #footer>
        <div style="flex: auto;">
          <el-button type="primary" @click="onSubmit">
            确定
          </el-button>
          <el-button type="" @click="dialogTableVisible = false">
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
