import api from '@/api/modules/setting_basisDictionary'

const useCountryStore = defineStore(
  // 唯一ID
  'tenantMenu',
  () => {
    const country = ref([])
    const getCountry = computed(async () => {
      if (country.value.length) {
        return country.value
      }
      const { data } = await api.itemList({ page: 1, limit: -1, id: 32 })
      return data.records
    })
    return {
      country,
      getCountry,
    }
  },
)

export default useCountryStore
