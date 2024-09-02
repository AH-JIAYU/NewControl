import api from '../index'

export default {
  list: (data?: any) =>
    api.post('category/getCategory', data),

  create: (data: any) =>
    api.post('category/insertCategory', data),

  edit: (data: any) =>
    api.post('category/updateCategory', data),

  delete: (data: any) =>
    api.post('category/deleteCategory', data),
  // 设计问卷
  setSurvey: (data: any) => api.post('/problem/insertOrUpdateOrDeleteProblem', data),
  // 获取问卷
  getSurvey: (data: any) =>
    api.post('/problem/insertOrUpdateOrDeleteProblem', data),
  // 获取ID
  getId: () => api.get("/generate/generateId"),
}
