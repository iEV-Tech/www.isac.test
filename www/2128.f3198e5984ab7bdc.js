"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2128],{2128:(A,p,s)=>{s.r(p),s.d(p,{ChargingReservationPageModule:()=>x});var h=s(177),f=s(9417),r=s(7896),d=s(7625),v=s(467),R=s(1278),C=s(6539),u=s(8517),P=s(8344),m=s(8833),t=s(4438),I=s(4842);const D=n=>({$implicit:n});function _(n,l){1&n&&(t.j41(0,"div",10),t.nrm(1,"ion-spinner",11),t.k0s())}function T(n,l){1&n&&(t.j41(0,"div",12),t.nrm(1,"ion-img",13),t.j41(2,"div",14),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&n&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}function F(n,l){if(1&n&&(t.qex(0),t.j41(1,"div",15),t.eu8(2,16),t.k0s(),t.bVm()),2&n){const o=l.$implicit;t.XpG();const e=t.sdS(17);t.R7$(2),t.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",t.eq3(2,D,o))}}function j(n,l){if(1&n){const o=t.RV6();t.j41(0,"ion-infinite-scroll",17),t.bIt("ionInfinite",function(i){t.eBV(o);const a=t.XpG();return t.Njj(a.onIonInfinite(i))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}function y(n,l){if(1&n){const o=t.RV6();t.j41(0,"div",18),t.bIt("click",function(i){const a=t.eBV(o).$implicit,g=t.XpG();return t.Njj(g.openDetail(i,a))}),t.j41(1,"div",19)(2,"b"),t.EFF(3),t.nrm(4,"br"),t.EFF(5),t.k0s()(),t.j41(6,"div",20)(7,"small",21),t.EFF(8),t.nI1(9,"translate"),t.k0s(),t.j41(10,"ion-text",22)(11,"small"),t.EFF(12),t.k0s()()()()}if(2&n){const o=l.$implicit,e=t.XpG();t.R7$(3),t.JRh(o.ApplyDate),t.R7$(2),t.Lme("",o.ApplyTimeStart," - ",o.ApplyTimeEnd,""),t.R7$(3),t.Lme("",t.bMT(9,7,"CreatedDate"),": ",e.APP_FUNC_FormatDate(o.CreatedDate),""),t.R7$(2),t.Y8G("color","Scheduled"==o.StatusName?"tertiary":"Cancelled"==o.StatusName?"danger":""),t.R7$(2),t.JRh(o.StatusDescription)}}const M=[{path:"",component:(()=>{var n;class l{constructor(e,i,a){this.router=e,this.loadingController=i,this.toastController=a,this.APP_ROUTE=m._,this.APP_FUNC_FormatMoney=u.xi,this.APP_FUNC_FormatDate=u.Rv,this.paging={sortfield:null,sorttype:null,page:1,limit:20,loading:!1,active:!0},this.filter={},this.chargingReservations=[],this.loadingController.create({message:""}).then(g=>this.loading=g)}openDetail(e,i){var a=this;return(0,v.A)(function*(){var g,c;a.router.navigateByUrl(m._.CHARGING_RESERVATION_DETAIL.replace(":id",null!==(g=null===(c=i.ChargeReservationId)||void 0===c?void 0:c.toString())&&void 0!==g?g:""))})()}ngOnInit(){var e=this;(0,v.A)(function*(){(yield(0,C.kU)())&&e.refreshData()})()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.chargingReservations.length=0}pushData(e){this.chargingReservations=this.chargingReservations.concat(e)}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(e,i){this.paging.sortfield=e||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(e){var i=this;return(0,v.A)(function*(){i.paging.loading=!0,(0,R.W1)({loading:a=>{var g,c;a?null===(g=i.loading)||void 0===g||g.present():null===(c=i.loading)||void 0===c||c.dismiss()},params:{PageNumber:i.paging.page,PageSize:i.paging.limit},callback:a=>{var g;i.response=a,null!=a&&a.Succeeded?i.pushData(null!==(g=null==a?void 0:a.Data)&&void 0!==g?g:[]):(0,P.cX)(i.toastController,{},a).then(c=>c.present()),i.paging.loading=!1,i.paging.active=!(null==a||!a.HasNextPage),e&&e()}})})()}}return(n=l).\u0275fac=function(e){return new(e||n)(t.rXU(d.Ix),t.rXU(r.Xi),t.rXU(r.K_))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-charging-reservation"]],decls:18,vars:8,consts:[["templateChargingReservation",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-reservation","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"color"]],template:function(e,i){if(1&e){const a=t.RV6();t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-back-button",2),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",3),t.bIt("ionRefresh",function(c){return t.eBV(a),t.Njj(i.onIonRefresher(c))}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,_,2,0,"div",4)(11,T,5,3,"div",5),t.j41(12,"div",6)(13,"div",7),t.DNE(14,F,3,4,"ng-container",8),t.k0s()(),t.DNE(15,j,2,0,"ion-infinite-scroll",9),t.k0s(),t.DNE(16,y,13,9,"ng-template",null,0,t.C5r)}2&e&&(t.R7$(3),t.Y8G("defaultHref",i.APP_ROUTE.TABS_USER),t.R7$(2),t.JRh(t.bMT(6,6,"Booking")),t.R7$(5),t.Y8G("ngIf",!i.response),t.R7$(),t.Y8G("ngIf",i.response&&!i.chargingReservations.length),t.R7$(3),t.Y8G("ngForOf",i.chargingReservations),t.R7$(),t.Y8G("ngIf",i.paging.active))},dependencies:[h.Sq,h.bT,h.T3,r.QW,r.W9,r.eU,r.KW,r.Ax,r.Hp,r.To,r.Ki,r.w2,r.IO,r.BC,r.ai,r.el,I.D9],styles:[".card-reservation[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-reservation[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem}.card-reservation[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0}"]}),l})()}];let $=(()=>{var n;class l{}return(n=l).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[d.iI.forChild(M),d.iI]}),l})();var N=s(3890);let x=(()=>{var n;class l{}return(n=l).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[h.MD,f.YN,r.bv,$,N.x]}),l})()}}]);