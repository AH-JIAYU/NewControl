<!-- eslint-disable prefer-promise-reject-errors -->
<script setup lang="ts">
import Sortable from 'sortablejs'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { DetailFormProps } from '../../types'
import Edit from '../Edit/index.vue'
import api from '@/api/modules/setting_permissions'
// import menuapi from '@/api/modules/menu'
import useMenuStore from '@/store/modules/menu'

const props = defineProps(['id', 'menulev', 'path', 'auths'])
const formRules = ref<any>({
  menu: [
    { required: true, message: '请选择路由地址', trigger: 'blur' },
  ],
  type: [
    { required: true, message: '请选择类型', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入key标识', trigger: 'blur' },
  ],
  label: [
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
})
// const menuStore = useMenuStore() // 路由store
const loading = ref(false)
const formRef = ref<FormInstance>()
const authsTableRef = ref<any>()
const authsTableKey = ref(0)
const EditProps = ref<any>({ // 组件数据
  visible: false,
  id: '',
  path: '',
  keys: [],
  row: {},
})
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
// const munulevs = ref([// 路由等级  1，2级路由不需要控制按钮权限
//   {
//     value: 3,
//     label: '三级导航',
//   },
//   {
//     value: 4,
//     label: '内置页面',
//   }])
// // 函数查找具有特定menulev的所有项目
// function findItemsByLevel(data: any, level: number) {
//   const results: any[] = []
//   function recurse(items: any) {
//     // 确保 items 是数组
//     if (!Array.isArray(items)) {
//       return
//     }
//     for (const item of items) {
//       if (item.menuLevel === level) {
//         results.push(item)
//       }
//       if (Array.isArray(item.children)) {
//         recurse(item.children)
//       }
//     }
//   }
//   recurse(data)
//   return results
// }
// // 选择父级分类Select the parent project ID
// function selectparentid(menulev: any) {
//   if (menulev === 1) {
//     form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 1)
//   }
//   else if (menulev === 2) {
//     form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 2)
//   }
//   else if (menulev === 3) {
//     form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 3)
//   }
//   else {
//     form.value.choiceMenuData = findItemsByLevel(form.value.menuData, 4)
//   }
// }
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
// // 选择路由改变时拿到当前路由的row
// function rowKey(value: any) {
//   const data = form.value.choiceMenuData.find((item: any) => item.path === value)
//   console.log('data', data)
//   data.value.keys = JSON.stringify(data.key)
// }

onMounted(async () => {
  onAuthDarg()// 拖拽
  // const res = await menuapi.list({ type: 'normal' }) // 路由
  // form.value.menuData = res.data
  // form.value.choiceMenuData = findItemsByLevel(form.value.menuData, form.value.menulev) // 筛选路由
  if (form.value.id !== '') {
    getInfo()
  }
})

function getInfo() {
  loading.value = true
  form.value.data = JSON.parse(props.auths)
  form.value.menu = props.path
  form.value.flat = !!form.value.data.length // 数组为空 确定时走添加接口
  loading.value = false
}
// 权限表格添加行
function onAuthAdd() {
  // form.value.data.push({
  //   name: '',
  //   value: '',
  // })
  // 添加前,进行表单校验选择路由后才能添加
  formRef.value && formRef.value.validate((valid) => {
    if (valid) {
      EditProps.value.visible = true
      EditProps.value.id = '' // 置空id
    }
  })
  // nextTick(() => {
  //   authsTableRef.value.setScrollTop(form.value.data.length * 50)
  // })
}
function onEdit(row: any) {
  EditProps.value.id = row.id
  EditProps.value.row = JSON.stringify(row)
  EditProps.value.visible = true
}
// 权限表格删除行
function onAuthDelete(index: number) {
  form.value.data.splice(index, 1)
}

defineExpose({
  submit() {
    form.value.data.forEach((item: any) => { // 处理数据
      item.menu = form.value.menu
      item.permission = `${form.value.menu}-${item.type}-${item.name}`
    })
    return new Promise<void>((resolve: any, reject: any) => {
      if (!form.value.flat) { // 判断编辑回显数组是否为空
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            api.create(form.value.data).then(() => {
              ElMessage.success({
                message: '模拟新增成功',
                center: true,
              })
              resolve()
            })
          }
          else {
            reject() // 校验不通过 阻止代码继续执行
          }
        })
      }
      else {
        formRef.value && formRef.value.validate((valid) => {
          if (valid) {
            api.edit(form.value.data).then(() => {
              ElMessage.success({
                message: '模拟编辑成功',
                center: true,
              })
              resolve()
            })
          }
          else {
            reject() // 校验不通过 阻止代码继续执行
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
      <!-- <ElFormItem label="路由等级">
        <el-select v-model="form.menulev" :disabled="!!form.id" placeholder="Select" @change="selectparentid">
          <el-option v-for="item in munulevs" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </ElFormItem>
      <ElFormItem label="选择路由" prop="menu">
        <ElSelect v-model="form.menu" :disabled="!!form.id" placeholder="选择路由" @change="rowKey">
          <el-option v-for="item in form.choiceMenuData" :key="item.id" :label="item.meta.title" :value="item.path">
            <span style="float: left;">{{ item.meta.title }}</span>
            <span style="
          float: right;
          font-size: 13px;
          color: var(--el-text-color-secondary);">
              {{ item.name }}
            </span>
          </el-option>
        </ElSelect>
      </ElFormItem> -->
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
            <ElFormItem :prop="`data.${scope.$index}.type`" :rules="formRules.type">
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
            </ElFormItem>
          </template>
        </ElTableColumn>
        <ElTableColumn label="权限KEY">
          <template #default="scope">
            <ElFormItem :prop="`data.${scope.$index}.name`" :rules="formRules.name">
              <ElInput v-model="scope.row.name" />
            </ElFormItem>
          </template>
        </ElTableColumn>
        <ElTableColumn label="名称">
          <template #default="scope">
            <ElFormItem :prop="`data.${scope.$index}.label`" :rules="formRules.label">
              <ElInput v-model="scope.row.label" />
            </ElFormItem>
          </template>
        </ElTableColumn>
        <ElTableColumn label="名称">
          <template #default="scope">
            <ElButton type="primary" size="small" plain @click="onEdit(scope.row)">
              编辑
            </ElButton>
          </template>
        </ElTableColumn>
      </ElTable>
      {{ EditProps }}
    </ElForm>
    <Edit :id="EditProps.id" v-model="EditProps.visible" :row="EditProps.row" />
  </div>
</template>

<style lang="scss" scoped>
:deep {

  // 表格hover显示删除图标
  .el-table {
    height: 100%;
    margin-top: 15px;

    .el-form-item__content {
      margin: 0 !important;
    }

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
