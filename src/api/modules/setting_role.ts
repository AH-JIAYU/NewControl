import api from '../index'

export default {
  // list: (data: {
  //   title?: string
  //   from: number
  //   limit: number
  // }) => api.get('setting/role/list', {
  //   params: data,
  //   baseURL: '/mock/',
  // }),
  list: (data: any) => api.get('role/get/getRole', { params: data }),

  detail: (id: number | string) => api.get('setting/role/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  // create: (data: any) => api.post('setting/role/create', data, {
  //   baseURL: '/mock/',
  // }),

  create: (data: any) => api.post('role/insert/insertRole', data),

  // edit: (data: any) => api.post('setting/role/edit', data, {
  //   baseURL: '/mock/',
  // }),
  edit: (data: any) => api.post('role/update/updateRole', data),

  // delete: (id: number | string) => api.post('setting/role/delete', {
  //   id,
  // }, {
  //   baseURL: '/mock/',
  // }),
  delete: (role: any) => api.post(`role/delete/deleteRole`, { role }),
}
