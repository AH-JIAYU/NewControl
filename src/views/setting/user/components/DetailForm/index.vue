<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { DetailFormProps } from '../../types'
import apiUser from '@/api/modules/setting_user'
import apiRole from '@/api/modules/setting_role'

const props = withDefaults(
  defineProps<DetailFormProps>(),
  {
    id: '',
  },
)

const roleList = ref<any>([])
const loading = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  id: props.id,
  account: '',
  name: '',
  mobile: '',
  sex: '2',
  role_id: '',
})
// 校验
const formRules = ref<FormRules>({
  account: [
    { required: true, message: '请输入帐号', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        const params: Record<string, any> & {
          key: string
          value: string
        } = {
          key: 'mobile',
          value,
        }
        if (form.value.id !== '') {
          params.id = form.value.id
        }
        apiUser.check(params).then((res: any) => {
          if (res.data.exist) {
            callback(new Error('手机号已存在'))
          }
          else {
            callback()
          }
        })
      },
      trigger: 'blur',
    },
  ],
})

onMounted(() => {
  apiRole.list().then((res: any) => { // 获取角色列表
    roleList.value = res.data.list
  })
  if (form.value.id !== '') {
    getInfo()
  }
})
// 获取数据
function getInfo() {
  loading.value = true
  apiUser.detail(form.value.id).then((res: any) => {
    loading.value = false
    form.value.account = res.data.account
    form.value.name = res.data.name
    form.value.mobile = res.data.mobile
  })
}
// 暴露方法
defineExpose({
  submit() {
    return new Promise<void>((resolve) => {
      if (form.value.id === '') {
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            apiUser.create(form.value).then(() => {
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
            apiUser.edit(form.value).then(() => {
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
      <ElFormItem label="帐号" prop="account">
        <ElInput v-model="form.account" placeholder="请输入帐号" />
      </ElFormItem>
      <ElFormItem label="姓名" prop="name">
        <ElInput v-model="form.name" placeholder="请输入姓名" />
      </ElFormItem>
      <ElFormItem label="手机号" prop="mobile">
        <ElInput v-model="form.mobile" placeholder="请输入手机号" />
      </ElFormItem>
      <ElFormItem label="性别" prop="sex">
        <ElRadioGroup v-model="form.sex">
          <ElRadioButton label="2">
            保密
          </ElRadioButton>
          <ElRadioButton label="1">
            男
          </ElRadioButton>
          <ElRadioButton label="0">
            女
          </ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem label="角色" prop="role_id">
        <ElSelect v-model="form.role_id" placeholder="请选择角色" clearable>
          <ElOption v-for="item in roleList" :key="item.id" :label="item.role" :value="item.id" />
        </ElSelect>
      </ElFormItem>
    </ElForm>
  </div>
</template>
