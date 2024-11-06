(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6642],{5486:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_lib/Modules/Interface/Client/notify",function(){return n(671)}])},671:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return t}});var i=n(2676),l=n(2140),r=n(8745),o=n(7100);let t=[{depth:2,value:"lib.notify",id:"libnotify"},{depth:2,value:"Usage Example",id:"usage-example"},{depth:3,value:"Standard",id:"standard"},{depth:3,value:"Custom",id:"custom"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3",img:"img"},(0,r.a)(),s.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Notifications"}),"\n",(0,i.jsx)(e.h2,{id:"libnotify",children:"lib.notify"}),"\n",(0,i.jsx)(e.p,{children:"Custom notifications with a lot of styling options."}),"\n",(0,i.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,i.jsx)(o.OK,{children:(0,i.jsxs)(o.mQ,{items:["Client","Server"],children:[(0,i.jsx)(o.OK,{children:(0,i.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"notify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(data)"})]})})})}),(0,i.jsx)(o.OK,{children:(0,i.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerClientEvent"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_lib:notify'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", source, data)"})]})})})})]})}),(0,i.jsx)(o.OK,{children:(0,i.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,i.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/client'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".notify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(data);"})]})]})})})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["id?: ",(0,i.jsx)(e.code,{children:"string"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"When set the current notification will be unique and only shown once on screen when spammed."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["title?: ",(0,i.jsx)(e.code,{children:"string"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Must provide if there is no description"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["description?: ",(0,i.jsx)(e.code,{children:"string"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Must provide if there is no title"}),"\n",(0,i.jsx)(e.li,{children:"Markdown support"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["duration?: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"3000"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["showDuration?: ",(0,i.jsx)(e.code,{children:"boolean"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"true"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["position?: ",(0,i.jsx)(e.code,{children:"'top'"})," or ",(0,i.jsx)(e.code,{children:"'top-right'"})," or ",(0,i.jsx)(e.code,{children:"'top-left'"})," or ",(0,i.jsx)(e.code,{children:"'bottom'"})," or ",(0,i.jsx)(e.code,{children:"'bottom-right'"})," or ",(0,i.jsx)(e.code,{children:"'bottom-left'"})," or ",(0,i.jsx)(e.code,{children:"'center-right'"})," or ",(0,i.jsx)(e.code,{children:"'center-left'"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"'top-right'"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["type?: ",(0,i.jsx)(e.code,{children:"'inform'"})," or ",(0,i.jsx)(e.code,{children:"'error'"})," or ",(0,i.jsx)(e.code,{children:"'success'"}),"or ",(0,i.jsx)(e.code,{children:"'warning'"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"'inform'"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["style?: ",(0,i.jsx)(e.code,{children:"table"})," (",(0,i.jsx)(e.code,{children:"object"}),")","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"React CSS styling format"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["icon?: ",(0,i.jsx)(e.code,{children:"string"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Font Awesome 6 icon name"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["iconColor?: ",(0,i.jsx)(e.code,{children:"string"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"CSS Legal Color Values"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["iconAnimation?: ",(0,i.jsx)(e.code,{children:"'spin'"})," ",(0,i.jsx)(e.code,{children:"'spinPulse'"})," ",(0,i.jsx)(e.code,{children:"'spinReverse'"})," ",(0,i.jsx)(e.code,{children:"'pulse'"})," ",(0,i.jsx)(e.code,{children:"'beat'"})," ",(0,i.jsx)(e.code,{children:"'fade'"})," ",(0,i.jsx)(e.code,{children:"'beatFade'"})," ",(0,i.jsx)(e.code,{children:"'bounce'"})," ",(0,i.jsx)(e.code,{children:"'shake'"})]}),"\n",(0,i.jsxs)(e.li,{children:["alignIcon?: ",(0,i.jsx)(e.code,{children:"'top'"})," or ",(0,i.jsx)(e.code,{children:"'center'"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"'center'"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["sound?: ",(0,i.jsx)(e.code,{children:"table"})," (",(0,i.jsx)(e.code,{children:"object"}),")","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["bank?: ",(0,i.jsx)(e.code,{children:"string"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"name of audio bank that contains the soundset provided"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["set: ",(0,i.jsx)(e.code,{children:"string"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Soundset the soundname is a member of."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["name: ",(0,i.jsx)(e.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.UW,{children:(0,i.jsxs)(e.p,{children:["Setting ",(0,i.jsx)(e.code,{children:"iconColor"})," will get rid of the contrasted icon colour and it's circular background."]})}),"\n",(0,i.jsx)(e.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,i.jsx)(e.h3,{id:"standard",children:"Standard"}),"\n",(0,i.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,i.jsx)(o.OK,{children:(0,i.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"notify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    title "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification title'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    description "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification description'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    type "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'success'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})}),(0,i.jsx)(o.OK,{children:(0,i.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,i.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/client'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".notify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  title"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification title'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  description"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification description'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  type"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'success'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.imgur.com/UOISjlm.png",alt:"notification"})}),"\n",(0,i.jsx)(e.h3,{id:"custom",children:"Custom"}),"\n",(0,i.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,i.jsx)(o.OK,{children:(0,i.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"notify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    id "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'some_identifier'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    title "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification title'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    description "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification description'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    showDuration "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    position "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'top'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    style "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        backgroundColor "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#141517'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        color "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#C1C2C5'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.description'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          color "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#909296'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    icon "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ban'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    iconColor "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#C53030'"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})}),(0,i.jsx)(o.OK,{children:(0,i.jsx)(e.pre,{"data-language":"ts","data-theme":"default",children:(0,i.jsxs)(e.code,{"data-language":"ts","data-theme":"default",children:[(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/client'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".notify"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  id"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'some_identifier'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  title"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification title'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  description"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Notification description'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  showDuration"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  position"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'top'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  style"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    backgroundColor"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#141517'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    color"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#C1C2C5'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.decription'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      color"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#909296'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  icon"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ban'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  iconColor"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#C53030'"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(e.span,{className:"line",children:(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.imgur.com/1qwsJsH.png",alt:"custom_notification"})})]})}e.default=(0,l.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),s.components);return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/overextended/ox_lib/Modules/Interface/Client/notify.mdx",route:"/overextended/ox_lib/Modules/Interface/Client/notify",frontMatter:{title:"Notifications"},timestamp:1730854598e3,title:"Notifications",headings:t},pageNextRoute:"/overextended/ox_lib/Modules/Interface/Client/notify"})}},function(s){s.O(0,[2601,9774,2888,179],function(){return s(s.s=5486)}),_N_E=s.O()}]);