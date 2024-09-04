<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import api from '@/api/modules/setting_siteSetting'

defineOptions({
  name: 'site_setting',
})
// formRef
const formRef = ref<any>()
// loading
const loading = ref<any>(false)
// 表单数据
const form = ref<any>({
  // 注册开关
  register: false,
  // 注册审核
  registerExamine: false,
  // 租户网址
  tenantUrl: '',
})

const rules = ref([])

onMounted(() => {
  getDataList()
})

async function getDataList() {
  try {
    loading.value = true
    const { data } = await api.getList()
    form.value = data
    loading.value = false
  } catch (error) {

  } finally {
    loading.value = false;
  }
}

function onSubmit() {
  // 新增
  if (!form.value.id) {
    // 校验
    formRef.value &&
      formRef.value.validate((valid: any) => {
        if (valid) {
          try {
            loading.value = true;
            api.create(form.value).then(() => {
              loading.value = false;
              getDataList();
              ElMessage.success({
                message: "新增成功",
                center: true,
              });
            });
          } catch (error) {

          } finally {
            loading.value = false;
          }
        }
      });
  } else {
    // 修改
    formRef.value &&
      formRef.value.validate((valid: any) => {
        if (valid) {
          try {
            const params = {
              ...form.value
            };
            loading.value = true;
            api.edit(params).then((res: any) => {
              loading.value = false;
              if (res.status === 1) {
                getDataList();
                ElMessage.success({
                  message: "修改成功",
                  center: true,
                });
              }
            });
          } catch (error) {

          } finally {
            loading.value = false;
          }
        }
      });
  }
}
</script>

<template>
  <div>
    <PageHeader title="站点设置管理" />
    <PageMain>
      <el-form ref="formRef" :model="form" label-width="100px" :inline="false">
        <el-row :gutter="20">
          <el-col :span="3">
            <el-form-item label="注册开关">
              <el-switch v-model="form.register" :active-value="true" :inactive-value="false" active-text="开启"
                inline-prompt inactive-text="关闭" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="注册审核">
              <el-switch v-model="form.registerExamine" :active-value="true" :inactive-value="false" active-text="开启"
                inline-prompt inactive-text="关闭" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="租户网址">
          <el-input v-model="form.tenantUrl" style="width: 18rem;" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            确认
          </el-button>
        </el-form-item>
      </el-form>
    </PageMain>
  </div>
</template>

<style lang="scss" scoped>
.absolute-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .page-header {
    margin-bottom: 0;
  }

  .page-main {
    flex: 1;
    overflow: auto;

    :deep(.main-container) {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: auto;
    }
  }
}

.page-main {
  .search-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    margin-bottom: -18px;

    :deep(.el-form-item) {
      grid-column: auto / span 1;

      &:last-child {
        grid-column-end: -1;

        .el-form-item__content {
          justify-content: flex-end;
        }
      }
    }
  }

  .el-divider {
    width: calc(100% + 40px);
    margin-inline: -20px;
  }
}
</style>
