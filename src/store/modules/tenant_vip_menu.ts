import api from '@/api/modules/tenant_vip_menu'

const usevipMenuStore = defineStore(
  // 唯一ID
  'tenantVipMenu',
  () => {
    const vipMenu = ref([])
    const getvipMenu = computed(async () => {
      if (vipMenu.value.length) {
        return vipMenu.value
      }
      const { data } = await api.list({ type: 'normal' })
      return data
    })
    return {
      vipMenu,
      getvipMenu,
    }
  },
)

export default usevipMenuStore
