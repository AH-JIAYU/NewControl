import api from '../index'

export default {
  list: () => api.get('/version/getVersionList'),
  // list: (data?: any) => api.get('setting/version_management/list', {
  //   baseURL: '/mock/',
  //   data,
  // }),
  detail: (id: number | string) => api.get('setting/version_management/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('version/insertVersion', data),

  edit: (data: any) => api.post('version/updateVersion', data),

  delete: (id: number | string) => api.delete(`version/deleteVersion/${id}`),
}
