import api from '@/api/modules/supplie_supplieManagement'

const usesupplieMenuStore = defineStore(
  // 唯一ID
  'supplieMenu',
  () => {
    const supplieMenu = ref([])
    const getsupplieMenu = computed(async () => {
      if (supplieMenu.value.length) {
        return supplieMenu.value
      }
      const { data } = await api.list({ type: 'normal' })
      return data
    })
    return {
      supplieMenu,
      getsupplieMenu,
    }
  },
)

export default usesupplieMenuStore
