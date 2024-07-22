"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9006],{6944:(I,P,d)=>{d.d(P,{KX:()=>_,_$:()=>k,aN:()=>y,cb:()=>$,eu:()=>R,kO:()=>c,wm:()=>S});var f=d(467),C=d(5972);const c=function(){var n=(0,f.A)(function*(a){var i,s,l,g;a.params=a.params||{},(0,C.hm)({url:"api/ChargingSession/get-mychargingsessions",params:{VSessionStatus:null!==(i=a.params.VSessionStatus)&&void 0!==i?i:null,VSessionStatusMulti:null!==(s=a.params.VSessionStatusMulti)&&void 0!==s?s:null,PageNumber:null!==(l=a.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(g=a.params.PageSize)&&void 0!==g?g:10},success:m=>{"function"==typeof a.callback&&a.callback(m.data||null)},error:m=>{var b;"function"==typeof a.callback&&a.callback(null==m||null===(b=m.response)||void 0===b?void 0:b.data),console.error(m)},loading:a.loading,loadingController:a.loadingController})});return function(i){return n.apply(this,arguments)}}(),_=function(){var n=(0,f.A)(function*(a){var i,s,l;a.params=a.params||{},(0,C.hm)({url:"api/ChargingSession/get-mybyordercode",params:{OrderCode:null!==(i=a.params.OrderCode)&&void 0!==i?i:null,PageNumber:null!==(s=a.params.PageNumber)&&void 0!==s?s:1,PageSize:null!==(l=a.params.PageSize)&&void 0!==l?l:10},success:g=>{"function"==typeof a.callback&&a.callback(g.data||null)},error:g=>{var m;"function"==typeof a.callback&&a.callback(null==g||null===(m=g.response)||void 0===m?void 0:m.data),console.error(g)},loading:a.loading,loadingController:a.loadingController})});return function(i){return n.apply(this,arguments)}}(),$=function(){var n=(0,f.A)(function*(a){a.params=a.params||{},(0,C.hm)({url:`api/ChargingSession/get-mybyid/${a.params.ChargeSessionId}`,success:i=>{"function"==typeof a.callback&&a.callback(i.data||null)},error:i=>{var s;"function"==typeof a.callback&&a.callback(null==i||null===(s=i.response)||void 0===s?void 0:s.data),console.error(i)},loading:a.loading,loadingController:a.loadingController})});return function(i){return n.apply(this,arguments)}}(),y=function(){var n=(0,f.A)(function*(a){var i,s,l;a.params=a.params||{},(0,C.Ll)({url:"api/ChargingSession/start-create",params:{StationCode:null!==(i=a.params.StationCode)&&void 0!==i?i:null,ConnectorId:null!==(s=a.params.ConnectorId)&&void 0!==s?s:null,OrderCode:null!==(l=a.params.OrderCode)&&void 0!==l?l:null},success:g=>{"function"==typeof a.callback&&a.callback(g.data||null)},error:g=>{var m;"function"==typeof a.callback&&a.callback(null==g||null===(m=g.response)||void 0===m?void 0:m.data),console.error(g)},loading:a.loading,loadingController:a.loadingController})});return function(i){return n.apply(this,arguments)}}(),S=function(){var n=(0,f.A)(function*(a){var i;a.params=a.params||{},(0,C.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(i=a.params.ChargeSessionId)&&void 0!==i?i:null},success:s=>{"function"==typeof a.callback&&a.callback(s.data||null)},error:s=>{var l;"function"==typeof a.callback&&a.callback(null==s||null===(l=s.response)||void 0===l?void 0:l.data),console.error(s)},loading:a.loading,loadingController:a.loadingController})});return function(i){return n.apply(this,arguments)}}(),k=function(){var n=(0,f.A)(function*(a){var i;a.params=a.params||{},(0,C.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(i=a.params.ChargeSessionId)&&void 0!==i?i:null},success:s=>{"function"==typeof a.callback&&a.callback(s.data||null)},error:s=>{var l;"function"==typeof a.callback&&a.callback(null==s||null===(l=s.response)||void 0===l?void 0:l.data),console.error(s)},loading:a.loading,loadingController:a.loadingController})});return function(i){return n.apply(this,arguments)}}(),R=function(){var n=(0,f.A)(function*(a){a.params=a.params||{},(0,C.hm)({url:`api/ChargingSession/monitor/${a.params.StationCode}/${a.params.ConnectorId}`,success:i=>{"function"==typeof a.callback&&a.callback(i.data||null)},error:i=>{var s;"function"==typeof a.callback&&a.callback(null==i||null===(s=i.response)||void 0===s?void 0:s.data),console.error(i)},loading:a.loading,loadingController:a.loadingController})});return function(i){return n.apply(this,arguments)}}()},9006:(I,P,d)=>{d.r(P),d.d(P,{ChargingSessionPageModule:()=>j});var f=d(177),C=d(9417),c=d(9465),_=d(7625),$=d(467),y=d(6944),F=d(6539),S=d(8517),M=d(8650),k=d(3588),R=d(8833),n=d(4438),a=d(4842);const i=r=>({$implicit:r});function s(r,h){1&r&&(n.j41(0,"div",14),n.nrm(1,"img",15),n.j41(2,"div",16),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&r&&(n.R7$(3),n.JRh(n.bMT(4,1,"NoChargingSession")))}function l(r,h){if(1&r&&(n.qex(0),n.j41(1,"div",17),n.eu8(2,18),n.k0s(),n.bVm()),2&r){const p=h.$implicit;n.XpG();const e=n.sdS(34);n.R7$(2),n.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",n.eq3(2,i,p))}}function g(r,h){if(1&r){const p=n.RV6();n.j41(0,"ion-infinite-scroll",19),n.bIt("ionInfinite",function(t){n.eBV(p);const o=n.XpG();return n.Njj(o.onIonInfinite(t))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}function m(r,h){if(1&r){const p=n.RV6();n.j41(0,"div",20),n.bIt("click",function(t){const o=n.eBV(p).$implicit,u=n.XpG();return n.Njj(u.openDetail(t,o))}),n.j41(1,"div",21)(2,"div",22)(3,"h6",23)(4,"b"),n.EFF(5),n.k0s()(),n.j41(6,"div")(7,"small",24),n.EFF(8),n.k0s()()(),n.j41(9,"div")(10,"ion-chip",25),n.EFF(11),n.k0s()()(),n.j41(12,"div",26)(13,"div",27)(14,"div",28)(15,"small"),n.EFF(16),n.nI1(17,"translate"),n.k0s()(),n.j41(18,"div",29)(19,"ion-chip",30),n.nrm(20,"ion-icon",31),n.k0s(),n.j41(21,"strong",24),n.EFF(22),n.k0s()()(),n.j41(23,"div",27)(24,"div",28)(25,"small"),n.EFF(26),n.nI1(27,"translate"),n.k0s()(),n.j41(28,"div",29)(29,"ion-chip",30),n.nrm(30,"ion-icon",32),n.k0s(),n.j41(31,"strong",24),n.EFF(32),n.k0s()()(),n.j41(33,"div",27)(34,"div",28)(35,"small"),n.EFF(36,"% PIN"),n.k0s()(),n.j41(37,"div",29)(38,"ion-chip",30),n.nrm(39,"ion-icon",33),n.k0s(),n.j41(40,"strong",24),n.EFF(41),n.k0s()()(),n.j41(42,"div",27)(43,"div",28)(44,"small"),n.EFF(45),n.nI1(46,"translate"),n.k0s()(),n.j41(47,"div",29)(48,"ion-chip",30),n.nrm(49,"ion-icon",34),n.k0s(),n.j41(50,"strong",24),n.EFF(51),n.nI1(52,"translate"),n.k0s()()()()()}if(2&r){let p,e,t;const o=h.$implicit,u=n.XpG();n.R7$(5),n.JRh(o.LocName),n.R7$(3),n.JRh(u.APP_FUNC_FormatDate(o.ChargingStart)),n.R7$(2),n.Y8G("color",u.APP_FUNC_GetColor_VSessionStatus(o.VSessionStatus)),n.R7$(),n.JRh(o.VSessionStatusName),n.R7$(5),n.JRh(n.bMT(17,18,"ElectricUsed")),n.R7$(3),n.Y8G("color",u.APP_FUNC_GetColor_VSessionStatus(o.VSessionStatus)),n.R7$(3),n.Lme("",u.APP_FUNC_RoundNumber(null!==(p=o.ElectricUsed)&&void 0!==p?p:0),"",null!==(p=o.Unit)&&void 0!==p?p:"kWh",""),n.R7$(4),n.JRh(n.bMT(27,20,"ChargingPackage")),n.R7$(3),n.Y8G("color",u.APP_FUNC_GetColor_VSessionStatus(o.VSessionStatus)),n.R7$(3),n.Lme("",null!==(e=o.MaxElectricUsed)&&void 0!==e?e:0,"",null!==(e=o.Unit)&&void 0!==e?e:"kWh",""),n.R7$(6),n.Y8G("color",u.APP_FUNC_GetColor_VSessionStatus(o.VSessionStatus)),n.R7$(3),n.SpI("",null!==(t=o.BatteryPercent)&&void 0!==t?t:0," %"),n.R7$(4),n.JRh(n.bMT(46,22,"Time")),n.R7$(3),n.Y8G("color",u.APP_FUNC_GetColor_VSessionStatus(o.VSessionStatus)),n.R7$(3),n.Lme("",u.getTimeCharging(o.ChargingStart,o.ChargingEnd)," ",n.bMT(52,24,"Minute"),"")}}const T=[{path:"",component:(()=>{var r;class h{constructor(e,t,o,u,v){this.router=e,this.activatedRoute=t,this.modalController=o,this.toastController=u,this.loadingController=v,this.APP_ROUTE=R._,this.APP_FUNC_FormatDate=S.Rv,this.APP_FUNC_DivDateTime=S.Wv,this.APP_FUNC_RoundNumber=S.Rw,this.APP_FUNC_GetColor_VSessionStatus=S.kH,this.v_session_status=k.jT,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.dataForm={},this.chargingSessions=[]}ngOnInit(){var e=this;let t=this.activatedRoute.snapshot.queryParamMap.get("vss")||"";t&&(this.filter.VSessionStatus=parseInt(t)||void 0);let o=this.activatedRoute.snapshot.queryParamMap.get("vssm")||"";o&&(this.filter.VSessionStatusMulti=o||void 0),(0,$.A)(function*(){(yield(0,F.kU)())&&e.refreshData()})()}onIonRefresher(e){this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}pushData(e){1==this.paging.page&&(this.chargingSessions.length=0),this.chargingSessions=this.chargingSessions.concat(e)}refreshData(e){this.paging.page=1,this.paging.active=!0,this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter.search=e.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,t){this.paging.sortfield=e||null,this.paging.sorttype=t||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{vss:this.filter.VSessionStatus,vssm:this.filter.VSessionStatusMulti},queryParamsHandling:"merge",replaceUrl:!0}),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var t=this;return(0,$.A)(function*(){t.paging.loading=!0,(0,y.kO)({loadingController:t.loadingController,params:{VSessionStatus:t.filter.VSessionStatus,VSessionStatusMulti:t.filter.VSessionStatusMulti,PageNumber:t.paging.page,PageSize:t.paging.limit},callback:o=>{var u;t.response=o,null!=o&&o.Succeeded?t.pushData(null!==(u=o.Data)&&void 0!==u?u:[]):(0,M.cX)(t.toastController,{},o).then(v=>v.present()),t.paging.loading=!1,t.paging.active=!(null==o||!o.HasNextPage),e&&e()}})})()}filterDate(e){var t=this;return(0,$.A)(function*(){t.dataForm.filterDate=e})()}changeVSessionStatus(e){this.filter.VSessionStatus=e.detail.value||void 0,this.filterChange()}changeVSessionStatusMulti(e){this.filter.VSessionStatusMulti=e.detail.value||void 0,this.filterChange()}getTimeCharging(e,t){return(0,S.Wv)(e,e?null!=t?t:new Date:null)}openDetail(e,t){var o=this;return(0,$.A)(function*(){var u,v;o.router.navigateByUrl(R._.CHARGING_SESSION_DETAIL.replace(":id",null!==(u=null===(v=t.ChargeSessionId)||void 0===v?void 0:v.toString())&&void 0!==u?u:""))})()}}return(r=h).\u0275fac=function(e){return new(e||r)(n.rXU(_.Ix),n.rXU(_.nX),n.rXU(c.W3),n.rXU(c.K_),n.rXU(c.Xi))},r.\u0275cmp=n.VBU({type:r,selectors:[["app-charging-session"]],decls:35,vars:28,consts:[["templateChargingSession",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container","pt-3","pb-4"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-day","rounded","bg-white","p-3","cursor-pointer",3,"click"],[1,"d-flex","align-items-start"],[1,"flex-grow-1"],[1,"my-0"],[1,"text-muted"],[1,"no-opacity","text-nowrap",3,"color"],[1,"row","mt-3"],[1,"col-6","mb-2"],[1,"mb-1"],[1,"d-flex","align-items-center"],[1,"ion-chip-icon",3,"color"],["src","../../../assets/icon/ion-icon/electric-2.svg"],["src","../../../assets/icon/ion-icon/changing-package-2.svg"],["src","../../../assets/icon/ion-icon/battery-3.svg"],["src","../../../assets/icon/ion-icon/time-2.svg"]],template:function(e,t){if(1&e){const o=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content",3)(8,"ion-refresher",4),n.bIt("ionRefresh",function(v){return n.eBV(o),n.Njj(t.onIonRefresher(v))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.j41(10,"div",5)(11,"ion-segment",6),n.bIt("ionChange",function(v){return n.eBV(o),n.Njj(t.changeVSessionStatusMulti(v))}),n.j41(12,"ion-segment-button",7)(13,"ion-label"),n.EFF(14),n.nI1(15,"translate"),n.k0s()(),n.j41(16,"ion-segment-button",8)(17,"ion-label"),n.EFF(18),n.nI1(19,"translate"),n.k0s()(),n.j41(20,"ion-segment-button",8)(21,"ion-label"),n.EFF(22),n.nI1(23,"translate"),n.k0s()(),n.j41(24,"ion-segment-button",8)(25,"ion-label"),n.EFF(26),n.nI1(27,"translate"),n.k0s()()()(),n.DNE(28,s,5,3,"div",9),n.j41(29,"div",10)(30,"div",11),n.DNE(31,l,3,4,"ng-container",12),n.k0s()(),n.DNE(32,g,2,0,"ion-infinite-scroll",13),n.k0s(),n.DNE(33,m,53,26,"ng-template",null,0,n.C5r)}if(2&e){let o;n.R7$(3),n.Y8G("defaultHref",t.APP_ROUTE.TABS_DEFAULT),n.R7$(2),n.JRh(n.bMT(6,18,"ChargingSessionHistory")),n.R7$(2),n.Y8G("fullscreen",!0),n.R7$(4),n.Y8G("value",null!==(o=t.filter.VSessionStatusMulti)&&void 0!==o?o:""),n.R7$(3),n.JRh(n.bMT(15,20,"All")),n.R7$(2),n.FS9("value",t.v_session_status.DangSac),n.R7$(2),n.JRh(n.bMT(19,22,"Charging")),n.R7$(2),n.FCK("value","",t.v_session_status.DaSac,",",t.v_session_status.HoanTat,""),n.R7$(2),n.JRh(n.bMT(23,24,"Completed")),n.R7$(2),n.FCK("value","",t.v_session_status.HuyPhienSac,",",t.v_session_status.Loi,""),n.R7$(2),n.JRh(n.bMT(27,26,"Error")),n.R7$(2),n.Y8G("ngIf",t.response&&!t.chargingSessions.length),n.R7$(3),n.Y8G("ngForOf",t.chargingSessions),n.R7$(),n.Y8G("ngIf",t.paging.active)}},dependencies:[f.Sq,f.bT,f.T3,c.QW,c.ZB,c.W9,c.eU,c.iq,c.Ax,c.Hp,c.he,c.To,c.Ki,c.Gp,c.eP,c.BC,c.ai,c.Je,c.el,a.D9],styles:[".card-day.rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:.25rem}.filter[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:.75rem .5rem}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.2rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.ion-chip-icon[_ngcontent-%COMP%]{margin:0 .5rem 0 0;padding:.25rem}.ion-chip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}"]}),h})()}];let E=(()=>{var r;class h{}return(r=h).\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[_.iI.forChild(T),_.iI]}),h})();var V=d(3890);let j=(()=>{var r;class h{}return(r=h).\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[f.MD,C.YN,c.bv,E,V.x]}),h})()}}]);