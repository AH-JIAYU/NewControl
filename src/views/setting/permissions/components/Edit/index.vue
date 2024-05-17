<script setup lang="ts">
import { ElForm, ElMessage, ElMessageBox } from 'element-plus'
import api from '@/api/modules/setting_permissions'
import useRouteStore from '@/store/modules/route'

// 路由 store
const props = defineProps(['id', 'path', 'keys', 'row', 'menulev'])
const emits = defineEmits(['success'])
const routeStore = useRouteStore()
const success = inject<any>('success')
const formRef = ref<any>() // form ref
const form = ref<any>({
  menulev: props.menulev, // 父级路由等级
  keys: props.keys || [],
  menuData: [], // 全部路由
  choiceMenuData: [], // 展示的选择路由
  queryForm: {
    id: props.id || '',
  }, // 最后传输的数据 载荷
})
const formRules = ref<any>({
  menu: [{ required: true, message: '请选择路由地址', trigger: 'blur' }],
  type: [{ required: true, message: '请选择类型', trigger: 'blur' }],
  name: [{ required: true, message: '请输入key标识', trigger: 'blur' }],
  label: [{ required: true, message: '请输入名称', trigger: 'blur' }],
})

const visible: any = defineModel({
  default: false,
})

const title = computed(() => (props.id === '' ? '新增权限' : '编辑权限'))

const munulevs = ref([
  // 路由等级  1，2级路由不需要控制按钮权限
  {
    value: 3,
    label: '三级导航',
  },
  {
    value: 4,
    label: '内置页面',
  },
])
// 函数查找具有特定menulev的所有项目
function findItemsByLevel(data: any, level: number) {
  const results: any[] = []
  function recurse(items: any) {
    // 确保 items 是数组
    if (!Array.isArray(items)) {
      return
    }
    for (const item of items) {
      if (item.menuLevel === level) {
        results.push(item)
      }
      if (Array.isArray(item.children)) {
        recurse(item.children)
      }
    }
  }
  recurse(data)
  return results
}
// 选择父级分类Select the parent project ID
function selectparentid(menulev: any) {
  if (menulev === 1) {
    form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 1)
  }
  else if (menulev === 2) {
    form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 2)
  }
  else if (menulev === 3) {
    form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 3)
  }
  else {
    form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 4)
  }
}
// 选择路由改变时拿到当前路由的row
function rowKey(value: any) {
  const data = form.value.choiceMenuData.find(
    (item: any) => item.path === value,
  )
  form.value.keys = data.key // 获取接口的数组
  form.value.queryForm.menuId = data.id // 设置路由id
}
// 提交
function onSubmit() {
  form.value.queryForm.permission = `${form.value.queryForm.menu}-${form.value.queryForm.type}-${form.value.queryForm.name}`
  if (!form.value.queryForm.id) {
    formRef.value.validate((valid: any) => {
      if (valid) {
        api.create(form.value.queryForm).then(() => {
          ElMessage.success({
            message: '新增成功',
            center: true,
          })
          emits('success') // 新增时 是通过list.value 打开的直接调用父传子的方法
          onCancel()
        })
      }
    })
  }
  else {
    formRef.value
    && formRef.value.validate((valid: any) => {
      if (valid) {
        api.edit(form.value.queryForm).then(() => {
          ElMessage.success({
            message: '编辑成功',
            center: true,
          })
          success() // 新增时 祖先通信 通过provide和inject
          onCancel()
        })
      }
    })
  }
}

onMounted(async () => {
  if (form.value.queryForm.id !== '') {
    form.value.queryForm = JSON.parse(props.row)
  }
  form.value.menuData = routeStore.routesRaw // 从store获取原始路由
  form.value.choiceMenuData = findItemsByLevel(
    form.value.menuData,
    form.value.menulev,
  ) // 筛选路由
})
function onCancel() {
  visible.value = false
}
</script>

<template>
  <div>
    <ElDialog
      v-model="visible" :title="title" width="60%" :close-on-click-modal="false" append-to-body
      destroy-on-close
    >
      <ElForm
        ref="formRef" :inline="true" :rules="formRules" :model="form.queryForm" label-width="120px"
        label-suffix=":"
      >
        <ElFormItem label="路由等级">
          <el-select v-model="form.menulev" :disabled="!!form.id" placeholder="Select" @change="selectparentid">
            <el-option v-for="item in munulevs" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </ElFormItem>
        <ElFormItem label="选择路由" prop="menu">
          <ElSelect v-model="form.queryForm.menu" :disabled="!!form.id" placeholder="选择路由" @change="rowKey">
            <el-option v-for="item in form.choiceMenuData" :key="item.id" :label="item.meta.title" :value="item.path">
              <span style="float: left;">{{ item.meta.title }}</span>
              <span
                style="
                float: right;
                font-size: 13px;
                color: var(--el-text-color-secondary);
"
              >
                {{ item.name }}
              </span>
            </el-option>
          </ElSelect>
        </ElFormItem>

        <ElFormItem label="类型" prop="type">
          <el-radio-group v-model="form.queryForm.type">
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
        <ElFormItem label="对应接口">
          <el-select v-model="form.queryForm.key" :disabled="!!form.id" placeholder="Select" @change="selectparentid">
            <el-option v-for="item in form.keys" :key="item" :label="item" :value="item" />
          </el-select>
        </ElFormItem>
        <ElFormItem label="权限KEY" prop="name">
          <ElInput v-model="form.queryForm.name" />
        </ElFormItem>
        <ElFormItem label="名称" prop="label">
          <ElInput v-model="form.queryForm.label" />
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

<style lang="scss" scoped>
.el-select {
  width: 192px;
}
</style>
