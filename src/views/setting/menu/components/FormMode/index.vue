<script setup lang="ts">
import DetailForm from "../DetailForm/index.vue";

defineOptions({
  name: "PagesExampleMenuFormMode",
});

// 传递父级数据
const props = defineProps(["id", "parentId", "modelValue", "menuLevel", "row"]);

const emits = defineEmits<{
  success: [];
}>();
// 弹框变量
const visible = defineModel<boolean>({
  default: false,
});
// formRef
const formRef = ref();
// 标题
const title = computed(() => (props.id === "" ? "新增角色" : "编辑角色"));
// 提交数据
async function onSubmit() {
  formRef.value.submit().then(() => {
    emits("success");
    onCancel();
  });
}
// 弹窗关闭
function onCancel() {
  visible.value = false;
}
</script>

<template>
  <div>
    <ElDrawer
      v-model="visible"
      :title="title"
      size="60%"
      :close-on-click-modal="false"
      destroy-on-close
      @close="onCancel"
    >
      <DetailForm ref="formRef" v-bind="props" />
      <template #footer>
        <ElButton size="large" @click="onCancel"> 取消 </ElButton>
        <ElButton type="primary" size="large" @click="onSubmit">
          确定
        </ElButton>
      </template>
    </ElDrawer>
  </div>
</template>

<style scoped lang="scss">
:deep {
  .el-drawer__footer {
    z-index: 999999;
  }
}
</style>
