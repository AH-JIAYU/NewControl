import api from '../index'

export default {
  list: (data?: any) =>
    api.post('category/get/getCategory', data),

  create: (data: any) =>
    api.post('category/insert/insertCategory', data),

  edit: (data: any) =>
    api.post('category/update/updateCategory', data),

  delete: (data: any) =>
    api.post('category/delete/deleteCategory', data),
  // 设计问卷
  setSurvey: (data: any) => api.post('/problem/insert/insertOrUpdateOrDeleteProblem', data),
  // 获取问卷
  getSurvey: (data: any) =>
    api.post('/problem/insert/insertOrUpdateOrDeleteProblem', data),
}
