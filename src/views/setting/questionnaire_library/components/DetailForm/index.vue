<script setup lang="ts">
import { ElMessage } from 'element-plus'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import {
  ComponentCollection,
  Serializer,
  setLicenseKey,
  surveyLocalization,
} from 'survey-core'
import type { ICreatorOptions } from 'survey-creator-core'
import { SurveyCreatorModel, editorLocalization } from 'survey-creator-core'
import 'survey-creator-core/i18n/french'
import 'survey-creator-core/i18n/simplified-chinese'
import 'survey-creator-core/survey-creator-core.i18n'
import api from '@/api/modules/setting_questionnaireLibrary'
import useProblemStore from '@/store/modules/problem.ts'
import {
  customComponents,
  toolType,
  tooltoxcategory,
} from '@/utils/surveyjsToolbox'

// 父级传递数据
const props = defineProps(['id', 'row'])
// 更新
const emits = defineEmits(['onSubmit'])
// 加载
const loading = ref(true)
editorLocalization.currentLocale = 'zh-cn'
// 语言可以用字典接口的语言
surveyLocalization.supportedLocales = ['en', 'fr', 'zh-cn']

setLicenseKey(
  'ZjU4MjI0NjMtN2YzYi00ZDMyLWEyYmEtOTliMmVhZmEyODc5OzE9MjAyNS0wMi0yNA==',
)
// // 添加属性id
// Serializer.addProperty('question', { name: 'id' })
// Serializer.addProperty('itemvalue', { name: 'id' })
// 新增属性id type 不能直接使用id 会冲突 报错
Serializer.addProperty("question", { name: "surveyId" });
// Serializer.addProperty("question", { name: "surveyType" });
Serializer.addProperty("itemvalue", { name: "surveyId" });
// Serializer.addProperty("itemvalue", { name: "surveyType" });
let creator: any
const cClassArray: any = []
const problemStore = useProblemStore()
// 定义问卷字段
const form = ref({
  projectProblemCategoryId: props.id,
  // 问卷对象 后端用
  problemInfoList: [],
  // 问卷json 前端用
  projectJson: '',
})
onBeforeMount(async () => {
  if (props.id) {
    problemStore.country = JSON.parse(props.row)
    // 接受传递的数据
    const problem = JSON.parse(props.row)
    // 将处理好的字典数据加到问卷中
    const res = await customComponents()
    res.forEach((component: any) => {
      // 使用Serializer.findClass来检查组件是否已注册
      try {
        if (component === undefined) {
          return console.error('')
        }
        else {
          if (!Serializer.findClass(component.name)) {
            ComponentCollection.Instance.add({
              name: component.name,
              title: component.title,
              questionJSON: component.questionJSON,
            })
          }
        }
      }
      catch (error) {
        console.error('有一个处理数据为空')
      }
    })
    loading.value = false
    const creatorOptions: ICreatorOptions = {
      showLogicTab: true,
      isAutoSave: false,
      showTranslationTab: true,
    }
    creator = new SurveyCreatorModel(creatorOptions)
    // 以下代码将调查左侧的工具箱进行类型分类。
    creator.toolbox.changeCategories(tooltoxcategory)
    // 通过https://surveyjs.io/form-library/documentation/api-reference/question#getType 来查看工具类名称
    creator.toolbox.allowExpandMultipleCategories = true // 允许用户展开多个类别
    creator.toolbox.showCategoryTitles = true // 分类显示
    creator.text = problem.projectJson || ''
    const cClassData: any = creator.toolbox.categories.find(
      (item: any) => item.propertyHash.name === toolType,
    )
    cClassData.propertyHash.items.forEach((item: any) => {
      cClassArray.push(item.name)
    })
    creator.saveSurveyFunc = (saveNo: number, callback: any) => {
      window.localStorage.setItem('survey-json', creator.text)
      callback(saveNo, true)
    }
    creator.onUploadFile.add((_: any, options: any) => {
      const formData = new FormData()
      options.files.forEach((file: File) => {
        formData.append(file.name, file)
      })
      fetch('https://example.com/uploadFiles', {
        method: 'post',
        body: formData,
      })
        .then(response => response.json())
        .then((result) => {
          options.callback(
            'success',
            // A link to the uploaded file
            `https://example.com/files?name=${result[options.files[0].name]}`,
          )
        })
        .catch((error) => {
          options.callback(error, 'error')
        })
    })
    // 新增问题事件 新增id
    creator.onQuestionAdded.add(async function (sender: any, options: any) {
      // var q = options.question;
      // q.surveyId = q.customQuestion.json.questionJSON.id
      // console.log('options.question.contentQuestion',options.question.contentQuestion);

      if (!options.question.contentQuestion) {
        var q = options.question;
        console.log('q',q);

        q.choices = [];
        const res = await api.getId()
        q.surveyType = 1; //1:表示前端生成(新增操作) 2:表示后端返回(修改操作)
        q.surveyId = res.data.id;
      } else {
        //  #region  判重  模板的问题重复， id也会重复 后端会报错
        const toolboxJSON = ComponentCollection.Instance;
        const toolbox = creator.JSON;
        proces(toolbox, toolboxJSON);
        let findData: any = [];
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
      // const res = await obtainLoading(api.getId({}));
      // var q = options.newItem;
      // q.surveyType = 1; //1:表示前端生成(新增操作) 2:表示后端返回(修改操作)
      // q.surveyId = res.data.id;
      const res = await api.getId()
      var q = options.newItem;
      q.surveyType = 1; //1:表示前端生成(新增操作) 2:表示后端返回(修改操作)
      q.surveyId = res.data.id;
    });
    creator.saveSurveyFunc = (saveNo: number, callback: any) => {
      callback(saveNo, true)
      emits('onSubmit')
    }
  }
})
// 暴露
defineExpose({
  submit() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<void>(async (resolve) => {
      try {
        const toolboxJSON = ComponentCollection.Instance
        const toolbox = creator.JSON
        // 处理数据
        proces(toolbox, toolboxJSON)
        // 赋值JSON
        form.value.projectJson = JSON.stringify(toolbox)
        const locale = creator.JSON.locale || editorLocalization.currentLocale
        // 将处理好的数据赋值
        form.value.problemInfoList = await convertData(
          toolbox.pages,
          locale,
        )
        console.log('form.value',form.value);
        return
        // 请求接口
        api.setSurvey(form.value).then(() => {
          ElMessage.success({
            message: '设置成功',
            center: true,
          })
          resolve()
        })
      }
      catch (err) {
        // 如果没有选择问题提示
        ElMessage({
          message: '至少需要一条问题和答案!',
          type: 'warning',
        })
      }
    })
  },
})
const typeMap: any = {
  // 输入框
  text: 1,
  // 单选
  radiogroup: 2,
  // 复选
  checkbox: 3,
  // 下拉
  dropdown: 4,
}
// 处理数据
function proces(toolbox: any, toolboxJSON: any) {
  toolbox.pages.forEach((item: any) => {
    item.elements.forEach((value: any) => {
      const data = toolboxJSON.customQuestionValues.find((ite: any) => ite.name === value.type)
      if (data) {
        value.tool = value.type
        delete value.type
        value = Object.assign(value, data.json.questionJSON)
      }
    })
  })
  toolbox.pages[0].cClass = cClassArray
}
// 转换数据
function convertData(originalData: any, locale: any) {
  const transformedData = originalData.flatMap((item: any) => {
    return item.elements.map((element: any) => {
      const questionType = typeMap[element.type] || 0
      let question = element.name
      const id = element.surveyId || ''
      if (element.title) {
        question = element?.title.default || element?.title[locale] || element.name
      }
      // 新增一个问题，默认标题为name 改变标题后 字段在title里
      let answerInfoList = []
      if (Array.isArray(element.choices)) {
        answerInfoList = element.choices.map((choice: any) => {
          const answerValue = choice.value || choice
          let anotherName = ''
          let id = ''
          if (typeof choice === 'object') {
            // choice为对象说明至少改了显示文本
            // choice.text为对象 说明他改变了语言或者配置了译文 改变语言choice.text里没default字段
            if (typeof choice.text === 'object') {
              // 默认为default 如果default不存在说明他一开始就切换了语言
              anotherName = choice.text.default || choice.text[locale]
              id = choice.surveyId || ''
            }
            else {
              anotherName = choice.text
            }
          }
          else {
            anotherName = choice
          }
          return {
            answerValue,
            anotherName,
            id,
          }
        })
      }

      return {
        question,
        id,
        questionType,
        answerInfoList,
      }
    })
  })
  return transformedData
}
</script>

<template>
  <div v-loading="loading" style="width: 100%; height: 93%; margin-bottom: 80px;">
    <div style="width: 100%; height: 100%;">
      <survey-creator-component v-if="!loading" :model="creator" />
    </div>
  </div>
</template>
