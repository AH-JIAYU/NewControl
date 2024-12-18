
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://fantastic-admin.gitee.io
 * Github https://fantastic-admin.github.io
 */

import{af as e}from"./index-AugZrloc.js";const a={list:t=>e.get("button/getButton",{params:t}),create:t=>e.post("button/insertButton",t),edit:t=>e.post("button/updateButton",t),delete:t=>e.delete(`button/updateButton/${t}`)};export{a};
