import api from '../index'

export default {
  // 后端获取路由数据 mock
  routeList: () => api.get('app/route/list', {
    baseURL: '/mock/',
  }),
  // 后端接口路由
  // routeList: () => api.get('menu/getMenuList'),

  // 基于文件系统路由模式下，后端获取导航菜单数据
  menuList: () => api.get('app/menu/list', {
    baseURL: '/mock/',
  }),
}
