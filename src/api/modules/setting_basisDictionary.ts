import api from '../index'

export default {
  list: () => api.get('dict/get/getDict'),

  create: (data: any) => api.post('/dict/insert/insertDict', data),

  edit: (data: any) => api.post('/dict/update/updateDict', data),

  delete: (id: number | string) => api.post('/dict/delete/deleteDict', {
    id,
  }),

  itemList: (id: any) => api.get(`/dict/get/getDictDataSourceByDictId/${id}`),

  itemCreate: (data: any) => api.post('/dict/insert/insertDictDataSource', data),

  itemEdit: (data: any) => api.post('/dict/update/updateDataSourceById', data),

  itemDelete: (id: number | number[] | string | string[]) => api.delete(`/dict/delete/deleteDataSourceById/${id}`),

  itemChangeEnable: (data: {
    id: number
    enable: boolean
  }) => api.post('dictionary/item/change/enable', data, {
    baseURL: '/mock/',
  }),

  get: (code: string) => api.get('dictionary/get', {
    params: {
      code,
    },
    baseURL: '/mock/',
  }),
}
