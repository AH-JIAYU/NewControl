<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
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

const emit = defineEmits(['success'])
const editorRef = ref()
const loading = ref(false)
const dialogFormVisible = ref(false)
const formRef = ref<any>()
const title = ref()
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
  const html = editorRef.value.getHtml()
  const css = editorRef.value.getCss()
  const rawdata = editorRef.value.getProjectData()
  form.value = { ...form.value, html, css, rawdata }
  await api.edit(form.value)
  ElMessage.success({
    message: '修改成功',
    center: true,
  })
  emit('success')
  close()
}
// 关闭
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
