import Mock from 'mockjs'

const AllList: any[] = []
for (let i = 0; i < 50; i++) {
  AllList.push(Mock.mock({
    id: '@id',
    title: '@ctitle(10, 20)',
  }))
}
const data = [
  {
    menu: 'multilevel_menu_example', //路由name 唯一
    type: 'insert', // 类型
    label: '新增按钮', // 备注
    name: 'cs', // key
    id: '1',
    Permission: 'multilevel_menu_example-write-cs',
  },
  {
    menu: 'multilevel_menu_example',
    type: 'update', // 类型
    label: '编辑按钮', // 备注
    name: 'cs2', // key
    id: '2',
    Permission: 'multilevel_menu_example-create-cs2',
  },
  {
    menu: 'multilevel_menu_exampleMenu',
    type: 'delete', // 类型
    label: '删除按钮', // 备注
    name: 'cs3', // key
    id: '3',
    Permission: 'multilevel_menu_exampleMenu-write-cs3',
  },
]

export default [
  {
    url: '/mock/setting/permissions/list',
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
        // data: {
        //   list: pageList,
        //   total: list.length,
        // },
        data,
      }
    },
  },
  {
    url: '/mock/setting/permissions/detail',
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
    url: '/mock/setting/permissions/create',
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
    url: '/mock/setting/permissions/edit',
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
    url: '/mock/setting/permissions/delete',
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
