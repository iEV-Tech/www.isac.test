"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7342],{7342:(A,c,o)=>{o.r(c),o.d(c,{PaymentPolicyPageModule:()=>H});var y=o(177),f=o(9417),a=o(9465),m=o(7625),u=o(467),d=o(1356),g=o(2313),p=o(8650),h=o(8833),n=o(4438),v=o(9780),T=o(4842);function R(e,r){if(1&e&&n.nrm(0,"div",4),2&e){const i=n.XpG();n.Y8G("innerHTML",null==i.termsPolicy?null:i.termsPolicy.Content,n.npT)}}const C=[{path:"",component:(()=>{var e;class r{constructor(t,l){this.loadingController=t,this.toastController=l,this.APP_ROUTE=h._}ngOnInit(){this.refreshData()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){var l=this;return(0,u.A)(function*(){(0,d.AU)({loadingController:l.loadingController,params:{TermKey:g.Gm.CHINH_SACH_THANH_TOAN},callback:s=>{l.response=s,null!=s&&s.Succeeded?l.termsPolicy=s.Data:(0,p.cX)(l.toastController,{},s).then(P=>P.present()),t&&t()}})})()}}return(e=r).\u0275fac=function(t){return new(t||e)(n.rXU(a.Xi),n.rXU(a.K_))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-payment-policy"]],decls:13,vars:5,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container",3,"innerHTML",4,"ngIf"],[1,"container",3,"innerHTML"]],template:function(t,l){1&t&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(P){return l.onIonRefresher(P)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,R,1,1,"div",3),n.k0s(),n.j41(11,"ion-footer"),n.nrm(12,"app-footer"),n.k0s()),2&t&&(n.R7$(3),n.Y8G("defaultHref",l.APP_ROUTE.TABS_DEFAULT),n.R7$(2),n.JRh(n.bMT(6,3,"PaymentPolicy")),n.R7$(5),n.Y8G("ngIf",null==l.response?null:l.response.Succeeded))},dependencies:[y.bT,a.QW,a.W9,a.M0,a.eU,a.To,a.Ki,a.BC,a.ai,a.el,v.n,T.D9]}),r})()}];let M=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[m.iI.forChild(C),m.iI]}),r})();var I=o(3890);let H=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[y.MD,f.YN,a.bv,M,I.x]}),r})()}}]);