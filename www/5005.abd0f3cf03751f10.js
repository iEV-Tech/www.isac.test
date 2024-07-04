"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5005],{6013:(R,p,r)=>{r.d(p,{Gi:()=>_,vi:()=>a,Nn:()=>v});var l=r(5083),_=function(n){return n.Aztec="AZTEC",n.Codabar="CODABAR",n.Code39="CODE_39",n.Code93="CODE_93",n.Code128="CODE_128",n.DataMatrix="DATA_MATRIX",n.Ean8="EAN_8",n.Ean13="EAN_13",n.Itf="ITF",n.Pdf417="PDF_417",n.QrCode="QR_CODE",n.UpcA="UPC_A",n.UpcE="UPC_E",n}(_||{}),v=function(n){return n.Front="FRONT",n.Back="BACK",n}(v||{});const a=(0,l.F3)("BarcodeScanner",{web:()=>r.e(870).then(r.bind(r,870)).then(n=>new n.BarcodeScannerWeb)})},6043:(R,p,r)=>{r.d(p,{V:()=>v,j:()=>d});var l=r(467),_=r(5972);const d=function(){var h=(0,l.A)(function*(a){a.params=a.params||{},(0,_.hm)({url:`api/ChargingConnector/get-byqr/${a.params.QrCode}`,success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var g;"function"==typeof a.callback&&a.callback(null==n||null===(g=n.response)||void 0===g?void 0:g.data),console.error(n)},loading:a.loading})});return function(n){return h.apply(this,arguments)}}(),v=function(){var h=(0,l.A)(function*(a){a.params=a.params||{},(0,_.hm)({url:`api/ChargingConnector/get-byid/${a.params.ChargeConnectorId}`,success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var g;"function"==typeof a.callback&&a.callback(null==n||null===(g=n.response)||void 0===g?void 0:g.data),console.error(n)},loading:a.loading})});return function(n){return h.apply(this,arguments)}}()},5005:(R,p,r)=>{r.d(p,{I:()=>U});var l=r(467),_=r(9417),d=r(6013),v=r(6043),h=r(8344),a=r(8833),n=r(4438),g=r(7625),s=r(7896),P=r(3656),D=r(177),M=r(4842);const A=["QrCodeRef"],I=["square"];function T(u,E){if(1&u){const m=n.RV6();n.j41(0,"div",20)(1,"ion-button",21),n.bIt("click",function(){n.eBV(m);const t=n.XpG();return n.Njj(t.toggleTorch())}),n.nrm(2,"ion-icon",22),n.j41(3,"ion-label"),n.EFF(4),n.nI1(5,"translate"),n.k0s()()()}2&u&&(n.R7$(4),n.JRh(n.bMT(5,1,"TurnOnFlash")))}function N(u,E){if(1&u){const m=n.RV6();n.j41(0,"div")(1,"ion-range",23),n.bIt("ionChange",function(t){n.eBV(m);const o=n.XpG();return n.Njj(o.setZoomRatio(t))}),n.k0s()()}if(2&u){const m=n.XpG();n.R7$(),n.Y8G("min",m.minZoomRatio)("max",m.maxZoomRatio)}}let U=(()=>{var u;class E{constructor(i,t,o,e,c,b,O){this.router=i,this.modalController=t,this.ngZone=o,this.platform=e,this.loadingController=c,this.toastController=b,this.animationController=O,this.formGroup=new _.J3({formats:new _.hs([]),lensFacing:new _.hs(d.Nn.Back),googleBarcodeScannerModuleInstallState:new _.hs(0),googleBarcodeScannerModuleInstallProgress:new _.hs(0)}),this.isTorchAvailable=!1,this.loadingController.create({message:""}).then(f=>this.loading=f)}ngOnInit(){d.vi.isSupported().then(i=>{i.supported&&d.vi.checkPermissions().then(t=>{"granted"==t.camera&&(this.listenerScan(),this.startScan())})})}ngAfterViewInit(){}ngOnDestroy(){this.stopScan()}closeModal(i){var t=this;return(0,l.A)(function*(){t.modalController.dismiss({barcode:i})})()}navigateByUrl(i){var t=this;return(0,l.A)(function*(){t.modalController.dismiss().then(o=>{t.router.navigateByUrl(i)})})()}setZoomRatio(i){i.detail.value&&d.vi.setZoomRatio({zoomRatio:parseInt(i.detail.value,10)})}toggleTorch(){return(0,l.A)(function*(){yield d.vi.toggleTorch()})()}startScan(){var i=this;return(0,l.A)(function*(){d.vi.startScan().then(()=>{var t;null===(t=document.querySelector("body"))||void 0===t||t.classList.add("barcode-scanning-active"),d.vi.isTorchAvailable().then(o=>{i.isTorchAvailable=o.available}),d.vi.getMinZoomRatio().then(o=>{i.minZoomRatio=o.zoomRatio}),d.vi.getMaxZoomRatio().then(o=>{i.maxZoomRatio=o.zoomRatio})}).catch(()=>{i.stopScan()})})()}stopScan(){return(0,l.A)(function*(){var i;null===(i=document.querySelector("body"))||void 0===i||i.classList.remove("barcode-scanning-active"),yield d.vi.removeAllListeners(),yield d.vi.stopScan()})()}listenerScan(){var i=this;return(0,l.A)(function*(){var t;const o=null===(t=i.squareElement)||void 0===t?void 0:t.nativeElement.getBoundingClientRect(),e=o?{left:o.left*window.devicePixelRatio,right:o.right*window.devicePixelRatio,top:o.top*window.devicePixelRatio,bottom:o.bottom*window.devicePixelRatio,width:o.width*window.devicePixelRatio,height:o.height*window.devicePixelRatio}:void 0,c=e?[[e.left,e.top],[e.left+e.width,e.top],[e.left+e.width,e.top+e.height],[e.left,e.top+e.height]]:void 0,b=yield d.vi.addListener("barcodeScanned",function(){var O=(0,l.A)(function*(f){i.ngZone.run(()=>{const C=f.barcode.cornerPoints;c&&C&&(c[0][0]>C[0][0]||c[0][1]>C[0][1]||c[1][0]<C[1][0]||c[1][1]>C[1][1]||c[2][0]<C[2][0]||c[2][1]<C[2][1]||c[3][0]>C[3][0]||c[3][1]<C[3][1])||(b.remove(),i.changeBarcodeScanner(f.barcode))})});return function(f){return O.apply(this,arguments)}}())})()}changeBarcodeScanner(i){var t=this;return(0,l.A)(function*(){let o=i.rawValue.match(/charger-connect\/([0-9]{7})/);o&&(t.QrCode=o[1]||void 0),t.QrCode?t.submitQrCode():setTimeout(()=>{t.listenerScan()},1e3)})()}changeQrCode(i){var t=this;return(0,l.A)(function*(){t.QrCode=i.detail.value})()}keyupQrCode(i){var t=this;return(0,l.A)(function*(){var o,e;13!=i.keyCode?null===(o=t.QrCodeRef)||void 0===o||o.setValue(null===(e=i.target)||void 0===e?void 0:e.value):t.submitQrCode()})()}submitQrCode(i){var t=this;return(0,l.A)(function*(){t.QrCode&&(0,v.j)({loading:o=>{var e,c;o?null===(e=t.loading)||void 0===e||e.present():null===(c=t.loading)||void 0===c||c.dismiss()},params:{QrCode:t.QrCode},callback:o=>{var e;t.response=o,null!=o&&o.Succeeded?(t.chargingConnector=o.Data,t.navigateByUrl(a._.CHARGING_CONNECTOR_DETAIL.replace(":qrcode",null!==(e=t.QrCode)&&void 0!==e?e:""))):((0,h.Ip)(t.modalController,t.animationController,{message:{Title:"Error",Description:null==o?void 0:o.Message,Img:"assets/icon/ion-img/charging-error.svg"}}),setTimeout(()=>{t.listenerScan()},3e3))}})})()}}return(u=E).\u0275fac=function(i){return new(i||u)(n.rXU(g.Ix),n.rXU(s.W3),n.rXU(n.SKi),n.rXU(P.OD),n.rXU(s.Xi),n.rXU(s.K_),n.rXU(s.Hx))},u.\u0275cmp=n.VBU({type:u,selectors:[["app-modal-barcode-scanning"]],viewQuery:function(i,t){if(1&i&&(n.GBs(A,5),n.GBs(I,5)),2&i){let o;n.mGM(o=n.lsd())&&(t.QrCodeRef=o.first),n.mGM(o=n.lsd())&&(t.squareElement=o.first)}},decls:32,vars:12,consts:[["square",""],["QrCodeInpRef",""],["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],["scroll-x","false","scroll-y","false"],[1,"container","h-100","p-0"],[1,"square"],[1,"zoom-ratio-wrapper"],["class","text-center mb-2",4,"ngIf"],[4,"ngIf"],[1,"d-flex","align-items-center"],[1,"col","border","border-top"],[1,"col-auto","px-3"],[1,"px-3","pb-4","pt-3","container-connect"],[1,"flex-grow-1","pr-3"],["lines","none"],["type","number","inputmode","decimal",3,"ionInput","keyup","placeholder"],[3,"click","color"],["src","../../../assets/icon/ion-icon/arrow-right.svg"],[1,"text-center","mb-2"],["color","light","shape","round","fill","outline",3,"click"],["slot","start","name","flash"],[3,"ionChange","min","max"]],template:function(i,t){if(1&i){const o=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",2)(3,"ion-button",3),n.bIt("click",function(){return n.eBV(o),n.Njj(t.closeModal())}),n.nrm(4,"ion-icon",4),n.k0s()(),n.j41(5,"ion-title"),n.EFF(6),n.nI1(7,"translate"),n.k0s()()(),n.j41(8,"ion-content",5)(9,"div",6),n.nrm(10,"div",7,0),n.j41(12,"div",8),n.DNE(13,T,6,3,"div",9)(14,N,2,2,"div",10),n.k0s()()(),n.j41(15,"ion-footer")(16,"div",11),n.nrm(17,"div",12),n.j41(18,"div",13),n.EFF(19),n.nI1(20,"translate"),n.k0s(),n.nrm(21,"div",12),n.k0s(),n.j41(22,"div",14)(23,"div",11)(24,"div",15)(25,"ion-item",16)(26,"ion-input",17,1),n.nI1(28,"translate"),n.bIt("ionInput",function(c){return n.eBV(o),n.Njj(t.changeQrCode(c))})("keyup",function(c){return n.eBV(o),n.Njj(t.keyupQrCode(c))}),n.k0s()()(),n.j41(29,"div")(30,"ion-button",18),n.bIt("click",function(c){return n.eBV(o),n.Njj(t.submitQrCode(c))}),n.nrm(31,"ion-icon",19),n.k0s()()()()()}2&i&&(n.R7$(6),n.JRh(n.bMT(7,6,"ScanQR")),n.R7$(7),n.Y8G("ngIf",!t.isTorchAvailable),n.R7$(),n.Y8G("ngIf",void 0!==t.minZoomRatio&&void 0!==t.maxZoomRatio),n.R7$(5),n.JRh(n.bMT(20,8,"Or")),n.R7$(7),n.FS9("placeholder",n.bMT(28,10,"EnterConnectorCode")),n.R7$(4),n.Y8G("color",t.QrCode?"primary":"medium"))},dependencies:[D.bT,s.Jm,s.QW,s.W9,s.M0,s.eU,s.iq,s.$w,s.uz,s.he,s.Ob,s.BC,s.ai,s.su,M.D9],styles:['ion-content[_ngcontent-%COMP%]{--background: transparent;position:relative}.square[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:1rem;width:13rem;height:13rem;border:.25rem solid var(--ion-color-gray);box-shadow:0 0 0 1000px #00000040}.zoom-ratio-wrapper[_ngcontent-%COMP%]{position:absolute;z-index:2;left:50%;bottom:2rem;transform:translate(-50%);width:100%;padding:0 3.5rem}.zoom-ratio-wrapper[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0;min-height:2.5rem;min-width:2.5rem;--border-radius: 1.5rem;--padding-top: 0;--padding-start: 1rem;--padding-end: 1rem;--padding-bottom: 0;--background: rgba(var(--ion-color-light-rgb), .4)}.zoom-ratio-wrapper[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:400}.container[_ngcontent-%COMP%]{position:relative}.container[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;border:1rem solid var(--ion-background-color-primary);border-radius:0}.container[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;border:1rem solid var(--ion-background-color-primary);border-radius:2rem}.container-connect[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 4rem;--border-radius: .5rem;--background: var(--ion-color-light)}.container-connect[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0;min-height:4rem;min-width:4rem;--border-radius: .5rem;--padding-top: 0;--padding-start: 0;--padding-end: 0;--padding-bottom: 0}.container-connect[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}']}),E})()}}]);