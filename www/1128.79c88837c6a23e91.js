"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1128],{5454:(G,V,c)=>{c.d(V,{K5:()=>A,NL:()=>j,X1:()=>u,fy:()=>F,nY:()=>S,r3:()=>k});var p=c(467),R=c(5972);const u=function(){var m=(0,p.A)(function*(t){var l,s,e,d,v,h,P,q,C,$,D,I,y,x,b,T,E,M;t.params=t.params||{},(0,R.Ll)({url:"api/RequestService/create",params:{ServiceId:null!==(l=t.params.ServiceId)&&void 0!==l?l:null,ChargePackageId:null!==(s=t.params.ChargePackageId)&&void 0!==s?s:null,RequestAddress:null!==(e=t.params.RequestAddress)&&void 0!==e?e:null,RequestLat:null!==(d=t.params.RequestLat)&&void 0!==d?d:null,RequestLong:null!==(v=t.params.RequestLong)&&void 0!==v?v:null,DestAddress:null!==(h=t.params.DestAddress)&&void 0!==h?h:null,DestLat:null!==(P=t.params.DestLat)&&void 0!==P?P:null,DestLong:null!==(q=t.params.DestLong)&&void 0!==q?q:null,Distance:null!==(C=t.params.Distance)&&void 0!==C?C:null,ExecutionDateAsString:null!==($=t.params.ExecutionDateAsString)&&void 0!==$?$:null,ExecutionTimeAsString:null!==(D=t.params.ExecutionTimeAsString)&&void 0!==D?D:null,ExecutionTimeToAsString:null!==(I=t.params.ExecutionTimeToAsString)&&void 0!==I?I:null,Notes:null!==(y=t.params.Notes)&&void 0!==y?y:null,PromoteCode:null!==(x=t.params.PromoteCode)&&void 0!==x?x:null,IsVehicleVipCharging:null!==(b=t.params.IsVehicleVipCharging)&&void 0!==b?b:null,IsVehicleVipWallet:null!==(T=t.params.IsVehicleVipWallet)&&void 0!==T?T:null,WalletId:null!==(E=t.params.WalletId)&&void 0!==E?E:null,VehicleVipId:null!==(M=t.params.VehicleVipId)&&void 0!==M?M:null},success:i=>{"function"==typeof t.callback&&t.callback(i.data||null)},error:i=>{var g;"function"==typeof t.callback&&t.callback(null==i||null===(g=i.response)||void 0===g?void 0:g.data),console.error(i)},loading:t.loading,loadingController:t.loadingController})});return function(l){return m.apply(this,arguments)}}(),S=function(){var m=(0,p.A)(function*(t){var l,s;t.params=t.params||{},(0,R.Ll)({url:"api/RequestService/cancel",params:{RequestServiceId:null!==(l=t.params.RequestServiceId)&&void 0!==l?l:null,CancelReason:null!==(s=t.params.CancelReason)&&void 0!==s?s:null},success:e=>{"function"==typeof t.callback&&t.callback(e.data||null)},error:e=>{var d;"function"==typeof t.callback&&t.callback(null==e||null===(d=e.response)||void 0===d?void 0:d.data),console.error(e)},loading:t.loading,loadingController:t.loadingController})});return function(l){return m.apply(this,arguments)}}(),F=function(){var m=(0,p.A)(function*(t){var l,s,e,d;t.params=t.params||{},(0,R.hm)({url:"api/RequestService/get-myhistory",params:{VRequestStatus:null!==(l=t.params.VRequestStatus)&&void 0!==l?l:null,VRequestStatusMulti:null!==(s=t.params.VRequestStatusMulti)&&void 0!==s?s:null,PageNumber:null!==(e=t.params.PageNumber)&&void 0!==e?e:1,PageSize:null!==(d=t.params.PageSize)&&void 0!==d?d:10},success:v=>{"function"==typeof t.callback&&t.callback(v.data||null)},error:v=>{var h;"function"==typeof t.callback&&t.callback(null==v||null===(h=v.response)||void 0===h?void 0:h.data),console.error(v)},loading:t.loading,loadingController:t.loadingController})});return function(l){return m.apply(this,arguments)}}(),A=function(){var m=(0,p.A)(function*(t){t.params=t.params||{},(0,R.hm)({url:`api/RequestService/get-detail/${t.params.RequestServiceId}`,success:l=>{"function"==typeof t.callback&&t.callback(l.data||null)},error:l=>{var s;"function"==typeof t.callback&&t.callback(null==l||null===(s=l.response)||void 0===s?void 0:s.data),console.error(l)},loading:t.loading,loadingController:t.loadingController})});return function(l){return m.apply(this,arguments)}}(),k=function(){var m=(0,p.A)(function*(t){t.params=t.params||{},(0,R.hm)({url:`api/RequestService/get-mybycode/${t.params.RequestCode}`,success:l=>{"function"==typeof t.callback&&t.callback(l.data||null)},error:l=>{var s;"function"==typeof t.callback&&t.callback(null==l||null===(s=l.response)||void 0===s?void 0:s.data),console.error(l)},loading:t.loading,loadingController:t.loadingController})});return function(l){return m.apply(this,arguments)}}(),j=function(){var m=(0,p.A)(function*(t){t.params=t.params||{},(0,R.hm)({url:"api/RequestService/get-availabletime",success:l=>{"function"==typeof t.callback&&t.callback(l.data||null)},error:l=>{var s;"function"==typeof t.callback&&t.callback(null==l||null===(s=l.response)||void 0===s?void 0:s.data),console.error(l)},loading:t.loading,loadingController:t.loadingController})});return function(l){return m.apply(this,arguments)}}()},1128:(G,V,c)=>{c.r(V),c.d(V,{RequestServicePageModule:()=>M});var p=c(177),R=c(9417),u=c(791),S=c(7625),F=c(467),A=c(5312),k=c(5454),j=c(6539),m=c(8517),t=c(8650),l=c(3588),s=c(8833),e=c(4438),d=c(3656),v=c(4842);const h=i=>({$implicit:i});function P(i,g){if(1&i&&(e.qex(0),e.j41(1,"div",12),e.eu8(2,13),e.k0s(),e.bVm()),2&i){const r=g.$implicit;e.XpG(2);const a=e.sdS(32);e.R7$(2),e.Y8G("ngTemplateOutlet",a)("ngTemplateOutletContext",e.eq3(2,h,r))}}function q(i,g){if(1&i&&(e.j41(0,"div",8)(1,"div",10),e.DNE(2,P,3,4,"ng-container",11),e.k0s()()),2&i){const r=e.XpG();e.R7$(2),e.Y8G("ngForOf",r.requestServices)}}function C(i,g){1&i&&(e.j41(0,"div",14),e.nrm(1,"img",15),e.j41(2,"div",16),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&i&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function $(i,g){if(1&i){const r=e.RV6();e.j41(0,"ion-infinite-scroll",17),e.bIt("ionInfinite",function(n){e.eBV(r);const o=e.XpG();return e.Njj(o.onIonInfinite(n))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function D(i,g){if(1&i&&(e.j41(0,"small",21),e.EFF(1),e.k0s()),2&i){const r=e.XpG().$implicit,a=e.XpG();e.R7$(),e.E5c("",a.APP_FUNC_FormatDate(r.ExecutionDate+" "+r.ExecutionTime,"HH:mm")," - ",a.APP_FUNC_FormatDate(r.ExecutionDate+" "+r.ExecutionTimeTo,"HH:mm"),", ",a.APP_FUNC_FormatDate(r.ExecutionDate+" "+r.ExecutionTime,"DD/MM/YYYY"),"")}}function I(i,g){if(1&i&&(e.j41(0,"small",21),e.EFF(1),e.k0s()),2&i){const r=e.XpG().$implicit,a=e.XpG();e.R7$(),e.JRh(a.APP_FUNC_FormatDate(r.RequestDate,"HH:mm, DD/MM/YYYY"))}}function y(i,g){if(1&i){const r=e.RV6();e.j41(0,"div",18),e.bIt("click",function(){let n;const o=e.eBV(r).$implicit,f=e.XpG();return e.Njj(f.navigateByUrl(f.APP_ROUTE.REQUEST_SERVICE_DETAIL.replace(":id",null!==(n=null==o.RequestServiceId?null:o.RequestServiceId.toString())&&void 0!==n?n:"")))}),e.j41(1,"div",19)(2,"ion-chip",20)(3,"ion-label"),e.EFF(4),e.k0s()(),e.DNE(5,D,2,3,"small",21)(6,I,2,1),e.k0s(),e.j41(7,"div",22)(8,"div"),e.EFF(9),e.k0s()(),e.j41(10,"div",23)(11,"ion-text",24)(12,"small")(13,"b"),e.EFF(14),e.k0s()()()()()}if(2&i){const r=g.$implicit,a=e.XpG();e.R7$(4),e.JRh(r.ServiceName),e.R7$(),e.vxM(5,r.ExecutionDate&&r.ExecutionTime&&r.ExecutionTimeTo?5:6),e.R7$(4),e.JRh(r.RequestAddress),e.R7$(2),e.Y8G("color",a.APP_FUNC_GetColor_VRequestStatus(r.VRequestStatus)),e.R7$(3),e.JRh(r.VRequestStatusName)}}const b=[{path:"",component:(()=>{var i;class g{constructor(a,n,o,f,_,U,N){this.activatedRoute=a,this.router=n,this.platform=o,this.modalController=f,this.animationController=_,this.toastController=U,this.loadingController=N,this.APP_ROUTE=s._,this.APP_FUNC_FormatMoney=m.xi,this.APP_FUNC_FormatDate=m.Rv,this.APP_FUNC_GetColor_VRequestStatus=m.rZ,this.v_request_status=l.Gz,this.readfile_url=A.c.readfile_url,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.requestServices=[],this.limitLoad=0;let L=a.snapshot.queryParams.tab;L&&(this.filter.VRequestStatusMulti=L)}ngOnInit(){this.IsOnInit=!0,(0,j.kU)().then(a=>{a&&this.refreshData()})}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(a){this.filter={},this.paging.page=1,this.paging.active=!0,this.refreshData(()=>{a.target.complete()})}onIonInfinite(a){this.loadMore(()=>{a.target.complete()})}onIonSegmentChange(a){this.filter.VRequestStatusMulti=a.detail.value,this.filterChange(),this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{tab:this.filter.VRequestStatusMulti},queryParamsHandling:"merge",replaceUrl:!0})}pushData(a){1==this.paging.page&&(this.requestServices.length=0),this.requestServices=this.requestServices.concat(a)}refreshData(a){this.loadData_Paging_Limit(a)}loadMore(a){this.paging.page+=1,this.loadData_Paging_Limit(a)}searchChange(a){this.filter.search=a.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(a,n){this.paging.sortfield=a||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(a){var n=this;return(0,F.A)(function*(){if(n.limitLoad>0)return void(a&&a());n.limitLoad=300;let o=setInterval(()=>{n.limitLoad-=100,n.limitLoad<=0&&(clearInterval(o),n.loadData_Paging(a))},100)})()}loadData_Paging(a){var n=this;return(0,F.A)(function*(){n.paging.loading=!0,(0,k.fy)({loadingController:n.loadingController,params:{VRequestStatusMulti:n.filter.VRequestStatusMulti,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:o=>{var f;n.response=o,null!=o&&o.Succeeded?n.pushData(null!==(f=o.Data)&&void 0!==f?f:[]):(0,t.cX)(n.toastController,{},o).then(_=>_.present()),n.paging.loading=!1,n.paging.active=!(null==o||!o.HasNextPage),a&&a()}})})()}navigateByUrl(a){this.router.navigateByUrl(a)}}return(i=g).\u0275fac=function(a){return new(a||i)(e.rXU(S.nX),e.rXU(S.Ix),e.rXU(d.OD),e.rXU(u.W3),e.rXU(u.Hx),e.rXU(u.K_),e.rXU(u.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-request-service"]],decls:33,vars:28,consts:[["templateRequestService",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],[1,"container","pt-3","pb-4"],[3,"ionInfinite",4,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[3,"ionInfinite"],[1,"card-service","cursor-pointer",3,"click"],[1,"d-flex","align-items-center","justify-content-between"],["color","primary",1,"no-opacity"],[1,"fw-300"],[1,"d-flex","justify-content-start","mt-2"],[1,"d-flex","justify-content-end","mt-2"],[3,"color"]],template:function(a,n){if(1&a){const o=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(_){return e.eBV(o),e.Njj(n.onIonRefresher(_))}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.j41(10,"div",4)(11,"ion-segment",5),e.bIt("ionChange",function(_){return e.eBV(o),e.Njj(n.onIonSegmentChange(_))}),e.j41(12,"ion-segment-button",6)(13,"ion-label"),e.EFF(14),e.nI1(15,"translate"),e.k0s()(),e.j41(16,"ion-segment-button",7)(17,"ion-label"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"ion-segment-button",7)(21,"ion-label"),e.EFF(22),e.nI1(23,"translate"),e.k0s()(),e.j41(24,"ion-segment-button",7)(25,"ion-label"),e.EFF(26),e.nI1(27,"translate"),e.k0s()()()(),e.DNE(28,q,3,1,"div",8)(29,C,5,3)(30,$,2,0,"ion-infinite-scroll",9),e.k0s(),e.DNE(31,y,15,5,"ng-template",null,0,e.C5r)}if(2&a){let o;e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.DEFAULT),e.R7$(2),e.JRh(e.bMT(6,18,"ServiceHistory")),e.R7$(6),e.Y8G("value",null!==(o=n.filter.VRequestStatusMulti)&&void 0!==o?o:""),e.R7$(3),e.JRh(e.bMT(15,20,"All")),e.R7$(2),e.yjJ("value","",n.v_request_status.YeuCauDichVu,",",n.v_request_status.NhanVienDangDiDen,",",n.v_request_status.DangPhucVu,""),e.R7$(2),e.JRh(e.bMT(19,22,"Processing")),e.R7$(2),e.FS9("value",n.v_request_status.HoanTat),e.R7$(2),e.JRh(e.bMT(23,24,"Completed")),e.R7$(2),e.yjJ("value","",n.v_request_status.KhachHangHuy,",",n.v_request_status.TuChoiPhucVu,",",n.v_request_status.Loi,""),e.R7$(2),e.JRh(e.bMT(27,26,"Error")),e.R7$(2),e.vxM(28,n.requestServices.length?28:n.response?29:-1),e.R7$(2),e.Y8G("ngIf",n.paging.active)}},dependencies:[p.Sq,p.bT,p.T3,u.QW,u.ZB,u.W9,u.eU,u.Ax,u.Hp,u.he,u.To,u.Ki,u.Gp,u.eP,u.IO,u.BC,u.ai,u.Je,u.el,v.D9],styles:[".card-service[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-service[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem}.card-service[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0;border:1px solid var(--ion-color-medium-tint)}"]}),g})()}];let T=(()=>{var i;class g{}return(i=g).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[S.iI.forChild(b),S.iI]}),g})();var E=c(3890);let M=(()=>{var i;class g{}return(i=g).\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[p.MD,R.YN,u.bv,T,E.x]}),g})()}}]);