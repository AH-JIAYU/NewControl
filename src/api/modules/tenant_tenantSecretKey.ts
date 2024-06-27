import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('tenant/tenant_secret_key/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('tenant/tenant_secret_key/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('tenant/tenant_secret_key/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('tenant/tenant_secret_key/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('tenant/tenant_secret_key/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
