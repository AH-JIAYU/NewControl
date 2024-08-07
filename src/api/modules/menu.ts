import api from '../index'

export default {
  // list: (data?: any) => api.get('menu/list', {
  //   baseURL: '/mock/',
  //   data,
  // }),
  list: (data: any) => api.post('menu/getMenuList', data),

  detail: (id: number | string) => api.get('menu/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  // create: (data: any) => api.post('menu/create', data, {
  //   baseURL: '/mock/',
  // }),
  create: (data: any) => api.post('menu/insertMenu', data),

  // edit: (data: any) => api.post('menu/edit', data, {
  //   baseURL: '/mock/',
  // }),
  edit: (data: any) => api.post('menu/updateMenu', data),

  // delete: (id: number | string) => api.post('menu/delete', {
  //   id,
  // }, {
  //   baseURL: '/mock/',
  // }),
  delete: (data: any) => api.post(`menu/deleteMenu`, data),
}
