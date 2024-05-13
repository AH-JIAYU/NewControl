<script setup lang="ts">
import Sortable from 'sortablejs'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { DetailFormProps } from '../../types'
import api from '@/api/modules/setting_permissions'
import menuapi from '@/api/modules/menu'
import useMenuStore from '@/store/modules/menu'

const props = defineProps(['id', 'menulev'])
const formRules = ref<any>({
  menu: [
    { required: true, message: '请选择路由地址', trigger: 'blur' },
  ],
})
// const menuStore = useMenuStore() // 路由store
const loading = ref(false)
const formRef = ref<FormInstance>()
const authsTableRef = ref<any>()
const authsTableKey = ref(0)
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
const munulevs = ref([// 路由等级
  {
    value: 1,
    label: '一级导航',
  }, {
    value: 2,
    label: '二级导航',
  },
  {
    value: 3,
    label: '三级导航',
  },
  {
    value: 4,
    label: '内置页面',
  }])
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
// 拖拽
function onAuthDarg() {
  const tbody = authsTableRef.value.$el.querySelector('.el-table__body-wrapper tbody')
  Sortable.create(tbody, {
    handle: '.sortable',
    animation: 300,
    ghostClass: 'ghost',
    onEnd: ({ newIndex, oldIndex }) => {
      if (newIndex === undefined || oldIndex === undefined) {
        return
      }
      const currRow = form.value.data.splice(oldIndex, 1)[0]
      form.value.data.splice(newIndex, 0, currRow)
      authsTableKey.value += 1
      nextTick(() => onAuthDarg())
    },
  })
}
onMounted(async () => {
  onAuthDarg()// 拖拽
  // form.value.menuData = menuStore.allMenus // 获取store的路由 不带路由层级
  const res = await menuapi.list({ type: 'normal' })
  form.value.menuData = res.data
  form.value.choiceMenuData = findItemsByLevel(form.value.menuData, form.value.menulev)
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  form.value.data = [{ // 后期换接口
    menu: 'multilevel_menu_example', // 路由name 唯一
    type: 'write', // 类型
    label: '新增按钮', // 备注
    name: 'cs', // key
    id: '1',
    permission: 'multilevel_menu_example-write-cs',
  },
  {
    menu: 'multilevel_menu_example',
    type: 'edit', // 类型
    label: '编辑按钮', // 备注
    name: 'cs2', // key
    id: '2',
    permission: 'multilevel_menu_example-create-cs2',
  }]
  form.value.flat = !!form.value.data.length
  loading.value = false
}

function onAuthAdd() {
  form.value.data.push({
    name: '',
    value: '',
  })
  nextTick(() => {
    authsTableRef.value.setScrollTop(form.value.data.length * 50)
  })
}

function onAuthDelete(index: number) {
  form.value.data.splice(index, 1)
}

defineExpose({
  submit() {
    form.value.data.forEach((item: any) => {
      item.menu = form.value.menu
      item.permission = `${form.value.menu}-${item.type}-${item.name}`
    })
    return new Promise<void>((resolve) => {
      if (!form.value.flat) {
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            api.create(form.value.data).then(() => {
              ElMessage.success({
                message: '1模拟新增成功',
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
            api.edit(form.value.data).then(() => {
              ElMessage.success({
                message: '1模拟编辑成功',
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
    <ElForm ref="formRef" :rules="formRules" :model="form" label-width="120px" label-suffix="：">
      <ElFormItem label="路由等级">
        <el-select
          v-model="form.menulev" placeholder="Select" size="large" style="width: 240px;"
          @change="selectparentid"
        >
          <el-option v-for="item in munulevs" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </ElFormItem>
      <ElFormItem label="选择路由" prop="menu">
        <ElSelect v-model="form.menu" placeholder="选择路由">
          <el-option v-for="item in form.choiceMenuData" :key="item.id" :label="item.meta.title" :value="item.path" />
        </ElSelect>
      </ElFormItem>
      <ElTable ref="authsTableRef" :key="id" :data="form.data" stripe highlight-current-row border>
        <ElTableColumn width="60" align="center" fixed>
          <template #header>
            <ElButton type="primary" size="small" circle plain @click="onAuthAdd">
              <template #icon>
                <SvgIcon name="i-ep:plus" />
              </template>
            </ElButton>
          </template>
          <template #default="scope">
            <span class="index">{{ scope.$index + 1 }}</span>
            <ElButton type="danger" size="small" plain circle class="delete" @click="onAuthDelete(scope.$index)">
              <template #icon>
                <SvgIcon name="i-ep:delete" />
              </template>
            </ElButton>
          </template>
        </ElTableColumn>
        <ElTableColumn width="80" align="center" fixed>
          <template #header>
            排序
          </template>
          <template #default>
            <ElTag type="info" class="sortable">
              <SvgIcon name="i-ep:d-caret" />
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="类型" align="center">
          <template #default="scope">
            <el-radio-group v-model="scope.row.type">
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
          </template>
        </ElTableColumn>
        <ElTableColumn label="权限KEY">
          <template #default="scope">
            <ElInput v-model="scope.row.name" />
          </template>
        </ElTableColumn>
        <ElTableColumn label="名称">
          <template #default="scope">
            <ElInput v-model="scope.row.label" />
          </template>
        </ElTableColumn>
      </ElTable>
    </ElForm>
  </div>
</template>

<style lang="scss" scoped>
:deep {

  // 表格hover显示删除图标
  .el-table {
    height: 100%;
    margin-top: 15px;

    .el-table__row {
      &.ghost {
        opacity: 0;
      }

      .index {
        display: inline-block;
      }

      .delete {
        display: none;
      }

      &:hover {
        .index {
          display: none;
        }

        .delete {
          display: inline-block;
        }
      }

      .el-tag.sortable,
      .el-tag.sortable .icon {
        cursor: ns-resize;
      }
    }
  }
}
</style>
