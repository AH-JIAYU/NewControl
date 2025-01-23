
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{af as e}from"./index-BBIE9_do.js";const c={list:()=>e.get("dict/getDict"),create:t=>e.post("/dict/insertDict",t),edit:t=>e.post("/dict/updateDict",t),delete:t=>e.post("/dict/deleteDict",{id:t}),itemList:t=>e.post("/dict/getDictDataSourceByDictId",t),itemCreate:t=>e.post("/dict/insertDictDataSource",t),itemEdit:t=>e.post("/dict/updateDataSourceById",t),itemDelete:t=>e.delete(`/dict/deleteDataSourceById/${t}`),get:t=>e.get("dictionary/get",{params:{code:t},baseURL:"/mock/"})};export{c as a};
