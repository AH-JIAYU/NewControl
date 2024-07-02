import api from '../index'

export default {
  // 获取
  list: (data: any) => api.post('tenant-control/get/getTenant', data),
  // 新增
  create: (data: any) => api.post('tenant-control/insert/insertTenant', data),
  // 修改状态
  edit: (data: any) => api.post('tenant-control/update/updateTenantStatus', data,),
  // 导出
  export: (data: any) => api.post('tenant-control/export/exportTenantList', data,{ responseType: 'blob' }),
  // 重置密码
  reset: (data: any) => api.post('tenant-user/update/resetPassword', data),
}
// 导出
export function userTable(data: any) {
  return api({
      url: '/tenant-control/export/exportTenantList',
      method: 'post',
      data,
      responseType: 'blob'   // 添加 blob 解决乱码问题，或者 arraybuffer
  })
}
