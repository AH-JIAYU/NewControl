import api from '../index'

export default {
  // 获取字典
  list: () => api.get('dict/get/getDict'),
  // 获取字典项
  itemList: (id: any) => api.get(`/dict/get/getDictDataSourceByDictId/${id}`),
}
