(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9636],{8161:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_lib/Modules/Marker/Client",function(){return l(2118)}])},2118:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return i}});var r=l(2676),n=l(2140),o=l(8745);let i=[{depth:2,value:"lib.marker",id:"libmarker"},{depth:2,value:"Marker Class",id:"marker-class"},{depth:2,value:"lib.marker.new",id:"libmarkernew"},{depth:3,value:"Usage Example",id:"usage-example"},{depth:3,value:"Interactive Example",id:"interactive-example"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",span:"span",h3:"h3"},(0,o.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Client"}),"\n",(0,r.jsx)(e.h2,{id:"libmarker",children:"lib.marker"}),"\n",(0,r.jsx)(e.p,{children:"Simple way to create markers"}),"\n",(0,r.jsx)(e.h2,{id:"marker-class",children:"Marker Class"}),"\n",(0,r.jsx)(e.p,{children:"A table representing a marker with the following properties."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["type: ",(0,r.jsx)(e.code,{children:"number"})," or ",(0,r.jsx)(e.code,{children:"string"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["This field accepts either a numerical value representing the marker ID or a string containing the name of a marker as documented on ",(0,r.jsx)(e.a,{href:"https://docs.fivem.net/docs/game-references/markers/",children:"FiveM Docs"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["coords?: ",(0,r.jsx)(e.code,{children:"vector3"})]}),"\n",(0,r.jsxs)(e.li,{children:["width?: ",(0,r.jsx)(e.code,{children:"number"})]}),"\n",(0,r.jsxs)(e.li,{children:["height?: ",(0,r.jsx)(e.code,{children:"number"})]}),"\n",(0,r.jsxs)(e.li,{children:["color?: ",(0,r.jsx)(e.code,{children:"{ r: number, g: number, b: number, a: number}"})]}),"\n",(0,r.jsxs)(e.li,{children:["direction?: ",(0,r.jsx)(e.code,{children:"vector3"})]}),"\n",(0,r.jsxs)(e.li,{children:["rotation?: ",(0,r.jsx)(e.code,{children:"vector3"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"libmarkernew",children:"lib.marker.new"}),"\n",(0,r.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib.marker."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(options)"})]})})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Returns: ",(0,r.jsx)(e.code,{children:"Marker"})]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,r.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" marker "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib.marker."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"	type "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"	coords "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GetEntityCoords"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(cache.ped),"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"	color "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { r "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"255"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", g "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", b "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", a "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" },"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Citizen."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"CreateThread"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		marker:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"draw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"		Citizen."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Wait"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"	"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,r.jsx)(e.h3,{id:"interactive-example",children:"Interactive Example"}),"\n",(0,r.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" center "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"430.452759"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1026.108032"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"27.846140"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" uiText "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Press [E] to get notified"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" point "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib.points."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  coords "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" center,"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  distance "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" marker "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib.marker."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"new"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  coords "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" center,"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  type "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" point:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"nearby"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  marker:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"draw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" self.currentDistance "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1.5"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"not"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"isTextUIOpen"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      lib."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"showTextUI"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Press [E] to get notified"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"IsControlJustPressed"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"51"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      lib."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"notify"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        description "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Hello, World!"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      })"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" isOpen, currentText "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lib."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"isTextUIOpen"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" isOpen "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" currentText "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" uiText "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      lib."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"hideTextUI"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})})]})}e.default=(0,n.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/overextended/ox_lib/Modules/Marker/Client.mdx",route:"/overextended/ox_lib/Modules/Marker/Client",timestamp:1730854598e3,title:"Client",headings:i},pageNextRoute:"/overextended/ox_lib/Modules/Marker/Client"})}},function(s){s.O(0,[2601,9774,2888,179],function(){return s(s.s=8161)}),_N_E=s.O()}]);