
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{af as t}from"./index-BF0CLg3s.js";const l={list:()=>t.get("role/getRole"),detail:e=>t.get("setting/role/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("role/insertRole",e),edit:e=>t.post("role/updateRole",e),delete:e=>t.post("role/deleteRole",{id:e})};export{l as a};
