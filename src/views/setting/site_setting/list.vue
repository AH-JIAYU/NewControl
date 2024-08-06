<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
// import api from '@/api/modules/setting_siteSetting'

defineOptions({
  name: 'site_setting',
})

const form = ref({
  register: true,
  registerExamine: false,
  supplierURL: '',
})
// const rules = ref([])
// onMounted(() => {
//   getDataList()
//   if (data.value.formMode === 'router') {
//     eventBus.on('get-data-list', () => {
//       getDataList()
//     })
//   }
// })

// onBeforeUnmount(() => {
//   if (data.value.formMode === 'router') {
//     eventBus.off('get-data-list')
//   }
// })

// function getDataList() {
//   data.value.loading = true
//   const params = {
//     ...getParams(),
//     ...(data.value.search.title && { title: data.value.search.title }),
//   }
//   api.list(params).then((res: any) => {
//     data.value.loading = false
//     data.value.dataList = res.data.list
//     pagination.value.total = res.data.total
//   })
// }

function onSubmit() {
}
</script>

<template>
  <div>
    <PageHeader title="站点设置管理" />
    <PageMain>
      <el-form ref="form" :model="form" label-width="100px" :inline="false">
        <el-row :gutter="20">
          <el-col :span="3">
            <el-form-item label="注册开关">
              <el-switch v-model="form.register" :active-value="1" :inactive-value="2" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="注册审核">
              <el-switch v-model="form.registerExamine" :active-value="1" :inactive-value="2" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="租户网址">
          <el-input v-model="form.supplierURL" style="width: 18rem;" />
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
