<script setup lang="ts">
import { ElForm, ElMessage } from 'element-plus'
import api from '@/api/modules/setting_user'
import useRoleStore from '@/store/modules/role'

// 路由 store
const props = defineProps(['id', 'row'])
const emits = defineEmits(['success'])
const roleStore = useRoleStore()
const loading = ref()
const formRef = ref<any>() // form ref
// 表单
const form = ref<any>({
  id: props.row.id,
  role: '',
  account: '',
})
// 表单校验
const formRules = ref<any>({
  role: [{ required: true, message: '请选择角色码', trigger: 'blur' }],
})
const munulevs = ref()
const visible: any = defineModel({
  default: false,
})
form.value.account = props.row.account
const title = '分配角色'
// 提交
function onSubmit() {
  if (form.value.id) {
    formRef.value && formRef.value.validate((valid: any) => {
      if (valid) {
        api.setUserRole(form.value).then((res: any) => {
          ElMessage.success({
            message: res.status === 1 ? '角色赋予成功' : '接口异常',
            center: true,
          })
          emits('success') // 新增时 是通过list.value 打开的直接调用父传子的方法
          onCancel()
        })
      }
    })
  }
}

onMounted(async () => {
  loading.value = true
  munulevs.value = await roleStore.getRole // 从store获取原始路由
  loading.value = false
})
// 关闭弹框
function onCancel() {
  visible.value = false
}
</script>

<template>
  <div>
    <ElDialog
      v-model="visible"
      v-loading="loading" :title="title" width="30%" :close-on-click-modal="false" append-to-body
      destroy-on-close
    >
      <ElForm
        ref="formRef" :inline="true" :rules="formRules" :model="form" label-width="120px"
        label-suffix=":"
      >
        <ElFormItem label="角色" prop="role">
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option v-for="item in munulevs" :key="item.id" :label="item.role" :value="item.role" />
          </el-select>
        </ElFormItem>
      </ElForm>
      <template #footer>
        <ElButton size="large" @click="onCancel">
          取消
        </ElButton>
        <ElButton type="primary" size="large" @click="onSubmit">
          确定
        </ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<style lang="scss" scoped>
.el-select {
  width: 192px;
}
</style>
