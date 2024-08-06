import api from '../index'

export default {
  // 获取
  list: () => api.get('user/getUser'),
  // 新增
  create: (data: any) => api.post('user/register', data),
  // 修改
  edit: (data: any) => api.post('user/updateUser', data),
  // 赋予角色信息
  setUserRole: (data: any) => api.post('user/setUserRole', data),
  // 删除
  delete: (data: any) => api.post('/user/deleteUser', data),

  passwordReset: (id: number | string) => api.post('setting/user/password/reset', {
    id,
  }, {
    baseURL: '/mock/',
  }),

  changeStatus: (data: {
    id: number
    status: boolean
  }) => api.post('setting/user/change/status', data, {
    baseURL: '/mock/',
  }),

  check: (data: {
    key: string
    value: string
    id?: number
  }) => api.post('setting/user/check', data, {
    baseURL: '/mock/',
  }),
}
