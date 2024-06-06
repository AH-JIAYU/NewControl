<script setup lang="ts">
import { ElMessage } from 'element-plus'
import grapesjs from 'grapesjs'
import plugin from 'grapesjs-preset-webpage'
import basic from 'grapesjs-blocks-basic'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import advance from 'grapesjs-advance-components'
import parserPostCSS from 'grapesjs-parser-postcss'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import zh from 'grapesjs/locale/zh'
import { nextTick, onMounted, ref } from 'vue'
import api from '@/api/modules/tenant_tenantTemplate'

// 更新
const emit = defineEmits(['success'])
const editorRef = ref()
// 加载
const loading = ref(false)
// 弹框开关
const dialogFormVisible = ref(false)
// form ref
const formRef = ref<any>()
// 标题
const title = ref()
// 定义表单
const form = ref<any>({
  id: '',
  name: '',
  rawdata: {},
})

onMounted(() => {
  if (form.value.id !== '') {
    getInfo()
  }
})
// 获取数据
function getInfo() {
  loading.value = true
  api.detail(form.value.id).then((res: any) => {
    loading.value = false
    form.value.name = res.data.title
  })
}
// 获取传入数据
function showEdit(row: any) {
  if (!row) {
    title.value = '添加'
  }
  else {
    form.value = JSON.parse(JSON.stringify(row))
    title.value = '编辑'
  }
  dialogFormVisible.value = true
}
// grapesjs配置项
async function onDialogOpened() {
  await nextTick()
  editorRef.value = grapesjs.init({
    container: formRef.value,
    height: '900px',
    width: '100%',
    plugins: [plugin, basic, advance, parserPostCSS],
    i18n: {
      locale: 'zh',
      messages: { zh },
    },
    projectData: form.value.rawdata || {},
    storageManager: false,
    deviceManager: {
      devices: [
        { id: 'desktop', name: 'Desktop', width: '' },
        {
          id: 'tablet',
          name: 'Tablet',
          width: '768px',
          widthMedia: '992px',
        },
        {
          id: 'mobilePortrait',
          name: 'Mobile portrait',
          width: '320px',
          widthMedia: '575px',
        },
      ],
    },
  })
}
// 提交数据
async function onSubmit() {
  // 获取html结构
  const html = editorRef.value.getHtml()
  // 获取css结构
  const css = editorRef.value.getCss()
  // css样式
  const rawdata = editorRef.value.getProjectData()
  // 合并到form里面
  form.value = { ...form.value, html, css, rawdata }
  // 请求接口
  await api.edit(form.value)
  // 成功后提示信息
  ElMessage.success({
    message: '修改成功',
    center: true,
  })
  // 更新数据
  emit('success')
  // 关闭弹框
  close()
}
// 关闭弹框
function close() {
  if (editorRef.value) {
    editorRef.value.destroy()
    editorRef.value = null
  }
  form.value = {}
  dialogFormVisible.value = false
}
// 暴露
defineExpose({ showEdit })
</script>

<template>
  <el-drawer v-model="dialogFormVisible" :title="title" size="80%" @opened="onDialogOpened" @close="close">
    <div ref="formRef" />
    <template #footer>
      <el-button @click="close">
        取 消
      </el-button>
      <el-button type="primary" @click="onSubmit">
        确 定
      </el-button>
    </template>
  </el-drawer>
</template>

<style lang="scss" scoped>
// scss
</style>
