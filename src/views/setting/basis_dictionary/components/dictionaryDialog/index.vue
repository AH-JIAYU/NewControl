<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import apiDictionary from '@/api/modules/setting_basisDictionary'
// 父级传递的数据
const props = withDefaults(
  defineProps<{
    parentId?: string | number
    id?: string | number
    tree: any[]
    row: string
  }>(),
  {
    parentId: '',
    id: '',
  },
)
// 更新数据
const emits = defineEmits<{
  addNode: [
    node: {
      id: string | number
      label: string
      code: string
    },
  ]
  editNode: [
    node: {
      id: string | number
      label: string
      code: string
    },
    parentId: string | number,
  ]
}>()

const visible = defineModel<boolean>({
  default: false,
})
// 弹窗标题
const title = computed(() => props.id === '' ? '新增字典' : '编辑字典')
function formatTree(tree: any[], id: string | number, childrenDisabled = false) {
  const data: any[] = []
  if (tree) {
    tree.forEach((item) => {
      const temp = { ...item }
      if (temp.id === id || childrenDisabled) {
        temp.disabled = true
        if (temp.children) {
          temp.children = formatTree(temp.children, id, true)
        }
      }
      else {
        temp.disabled = false
        if (temp.children) {
          temp.children = formatTree(temp.children, id, childrenDisabled)
        }
      }
      data.push(temp)
    })
  }

  return data
}
const myTree = computed(() => formatTree(props.tree, props.id))

const formRef = ref<FormInstance>()
// 表单
const form = ref({
  catalogueId: props.parentId,
  id: props.id,
  englishName: '',
  chineseName: '',
  remark: '',
})
// 校验
const formRules = ref<FormRules>({
  chineseName: [
    { required: true, message: '请输入字典名称' },
  ],
  englishName: [
    { required: true, message: '请输入字典编码' },
  ],
})

onMounted(() => {
  if (props.id !== '') {
    const { id, englishName, chineseName } = JSON.parse(props.row)
    form.value.id = id
    form.value.chineseName = chineseName
    form.value.englishName = englishName
  }
})
// 提交数据
function onSubmit() {
  if (form.value.id === '') {
    formRef.value && formRef.value.validate((valid) => {
      if (valid) {
        apiDictionary.create(form.value).then(() => {
          ElMessage.success({
            message: '新增成功',
            center: true,
          })
          emits('addNode', {
            id: form.value.id,
            label: form.value.chineseName,
            code: form.value.englishName,
          })
          onCancel()
        })
      }
    })
  }
  else {
    formRef.value && formRef.value.validate((valid) => {
      if (valid) {
        apiDictionary.edit(form.value).then(() => {
          ElMessage.success({
            message: '编辑成功',
            center: true,
          })
          emits('editNode', {
            id: form.value.id,
            label: form.value.chineseName,
            code: form.value.englishName,
          }, form.value.catalogueId)
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
    <ElForm ref="formRef" :model="form" :rules="formRules" label-width="80px">
      <ElFormItem label="父级字典" prop="parentId">
        <ElCascader v-model="form.catalogueId" :options="myTree" :props="{ value: 'id', label: 'name', emitPath: false, checkStrictly: true }" :show-all-levels="false" placeholder="请选择父级字典，默认为根字典" clearable />
      </ElFormItem>
      <ElFormItem label="字典名称" prop="chineseName">
        <ElInput v-model="form.chineseName" placeholder="请输入字典名称" clearable />
      </ElFormItem>
      <ElFormItem label="字典编码" prop="englishName">
        <ElInput v-model="form.englishName" placeholder="请输入字典编码" clearable />
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
