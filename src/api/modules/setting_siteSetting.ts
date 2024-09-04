import api from '../index'

export default {

  // 获取租户配置
  getList: () => api.post('tenant-control/getTenantConfig'),

  // 新增租户配置
  create: (data: any) => api.post('tenant-control/insertTenantConfig', data),

  // 修改租户配置
  edit: (data: any) => api.post('tenant-control/updateTenantConfig', data),
}
