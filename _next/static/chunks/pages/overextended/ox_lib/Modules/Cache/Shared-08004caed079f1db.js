(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4533],{9578:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_lib/Modules/Cache/Shared",function(){return n(4669)}])},4669:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var l=n(2676),r=n(2140),i=n(8745);let a=[{depth:2,value:"Default values",id:"default-values"},{depth:2,value:"Adding new cached values",id:"adding-new-cached-values"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",span:"span"},(0,i.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Shared"}),"\n",(0,l.jsx)(s.p,{children:"A table containing cached function results, which may be constants or infrequently changed."}),"\n",(0,l.jsx)(s.h2,{id:"default-values",children:"Default values"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["resource: ",(0,l.jsx)(s.code,{children:"string"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["the value returned by ",(0,l.jsx)(s.a,{href:"https://docs.fivem.net/natives/?_0xE5E9EBBB",children:"GetCurrentResourceName"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["game: ",(0,l.jsx)(s.code,{children:"'fxserver' | 'fivem' | 'redm'"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["the value returned by ",(0,l.jsx)(s.a,{href:"https://docs.fivem.net/natives/?_0xE8EAA18B",children:"GetGameName"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"adding-new-cached-values",children:"Adding new cached values"}),"\n",(0,l.jsx)(s.p,{children:"Values can be cached permanently, or added with a timeout."}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cache"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(key, func, timeout)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["key: ",(0,l.jsx)(s.code,{children:"string"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"a unique name to store and access the cached state."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["func: ",(0,l.jsx)(s.code,{children:"function"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"a function to call when the cache is invalidated/empty."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["timeout?: ",(0,l.jsx)(s.code,{children:"number"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"a timer in milliseconds to clear the cached state."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Wait"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    i "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cache"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'test'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5000"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"))"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- output:"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"6"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"6"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"6"})]})]})})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/overextended/ox_lib/Modules/Cache/Shared.mdx",route:"/overextended/ox_lib/Modules/Cache/Shared",timestamp:1730854598e3,title:"Shared",headings:a},pageNextRoute:"/overextended/ox_lib/Modules/Cache/Shared"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=9578)}),_N_E=e.O()}]);