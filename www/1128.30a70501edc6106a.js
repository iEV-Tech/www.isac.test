"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1128],{1128:(O,d,r)=>{r.r(d),r.d(d,{RequestServicePageModule:()=>U});var c=r(177),p=r(9417),o=r(791),h=r(7625),m=r(467),f=r(5312),R=r(5454),P=r(6539),v=r(8517),_=r(8650),S=r(3588),C=r(8833),e=r(4438),I=r(3656),F=r(4842);const q=i=>({$implicit:i});function j(i,l){if(1&i&&(e.qex(0),e.j41(1,"div",12),e.eu8(2,13),e.k0s(),e.bVm()),2&i){const s=l.$implicit;e.XpG(2);const t=e.sdS(32);e.R7$(2),e.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",e.eq3(2,q,s))}}function T(i,l){if(1&i&&(e.j41(0,"div",8)(1,"div",10),e.DNE(2,j,3,4,"ng-container",11),e.k0s()()),2&i){const s=e.XpG();e.R7$(2),e.Y8G("ngForOf",s.requestServices)}}function D(i,l){1&i&&(e.j41(0,"div",14),e.nrm(1,"img",15),e.j41(2,"div",16),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&i&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function M(i,l){if(1&i){const s=e.RV6();e.j41(0,"ion-infinite-scroll",17),e.bIt("ionInfinite",function(n){e.eBV(s);const a=e.XpG();return e.Njj(a.onIonInfinite(n))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function y(i,l){if(1&i){const s=e.RV6();e.j41(0,"div",18),e.bIt("click",function(){let n;const a=e.eBV(s).$implicit,u=e.XpG();return e.Njj(u.navigateByUrl(u.APP_ROUTE.REQUEST_SERVICE_DETAIL.replace(":id",null!==(n=null==a.RequestServiceId?null:a.RequestServiceId.toString())&&void 0!==n?n:"")))}),e.j41(1,"div",19)(2,"b"),e.EFF(3),e.k0s(),e.j41(4,"ion-chip")(5,"ion-label"),e.EFF(6),e.k0s()()(),e.j41(7,"div",20)(8,"small",21),e.EFF(9),e.k0s(),e.j41(10,"ion-text",22)(11,"small")(12,"b"),e.EFF(13),e.k0s()()()()()}if(2&i){let s;const t=l.$implicit,n=e.XpG();e.R7$(3),e.JRh(t.ServiceName),e.R7$(3),e.SpI("",n.APP_FUNC_FormatMoney(null!==(s=t.PayValue)&&void 0!==s?s:0),"\u0111"),e.R7$(3),e.JRh(n.APP_FUNC_FormatDate(t.RequestDate)),e.R7$(),e.Y8G("color",n.APP_FUNC_GetColor_VRequestStatus(t.VRequestStatus)),e.R7$(3),e.JRh(t.VRequestStatusName)}}const E=[{path:"",component:(()=>{var i;class l{constructor(t,n,a,u,g,b){this.router=t,this.platform=n,this.modalController=a,this.animationController=u,this.toastController=g,this.loadingController=b,this.APP_ROUTE=C._,this.APP_FUNC_FormatMoney=v.xi,this.APP_FUNC_FormatDate=v.Rv,this.APP_FUNC_GetColor_VRequestStatus=v.rZ,this.v_request_status=S.Gz,this.readfile_url=f.c.readfile_url,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.requestServices=[],this.limitLoad=0}ngOnInit(){this.IsOnInit=!0,(0,P.kU)().then(t=>{t&&this.refreshData()})}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}onIonSegmentChange(t){this.filter.VRequestStatusMulti=t.detail.value,this.filterChange()}pushData(t){1==this.paging.page&&(this.requestServices.length=0),this.requestServices=this.requestServices.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging_Limit(t)}searchChange(t){this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(t,n){this.paging.sortfield=t||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(t){var n=this;return(0,m.A)(function*(){if(n.limitLoad>0)return void(t&&t());n.limitLoad=300;let a=setInterval(()=>{n.limitLoad-=100,n.limitLoad<=0&&(clearInterval(a),n.loadData_Paging(t))},100)})()}loadData_Paging(t){var n=this;return(0,m.A)(function*(){n.paging.loading=!0,(0,R.fy)({loadingController:n.loadingController,params:{VRequestStatusMulti:n.filter.VRequestStatusMulti,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:a=>{var u;n.response=a,null!=a&&a.Succeeded?n.pushData(null!==(u=a.Data)&&void 0!==u?u:[]):(0,_.cX)(n.toastController,{},a).then(g=>g.present()),n.paging.loading=!1,n.paging.active=!(null==a||!a.HasNextPage),t&&t()}})})()}navigateByUrl(t){this.router.navigateByUrl(t)}}return(i=l).\u0275fac=function(t){return new(t||i)(e.rXU(h.Ix),e.rXU(I.OD),e.rXU(o.W3),e.rXU(o.Hx),e.rXU(o.K_),e.rXU(o.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-request-service"]],decls:33,vars:28,consts:[["templateRequestService",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],[1,"container","pt-3","pb-4"],[3,"ionInfinite",4,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[3,"ionInfinite"],[1,"card-order","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"color"]],template:function(t,n){if(1&t){const a=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(g){return e.eBV(a),e.Njj(n.onIonRefresher(g))}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.j41(10,"div",4)(11,"ion-segment",5),e.bIt("ionChange",function(g){return e.eBV(a),e.Njj(n.onIonSegmentChange(g))}),e.j41(12,"ion-segment-button",6)(13,"ion-label"),e.EFF(14),e.nI1(15,"translate"),e.k0s()(),e.j41(16,"ion-segment-button",7)(17,"ion-label"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"ion-segment-button",7)(21,"ion-label"),e.EFF(22),e.nI1(23,"translate"),e.k0s()(),e.j41(24,"ion-segment-button",7)(25,"ion-label"),e.EFF(26),e.nI1(27,"translate"),e.k0s()()()(),e.DNE(28,T,3,1,"div",8)(29,D,5,3)(30,M,2,0,"ion-infinite-scroll",9),e.k0s(),e.DNE(31,y,14,5,"ng-template",null,0,e.C5r)}if(2&t){let a;e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.DEFAULT),e.R7$(2),e.JRh(e.bMT(6,18,"ServiceHistory")),e.R7$(6),e.Y8G("value",null!==(a=n.filter.VRequestStatusMulti)&&void 0!==a?a:""),e.R7$(3),e.JRh(e.bMT(15,20,"All")),e.R7$(2),e.yjJ("value","",n.v_request_status.YeuCauDichVu,",",n.v_request_status.NhanVienDangDiDen,",",n.v_request_status.DangPhucVu,""),e.R7$(2),e.JRh(e.bMT(19,22,"Processing")),e.R7$(2),e.FS9("value",n.v_request_status.HoanTat),e.R7$(2),e.JRh(e.bMT(23,24,"Completed")),e.R7$(2),e.yjJ("value","",n.v_request_status.KhachHangHuy,",",n.v_request_status.TuChoiPhucVu,",",n.v_request_status.Loi,""),e.R7$(2),e.JRh(e.bMT(27,26,"Error")),e.R7$(2),e.vxM(28,n.requestServices.length?28:n.response?29:-1),e.R7$(2),e.Y8G("ngIf",n.paging.active)}},dependencies:[c.Sq,c.bT,c.T3,o.QW,o.ZB,o.W9,o.eU,o.Ax,o.Hp,o.he,o.To,o.Ki,o.Gp,o.eP,o.IO,o.BC,o.ai,o.Je,o.el,F.D9],styles:[".card-order[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem;background:transparent}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0;border:1px solid var(--ion-color-medium-tint)}"]}),l})()}];let V=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[h.iI.forChild(E),h.iI]}),l})();var $=r(3890);let U=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[c.MD,p.YN,o.bv,V,$.x]}),l})()}}]);