import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

const Random = Mock.Random

const managerList: any[] = []
for (let i = 0; i < 50; i++) {
  managerList.push(Mock.mock({
    id: '@id',
    account: '@first',
    name: '@cname',
    sex: Random.natural(0, 2),
    mobile: /1\d{10}/,
    status: '@boolean',
  }))
}

export default defineFakeRoute([
  {
    url: '/mock/setting/user/list',
    method: 'get',
    response: ({ query }) => {
      const { account, name, mobile, sex, from, limit } = query
      let list = managerList.filter((item) => {
        return account ? item.account.includes(account) : true
      })
      list = list.filter((item) => {
        return name ? item.name.includes(name) : true
      })
      list = list.filter((item) => {
        return mobile ? item.mobile === mobile : true
      })
      list = list.filter((item) => {
        return sex ? item.sex === ~~sex : true
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
    url: '/mock/setting/user/detail',
    method: 'get',
    response: ({ query }) => {
      const info = managerList.filter(item => item.id === query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/setting/user/create',
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
    url: '/mock/setting/user/edit',
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
    url: '/mock/setting/user/delete',
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
    url: '/mock/setting/user/password/reset',
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
    url: '/mock/setting/user/change/status',
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
    url: '/mock/setting/user/check',
    method: 'post',
    response: ({ body }) => {
      const { key, value, id } = body
      let exist = false
      exist = managerList.some((item) => {
        let flag
        switch (key) {
          case 'account':
            if (item.account === value && (id ? id !== item.id : true)) {
              flag = true
            }
            break
          case 'mobile':
            if (item.mobile === value && (id ? id !== item.id : true)) {
              flag = true
            }
            break
        }
        return flag
      })
      return {
        error: '',
        status: 1,
        data: {
          exist,
        },
      }
    },
  },
])
