import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
  {
    url: '/mock/app/route/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: [
          // 主导航
          {
            id: 1,
            parentId: null,
            menuLevel: 1,
            meta: {
              title: '配置',
              icon: 'uim:box',
            },
            children: [
              // 次导航（一级路由）
              {
                id: 2,
                parentId: 1,
                menuLevel: 2,
                path: '/multilevel_menu_example',
                component: 'Layout',
                redirect: '//multilevel_menu_example/multilevel_menu_exampleMenu',
                name: 'multilevel_menu_example',
                meta: {
                  title: '配置',
                  icon: 'heroicons-solid:menu-alt-3',
                  alwaysOpened: true,
                },
                children: [
                  // 次导航（二级路由）
                  {
                    id: 3,
                    parentId: 3,
                    menuLevel: 3,
                    path: 'multilevel_menu_exampleMenu',
                    name: 'multilevel_menu_exampleMenu',
                    component: 'setting/menu/list.vue',
                    meta: {
                      title: '菜单管理',
                    },
                  },
                  {
                    id: 7,
                    parentId: 3,
                    menuLevel: 3,
                    path: 'role',
                    name: 'multilevel_menu_exampleRole',
                    component: 'setting/role/list.vue',
                    meta: {
                      title: '角色管理',
                    },
                    children: [
                      {
                        id: 8,
                        parentId: 7,
                        menuLevel: 4,
                        path: 'detail',
                        name: 'multilevel_menu_exampleRoleCreate',
                        component: 'setting/role/detail.vue',
                        meta: {
                          title: '新增角色',
                          menu: false,
                        },
                      },
                      {
                        id: 9,
                        parentId: 7,
                        menuLevel: 4,
                        path: 'detail/:id',
                        name: 'multilevel_menu_exampleRoleEdit',
                        component: 'setting/role/detail.vue',
                        meta: {
                          title: '编辑角色',
                          menu: false,
                        },
                      },
                    ],
                  },
                  {
                    id: 10,
                    parentId: 3,
                    menuLevel: 3,
                    path: 'permissions',
                    name: 'multilevel_menu_examplePermissions',
                    component: 'setting/permissions/list.vue',
                    meta: {
                      title: '按钮权限',
                    },
                    children: [
                      {
                        id: 11,
                        parentId: 10,
                        menuLevel: 4,
                        path: 'detail',
                        name: 'multilevel_menu_examplePermissionsCreate',
                        component: 'setting/permissions/detail.vue',
                        meta: {
                          title: '新增按钮权限',
                          menu: false,
                        },
                      },
                      {
                        id: 12,
                        parentId: 10,
                        menuLevel: 4,
                        path: 'detail/:id',
                        name: 'multilevel_menu_examplePermissionsEdit',
                        component: 'setting/permissions/detail.vue',
                        meta: {
                          title: '编辑按钮权限',
                          menu: false,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          // 主导航
          {
            id: 4, parentId: null,
            menuLevel: 1,
            meta: {
              title: '租户',
              icon: 'uim:box',
            },
            children: [
              // 次导航（一级路由）
              {
                id: 5, parentId: 4,
                menuLevel: 2,
                path: '/tenant',
                component: 'Layout',
                redirect: '/tenant/teanantMenu',
                name: 'tenant',
                meta: {
                  title: '租户',
                  icon: 'heroicons-solid:menu-alt-3',
                  alwaysOpened: true,
                },
                children: [
                  // 次导航（二级路由）
                  {
                    id: 6, parentId: 5,
                    menuLevel: 3,
                    path: 'teanantMenu',
                    name: 'teanantMenu',
                    component: 'tenant/tenantMenu/list.vue',
                    meta: {
                      title: '菜单管理',
                    },
                  },
                ],
              },
            ],
          },
        ],
      }
    },
  },
  {
    url: '/mock/app/menu/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: [
          {
            meta: {
              title: '演示',
              icon: 'uim:box',
            },
            children: [
              {
                meta: {
                  title: '多级导航',
                  icon: 'heroicons-solid:menu-alt-3',
                },
                children: [
                  {
                    path: '/multilevel_menu_example/page',
                    meta: {
                      title: '导航1',
                    },
                  },
                  {
                    meta: {
                      title: '导航2',
                    },
                    children: [
                      {
                        path: '/multilevel_menu_example/level2/page',
                        meta: {
                          title: '导航2-1',
                        },
                      },
                      {
                        meta: {
                          title: '导航2-2',
                        },
                        children: [
                          {
                            path: '/multilevel_menu_example/level2/level3/page1',
                            meta: {
                              title: '导航2-2-1',
                            },
                          },
                          {
                            path: '/multilevel_menu_example/level2/level3/page2',
                            meta: {
                              title: '导航2-2-2',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }
    },
  },
])
