import api from '../index'

export default {
  list: (data: {
    account?: string
    name?: string
    mobile?: string
    sex?: number | string
    from: number
    limit: number
  }) => api.get('setting/user/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('setting/user/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('setting/user/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('setting/user/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('setting/user/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),

  passwordReset: (id: number | string) => api.post('setting/user/password/reset', {
    id,
  }, {
    baseURL: '/mock/',
  }),

  changeStatus: (data: {
    id: number
    status: boolean
  }) => api.post('setting/user/change/status', data, {
    baseURL: '/mock/',
  }),

  check: (data: {
    key: string
    value: string
    id?: number
  }) => api.post('setting/user/check', data, {
    baseURL: '/mock/',
  }),
}
