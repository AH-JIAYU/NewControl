import api from '../index'

export default {
  // list: (data?: {
  //   title?: string
  //   from: number
  //   limit: number
  // }) => api.get('setting/permissions/list', {
  //   params: data,
  //   baseURL: '/mock/',
  // }),
  list: (data?: {
    title?: string
    from: number
    limit: number
  }) => api.get('button/get/getButton', {
    params: data,
  }),

  // create: (data: any) => api.post('setting/permissions/create', data, {
  //   baseURL: '/mock/',
  // }),
  create: (data: any) => api.post('button/insert/insertButton', data),

  // edit: (data: any) => api.post('setting/permissions/edit', data, {
  //   baseURL: '/mock/',
  // }),
  edit: (data: any) => api.post('button/update/updateButton', data),

  // delete: (id: number | string) => api.post('setting/permissions/delete', {
  //   id,
  // }, {
  //   baseURL: '/mock/',
  // }),
  delete: (id: number | string) => api.delete(`button/delete/updateButton/${id}`),
}
