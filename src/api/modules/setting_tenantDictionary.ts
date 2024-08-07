import api from '../index'

export default {
  // 获取租户字典目录
  list: () => api.get('/tenant/dict/getTenantDict'),
  // 根据目录id获取租户目录字典
  getTenantCatalogueDictionary: (id: any) => api.get(`/tenant/dict/getTenantDictByDictId/${id}`),
  // 根据目录id获取租户数据字典
  getTenantDataDictionary: (id: any) => api.get(`/tenant/dict/getTenantDictDataSource/${id}`),
  // 根据目录数据字典id获取租户数据字典
  getDataDictionaryId: (id: any) => api.get(`/tenant/dict/getTenantDictDataSourceByDataSourceId/${id}`),
}
