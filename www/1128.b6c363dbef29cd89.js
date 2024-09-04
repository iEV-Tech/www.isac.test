"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1128],{5454:(M,b,o)=>{o.d(b,{K5:()=>F,X1:()=>r,fy:()=>T,nY:()=>P});var p=o(467),S=o(5972);const r=function(){var f=(0,p.A)(function*(t){var l,c,g,v,e,R,C,q,$,I,D;t.params=t.params||{},(0,S.Ll)({url:"api/RequestService/create",params:{ServiceId:null!==(l=t.params.ServiceId)&&void 0!==l?l:null,ChargePackageId:null!==(c=t.params.ChargePackageId)&&void 0!==c?c:null,RequestAddress:null!==(g=t.params.RequestAddress)&&void 0!==g?g:null,RequestLat:null!==(v=t.params.RequestLat)&&void 0!==v?v:null,RequestLong:null!==(e=t.params.RequestLong)&&void 0!==e?e:null,DestAddress:null!==(R=t.params.DestAddress)&&void 0!==R?R:null,DestLat:null!==(C=t.params.DestLat)&&void 0!==C?C:null,DestLong:null!==(q=t.params.DestLong)&&void 0!==q?q:null,ExecutionDateAsString:null!==($=t.params.ExecutionDate)&&void 0!==$?$:null,ExecutionTimeAsString:null!==(I=t.params.ExecutionTime)&&void 0!==I?I:null,Notes:null!==(D=t.params.Notes)&&void 0!==D?D:null},success:h=>{"function"==typeof t.callback&&t.callback(h.data||null)},error:h=>{var y;"function"==typeof t.callback&&t.callback(null==h||null===(y=h.response)||void 0===y?void 0:y.data),console.error(h)},loading:t.loading,loadingController:t.loadingController})});return function(l){return f.apply(this,arguments)}}(),P=function(){var f=(0,p.A)(function*(t){var l,c;t.params=t.params||{},(0,S.Ll)({url:"api/RequestService/cancel",params:{RequestServiceId:null!==(l=t.params.RequestServiceId)&&void 0!==l?l:null,CancelReason:null!==(c=t.params.CancelReason)&&void 0!==c?c:null},success:g=>{"function"==typeof t.callback&&t.callback(g.data||null)},error:g=>{var v;"function"==typeof t.callback&&t.callback(null==g||null===(v=g.response)||void 0===v?void 0:v.data),console.error(g)},loading:t.loading,loadingController:t.loadingController})});return function(l){return f.apply(this,arguments)}}(),T=function(){var f=(0,p.A)(function*(t){var l,c,g,v;t.params=t.params||{},(0,S.hm)({url:"api/RequestService/get-myhistory",params:{VRequestStatus:null!==(l=t.params.VRequestStatus)&&void 0!==l?l:null,VRequestStatusMulti:null!==(c=t.params.VRequestStatusMulti)&&void 0!==c?c:null,PageNumber:null!==(g=t.params.PageNumber)&&void 0!==g?g:1,PageSize:null!==(v=t.params.PageSize)&&void 0!==v?v:10},success:e=>{"function"==typeof t.callback&&t.callback(e.data||null)},error:e=>{var R;"function"==typeof t.callback&&t.callback(null==e||null===(R=e.response)||void 0===R?void 0:R.data),console.error(e)},loading:t.loading,loadingController:t.loadingController})});return function(l){return f.apply(this,arguments)}}(),F=function(){var f=(0,p.A)(function*(t){t.params=t.params||{},(0,S.hm)({url:`api/RequestService/get-detail/${t.params.RequestServiceId}`,success:l=>{"function"==typeof t.callback&&t.callback(l.data||null)},error:l=>{var c;"function"==typeof t.callback&&t.callback(null==l||null===(c=l.response)||void 0===c?void 0:c.data),console.error(l)},loading:t.loading,loadingController:t.loadingController})});return function(l){return f.apply(this,arguments)}}()},1128:(M,b,o)=>{o.r(b),o.d(b,{RequestServicePageModule:()=>V});var p=o(177),S=o(9417),r=o(9465),P=o(7625),T=o(467),F=o(5312),f=o(5454),t=o(6539),l=o(8517),c=o(8650),g=o(3588),v=o(8833),e=o(4438),R=o(3656),C=o(4842);const q=i=>({$implicit:i});function $(i,d){if(1&i&&(e.qex(0),e.j41(1,"div",12),e.eu8(2,13),e.k0s(),e.bVm()),2&i){const u=d.$implicit;e.XpG(2);const a=e.sdS(32);e.R7$(2),e.Y8G("ngTemplateOutlet",a)("ngTemplateOutletContext",e.eq3(2,q,u))}}function I(i,d){if(1&i&&(e.j41(0,"div",8)(1,"div",10),e.DNE(2,$,3,4,"ng-container",11),e.k0s()()),2&i){const u=e.XpG();e.R7$(2),e.Y8G("ngForOf",u.requestServices)}}function D(i,d){1&i&&(e.j41(0,"div",14),e.nrm(1,"img",15),e.j41(2,"div",16),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&i&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function h(i,d){if(1&i){const u=e.RV6();e.j41(0,"ion-infinite-scroll",17),e.bIt("ionInfinite",function(n){e.eBV(u);const s=e.XpG();return e.Njj(s.onIonInfinite(n))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function y(i,d){if(1&i){const u=e.RV6();e.j41(0,"div",18),e.bIt("click",function(){let n;const s=e.eBV(u).$implicit,m=e.XpG();return e.Njj(m.navigateByUrl(m.APP_ROUTE.REQUEST_SERVICE_DETAIL.replace(":id",null!==(n=null==s.RequestServiceId?null:s.RequestServiceId.toString())&&void 0!==n?n:"")))}),e.j41(1,"div",19)(2,"b"),e.EFF(3),e.k0s(),e.j41(4,"ion-chip")(5,"ion-label"),e.EFF(6),e.k0s()()(),e.j41(7,"div",20)(8,"small",21),e.EFF(9),e.k0s(),e.j41(10,"ion-text",22)(11,"small")(12,"b"),e.EFF(13),e.k0s()()()()()}if(2&i){let u;const a=d.$implicit,n=e.XpG();e.R7$(3),e.JRh(a.ServiceName),e.R7$(3),e.SpI("",n.APP_FUNC_FormatMoney(null!==(u=a.PayValue)&&void 0!==u?u:0),"\u0111"),e.R7$(3),e.JRh(n.APP_FUNC_FormatDate(a.RequestDate)),e.R7$(),e.Y8G("color",n.APP_FUNC_GetColor_VRequestStatus(a.VRequestStatus)),e.R7$(3),e.JRh(a.VRequestStatusName)}}const E=[{path:"",component:(()=>{var i;class d{constructor(a,n,s,m,_,k){this.router=a,this.platform=n,this.modalController=s,this.animationController=m,this.toastController=_,this.loadingController=k,this.APP_ROUTE=v._,this.APP_FUNC_FormatMoney=l.xi,this.APP_FUNC_FormatDate=l.Rv,this.APP_FUNC_GetColor_VRequestStatus=l.rZ,this.v_request_status=g.Gz,this.readfile_url=F.c.readfile_url,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.requestServices=[]}ngOnInit(){this.IsOnInit=!0,(0,t.kU)().then(a=>{a&&this.refreshData()})}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(a){this.filter={},this.refreshData(()=>{a.target.complete()})}onIonInfinite(a){this.loadMore(()=>{a.target.complete()})}onIonSegmentChange(a){this.filter.VRequestStatusMulti=a.detail.value,this.filterChange()}pushData(a){1==this.paging.page&&(this.requestServices.length=0),this.requestServices=this.requestServices.concat(a)}refreshData(a){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(a)}loadMore(a){this.paging.page+=1,this.loadData_Paging(a)}searchChange(a){this.filter.search=a.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(a,n){this.paging.sortfield=a||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(a){var n=this;return(0,T.A)(function*(){n.paging.loading=!0,(0,f.fy)({loadingController:n.loadingController,params:{VRequestStatusMulti:n.filter.VRequestStatusMulti,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:s=>{var m;n.response=s,null!=s&&s.Succeeded?n.pushData(null!==(m=s.Data)&&void 0!==m?m:[]):(0,c.cX)(n.toastController,{},s).then(_=>_.present()),n.paging.loading=!1,n.paging.active=!(null==s||!s.HasNextPage),a&&a()}})})()}navigateByUrl(a){this.router.navigateByUrl(a)}}return(i=d).\u0275fac=function(a){return new(a||i)(e.rXU(P.Ix),e.rXU(R.OD),e.rXU(r.W3),e.rXU(r.Hx),e.rXU(r.K_),e.rXU(r.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-request-service"]],decls:33,vars:28,consts:[["templateRequestService",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],[1,"container","pt-3","pb-4"],[3,"ionInfinite",4,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[3,"ionInfinite"],[1,"card-order","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"color"]],template:function(a,n){if(1&a){const s=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(_){return e.eBV(s),e.Njj(n.onIonRefresher(_))}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.j41(10,"div",4)(11,"ion-segment",5),e.bIt("ionChange",function(_){return e.eBV(s),e.Njj(n.onIonSegmentChange(_))}),e.j41(12,"ion-segment-button",6)(13,"ion-label"),e.EFF(14),e.nI1(15,"translate"),e.k0s()(),e.j41(16,"ion-segment-button",7)(17,"ion-label"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"ion-segment-button",7)(21,"ion-label"),e.EFF(22),e.nI1(23,"translate"),e.k0s()(),e.j41(24,"ion-segment-button",7)(25,"ion-label"),e.EFF(26),e.nI1(27,"translate"),e.k0s()()()(),e.DNE(28,I,3,1,"div",8)(29,D,5,3)(30,h,2,0,"ion-infinite-scroll",9),e.k0s(),e.DNE(31,y,14,5,"ng-template",null,0,e.C5r)}if(2&a){let s;e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.TABS_DEFAULT),e.R7$(2),e.JRh(e.bMT(6,18,"ServiceHistory")),e.R7$(6),e.Y8G("value",null!==(s=n.filter.VRequestStatusMulti)&&void 0!==s?s:""),e.R7$(3),e.JRh(e.bMT(15,20,"All")),e.R7$(2),e.yjJ("value","",n.v_request_status.YeuCauDichVu,",",n.v_request_status.NhanVienDangDiDen,",",n.v_request_status.DangPhucVu,""),e.R7$(2),e.JRh(e.bMT(19,22,"Processing")),e.R7$(2),e.FS9("value",n.v_request_status.HoanTat),e.R7$(2),e.JRh(e.bMT(23,24,"Completed")),e.R7$(2),e.yjJ("value","",n.v_request_status.KhachHangHuy,",",n.v_request_status.TuChoiPhucVu,",",n.v_request_status.Loi,""),e.R7$(2),e.JRh(e.bMT(27,26,"Error")),e.R7$(2),e.vxM(28,n.requestServices.length?28:n.response?29:-1),e.R7$(2),e.Y8G("ngIf",n.paging.active)}},dependencies:[p.Sq,p.bT,p.T3,r.QW,r.ZB,r.W9,r.eU,r.Ax,r.Hp,r.he,r.To,r.Ki,r.Gp,r.eP,r.IO,r.BC,r.ai,r.Je,r.el,C.D9],styles:[".card-order[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem;background:transparent}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0;border:1px solid var(--ion-color-medium-tint)}"]}),d})()}];let j=(()=>{var i;class d{}return(i=d).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[P.iI.forChild(E),P.iI]}),d})();var A=o(3890);let V=(()=>{var i;class d{}return(i=d).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[p.MD,S.YN,r.bv,j,A.x]}),d})()}}]);