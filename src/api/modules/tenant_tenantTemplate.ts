import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('tenant/tenant_template/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('tenant/tenant_template/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('tenant/tenant_template/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('tenant/tenant_template/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('tenant/tenant_template/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
