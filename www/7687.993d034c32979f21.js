"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7687],{7687:(x,p,r)=>{r.r(p),r.d(p,{OrderInfoPageModule:()=>T});var f=r(177),v=r(9417),a=r(791),h=r(7625),c=r(467),I=r(9061),P=r(6539),m=r(8517),O=r(8650),_=r(3588),u=r(8833),t=r(4438),R=r(4842);function C(i,l){1&i&&(t.j41(0,"div",8),t.nrm(1,"img",9),t.j41(2,"div",10),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&i&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}function F(i,l){if(1&i&&t.nrm(0,"img",18),2&i){const s=t.XpG().$implicit;t.Mz_("src","../../../assets/icon/payment/",s.KindOfCard,".jpeg",t.B4B)}}function D(i,l){1&i&&t.nrm(0,"img",19)}function M(i,l){if(1&i){const s=t.RV6();t.qex(0),t.j41(1,"div",11)(2,"div",12),t.bIt("click",function(e){const o=t.eBV(s).$implicit,g=t.XpG();return t.Njj(g.openDetail(e,o))}),t.j41(3,"div",13)(4,"b"),t.EFF(5),t.k0s(),t.j41(6,"ion-chip")(7,"ion-label"),t.EFF(8),t.k0s(),t.j41(9,"ion-avatar"),t.DNE(10,F,1,2,"img",14)(11,D,1,0,"img",15),t.k0s()()(),t.j41(12,"div",16)(13,"small",17),t.EFF(14),t.k0s(),t.j41(15,"small")(16,"b"),t.EFF(17),t.k0s()()()()(),t.bVm()}if(2&i){let s;const n=l.$implicit,e=t.XpG();t.R7$(5),t.JRh(n.OrderCode),t.R7$(3),t.SpI("",e.APP_FUNC_FormatMoney(null!==(s=n.PayValue)&&void 0!==s?s:0),"\u0111"),t.R7$(2),t.Y8G("ngIf",n.Paymethod),t.R7$(),t.Y8G("ngIf",!n.Paymethod),t.R7$(3),t.JRh(e.APP_FUNC_FormatDate(n.OrderDate)),t.R7$(2),t.ZvI("text-",e.APP_FUNC_GetColor_VOrderStatus(n.VOrderStatus),""),t.R7$(),t.JRh(n.VOrderStatusName)}}function y(i,l){if(1&i){const s=t.RV6();t.j41(0,"ion-infinite-scroll",20),t.bIt("ionInfinite",function(e){t.eBV(s);const o=t.XpG();return t.Njj(o.onIonInfinite(e))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}const j=[{path:"",component:(()=>{var i;class l{constructor(n,e,o){this.router=n,this.loadingController=e,this.toastController=o,this.APP_ROUTE=u._,this.APP_FUNC_FormatMoney=m.xi,this.APP_FUNC_FormatDate=m.Rv,this.APP_FUNC_GetColor_VOrderStatus=m.qM,this.v_order_status=_.TL,this.paging={sortfield:null,sorttype:null,page:1,limit:20,loading:!1,active:!0},this.filter={},this.orderInfos=[],this.limitLoad=0}openDetail(n,e){var o=this;return(0,c.A)(function*(){var g,d;o.router.navigateByUrl(u._.ORDER_INFO_DETAIL.replace(":id",null!==(g=null===(d=e.OrderId)||void 0===d?void 0:d.toString())&&void 0!==g?g:""))})()}ngOnInit(){var n=this;(0,c.A)(function*(){(yield(0,P.kU)())&&n.refreshData()})()}onIonRefresher(n){this.filter={},this.refreshData(()=>{n.target.complete()})}onIonInfinite(n){this.loadMore(()=>{n.target.complete()})}pushData(n){1==this.paging.page&&(this.orderInfos.length=0),this.orderInfos=this.orderInfos.concat(n)}refreshData(n){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(n)}loadMore(n){this.paging.page+=1,this.loadData_Paging_Limit(n)}searchChange(n){this.filter.search=n.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(n,e){this.paging.sortfield=n||null,this.paging.sorttype=e||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(n){var e=this;return(0,c.A)(function*(){if(e.limitLoad>0)return void(n&&n());e.limitLoad=300;let o=setInterval(()=>{e.limitLoad-=100,e.limitLoad<=0&&(clearInterval(o),e.loadData_Paging(n))},100)})()}loadData_Paging(n){var e=this;return(0,c.A)(function*(){e.paging.loading=!0,(0,I.Qd)({loadingController:e.loadingController,params:{PageNumber:e.paging.page,PageSize:e.paging.limit},callback:o=>{var g;e.response=o,null!=o&&o.Succeeded?e.pushData(null!==(g=null==o?void 0:o.Data)&&void 0!==g?g:[]):(0,O.cX)(e.toastController,{},o).then(d=>d.present()),e.paging.loading=!1,e.paging.active=!(null==o||!o.HasNextPage),n&&n()}})})()}}return(i=l).\u0275fac=function(n){return new(n||i)(t.rXU(h.Ix),t.rXU(a.Xi),t.rXU(a.K_))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-order-info"]],decls:15,vars:7,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[1,"card-order","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[3,"src",4,"ngIf"],["src","../../../assets/icon/ion-img/charge-package.svg",4,"ngIf"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"src"],["src","../../../assets/icon/ion-img/charge-package.svg"],[3,"ionInfinite"]],template:function(n,e){1&n&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",2),t.bIt("ionRefresh",function(g){return e.onIonRefresher(g)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,C,5,3,"div",3),t.j41(11,"div",4)(12,"div",5),t.DNE(13,M,18,9,"ng-container",6),t.k0s()(),t.DNE(14,y,2,0,"ion-infinite-scroll",7),t.k0s()),2&n&&(t.R7$(3),t.Y8G("defaultHref",e.APP_ROUTE.USER),t.R7$(2),t.JRh(t.bMT(6,5,"OrderHistory")),t.R7$(5),t.Y8G("ngIf",e.response&&!e.orderInfos.length),t.R7$(3),t.Y8G("ngForOf",e.orderInfos),t.R7$(),t.Y8G("ngIf",e.paging.active))},dependencies:[f.Sq,f.bT,a.mC,a.QW,a.ZB,a.W9,a.eU,a.Ax,a.Hp,a.he,a.To,a.Ki,a.BC,a.ai,a.el,R.D9],styles:[".card-order[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0}"]}),l})()}];let $=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[h.iI.forChild(j),h.iI]}),l})();var N=r(3890);let T=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[f.MD,v.YN,a.bv,$,N.x]}),l})()}}]);