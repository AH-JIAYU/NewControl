import api from '../index'

export default {
  list: () => api.get('tenantMenu/list', {
    baseURL: '/mock/',
  }),
  // list: (data: any) => api.post('menu/get/getMenuList', data),

  detail: (id: number | string) => api.get('menu/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  // create: (data: any) => api.post('menu/create', data, {
  //   baseURL: '/mock/',
  // }),
  create: (data: any) => api.post('menu/insert/insertMenu', data),

  // edit: (data: any) => api.post('menu/edit', data, {
  //   baseURL: '/mock/',
  // }),
  edit: (data: any) => api.post('menu/update/updateMenu', data),

  // delete: (id: number | string) => api.post('menu/delete', {
  //   id,
  // }, {
  //   baseURL: '/mock/',
  // }),
  delete: (id: number | string) => api.delete(`menu/delete/deleteMenu/${id}`),
}
