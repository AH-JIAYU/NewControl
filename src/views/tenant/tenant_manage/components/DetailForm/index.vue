<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { DetailFormProps } from '../../types'
import api from '@/api/modules/tenant_tenantManage'
import useCountryStore from '@/store/modules/country'
import useVersionStore from '@/store/modules/version'

const props = withDefaults(
  defineProps<DetailFormProps>(),
  {
    id: '',
  },
)
// 国家
const countryStore = useCountryStore()
// 版本
const versionStore = useVersionStore()
const password = '创建完成后，请告知用户初始密码：123456'
// 加载
const loading = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  id: props.id,
  name: '', // 用户名
  country: '', // 国家
  phoneNumber: '', // 手机号码
  email: '', // 邮箱
  version: '', // 按版本
  active: 1, // 租户状态
  registerType: 'phone', // 注册方式
})
// 国家
const country = ref<any>([])
const version = ref<any>([])
// 校验
const formRules = ref<FormRules>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  country: [
    { required: true, message: '请选择国家', trigger: 'blur' },
  ],
})

onMounted(async () => {
  loading.value = true
  country.value = await countryStore.getCountry
  version.value = await versionStore.getVersion
  loading.value = false
})
// 暴露
defineExpose({
  submit() {
    return new Promise<void>((resolve) => {
      if (form.value.id === '') {
        formRef.value && formRef.value.validate((valid) => {
          form.value.registerType = form.value.country === '343' ? 'phone' : 'email'
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
      <ElFormItem label="用户名" prop="name">
        <ElInput v-model="form.name" placeholder="请输入用户名" />
      </ElFormItem>
      <ElFormItem label="国家" prop="country">
        <el-select v-model="form.country" value-key="" placeholder="请选择国家" clearable filterable>
          <el-option
            v-for="item in country.records"
            :key="item.id"
            :label="item.chineseName"
            :value="item.id"
          />
        </el-select>
      </ElFormItem>
      <ElFormItem v-if="form.country === '343'" label="手机号码" prop="phoneNumber">
        <ElInput v-model="form.phoneNumber" placeholder="请输入手机号码" />
      </ElFormItem>
      <ElFormItem v-if="form.country !== '343'" label="电子邮箱" prop="email">
        <ElInput v-model="form.email" placeholder="请输入电子邮箱" />
      </ElFormItem>
      <ElFormItem label="初始密码" prop="password">
        <ElInput v-model="password" disabled placeholder="请输入登录密码" />
      </ElFormItem>
      <ElFormItem label="版本分配" prop="role">
        <el-select v-model="form.version" placeholder="请选择版本">
          <el-option v-for="item in version" :key="item.id" :label="item.name" :value="item.code" />
        </el-select>
      </ElFormItem>
      <ElFormItem label="租户状态" prop="active">
        <el-switch
          v-model="form.active"
          inline-prompt
          active-text="开启"
          inactive-text="关闭"
          :active-value="1"
          :inactive-value="2"
        />
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style lang="scss" scoped>
// scss
</style>
