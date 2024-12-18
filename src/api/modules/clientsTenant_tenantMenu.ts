import api from '../index'

export default {
  // 获取数据
  list: (data: any) => api.post('/tenant-incomplete-menu/getMenuList', data),

  // 新增
  create: (data: any) => api.post('/tenant-incomplete-menu/insertMenu', data),

  // 修改
  edit: (data: any) => api.post('/tenant-incomplete-menu/updateMenu', data),

  // 删除
  delete: (data: any) => api.post(`/tenant-incomplete-menu/deleteMenu`, data),
}
