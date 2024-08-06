import api from '../index'

export default {
  // 获取
  list: (data: any) => api.post('tenant-control/getTenant', data),
  // 新增
  create: (data: any) => api.post('tenant-control/insertTenant', data),
  // 修改状态
  edit: (data: any) => api.post('tenant-control/updateTenantStatus', data,),
  // 导出
  export: (data: any) => api.post('tenant-control/exportTenantList', data,{ responseType: 'blob' }),
  // 重置密码
  reset: (data: any) => api.post('tenant-user/resetPassword', data),
}
