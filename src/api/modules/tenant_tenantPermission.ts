import api from '../index'

export default {
  // 获取
  list: () => api.get('tenant-button/getButton'),
  // 新增
  create: (data: any) => api.post('tenant-button/insertButton', data),
  // 修改
  edit: (data: any) => api.post('tenant-button/updateButton', data),
  // 删除
  delete: (id: number | string) => api.delete(`/tenant-button/updateButton/${id}`),
}
