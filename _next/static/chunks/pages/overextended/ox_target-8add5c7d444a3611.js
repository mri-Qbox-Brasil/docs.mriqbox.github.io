(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4965],{5850:function(e,n,t){"use strict";t.d(n,{Z:function(){return createReactComponent}});var s=t(5271),r=t(507),o=t.n(r),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},a=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,__spreadValues=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&__defNormalProp(e,t,n[t]);if(h)for(var t of h(n))p.call(n,t)&&__defNormalProp(e,t,n[t]);return e},__spreadProps=(e,n)=>l(e,c(n)),__objRest=(e,n)=>{var t={};for(var s in e)d.call(e,s)&&0>n.indexOf(s)&&(t[s]=e[s]);if(null!=e&&h)for(var s of h(e))0>n.indexOf(s)&&p.call(e,s)&&(t[s]=e[s]);return t},createReactComponent=(e,n,t)=>{let r=(0,s.forwardRef)((n,r)=>{var{color:o="currentColor",size:a=24,stroke:l=2,children:c}=n,h=__objRest(n,["color","size","stroke","children"]);return(0,s.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:r},i),{width:a,height:a,stroke:o,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),h),[...t.map(([e,n])=>(0,s.createElement)(e,n)),...c||[]])});return r.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),stroke:o().oneOfType([o().string,o().number])},r.displayName=`${n}`,r}},1569:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_target",function(){return t(2392)}])},2392:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var s=t(2676),r=t(2140),o=t(8745),i=t(8713),a=t(7100);let l=[{depth:2,value:"Installation",id:"installation"},{depth:3,value:"Install all resource dependencies",id:"install-all-resource-dependencies"},{depth:3,value:"Download a release or clone the source code.",id:"download-a-release-or-clone-the-source-code"},{depth:3,value:"Config",id:"config"},{depth:2,value:"Supported Frameworks",id:"supported-frameworks"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",a:"a",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Ox Target"}),"\n",(0,s.jsx)(i.Z,{repo:"https://github.com/overextended/ox_target"}),"\n",(0,s.jsx)(n.p,{children:'A performant and flexible standalone targeting resource or "third-eye", with additional functionality for ox_inventory, ox_core, qbx_core, and es_extended.'}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(a.UW,{type:"info",children:(0,s.jsxs)(n.p,{children:["We ",(0,s.jsx)(n.strong,{children:"strongly"})," recommend referring to ",(0,s.jsx)(n.a,{href:"../guides",children:"Guides"})," for setting up Git, Node.js, and pnpm."]})}),"\n",(0,s.jsxs)(a.Rg,{children:[(0,s.jsx)(n.h3,{id:"install-all-resource-dependencies",children:"Install all resource dependencies"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../ox_lib/",children:"ox_lib"})}),"\n"]}),(0,s.jsxs)(n.h3,{id:"download-a-release-or-clone-the-source-code",children:["Download a ",(0,s.jsx)(n.a,{href:"https://github.com/overextended/ox_target/releases",children:"release"})," or clone the source code."]}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/overextended/ox_target.git"})]})})}),(0,s.jsx)(n.h3,{id:"config",children:"Config"}),(0,s.jsxs)(n.p,{children:["Resource configuration is handled using ",(0,s.jsx)(n.a,{href:"https://docs.fivem.net/docs/scripting-reference/convars/",children:"convars"}),"."]}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Toggle targeting when pressing the hotkey, instead of holding it down."})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ox_target:toggleHotkey"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Change the key to enable targeting (https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard)"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ox_target:defaultHotkey"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"LMENU"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Draw a sprite (circle) at the centroid of a zone."})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ox_target:drawSprite"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Enable built-in targeting options, e.g. toggling vehicle doors."})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ox_target:defaults"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Enable debugging / testing options, entity outlines, and a raycast indicator."})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ox_target:debug"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Enable / Disable leftclick to select options"})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setr"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ox_target:leftClick"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"supported-frameworks",children:"Supported Frameworks"}),"\n",(0,s.jsx)(n.p,{children:"These aren't necessary to run ox_target, but they will add additional features."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/overextended/ox_core",children:"ox_core"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/esx-framework/esx-legacy",children:"esx"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Qbox-project/qbx_core",children:"qbx_core"})}),"\n"]})]})}n.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/overextended/ox_target.mdx",route:"/overextended/ox_target",timestamp:1730854598e3,title:"Ox Target",headings:l},pageNextRoute:"/overextended/ox_target"})},3786:function(e,n,t){"use strict";t.d(n,{WR:function(){return DocButton},o6:function(){return DownloadButton},eX:function(){return GhButton},aj:function(){return NpmButton},Vg:function(){return ReleaseButton}});var s=t(2676);t(5271);var r=t(5850),o=(0,r.Z)("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),i=(0,r.Z)("file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]),a=(0,r.Z)("download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),l=(0,r.Z)("tag","IconTag",[["path",{d:"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",key:"svg-1"}]]),c=(0,r.Z)("brand-npm","IconBrandNpm",[["path",{d:"M1 8h22v7h-12v2h-4v-2h-6z",key:"svg-0"}],["path",{d:"M7 8v7",key:"svg-1"}],["path",{d:"M14 8v7",key:"svg-2"}],["path",{d:"M17 11v4",key:"svg-3"}],["path",{d:"M4 11v4",key:"svg-4"}],["path",{d:"M11 11v1",key:"svg-5"}],["path",{d:"M20 11v4",key:"svg-6"}]]);let Button=e=>{let{side:n="left",children:t,icon:r,link:o}=e;return(0,s.jsx)("div",{className:"h-fit w-fit",children:(0,s.jsx)("a",{href:o,children:(0,s.jsxs)("div",{className:"flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2",children:["left"===n&&(0,s.jsx)("div",{children:r}),t,"right"===n&&(0,s.jsx)("div",{children:r})]})})})};function GhButton(e){return(0,s.jsx)(Button,{icon:(0,s.jsx)(o,{}),side:e.side,link:e.link,children:e.label||"Github"})}function DocButton(e){return(0,s.jsx)(Button,{icon:(0,s.jsx)(i,{}),side:e.side,link:e.link,children:e.label||"Documenta\xe7\xe3o"})}function DownloadButton(e){return(0,s.jsx)(Button,{icon:(0,s.jsx)(a,{}),side:e.side,link:e.link,children:e.label||"Download"})}function ReleaseButton(e){return(0,s.jsx)(Button,{icon:(0,s.jsx)(l,{}),side:e.side,link:e.link,children:e.label||"Releases"})}function NpmButton(e){return(0,s.jsx)(Button,{icon:(0,s.jsx)(c,{}),side:e.side,link:e.link,children:e.label||"Pacote"})}},8713:function(e,n,t){"use strict";var s=t(2676);t(5271);var r=t(3786);n.Z=e=>{let{repo:n,docs:t}=e;return(0,s.jsxs)("div",{className:"flex flex-wrap gap-1",children:[(0,s.jsx)(r.eX,{link:n}),(0,s.jsx)(r.Vg,{link:"".concat(n,"/releases")}),t&&(0,s.jsx)(r.WR,{link:t})]})}},4049:function(e,n,t){"use strict";var s=t(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,n,t,r,o,i){if(i!==s){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,n,t){e.exports=t(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=1569)}),_N_E=e.O()}]);