"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8861],{8861:($,u,i)=>{i.r(u),i.d(u,{NotifyDetailPageModule:()=>U});var h=i(177),v=i(9417),a=i(7896),d=i(7625),y=i(467),P=i(7168),N=i(6539),c=i(8517),D=i(8344),R=i(8833),t=i(4438),C=i(4842);function M(n,r){1&n&&(t.j41(0,"div",5),t.nrm(1,"ion-spinner",6),t.k0s())}function F(n,r){if(1&n&&(t.qex(0),t.j41(1,"div",7)(2,"div",8)(3,"h2"),t.EFF(4),t.nI1(5,"translate"),t.k0s()()(),t.j41(6,"div",9)(7,"small",10),t.EFF(8),t.k0s(),t.nrm(9,"div",11),t.k0s(),t.bVm()),2&n){const l=t.XpG();t.R7$(4),t.JRh(t.bMT(5,3,"Notify")),t.R7$(4),t.JRh(l.APP_FUNC_FormatDate(null==l.notify?null:l.notify.SentTime)),t.R7$(),t.Y8G("innerHTML",l.APP_FUNC_RenderNotify(l.notify),t.npT)}}const I=[{path:"",component:(()=>{var n;class r{constructor(e,o,s,f){var g,m=this;this.loadingController=o,this.toastController=s,this.modalController=f,this.APP_ROUTE=R._,this.APP_FUNC_FormatMoney=c.xi,this.APP_FUNC_FormatDate=c.Rv,this.APP_FUNC_RenderNotify=c.xG;let p=null!==(g=e.snapshot.params.id)&&void 0!==g?g:"";p&&(this.NotifyId=parseFloat(p)),(0,y.A)(function*(){m.loading=yield m.loadingController.create({message:""})})()}ngOnInit(){var e=this;(0,y.A)(function*(){(yield(0,N.kU)())&&e.refreshData()})()}onIonRefresher(e){this.refreshData(()=>{e.target.complete()})}refreshData(e){this.NotifyId&&(0,P.yb)({loading:o=>{var s,f;o?null===(s=this.loading)||void 0===s||s.present():null===(f=this.loading)||void 0===f||f.dismiss()},params:{NotifyId:this.NotifyId},callback:o=>{this.response=o,null!=o&&o.Succeeded?this.notify=o.Data:(0,D.cX)(this.toastController,{},o).then(s=>s.present()),e&&e()}})}}return(n=r).\u0275fac=function(e){return new(e||n)(t.rXU(d.nX),t.rXU(a.Xi),t.rXU(a.K_),t.rXU(a.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-notify-detail"]],decls:12,vars:6,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"mb-4"],[1,"block-heading","d-flex","align-items-center","justify-content-center","text-center","w-100"],[1,"container","mb-4","mb-lg-5","block-content"],[1,"text-muted","font-condensed"],[3,"innerHTML"]],template:function(e,o){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",2),t.bIt("ionRefresh",function(f){return o.onIonRefresher(f)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,M,2,0,"div",3)(11,F,10,5,"ng-container",4),t.k0s()),2&e&&(t.R7$(3),t.Y8G("defaultHref",o.APP_ROUTE.TABS_NOTIFY),t.R7$(2),t.JRh(t.bMT(6,4,"Notify")),t.R7$(5),t.Y8G("ngIf",!o.response),t.R7$(),t.Y8G("ngIf",null==o.response?null:o.response.Succeeded))},dependencies:[h.bT,a.QW,a.W9,a.eU,a.To,a.Ki,a.w2,a.BC,a.ai,a.el,C.D9],styles:[".block-heading[_ngcontent-%COMP%]{min-height:160px;background-image:url(banner-2.e56e40b14eadb432.png);background-repeat:no-repeat;background-position:center center;background-size:cover}.block-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.block-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.block-content[_ngcontent-%COMP%]{max-width:800px;margin:auto}"]}),r})()}];let T=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[d.iI.forChild(I),d.iI]}),r})();var b=i(3890);let U=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[h.MD,v.YN,a.bv,T,b.x]}),r})()}}]);