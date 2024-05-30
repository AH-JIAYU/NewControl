import api from '../index'

export default {
  list: (data: {
    title?: string
    from: number
    limit: number
  }) => api.get('setting/questionnaire_library/list', {
    params: data,
    baseURL: '/mock/',
  }),

  detail: (id: number | string) => api.get('setting/questionnaire_library/detail', {
    params: {
      id,
    },
    baseURL: '/mock/',
  }),

  create: (data: any) => api.post('setting/questionnaire_library/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('setting/questionnaire_library/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (id: number | string) => api.post('setting/questionnaire_library/delete', {
    id,
  }, {
    baseURL: '/mock/',
  }),
}
