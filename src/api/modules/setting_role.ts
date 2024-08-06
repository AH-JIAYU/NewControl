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
  list: () => api.get('role/getRole'),

  detail: (id: number | string) => api.get('setting/role/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  // create: (data: any) => api.post('setting/role/create', data, {
  //   baseURL: '/mock/',
  // }),

  create: (data: any) => api.post('role/insertRole', data),

  // edit: (data: any) => api.post('setting/role/edit', data, {
  //   baseURL: '/mock/',
  // }),
  edit: (data: any) => api.post('role/updateRole', data),

  // delete: (id: number | string) => api.post('setting/role/delete', {
  //   id,
  // }, {
  //   baseURL: '/mock/',
  // }),
  delete: (id: any) => api.post(`role/deleteRole`, { id }),
}
