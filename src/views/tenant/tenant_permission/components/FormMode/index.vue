<script setup lang="ts">
import DetailForm from '../DetailForm/index.vue'

// 父级传递数据
const props = defineProps(['mode', 'id', 'auths', 'menulev'])
// 弹框变量
const visible = defineModel<boolean>({
  default: false,
})
// form ref
const formRef = ref()
// 标题
const title = computed(() =>
  props.id === '' ? '新增权限管理' : '编辑权限管理',
)

// 提交
function onSubmit() {
  onCancel()
}
// 弹框关闭处理事件
function onCancel() {
  visible.value = false
}
</script>

<template>
  <div>
    <ElDialog
      v-if="props.mode === 'dialog'"
      v-model="visible"
      :title="title"
      width="60%"
      :close-on-click-modal="false"
      append-to-body
      destroy-on-close
    >
      <DetailForm ref="formRef" v-bind="props" />
      <template #footer>
        <ElButton size="large" @click="onCancel">
          取消
        </ElButton>
        <ElButton type="primary" size="large" @click="onSubmit">
          确定
        </ElButton>
      </template>
    </ElDialog>
    <ElDrawer
      v-else-if="props.mode === 'drawer'"
      v-model="visible"
      :title="title"
      size="60%"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <DetailForm ref="formRef" v-bind="props" />
      <template #footer>
        <ElButton size="large" @click="onCancel">
          取消
        </ElButton>
        <ElButton type="primary" size="large" @click="onSubmit">
          确定
        </ElButton>
      </template>
    </ElDrawer>
  </div>
</template>
