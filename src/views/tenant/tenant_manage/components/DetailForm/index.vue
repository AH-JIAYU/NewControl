<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { DetailFormProps } from '../../types'
import api from '@/api/modules/tenant_tenantManage'

const props = withDefaults(
  defineProps<DetailFormProps>(),
  {
    id: '',
  },
)

const loading = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  id: props.id,
  userName: '',
  country: '',
  phoneNumber: '',
  email: '',
  password: '',
  role: 1,
  time: '',
  active: true,
})
const formRules = ref<FormRules>({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  country: [
    { required: true, message: '请选择国家', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

onMounted(() => {
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  api.detail(form.value.id).then((res: any) => {
    loading.value = false
    form.value.title = res.data.title
  })
}

defineExpose({
  submit() {
    return new Promise<void>((resolve) => {
      if (form.value.id === '') {
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            api.create(form.value).then(() => {
              ElMessage.success({
                message: '模拟新增成功',
                center: true,
              })
              resolve()
            })
          }
        })
      }
      else {
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            api.edit(form.value).then(() => {
              ElMessage.success({
                message: '模拟编辑成功',
                center: true,
              })
              resolve()
            })
          }
        })
      }
    })
  },
})
</script>

<template>
  <div v-loading="loading">
    <ElForm ref="formRef" :model="form" :rules="formRules" label-width="120px" label-suffix="：">
      <ElFormItem label="用户名" prop="userName">
        <ElInput v-model="form.userName" placeholder="请输入用户名" />
      </ElFormItem>
      <ElFormItem label="国家" prop="country">
        <el-select v-model="form.country" placeholder="请选择国家" />
      </ElFormItem>
      <ElFormItem label="手机号码" prop="phoneNumber">
        <ElInput v-model="form.phoneNumber" placeholder="请输入手机号码" />
      </ElFormItem>
      <ElFormItem label="电子邮箱" prop="email">
        <ElInput v-model="form.email" placeholder="请输入电子邮箱" />
      </ElFormItem>
      <ElFormItem label="登录密码" prop="password">
        <ElInput v-model="form.password" placeholder="请输入登录密码" />
      </ElFormItem>
      <ElFormItem label="权限分配" prop="role">
        <el-radio-group v-model="form.role" class="ml-4">
          <el-radio :value="1" size="large">
            按角色
          </el-radio>
          <el-radio :value="2" size="large">
            按版本
          </el-radio>
        </el-radio-group>
      </ElFormItem>
      <ElFormItem>
        <el-row style="width: 100%;" :gutter="20">
          <el-col :span="10">
            <el-select v-model="form.country" placeholder="请选择" />
          </el-col>
          <el-col v-if="form.role === 2" :span="12">
            <el-date-picker
              v-model="form.time"
              type="datetimerange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-col>
        </el-row>
      </ElFormItem>
      <ElFormItem label="租户状态" prop="active">
        <el-switch
          v-model="form.active"
          inline-prompt
          active-text="开启"
          inactive-text="关闭"
        />
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style lang="scss" scoped>
// scss
</style>
