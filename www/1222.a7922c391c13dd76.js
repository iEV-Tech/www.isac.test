"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1222],{5454:(X,y,s)=>{s.d(y,{K5:()=>T,X1:()=>r,fy:()=>x,nY:()=>M});var R=s(467),F=s(5972);const r=function(){var C=(0,R.A)(function*(t){var d,u,g,v,h,_,b,E,e,A,$;t.params=t.params||{},(0,F.Ll)({url:"api/RequestService/create",params:{ServiceId:null!==(d=t.params.ServiceId)&&void 0!==d?d:null,ChargePackageId:null!==(u=t.params.ChargePackageId)&&void 0!==u?u:null,RequestAddress:null!==(g=t.params.RequestAddress)&&void 0!==g?g:null,RequestLat:null!==(v=t.params.RequestLat)&&void 0!==v?v:null,RequestLong:null!==(h=t.params.RequestLong)&&void 0!==h?h:null,DestAddress:null!==(_=t.params.DestAddress)&&void 0!==_?_:null,DestLat:null!==(b=t.params.DestLat)&&void 0!==b?b:null,DestLong:null!==(E=t.params.DestLong)&&void 0!==E?E:null,ExecutionDateAsString:null!==(e=t.params.ExecutionDate)&&void 0!==e?e:null,ExecutionTimeAsString:null!==(A=t.params.ExecutionTime)&&void 0!==A?A:null,Notes:null!==($=t.params.Notes)&&void 0!==$?$:null},success:P=>{"function"==typeof t.callback&&t.callback(P.data||null)},error:P=>{var j;"function"==typeof t.callback&&t.callback(null==P||null===(j=P.response)||void 0===j?void 0:j.data),console.error(P)},loading:t.loading,loadingController:t.loadingController})});return function(d){return C.apply(this,arguments)}}(),M=function(){var C=(0,R.A)(function*(t){var d,u;t.params=t.params||{},(0,F.Ll)({url:"api/RequestService/cancel",params:{RequestServiceId:null!==(d=t.params.RequestServiceId)&&void 0!==d?d:null,CancelReason:null!==(u=t.params.CancelReason)&&void 0!==u?u:null},success:g=>{"function"==typeof t.callback&&t.callback(g.data||null)},error:g=>{var v;"function"==typeof t.callback&&t.callback(null==g||null===(v=g.response)||void 0===v?void 0:v.data),console.error(g)},loading:t.loading,loadingController:t.loadingController})});return function(d){return C.apply(this,arguments)}}(),x=function(){var C=(0,R.A)(function*(t){var d,u,g,v;t.params=t.params||{},(0,F.hm)({url:"api/RequestService/get-myhistory",params:{VRequestStatus:null!==(d=t.params.VRequestStatus)&&void 0!==d?d:null,VRequestStatusMulti:null!==(u=t.params.VRequestStatusMulti)&&void 0!==u?u:null,PageNumber:null!==(g=t.params.PageNumber)&&void 0!==g?g:1,PageSize:null!==(v=t.params.PageSize)&&void 0!==v?v:10},success:h=>{"function"==typeof t.callback&&t.callback(h.data||null)},error:h=>{var _;"function"==typeof t.callback&&t.callback(null==h||null===(_=h.response)||void 0===_?void 0:_.data),console.error(h)},loading:t.loading,loadingController:t.loadingController})});return function(d){return C.apply(this,arguments)}}(),T=function(){var C=(0,R.A)(function*(t){var d;t.params=t.params||{},(0,F.hm)({url:`api/RequestService/get-detail/${t.params.RequestServiceId}`,params:{RequestServiceId:null!==(d=t.params.RequestServiceId)&&void 0!==d?d:null},success:u=>{"function"==typeof t.callback&&t.callback(u.data||null)},error:u=>{var g;"function"==typeof t.callback&&t.callback(null==u||null===(g=u.response)||void 0===g?void 0:g.data),console.error(u)},loading:t.loading,loadingController:t.loadingController})});return function(d){return C.apply(this,arguments)}}()},1222:(X,y,s)=>{s.r(y),s.d(y,{ServiceChargingPageModule:()=>ae});var R=s(177),F=s(9417),r=s(9465),M=s(7625),x=s(467),T=s(7586),C=s.n(T),t=s(3801),d=s(574),u=s(4470),g=s(5454),v=s(6539),h=s(2313),_=s(8517),b=s(8650),E=s(8833),e=s(4438),A=s(4842);const $=["inpAddress"],P=()=>[0,1],j=()=>({weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"}),B=()=>({hour:"2-digit",minute:"2-digit"}),U=(i,m)=>({date:i,time:m});function L(i,m){if(1&i&&(e.j41(0,"b")(1,"b",27),e.EFF(2),e.k0s()(),e.j41(3,"span"),e.EFF(4),e.k0s()),2&i){let o;const a=e.XpG(2);e.R7$(2),e.Lme("",a.chargingPackage.PowerValue,"",a.chargingPackage.Unit,""),e.R7$(2),e.SpI(" / ",a.APP_FUNC_FormatMoney(null!==(o=a.chargingPackage.AftertaxPrice)&&void 0!==o?o:0),"\u0111")}}function Y(i,m){if(1&i&&(e.j41(0,"b")(1,"b",27),e.EFF(2),e.k0s()(),e.j41(3,"span"),e.EFF(4),e.k0s()),2&i){let o;const a=e.XpG(2);e.R7$(2),e.SpI("",a.APP_FUNC_FormatMoney(null!==(o=a.chargingPackage.AftertaxPrice)&&void 0!==o?o:0),"\u0111"),e.R7$(2),e.Lme(" / ",a.chargingPackage.PowerValue,"",a.chargingPackage.Unit,"")}}function q(i,m){if(1&i&&(e.j41(0,"div")(1,"small"),e.EFF(2),e.k0s()(),e.j41(3,"div",26),e.DNE(4,L,5,3)(5,Y,5,3),e.k0s()),2&i){const o=e.XpG();e.R7$(2),e.JRh(o.chargingPackage.ChargePackName),e.R7$(2),e.vxM(4,o.chargingPackage.IsPackByPower?4:5)}}function J(i,m){if(1&i){const o=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",28),e.EFF(3,"Ch\u1ecdn \u0111\u1ecba ch\u1ec9"),e.k0s()()(),e.j41(4,"ion-content",29)(5,"div",30)(6,"div",7)(7,"label"),e.EFF(8),e.nI1(9,"translate"),e.k0s(),e.j41(10,"div",19)(11,"ion-item",6),e.nrm(12,"ion-icon",31)(13,"ion-input",32,2),e.k0s()()(),e.j41(15,"div",33),e.nrm(16,"div",34),e.k0s()()(),e.j41(17,"ion-footer",24)(18,"ion-button",35),e.bIt("click",function(){e.eBV(o),e.XpG();const n=e.sdS(44);return e.Njj(null==n?null:n.dismiss())}),e.j41(19,"ion-label"),e.EFF(20),e.nI1(21,"translate"),e.k0s()()()}if(2&i){const o=e.XpG();e.R7$(8),e.JRh(e.bMT(9,3,"Address")),e.R7$(5),e.Y8G("value",o.dataForm.address),e.R7$(7),e.JRh(e.bMT(21,5,"Apply"))}}function w(i,m){if(1&i){const o=e.RV6();e.j41(0,"ion-datetime",36),e.bIt("ionChange",function(n){e.eBV(o);const l=e.XpG();return e.Njj(l.changeDateTime(n))}),e.k0s()}if(2&i){const o=e.XpG();e.Y8G("value",o.dataForm.datetime)("formatOptions",e.l_i(4,U,e.lJ4(2,j),e.lJ4(3,B)))}}function z(i,m){if(1&i&&(e.j41(0,"div")(1,"small"),e.EFF(2),e.k0s()(),e.j41(3,"div",26)(4,"b")(5,"b",27),e.EFF(6),e.k0s()(),e.j41(7,"span"),e.EFF(8),e.k0s()()),2&i){let o;const a=e.XpG().$implicit,n=e.XpG(2);e.R7$(2),e.JRh(a.ChargePackName),e.R7$(4),e.Lme("",a.PowerValue,"",a.Unit,""),e.R7$(2),e.SpI(" / ",n.APP_FUNC_FormatMoney(null!==(o=a.AftertaxPrice)&&void 0!==o?o:0),"\u0111")}}function K(i,m){if(1&i&&(e.j41(0,"div")(1,"small"),e.EFF(2),e.k0s()(),e.j41(3,"div",26)(4,"b")(5,"b",27),e.EFF(6),e.k0s()(),e.j41(7,"span"),e.EFF(8),e.k0s()()),2&i){let o;const a=e.XpG().$implicit,n=e.XpG(2);e.R7$(2),e.JRh(a.ChargePackName),e.R7$(4),e.SpI("",n.APP_FUNC_FormatMoney(null!==(o=a.AftertaxPrice)&&void 0!==o?o:0),"\u0111"),e.R7$(2),e.Lme(" / ",a.PowerValue,"",a.Unit,"")}}function H(i,m){if(1&i&&(e.j41(0,"div",39)(1,"ion-item",40)(2,"ion-radio",41)(3,"div",42)(4,"div"),e.nrm(5,"ion-img",43),e.k0s(),e.j41(6,"div",44),e.DNE(7,z,9,4)(8,K,9,4),e.k0s()()()()()),2&i){const o=m.$implicit;e.R7$(2),e.Y8G("value",o.ChargePackageId),e.R7$(5),e.vxM(7,o.IsPackByPower?7:8)}}function W(i,m){if(1&i){const o=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",28),e.EFF(3,"Ch\u1ecdn g\xf3i s\u1ea1c"),e.k0s()()(),e.j41(4,"ion-content",29)(5,"div",37)(6,"ion-radio-group",38),e.bIt("ionChange",function(n){e.eBV(o);const l=e.XpG();return e.Njj(l.changeChargePackage(n))}),e.Z7z(7,H,9,2,"div",39,e.fX1),e.k0s()()(),e.j41(9,"ion-footer",24)(10,"ion-button",35),e.bIt("click",function(){e.eBV(o),e.XpG();const n=e.sdS(49);return e.Njj(null==n?null:n.dismiss())}),e.j41(11,"ion-label"),e.EFF(12),e.nI1(13,"translate"),e.k0s()()()}if(2&i){const o=e.XpG();e.R7$(6),e.Y8G("value",o.dataForm.ChargePackageId),e.R7$(),e.Dyx(o.chargingPackages),e.R7$(5),e.JRh(e.bMT(13,2,"Apply"))}}const Q=[{path:"",component:(()=>{var i;class m{constructor(a,n,l,c,p){var f;this.router=a,this.animationController=n,this.modalController=l,this.toastController=c,this.loadingController=p,this.APP_ROUTE=E._,this.APP_FUNC_FormatMoney=_.xi,this.APP_FUNC_FormatDate=_.Rv,this.dataForm={datetime:(f=new Date,f.setMinutes(15*(Math.ceil(f.getMinutes()/15)+1)),(0,_.Rv)(f,"YYYY-MM-DDTHH:mm:ss"))},this.chargingPackages=[]}ngOnInit(){(0,v.kU)(),(0,t.fA)({callback:a=>{null!=a&&a.currentAddress&&(this.dataForm.address=null==a?void 0:a.currentAddress)}}),(0,t.Xz)().then(a=>{this.dataForm.pos=a})}changeAdress(a){this.dataForm.address=a.detail.value}changeDateTime(a){this.dataForm.datetime=a.detail.value}changeChargePackage(a){this.dataForm.ChargePackageId=a.detail.value,this.chargingPackage=this.chargingPackages.find(n=>n.ChargePackageId==this.dataForm.ChargePackageId)}changeNote(a){this.dataForm.note=a.detail.value}get submitDisabled(){var a,n;return!(this.dataForm.ChargePackageId&&this.dataForm.address&&null!==(a=this.dataForm.pos)&&void 0!==a&&a.lat&&null!==(n=this.dataForm.pos)&&void 0!==n&&n.lng)}submitCreateService(a){var n,l;(0,g.X1)({params:{ServiceId:h.u9.SAC_VIP_ID,ChargePackageId:this.dataForm.ChargePackageId,RequestAddress:this.dataForm.address,RequestLat:null===(n=this.dataForm.pos)||void 0===n?void 0:n.lat,RequestLong:null===(l=this.dataForm.pos)||void 0===l?void 0:l.lng,ExecutionDate:C()(this.dataForm.datetime).format("YYYY-MM-DD"),ExecutionTime:C()(this.dataForm.datetime).format("HH:mm:ss"),Notes:this.dataForm.note},callback:c=>{null!=c&&c.Succeeded&&c.Data?this.router.navigateByUrl(E._.REQUEST_SERVICE_DETAIL.replace(":id",c.Data),{replaceUrl:!0}):(0,b.cX)(this.toastController,{},c).then(p=>p.present())}})}onModalAddressDidPresent(a){var n=this;const l=function(){var p=(0,x.A)(function*(){var f;let k,I,D,G;k=window.google.maps,I=new k.Map(document.getElementById("map"),{zoom:15,center:n.dataForm.pos,disableDefaultUI:!0}),D=new k.Marker({map:I,draggable:!0,animation:k.Animation.DROP,position:n.dataForm.pos}),k.event.addListener(D,"dragend",S=>{n.requestAddress({lat:S.latLng.lat(),lng:S.latLng.lng()})}),G=new k.places.Autocomplete(yield null===(f=n.inpAddressRed)||void 0===f?void 0:f.getInputElement()),G.addListener("place_changed",()=>{var S,N=G.getPlace(),O={lat:N.geometry.location.lat(),lng:N.geometry.location.lng()};n.dataForm.address=N.formatted_address,n.dataForm.pos=O,I.moveCamera({zoom:15,center:O}),null===(S=D)||void 0===S||S.setMap(null),D=new k.Marker({map:I,draggable:!0,animation:k.Animation.DROP,position:O})})});return function(){return p.apply(this,arguments)}}();window.initMap=l;let c=document.createElement("script");c.async=!0,c.src="https://maps.google.com/maps/api/js?key=AIzaSyAfx5a8yx5MqeGoTS3ierzoe35TXoX0ZOY&libraries=places&callback=initMap",document.head.append(c)}onModalPackageDidPresent(a){(0,d.LE)({loadingController:this.loadingController,params:{ServiceId:h.u9.SAC_VIP_ID,PageNumber:1,PageSize:10},callback:n=>{var l;null!=n&&n.Succeeded?this.chargingPackages=null!==(l=n.Data)&&void 0!==l?l:[]:(0,b.cX)(this.toastController,{},n).then(c=>c.present())}})}requestAddress(a){(0,u.S)({params:{lat:a.lat,lng:a.lng},callback:n=>{var l,c,p;"OK"==(null==n?void 0:n.status)&&(this.dataForm.pos=a,this.dataForm.address=null!==(l=(null!==(c=n.results[0])&&void 0!==c?c:{}).formatted_address)&&void 0!==l?l:null===(p=n.plus_code)||void 0===p?void 0:p.compound_code)}})}}return(i=m).\u0275fac=function(a){return new(a||i)(e.rXU(M.Ix),e.rXU(r.Hx),e.rXU(r.W3),e.rXU(r.K_),e.rXU(r.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-service-charging"]],viewQuery:function(a,n){if(1&a&&e.GBs($,5),2&a){let l;e.mGM(l=e.lsd())&&(n.inpAddressRed=l.first)}},decls:56,vars:25,consts:[["modalAddress",""],["modalPackage",""],["inpAddress",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[1,"card-page","min-h-100"],["lines","none"],[1,"form-group"],[1,"choice-item"],["detail","false","button","true","id","present-modal-address"],["slot","start","color","medium","name","location"],[1,"mr-0"],[1,"fs-14"],["slot","start","color","medium","name","calendar",1,"mr-0"],["datetime","datetime"],[1,"package-item"],["detail","false","button","true","id","present-modal-package"],["slot","start","src","../../../assets/icon/ion-img/charge-package.svg"],["slot","end","color","medium","name","chevron-down-outline"],[1,"ion-item-input"],["placeholder","Nh\u1eadp ghi ch\xfa c\u1ee7a b\u1ea1n cho d\u1ecbch v\u1ee5 s\u1ea1c",3,"ionChange","autoGrow","value"],["trigger","present-modal-address",3,"didPresent","initialBreakpoint","breakpoints"],[3,"keepContentsMounted"],["trigger","present-modal-package",3,"didPresent","initialBreakpoint","breakpoints"],[1,"ion-padding"],["color","primary","shape","round","expand","block",3,"click","disabled"],[1,"mt-1"],[1,"text-primary"],[1,"text-center"],[1,"ion-padding-horizontal"],[1,"h-100","d-flex","flex-column"],["slot","start","color","medium","name","location",1,"mr-3"],["clear-input","true","placeholder","Nh\u1eadp \u0111\u1ecba ch\u1ec9 c\u1ee7a b\u1ea1n ho\u1eb7c ch\u1ecdn t\u1eeb b\u1ea3n \u0111\u1ed3",3,"value"],[1,"flex-grow-1"],["id","map"],["color","primary","fill","outline","expand","block",3,"click"],["id","datetime","presentation","date-time",3,"ionChange","value","formatOptions"],[1,"package-list"],[3,"ionChange","value"],[1,"package-item","mb-3"],["lines","none","detail","false","button","","mode","ios"],["mode","md","justify","space-between",3,"value"],[1,"d-flex","align-items-center"],["src","../../../assets/icon/ion-img/charge-package.svg"],[1,"pl-3"]],template:function(a,n){if(1&a){const l=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",3),e.nrm(3,"ion-back-button",4),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Y\xeau c\u1ea7u s\u1ea1c t\u1ea1i nh\xe0"),e.k0s()()(),e.j41(6,"ion-content")(7,"div",5)(8,"ion-list",6)(9,"div",7)(10,"label"),e.EFF(11),e.nI1(12,"translate"),e.k0s(),e.j41(13,"div",8)(14,"ion-item",9),e.nrm(15,"ion-icon",10),e.j41(16,"ion-label",11)(17,"div",12),e.EFF(18),e.k0s()()()()(),e.j41(19,"div",7)(20,"label"),e.EFF(21),e.nI1(22,"translate"),e.k0s(),e.j41(23,"div",8)(24,"ion-item"),e.nrm(25,"ion-icon",13)(26,"ion-datetime-button",14),e.k0s()()(),e.j41(27,"div",7)(28,"label"),e.EFF(29),e.nI1(30,"translate"),e.k0s(),e.j41(31,"div",15)(32,"ion-item",16),e.nrm(33,"ion-img",17),e.j41(34,"ion-label"),e.DNE(35,q,6,2),e.k0s(),e.nrm(36,"ion-icon",18),e.k0s()()(),e.j41(37,"div",7)(38,"label"),e.EFF(39,"Ghi ch\xfa"),e.k0s(),e.j41(40,"div",19)(41,"ion-item")(42,"ion-textarea",20),e.bIt("ionChange",function(p){return e.eBV(l),e.Njj(n.changeNote(p))}),e.k0s()()()()()(),e.j41(43,"ion-modal",21,0),e.bIt("didPresent",function(p){return e.eBV(l),e.Njj(n.onModalAddressDidPresent(p))}),e.DNE(45,J,22,7,"ng-template"),e.k0s(),e.j41(46,"ion-modal",22),e.DNE(47,w,1,7,"ng-template"),e.k0s(),e.j41(48,"ion-modal",23,1),e.bIt("didPresent",function(p){return e.eBV(l),e.Njj(n.onModalPackageDidPresent(p))}),e.DNE(50,W,14,4,"ng-template"),e.k0s()(),e.j41(51,"ion-footer",24)(52,"ion-button",25),e.bIt("click",function(p){return e.eBV(l),e.Njj(n.submitCreateService(p))}),e.j41(53,"ion-label"),e.EFF(54),e.nI1(55,"translate"),e.k0s()()()}2&a&&(e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.TABS_SERVICE),e.R7$(8),e.JRh(e.bMT(12,15,"Address")),e.R7$(7),e.JRh(n.dataForm.address),e.R7$(3),e.JRh(e.bMT(22,17,"Time")),e.R7$(8),e.JRh(e.bMT(30,19,"ChargingPackage")),e.R7$(6),e.vxM(35,n.chargingPackage?35:-1),e.R7$(7),e.Y8G("autoGrow",!0)("value",n.dataForm.note),e.R7$(),e.Y8G("initialBreakpoint",1)("breakpoints",e.lJ4(23,P)),e.R7$(3),e.Y8G("keepContentsMounted",!0),e.R7$(2),e.Y8G("initialBreakpoint",1)("breakpoints",e.lJ4(24,P)),e.R7$(4),e.Y8G("disabled",n.submitDisabled),e.R7$(2),e.JRh(e.bMT(55,21,"Pay")))},dependencies:[r.Jm,r.QW,r.W9,r.A9,r.K4,r.M0,r.eU,r.iq,r.KW,r.$w,r.uz,r.he,r.nf,r.KO,r.f0,r.nc,r.BC,r.ai,r.Sb,r.Je,r.Gw,r.el,A.D9],styles:[".card-page[_ngcontent-%COMP%]{padding:1rem;border-top-left-radius:1.5rem;border-top-right-radius:1.5rem;background:var(--ion-color-light)}.choice-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-width: 1px;--border-color: #eee;--border-radius: .75rem}.choice-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[slot=start][_ngcontent-%COMP%]{margin-right:1rem}.choice-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%]{margin-left:1rem}.package-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-top: .5rem;--padding-bottom: .5rem;--border-width: 1px;--border-color: #eee;--border-radius: .75rem}.package-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:4rem}ion-datetime-button[_ngcontent-%COMP%]::part(native){background:transparent}ion-datetime-button[_ngcontent-%COMP%]::part(native):hover{background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0))}#map[_ngcontent-%COMP%]{width:100%;height:100%}"]}),m})()}];let Z=(()=>{var i;class m{}return(i=m).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[M.iI.forChild(Q),M.iI]}),m})();var ee=s(3890);let ae=(()=>{var i;class m{}return(i=m).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[R.MD,F.YN,r.bv,Z,ee.x]}),m})()}}]);