import api from '../index'

export default {
  // 获取
  list: () => api.get('supplier-button/getButton'),
  // 新增
  create: (data: any) => api.post('supplier-button/insertButton', data),
  // 修改
  edit: (data: any) => api.post('supplier-button/updateButton', data),
  // 删除
  delete: (id: number | string) => api.delete(`supplier-button/updateButton/${id}`),
}
