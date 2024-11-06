(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9414],{4759:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_inventory/Events/Client",function(){return r(9614)}])},9614:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return l}});var s=r(2676),t=r(2140),o=r(8745),i=r(7100);let l=[{depth:2,value:"Event Triggers",id:"event-triggers"},{depth:3,value:"ox_inventory:disarm",id:"ox_inventorydisarm"},{depth:2,value:"Event Handlers",id:"event-handlers"},{depth:3,value:"ox_inventory:updateInventory",id:"ox_inventoryupdateinventory"},{depth:3,value:"ox_inventory:currentWeapon",id:"ox_inventorycurrentweapon"},{depth:3,value:"ox_inventory:itemCount",id:"ox_inventoryitemcount"},{depth:3,value:"ox_inventory:updateWeaponComponent",id:"ox_inventoryupdateweaponcomponent"},{depth:3,value:"ox_inventory:usedItem",id:"ox_inventoryuseditem"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",br:"br",em:"em"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Client"}),"\n",(0,s.jsx)(n.p,{children:"This is not a comprehensive list of events and is missing events intended for internal use only."}),"\n",(0,s.jsx)(n.h2,{id:"event-triggers",children:"Event Triggers"}),"\n",(0,s.jsx)(i.UW,{type:"info",children:(0,s.jsxs)(n.p,{children:["These events ",(0,s.jsx)(n.strong,{children:"are safe"})," to trigger and handle in other scripts."]})}),"\n",(0,s.jsx)(n.h3,{id:"ox_inventorydisarm",children:"ox_inventory:disarm"}),"\n",(0,s.jsx)(n.p,{children:"Can be triggered to force the player to disarm."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerClientEvent"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:disarm'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", playerId, noAnim)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["playerId: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["noAnim: ",(0,s.jsx)(n.code,{children:"boolean"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", disarm animation will be skipped"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"event-handlers",children:"Event Handlers"}),"\n",(0,s.jsx)(i.UW,{type:"warning",children:(0,s.jsxs)(n.p,{children:["These events ",(0,s.jsx)(n.strong,{children:"should not"})," be triggered by any other scripts."]})}),"\n",(0,s.jsx)(n.h3,{id:"ox_inventoryupdateinventory",children:"ox_inventory:updateInventory"}),"\n",(0,s.jsxs)(n.p,{children:["Triggered after inventory slots have been updated, included on load.",(0,s.jsx)(n.br,{}),"\n","Changes is a table containing all updated slot data indexed by slotId. Empty slots are ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:updateInventory'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"changes"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["changes: ",(0,s.jsx)(n.code,{children:"table<number, table | false>"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ox_inventorycurrentweapon",children:"ox_inventory:currentWeapon"}),"\n",(0,s.jsx)(n.p,{children:"Triggered when a weapon is equipped or its metadata is altered."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:currentWeapon'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"weapon"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["weapon?: ",(0,s.jsx)(n.code,{children:"table"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ox_inventoryitemcount",children:"ox_inventory:itemCount"}),"\n",(0,s.jsxs)(n.p,{children:["Triggered when the amount of an item in the player's inventory is changed.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Note: Not available for ESX, use esx:addInventoryItem or esx:removeInventoryItem."})]}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:itemCount'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"itemName"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"totalCount"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["itemName: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["totalCount: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ox_inventoryupdateweaponcomponent",children:"ox_inventory:updateWeaponComponent"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:updateWeaponComponent'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"action"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"componentHash"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"componentItem"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["action: ",(0,s.jsx)(n.code,{children:"'added' | 'removed'"})]}),"\n",(0,s.jsxs)(n.li,{children:["componentHash: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["componentItem: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ox_inventoryuseditem",children:"ox_inventory:usedItem"}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"AddEventHandler"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_inventory:usedItem'"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"name"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"slotId"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"metadata"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["name: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["slotId: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:["metadata?: ",(0,s.jsx)(n.code,{children:"table"})]}),"\n"]})]})}n.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/overextended/ox_inventory/Events/Client.mdx",route:"/overextended/ox_inventory/Events/Client",timestamp:1730854598e3,title:"Client",headings:l},pageNextRoute:"/overextended/ox_inventory/Events/Client"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=4759)}),_N_E=e.O()}]);