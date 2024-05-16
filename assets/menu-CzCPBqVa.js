
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{n as t}from"./index-Bfo1XFaq.js";const a={list:e=>t.post("menu/get/getMenuList",e),detail:e=>t.get("menu/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("menu/insert/insertMenu",e),edit:e=>t.post("menu/update/updateMenu",e),delete:e=>t.post("menu/delete/deleteMenu",{id:e})};export{a};
