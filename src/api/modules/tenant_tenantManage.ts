import api from '../index'

export default {
  list: (data: any) => api.post('tenant-control/get/getTenant', data),

  create: (data: any) => api.post('tenant-control/insert/insertTenant', data),

  edit: (data: any) => api.post('tenant-control/update/updateTenantStatus', data),
  // 导出
  export: (data: any) => api.post('tenant-control/export/exportTenantList', data),
  reset: (data: any) => api.post('tenant-user/update/resetPassword', data),
}
