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

  create: (data: any) => api.post('setting/questionnaire_library/create', data, {
    baseURL: '/mock/',
  }),

  edit: (data: any) => api.post('setting/questionnaire_library/edit', data, {
    baseURL: '/mock/',
  }),
  update: (data: any) => api.post('setting/questionnaire_library/edit', data, {
    baseURL: '/mock/',
  }),

  delete: (data: any) => api.post('setting/questionnaire_library/delete', data),
}
