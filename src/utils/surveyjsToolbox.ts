import useProblemStore from '@/store/modules/problem.ts'
import apiDictionary from '@/api/modules/setting_basisDictionary'

const problemStore = useProblemStore()
export async function customComponents() {
  return [
    // {
    //   name: 'country',
    //   title: '国家下拉框',
    //   defaultQuestionTitle: '国家下拉框',
    //   questionJSON: {
    //     type: 'dropdown',
    //     placeholder: 'Select a country...',
    //     choicesByUrl: {
    //       url: 'https://surveyjs.io/api/CountriesExample',
    //     },
    //   },
    //   inheritBaseProps: true,
    // },
    await questionFun(
      'employment',
      '工作情况',
      'radiogroup',
      'placeholder',
      '1',
      '22',
      2,
    ),
    await questionFun('age', '出生日期', 'text', 'placeholder', '14', '', 1, 'date'),
    await questionFun('gender', '性别', 'radiogroup', 'placeholder', '15', '20'),
    await questionFun('AHI', '家庭收入', 'radiogroup', 'placeholder', '4', '25', 2),
    // await questionFun('education', '教育程度', 'radiogroup', 'placeholder', '2', '23'),
    // await questionFun('marriage', '婚姻状况', 'radiogroup', 'placeholder', '3', '24'),
    // await questionFun('industry', '行业', 'radiogroup', 'placeholder', '5', '26', 2),
    // await questionFun('department', '部门', 'radiogroup', 'placeholder', '6', '27'),
    // await questionFun('title', '职位', 'radiogroup', 'placeholder', '8', '28'),
    // await questionFun('race', '种族', 'radiogroup', 'placeholder', '28', '21'),
    // await questionFun('size', '公司人数', 'radiogroup', 'placeholder', '9', '29', 2),
    // await questionFun('revenue', '公司年收入', 'radiogroup', 'placeholder', '10', '30'),
  ]
}
export const toolType = 'c类'
export const tooltoxcategory = [
  { name: 'age', category: toolType },
  { name: 'country', category: toolType },
  { name: 'gender', category: toolType },
  { name: 'race', category: toolType },
  { name: 'education', category: toolType },
  { name: 'marriage', category: toolType },
  { name: 'AHI', category: toolType },
  { name: 'employment', category: '资料问卷专属类型' },
  { name: 'industry', category: '资料问卷专属类型' },
  { name: 'department', category: '资料问卷专属类型' },
  { name: 'title', category: '资料问卷专属类型' },
  { name: 'size', category: '资料问卷专属类型' },
  { name: 'revenue', category: '资料问卷专属类型' },
]
async function questionFun(
  name: string, // 绑定的字段  唯一值
  title: string, // 标题
  type: string, // 工具类型
  placeholder: string, // 提示
  zhID: string, // 中国字典id
  enID: string, // 美国字典id
  colCount = 1, // 单选框 列数
  inputType = null || '', // 输入框类型(当工具为输入框时)
) {
  const countryType = problemStore.country.countryId === '343'
    ? {
        page: 1,
        limit: 10,
        id: zhID,
      }
    : {
        page: 1,
        limit: 10,
        id: enID,
      }
  // 答案  根据当前row的国家id请求字典数据
  const { data } = await apiDictionary.itemList(countryType)
  // 答案
  const answer: any = data?.records
  // 请求的问题
  const res = await problemStore.getProblem
  // 问题 对应国家下的问题
  const problem: any = res[0].children[problemStore.country.countryId === '343' ? 0 : 1].children
  // 定义需要的数据格式
  const question: any = {
    title: {},
    type,
    placeholder,
    choices: [],
    colCount,
    inputType,
  }
  // 如果请求接口返回当前问题为空数组,那就让他比对对应请求的id
  const problemId: any = problemStore.country.countryId === '343' ? zhID : enID
  //  根据字典的答案查询对应的问题
  const row: any = problem.find((item: any) => item.id === data?.records[0]?.catalogueId || item.id === problemId)
  question.title.default = problemStore.country.countryId === '343' ? row.chineseName : row.englishName
  question.title['zh-cn'] = row.chineseName
  question.title.en = row.englishName
  question.id = row.otherId
  // 左侧块(问题模板)的标题
  title = problemStore.country.countryId === '343' ? title : row.englishName
  if (answer.length > 0) {
    answer?.forEach((item: any, index: number) => {
      if (question.choices.length < answer?.length) {
        question.choices.push({ text: {} })
        question.choices[index].value = item.code
      }
    })
    answer?.forEach((item: any) => {
      question.choices.forEach((it: any) => {
        if (item.code === it.value) {
          it.text.default = problemStore.country.countryId === '343' ? item.chineseName : item.englishName
          it.text['zh-cn'] = item.chineseName
          it.text.en = item.englishName
          it.text.id = item.otherId
        }
      })
    })
    return {
      name,
      title,
      questionJSON: question,
      inheritBaseProps: true,
    }
  }
  else {
    return {
      name,
      title,
      questionJSON: question,
      inheritBaseProps: true,
    }
  }
}
