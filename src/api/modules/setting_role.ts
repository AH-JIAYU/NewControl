import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('setting/role/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('setting/role/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('setting/role/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('setting/role/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('setting/role/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
