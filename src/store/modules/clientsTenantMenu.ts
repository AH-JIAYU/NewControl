import api from '@/api/modules/tenant_tenantMenu'

const useClientstenantMenuStore = defineStore(
  // 唯一ID
  'clientsTenantMenu',
  () => {
    const tenantMenu = ref([])
    const gettenantMenu = computed(async () => {
      if (tenantMenu.value.length) {
        return tenantMenu.value
      }
      const { data } = await api.list({ type: 'normal' })
      return data
    })
    return {
      tenantMenu,
      gettenantMenu,
    }
  },
)

export default useClientstenantMenuStore
