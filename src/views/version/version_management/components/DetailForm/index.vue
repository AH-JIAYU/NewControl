<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import api from '@/api/modules/setting_versionManagement'
import usetenantMenuStore from '@/store/modules/tenantMenu'
import useTenantButtonPermissionStore from '@/store/modules/tenantButtonPermission'
import cloneDeep from "lodash-es/cloneDeep";

// 父级传递数据
const props = defineProps(['id', 'row'])
// 租户路由 store
const tenantMenuStore = usetenantMenuStore()
// 按钮权限store
const tenantButtonPer = useTenantButtonPermissionStore()
// 加载
const loading = ref(false)
// form ref
const formRef = ref<FormInstance>()
// tree ref
const treeRef = ref<any>()
// 路由
const menuData = ref<any>([])
// 权限
const permissionData = ref<any>([])
// 传入数据
const settingData = ref<any>([])
// 定义数据
const form = ref<any>({
  id: props.id,
  // 版本名称
  name: '',
  // 版本编码
  code: '',
  // 备注
  remark: '',
  // 到期时间
  expirationTime: null,
  // 菜单id
  versionMenuId: [],
  // 按钮id
  versionButtonId: [],
})
// 校验
const formRules = ref<FormRules>({
  name: [
    { required: true, message: '请输入版本', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入版本编码', trigger: 'blur' },
  ],
})

onMounted(async () => {
  if (form.value.id !== '') {
    await getInfo()
  }
  loading.value = true
  // 从store获取原始路由
  menuData.value = await tenantMenuStore.gettenantMenu
  // 调用store的方法获取按钮权限，如果没有就调接口
  permissionData.value = await tenantButtonPer.getTenantPermissions
  loading.value = false
})

// 编辑时获取该id的具体数据
async function getInfo() {
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
  // 提交
  submit() {
    const params=cloneDeep(form.value)
    // 同步选中的路由id
    params.versionMenuId = treeRef.value!.getCheckedKeys(false)
    return new Promise<void>((resolve) => {
      if (params.id === '') {
        delete params.id
        formRef.value && formRef.value.validate((valid: any) => {
          if (valid) {
            loading.value = true
            api.create(params).then(() => {
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
            api.edit(params).then(() => {
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
          ref="treeRef" v-if="form.versionMenuId" :data="menuData" style="width: 100%;" :default-checked-keys="form.versionMenuId"
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

  .permission {
    display: flex;
    align-items: center;
    justify-content: start;
    .buttonId{
      padding:1rem 0;
    :deep(.el-checkbox-group){
      display: flex;
    flex-wrap: wrap;
    }
    :deep(.el-checkbox__label){
      min-width:150px;
    }
  }
  }
}
</style>
