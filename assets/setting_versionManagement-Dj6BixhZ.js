
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{af as t}from"./index-D_pmL2Eu.js";const i={list:()=>t.get("/version/getVersionList"),detail:e=>t.get("setting/version_management/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("version/insertVersion",e),edit:e=>t.post("version/updateVersion",e),delete:e=>t.delete(`version/deleteVersion/${e}`)};export{i as a};
