"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[2910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),g=a(n),m=o,f=g["".concat(p,".").concat(m)]||g[m]||u[m]||l;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var a=2;a<l;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var r=n(7462),o=(n(7294),n(3905));const l={id:"telescope_theme",title:"NvChad Telescope Theme"},c=void 0,s={unversionedId:"Recipes/telescope_theme",id:"version-2.0.0/Recipes/telescope_theme",title:"NvChad Telescope Theme",description:"This code snippet makes the default theme telescope look like the default NvChad telescope theme:",source:"@site/versioned_docs/version-2.0.0/Recipes/telescope_theme.md",sourceDirName:"Recipes",slug:"/Recipes/telescope_theme",permalink:"/2.0.0/Recipes/telescope_theme",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"telescope_theme",title:"NvChad Telescope Theme"},sidebar:"docs",previous:{title:"Customizing Statusline",permalink:"/2.0.0/Recipes/status"},next:{title:"Unattended Installation",permalink:"/2.0.0/Recipes/unattended_install"}},p={},a=[],i={toc:a};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This code snippet makes the default theme telescope look like the default NvChad telescope theme:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of telescope theme",src:n(9810).Z,width:"1862",height:"1022"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  default_theme = {\n    colors = function(C)\n      C.telescope_green = C.green\n      C.telescope_red = C.red\n      C.telescope_fg = C.fg\n      C.telescope_bg = C.black_1\n      C.telescope_bg_alt = C.bg_1\n      return C\n    end,\n    highlights = function(hl)\n      local C = require "default_theme.colors"\n      hl.TelescopeBorder = { fg = C.telescope_bg_alt, bg = C.telescope_bg }\n      hl.TelescopeNormal = { bg = C.telescope_bg }\n      hl.TelescopePreviewBorder = { fg = C.telescope_bg, bg = C.telescope_bg }\n      hl.TelescopePreviewNormal = { bg = C.telescope_bg }\n      hl.TelescopePreviewTitle = { fg = C.telescope_bg, bg = C.telescope_green }\n      hl.TelescopePromptBorder = { fg = C.telescope_bg_alt, bg = C.telescope_bg_alt }\n      hl.TelescopePromptNormal = { fg = C.telescope_fg, bg = C.telescope_bg_alt }\n      hl.TelescopePromptPrefix = { fg = C.telescope_red, bg = C.telescope_bg_alt }\n      hl.TelescopePromptTitle = { fg = C.telescope_bg, bg = C.telescope_red }\n      hl.TelescopeResultsBorder = { fg = C.telescope_bg, bg = C.telescope_bg }\n      hl.TelescopeResultsNormal = { bg = C.telescope_bg }\n      hl.TelescopeResultsTitle = { fg = C.telescope_bg, bg = C.telescope_bg }\n      return hl\n    end,\n  },\n}\n')))}u.isMDXComponent=!0},9810:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/telescope_theme-e8afecd9d0d8fc0b2b343d573c0a37cc.png"}}]);