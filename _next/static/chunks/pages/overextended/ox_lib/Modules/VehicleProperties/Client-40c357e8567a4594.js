(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6338],{5730:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overextended/ox_lib/Modules/VehicleProperties/Client",function(){return s(5795)}])},5795:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c}});var l=s(2676),r=s(2140),i=s(8745),o=s(7100);let c=[{depth:2,value:"lib.getVehicleProperties",id:"libgetvehicleproperties"},{depth:2,value:"lib.setVehicleProperties",id:"libsetvehicleproperties"},{depth:3,value:"Recommended Usage",id:"recommended-usage"},{depth:2,value:"Vehicle Properties",id:"vehicle-properties"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",br:"br",a:"a",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",strong:"strong",h3:"h3"},(0,i.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Client"}),"\n",(0,l.jsxs)(n.p,{children:["Mostly follows the format used by ESX and QBCore, with extra data such as damaged/missing props.",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L3",children:"https://github.com/overextended/ox_lib/blob/master/resource/vehicleProperties/client.lua#L3"})]}),"\n","\n",(0,l.jsx)(n.h2,{id:"libgetvehicleproperties",children:"lib.getVehicleProperties"}),"\n",(0,l.jsx)(n.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".getVehicleProperties"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle)"})]})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["vehicle: ",(0,l.jsx)(n.code,{children:"number"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"vehicle handle of the vehicle to get the properties for"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(o.OK,{children:(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getVehicleProperties"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"GetVehiclePedIsUsing"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"PlayerPedId"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()))"})]})})})}),(0,l.jsx)(o.OK,{children:(0,l.jsx)(n.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"ts","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" lib "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/client'"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"lib"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".getVehicleProperties"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"GetVehiclePedIsUsing"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"PlayerPedId"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()))"})]})]})})})]}),"\n",(0,l.jsx)(n.h2,{id:"libsetvehicleproperties",children:"lib.setVehicleProperties"}),"\n",(0,l.jsx)(n.p,{children:"Sets properties on a vehicle (i.e. mods, plate text, etc.) and returns true if the client owns the entity."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"lib."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setVehicleProperties"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle, props)"})]})})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["vehicle: ",(0,l.jsx)(n.code,{children:"entity"})]}),"\n",(0,l.jsxs)(n.li,{children:["props: ",(0,l.jsx)(n.code,{children:"table"})]}),"\n"]}),"\n",(0,l.jsxs)(o.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(o.OK,{children:(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"RegisterNetEvent"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_lib:setVehicleProperties'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"netid"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    lib."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setVehicleProperties"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"NetToVeh"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(netid), data)"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(o.OK,{children:(0,l.jsx)(n.pre,{"data-language":"ts","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"ts","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { setVehicleProperties } "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@overextended/ox_lib/client'"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onNet"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_lib:setVehicleProperties'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (netid"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" data) "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setVehicleProperties"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"NetToVeh"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(netid)"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" data)"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["isEntityOwner: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"recommended-usage",children:"Recommended Usage"}),"\n",(0,l.jsx)(n.p,{children:"The server should tell the owner of the entity to set properties, using the following trigger."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"TriggerClientEvent"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ox_lib:setVehicleProperties'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", entityOwner, vehNetId, data)"})]})})}),"\n",(0,l.jsx)(n.h2,{id:"vehicle-properties",children:"Vehicle Properties"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["model?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["plate?: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:["plateIndex?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["bodyHealth?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["engineHealth?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["tankHealth?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["fuelLevel?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["oilLevel?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["dirtLevel?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["color1?: ",(0,l.jsx)(n.code,{children:"number"})," or ",(0,l.jsx)(n.code,{children:"number[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["color2?: ",(0,l.jsx)(n.code,{children:"number"})," or ",(0,l.jsx)(n.code,{children:"number[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["pearlescentColor?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["interiorColor?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["dashboardColor?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["wheelColor?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["wheelWidth?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["wheelSize?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["wheels?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["windowTint?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["xenonColor?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["neonEnabled?: ",(0,l.jsx)(n.code,{children:"boolean[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["neonColor?: ",(0,l.jsx)(n.code,{children:"number"})," or ",(0,l.jsx)(n.code,{children:"number[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["extras?: ",(0,l.jsx)(n.code,{children:"table<number | string, 0 | 1>"})]}),"\n",(0,l.jsxs)(n.li,{children:["tyreSmokeColor?: ",(0,l.jsx)(n.code,{children:"number"})," or ",(0,l.jsx)(n.code,{children:"number[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSpoilers?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modFrontBumper?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modRearBumper?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSideSkirt?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modExhaust?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modFrame?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modGrille?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modHood?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modFender?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modRightFender?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modRoof?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modEngine?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modBrakes?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modTransmission?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modHorns?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSuspension?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modArmor?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modNitrous?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modTurbo?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSubwoofer?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSmokeEnabled?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["modHydraulics?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["modXenon?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["modFrontWheels?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modBackWheels?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modCustomTiresF?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["modCustomTiresR?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:["modPlateHolder?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modVanityPlate?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modTrimA?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modOrnaments?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modDashboard?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modDial?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modDoorSpeaker?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSeats?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSteeringWheel?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modShifterLeavers?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modAPlate?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modSpeakers?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modTrunk?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modHydrolic?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modEngineBlock?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modAirFilter?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modStruts?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modArchCover?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modAerials?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modTrimB?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modTank?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modWindows?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modDoorR?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modLivery?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modRoofLivery?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["modLightbar?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["windows?: ",(0,l.jsx)(n.code,{children:"number[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["doors?: ",(0,l.jsx)(n.code,{children:"number[]"})]}),"\n",(0,l.jsxs)(n.li,{children:["tyres?: ",(0,l.jsx)(n.code,{children:"table<number | string, 1 | 2>"})]}),"\n",(0,l.jsxs)(n.li,{children:["bulletProofTyres?: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]})]})}n.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/overextended/ox_lib/Modules/VehicleProperties/Client.mdx",route:"/overextended/ox_lib/Modules/VehicleProperties/Client",timestamp:1730854598e3,title:"Client",headings:c},pageNextRoute:"/overextended/ox_lib/Modules/VehicleProperties/Client"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=5730)}),_N_E=e.O()}]);