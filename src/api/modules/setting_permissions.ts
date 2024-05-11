import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('setting/permissions/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('setting/permissions/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('setting/permissions/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('setting/permissions/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('setting/permissions/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
