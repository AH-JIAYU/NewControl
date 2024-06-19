import api from '../index'

export default {
  // 获取数据
  list: (data: any) => api.post('supplier-menu/get/getMenuList', data),

  // 新增
  create: (data: any) => api.post('supplier-menu/insert/insertMenu', data),

  // 修改
  edit: (data: any) => api.post('supplier-menu/update/updateMenu', data),

  // 删除
  delete: (data: any) => api.post(`supplier-menu/delete/deleteMenu`, data),
}
