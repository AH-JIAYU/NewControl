<template>
  <el-drawer
    v-if="state.dialogFormVisible"
    v-model="state.dialogFormVisible"
    :title="state.title"
    size="80%"
    @opened="onDialogOpened"
    @close="close"
  >
    <div ref="formRef"></div>
    <template #footer>
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import grapesjs from "grapesjs";
import plugin from "grapesjs-preset-webpage";
import basic from "grapesjs-blocks-basic";
// @ts-ignore
import advance from "grapesjs-advance-components";
import parserPostCSS from "grapesjs-parser-postcss";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
// @ts-ignore
import zh from "grapesjs/locale/zh";
import api from "@/api/modules/tenant_tenantHomepageSetting";
import { updataText, customBlock, htmlJsList } from "@/utils/homePage";
const emits = defineEmits(["fetch-data"]);

const state = reactive<any>({
  title: "",
  dialogFormVisible: false,
  form: {},
});

const editorRef = ref<any>(null);
const formRef = ref<any>(null);

const showEdit = (row: any) => {
  state.title = "编辑";
  state.form = row;
  state.dialogFormVisible = true;
};

const onDialogOpened = async () => {
  await nextTick();
  editorRef.value = grapesjs.init({
    container: formRef.value,
    height: "100vh",
    width: "100%",
    plugins: [plugin, basic, advance, parserPostCSS],
    i18n: {
      locale: "zh",
      messages: { zh },
    },

    projectData: JSON.parse(state.form.rawData || "{}"),

    storageManager: false,

    deviceManager: {
      devices: [
        { id: "desktop", name: "Desktop", width: "" },
        {
          id: "tablet",
          name: "Tablet",
          width: "768px",
          widthMedia: "992px",
        },
        {
          id: "mobilePortrait",
          name: "Mobile portrait",
          width: "320px",
          widthMedia: "575px",
        },
      ],
    },
        //自定义上传图片
    // assetManager: {
    //   uploadFile: async (e: any) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       try {
    //         // 调用自定义接口上传图片
    //         const url = await uploadImage(file);
    //         // console.log(url,'rrrr')
    //         // 将上传后的图片添加到 Grapes.js 的资源管理器中
    //         editorRef.value.AssetManager.add(url);
    //       } catch (error) {
    //         console.error("Image upload failed", error);
    //       }
    //     }
    //   },
    // },
  });
  // 请求头
  // const token = userStore.token;
  // const headers = ref({ Token: token });
  // 接口地址
  // const Url = import.meta.env.VITE_APP_API_BASEURL + "/api/user/uploadAvatar";
  // 模拟上传图片的函数
  // const uploadImage = async (file: any) => {
  //   const formData = new FormData();
  //   console.log(file,'fff')
  //   formData.append('file', file);


  //   fetch("https://example.com/uploadFiles", {
  //     method: "post",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       return result;  // 返回图片的 URL 字符串
  //     })
  //     .catch((error) => {});
  // };
  // 通过事件改变框架的文本内容为中文
  editorRef.value.on("block:custom", (props: any) => {
    updataText(props.blocks);
  });
  // // // 批量添加自定义块
  customBlock.forEach((item: any) => {
    editorRef.value.Blocks.add(item.id, item);
  })




};

const save = async () => {
  const html = editorRef.value.getHtml();
  const css = editorRef.value.getCss();
  const rawData = JSON.stringify(editorRef.value.getProjectData());
  state.form = { ...state.form, html, css, rawData };
  const { status } = await api.edit(state.form);
  status === 1 &&
    ElMessage.success({
      message: "编辑成功",
      center: true,
    });
  emits("fetch-data");
  close();
};

const close = () => {
  if (editorRef.value) {
    editorRef.value.destroy();
    editorRef.value = null;
  }
  state.form = {};
  state.dialogFormVisible = false;
};
defineExpose({
  showEdit,
});
</script>

<style>
.gjs-layer-name {
  height: 20px;
}
</style>
