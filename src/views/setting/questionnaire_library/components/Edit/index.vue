<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { DetailFormProps } from '../../types'
import api from '@/api/modules/setting_questionnaireLibrary'
import useCountryStore from '@/store/modules/country'
// 父级传递数据
const props = defineProps(['id', 'row'])
// 更新
const emits = defineEmits<{
  success: []
}>()
const countryStore = useCountryStore()
// 关闭弹框
const visible = defineModel<boolean>({
  default: false,
})
const country = ref<any>([])
const formRef = ref<any>()
const form = ref<any>({
  categoryName: '',
  countryId: null,
  status: 2,
})
// 校验
const formRules = ref<any>({
  categoryName: [{ required: true, message: '请输入问卷名称', trigger: 'blur' }],
  countryId: [{ required: true, message: '请选择国家', trigger: 'blur' }],
})
onMounted(async () => {
  country.value = await countryStore.getCountry
})
const title = computed(() => {
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  form.value = {} // 默认form为空
  // 有id form为row
  if (props.id) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    form.value = JSON.parse(props.row)
  }
  return props.id === '' ? '新增' : '编辑'
})

// 提交
async function onSubmit() {
  if (!props.id) {
    // 新增
    formRef.value && formRef.value.validate(async (valid: any) => {
      if (valid) {
        form.value.countryId = Number.parseInt(form.value.countryId)
        const { status } = await api.create(form.value)
        status === 1
        && ElMessage.success({
          message: '新增成功',
          center: true,
        })
        onCancel()
        emits('success')
      }
    })
  }
  else {
    // 编辑
    formRef.value && formRef.value.validate(async (valid: any) => {
      if (valid) {
        const { status } = await api.edit(form.value)
        status === 1
        && ElMessage.success({
          message: '编辑成功',
          center: true,
        })
        onCancel()
        emits('success')
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
  <div>
    <ElDialog
      v-model="visible"
      :title="title"
      width="50%"
      :close-on-click-modal="false"
      append-to-body
      destroy-on-close
    >
      <ElForm
        ref="formRef"
        :model="form"
        :rules="formRules"
        label-width="120px"
        label-suffix="："
      >
        <ElFormItem label="名称" prop="categoryName">
          <ElInput v-model="form.categoryName" placeholder="请输入名称" />
        </ElFormItem>
        <ElFormItem label="国家" prop="countryId">
          <el-select v-model="form.countryId" value-key="" placeholder="请选择国家" clearable filterable>
            <el-option
              v-for="item in country"
              :key="item.id"
              :label="item.chineseName"
              :value="item.id"
            />
          </el-select>
        </ElFormItem>
        <ElFormItem label="状态">
          <ElSwitch
            v-model="form.status"
            :active-value="1"
            :inactive-value="2"
            inline-prompt
            active-text="开启"
            inactive-text="禁用"
            placeholder="请输入状态"
          />
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
