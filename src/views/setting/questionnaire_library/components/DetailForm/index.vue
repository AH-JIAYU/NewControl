<script setup lang="ts">
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { obtainLoading, submitLoading } from "@/utils/apiLoading";
import {
  setLicenseKey,
  surveyLocalization,
  ComponentCollection,
  Serializer,
} from "survey-core";
import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorModel, editorLocalization } from "survey-creator-core";
import "survey-creator-core/i18n/french";
import "survey-creator-core/i18n/simplified-chinese";
import "survey-creator-core/survey-creator-core.i18n";

import { ElMessage } from "element-plus";
import api from "@/api/modules/setting_questionnaireLibrary";
import {
  proces,
  convertData,
  setSurveyType,
  customComponents,
  tooltoxcategory,
  toolType,
} from "@/utils/surveyjsToolbox";
import useProblemStore from "@/store/modules/problem.js";
editorLocalization.currentLocale = "zh-cn";
surveyLocalization.supportedLocales = ["en", "fr", "zh-cn"]; //语言可以用字典接口的语言

setLicenseKey(
  "ZjU4MjI0NjMtN2YzYi00ZDMyLWEyYmEtOTliMmVhZmEyODc5OzE9MjAyNS0wMi0yNA=="
);
// 新增属性id type 不能直接使用id 会冲突 报错
Serializer.addProperty("question", { name: "surveyId" });
Serializer.addProperty("question", { name: "surveyType" });
Serializer.addProperty("itemvalue", { name: "surveyId" });
Serializer.addProperty("itemvalue", { name: "surveyType" });

const props = defineProps(["id", "details", "title", "row"]);
const emits = defineEmits(["onSubmit"]);
const problemStore = useProblemStore();
const loading = ref(true);
const form = ref({
  projectProblemCategoryId: props.id,
  problemInfoList: [], // 问卷对象 后端用
  projectJson: "", // 问卷json 前端用
  deleteProjectProblemInfoList: [], //删除的问题答案
});
const delList = ref<any>([]); // 编辑时所删除的问题和答案  提交编辑的时候一起调删除接口
const creatorOptions: ICreatorOptions = {
  showLogicTab: true,
  isAutoSave: false,
  showTranslationTab: true,
};
let creator: any;

// 显示浏览器缩放比例框
function showZoomLevelBox() {
  // 触发键盘事件来显示缩放比例框
  const event = new KeyboardEvent("keydown", {
    key: "i",
    ctrlKey: true,
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event);
}
// 设置浏览器缩放比例
// function setZoom(zoomLevel: number) {
//   document.body.style.zoom = zoomLevel.toString();
//   // document.body.style.transform = `scale(${zoomLevel})`;
// }

// 还原浏览器缩放比例
function resetZoom() {
  // document.body.style.transform = '';
  document.body.removeAttribute("style");
}
// onUnmounted(()=> {
//   resetZoom(); // 还原缩放
// })
onMounted(async () => {
  problemStore.country = JSON.parse(props.row);
  // 接受传递的数据
  const problem = JSON.parse(props.row);
  // setZoom(0.9); // 设置缩放为 90%
  // showZoomLevelBox()
  // 清空自定义问题
  ComponentCollection.Instance.clear();
  // #region 模板
  const res = await customComponents();
  res.forEach((component: any) => {
    // 使用 Serializer.findClass来检查组件是否已注册
    try {
      if (component === undefined) {
        return console.error("");
      } else {
        if (!Serializer.findClass(component.name)) {
          ComponentCollection.Instance.add({
            name: component.name,
            title: component.title,
            questionJSON: component.questionJSON,
            onInit() {
              Serializer.addProperty("shippingaddress", {
                name: component.name,
                visible: true,
                readOnly: true, // 模板问题不能修改
                // default: "hidden",
              });
            },
          });
        }
      }
    } catch (error) {
      console.error("有一个处理数据为空");
    }
  });

  // #endregion

  // #region survey.js
  creator = new SurveyCreatorModel(creatorOptions);
  creator.toolbox.changeCategories(tooltoxcategory);
  //以下代码将调查左侧的工具箱进行类型分类。
  //通过https://surveyjs.io/form-library/documentation/api-reference/question#getType 来查看工具类名称
  creator.toolbox.allowExpandMultipleCategories = true; // 允许用户展开多个类别
  creator.toolbox.showCategoryTitles = true; // 分类显示
  let creatorText;
  if (!problem.projectJson) {
    creatorText = {
      title: props.title,
    };
    creator.text = JSON.stringify(creatorText);
  } else {
    creatorText = JSON.parse(problem.projectJson);
    creatorText.title = props.title;
    creator.text = setSurveyType(JSON.stringify(creatorText));
  }

  const cClassData: any = creator.toolbox.categories.find(
    (item: any) => item.propertyHash.name === toolType
  );
  creator.saveSurveyFunc = (saveNo: number, callback: any) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
  };

  creator.onUploadFile.add((_: any, options: any) => {
    const formData = new FormData();
    options.files.forEach((file: File) => {
      formData.append(file.name, file);
    });
    fetch("https://example.com/uploadFiles", {
      method: "post",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        options.callback(
          "success",
          // A link to the uploaded file
          `https://example.com/files?name=${result[options.files[0].name]}`
        );
      })
      .catch((error) => {
        options.callback(error, "error");
      });
  });
  // 新增问题事件 新增id
  creator.onQuestionAdded.add(async function (sender: any, options: any) {
    // options.question.contentQuestion 问题内容 只有问题是自定义的时候才会有这个属性
    if (!options.question.contentQuestion) {
      var q = options.question;
      q.choices = [];
      const res = await api.getId();
      q.surveyType = 1; //1:表示前端生成(新增操作) 2:表示后端返回(修改操作)
      q.surveyId = res.data;
    } else {
      //  #region  判重  模板的问题重复， id也会重复 后端会报错
      const toolboxJSON = ComponentCollection.Instance;
      const toolbox = creator.JSON;
      proces(toolbox, toolboxJSON);
      let findData: any = [];
      if (!toolbox.pages) {
        return;
      }
      toolbox.pages.forEach((item: any) => {
        item.elements.forEach((ite: any) => {
          if (
            ite.surveyId ===
            options.question.customQuestion.json.questionJSON.surveyId
          ) {
            findData.push(ite);
            return;
          }
        });
      });
      // #endregion
      if (findData.length > 1) {
        // 删除当前问题
        sender.deleteElement(sender.selectedElement);
        ElMessage.warning({
          message: "已有该问题,不可重复设置",
          center: true,
        });
        return;
      }
    }
  });
  // 新增答案事件 新增id
  creator.onItemValueAdded.add(async function (sender: any, options: any) {
    const res = await api.getId();
    var q = options.newItem;
    q.surveyType = 1; //1:表示前端生成(新增操作) 2:表示后端返回(修改操作)
    q.surveyId = res.data.id;
  });
  // 删除问题
  creator.onElementDeleting.add(async function (sender: any, options: any) {
    if (options.element.surveyType === 2) {
      const params = {
        id: options.element.surveyId,
        type: 1,
      };
      delList.value.push(params);
    }
  });
  // // 修改事件
  creator.onSurveyPropertyValueChanged.add(async function (
    sender: any,
    options: any
  ) {
    // 判断是否是删除答案的事件
    if (
      options.name === "choices" &&
      options.newValue.length === 0 &&
      options.newValue.length < options.oldValue.length
    ) {
      if (options.oldValue[0].surveyType === 2) {
        const params = {
          id: options.oldValue[0].surveyId,
          type: 2,
        };
        delList.value.push(params);
      }
    }
  });
  // 保存
  creator.saveSurveyFunc = (saveNo: number, callback: any) => {
    callback(saveNo, true);
    emits("onSubmit");
  };
  delList.value = [];

  // #endregion
  loading.value = false;
});

defineExpose({
  submit() {
    return new Promise<void>(async (resolve) => {
      const toolboxJSON = ComponentCollection.Instance;
      const toolbox = creator.JSON;
      if (!toolbox.pages) {
        ElMessage.warning({
          message: "问卷调查为空，无法保存",
          center: true,
        });
        return;
      }
      // 获取自定义问题的具体内容
      proces(toolbox, toolboxJSON);

      // 赋值JSON
      form.value.projectJson = JSON.stringify(toolbox);
      const locale = creator.JSON.locale || editorLocalization.currentLocale;
      // 问题list 后端需要的
      form.value.problemInfoList = await convertData(toolbox.pages, locale);
      if (toolbox.title !== props.title) {
        const data = JSON.parse(props.details);
        data.categoryName = toolbox.title;
        api.edit(data);
      }
      // 删除问题和答案
      if (delList.value.length) {
        form.value.deleteProjectProblemInfoList = delList.value.filter((item:any) => item.id);
        // 创建一个索引对象，用于快速查找 b 数组中的对象
        const bIndex = form.value.problemInfoList.reduce(
          (index: any, item: any) => {
            index[item.id] = item; // 将 b 中的对象按 id 索引
            return index;
          },
          {}
        );

        // 遍历 a 数组，查找对应的 id
        form.value.deleteProjectProblemInfoList =
          form.value.deleteProjectProblemInfoList.filter((aObj: any) => {
            const bObj = bIndex[aObj.id]; // 在 bIndex 中查找对应的对象

            if (bObj) {
              // 找到相同 id 的对象，修改 b 中的 type 为 2
              bObj.type = 2;
              return false; // 从 a 数组中删除该对象
            }

            return true; // 保留不匹配的对象
          });

      }

      // 编辑
      const { status } = await api.setSurvey(form.value);
      status === 1 &&
        ElMessage.success({
          message: "设置成功",
          center: true,
        });

      resolve();
    });
  },
});
</script>

<template>
  <div
    v-loading="loading"
    style="width: 100%; height: 93%; margin-bottom: 80px"
  >
    <div style="width: 100%; height: 100%">
      <survey-creator-component v-if="!loading" :model="creator" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// scss
</style>
