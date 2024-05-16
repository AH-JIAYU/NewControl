<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { DetailFormProps } from '../../types'
import api from '@/api/modules/setting_role'
import apiMenu from '@/api/modules/menu'
import apiPermission from '@/api/modules/setting_permissions'

const props = withDefaults(
  defineProps<DetailFormProps>(),
  {
    id: '',
  },
)

const loading = ref(false)
const formRef = ref<FormInstance>()
const treeRef = ref<any>() // tree ref
const menuData = ref<any>([]) // 路由
const permissionData = ref<any>([]) // 权限

const form = ref({
  id: props.id,
  role: '',
  menu: [],
  permission: [],
  key: [], // 页面对应的接口
})
const formRules = ref<FormRules>({
  role: [
    { required: true, message: '请输入角色吗', trigger: 'blur' },
  ],
})

onMounted(async () => {
  if (form.value.id !== '') {
    await getInfo()
  }
  const res = await apiMenu.list({ type: 'normal' }) // 路由列表
  menuData.value = res.data
  const { data } = await apiPermission.list() // 权限列表
  permissionData.value = data
  loading.value = false
})

async function getInfo() { // 编辑时获取该id的具体数据
  loading.value = true
  const res = await api.detail(form.value.id)
  loading.value = false
  form.value = res.data
}

function rowPermission(permissionID: any) {
  return permissionData.value.filter((item: any) => permissionID === item.menuId)
}

defineExpose({
  submit() {
    form.value.menu = treeRef.value!.getCheckedKeys(false) // 同步选中的路由id
    return new Promise<void>((resolve) => {
      console.log('form.value',form.value)
      // if (form.value.id === '') {
      //   formRef.value && formRef.value.validate((valid) => {
      //     if (valid) {
      //       api.create(form.value).then(() => {
      //         ElMessage.success({
      //           message: '模拟新增成功',
      //           center: true,
      //         })
      //         resolve()
      //       })
      //     }
      //   })
      // }
      // else {
      //   formRef.value && formRef.value.validate((valid) => {
      //     if (valid) {
      //       api.edit(form.value).then(() => {
      //         ElMessage.success({
      //           message: '模拟编辑成功',
      //           center: true,
      //         })
      //         resolve()
      //       })
      //     }
      //   })
      // }
    })
  },
})
</script>

<template>
  <div v-loading="loading">
    <ElForm ref="formRef" :model="form" :rules="formRules" label-width="120px" label-suffix="：">
      <ElFormItem label="角色码" prop="role">
        <ElInput v-model="form.role" placeholder="请输入角色码" />
      </ElFormItem>
      <ElFormItem label="角色码" prop="role">
        <el-tree
          ref="treeRef" :data="menuData" style="width: 100%;" :default-checked-keys="form.menu"
          :default-expanded-keys="[]" node-key="id" show-checkbox default-expand-all highlight-current border
        >
          <template #default="{ data }">
            <div class="custom-tree-node">
              <div class="menu">
                {{ data.meta.title }}
              </div>
              <div class="permission">
                <div v-if="rowPermission(data.id).length" class="permissions" @click.stop>
                  <ElCheckboxGroup v-model="form.permission">
                    <ElCheckbox v-for="auth in rowPermission(data.id)" :key="auth.Permission" :value="auth.id">
                      {{ auth.label }}
                    </ElCheckbox>
                  </ElCheckboxGroup>
                </div>
                <div v-if="data.key.length" class="permissions" @click.stop>
                  <ElCheckboxGroup v-model="form.key">
                    <ElCheckbox v-for="item in data.key" :key="item" :value="item">
                      {{ item }}
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
