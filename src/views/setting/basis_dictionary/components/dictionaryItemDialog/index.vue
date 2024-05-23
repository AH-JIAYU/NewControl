<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import apiDictionary from '@/api/modules/setting_basisDictionary'
// 父级传递的数据
const props = withDefaults(
  defineProps<{
    dictionaryId: string | number
    id?: string | number
    tree: any[]
    row: string
  }>(),
  {
    dictionaryId: '',
    id: '',
  },
)
// 更新数据
const emits = defineEmits<{
  success: []
}>()

const visible = defineModel<boolean>({
  default: false,
})
// 弹窗标题
const title = computed(() => props.id === '' ? '新增字典项' : '编辑字典项')

const formRef = ref<FormInstance>()
// 表单
const form = ref({
  id: props.id,
  parentId: null, // 父id
  catalogueId: props.dictionaryId, // 目录id
  englishName: '', // 英文名称
  chineseName: '', // 中文名称
  code: '', // 编码
  remark: '', // 备注
})
// 校验
const formRules = ref<FormRules>({
  catalogueId: [
    { required: true, message: '请选择所属字典' },
  ],
  chineseName: [
    { required: true, message: '请输入字典项名称' },
  ],
  englishName: [
    { required: true, message: '请输入字典项英文名称' },
  ],
  code: [
    { required: true, message: '请输入字典项键值' },
  ],
})
onMounted(() => {
  if (props.id !== '') {
    const { englishName, chineseName, catalogueId, code } = JSON.parse(props.row)
    form.value.catalogueId = catalogueId
    form.value.chineseName = chineseName
    form.value.englishName = englishName
    form.value.code = code
  }
})
// 提交数据
function onSubmit() {
  if (form.value.id === '') {
    formRef.value && formRef.value.validate((valid) => {
      if (valid) {
        apiDictionary.itemCreate(form.value).then(() => {
          ElMessage.success({
            message: '新增成功',
            center: true,
          })
          emits('success')
          onCancel()
        })
      }
    })
  }
  else {
    formRef.value && formRef.value.validate((valid) => {
      if (valid) {
        apiDictionary.itemEdit(form.value).then(() => {
          ElMessage.success({
            message: '编辑成功',
            center: true,
          })
          emits('success')
          onCancel()
        })
      }
    })
  }
}
// 关闭弹框
function onCancel() {
  visible.value = false
}
</script>

<template>
  <ElDialog v-model="visible" :title="title" width="400px" :close-on-click-modal="false" append-to-body destroy-on-close @closed="onCancel">
    <ElForm ref="formRef" :model="form" :rules="formRules" label-width="100px">
      <ElFormItem label="所属字典">
        <ElCascader v-model="form.catalogueId" :options="tree" :props="{ value: 'id', label: 'chineseName', emitPath: false, checkStrictly: true }" :show-all-levels="false" placeholder="请选择所属字典" />
      </ElFormItem>
      <ElFormItem label="字典项名称" prop="chineseName">
        <ElInput v-model="form.chineseName" placeholder="请输入字典项名称" clearable />
      </ElFormItem>
      <ElFormItem label="英文名称" prop="englishName">
        <ElInput v-model="form.englishName" placeholder="请输入字典项名称" clearable />
      </ElFormItem>
      <ElFormItem label="字典项键值" prop="code">
        <ElInput v-model="form.code" placeholder="请输入字典项键值" clearable />
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
</template>

<style lang="scss" scoped>
:deep(.el-cascader) {
  width: 100%;
}
</style>
