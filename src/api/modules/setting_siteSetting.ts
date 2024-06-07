import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('setting/site_setting/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('setting/site_setting/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('setting/site_setting/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('setting/site_setting/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('setting/site_setting/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
