
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as e}from"./index-0FEud4J9.js";const n={list:t=>e.get("tenant/tenant_template/list",{params:t,baseURL:"/mock/"}),detail:t=>e.get("tenant/tenant_template/detail",{params:{id:t},baseURL:"/mock/"}),create:t=>e.post("tenant/tenant_template/create",t,{baseURL:"/mock/"}),edit:t=>e.post("tenant/tenant_template/edit",t,{baseURL:"/mock/"}),delete:t=>e.post("tenant/tenant_template/delete",{id:t},{baseURL:"/mock/"})};export{n as a};
