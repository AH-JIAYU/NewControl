<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import apiUser from '@/api/modules/setting_user'
// 父级传递数据
const props = defineProps(['id', 'row'])

const loading = ref(false)
const formRef = ref<FormInstance>()
const form = ref<any>({
  id: '',
  account: '', // 账号
  name: '', // 昵称
  password: '', // 密码
  confirmPassword: '', // 密码
  phoneNumber: null, // 手机号
  sex: 2, // 性别
})

// 校验
const formRules = ref<FormRules>({
  account: [
    { required: true, message: '请输入帐号', trigger: 'blur' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== form.value.password) {
          callback(new Error('两次输入的密码不一致'))
        }
        else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  phoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        const params: Record<string, any> & {
          key: string
          value: string
        } = {
          key: 'phoneNumber',
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
  if (props.id) {
    form.value = JSON.parse(props.row)
  }
})
// 暴露方法
defineExpose({
  submit() {
    return new Promise<void>((resolve) => {
      if (form.value.id === '') {
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            apiUser.create(form.value).then(() => {
              ElMessage.success({
                message: '新增成功',
                center: true,
              })
              onCancel()
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
                message: '编辑成功',
                center: true,
              })
              onCancel()
              resolve()
            })
          }
        })
      }
    })
  }, onCancel,
})
// 关闭弹框
function onCancel() {
  form.value = {}
}
</script>

<template>
  <div v-loading="loading">
    <ElForm ref="formRef" :model="form" :rules="formRules" label-width="130px" label-suffix="：">
      <ElFormItem label="帐号" prop="account">
        <ElInput v-model="form.account" placeholder="请输入帐号" />
      </ElFormItem>
      <ElFormItem label="密码" prop="password">
        <ElInput v-model="form.password" placeholder="请输入帐号" />
      </ElFormItem>
      <ElFormItem v-if="form.id" label="确认修改密码" prop="confirmPassword">
        <ElInput v-model="form.confirmPassword" placeholder="请再次输入密码" />
      </ElFormItem>
      <ElFormItem label="姓名" prop="name">
        <ElInput v-model="form.name" placeholder="请输入姓名" />
      </ElFormItem>
      <ElFormItem label="手机号" prop="phoneNumber">
        <ElInput v-model.number="form.phoneNumber" placeholder="请输入手机号" />
      </ElFormItem>
      <ElFormItem label="性别" prop="sex">
        <ElRadioGroup v-model="form.sex">
          <ElRadioButton :label="2">
            保密
          </ElRadioButton>
          <ElRadioButton :label="1">
            男
          </ElRadioButton>
          <ElRadioButton :label="0">
            女
          </ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>
    </ElForm>
  </div>
</template>
