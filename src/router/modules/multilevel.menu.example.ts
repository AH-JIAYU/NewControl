import type { RouteRecordRaw } from 'vue-router'
import { $t } from '@/locales'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/multilevel_menu_example',
  component: Layout,
  redirect: '/multilevel_menu_example/page',
  name: 'multilevelMenuExample',
  meta: {
    title: '导航',
    i18n: $t('route.multimenu.root'),
    icon: 'i-heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: 'page',
      name: 'multilevelMenuExample1',
      component: () => import('@/views/multilevel_menu_example/page.vue'),
      meta: {
        title: '导航1',
        i18n: $t('route.multimenu.page'),
      },
    },
    {
      path: 'level2',
      name: 'multilevelMenuExample2',
      redirect: '/multilevel_menu_example/level2/page',
      meta: {
        title: '导航2',
        i18n: $t('route.multimenu.level2.root'),
      },
      children: [
        {
          path: 'page',
          name: 'multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: '导航2-1',
            i18n: $t('route.multimenu.level2.page'),
          },
        },
        {
          path: 'level3',
          name: 'multilevelMenuExample2-2',
          redirect: '/multilevel_menu_example/level2/level3/page1',
          meta: {
            title: '导航2-2',
            i18n: $t('route.multimenu.level2.level3.root'),
          },
          children: [
            {
              path: 'page1',
              name: 'multilevelMenuExample2-2-1',
              component: () => import('@/views/multilevel_menu_example/level2/level3/page1.vue'),
              meta: {
                title: '导航2-2-1',
                i18n: $t('route.multimenu.level2.level3.page1'),
              },
            },
            {
              path: 'page2',
              name: 'multilevelMenuExample2-2-2',
              component: () => import('@/views/multilevel_menu_example/level2/level3/page2.vue'),
              meta: {
                title: '导航2-2-2',
                i18n: $t('route.multimenu.level2.level3.page2'),
              },
            },
          ],
        },
      ],
    },
  ],
}

export default routes
