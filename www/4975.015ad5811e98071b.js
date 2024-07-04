"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4975],{1038:(M,I,d)=>{d.d(I,{v:()=>b});var h=d(467),t=d(5972);const b=function(){var E=(0,h.A)(function*(s){s.params=s.params||{};var P=[];s.params.subFolder&&(s.params.subFolder=s.params.subFolder.replace(/[^a-zA-Z0-9\/]/gm,"").replace(/\/+/gm,"/").replace(/^\//,"").replace(/\/$/,""),s.params.subFolder&&P.push(s.params.subFolder)),s.params.isconvertvideo=!!s.params.isconvertvideo,s.params.isconvertpdf2image=!!s.params.isconvertpdf2image,s.params.isconvertoffice2image=!!s.params.isconvertoffice2image,s.params.isresizeimage=!!s.params.isresizeimage;const l=new FormData;l.append("path",P.join("/")),l.append("types",s.params.fileType||null),l.append("file",s.params.file||null),l.append("base64",s.params.base64||!1),l.append("isconvertvideo",s.params.isconvertvideo),l.append("isconvertpdf2image",s.params.isconvertpdf2image),l.append("isconvertoffice2image",s.params.isconvertoffice2image),l.append("isresizeimage",s.params.isresizeimage),(0,t.ZD)({url:"files",formData:l,success:m=>{"function"==typeof s.callback&&s.callback(m||null)},error:m=>{"function"==typeof s.callback&&s.callback(),console.error(s,m)},loading:s.loading})});return function(P){return E.apply(this,arguments)}}()},9946:(M,I,d)=>{d.d(I,{ks:()=>E,sh:()=>s,z:()=>b});var h=d(467),t=d(5972);const b=function(){var P=(0,h.A)(function*(l){l.params=l.params||{},(0,t.hm)({url:"api/User/get-user",params:{},success:m=>{"function"==typeof l.callback&&l.callback(m.data||null)},error:m=>{var a;"function"==typeof l.callback&&l.callback(null==m||null===(a=m.response)||void 0===a?void 0:a.data),console.error(m)},loading:l.loading})});return function(m){return P.apply(this,arguments)}}(),E=function(){var P=(0,h.A)(function*(l){var m,a,_,g,u,f;l.params=l.params||{},(0,t.IH)({url:"api/User/update-user",params:{UserId:null!==(m=l.params.UserId)&&void 0!==m?m:null,FullName:null!==(a=l.params.FullName)&&void 0!==a?a:null,Address:null!==(_=l.params.Address)&&void 0!==_?_:null,Gender:null!==(g=l.params.Gender)&&void 0!==g?g:null,Birthday:null!==(u=l.params.Birthday)&&void 0!==u?u:null,PersonEmail:null!==(f=l.params.Email)&&void 0!==f?f:null},success:C=>{"function"==typeof l.callback&&l.callback(C.data||null)},error:C=>{var R;"function"==typeof l.callback&&l.callback(null==C||null===(R=C.response)||void 0===R?void 0:R.data),console.error(C)},loading:l.loading})});return function(m){return P.apply(this,arguments)}}(),s=function(){var P=(0,h.A)(function*(l){var m,a;l.params=l.params||{},(0,t.IH)({url:"api/User/update-avatar",params:{UserId:null!==(m=l.params.UserId)&&void 0!==m?m:null,Avatar:null!==(a=l.params.Avatar)&&void 0!==a?a:null},success:_=>{"function"==typeof l.callback&&l.callback(_.data||null)},error:_=>{var g;"function"==typeof l.callback&&l.callback(null==_||null===(g=_.response)||void 0===g?void 0:g.data),console.error(_)},loading:l.loading})});return function(m){return P.apply(this,arguments)}}()},6171:(M,I,d)=>{d.d(I,{A:()=>m});var h=d(4486),t=d(4438),b=d(7896),E=d(177),s=d(9362),P=d(4842);function l(a,_){if(1&a){const g=t.RV6();t.qex(0),t.j41(1,"div")(2,"image-cropper",6),t.bIt("imageCropped",function(f){t.eBV(g);const C=t.XpG();return t.Njj(C.imageCropped(f))})("imageLoaded",function(f){t.eBV(g);const C=t.XpG();return t.Njj(C.imageLoaded(f))})("cropperReady",function(){t.eBV(g);const f=t.XpG();return t.Njj(f.cropperReady())})("loadImageFailed",function(){t.eBV(g);const f=t.XpG();return t.Njj(f.loadImageFailed())}),t.k0s()(),t.bVm()}if(2&a){const g=t.XpG();t.R7$(2),t.Y8G("imageFile",g.file)("maintainAspectRatio",!0)("aspectRatio",1)("format",g.croppedImageFormat)}}let m=(()=>{var a;class _{constructor(u){this.modalController=u,this.croppedImageFormat="png"}ngOnInit(){}close(){this.modalController.dismiss()}submit(){this.croppedImage?(0,h.h)(this.croppedImage,this.croppedImageFormat,u=>{u?this.modalController.dismiss(u,"submit"):this.close()}):this.close()}imageCropped(u){var f;this.croppedImage=null!==(f=u.objectUrl)&&void 0!==f?f:void 0}imageLoaded(u){}cropperReady(){}loadImageFailed(){}}return(a=_).\u0275fac=function(u){return new(u||a)(t.rXU(b.W3))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-modal-photo-cropper"]],inputs:{file:"file"},decls:15,vars:7,consts:[[1,"h-100","d-flex","align-items-center","justify-content-center"],[4,"ngIf"],[1,"container","px-2","py-3","d-flex","align-items-stretch","justify-content-around"],[1,"flex-grow-1","mx-1"],["color","medium","shape","round","fill","outline","expand","block",3,"click"],["color","primary","shape","round","expand","block",3,"click"],[3,"imageCropped","imageLoaded","cropperReady","loadImageFailed","imageFile","maintainAspectRatio","aspectRatio","format"]],template:function(u,f){1&u&&(t.j41(0,"ion-content")(1,"div",0),t.DNE(2,l,3,4,"ng-container",1),t.k0s()(),t.j41(3,"ion-footer")(4,"div",2)(5,"div",3)(6,"ion-button",4),t.bIt("click",function(){return f.close()}),t.j41(7,"ion-label"),t.EFF(8),t.nI1(9,"translate"),t.k0s()()(),t.j41(10,"div",3)(11,"ion-button",5),t.bIt("click",function(){return f.submit()}),t.j41(12,"ion-label"),t.EFF(13),t.nI1(14,"translate"),t.k0s()()()()()),2&u&&(t.R7$(2),t.Y8G("ngIf",f.file),t.R7$(6),t.JRh(t.bMT(9,3,"Cancel")),t.R7$(5),t.JRh(t.bMT(14,5,"Complete")))},dependencies:[E.bT,b.Jm,b.W9,b.M0,b.he,s._D,P.D9]}),_})()},4486:(M,I,d)=>{d.d(I,{$:()=>O,h:()=>A});var h=d(467),t=d(5083),b=function(n){return n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS",n}(b||{}),E=function(n){return n.Rear="REAR",n.Front="FRONT",n}(E||{}),s=function(n){return n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl",n}(s||{});class P extends t.E_{getPhoto(e){var o=this;return(0,h.A)(function*(){return new Promise(function(){var r=(0,h.A)(function*(i,c){if(e.webUseInput||e.source===b.Photos)o.fileInputExperience(e,i,c);else if(e.source===b.Prompt){let p=document.querySelector("pwa-action-sheet");p||(p=document.createElement("pwa-action-sheet"),document.body.appendChild(p)),p.header=e.promptLabelHeader||"Photo",p.cancelable=!1,p.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],p.addEventListener("onSelection",function(){var v=(0,h.A)(function*(y){0===y.detail?o.fileInputExperience(e,i,c):o.cameraExperience(e,i,c)});return function(y){return v.apply(this,arguments)}}())}else o.cameraExperience(e,i,c)});return function(i,c){return r.apply(this,arguments)}}())})()}pickImages(e){var o=this;return(0,h.A)(function*(){return new Promise(function(){var r=(0,h.A)(function*(i,c){o.multipleFileInputExperience(i,c)});return function(i,c){return r.apply(this,arguments)}}())})()}cameraExperience(e,o,r){var i=this;return(0,h.A)(function*(){if(customElements.get("pwa-camera-modal")){const c=document.createElement("pwa-camera-modal");c.facingMode=e.direction===E.Front?"user":"environment",document.body.appendChild(c);try{yield c.componentOnReady(),c.addEventListener("onPhoto",function(){var p=(0,h.A)(function*(v){const y=v.detail;null===y?r(new t.I9("User cancelled photos app")):y instanceof Error?r(y):o(yield i._getCameraPhoto(y,e)),c.dismiss(),document.body.removeChild(c)});return function(v){return p.apply(this,arguments)}}()),c.present()}catch{i.fileInputExperience(e,o,r)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),i.fileInputExperience(e,o,r)})()}fileInputExperience(e,o,r){let i=document.querySelector("#_capacitor-camera-input");const c=()=>{var p;null===(p=i.parentNode)||void 0===p||p.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input",i.type="file",i.hidden=!0,document.body.appendChild(i),i.addEventListener("change",p=>{const v=i.files[0];let y="jpeg";if("image/png"===v.type?y="png":"image/gif"===v.type&&(y="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const U=new FileReader;U.addEventListener("load",()=>{if("dataUrl"===e.resultType)o({dataUrl:U.result,format:y});else if("base64"===e.resultType){const j=U.result.split(",")[1];o({base64String:j,format:y})}c()}),U.readAsDataURL(v)}else o({webPath:URL.createObjectURL(v),format:y}),c()}),i.addEventListener("cancel",p=>{r(new t.I9("User cancelled photos app")),c()})),i.accept="image/*",i.capture=!0,e.source===b.Photos||e.source===b.Prompt?i.removeAttribute("capture"):e.direction===E.Front?i.capture="user":e.direction===E.Rear&&(i.capture="environment"),i.click()}multipleFileInputExperience(e,o){let r=document.querySelector("#_capacitor-camera-input-multiple");const i=()=>{var c;null===(c=r.parentNode)||void 0===c||c.removeChild(r)};r||(r=document.createElement("input"),r.id="_capacitor-camera-input-multiple",r.type="file",r.hidden=!0,r.multiple=!0,document.body.appendChild(r),r.addEventListener("change",c=>{const p=[];for(let v=0;v<r.files.length;v++){const y=r.files[v];let U="jpeg";"image/png"===y.type?U="png":"image/gif"===y.type&&(U="gif"),p.push({webPath:URL.createObjectURL(y),format:U})}e({photos:p}),i()}),r.addEventListener("cancel",c=>{o(new t.I9("User cancelled photos app")),i()})),r.accept="image/*",r.click()}_getCameraPhoto(e,o){return new Promise((r,i)=>{const c=new FileReader,p=e.type.split("/")[1];"uri"===o.resultType?r({webPath:URL.createObjectURL(e),format:p,saved:!1}):(c.readAsDataURL(e),c.onloadend=()=>{const v=c.result;r("dataUrl"===o.resultType?{dataUrl:v,format:p,saved:!1}:{base64String:v.split(",")[1],format:p,saved:!1})},c.onerror=v=>{i(v)})})}checkPermissions(){var e=this;return(0,h.A)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw e.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var e=this;return(0,h.A)(function*(){throw e.unimplemented("Not implemented on web.")})()}pickLimitedLibraryPhotos(){var e=this;return(0,h.A)(function*(){throw e.unavailable("Not implemented on web.")})()}getLimitedLibraryPhotos(){var e=this;return(0,h.A)(function*(){throw e.unavailable("Not implemented on web.")})()}}new P;const m=(0,t.F3)("Camera",{web:()=>new P});var a=d(4438),_=d(7896),g=d(177),u=d(4842);const f=()=>["ios","android"],C=()=>["web","ios","android"];function R(n,e){if(1&n){const o=a.RV6();a.j41(0,"ion-item",3),a.bIt("click",function(){a.eBV(o);const i=a.XpG();return a.Njj(i.submit("camera"))}),a.nrm(1,"ion-icon",4),a.j41(2,"ion-label"),a.EFF(3),a.nI1(4,"translate"),a.k0s()()}2&n&&(a.R7$(3),a.JRh(a.bMT(4,1,"TakePhoto")))}function F(n,e){if(1&n){const o=a.RV6();a.j41(0,"ion-item",3),a.bIt("click",function(){a.eBV(o);const i=a.XpG();return a.Njj(i.submit("library"))}),a.nrm(1,"ion-icon",5),a.j41(2,"ion-label"),a.EFF(3),a.nI1(4,"translate"),a.k0s()()}2&n&&(a.R7$(3),a.JRh(a.bMT(4,1,"ChooseFromLibrary")))}let x=(()=>{var n;class e{constructor(r){this.modalController=r,this.platform=t.Ii.getPlatform()}ngOnInit(){}submit(r){this.modalController.dismiss(r,"submit")}}return(n=e).\u0275fac=function(r){return new(r||n)(a.rXU(_.W3))},n.\u0275cmp=a.VBU({type:n,selectors:[["app-modal-photo"]],decls:4,vars:4,consts:[[1,"container"],["lines","none",1,"py-3"],["button","",3,"click",4,"ngIf"],["button","",3,"click"],["slot","start","color","primary","name","camera-outline"],["slot","start","color","primary","name","images-outline"]],template:function(r,i){1&r&&(a.j41(0,"div",0)(1,"ion-list",1),a.DNE(2,R,5,3,"ion-item",2)(3,F,5,3,"ion-item",2),a.k0s()()),2&r&&(a.R7$(2),a.Y8G("ngIf",a.lJ4(2,f).includes(i.platform)),a.R7$(),a.Y8G("ngIf",a.lJ4(3,C).includes(i.platform)))},dependencies:[g.bT,_.iq,_.uz,_.he,_.nf,u.D9],styles:[".container[_ngcontent-%COMP%]{min-width:20rem;max-width:30rem}"]}),e})();var T=d(8344);const A=(n,e,o)=>{fetch(n).then(r=>r.arrayBuffer()).then(r=>{var i;let c=(null!==(i=n.match(/^data:([^;]+);/))&&void 0!==i?i:[])[1]||`image/${e}`;return new File([r],`${Math.round(999999999*Math.random())}.${c.split("/").pop()}`,{type:c})}).then(r=>{o(r)}).catch(r=>{o()})},O=function(){var n=(0,h.A)(function*(e,o){let r=yield e.modalController.create({component:x,cssClass:"ion-modal-auto ion-modal-bottom",backdropDismiss:!0,keyboardClose:!0});r.onDidDismiss().then(i=>{if("submit"==i.role)switch(i.data){case"camera":(n=>{m.checkPermissions().then(e=>{"granted"==e.camera?n.success():"denied"==e.camera?n.error("B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i \u1ee9ng d\u1ee5ng truy c\u1eadp ch\u1ee9c n\u0103ng n\xe0y, h\xe3y b\u1eadt l\u1ea1i n\xf3 trong ph\u1ea7n c\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng tr\xean thi\u1ebft b\u1ecb!"):("prompt"==e.camera||"prompt-with-rationale"==e.camera)&&m.requestPermissions().then(o=>{"granted"==o.camera?n.success():"denied"==o.camera&&n.error("B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i \u1ee9ng d\u1ee5ng truy c\u1eadp ch\u1ee9c n\u0103ng n\xe0y, h\xe3y b\u1eadt l\u1ea1i n\xf3 trong ph\u1ea7n c\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng tr\xean thi\u1ebft b\u1ecb!")}).catch(o=>{n.error("Something is wrong!")})}).catch(e=>{n.error("Something is wrong!")})})({success:()=>{(n=>{m.getPhoto({quality:100,source:b.Camera,resultType:s.DataUrl}).then(e=>{e.dataUrl&&A(e.dataUrl,e.format,o=>{o&&n([o])})}).catch(e=>{console.error("getPhoto catch",e)})})(o)},error:c=>{e.toastController&&(0,T.cX)(e.toastController,{color:"info",message:c}).then(p=>p.present())}});break;case"library":(n=>{m.checkPermissions().then(e=>{"granted"==e.photos?n.success():"denied"==e.photos?n.error("B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i \u1ee9ng d\u1ee5ng truy c\u1eadp ch\u1ee9c n\u0103ng n\xe0y, h\xe3y b\u1eadt l\u1ea1i n\xf3 trong ph\u1ea7n c\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng tr\xean thi\u1ebft b\u1ecb!"):("prompt"==e.photos||"prompt-with-rationale"==e.photos)&&m.requestPermissions().then(o=>{"granted"==o.photos?n.success():"denied"==o.photos&&n.error("B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i \u1ee9ng d\u1ee5ng truy c\u1eadp ch\u1ee9c n\u0103ng n\xe0y, h\xe3y b\u1eadt l\u1ea1i n\xf3 trong ph\u1ea7n c\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng tr\xean thi\u1ebft b\u1ecb!")}).catch(o=>{n.error("Something is wrong!")})}).catch(e=>{n.error("Something is wrong!")})})({success:()=>{(n=>{m.getPhoto({quality:100,source:b.Photos,resultType:s.DataUrl}).then(e=>{e.dataUrl&&A(e.dataUrl,e.format,o=>{o&&n([o])})}).catch(e=>{console.error("getPhoto catch",e)})})(o)},error:c=>{e.toastController&&(0,T.cX)(e.toastController,{color:"info",message:c}).then(p=>p.present())}})}}),r.present()});return function(o,r){return n.apply(this,arguments)}}()}}]);