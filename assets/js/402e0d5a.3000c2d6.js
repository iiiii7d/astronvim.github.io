"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[7745],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(f,a(a({ref:n},p),{},{components:t})):i.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(7462),r=(t(7294),t(3905));const o={id:"icons",title:"Customize Icons"},a=void 0,s={unversionedId:"Recipes/icons",id:"Recipes/icons",title:"Customize Icons",description:"Disable Icons",source:"@site/docs/Recipes/icons.md",sourceDirName:"Recipes",slug:"/Recipes/icons",permalink:"/nightly/Recipes/icons",draft:!1,tags:[],version:"current",frontMatter:{id:"icons",title:"Customize Icons"},sidebar:"docs",previous:{title:"Disable Global Statusbar",permalink:"/nightly/Recipes/globalstatus"},next:{title:"Custom VS Code Style Snippets",permalink:"/nightly/Recipes/snippets"}},c={},l=[{value:"Disable Icons",id:"disable-icons",level:3},{value:"VS Code Style Icons",id:"vs-code-style-icons",level:3}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"disable-icons"},"Disable Icons"),(0,r.kt)("p",null,"Some users may want to disable icons across the entire user interface because they don't like icons or simply because they are using a machine that is unable to install a nerd font for whatever reason. To assist with this use case we have added a new option variable ",(0,r.kt)("inlineCode",{parentName:"p"},"vim.g.icons_enabled")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") that lets you disable the icons entirely and just have a text based user interface. To opt into this text based UI, it does require a user configuration setting the appropriate option. Here is a minimal ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that just disables the icons. ",(0,r.kt)("em",{parentName:"p"},"Note:")," This does require the user to restart and run ",(0,r.kt)("inlineCode",{parentName:"p"},":PackerSync")," to remove the icon plugins as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  options = {\n    g = {\n      icons_enabled = false,\n    },\n  },\n}\n")),(0,r.kt)("h3",{id:"vs-code-style-icons"},"VS Code Style Icons"),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vscode-codicons/tree/main/dist"},(0,r.kt)("inlineCode",{parentName:"a"},"codicon.ttf")," font")," installed then you can easily modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"lspkind")," options and the user interface ",(0,r.kt)("inlineCode",{parentName:"p"},"icons")," table in your ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file to match the icons used in VS Code. Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that sets the necessary values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  -- set up UI icons\n  icons = {\n    ActiveLSP = "\ueba2",\n    ActiveTS = "\ueba7 ",\n    BufferClose = "\uea76",\n    DefaultFile = "\uea7b",\n    Diagnostic = "\ueaac",\n    DiagnosticError = "\uea87",\n    DiagnosticHint = "\uea61",\n    DiagnosticInfo = "\uea74",\n    DiagnosticWarn = "\uea6c",\n    Ellipsis = "\uea7c",\n    FileModified = "\uea71",\n    FileReadOnly = "\uebe7",\n    FolderClosed = "\uea83",\n    FolderEmpty = "\ueaf7",\n    FolderOpen = "\ueaf7",\n    Git = "\uea84",\n    GitAdd = "\ueadc",\n    GitBranch = "\uea68",\n    GitChange = "\ueade",\n    GitConflict = "\ueafe",\n    GitDelete = "\ueadf",\n    GitIgnored = "\ueadd",\n    GitRenamed = "\ueae0",\n    GitStaged = "\ueab2",\n    GitUnstaged = "\ueab8",\n    GitUntracked = "\uea6a",\n    LSPLoaded = "\ueba4",\n    LSPLoading1 = "\ueb37",\n    LSPLoading2 = "\ueb37",\n    LSPLoading3 = "\ueb37",\n    MacroRecording = "\uead9",\n    NeovimClose = "\ueab8",\n  },\n  plugins = {\n    -- lspkind controls LSP icons\n    lspkind = function(config)\n      -- use codicons preset\n      config.preset = "codicons"\n      -- set some missing symbol types\n      config.symbol_map = {\n        Array = "\uea8a",\n        Boolean = "\uea8f",\n        Key = "\ueb11",\n        Namespace = "\uea8b",\n        Null = "\ueabd",\n        Number = "\uea90",\n        Object = "\ueb63",\n        Package = "\ueb29",\n        String = "\ueb8d",\n      }\n      return config\n    end,\n  },\n}\n')))}u.isMDXComponent=!0}}]);