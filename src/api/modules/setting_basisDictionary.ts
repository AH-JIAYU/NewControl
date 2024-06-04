import api from '../index'

export default {
  // 获取字典
  list: () => api.get('dict/get/getDict'),
  // 新增字典
  create: (data: any) => api.post('/dict/insert/insertDict', data),
  // 修改字典
  edit: (data: any) => api.post('/dict/update/updateDict', data),
  // 删除字典
  delete: (id: number | string) => api.post('/dict/delete/deleteDict', {
    id,
  }),
  // 获取字典项
  itemList: (data: any) => api.post(`/dict/get/getDictDataSourceByDictId`, data),
  // 新增字典项
  itemCreate: (data: any) => api.post('/dict/insert/insertDictDataSource', data),
  // 修改字典项
  itemEdit: (data: any) => api.post('/dict/update/updateDataSourceById', data),
  // 删除字典项
  itemDelete: (id: number | number[] | string | string[]) => api.delete(`/dict/delete/deleteDataSourceById/${id}`),

  get: (code: string) => api.get('dictionary/get', {
    params: {
      code,
    },
    baseURL: '/mock/',
  }),
}
