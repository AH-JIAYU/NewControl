<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus";
import eventBus from "@/utils/eventBus";
import api from "@/api/modules/tenant_tenantSecretKey";
import useSettingsStore from "@/store/modules/settings";

defineOptions({
  name: "TenantTenantSecretKeyList",
});

const data = ref<any>({
  form: {},
  option: [
    { label: "时/次", value: 1 },
    { label: "日/次", value: 2 },
    { label: "周/次", value: 3 },
    { label: "月/次", value: 4 },
  ],
});
const formRef = ref<any>();
const rules = reactive<any>({});

const onSubmit = () => {
  console.log("确认");
};
</script>

<template>
  <div>
    <PageMain>
      <el-form
        :model="data.form"
        ref="formRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
      >
        <el-row :gutter="20">
          <el-col :span="3">
            <el-form-item label="自动更新">
              <el-switch
                v-model="data.form.register"
                :active-value="1"
                :inactive-value="2"
              />
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="更新频率">
              <el-select
                v-model="data.form.frequency"
                clear
                value-key=""
                placeholder=""
                clearable
                filterable
              >
                <el-option
                  v-for="item in data.option"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3">
            <el-form-item label="前端显隐">
              <el-switch
                v-model="data.form.show"
                :active-value="1"
                :inactive-value="2"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col >
            <el-form-item label="加密方式">
              加密方式1、加密方式2
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认</el-button>
        </el-form-item>
      </el-form>
    </PageMain>
  </div>
</template>

<style lang="scss" scoped>
.absolute-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .page-header {
    margin-bottom: 0;
  }

  .page-main {
    flex: 1;
    overflow: auto;

    :deep(.main-container) {
      flex: 1;
      overflow: auto;
      display: flex;
      flex-direction: column;
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
    margin-inline: -20px;
    width: calc(100% + 40px);
  }
}
</style>
