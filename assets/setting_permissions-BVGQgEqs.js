
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{n as e}from"./index-CTklHSgw.js";const i={list:s=>e.get("setting/permissions/list",{params:s,baseURL:"/mock/"}),detail:s=>e.get("setting/permissions/detail",{params:{id:s},baseURL:"/mock/"}),create:s=>e.post("setting/permissions/create",s,{baseURL:"/mock/"}),edit:s=>e.post("setting/permissions/edit",s,{baseURL:"/mock/"}),delete:s=>e.post("setting/permissions/delete",{id:s},{baseURL:"/mock/"})};export{i as a};
