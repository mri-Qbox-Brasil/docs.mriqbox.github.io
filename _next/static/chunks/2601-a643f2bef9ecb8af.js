(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2601],{5554:function(e,t,a){var n,r="__lodash_hash_undefined__",o=1/0,i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,l=/^\./,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,p=/^\[object .+?Constructor\]$/,f="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g,h="object"==typeof self&&self&&self.Object===Object&&self,d=f||h||Function("return this")(),g=Array.prototype,_=Function.prototype,y=Object.prototype,b=d["__core-js_shared__"],m=(n=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",v=_.toString,w=y.hasOwnProperty,C=y.toString,x=RegExp("^"+v.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=d.Symbol,O=g.splice,S=getNative(d,"Map"),M=getNative(Object,"create"),T=j?j.prototype:void 0,k=T?T.toString:void 0;function Hash(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}function ListCache(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}function MapCache(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}function assocIndexOf(e,t){for(var a,n=e.length;n--;)if((a=e[n][0])===t||a!=a&&t!=t)return n;return -1}function getMapData(e,t){var a,n=e.__data__;return("string"==(a=typeof t)||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==t:null===t)?n["string"==typeof t?"string":"hash"]:n.map}function getNative(e,t){var a,n=null==e?void 0:e[t];return!(!isObject(n)||m&&m in n)&&("[object Function]"==(a=isObject(n)?C.call(n):"")||"[object GeneratorFunction]"==a||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(n)?x:p).test(function(e){if(null!=e){try{return v.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(n))?n:void 0}Hash.prototype.clear=function(){this.__data__=M?M(null):{}},Hash.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Hash.prototype.get=function(e){var t=this.__data__;if(M){var a=t[e];return a===r?void 0:a}return w.call(t,e)?t[e]:void 0},Hash.prototype.has=function(e){var t=this.__data__;return M?void 0!==t[e]:w.call(t,e)},Hash.prototype.set=function(e,t){return this.__data__[e]=M&&void 0===t?r:t,this},ListCache.prototype.clear=function(){this.__data__=[]},ListCache.prototype.delete=function(e){var t=this.__data__,a=assocIndexOf(t,e);return!(a<0)&&(a==t.length-1?t.pop():O.call(t,a,1),!0)},ListCache.prototype.get=function(e){var t=this.__data__,a=assocIndexOf(t,e);return a<0?void 0:t[a][1]},ListCache.prototype.has=function(e){return assocIndexOf(this.__data__,e)>-1},ListCache.prototype.set=function(e,t){var a=this.__data__,n=assocIndexOf(a,e);return n<0?a.push([e,t]):a[n][1]=t,this},MapCache.prototype.clear=function(){this.__data__={hash:new Hash,map:new(S||ListCache),string:new Hash}},MapCache.prototype.delete=function(e){return getMapData(this,e).delete(e)},MapCache.prototype.get=function(e){return getMapData(this,e).get(e)},MapCache.prototype.has=function(e){return getMapData(this,e).has(e)},MapCache.prototype.set=function(e,t){return getMapData(this,e).set(e,t),this};var P=memoize(function(e){e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(isSymbol(e))return k?k.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}(t);var t,a=[];return l.test(e)&&a.push(""),e.replace(s,function(e,t,n,r){a.push(n?r.replace(u,"$1"):t||e)}),a});function memoize(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw TypeError("Expected a function");var memoized=function(){var a=arguments,n=t?t.apply(this,a):a[0],r=memoized.cache;if(r.has(n))return r.get(n);var o=e.apply(this,a);return memoized.cache=r.set(n,o),o};return memoized.cache=new(memoize.Cache||MapCache),memoized}memoize.Cache=MapCache;var I=Array.isArray;function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isSymbol(e){return"symbol"==typeof e||!!e&&"object"==typeof e&&"[object Symbol]"==C.call(e)}e.exports=function(e,t,a){var n=null==e?void 0:function(e,t){var a;t=!function(e,t){if(I(e))return!1;var a=typeof e;return!!("number"==a||"symbol"==a||"boolean"==a||null==e||isSymbol(e))||c.test(e)||!i.test(e)||null!=t&&e in Object(t)}(t,e)?I(a=t)?a:P(a):[t];for(var n=0,r=t.length;null!=e&&n<r;)e=e[function(e){if("string"==typeof e||isSymbol(e))return e;var t=e+"";return"0"==t&&1/e==-o?"-0":t}(t[n++])];return n&&n==r?e:void 0}(e,t);return void 0===n?a:n}},2140:function(e,t,a){"use strict";a.d(t,{j:function(){return setupNextraPage}});var n,r=a(5554),o=a.n(r),i=a(6536),c=a(5271);a(5670),"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),a(8745);var l=a(2676),s=(0,c.createContext)(!1),u=a(3087);function Nextra({__nextra_pageMap:e,__nextra_dynamic_opts:t,...a}){let{context:n,Layout:r}=function(){let e=globalThis[i.eZ],{route:t}=(0,u.useRouter)();(0,c.useState)({})[1];let a=e.context[t];if(!a)throw Error("No content found for the current route. This is a Nextra bug.");return{context:a,Layout:e.Layout}}(),{Content:o,...p}=n;if(e&&(p.pageOpts={...p.pageOpts,pageMap:e}),t){let{headings:e,title:a,frontMatter:n}=JSON.parse(t);p.pageOpts={...p.pageOpts,headings:e,title:a,frontMatter:n}}return(0,l.jsx)(r,{...p,pageProps:a,children:(0,l.jsx)(s.Provider,{value:a,children:(0,l.jsx)(o,{...a})})})}var p=a(518),f=a(4473),h=a(9378);function pageTitleFromFilename(e){return h(e.replaceAll(/[-_]/g," "))}function isFolder(e){return!!e&&"object"==typeof e&&"folder"===e.type}function normalizeMetaData(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>{if(isFolder(t)){let a=e.replace("/","");return[a,t.title||pageTitleFromFilename(a)]}return[e,t||pageTitleFromFilename(e)]}))}function setupNextraPage({pageNextRoute:e,pageOpts:t,nextraLayout:a,themeConfig:r,MDXContent:c,hot:l,pageOptsChecksum:s,dynamicMetaModules:u=[]}){var h;"undefined"==typeof window&&(globalThis.__nextra_resolvePageMap=async()=>{if(n)return n;let e=JSON.parse(JSON.stringify(d.pageMap));return await Promise.all(u.map(async([t,{metaObjectKeyPath:a,metaParentKeyPath:n}])=>{let r=await t,i=await r.default(),c=o()(e,a);c.data=i;let l=o()(e,n);!function collectCatchAllRoutes(e,t,a=!0){if(a){collectCatchAllRoutes(e,{kind:"Meta",data:t.data,locale:t.locale},!1),t.data=normalizeMetaData(t.data);return}for(let[a,r]of Object.entries(t.data)){if(!isFolder(r)){var n;if("*"===a)continue;e.children.push({kind:"MdxPage",...t.locale&&{locale:t.locale},name:a,route:(n=e.route,f(p.join(n,a.replace(/^index$/,""))))});continue}let o=a.replace("/",""),i={kind:"Folder",name:o,route:`${e.route}/${o}`,children:[{kind:"Meta",...t.locale&&{locale:t.locale},data:normalizeMetaData(r.items)}]};e.children.push(i),collectCatchAllRoutes(i,{kind:"Meta",data:r.items,locale:t.locale},!1)}}(l,c)})),n=e});let d=globalThis[h=i.eZ]||(globalThis[h]=Object.create(null));return t.pageMap?(d.pageMap=t.pageMap,d.Layout=a):(t={...t,pageMap:d.pageMap,flexsearch:d.flexsearch},r=d.themeConfig),t={frontMatter:{},...t},d.route=t.route,d.context||(d.context=Object.create(null)),d.context[e]={Content:c,pageOpts:t,themeConfig:r},Nextra}},4473:function(e){"use strict";e.exports=e=>{let t=/^\\\\\?\\/.test(e),a=/[^\u0000-\u0080]+/.test(e);return t||a?e:e.replace(/\\/g,"/")}},9378:function(e,t,a){let n=a(3587),r=a(2168),o="[^\\s'’\\(\\)!?;:\"-]",i=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${o}))|(${o}))(${o}*[’']*${o}*)`,"g"),convertToRegExp=e=>e.map(e=>[RegExp(`\\b${e}\\b`,"gi"),e]);e.exports=(e,t={})=>{e=e.toLowerCase().replace(i,(e,t="",a,r,o,i,c)=>{let l=e.length+i>=c.length,s=function(e){let t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);return s?!a&&n.has(r+o)&&!l?s:t+(r||a).toUpperCase()+o:e});let a=t.special||[],o=[...r,...a],c=convertToRegExp(o);return c.forEach(([t,a])=>{e=e.replace(t,a)}),e}},3587:function(e){e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},2168:function(e){e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]},5670:function(e,t,a){a(2676)}}]);