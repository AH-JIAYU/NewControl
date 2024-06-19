import api from '@/api/modules/supplie_vip_menu'

const usesupplieVipMenuStore = defineStore(
  // 唯一ID
  'supplieVipMenu',
  () => {
    const supplieVipMenu = ref([])
    const getSupplieVipMenu = computed(async () => {
      if (supplieVipMenu.value.length) {
        return supplieVipMenu.value
      }
      const { data } = await api.list({ type: 'normal' })
      return data
    })
    return {
      supplieVipMenu,
      getSupplieVipMenu,
    }
  },
)

export default usesupplieVipMenuStore
