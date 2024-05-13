import Mock from 'mockjs'

const AllList: any[] = [
  {
    id: 1,
    role: 'admin',
    menu: [1, 2, 3, 7, 8, 9], // 配置的全部
    permission: [1, 2, 3], // 所有
  },
  {
    id: 2,
    role: 'staff',
    menu: [4, 5],
    permission: [1, 2], // 没有删除
  },
]

export default [
  {
    url: '/mock/setting/role/list',
    method: 'get',
    response: (option: any) => {
      const { title, from, limit } = option.query
      const list = AllList.filter((item) => {
        return title ? item.title.includes(title) : true
      })
      const pageList = list.filter((item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: list.length,
        },
      }
    },
  },
  {
    url: '/mock/setting/role/detail',
    method: 'get',
    response: (option: any) => {
      const info = AllList.filter(item => item.id === Number(option.query.id) )
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/setting/role/create',
    method: 'post',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          isSuccess: true,
        },
      }
    },
  },
  {
    url: '/mock/setting/role/edit',
    method: 'post',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          isSuccess: true,
        },
      }
    },
  },
  {
    url: '/mock/setting/role/delete',
    method: 'post',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          isSuccess: true,
        },
      }
    },
  },
]
