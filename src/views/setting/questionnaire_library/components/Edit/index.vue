<script setup lang="ts">
import { ElMessage } from 'element-plus'
import api from '@/api/modules/setting_questionnaireLibrary'
import useCountryStore from '@/store/modules/country'

// 父级传递数据
const props = defineProps(['id', 'row'])
// 更新
const emits = defineEmits<{
  success: []
}>()
// 国家
const countryStore = useCountryStore()
// loading
const loading = ref(false)
// 关闭弹框
const visible = defineModel<boolean>({
  default: false,
})
// 存国家数据
const country = ref<any>([])
const formRef = ref<any>()
// 定义表单
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
  loading.value = true
  // 获取国家数据
  country.value = await countryStore.getCountry
  loading.value = false
})
const title = computed(() => {
  // 默认form为空
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  form.value = {}
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
        loading.value = true
        const { status } = await api.create(form.value)
        status === 1
        && ElMessage.success({
          message: '新增成功',
          center: true,
        })
        loading.value = false
        onCancel()
        emits('success')
      }
    })
  }
  else {
    // 编辑
    formRef.value && formRef.value.validate(async (valid: any) => {
      if (valid) {
        loading.value = true
        const { status } = await api.edit(form.value)
        status === 1
        && ElMessage.success({
          message: '编辑成功',
          center: true,
        })
        loading.value = false
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
  <div v-loading="loading">
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
