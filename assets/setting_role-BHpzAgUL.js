
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{n as t}from"./index-BEQOMaLP.js";const a={list:e=>t.get("role/get/getRole",{params:e}),detail:e=>t.get("setting/role/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("role/insert/insertRole",e),edit:e=>t.post("role/update/updateRole",e),delete:e=>t.post("role/delete/deleteRole",{role:e})};export{a};
