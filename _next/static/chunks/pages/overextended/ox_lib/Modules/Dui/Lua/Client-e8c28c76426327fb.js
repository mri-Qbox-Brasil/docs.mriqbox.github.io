(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9520],{453:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_lib/Modules/Dui/Lua/Client",function(){return n(5433)}])},5433:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return c}});var l=n(2676),i=n(2140),r=n(8745);let c=[{depth:2,value:"lib.dui:new",id:"libduinew"},{depth:3,value:"Usage Example",id:"usage-example"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},(0,r.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Client"}),"\n",(0,l.jsx)(s.p,{children:"Simple and centralised dui creation, supporting sending message, change url and deletion"}),"\n",(0,l.jsx)(s.h2,{id:"libduinew",children:"lib.dui:new"}),"\n",(0,l.jsx)(s.p,{children:"Constructs instance of Dui."}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"lib.dui:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(data)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["data: ",(0,l.jsx)(s.code,{children:"table"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["url: ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:["width: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["height: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["debug?: ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Returns:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["dui: ",(0,l.jsx)(s.code,{children:"Dui"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["url: ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:["duiObject: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["duiHandle: ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:["runtimeTxd: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["txdObject: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["dictName: ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:["txtName: ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:["setUrl: ",(0,l.jsx)(s.code,{children:"function"}),"(url: ",(0,l.jsx)(s.code,{children:"string"}),")"]}),"\n",(0,l.jsxs)(s.li,{children:["sendMessage: ",(0,l.jsx)(s.code,{children:"function"}),"(data: ",(0,l.jsx)(s.code,{children:"table"}),")"]}),"\n",(0,l.jsxs)(s.li,{children:["remove: ",(0,l.jsx)(s.code,{children:"function"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" dui "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" lib.dui:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	url "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"nui://%s/web/index.html"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"):"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"format"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(cache.resource), "})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	width "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1920"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	height "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1080"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	debug "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Change url"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"dui:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setUrl"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://google.com"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Send a message"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"dui:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sendMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	action "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"display"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"	value "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Destroy"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"dui:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"remove"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})]})})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/overextended/ox_lib/Modules/Dui/Lua/Client.mdx",route:"/overextended/ox_lib/Modules/Dui/Lua/Client",timestamp:1730854598e3,title:"Client",headings:c},pageNextRoute:"/overextended/ox_lib/Modules/Dui/Lua/Client"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=453)}),_N_E=e.O()}]);