<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import api from '@/api/modules/setting_versionManagement'
import usetenantMenuStore from '@/store/modules/tenantMenu'
import useTenantButtonPermissionStore from '@/store/modules/tenantButtonPermission'

const props = defineProps(['id', 'row'])
const tenantMenuStore = usetenantMenuStore() // 路由 store
const tenantButtonPer = useTenantButtonPermissionStore() // 按钮权限store
const loading = ref(false)
const formRef = ref<FormInstance>()
const treeRef = ref<any>() // tree ref
const menuData = ref<any>([]) // 路由
const permissionData = ref<any>([]) // 权限
const settingData = ref<any>([])
const form = ref<any>({
  id: props.id,
  name: '', // 版本名称
  code: '', // 版本编码
  remark: '', // 备注
  expirationTime: null, // 备注
  versionMenuId: [], // 菜单id
  versionButtonId: [], // 按钮id
})
// 校验
const formRules = ref<FormRules>({
  name: [
    { required: true, message: '请输入版本', trigger: 'blur' },
  ],
})

onMounted(async () => {
  if (form.value.id !== '') {
    await getInfo()
  }
  menuData.value = await tenantMenuStore.gettenantMenu // 从store获取原始路由
  permissionData.value = await tenantButtonPer.getTenantPermissions // 调用store的方法获取按钮权限，如果没有就调接口
  loading.value = false
})

// 获取
async function getInfo() { // 编辑时获取该id的具体数据
  loading.value = true
  settingData.value = JSON.parse(props.row)
  form.value.name = settingData.value.name
  form.value.remark = settingData.value.remark
  form.value.code = settingData.value.code
  filterId(settingData.value.menuVOList.data)
  versionBtnId(settingData.value.buttonVOList)
  loading.value = false
}
function filterId(data: any) {
  for (const item of data) {
    form.value.versionMenuId.push(item.id)
    if (item.children) {
      filterId(item.children)
    }
  }
}
function versionBtnId(data: any) {
  for (const item of data) {
    form.value.versionButtonId.push(item.id)
    if (item.children) {
      filterId(item.children)
    }
  }
}
// 查询当前路由有那些权限
function rowPermission(permissionID: any) {
  return permissionData?.value.filter((item: any) => permissionID === item.menuId)
}

// 暴露
defineExpose({
  submit() {
    form.value.versionMenuId = treeRef.value!.getCheckedKeys(false) // 同步选中的路由id
    return new Promise<void>((resolve) => {
      if (form.value.id === '') {
        delete form.value.id
        formRef.value && formRef.value.validate((valid: any) => {
          if (valid) {
            loading.value = true
            api.create(form.value).then(() => {
              ElMessage.success({
                message: '新增成功',
                center: true,
              })
              loading.value = false
              resolve()
            })
          }
        })
      }
      else {
        formRef.value && formRef.value.validate((valid: any) => {
          if (valid) {
            loading.value = true
            api.edit(form.value).then(() => {
              ElMessage.success({
                message: '编辑成功',
                center: true,
              })
              loading.value = false
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
      <ElFormItem label="版本" prop="name">
        <ElInput v-model="form.name" placeholder="请输入版本" />
      </ElFormItem>
      <ElFormItem label="版本编码" prop="code">
        <ElInput v-model="form.code" placeholder="请输入版本编码" />
      </ElFormItem>
      <ElFormItem v-if="!props.id" label="版本时长" prop="expirationTime">
        <ElInput v-model.number="form.expirationTime" placeholder="请输入版本编码" />
      </ElFormItem>
      <ElFormItem label="备注" prop="remark">
        <ElInput v-model="form.remark" placeholder="请输入备注" />
      </ElFormItem>
      <ElFormItem label="权限">
        <el-tree
          ref="treeRef" :data="menuData" style="width: 100%;" :default-checked-keys="form.versionMenuId"
          :default-expanded-keys="[]" node-key="id" show-checkbox default-expand-all highlight-current border
        >
          <template #default="{ data }">
            <div class="custom-tree-node">
              <div class="menu">
                {{ data.meta.title }}
              </div>
              <div class="permission">
                <div v-if="rowPermission(data.id).length" class="buttonId" @click.stop>
                  <ElCheckboxGroup v-model="form.versionButtonId">
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

  .buttonId {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    height: 80px;
  }
}
</style>
