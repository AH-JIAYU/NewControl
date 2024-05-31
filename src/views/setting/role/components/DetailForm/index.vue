<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import api from '@/api/modules/setting_role'
import useRouteStore from '@/store/modules/route'
import userButtonPer from '@/store/modules/buttonPermission'
// 父级传递数据
const props = defineProps(['id', 'row'])
const routeStore = useRouteStore() // 路由 store
const buttonPer = userButtonPer() // 按钮权限store
const loading = ref(false)
const formRef = ref<FormInstance>()
const treeRef = ref<any>() // tree ref
const menuData = ref<any>([]) // 路由
const permissionData = ref<any>([]) // 权限
const form = ref<any>({
  id: props.id ?? null,
  menuId: [],
  permissions: [],
  roleName: '',
  remark: '',
})
// 校验
const formRules = ref<FormRules>({
  role: [
    { required: true, message: '请输入角色吗', trigger: 'blur' },
  ],
})

onMounted(async () => {
  if (form.value.id !== '') {
    await getInfo()
  }
  menuData.value = routeStore.routesRaw // 从store获取原始路由
  permissionData.value = await buttonPer.getPermissions // 调用store的方法获取按钮权限，如果没有就调接口
  loading.value = false
})
// 获取
async function getInfo() { // 编辑时获取该id的具体数据
  loading.value = true
  form.value = JSON.parse(props.row)
  loading.value = false
}

// 查询当前路由有那些权限
function rowPermission(permissionID: any) {
  return permissionData?.value.filter((item: any) => permissionID === item.menuId)
}
// 暴露
defineExpose({
  submit() {
    form.value.menuId = treeRef.value!.getCheckedKeys(false) // 同步选中的路由id
    return new Promise<void>((resolve) => {
      if (form.value.id === '') {
        formRef.value && formRef.value.validate((valid: any) => {
          if (valid) {
            api.create(form.value).then(() => {
              ElMessage.success({
                message: '新增成功',
                center: true,
              })
              resolve()
            })
          }
        })
      }
      else {
        formRef.value && formRef.value.validate((valid: any) => {
          if (valid) {
            api.edit(form.value).then(() => {
              ElMessage.success({
                message: '编辑成功',
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
      <ElFormItem label="角色码" prop="roleName">
        <ElInput v-model="form.roleName" placeholder="请输入角色码" />
      </ElFormItem>
      <ElFormItem label="权限">
        <el-tree
          ref="treeRef" :data="menuData" style="width: 100%;" :default-checked-keys="form.menuId"
          :default-expanded-keys="[]" node-key="id" show-checkbox default-expand-all highlight-current border
        >
          <template #default="{ data }">
            <div class="custom-tree-node">
              <div class="menu">
                {{ data.meta.title }}
              </div>
              <div class="permission">
                <div v-if="rowPermission(data.id).length" class="permissions">
                  <ElCheckboxGroup v-model="form.permissions">
                    <ElCheckbox v-for="auth in rowPermission(data.id)" :key="auth.id" :value="auth.id">
                      {{ auth.label }}
                    </ElCheckbox>
                  </ElCheckboxGroup>
                </div>
              </div>
            </div>
          </template>
        </el-tree>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style lang="scss" scoped>
:deep {
  .el-tree {
    overflow: hidden;
  }

  .el-tree-node__content {
    height: auto;
    min-height: 50px;
    border-bottom: 1px solid #f1f1f1;
  }
}

.custom-tree-node {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  font-size: 14px;

  .menu {
    flex-shrink: 0;
    width: 20%;
  }

  .permission {
    flex-shrink: 0;
    width: 700px;
    min-height: 50px;
    padding: 0 10px;
    text-align: left;
    border-left: 1px solid #f1f1f1;
  }

  .permissions {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    height: 80px;
  }
}
</style>
