import { defineFakeRoute } from 'vite-plugin-fake-server/client'

// 导航
const menuList = [
  {
    id: 1,
    parentId: 0,
    meta: {
      title: '演示',
      icon: 'uim:box',
      activeIcon: '',
      auth: [],
      auths: [],
    },
    children: [
      {
        id: 2,
        parentId: 1,
        path: '/multilevel_menu_example',
        redirect: '/multilevel_menu_example/page',
        component: 'Layout',
        name: 'multilevelMenuExample',
        meta: {
          title: '多级导航',
          icon: 'heroicons-solid:menu-alt-3',
          activeIcon: '',
          defaultOpened: false,
          alwaysOpened: false,
          permanent: false,
          auth: [],
          auths: [
            {
              name: '测试权限1',
              value: 'test1',
            },
            {
              name: '测试权限2',
              value: 'test2',
            },
            {
              name: '测试权限3',
              value: 'test3',
            },
          ],
          menu: true,
          breadcrumb: true,
          activeMenu: '',
          cache: [],
          noCache: [],
          badge: '',
          newWindow: false,
          link: '',
          iframe: '',
          copyright: false,
          paddingBottom: '0px',
        },
        children: [
          {
            id: 3,
            parentId: 2,
            path: 'page',
            redirect: '',
            component: 'multilevel_menu_example/page.vue',
            name: 'multilevelMenuExample1',
            meta: {
              title: '导航1',
              icon: '',
              activeIcon: '',
              defaultOpened: false,
              alwaysOpened: false,
              permanent: false,
              auth: [],
              auths: [],
              menu: true,
              breadcrumb: true,
              activeMenu: '',
              cache: [],
              noCache: [],
              badge: '',
              newWindow: false,
              link: '',
              iframe: '',
              copyright: false,
              paddingBottom: '0px',
            },
          },
        ],
      },
    ],
  },
  {
    id: 50,
    parentId: 0,
    meta: {
      title: '页面',
      i18n: '',
      icon: 'ri:pages-line',
      activeIcon: '',
      auth: [],
      auths: [],
    },
    children: [
      {
        id: 51,
        parentId: 50,
        path: '/pages_example/general',
        component: 'Layout',
        redirect: '/pages_example/general/manager',
        name: 'pagesExampleGeneral',
        meta: {
          title: '通用',
          icon: '',
          activeIcon: '',
          defaultOpened: false,
          alwaysOpened: false,
          permanent: false,
          auth: [],
          auths: [],
          menu: true,
          breadcrumb: true,
          activeMenu: '',
          cache: [],
          noCache: [],
          badge: '',
          newWindow: false,
          link: '',
          iframe: '',
          copyright: false,
          paddingBottom: '0px',
        },
        children: [
          {
            id: 52,
            parentId: 51,
            path: 'manager',
            name: 'pagesExampleGeneralManager',
            redirect: '/pages_example/general/manager',
            meta: {
              title: '管理员管理',
              icon: '',
              activeIcon: '',
              defaultOpened: false,
              alwaysOpened: false,
              permanent: false,
              auth: [],
              auths: [
                {
                  name: '浏览',
                  value: 'manager.browse',
                },
                {
                  name: '新增',
                  value: 'manager.create',
                },
                {
                  name: '编辑',
                  value: 'manager.edit',
                },
                {
                  name: '删除',
                  value: 'manager.delete',
                },
              ],
              menu: true,
              breadcrumb: true,
              activeMenu: '',
              cache: [],
              noCache: [],
              badge: '',
              newWindow: false,
              link: '',
              iframe: '',
              copyright: false,
              paddingBottom: '0px',
            },
            children: [
              {
                id: 53,
                parentId: 52,
                path: '',
                name: 'pagesExampleGeneralManagerList',
                component: 'pages_example/manager/list.vue',
                meta: {
                  title: '管理员列表',
                  icon: '',
                  activeIcon: '',
                  defaultOpened: false,
                  alwaysOpened: false,
                  permanent: false,
                  auth: [
                    'manager.browse',
                  ],
                  auths: [],
                  menu: false,
                  breadcrumb: false,
                  activeMenu: '',
                  cache: [
                    'pagesExampleGeneralManagerCreate',
                    'pagesExampleGeneralManagerEdit',
                  ],
                  noCache: [],
                  badge: '',
                  newWindow: false,
                  link: '',
                  iframe: '',
                  copyright: false,
                  paddingBottom: '0px',
                },
              },
              {
                id: 53,
                parentId: 52,
                path: 'detail',
                name: 'pagesExampleGeneralManagerCreate',
                component: 'pages_example/manager/detail.vue',
                meta: {
                  title: '新增管理员',
                  icon: '',
                  activeIcon: '/pages_example/general/manager',
                  defaultOpened: false,
                  alwaysOpened: false,
                  permanent: false,
                  auth: [
                    'manager.create',
                  ],
                  auths: [],
                  menu: false,
                  breadcrumb: true,
                  activeMenu: '',
                  cache: [],
                  noCache: [],
                  badge: '',
                  newWindow: false,
                  link: '',
                  iframe: '',
                  copyright: false,
                  paddingBottom: '0px',
                },
              },
              {
                id: 54,
                parentId: 52,
                path: 'detail/:id',
                name: 'pagesExampleGeneralManagerEdit',
                component: 'pages_example/manager/detail.vue',
                meta: {
                  title: '编辑管理员',
                  icon: '',
                  activeIcon: '',
                  defaultOpened: false,
                  alwaysOpened: false,
                  permanent: false,
                  auth: [
                    'manager.edit',
                  ],
                  auths: [],
                  menu: false,
                  breadcrumb: true,
                  activeMenu: '/pages_example/general/manager',
                  cache: [],
                  noCache: [],
                  badge: '',
                  newWindow: false,
                  link: '',
                  iframe: '',
                  copyright: false,
                  paddingBottom: '0px',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]

export default defineFakeRoute([
  {
    url: '/mock/menu/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: menuList,
      }
    },
  },
  {
    url: '/mock/menu/detail',
    method: 'get',
    response: ({ query }) => {
      function findMenu(list: any, id: number): any {
        for (const i in list) {
          if (list[i].id === id) {
            const retn = {
              ...list[i],
            }
            delete retn.children
            return retn
          }
          else if (list[i].children) {
            const temp = findMenu(list[i].children, id)
            if (temp) {
              return temp
            }
          }
        }
      }
      const info = findMenu(menuList, ~~query.id)
      return {
        error: '',
        status: 1,
        data: info,
      }
    },
  },
  {
    url: '/mock/menu/create',
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
    url: '/mock/menu/edit',
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
    url: '/mock/menu/delete',
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
])
