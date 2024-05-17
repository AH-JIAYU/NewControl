import api from '@/api/modules/setting_permissions'

const useButtonPermissionStore = defineStore(
  // 唯一ID
  'buttonPermission',
  () => {
    const permissions = ref([])
    const getPermissions = computed(async () => {
      if (permissions.value.length) {
        return permissions.value
      }
      const { data } = await api.list()
      return data
    })
    return {
      permissions,
      getPermissions,
    }
  },
)

export default useButtonPermissionStore
