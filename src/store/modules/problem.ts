import apiDictionary from '@/api/modules/setting_basisDictionary'

const useProblemStore = defineStore(
  // 唯一ID
  'problem',
  () => {
    const problem = ref([])
    const country = ref()
    const getProblem = computed(async () => {
      if (problem.value.length) {
        return problem.value
      }
      const { data } = await apiDictionary.list()
      return data
    })
    return {
      problem,
      country,
      getProblem,
    }
  },
)

export default useProblemStore
