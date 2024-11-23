"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2783],{2071:(T,E,c)=>{c.d(E,{k:()=>v,o:()=>R});var p=c(467),g=c(5972);const v=function(){var C=(0,p.A)(function*(n){var o,m,d,h,f,I,M;n.params=n.params||{},(0,g.Ll)({url:"api/Einvoice/createmyinvoice",params:{IsCompany:null!==(o=n.params.IsCompany)&&void 0!==o?o:null,TaxCode:null!==(m=n.params.TaxCode)&&void 0!==m?m:null,CompanyName:null!==(d=n.params.CompanyName)&&void 0!==d?d:null,Address:null!==(h=n.params.Address)&&void 0!==h?h:null,BuyerPhone:null!==(f=n.params.BuyerPhone)&&void 0!==f?f:null,BuyerEmail:null!==(I=n.params.BuyerEmail)&&void 0!==I?I:null,BillId:null!==(M=n.params.BillId)&&void 0!==M?M:null},success:u=>{"function"==typeof n.callback&&n.callback(u.data||null)},error:u=>{var b;"function"==typeof n.callback&&n.callback(null==u||null===(b=u.response)||void 0===b?void 0:b.data),console.error(u)},loading:n.loading,loadingController:n.loadingController})});return function(o){return C.apply(this,arguments)}}(),R=function(){var C=(0,p.A)(function*(n){var o;n.params=n.params||{},(0,g.IH)({url:"api/Einvoice/noeinvoice",params:{BillId:null!==(o=n.params.BillId)&&void 0!==o?o:null},success:m=>{"function"==typeof n.callback&&n.callback(m.data||null)},error:m=>{var d;"function"==typeof n.callback&&n.callback(null==m||null===(d=m.response)||void 0===d?void 0:d.data),console.error(m)},loading:n.loading,loadingController:n.loadingController})});return function(o){return C.apply(this,arguments)}}()},5137:(T,E,c)=>{c.d(E,{u:()=>P});var p=c(467),g=c(5970),v=c(8650),R=c(8833),C=c(1806),n=c(4438),o=c(791),m=c(177),d=c(4842);const h=l=>({$implicit:l});function f(l,_){1&l&&(n.j41(0,"div",18),n.nrm(1,"ion-img",19),n.j41(2,"div",20),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&l&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function I(l,_){if(1&l&&(n.qex(0),n.j41(1,"div",21),n.eu8(2,22),n.k0s(),n.bVm()),2&l){const r=_.$implicit;n.XpG();const t=n.sdS(33);n.R7$(2),n.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",n.eq3(2,h,r))}}function M(l,_){if(1&l){const r=n.RV6();n.j41(0,"ion-infinite-scroll",23),n.bIt("ionInfinite",function(e){n.eBV(r);const i=n.XpG();return n.Njj(i.onIonInfinite(e))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}function u(l,_){1&l&&(n.j41(0,"small",36),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&l&&(n.R7$(),n.SpI("(",n.bMT(2,1,"Default"),")"))}function b(l,_){if(1&l){const r=n.RV6();n.j41(0,"div",24)(1,"div",25)(2,"ion-radio",26)(3,"div",27)(4,"b",28),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.DNE(7,u,3,3,"small",29),n.k0s()(),n.j41(8,"div",30)(9,"ion-button",31),n.bIt("click",function(e){const i=n.eBV(r).$implicit,a=n.XpG();return n.Njj(a.editCustomerInvoice(e,i.CustomerInvoiceId))}),n.nrm(10,"ion-icon",32),n.k0s(),n.j41(11,"ion-button",33),n.bIt("click",function(e){const i=n.eBV(r).$implicit,a=n.XpG();return n.Njj(a.deleteCustomerInvoice(e,i.CustomerInvoiceId))}),n.nrm(12,"ion-icon",34),n.k0s()()(),n.nrm(13,"hr"),n.j41(14,"table",35)(15,"tr")(16,"td"),n.EFF(17),n.nI1(18,"translate"),n.k0s(),n.j41(19,"td")(20,"b"),n.EFF(21),n.k0s()()(),n.j41(22,"tr")(23,"td"),n.EFF(24),n.nI1(25,"translate"),n.k0s(),n.j41(26,"td")(27,"b"),n.EFF(28),n.k0s()()(),n.j41(29,"tr")(30,"td"),n.EFF(31),n.nI1(32,"translate"),n.k0s(),n.j41(33,"td")(34,"b"),n.EFF(35),n.k0s()()(),n.j41(36,"tr")(37,"td"),n.EFF(38),n.nI1(39,"translate"),n.k0s(),n.j41(40,"td")(41,"b"),n.EFF(42),n.k0s()()(),n.j41(43,"tr")(44,"td"),n.EFF(45),n.nI1(46,"translate"),n.k0s(),n.j41(47,"td")(48,"b"),n.EFF(49),n.k0s()()()()()}if(2&l){const r=_.$implicit;n.R7$(2),n.Y8G("value",r.CustomerInvoiceId),n.R7$(3),n.JRh(n.bMT(6,13,"ExportBillInfo")),n.R7$(2),n.Y8G("ngIf",r.IsDefault),n.R7$(10),n.JRh(n.bMT(18,15,"BillCompanyName")),n.R7$(4),n.JRh(r.CompanyName),n.R7$(3),n.JRh(n.bMT(25,17,"BillCompanyAddress")),n.R7$(4),n.JRh(r.Address),n.R7$(3),n.JRh(n.bMT(32,19,"BillCompanyTax")),n.R7$(4),n.JRh(r.TaxCode),n.R7$(3),n.JRh(n.bMT(39,21,"Email")),n.R7$(4),n.JRh(r.BuyerEmail),n.R7$(3),n.JRh(n.bMT(46,23,"Mobile")),n.R7$(4),n.JRh(r.BuyerPhone)}}let P=(()=>{var l;class _{constructor(t,e,i,a){this.modalController=t,this.toastController=e,this.loadingController=i,this.animationController=a,this.APP_ROUTE=R._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.customerInvoices=[],this.limitLoad=0}close(t){this.modalController.dismiss(null,"close")}submit(t){this.modalController.dismiss(this.CustomerInvoiceId,"submit")}ngOnInit(){this.refreshData()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}pushData(t){1==this.paging.page&&(this.customerInvoices.length=0),this.customerInvoices=this.customerInvoices.concat(t)}totalData(){return this.customerInvoices.length}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging_Limit(t)}searchChange(t){this.filter={},this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(t,e){this.paging.sortfield=t||null,this.paging.sorttype=e||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(t){var e=this;return(0,p.A)(function*(){if(e.limitLoad>0)return void(t&&t());e.limitLoad=300;let i=setInterval(()=>{e.limitLoad-=100,e.limitLoad<=0&&(clearInterval(i),e.loadData_Paging(t))},100)})()}loadData_Paging(t){var e=this;return(0,p.A)(function*(){e.paging.loading=!0,(0,g.Ul)({loadingController:e.loadingController,params:{PageNumber:e.paging.page,PageSize:e.paging.limit},callback:i=>{var a;e.response=i,null!=i&&i.Succeeded?e.pushData(null!==(a=i.Data)&&void 0!==a?a:[]):(0,v.cX)(e.toastController,{},i).then(s=>s.present()),e.paging.loading=!1,e.paging.active=!(null==i||!i.HasNextPage),t&&t()}})})()}editCustomerInvoice(t,e){this.presentModalAddCustomerInvoice(t,e)}deleteCustomerInvoice(t,e){e&&(0,v.Yy)(this.modalController,this.animationController,{selectedId:e,message:{TitleConfirm:"Delete_Confirm",TextConfirm:"Delete"},fnConfirm:i=>{(0,g.NT)({loadingController:this.loadingController,params:{CustomerInvoiceId:i},callback:a=>{null!=a&&a.Succeeded?this.refreshData():(0,v.cX)(this.toastController,{},a).then(s=>s.present())}})}})}changeCustomerInvoice(t){this.CustomerInvoiceId=t.detail.value}presentModalAddCustomerInvoice(t,e){var i=this;return(0,p.A)(function*(){const a=yield i.modalController.create({component:C.$,componentProps:{CustomerInvoiceId:e}});a.onDidDismiss().then(s=>{"success"==s.role&&i.refreshData()}),a.present()})()}}return(l=_).\u0275fac=function(t){return new(t||l)(n.rXU(o.W3),n.rXU(o.K_),n.rXU(o.Xi),n.rXU(o.Hx))},l.\u0275cmp=n.VBU({type:l,selectors:[["app-modal-customer-invoice"]],inputs:{CustomerInvoiceId:"CustomerInvoiceId"},decls:34,vars:16,consts:[["templateCustomerInvoice",""],["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],["slot","fixed",3,"ionRefresh"],["class","container container-loading py-5 text-center",4,"ngIf"],["mode","md",3,"ionChange","value"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12"],["color","primary","expand","block","shape","round","fill","outline",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/plus-circle.svg"],[1,"col-12","my-3","text-center"],[1,"text-muted"],[3,"ionInfinite",4,"ngIf"],[1,"p-3"],["color","primary","expand","block","shape","round",3,"click"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-customer-invoice","rounded","bg-white"],[1,"d-flex","justify-content-between"],["label-placement","end",3,"value"],[1,"text-wrap"],[1,"mr-1"],["class","text-primary d-inline-block",4,"ngIf"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"table","table-borderless","m-0"],[1,"text-primary","d-inline-block"]],template:function(t,e){if(1&t){const i=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.bIt("click",function(s){return n.eBV(i),n.Njj(e.close(s))}),n.nrm(4,"ion-icon",3),n.k0s()(),n.j41(5,"ion-title"),n.EFF(6),n.nI1(7,"translate"),n.k0s()()(),n.j41(8,"ion-content")(9,"ion-refresher",4),n.bIt("ionRefresh",function(s){return n.eBV(i),n.Njj(e.onIonRefresher(s))}),n.nrm(10,"ion-refresher-content"),n.k0s(),n.DNE(11,f,5,3,"div",5),n.j41(12,"ion-radio-group",6),n.bIt("ionChange",function(s){return n.eBV(i),n.Njj(e.changeCustomerInvoice(s))}),n.j41(13,"div",7)(14,"div",8),n.DNE(15,I,3,4,"ng-container",9),n.j41(16,"div",10)(17,"ion-button",11),n.bIt("click",function(s){return n.eBV(i),n.Njj(e.presentModalAddCustomerInvoice(s))}),n.nrm(18,"ion-icon",12),n.j41(19,"ion-label"),n.EFF(20),n.nI1(21,"translate"),n.k0s()()(),n.j41(22,"div",13)(23,"small",14),n.EFF(24),n.nI1(25,"translate"),n.k0s()()()()(),n.DNE(26,M,2,0,"ion-infinite-scroll",15),n.k0s(),n.j41(27,"ion-footer")(28,"div",16)(29,"ion-button",17),n.bIt("click",function(s){return n.eBV(i),n.Njj(e.submit(s))}),n.EFF(30),n.nI1(31,"translate"),n.k0s()()(),n.DNE(32,b,50,25,"ng-template",null,0,n.C5r)}2&t&&(n.R7$(6),n.JRh(n.bMT(7,8,"CustomerInvoiceSaved")),n.R7$(5),n.Y8G("ngIf",e.response&&!e.customerInvoices.length),n.R7$(),n.Y8G("value",e.CustomerInvoiceId),n.R7$(3),n.Y8G("ngForOf",e.customerInvoices),n.R7$(5),n.JRh(n.bMT(21,10,"Create")),n.R7$(4),n.JRh(n.bMT(25,12,"CustomerInvoiceNotice")),n.R7$(2),n.Y8G("ngIf",e.paging.active),n.R7$(4),n.JRh(n.bMT(31,14,"Choice")))},dependencies:[m.Sq,m.bT,m.T3,o.Jm,o.QW,o.W9,o.M0,o.eU,o.iq,o.KW,o.Ax,o.Hp,o.he,o.KO,o.f0,o.To,o.Ki,o.BC,o.ai,o.Je,d.D9],styles:[".table[_ngcontent-%COMP%]{table-layout:fixed}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}.card-customer-invoice[_ngcontent-%COMP%]{padding:1rem}.card-customer-invoice.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-customer-invoice[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-customer-invoice[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}"]}),_})()}}]);