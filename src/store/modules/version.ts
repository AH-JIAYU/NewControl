import api from '@/api/modules/setting_versionManagement'

const useVersionStore = defineStore(
  // 唯一ID
  'version',
  () => {
    const versionMenu = ref([])
    const getVersion = computed(async () => {
      if (versionMenu.value.length) {
        return versionMenu.value
      }
      const { data } = await api.list()
      return data
    })
    return {
      versionMenu,
      getVersion,
    }
  },
)

export default useVersionStore
