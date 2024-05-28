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
const banben = [
  {
    lable: '专业版', value: 1,
  },
  {
    lable: '企业版', value: 2,
  },
  {
    lable: '基础版', value: 3,
  },
]
const password = '创建完成后，请告知用户初始密码：123456'
// 加载
const loading = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  id: props.id,
  tenantName: '', // 用户名
  country: '', // 国家
  phoneNumber: '', // 手机号码
  email: '', // 邮箱
  role: 1, // 按角色
  version: '', // 按版本
  time: '', // 时间
  active: true, // 租户状态
})
// 校验
const formRules = ref<FormRules>({
  tenantName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  country: [
    { required: true, message: '请选择国家', trigger: 'blur' },
  ],
})

onMounted(() => {
  if (form.value.id !== '') {
    getInfo()
  }
})
function getInfo() {
  loading.value = true
  api.detail(form.value.id).then(() => {
    loading.value = false
  })
}
// 暴露
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
      <ElFormItem label="用户名" prop="tenantName">
        <ElInput v-model="form.tenantName" placeholder="请输入用户名" />
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
      <ElFormItem label="初始密码" prop="password">
        <ElInput v-model="password" disabled placeholder="请输入登录密码" />
      </ElFormItem>
      <ElFormItem label="版本分配" prop="role">
        <el-select v-model="form.version" placeholder="请选择版本">
          <el-option v-for="item in banben" :key="item.value" :label="item.lable" :value="item.value">
            {{ item.lable }}
          </el-option>
        </el-select>
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
