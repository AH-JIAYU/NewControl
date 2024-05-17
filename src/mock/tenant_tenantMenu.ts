import { defineFakeRoute } from 'vite-plugin-fake-server/client'

// 导航
const menuList = [
  // 主导航
  {
    id: 1,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '首页',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 2,
        parentId: 1,
        menuLevel: 2,
        path: '/',
        component: 'Layout',
        redirect: '/homePage',
        name: 'multilevelMenuExample',
        meta: {
          title: '首页',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'homePage',
            name: 'homePage',
            component: 'index/index/list.vue',
            meta: {
              title: '数据中心',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'datacenter',
            name: 'datacenter',
            component: 'index/data/list.vue',
            meta: {
              title: '客户报告',
            },
          },
        ],
      },
    ],
  },
  {
    id: 12,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '项目管理',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 22,
        parentId: 12,
        menuLevel: 2,
        path: '/projectManagement',
        component: 'Layout',
        redirect: '/projectManagement/list',
        name: 'projectManagement',
        meta: {
          title: '项目管理',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 32,
            parentId: 12,
            menuLevel: 3,
            path: 'list',
            name: 'list',
            component: 'projectManagement/list/list.vue',
            meta: {
              title: '项目列表',
            },
          },
          {
            id: 33,
            parentId: 12,
            menuLevel: 3,
            path: 'settlement',
            name: 'settlement',
            component: 'projectManagement/settlement/list.vue',
            meta: {
              title: '项目结算',
            },
          },
          {
            id: 71,
            parentId: 12,
            menuLevel: 3,
            path: 'materials',
            name: 'materials',
            component: 'projectManagement/materials/list.vue',
            meta: {
              title: '项目素材',
            },
          },
          {
            id: 52,
            parentId: 32,
            menuLevel: 3,
            path: 'supplementaryPaymentRefund',
            name: 'supplementaryPaymentRefund',
            component: 'projectManagement/supplementaryPaymentRefund/list.vue',
            meta: {
              title: '项目补退款',
            },
          },
          {
            id: 77,
            parentId: 32,
            menuLevel: 3,
            path: 'scheduling',
            name: 'scheduling',
            component: 'projectManagement/scheduling/list.vue',
            meta: {
              title: '项目调度',
            },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '用户管理',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 2,
        parentId: 1,
        menuLevel: 2,
        path: '/user',
        component: 'Layout',
        redirect: '/user/customer',
        name: 'user',
        meta: {
          title: '用户管理',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'customer',
            name: 'customer',
            component: 'user/customer/list.vue',
            meta: {
              title: '客户列表',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'supplier',
            name: 'supplier',
            component: 'user/supplier/list.vue',
            meta: {
              title: '供应商列表',
            },
          },
          {
            id: 7,
            parentId: 3,
            menuLevel: 3,
            path: 'subVip',
            name: 'subVip',
            component: 'user/subVip/list.vue',
            meta: {
              title: '子会员列表',
            },
          },
          {
            id: 7,
            parentId: 3,
            menuLevel: 3,
            path: 'uidParsing',
            name: 'uidParsing',
            component: 'user/uidParsing/list.vue',
            meta: {
              title: 'uid解析',
            },
          },
          {
            id: 7,
            parentId: 3,
            menuLevel: 3,
            path: 'dataExport',
            name: 'dataExport',
            component: 'user/dataExport/list.vue',
            meta: {
              title: '数据导出',
            },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '记录管理',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 2,
        parentId: 1,
        menuLevel: 2,
        path: '/record',
        component: 'Layout',
        redirect: '/record/survey',
        name: 'record',
        meta: {
          title: '记录管理',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'recordsurvey',
            name: 'recordsurvey',
            component: 'record/survey/list.vue',
            meta: {
              title: '调查记录',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'callback',
            name: 'callback',
            component: 'record/callback/list.vue',
            meta: {
              title: '回调记录',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'allocation',
            name: 'allocation',
            component: 'record/allocation/list.vue',
            meta: {
              title: '分配记录',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'flowOrder',
            name: 'flowOrder',
            component: 'record/flowOrder/list.vue',
            meta: {
              title: '流单记录',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'temination',
            name: 'temination',
            component: 'record/termination/list.vue',
            meta: {
              title: '终止记录',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'customerManagement',
            name: 'customerManagement',
            component: 'record/customerManagement/list.vue',
            meta: {
              title: '客户管理记录',
            },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '配置管理',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 2,
        parentId: 1,
        menuLevel: 2,
        path: '/configuration',
        component: 'Layout',
        redirect: '/configuration/supplierLevel',
        name: 'configuration',
        meta: {
          title: '配置管理',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'supplierLevel',
            name: 'supplierLevel',
            component: 'configuration/supplierLevel/list.vue',
            meta: {
              title: '供应商等级',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'role',
            name: 'role',
            component: 'configuration/role/list.vue',
            meta: {
              title: '角色管理',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'manager',
            name: 'manager',
            component: 'configuration/manager/list.vue',
            meta: {
              title: '用户管理',
            },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '财务管理',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 2,
        parentId: 1,
        menuLevel: 2,
        path: '/finance',
        component: 'Layout',
        redirect: '/finance/supplierSettlement',
        name: 'record',
        meta: {
          title: '财务管理',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'supplierSettlement',
            name: 'supplierSettlement',
            component: 'finance/supplierSettlement/list.vue',
            meta: {
              title: '供应商结算',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'invoice',
            name: 'invoice',
            component: 'finance/invoice/list.vue',
            meta: {
              title: '发票管理',
            },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '调查系统',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 2,
        parentId: 1,
        menuLevel: 2,
        path: '/survey',
        component: 'Layout',
        redirect: '/survey/data',
        name: 'survey',
        meta: {
          title: '调查系统',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'surveydata',
            name: 'surveydata',
            component: 'survey/data/list.vue',
            meta: {
              title: '数据中心',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'investigation_records',
            name: 'investigation_records',
            component: 'survey/investigation_records/list.vue',
            meta: {
              title: '调查记录',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'financialLogs',
            name: 'financialLogs',
            component: 'survey/financial_logs/list.vue',
            meta: {
              title: '财务日志',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'billManagement',
            name: 'billManagement',
            component: 'survey/bill_management/list.vue',
            meta: {
              title: '账单管理',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'irQuery',
            name: 'irQuery',
            component: 'survey/ir_query/list.vue',
            meta: {
              title: 'IR查询',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'setting',
            name: 'setting',
            component: 'survey/setting/list.vue',
            meta: {
              title: '系统设置',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'myProjeck',
            name: 'myProjeck',
            component: 'survey/myProjeck/list.vue',
            meta: {
              title: '我的项目',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'vip',
            name: 'vip',
            component: 'survey/vip/list.vue',
            meta: {
              title: '会员',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'vipGroup',
            name: 'vipGroup',
            component: 'survey/vipGroup/list.vue',
            meta: {
              title: '会员组',
            },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parentId: null,
    menuLevel: 1,
    meta: {
      title: '其他功能',
      icon: 'uim:box',
    },
    children: [
      // 次导航（一级路由）
      {
        id: 2,
        parentId: 1,
        menuLevel: 2,
        path: '/otherFunctions',
        component: 'Layout',
        redirect: '/otherFunctions/announcement',
        name: 'otherFunctions',
        meta: {
          title: '其他功能',
          icon: 'heroicons-solid:menu-alt-3',
          alwaysOpened: true,
        },
        children: [
          // 次导航（二级路由）
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'announcement',
            name: 'announcement',
            component: 'otherFunctions/announcement/list.vue',
            meta: {
              title: '文章公告',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'websites',
            name: 'websites',
            component: 'otherFunctions/websites/list.vue',
            meta: {
              title: '内部站点',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'nationalTable',
            name: 'nationalTable',
            component: 'otherFunctions/nationalTable/list.vue',
            meta: {
              title: '国家对照表',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'queryIP',
            name: 'queryIP',
            component: 'otherFunctions/queryIP/list.vue',
            meta: {
              title: 'IP查询',
            },
          },
          {
            id: 3,
            parentId: 3,
            menuLevel: 3,
            path: 'questionnaire',
            name: 'questionnaire',
            component: 'otherFunctions/questionnaire/list.vue',
            meta: {
              title: '问卷',
            },
          },
        ],
      },
    ],
  },
]
export default defineFakeRoute([
  {
    url: '/mock/tenantMenu/list',
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
