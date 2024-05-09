// 该文件为系统默认配置，请勿修改！！！

import type { RecursiveRequired, Settings } from '#/global'

const globalSettingsDefault: RecursiveRequired<Settings.all> = {
  app: {
    lightTheme: 'light',
    darkTheme: 'dark',
    colorScheme: 'light',
    defaultLang: '',
    enablePermission: false,
    enableProgress: true,
    enableDynamicTitle: false,
    storagePrefix: 'fa_',
    enableWatermark: false,
    enableErrorLog: false,
    routeBaseOn: 'backend',
    direction: 'ltr',
  },
  userPreferences: {
    enable: false,
    storageTo: 'local',
  },
  home: {
    enable: true,
    title: '主页',
    fullPath: '/',
  },
  layout: {
    widthMode: 'adaption',
    enableMobileAdaptation: false,
  },
  menu: {
    baseOn: 'backend',
    menuMode: 'side',
    isRounded: false,
    menuActiveStyle: '',
    switchMainMenuAndPageJump: false,
    subMenuUniqueOpened: true,
    subMenuOnlyOneHide: false,
    subMenuCollapse: false,
    subMenuAutoCollapse: false,
    enableSubMenuCollapseButton: false,
    enableHotkeys: false,
  },
  topbar: {
    mode: 'static',
    switchTabbarAndToolbar: false,
  },
  tabbar: {
    enable: false,
    style: '',
    enableIcon: false,
    mergeTabsBy: '',
    enableMemory: false,
    enableHotkeys: false,
    storageTo: 'local',
  },
  toolbar: {
    favorites: false,
    breadcrumb: true,
    navSearch: true,
    notification: false,
    i18n: false,
    fullscreen: false,
    pageReload: false,
    colorScheme: false,
    layout: ['favorites', 'breadcrumb', '->', 'navSearch', 'notification', 'i18n', 'fullscreen', 'pageReload', 'colorScheme'],
  },
  favorites: {
    storageTo: 'local',
  },
  breadcrumb: {
    style: '',
    enableMainMenu: false,
  },
  mainPage: {
    enableHotkeys: true,
    iframeCacheMax: 3,
    enableTransition: true,
    transitionMode: 'fade',
  },
  navSearch: {
    enableHotkeys: true,
  },
  copyright: {
    enable: false,
    dates: '',
    company: '',
    website: '',
    beian: '',
  },
}

export default globalSettingsDefault
