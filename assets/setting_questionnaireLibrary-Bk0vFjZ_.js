
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{ah as t}from"./index-DNIrU4FX.js";const o={list:e=>t.post("category/getCategory",e),create:e=>t.post("category/insertCategory",e),edit:e=>t.post("category/updateCategory",e),delete:e=>t.post("category/deleteCategory",e),setSurvey:e=>t.post("/problem/insertOrUpdateOrDeleteProblem",e),getSurvey:e=>t.post("/problem/insertOrUpdateOrDeleteProblem",e),getId:()=>t.get("/generate/generateId")};export{o as a};
