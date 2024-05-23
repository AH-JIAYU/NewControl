<!-- eslint-disable prefer-promise-reject-errors -->
<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import Edit from '../Edit/index.vue'
import api from '@/api/modules/tenant_tenantPermission'
// 父级传递数据
const props = defineProps(['id', 'auths', 'menulev'])
// 校验
const formRules = ref<any>({
  menu: [{ required: true, message: '请选择路由地址', trigger: 'blur' }],
  type: [{ required: true, message: '请选择类型', trigger: 'blur' }],
  name: [{ required: true, message: '请输入key标识', trigger: 'blur' }],
  label: [{ required: true, message: '请输入名称', trigger: 'blur' }],
})

const loading = ref(false)
const formRef = ref<FormInstance>()
const authsTableRef = ref<any>()
const EditProps = ref<any>({
  // 组件数据
  visible: false,
  id: '',
  path: '',
  keys: [],
  row: {},
})
const success = inject<any>('success')
const form = ref<any>({
  id: props.id,
  menulev: props.menulev, // 路由等级
  title: '',
  flat: false, // 判断添加还是编辑接口
  menu: '', // 选择路由
  data: [], // 权限数组
  menuData: [], // 全部路由
  choiceMenuData: [], // 展示的选择路由
})
onMounted(async () => {
  if (form.value.id !== '') {
    getInfo()
  }
})
watch(
  () => props.auths,
  (newValue: any) => {
    form.value.data = JSON.parse(newValue)
  },
  {
    deep: true,
  },
)
function getInfo() {
  loading.value = true
  form.value.data = JSON.parse(props.auths)
  // form.value.menu = props.path
  form.value.flat = !!form.value.data.length // 数组为空 确定时走添加接口
  loading.value = false
}

function onEdit(row: any) {
  EditProps.value.id = row.id
  EditProps.value.row = JSON.stringify(row)
  EditProps.value.visible = true
}
function onDel(row: any) {
  ElMessageBox.confirm(`确认删除「${row.label}」吗？`, '确认信息')
    .then(() => {
      loading.value = true
      api.delete(row.id).then(() => {
        ElMessage.success({
          message: '删除成功',
          center: true,
        })
        success() // 祖先组件提供的success
        loading.value = false
      })
    })
    .catch(() => {})
}
</script>

<template>
  <div v-loading="loading">
    <ElForm
      ref="formRef"
      :rules="formRules"
      :model="form"
      label-width="120px"
      label-suffix="："
    >
      <ElTable
        ref="authsTableRef"
        :key="id"
        :data="form.data"
        stripe
        highlight-current-row
        border
      >
        <ElTableColumn label="类型" align="center" prop="type">
          <template #default="scope">
            <ElFormItem
              :prop="`data.${scope.$index}.type`"
              :rules="formRules.type"
            >
              <el-radio-group v-model="scope.row.type" disabled>
                <el-radio-button value="get" label="get">
                  读
                </el-radio-button>
                <el-radio-button value="insert" label="insert">
                  写
                </el-radio-button>
                <el-radio-button value="update" label="update">
                  改
                </el-radio-button>
                <el-radio-button value="delete" label="delete">
                  删
                </el-radio-button>
              </el-radio-group>
            </ElFormItem>
          </template>
        </ElTableColumn>
        <ElTableColumn label="权限KEY" prop="name" />
        <ElTableColumn label="对应接口" prop="key" />
        <ElTableColumn label="名称" prop="label" />
        <ElTableColumn label="名称">
          <template #default="scope">
            <ElButton
              type="primary"
              size="small"
              plain
              @click="onEdit(scope.row)"
            >
              编辑
            </ElButton>
            <ElButton
              type="danger"
              size="small"
              plain
              @click="onDel(scope.row)"
            >
              删除
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
    </ElForm>
    <Edit
      v-if="EditProps.visible"
      :id="EditProps.id"
      v-model="EditProps.visible"
      :menulev="props.menulev"
      :row="EditProps.row"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep {
  .el-form-item__content {
    margin: 0 !important;
  }

  .el-radio-button__original-radio:disabled:checked + .el-radio-button__inner {
    background-color: #c3e0fd !important;
  }
}
</style>
