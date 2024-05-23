import api from '@/api/modules/tenant_tenantPermission'

const useTenantButtonPermissionStore = defineStore(
  // 唯一ID
  'buttonPermission',
  () => {
    const tenantPermissions = ref([])
    const getTenantPermissions = computed(async () => {
      if (tenantPermissions.value.length) {
        return tenantPermissions.value
      }
      const { data } = await api.list()
      return data
    })
    return {
      tenantPermissions,
      getTenantPermissions,
    }
  },
)

export default useTenantButtonPermissionStore
