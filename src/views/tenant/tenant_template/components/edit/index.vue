<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { FormRules } from 'element-plus'
import { ref } from 'vue'
import api from '@/api/modules/tenant_tenantTemplate'

const emit = defineEmits(['success'])
const formRef = ref()
const dialogFormVisible = ref()
const form = ref<any>({
  name: '',
  title: '',
})
// 校验
const formRules = ref<FormRules>({
  name: [
    { required: true, message: '请输入模板名称', trigger: 'blur' },
  ],
})
// 接收数据
function showEdit(row: any) {
  if (!row) {
    form.value.title = '添加'
  }
  else {
    form.value = JSON.parse(JSON.stringify(row))
    form.value.title = '编辑'
  }
  dialogFormVisible.value = true
}
// 提交数据
async function onSubmit() {
  formRef.value.validate(async (valid: any) => {
    if (valid) {
      await api.create(form)
      ElMessage.success({
        message: '修改成功',
        center: true,
      })
      emit('success')
      close()
    }
  })
}
// 关闭弹框重置数据
function close() {
  formRef.value.resetFields()
  form.value = {}
  dialogFormVisible.value = false
}
// 暴露
defineExpose({ showEdit })
</script>

<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="form.title"
    width="30%"
    @close="close"
  >
    <el-form
      ref="formRef"
      :model="form"
      label-width="100px"
      class="demo-ruleForm"
      :rules="formRules"
    >
      <el-form-item label="模板名称" prop="name">
        <el-input v-model="form.name" clearable />
      </el-form-item>
    </el-form>
    <template #footer>
      <ElButton size="large" @click="close">
        取 消
      </ElButton>
      <ElButton type="primary" size="large" @click="onSubmit">
        确 定
      </ElButton>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
// scss
</style>
