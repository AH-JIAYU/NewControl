
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{n as t}from"./index-b9-Qwvd3.js";const a={list:e=>t.get("menu/list",{baseURL:"/mock/",data:e}),detail:e=>t.get("menu/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("menu/insert/Menu",e),edit:e=>t.post("menu/insert/Menu",e),delete:e=>t.delete(`menu/delete/Menu/${e}`)};export{a};
