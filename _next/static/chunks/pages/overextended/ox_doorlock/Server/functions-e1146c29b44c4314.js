(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1336],{6562:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_doorlock/Server/functions",function(){return n(8091)}])},8091:function(e,o,n){"use strict";n.r(o),n.d(o,{__toc:function(){return t}});var d=n(2676),r=n(2140),s=n(8745);let t=[{depth:2,value:"getDoor",id:"getdoor"},{depth:2,value:"getDoorFromName",id:"getdoorfromname"},{depth:2,value:"editDoor",id:"editdoor"},{depth:3,value:"setDoorState",id:"setdoorstate"}];function _createMdxContent(e){let o=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},(0,s.a)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.h1,{children:"Fun\xe7\xf5es"}),"\n",(0,d.jsx)(o.p,{children:"Obt\xe9m os dados de uma porta com o ID fornecido, correspondendo ao ID da entrada no banco de dados."}),"\n",(0,d.jsx)(o.h2,{id:"getdoor",children:"getDoor"}),"\n",(0,d.jsx)(o.pre,{"data-language":"lua","data-theme":"default",children:(0,d.jsx)(o.code,{"data-language":"lua","data-theme":"default",children:(0,d.jsxs)(o.span,{className:"line",children:[(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_doorlock:"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"getDoor"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(doorId)"})]})})}),"\n",(0,d.jsxs)(o.p,{children:["Obt\xe9m os dados de uma porta com o ",(0,d.jsx)(o.code,{children:"id"})," fornecido, correspondendo ao ID da entrada no banco de dados."]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["id: ",(0,d.jsx)(o.code,{children:"number"})]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Retorno:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["door: ",(0,d.jsx)(o.code,{children:"table"})]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"getdoorfromname",children:"getDoorFromName"}),"\n",(0,d.jsx)(o.pre,{"data-language":"lua","data-theme":"default",children:(0,d.jsx)(o.code,{"data-language":"lua","data-theme":"default",children:(0,d.jsxs)(o.span,{className:"line",children:[(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_doorlock:"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"getDoorFromName"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(name)"})]})})}),"\n",(0,d.jsxs)(o.p,{children:["Obt\xe9m os dados de uma porta com o ",(0,d.jsx)(o.code,{children:"name"})," fornecido, correspondendo ao nome da entrada no banco de dados."]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["name: ",(0,d.jsx)(o.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Retorno:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["door: ",(0,d.jsx)(o.code,{children:"table"})]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"editdoor",children:"editDoor"}),"\n",(0,d.jsx)(o.pre,{"data-language":"lua","data-theme":"default",children:(0,d.jsx)(o.code,{"data-language":"lua","data-theme":"default",children:(0,d.jsxs)(o.span,{className:"line",children:[(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_doorlock:"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"editDoor"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(doorId, data)"})]})})}),"\n",(0,d.jsxs)(o.p,{children:["Edite a configura\xe7\xe3o para o ",(0,d.jsx)(o.code,{children:"doorId"})," fornecido."]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["doorId: ",(0,d.jsx)(o.code,{children:"number"})]}),"\n",(0,d.jsxs)(o.li,{children:["data: ",(0,d.jsx)(o.code,{children:"table"})]}),"\n"]}),"\n",(0,d.jsx)(o.h3,{id:"setdoorstate",children:"setDoorState"}),"\n",(0,d.jsx)(o.pre,{"data-language":"lua","data-theme":"default",children:(0,d.jsx)(o.code,{"data-language":"lua","data-theme":"default",children:(0,d.jsxs)(o.span,{className:"line",children:[(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_doorlock:"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"setDoorState"}),(0,d.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(doorId, state)"})]})})}),"\n",(0,d.jsxs)(o.p,{children:["Define uma porta com o ",(0,d.jsx)(o.code,{children:"doorId"})," fornecido como trancada se o estado for ",(0,d.jsx)(o.code,{children:"true"})," ou ",(0,d.jsx)(o.code,{children:"1"}),"."]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["doorId: ",(0,d.jsx)(o.code,{children:"number"})]}),"\n",(0,d.jsxs)(o.li,{children:["state: ",(0,d.jsx)(o.code,{children:"0"})," or ",(0,d.jsx)(o.code,{children:"1"})," or ",(0,d.jsx)(o.code,{children:"boolean"})]}),"\n"]})]})}o.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,s.a)(),e.components);return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/overextended/ox_doorlock/Server/functions.mdx",route:"/overextended/ox_doorlock/Server/functions",timestamp:1730854598e3,title:"Fun\xe7\xf5es",headings:t},pageNextRoute:"/overextended/ox_doorlock/Server/functions"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=6562)}),_N_E=e.O()}]);