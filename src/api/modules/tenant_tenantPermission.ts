import api from '../index'

export default {
  // 获取
  list: () => api.get('tenant-button/get/getButton'),
  // 新增
  create: (data: any) => api.post('tenant-button/insert/insertButton', data),
  // 修改
  edit: (data: any) => api.post('tenant-button/update/updateButton', data),
  // 删除
  delete: (id: number | string) => api.delete(`/tenant-button/delete/updateButton/${id}`),
}
