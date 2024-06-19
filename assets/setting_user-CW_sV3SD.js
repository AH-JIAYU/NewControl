
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{ah as s}from"./index-CUKb-Uvd.js";const r={list:()=>s.get("user/get/getUser"),create:e=>s.post("user/register",e),edit:e=>s.post("user/update/updateUser",e),setUserRole:e=>s.post("user/update/setUserRole",e),delete:e=>s.post("/user/delete/deleteUser",e),passwordReset:e=>s.post("setting/user/password/reset",{id:e},{baseURL:"/mock/"}),changeStatus:e=>s.post("setting/user/change/status",e,{baseURL:"/mock/"}),check:e=>s.post("setting/user/check",e,{baseURL:"/mock/"})};export{r as a};
