
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{f as e}from"./index-C3PJOLdt.js";const a={list:()=>e.get("dict/get/getDict"),create:t=>e.post("/dict/insert/insertDict",t),edit:t=>e.post("/dict/update/updateDict",t),delete:t=>e.post("/dict/delete/deleteDict",{id:t}),itemList:t=>e.get(`/dict/get/getDictDataSourceByDictId/${t}`),itemCreate:t=>e.post("/dict/insert/insertDictDataSource",t),itemEdit:t=>e.post("/dict/update/updateDataSourceById",t),itemDelete:t=>e.delete(`/dict/delete/deleteDataSourceById/${t}`),get:t=>e.get("dictionary/get",{params:{code:t},baseURL:"/mock/"})};export{a};
