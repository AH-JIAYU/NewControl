import api from '../index'

export default {
  // list: () => api.get('/version/get/getVersionList'),
  list: (data?: any) => api.get('setting/version_management/list', {
    baseURL: '/mock/',
    data,
  }),
  detail: (id: number | string) => api.get('setting/version_management/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('/version/insert/insertVersion', data),

  edit: (data: any) => api.post('setting/version_management/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('setting/version_management/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
