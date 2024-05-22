import api from '../index'

export default {
  // list: () => api.get('tenantMenu/list', {
  //   baseURL: '/mock/',
  // }),
  // 获取数据
  list: (data: any) => api.post('/tenant-menu/get/getMenuList', data),

  // create: (data: any) => api.post('menu/create', data, {
  //   baseURL: '/mock/',
  // }),
  // 新增
  create: (data: any) => api.post('/tenant-menu/insert/insertMenu', data),

  // edit: (data: any) => api.post('menu/edit', data, {
  //   baseURL: '/mock/',
  // }),
  // 修改
  edit: (data: any) => api.post('/tenant-menu/update/updateMenu', data),

  // delete: (id: number | string) => api.post('menu/delete', {
  //   id,
  // }, {
  //   baseURL: '/mock/',
  // }),
  // 删除
  delete: (data: any) => api.post(`/tenant-menu/delete/deleteMenu`, data),
}
