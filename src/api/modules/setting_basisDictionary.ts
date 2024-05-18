import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('setting/basis_dictionary/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('setting/basis_dictionary/detail', {
    params: data,
    baseURL: '/mock/',
  }),
  // detail: (id: number | string) => api.get('setting/basis_dictionary/detail', {
  //   params: {
  //     id,
  //   },
  //   baseURL: '/mock/',
  // }),

  create: (data: any) => api.post('setting/basis_dictionary/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('setting/basis_dictionary/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('setting/basis_dictionary/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
