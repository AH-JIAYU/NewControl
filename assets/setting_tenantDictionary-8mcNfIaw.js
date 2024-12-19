
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{af as a}from"./index-C0vqyojX.js";const n={list:()=>a.get("/tenant/dict/getTenantDict"),getTenantCatalogueDictionary:t=>a.get(`/tenant/dict/getTenantDictByDictId/${t}`),getTenantDataDictionary:t=>a.get(`/tenant/dict/getTenantDictDataSource/${t}`),getDataDictionaryId:t=>a.get(`/tenant/dict/getTenantDictDataSourceByDataSourceId/${t}`)};export{n as a};
