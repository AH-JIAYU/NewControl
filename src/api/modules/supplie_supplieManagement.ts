import api from '../index'

export default {
  // 获取数据
  list: (data: any) => api.post('supplier-menu/getMenuList', data),

  // 新增
  create: (data: any) => api.post('supplier-menu/insertMenu', data),

  // 修改
  edit: (data: any) => api.post('supplier-menu/updateMenu', data),

  // 删除
  delete: (data: any) => api.post(`supplier-menu/deleteMenu`, data),
}
