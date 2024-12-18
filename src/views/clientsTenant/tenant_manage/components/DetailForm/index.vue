<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import api from '@/api/modules/tenant_tenantManage'
import useCountryStore from '@/store/modules/country'
import useVersionStore from '@/store/modules/version'

// 父级传递数据
const props = defineProps(['id', 'row'])
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
  // 用户名
  name: '',
  // 密码
  password: '123456',
  // 国家
  country: '',
  // 公司名称
  companyName: '',
  // 税号
  taxID: '',
  // 法人姓名
  legalPersonName: '',
  // 手机号码
  phone: '',
  // 邮箱
  email: '',
  // 按版本
  version: '',
  // 租户状态
  active: 1,
  // 注册方式
  registerType: 'phone',
  // 账户类型
  type: 'company',
})
// 编辑判断禁用
const type = JSON.parse(props.row)
// 国家
const country = ref<any>([])
// 版本
const version = ref<any>([])
// 校验
const formRules = ref<FormRules>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  companyName: [
    { required: true, message: '请输入公司名称', trigger: 'blur' },
  ],
  country: [
    { required: true, message: '请选择国家', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
  type: [
    { required: true, message: '请选择账户类型', trigger: 'blur' },
  ],
})

onMounted(async () => {
  loading.value = true
  country.value = await countryStore.getCountry
  version.value = await versionStore.getVersion
  if (props.id) {
    form.value = JSON.parse(props.row)
  }
  // 账号类型全部是公司了，后面没给字段，产品说保留这个字段以防再出问题
  form.value.type="company"
  loading.value = false
})
function selectChange() {
  form.value.registerType = form.value.country === 'CN' ? 'phone' : 'email'
}
// 暴露
defineExpose({
  submit() {
    return new Promise<void>((resolve) => {
      if (form.value.id === '') {
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            loading.value = true
            delete form.value.id
            api.create(form.value).then((res) => {
              const { status, error }: any = res
              ElMessage({
                type: status === 1 ? 'success' : 'warning',
                message: status === 1 ? '新增成功' : error,
                center: true,
              })
              loading.value = false
              resolve()
            })
          }
        })
      }
      else {
        const { active, phone, email, id } = form.value
        const params = { active, phone, email, id }
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            loading.value = true
            api.edit(params).then((res) => {
              const { status, error }: any = res
              ElMessage({
                type: status === 1 ? 'success' : 'warning',
                message: status === 1 ? '编辑成功' : error,
                center: true,
              })
              loading.value = false
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
      <ElFormItem label="账户类型" prop="">
        <el-text>公司</el-text>
        <!-- <el-radio-group v-model="form.type" class="ml-4">
          <el-radio value="personal">
            个人
          </el-radio>
          <el-radio value="company">
            公司
          </el-radio>
        </el-radio-group> -->
      </ElFormItem>
      <ElFormItem label="用户名" prop="name">
        <ElInput v-model="form.name" :disabled="type.id" placeholder="请输入用户名" />
      </ElFormItem>
      <ElFormItem label="国家" prop="country">
        <el-select v-model="form.country" :disabled="type.id" value-key="" placeholder="请选择国家" clearable filterable>
          <el-option v-for="item in country" :key="item.id" :label="item.chineseName" :value="item.code" />
        </el-select>
      </ElFormItem>
      <ElFormItem v-if="form.type === 'company'" label="公司名称" prop="companyName">
        <ElInput v-model="form.companyName" :disabled="type.id" placeholder="请输入公司名称" />
      </ElFormItem>
      <ElFormItem v-if="form.type === 'company'" label="公司税号" >
        <ElInput v-model="form.taxID" :disabled="type.id" placeholder="请输入公司税号" />
      </ElFormItem>
      <ElFormItem v-if="form.type === 'company'" label="法人姓名" >
        <ElInput v-model="form.legalPersonName" :disabled="type.id" placeholder="请输入法人姓名" />
      </ElFormItem>
      <ElFormItem v-if="form.country === 'CN'" label="手机号码" prop="phone">
        <ElInput v-model="form.phone" placeholder="请输入手机号码" />
      </ElFormItem>
      <ElFormItem v-if="form.country !== 'CN'" label="电子邮箱" prop="email">
        <ElInput v-model="form.email" placeholder="请输入电子邮箱" />
      </ElFormItem>
      <ElFormItem label="初始密码" prop="password">
        <ElInput v-model="password" disabled placeholder="请输入登录密码" />
      </ElFormItem>
      <ElFormItem label="版本分配" prop="version">
        <el-select v-model="form.version" :disabled="type.id" placeholder="请选择版本" @change="selectChange">
          <el-option v-for="item in version" :key="item.id" :label="item.name" :value="item.code" />
        </el-select>
      </ElFormItem>
      <ElFormItem label="租户状态" prop="active">
        <el-switch v-model="form.active" inline-prompt active-text="开启" inactive-text="关闭" :active-value="2"
          :inactive-value="1" />
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style lang="scss" scoped>
// scss</style>
