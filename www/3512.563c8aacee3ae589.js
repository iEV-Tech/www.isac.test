"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3512],{3512:(x,p,d)=>{d.r(p),d.d(p,{CustomerInvoicePageModule:()=>E});var g=d(177),I=d(9417),r=d(7896),v=d(7625),h=d(467),C=d(1806),f=d(5970),m=d(8344),_=d(8833),t=d(4438),P=d(4842);const R=n=>({$implicit:n});function b(n,c){1&n&&(t.j41(0,"div",15),t.nrm(1,"ion-spinner",16),t.k0s())}function M(n,c){1&n&&(t.j41(0,"div",17),t.nrm(1,"ion-img",18),t.j41(2,"div",19),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&n&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}function j(n,c){if(1&n&&(t.qex(0),t.j41(1,"div",20),t.eu8(2,21),t.k0s(),t.bVm()),2&n){const s=c.$implicit;t.XpG();const e=t.sdS(27);t.R7$(2),t.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",t.eq3(2,R,s))}}function F(n,c){if(1&n){const s=t.RV6();t.j41(0,"ion-infinite-scroll",22),t.bIt("ionInfinite",function(i){t.eBV(s);const o=t.XpG();return t.Njj(o.onIonInfinite(i))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}function T(n,c){1&n&&(t.j41(0,"small",34),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&n&&(t.R7$(),t.SpI("(",t.bMT(2,1,"Default"),")"))}function $(n,c){if(1&n){const s=t.RV6();t.j41(0,"div",23)(1,"div",24)(2,"div",25)(3,"b",26),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.DNE(6,T,3,3,"small",27),t.k0s(),t.j41(7,"div",28)(8,"ion-button",29),t.bIt("click",function(i){const o=t.eBV(s).$implicit,a=t.XpG();return t.Njj(a.editCustomerInvoice(i,o.CustomerInvoiceId))}),t.nrm(9,"ion-icon",30),t.k0s(),t.j41(10,"ion-button",31),t.bIt("click",function(i){const o=t.eBV(s).$implicit,a=t.XpG();return t.Njj(a.deleteCustomerInvoice(i,o.CustomerInvoiceId))}),t.nrm(11,"ion-icon",32),t.k0s()()(),t.nrm(12,"hr"),t.j41(13,"table",33)(14,"tr")(15,"td"),t.EFF(16),t.nI1(17,"translate"),t.k0s(),t.j41(18,"td")(19,"b"),t.EFF(20),t.k0s()()(),t.j41(21,"tr")(22,"td"),t.EFF(23),t.nI1(24,"translate"),t.k0s(),t.j41(25,"td")(26,"b"),t.EFF(27),t.k0s()()(),t.j41(28,"tr")(29,"td"),t.EFF(30),t.nI1(31,"translate"),t.k0s(),t.j41(32,"td")(33,"b"),t.EFF(34),t.k0s()()(),t.j41(35,"tr")(36,"td"),t.EFF(37),t.nI1(38,"translate"),t.k0s(),t.j41(39,"td")(40,"b"),t.EFF(41),t.k0s()()(),t.j41(42,"tr")(43,"td"),t.EFF(44),t.nI1(45,"translate"),t.k0s(),t.j41(46,"td")(47,"b"),t.EFF(48),t.k0s()()()()()}if(2&n){const s=c.$implicit;t.R7$(4),t.JRh(t.bMT(5,12,"ExportBillInfo")),t.R7$(2),t.Y8G("ngIf",s.IsDefault),t.R7$(10),t.JRh(t.bMT(17,14,"BillCompanyName")),t.R7$(4),t.JRh(s.CompanyName),t.R7$(3),t.JRh(t.bMT(24,16,"BillCompanyAddress")),t.R7$(4),t.JRh(s.Address),t.R7$(3),t.JRh(t.bMT(31,18,"BillCompanyTax")),t.R7$(4),t.JRh(s.TaxCode),t.R7$(3),t.JRh(t.bMT(38,20,"Email")),t.R7$(4),t.JRh(s.BuyerEmail),t.R7$(3),t.JRh(t.bMT(45,22,"Mobile")),t.R7$(4),t.JRh(s.BuyerPhone)}}const k=[{path:"",component:(()=>{var n;class c{constructor(e,i,o,a){this.modalController=e,this.toastController=i,this.loadingController=o,this.animationController=a,this.APP_ROUTE=_._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.customerInvoices=[],this.loadingController.create({message:""}).then(l=>this.loading=l)}ngOnInit(){this.refreshData()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.customerInvoices.length=0}pushData(e){1==this.paging.page&&(this.customerInvoices.length=0),this.customerInvoices=this.customerInvoices.concat(e)}totalData(){return this.customerInvoices.length}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter={},this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,i){this.paging.sortfield=e||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var i=this;return(0,h.A)(function*(){i.paging.loading=!0,(0,f.Ul)({loading:o=>{var a,l;o?null===(a=i.loading)||void 0===a||a.present():null===(l=i.loading)||void 0===l||l.dismiss()},params:{PageNumber:i.paging.page,PageSize:i.paging.limit},callback:o=>{var a;i.response=o,null!=o&&o.Succeeded?i.pushData(null!==(a=o.Data)&&void 0!==a?a:[]):(0,m.cX)(i.toastController,{},o).then(l=>l.present()),i.paging.loading=!1,i.paging.active=!(null==o||!o.HasNextPage),e&&e()}})})()}editCustomerInvoice(e,i){this.presentModalAddCustomerInvoice(e,i)}deleteCustomerInvoice(e,i){i&&(0,m.Yy)(this.modalController,this.animationController,{selectedId:i,message:{TitleConfirm:"Delete_Confirm",TextConfirm:"Delete"},fnConfirm:o=>{(0,f.NT)({loading:a=>{var l,u;a?null===(l=this.loading)||void 0===l||l.present():null===(u=this.loading)||void 0===u||u.dismiss()},params:{CustomerInvoiceId:o},callback:a=>{null!=a&&a.Succeeded?this.refreshData():(0,m.cX)(this.toastController,{},a).then(l=>l.present())}})}})}changeCustomerInvoice(e){this.CustomerInvoiceId=e.detail.value}presentModalAddCustomerInvoice(e,i){var o=this;return(0,h.A)(function*(){const a=yield o.modalController.create({component:C.$,componentProps:{CustomerInvoiceId:i}});a.onDidDismiss().then(l=>{"success"==l.role&&o.refreshData()}),a.present()})()}}return(n=c).\u0275fac=function(e){return new(e||n)(t.rXU(r.W3),t.rXU(r.K_),t.rXU(r.Xi),t.rXU(r.Hx))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-customer-invoice"]],inputs:{CustomerInvoiceId:"CustomerInvoiceId"},decls:28,vars:14,consts:[["templateCustomerInvoice",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12"],["color","primary","expand","block","shape","round","fill","outline",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/plus-circle.svg"],[1,"col-12","my-3","text-center"],[1,"text-muted"],[3,"ionInfinite",4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-customer-invoice","rounded","bg-white"],[1,"d-flex","justify-content-between"],[1,"text-wrap"],[1,"mr-1"],["class","text-primary d-inline-block",4,"ngIf"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"table","table-borderless","m-0"],[1,"text-primary","d-inline-block"]],template:function(e,i){if(1&e){const o=t.RV6();t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-back-button",2),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",3),t.bIt("ionRefresh",function(l){return t.eBV(o),t.Njj(i.onIonRefresher(l))}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,b,2,0,"div",4)(11,M,5,3,"div",5),t.j41(12,"div",6)(13,"div",7),t.DNE(14,j,3,4,"ng-container",8),t.j41(15,"div",9)(16,"ion-button",10),t.bIt("click",function(l){return t.eBV(o),t.Njj(i.presentModalAddCustomerInvoice(l))}),t.nrm(17,"ion-icon",11),t.j41(18,"ion-label"),t.EFF(19),t.nI1(20,"translate"),t.k0s()()(),t.j41(21,"div",12)(22,"small",13),t.EFF(23),t.nI1(24,"translate"),t.k0s()()()(),t.DNE(25,F,2,0,"ion-infinite-scroll",14),t.k0s(),t.DNE(26,$,49,24,"ng-template",null,0,t.C5r)}2&e&&(t.R7$(3),t.Y8G("defaultHref",i.APP_ROUTE.TABS_USER),t.R7$(2),t.JRh(t.bMT(6,8,"ExportBillInfo")),t.R7$(5),t.Y8G("ngIf",!i.response),t.R7$(),t.Y8G("ngIf",i.response&&!i.customerInvoices.length),t.R7$(3),t.Y8G("ngForOf",i.customerInvoices),t.R7$(5),t.JRh(t.bMT(20,10,"Create")),t.R7$(4),t.JRh(t.bMT(24,12,"CustomerInvoiceNotice")),t.R7$(2),t.Y8G("ngIf",i.paging.active))},dependencies:[g.Sq,g.bT,g.T3,r.Jm,r.QW,r.W9,r.eU,r.iq,r.KW,r.Ax,r.Hp,r.he,r.To,r.Ki,r.w2,r.BC,r.ai,r.el,P.D9],styles:[".table[_ngcontent-%COMP%]{table-layout:fixed}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}.card-customer-invoice[_ngcontent-%COMP%]{padding:1rem}.card-customer-invoice.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-customer-invoice[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-customer-invoice[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}"]}),c})()}];let y=(()=>{var n;class c{}return(n=c).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[v.iI.forChild(k),v.iI]}),c})();var D=d(3890);let E=(()=>{var n;class c{}return(n=c).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[g.MD,I.YN,r.bv,y,D.x]}),c})()}}]);