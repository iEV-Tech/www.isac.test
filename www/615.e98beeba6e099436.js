"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[615],{1038:(T,b,c)=>{c.d(b,{v:()=>t});var v=c(467),U=c(5972);const t=function(){var I=(0,v.A)(function*(l){l.params=l.params||{};var d=[];l.params.subFolder&&(l.params.subFolder=l.params.subFolder.replace(/[^a-zA-Z0-9\/]/gm,"").replace(/\/+/gm,"/").replace(/^\//,"").replace(/\/$/,""),l.params.subFolder&&d.push(l.params.subFolder)),l.params.isconvertvideo=!!l.params.isconvertvideo,l.params.isconvertpdf2image=!!l.params.isconvertpdf2image,l.params.isconvertoffice2image=!!l.params.isconvertoffice2image,l.params.isresizeimage=!!l.params.isresizeimage;const n=new FormData;n.append("path",d.join("/")),n.append("types",l.params.fileType||null),n.append("file",l.params.file||null),n.append("base64",l.params.base64||!1),n.append("isconvertvideo",l.params.isconvertvideo),n.append("isconvertpdf2image",l.params.isconvertpdf2image),n.append("isconvertoffice2image",l.params.isconvertoffice2image),n.append("isresizeimage",l.params.isresizeimage),(0,U.ZD)({url:"files",formData:n,success:e=>{"function"==typeof l.callback&&l.callback(e||null)},error:e=>{"function"==typeof l.callback&&l.callback(),console.error(l,e)},loading:l.loading,loadingController:l.loadingController})});return function(d){return I.apply(this,arguments)}}()},9946:(T,b,c)=>{c.d(b,{ks:()=>I,sh:()=>l,z:()=>t});var v=c(467),U=c(5972);const t=function(){var d=(0,v.A)(function*(n){n.params=n.params||{},(0,U.hm)({url:"api/User/get-user",params:{},success:e=>{"function"==typeof n.callback&&n.callback(e.data||null)},error:e=>{var u;"function"==typeof n.callback&&n.callback(null==e||null===(u=e.response)||void 0===u?void 0:u.data),console.error(e)},loading:n.loading,loadingController:n.loadingController})});return function(e){return d.apply(this,arguments)}}(),I=function(){var d=(0,v.A)(function*(n){var e,u,f,h,R,F;n.params=n.params||{},(0,U.IH)({url:"api/User/update-user",params:{UserId:null!==(e=n.params.UserId)&&void 0!==e?e:null,FullName:null!==(u=n.params.FullName)&&void 0!==u?u:null,Address:null!==(f=n.params.Address)&&void 0!==f?f:null,Gender:null!==(h=n.params.Gender)&&void 0!==h?h:null,Birthday:null!==(R=n.params.Birthday)&&void 0!==R?R:null,PersonEmail:null!==(F=n.params.Email)&&void 0!==F?F:null},success:g=>{"function"==typeof n.callback&&n.callback(g.data||null)},error:g=>{var C;"function"==typeof n.callback&&n.callback(null==g||null===(C=g.response)||void 0===C?void 0:C.data),console.error(g)},loading:n.loading,loadingController:n.loadingController})});return function(e){return d.apply(this,arguments)}}(),l=function(){var d=(0,v.A)(function*(n){var e,u;n.params=n.params||{},(0,U.IH)({url:"api/User/update-avatar",params:{UserId:null!==(e=n.params.UserId)&&void 0!==e?e:null,Avatar:null!==(u=n.params.Avatar)&&void 0!==u?u:null},success:f=>{"function"==typeof n.callback&&n.callback(f.data||null)},error:f=>{var h;"function"==typeof n.callback&&n.callback(null==f||null===(h=f.response)||void 0===h?void 0:h.data),console.error(f)},loading:n.loading,loadingController:n.loadingController})});return function(e){return d.apply(this,arguments)}}()},615:(T,b,c)=>{c.r(b),c.d(b,{UserInfoPageModule:()=>N});var v=c(177),U=c(9417),t=c(9465),I=c(7625),l=c(467),d=c(9946),n=c(8650),e=c(4438),u=c(4842);function f(s,m){if(1&s){const i=e.RV6();e.qex(0),e.j41(1,"ion-content")(2,"div",4)(3,"ion-list",5)(4,"div",6)(5,"label"),e.EFF(6),e.nI1(7,"translate"),e.j41(8,"span",7),e.EFF(9,"*"),e.k0s()(),e.j41(10,"div",8)(11,"ion-item")(12,"ion-input",9),e.nI1(13,"translate"),e.bIt("ionChange",function(a){e.eBV(i);const o=e.XpG();return e.Njj(o.changeFullName(a))}),e.k0s()()()(),e.j41(14,"div",6)(15,"label"),e.EFF(16),e.nI1(17,"translate"),e.k0s(),e.j41(18,"div",8)(19,"ion-item")(20,"ion-input",10),e.nI1(21,"translate"),e.bIt("ionChange",function(a){e.eBV(i);const o=e.XpG();return e.Njj(o.changeEmail(a))}),e.k0s()()()(),e.j41(22,"div",6)(23,"label"),e.EFF(24),e.nI1(25,"translate"),e.k0s(),e.j41(26,"div",8)(27,"ion-item")(28,"ion-textarea",11),e.nI1(29,"translate"),e.bIt("ionChange",function(a){e.eBV(i);const o=e.XpG();return e.Njj(o.changeAddress(a))}),e.k0s()()()()()()(),e.j41(30,"ion-footer")(31,"div",12)(32,"ion-button",13),e.bIt("click",function(a){e.eBV(i);const o=e.XpG();return e.Njj(o.submit(a))}),e.j41(33,"ion-label"),e.EFF(34),e.nI1(35,"translate"),e.k0s()()()(),e.bVm()}if(2&s){const i=e.XpG();e.R7$(6),e.SpI("",e.bMT(7,11,"FullName")," "),e.R7$(6),e.FS9("placeholder",e.bMT(13,13,"FullName")),e.Y8G("value",i.user.FullName),e.R7$(4),e.JRh(e.bMT(17,15,"Email")),e.R7$(4),e.FS9("placeholder",e.bMT(21,17,"Email")),e.Y8G("value",null==i.user.Person?null:i.user.Person.Email),e.R7$(4),e.JRh(e.bMT(25,19,"Address")),e.R7$(4),e.FS9("placeholder",e.bMT(29,21,"Address")),e.Y8G("autoGrow",!0)("value",i.user.Address),e.R7$(6),e.JRh(e.bMT(35,23,"Complete"))}}let h=(()=>{var s;class m{constructor(r,a,o){this.modalController=r,this.toastController=a,this.loadingController=o,this.user={}}ngOnInit(){(0,d.z)({loadingController:this.loadingController,callback:r=>{var a;this.response=r,null!=r&&r.Succeeded?this.user=null!==(a=r.Data)&&void 0!==a?a:{}:(0,n.cX)(this.toastController,{},r).then(o=>o.present())}})}close(r){var a=this;return(0,l.A)(function*(){a.modalController.dismiss(null,"cancel")})()}submit(r){var a=this;return(0,l.A)(function*(){(0,d.ks)({loadingController:a.loadingController,params:a.user,callback:o=>{a.response=o,null!=o&&o.Succeeded?a.modalController.dismiss(null,"success"):(0,n.cX)(a.toastController,{},o).then(p=>p.present())}})})()}changeFullName(r){var a=this;return(0,l.A)(function*(){a.user.FullName=r.detail.value})()}changeEmail(r){var a=this;return(0,l.A)(function*(){a.user.Email=r.detail.value})()}changeAddress(r){var a=this;return(0,l.A)(function*(){a.user.Address=r.detail.value})()}}return(s=m).\u0275fac=function(r){return new(r||s)(e.rXU(t.W3),e.rXU(t.K_),e.rXU(t.Xi))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-modal-update-user"]],decls:9,vars:4,consts:[["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],[4,"ngIf"],[1,"card-info","bg-white","container","py-3","min-h-100"],["lines","none"],[1,"form-group"],[1,"text-danger"],[1,"ion-item-input"],[3,"ionChange","placeholder","value"],["type","email",3,"ionChange","placeholder","value"],[3,"ionChange","autoGrow","placeholder","value"],[1,"container","py-3"],["color","primary","expand","block","shape","round",3,"click"]],template:function(r,a){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.bIt("click",function(p){return a.close(p)}),e.nrm(4,"ion-icon",2),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6),e.nI1(7,"translate"),e.k0s()()(),e.DNE(8,f,36,25,"ng-container",3)),2&r&&(e.R7$(6),e.JRh(e.bMT(7,2,"UpdateInfo")),e.R7$(2),e.Y8G("ngIf",null==a.response?null:a.response.Succeeded))},dependencies:[v.bT,t.Jm,t.QW,t.W9,t.M0,t.eU,t.iq,t.$w,t.uz,t.he,t.nf,t.nc,t.BC,t.ai,t.Gw,u.D9],styles:[".card-info[_ngcontent-%COMP%]{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}"]}),m})();var R=c(5312),F=c(1038),g=c(6539),C=c(8517),k=c(8833);function P(s,m){if(1&s&&(e.j41(0,"div",6)(1,"div",7)(2,"small",8),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.j41(5,"p",9)(6,"b"),e.EFF(7),e.nI1(8,"translate"),e.k0s()()(),e.j41(9,"div",7)(10,"small",8),e.EFF(11),e.nI1(12,"translate"),e.k0s(),e.j41(13,"p",9)(14,"b"),e.EFF(15),e.nI1(16,"translate"),e.k0s()()(),e.j41(17,"div",7)(18,"small",8),e.EFF(19),e.nI1(20,"translate"),e.k0s(),e.j41(21,"p",9)(22,"b"),e.EFF(23),e.nI1(24,"translate"),e.k0s()()(),e.j41(25,"div",7)(26,"small",8),e.EFF(27),e.nI1(28,"translate"),e.k0s(),e.j41(29,"p",9)(30,"b"),e.EFF(31),e.nI1(32,"translate"),e.k0s()()()()),2&s){const i=e.XpG();e.R7$(3),e.JRh(e.bMT(4,8,"FullName")),e.R7$(4),e.JRh(i.user.FullName||e.bMT(8,10,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(12,12,"Mobile")),e.R7$(4),e.JRh(i.APP_FUNC_FormatMobileNumber(i.user.PhoneNumber)||e.bMT(16,14,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(20,16,"Email")),e.R7$(4),e.JRh((null==i.user.Person?null:i.user.Person.Email)||e.bMT(24,18,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(28,20,"Address")),e.R7$(4),e.JRh(i.user.Address||e.bMT(32,22,"NotUpdate"))}}function A(s,m){if(1&s){const i=e.RV6();e.j41(0,"ion-footer")(1,"div",10)(2,"ion-button",11),e.bIt("click",function(a){e.eBV(i);const o=e.XpG();return e.Njj(o.presentModalUpdateUser(a))}),e.j41(3,"ion-label"),e.EFF(4),e.nI1(5,"translate"),e.k0s()()()()}2&s&&(e.R7$(4),e.JRh(e.bMT(5,1,"Update")))}const y=[{path:"",component:(()=>{var s;class m{constructor(r,a,o){this.modalController=r,this.toastController=a,this.loadingController=o,this.APP_ROUTE=k._,this.api_url=R.c.api_url,this.APP_FUNC_FormatMobileNumber=C.IV}ngOnInit(){var r=this;(0,l.A)(function*(){(yield(0,g.kU)())&&r.refreshData()})()}onIonRefresher(r){this.refreshData(()=>{r.target.complete()})}refreshData(r){var a=this;return(0,l.A)(function*(){(0,d.z)({loadingController:a.loadingController,callback:o=>{var p;a.response=o,null!=o&&o.Succeeded?a.user=null!==(p=o.Data)&&void 0!==p?p:{}:(0,n.cX)(a.toastController,{},o).then(_=>_.present()),r&&r()}})})()}presentModalUpdateUser(r){var a=this;return(0,l.A)(function*(){let o=yield a.modalController.create({component:h});o.onDidDismiss().then(p=>{"success"==p.role&&a.refreshData()}),o.present()})()}changeAvatar(r){var a=this;return(0,l.A)(function*(){(0,C.oG)({accept:"image/*"},function(){var o=(0,l.A)(function*(p){(0,F.v)({loadingController:a.loadingController,params:{file:p[0],subFolder:"avatar",fileType:"image"},callback:_=>{var E;0==(null==_?void 0:_.ReturnCode)&&(0,d.sh)({loadingController:a.loadingController,params:{UserId:null===(E=a.user)||void 0===E?void 0:E.UserId,Avatar:`${_.path}/${_.file.name}`},callback:M=>{null!=M&&M.Succeeded?a.refreshData():(0,n.cX)(a.toastController,{},M).then(G=>G.present())}})}})});return function(p){return o.apply(this,arguments)}}())})()}}return(s=m).\u0275fac=function(r){return new(r||s)(e.rXU(t.W3),e.rXU(t.K_),e.rXU(t.Xi))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-user-info"]],decls:12,vars:6,consts:[["mode","ios"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","card-info bg-white container py-3 min-h-100",4,"ngIf"],[4,"ngIf"],[1,"card-info","bg-white","container","py-3","min-h-100"],[1,"mb-3"],[1,"text-muted"],[1,"mt-1","mb-0"],[1,"container","py-3"],["expand","block","shape","round",3,"click"]],template:function(r,a){1&r&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(p){return a.onIonRefresher(p)}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.DNE(10,P,33,24,"div",4),e.k0s(),e.DNE(11,A,6,3,"ion-footer",5)),2&r&&(e.R7$(3),e.Y8G("defaultHref",a.APP_ROUTE.TABS_USER),e.R7$(2),e.JRh(e.bMT(6,4,"UserInfo")),e.R7$(5),e.Y8G("ngIf",a.user),e.R7$(),e.Y8G("ngIf",null==a.user?null:a.user.UserId))},dependencies:[v.bT,t.Jm,t.QW,t.W9,t.M0,t.eU,t.he,t.To,t.Ki,t.BC,t.ai,t.el,u.D9],styles:[".card-info[_ngcontent-%COMP%]{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}"]}),m})()}];let j=(()=>{var s;class m{}return(s=m).\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[I.iI.forChild(y),I.iI]}),m})();var $=c(3890);let N=(()=>{var s;class m{}return(s=m).\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[v.MD,U.YN,t.bv,j,$.x]}),m})()}}]);