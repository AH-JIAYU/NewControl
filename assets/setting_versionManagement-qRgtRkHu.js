
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{ah as t}from"./index-_6B1mbBs.js";const i={list:()=>t.get("/version/get/getVersionList"),detail:e=>t.get("setting/version_management/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("version/insert/insertVersion",e),edit:e=>t.post("version/update/updateVersion",e),delete:e=>t.delete(`version/delete/deleteVersion/${e}`)};export{i as a};
