import Mock from 'mockjs'

const AllList: any[] = []
for (let i = 0; i < 50; i++) {
  AllList.push(Mock.mock({
    id: '@id',
    title: '@ctitle(10, 20)',
  }))
}
const pageList = [
  {
    id: '1791299210415542274',
    role: 'admin',
    roleName: '管理员',
    menuId: [
      '1791018376558891009',
      '1791020417562439681',
      '1791022882937217026',
      '1791023092404953090',
      '1791023280737591298',
      '1791023384588558337',
      '1791023699522068482',
      '1791023814722822146',
      '1791023920217956353',
      '1791020868437536770',
      '1791024022101794817',
      '1791024222690189314',
      '1791024377317400578',
    ],
    permissions: [
      'menu:insert',
    ],
  },
  {
    id: '1791336039554547713',
    role: 'test',
    roleName: '测试角色',
    menuId: [
      '1791018376558891009',
      '1791020417562439681',
      '1791022882937217026',
      '1791023092404953090',
      '1791023280737591298',
      '1791023384588558337',
      '1791023699522068482',
      '1791023814722822146',
      '1791023920217956353',
      '1791020868437536770',
      '1791024022101794817',
      '1791024222690189314',
      '1791024377317400578',
    ],
    permissions: [
      'menu:insert',
    ],
  },
]
export default [
  {
    url: '/mock/setting/version_management/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: pageList.length,
        },
      }
    },
  },
  {
    url: '/mock/setting/version_management/detail',
    method: 'get',
    response: (option: any) => {
      const info = AllList.filter(item => item.id === option.query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/setting/version_management/create',
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
    url: '/mock/setting/version_management/edit',
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
    url: '/mock/setting/version_management/delete',
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
