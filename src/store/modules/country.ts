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
      const { data } = await api.itemList(32)
      return data
    })
    return {
      country,
      getCountry,
    }
  },
)

export default useCountryStore
