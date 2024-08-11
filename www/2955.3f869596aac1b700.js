"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2955],{6043:(D,F,l)=>{l.d(F,{V:()=>v,j:()=>g});var P=l(467),b=l(5972);const g=function(){var C=(0,P.A)(function*(c){c.params=c.params||{},(0,b.hm)({url:`api/ChargingConnector/get-byqr/${c.params.QrCode}`,success:u=>{"function"==typeof c.callback&&c.callback(u.data||null)},error:u=>{var p;"function"==typeof c.callback&&c.callback(null==u||null===(p=u.response)||void 0===p?void 0:p.data),console.error(u)},loading:c.loading,loadingController:c.loadingController})});return function(u){return C.apply(this,arguments)}}(),v=function(){var C=(0,P.A)(function*(c){c.params=c.params||{},(0,b.hm)({url:`api/ChargingConnector/get-byid/${c.params.ChargeConnectorId}`,success:u=>{"function"==typeof c.callback&&c.callback(u.data||null)},error:u=>{var p;"function"==typeof c.callback&&c.callback(null==u||null===(p=u.response)||void 0===p?void 0:p.data),console.error(u)},loading:c.loading,loadingController:c.loadingController})});return function(u){return C.apply(this,arguments)}}()},3034:(D,F,l)=>{l.d(F,{g:()=>g});var P=l(467),b=l(5972);const g=function(){var C=(0,P.A)(function*(c){var u,p;c.params=c.params||{},(0,b.hm)({url:"api/PaymentMethod/get-paymentmethods",params:{PageNumber:null!==(u=c.params.PageNumber)&&void 0!==u?u:1,PageSize:null!==(p=c.params.PageSize)&&void 0!==p?p:10},success:f=>{"function"==typeof c.callback&&c.callback(f.data||null)},error:f=>{var s;"function"==typeof c.callback&&c.callback(null==f||null===(s=f.response)||void 0===s?void 0:s.data),console.error(f)},loading:c.loading,loadingController:c.loadingController})});return function(u){return C.apply(this,arguments)}}()},2955:(D,F,l)=>{l.r(F),l.d(F,{ChargingConnectorDetailPageModule:()=>mn});var P=l(177),b=l(9417),g=l(9465),v=l(7625),C=l(467),c=l(3034),u=l(6539),p=l(8517),f=l(8833),s=l(8650),M=l(9061),R=l(574),O=l(6043),j=l(3588),I=l(8605),n=l(4438),y=l(3656),T=l(4842);const G=["modalCustomChargingPackage"],V=["modalCustomChargingPackageConfirm"];function U(r,d){if(1&r&&n.eu8(0,8),2&r){n.XpG();const o=n.sdS(4);n.Y8G("ngTemplateOutlet",o)}}function $(r,d){if(1&r&&n.eu8(0,8),2&r){n.XpG();const o=n.sdS(6);n.Y8G("ngTemplateOutlet",o)}}function X(r,d){if(1&r){const o=n.RV6();n.j41(0,"ion-button",33),n.bIt("click",function(){n.eBV(o),n.XpG(2);const e=n.sdS(42);return n.Njj(null==e?null:e.present())}),n.j41(1,"ion-label"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.nrm(4,"ion-icon",34),n.k0s()}2&r&&(n.R7$(2),n.JRh(n.bMT(3,1,"CustomChargingPackage")))}function B(r,d){if(1&r&&(n.qex(0),n.j41(1,"div")(2,"small"),n.EFF(3),n.k0s()(),n.j41(4,"div",39)(5,"b")(6,"b",40),n.EFF(7),n.k0s()(),n.j41(8,"span"),n.EFF(9),n.k0s()(),n.bVm()),2&r){let o;const t=n.XpG().$implicit,e=n.XpG(3);n.R7$(3),n.JRh(t.ChargePackName),n.R7$(4),n.Lme("",t.PowerValue,"",t.Unit,""),n.R7$(2),n.SpI(" / ",e.APP_FUNC_FormatMoney(null!==(o=t.AftertaxPrice)&&void 0!==o?o:0),"\u0111")}}function L(r,d){if(1&r&&(n.qex(0),n.j41(1,"div")(2,"small"),n.EFF(3),n.k0s()(),n.j41(4,"div",39)(5,"b")(6,"b",40),n.EFF(7),n.k0s()(),n.j41(8,"span"),n.EFF(9),n.k0s()(),n.bVm()),2&r){let o;const t=n.XpG().$implicit,e=n.XpG(3);n.R7$(3),n.JRh(t.ChargePackName),n.R7$(4),n.SpI("",e.APP_FUNC_FormatMoney(null!==(o=t.AftertaxPrice)&&void 0!==o?o:0),"\u0111"),n.R7$(2),n.Lme(" / ",t.PowerValue,"",t.Unit,"")}}function J(r,d){if(1&r&&(n.qex(0),n.j41(1,"div",35)(2,"ion-item",36)(3,"ion-radio",37)(4,"div",14)(5,"div"),n.nrm(6,"ion-img",38),n.k0s(),n.j41(7,"div",16),n.DNE(8,B,10,4,"ng-container",24)(9,L,10,4,"ng-container",24),n.k0s()()()()(),n.bVm()),2&r){const o=d.$implicit;n.R7$(3),n.Y8G("value",o.ChargePackageId),n.R7$(5),n.Y8G("ngIf",o.IsPackByPower),n.R7$(),n.Y8G("ngIf",!o.IsPackByPower)}}function Y(r,d){if(1&r){const o=n.RV6();n.qex(0),n.j41(1,"div",26)(2,"div",27)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.DNE(6,X,5,3,"ion-button",28),n.k0s(),n.j41(7,"div",29)(8,"div",30)(9,"ion-radio-group",31),n.bIt("ionChange",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.changeChargePackage(e))}),n.DNE(10,J,10,3,"ng-container",32),n.k0s()()()(),n.bVm()}if(2&r){const o=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,4,"ChargingPackage")),n.R7$(2),n.Y8G("ngIf",(null==o.chargingPackageRange?null:o.chargingPackageRange.MinPowerValue)&&(null==o.chargingPackageRange?null:o.chargingPackageRange.MaxPowerValue)),n.R7$(3),n.Y8G("value",o.ChargePackageId),n.R7$(),n.Y8G("ngForOf",o.chargingPackages)}}function z(r,d){if(1&r){const o=n.RV6();n.j41(0,"div",41)(1,"div",42)(2,"h5",43)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()()(),n.j41(6,"div")(7,"div",44)(8,"div",45)(9,"ion-item",46)(10,"ion-input",47),n.bIt("ionChange",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.changeCustomElectricValue(e))}),n.k0s()()(),n.j41(11,"div",48)(12,"small")(13,"b"),n.EFF(14,"kWh"),n.k0s()()()()(),n.j41(15,"div")(16,"ion-range",49,4),n.bIt("ionChange",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.changeCustomElectricValue(e))}),n.k0s(),n.j41(18,"div",50)(19,"small"),n.EFF(20),n.k0s(),n.j41(21,"small"),n.EFF(22),n.k0s()()(),n.j41(23,"div",51)(24,"ion-button",52),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.applyCustomElectric(e))}),n.j41(25,"ion-label"),n.EFF(26),n.nI1(27,"translate"),n.k0s()()()()}if(2&r){const o=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,14,"CustomKWhNumber")),n.R7$(6),n.Mz_("placeholder","",o.customElectricMin," kWh"),n.Y8G("ngModel",o.customElectricValue)("min",o.customElectricMin)("max",o.customElectricMax),n.R7$(6),n.Y8G("ngModel",o.customElectricValue)("min",o.customElectricMin)("max",o.customElectricMax)("step",o.customElectricStep)("pin",!0),n.R7$(4),n.SpI("",o.customElectricMin,"kWh"),n.R7$(2),n.SpI("",o.customElectricMax,"kWh"),n.R7$(4),n.JRh(n.bMT(27,16,"Apply"))}}function W(r,d){if(1&r){const o=n.RV6();n.j41(0,"div",41)(1,"div",42)(2,"h5",43)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()()(),n.j41(6,"div")(7,"div",53)(8,"div",54)(9,"span",55),n.EFF(10),n.k0s()(),n.j41(11,"div",56)(12,"ion-button",57),n.bIt("click",function(){n.eBV(o),n.XpG();const e=n.sdS(42),a=n.sdS(45);return null==a||a.dismiss(),n.Njj(null==e?null:e.present())}),n.j41(13,"ion-label"),n.EFF(14),n.nI1(15,"translate"),n.k0s()()()()(),n.j41(16,"div",30)(17,"div",58)(18,"span"),n.EFF(19),n.nI1(20,"translate"),n.k0s(),n.j41(21,"b",40),n.EFF(22),n.k0s()()(),n.j41(23,"div",51)(24,"ion-button",52),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.submitCustomPackage(e))}),n.j41(25,"ion-label"),n.EFF(26),n.nI1(27,"translate"),n.k0s()()()()}if(2&r){let o,t;const e=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,7,"ConfirmCustomChargingPackage")),n.R7$(6),n.Lme("",null!==(o=null==e.customChargingPackage?null:e.customChargingPackage.PowerValue)&&void 0!==o?o:0," ",null!==(o=null==e.customChargingPackage?null:e.customChargingPackage.Unit)&&void 0!==o?o:"kWh",""),n.R7$(4),n.JRh(n.bMT(15,9,"Edit")),n.R7$(5),n.SpI("",n.bMT(20,11,"IntoMoney"),":"),n.R7$(3),n.SpI("",e.APP_FUNC_FormatMoney(null!==(t=null==e.customChargingPackage?null:e.customChargingPackage.RealValue)&&void 0!==t?t:0),"\u0111"),n.R7$(4),n.JRh(n.bMT(27,13,"Pay"))}}function H(r,d){if(1&r){const o=n.RV6();n.qex(0),n.j41(1,"ion-button",62),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(3);return n.Njj(a.submitPackage(e))}),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()}2&r&&(n.R7$(3),n.JRh(n.bMT(4,1,"Pay")))}function K(r,d){1&r&&(n.qex(0),n.j41(1,"ion-button",63)(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()),2&r&&(n.R7$(3),n.JRh(n.bMT(4,1,"BeingUsed")))}function Q(r,d){1&r&&(n.qex(0),n.j41(1,"ion-button",64)(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()),2&r&&(n.R7$(3),n.JRh(n.bMT(4,1,"AlreadyBooked")))}function Z(r,d){1&r&&(n.qex(0),n.j41(1,"ion-button",65)(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()),2&r&&(n.R7$(3),n.JRh(n.bMT(4,1,"TemporarilyStoppedServing")))}function q(r,d){if(1&r&&(n.j41(0,"ion-footer")(1,"div",59),n.qex(2,5),n.DNE(3,H,5,3,"ng-container",60)(4,K,5,3,"ng-container",60)(5,Q,5,3,"ng-container",60)(6,Z,5,3,"ng-container",61),n.bVm(),n.k0s()()),2&r){const o=n.XpG(2);n.R7$(2),n.Y8G("ngSwitch",o.chargingConnector.VConnectorStatus),n.R7$(),n.Y8G("ngSwitchCase",o.v_connector_status.DangRanh),n.R7$(),n.Y8G("ngSwitchCase",o.v_connector_status.DangSac),n.R7$(),n.Y8G("ngSwitchCase",o.v_connector_status.DaDatLich)}}function nn(r,d){if(1&r){const o=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",9),n.nrm(3,"ion-back-button",10),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",11),n.bIt("ionRefresh",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.onIonRefresher(e))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.j41(10,"div",12)(11,"div",13)(12,"div",14)(13,"div")(14,"ion-thumbnail"),n.nrm(15,"img",15),n.k0s()(),n.j41(16,"div",16)(17,"h5",17),n.nrm(18,"ion-icon",18),n.j41(19,"span",19),n.EFF(20),n.k0s()(),n.j41(21,"div")(22,"small"),n.EFF(23),n.k0s()()()()(),n.j41(24,"div",20)(25,"div",21)(26,"b"),n.EFF(27),n.nI1(28,"translate"),n.k0s()(),n.j41(29,"div",22)(30,"div"),n.nrm(31,"ion-img",23),n.k0s(),n.j41(32,"div",16)(33,"div",17)(34,"b"),n.EFF(35),n.nI1(36,"translate"),n.k0s()(),n.j41(37,"div")(38,"small"),n.EFF(39),n.k0s()()()()(),n.DNE(40,Y,11,6,"ng-container",24),n.k0s(),n.j41(41,"ion-modal",25,2),n.DNE(43,z,28,18,"ng-template"),n.k0s(),n.j41(44,"ion-modal",25,3),n.DNE(46,W,28,15,"ng-template"),n.k0s()(),n.DNE(47,q,7,4,"ion-footer",24)}if(2&r){const o=n.XpG();n.R7$(3),n.Y8G("defaultHref",o.APP_ROUTE.TABS_DEFAULT),n.R7$(2),n.JRh(n.bMT(6,12,"ChooseChargingPackage")),n.R7$(10),n.Y8G("src",o.APP_FUNC_GetLocImage(o.chargingLocation,"assets/image/default/ev-station.png"),n.B4B),n.R7$(5),n.JRh(null==o.chargingLocation?null:o.chargingLocation.LocName),n.R7$(3),n.SpI("ID: ",null==o.chargingStation?null:o.chargingStation.StationCode,""),n.R7$(4),n.JRh(n.bMT(28,14,"Connector")),n.R7$(8),n.Lme("",n.bMT(36,16,"ConnectorNum")," ",null==o.chargingConnector?null:o.chargingConnector.ConnectorId,""),n.R7$(4),n.Lme("ID: ",null==o.chargingStation?null:o.chargingStation.StationCode,"",null==o.chargingConnector?null:o.chargingConnector.ConnectorId,""),n.R7$(),n.Y8G("ngIf",(null==o.chargingConnector?null:o.chargingConnector.VConnectorStatus)==o.v_connector_status.DangRanh),n.R7$(7),n.Y8G("ngIf",o.chargingConnector)}}function en(r,d){if(1&r&&(n.j41(0,"td")(1,"small"),n.EFF(2),n.k0s(),n.j41(3,"div")(4,"b"),n.EFF(5),n.k0s(),n.j41(6,"small"),n.EFF(7),n.k0s()()()),2&r){let o;const t=n.XpG(3);n.R7$(2),n.JRh(t.chargingPackage.ChargePackName),n.R7$(3),n.Lme("",t.chargingPackage.PowerValue,"",t.chargingPackage.Unit,""),n.R7$(2),n.SpI(" / ",t.APP_FUNC_FormatMoney(null!==(o=t.chargingPackage.AftertaxPrice)&&void 0!==o?o:0),"\u0111")}}function tn(r,d){if(1&r&&(n.j41(0,"td")(1,"small"),n.EFF(2),n.k0s(),n.j41(3,"div")(4,"b"),n.EFF(5),n.k0s(),n.j41(6,"small"),n.EFF(7),n.k0s()()()),2&r){let o;const t=n.XpG(3);n.R7$(2),n.JRh(t.chargingPackage.ChargePackName),n.R7$(3),n.SpI("",t.APP_FUNC_FormatMoney(null!==(o=t.chargingPackage.AftertaxPrice)&&void 0!==o?o:0),"\u0111"),n.R7$(2),n.Lme(" / ",t.chargingPackage.PowerValue,"",t.chargingPackage.Unit,"")}}function on(r,d){if(1&r&&(n.j41(0,"tr")(1,"td",55),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td"),n.EFF(5),n.k0s()()),2&r){const o=n.XpG(3);n.R7$(2),n.JRh(n.bMT(3,2,"Discount")),n.R7$(3),n.SpI("-",o.APP_FUNC_FormatMoney(o.chargingPackage.PromoteValue),"\u0111")}}function an(r,d){if(1&r&&(n.j41(0,"tr",82)(1,"td",55),n.EFF(2,"VAT"),n.k0s(),n.j41(3,"td"),n.EFF(4),n.k0s()()),2&r){const o=n.XpG(3);n.R7$(4),n.SpI("+",o.chargingPackage.TaxPercent,"%")}}function rn(r,d){if(1&r&&(n.j41(0,"div",68)(1,"table",80)(2,"tr")(3,"td",55),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.DNE(6,en,8,4,"td",24)(7,tn,8,4,"td",24),n.k0s(),n.DNE(8,on,6,4,"tr",24)(9,an,5,1,"tr",81),n.j41(10,"tr",82)(11,"td")(12,"b"),n.EFF(13),n.nI1(14,"translate"),n.k0s(),n.nrm(15,"br"),n.j41(16,"small",55),n.EFF(17),n.nI1(18,"translate"),n.k0s()(),n.j41(19,"td",40)(20,"strong"),n.EFF(21),n.k0s()()()()()),2&r){let o;const t=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,8,"ChargingPackage")),n.R7$(2),n.Y8G("ngIf",t.chargingPackage.IsPackByPower),n.R7$(),n.Y8G("ngIf",!t.chargingPackage.IsPackByPower),n.R7$(),n.Y8G("ngIf",t.chargingPackage.PromoteValue),n.R7$(),n.Y8G("ngIf",t.chargingPackage.TaxPercent),n.R7$(4),n.JRh(n.bMT(14,10,"Total")),n.R7$(4),n.JRh(n.bMT(18,12,"IncludedVAT")),n.R7$(4),n.SpI("",t.APP_FUNC_FormatMoney(null!==(o=t.chargingPackage.RealValue)&&void 0!==o?o:0),"\u0111")}}function cn(r,d){if(1&r){const o=n.RV6();n.j41(0,"div")(1,"ion-chip",83)(2,"ion-label"),n.EFF(3),n.k0s(),n.j41(4,"ion-icon",84),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.removePromoteCode(e))}),n.k0s()()()}if(2&r){const o=n.XpG(2);n.R7$(3),n.JRh(o.PromoteCodeApply)}}function ln(r,d){if(1&r&&(n.qex(0),n.j41(1,"div",85)(2,"ion-item",36)(3,"ion-radio",86)(4,"div",14)(5,"div")(6,"ion-thumbnail"),n.nrm(7,"img",87),n.k0s()(),n.j41(8,"div",16)(9,"b"),n.EFF(10),n.k0s()()()()()(),n.bVm()),2&r){let o;const t=d.$implicit,e=n.XpG(2);n.R7$(),n.HbH(t.PaymentMethodId==e.PaymentMethodId?"border-primary":"border-gray"),n.R7$(2),n.Y8G("value",t.PaymentMethodId)("disabled",!t.IsSupport),n.R7$(4),n.Mz_("src","../../../assets/icon/payment/",t.PmCode,".jpeg",n.B4B),n.R7$(3),n.JRh(null!==(o=null!==(o=t.PmDesc)&&void 0!==o?o:t.PmName)&&void 0!==o?o:t.PmCode)}}function gn(r,d){if(1&r){const o=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",9)(3,"ion-button",66),n.bIt("click",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.backPackage(e))}),n.nrm(4,"ion-icon",67),n.k0s()(),n.j41(5,"ion-title"),n.EFF(6),n.nI1(7,"translate"),n.k0s()()(),n.j41(8,"ion-content")(9,"div",59)(10,"div",68)(11,"div",14)(12,"div")(13,"ion-thumbnail"),n.nrm(14,"img",15),n.k0s()(),n.j41(15,"div",16)(16,"h5",69),n.nrm(17,"ion-icon",70),n.j41(18,"span",19),n.EFF(19),n.k0s()(),n.j41(20,"div")(21,"small"),n.EFF(22),n.nI1(23,"translate"),n.j41(24,"b"),n.EFF(25),n.k0s()()(),n.j41(26,"div")(27,"small"),n.EFF(28),n.nI1(29,"translate"),n.j41(30,"b"),n.EFF(31),n.k0s()()()()()(),n.nrm(32,"hr",71),n.DNE(33,rn,22,14,"div",72),n.j41(34,"div",73)(35,"div",21)(36,"b"),n.EFF(37),n.nI1(38,"translate"),n.k0s()(),n.j41(39,"div")(40,"div",74)(41,"input",75),n.nI1(42,"translate"),n.bIt("change",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.changePromoteCode(e))})("keyup",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.keyupPromoteCode(e))}),n.k0s(),n.j41(43,"div",76)(44,"button",77),n.bIt("click",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.submitPromoteCode(e))}),n.EFF(45),n.nI1(46,"translate"),n.k0s()()()(),n.DNE(47,cn,5,1,"div",24),n.k0s(),n.j41(48,"div",78)(49,"div",21)(50,"b"),n.EFF(51),n.nI1(52,"translate"),n.k0s()(),n.j41(53,"div",79)(54,"ion-radio-group",31),n.bIt("ionChange",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.changePaymentMethod(e))}),n.DNE(55,ln,11,7,"ng-container",32),n.k0s()()()()(),n.j41(56,"ion-footer")(57,"div",59)(58,"ion-button",62),n.bIt("click",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.goPayment(e))}),n.j41(59,"ion-label"),n.EFF(60),n.nI1(61,"translate"),n.k0s()()()()}if(2&r){let o,t;const e=n.XpG();n.R7$(6),n.JRh(n.bMT(7,25,"BillingInformation")),n.R7$(8),n.Y8G("src",e.APP_FUNC_GetLocImage(e.chargingLocation,"assets/image/default/ev-station.png"),n.B4B),n.R7$(5),n.JRh(null==e.chargingLocation?null:e.chargingLocation.LocName),n.R7$(3),n.Lme("",n.bMT(23,27,"ChargingStation")," ",null!=e.chargingStation&&e.chargingStation.IsAC?"AC":"DC",""),n.R7$(2),n.ZvI("ml-3 text-",e.APP_FUNC_GetColor_VStationStatus(null==e.chargingStation?null:e.chargingStation.VStationStatus),""),n.R7$(),n.JRh(null!==(o=null==e.chargingStation?null:e.chargingStation.VStationStatusName)&&void 0!==o?o:"[TrangThaiTruSac]"),n.R7$(3),n.Lme("",n.bMT(29,29,"ChargingConnector")," ",null==e.chargingConnector?null:e.chargingConnector.ConnectorType,""),n.R7$(2),n.ZvI("ml-3 text-",e.APP_FUNC_GetColor_VConnectorStatus(null==e.chargingConnector?null:e.chargingConnector.VConnectorStatus),""),n.R7$(),n.JRh(null!==(t=null==e.chargingConnector?null:e.chargingConnector.VConnectorStatusName)&&void 0!==t?t:"[TrangThaiVoiSac]"),n.R7$(2),n.Y8G("ngIf",e.chargingPackage),n.R7$(4),n.JRh(n.bMT(38,31,"EnterPromotionalCode")),n.R7$(4),n.FS9("placeholder",n.bMT(42,33,"EnterPromotionalCode")),n.Y8G("ngModel",e.PromoteCode),n.R7$(4),n.JRh(n.bMT(46,35,"Apply")),n.R7$(2),n.Y8G("ngIf",e.PromoteCodeApply),n.R7$(4),n.JRh(n.bMT(52,37,"PaymentMethod")),n.R7$(3),n.Y8G("value",e.PaymentMethodId),n.R7$(),n.Y8G("ngForOf",e.paymentMethods),n.R7$(5),n.JRh(n.bMT(61,39,"Pay"))}}const dn=[{path:"",component:(()=>{var r;class d{get chargingStation(){var t;return null===(t=this.chargingConnector)||void 0===t?void 0:t.ChargingStation}get chargingLocation(){var t;return null===(t=this.chargingConnector)||void 0===t?void 0:t.ChargingLocation}constructor(t,e,a,i,m,h,k){var _;this.router=t,this.platform=e,this.modalController=i,this.loadingController=m,this.toastController=h,this.animationController=k,this.APP_ROUTE=f._,this.APP_FUNC_FormatMoney=p.xi,this.APP_FUNC_GetColor_VConnectorStatus=p.lB,this.APP_FUNC_GetColor_VStationStatus=p.ew,this.APP_FUNC_GetLocImage=p.Zn,this.v_connector_status=j.EF,this.chargingPackages=[],this.IsPackByPower=!0,this.customElectricValue=35,this.customElectricMin=1,this.customElectricMax=100,this.customElectricStep=1,this.paymentMethods=[],this.QrCode=null!==(_=a.snapshot.params.qrcode)&&void 0!==_?_:void 0}ngOnInit(){var t=this;this.IsOnInit=!0,(0,C.A)(function*(){(yield(0,u.kU)())&&t.refreshData()})()}ionViewDidEnter(){this.IsOnInit||this.router.navigateByUrl(f._.TABS_DEFAULT)}ionViewDidLeave(){this.IsOnInit=!1}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){var e=this;return(0,C.A)(function*(){e.QrCode?(e.QrCode&&(0,O.j)({loadingController:e.loadingController,params:{QrCode:e.QrCode},callback:a=>{var i;e.response=a,null!=a&&a.Succeeded?(e.chargingConnector=a.Data,(null===(i=e.chargingConnector)||void 0===i?void 0:i.VConnectorStatus)==j.EF.DangRanh&&e.loadStepPackage()):(0,s.cX)(e.toastController,{},a).then(m=>m.present()),t&&t()}}),(0,R.xU)({callback:a=>{var i,m,h,k,_,x;null!=a&&a.Succeeded&&(e.chargingPackageRange=a.Data,e.customElectricMin=null!==(i=null===(m=e.chargingPackageRange)||void 0===m?void 0:m.MinPowerValue)&&void 0!==i?i:1,e.customElectricMax=null!==(h=null===(k=e.chargingPackageRange)||void 0===k?void 0:k.MaxPowerValue)&&void 0!==h?h:100,e.customElectricStep=null!==(_=null===(x=e.chargingPackageRange)||void 0===x?void 0:x.Seek)&&void 0!==_?_:1,e.customElectricValue=(0,p.Rw)(.35*(e.customElectricMax-e.customElectricMin)/e.customElectricStep,1)*e.customElectricStep)}})):window.location.replace(f._.CHARGER_CONNECT)})()}loadStepPackage(){var t=this;return(0,C.A)(function*(){var e;t.step="package",(0,R.P3)({loadingController:t.loadingController,params:{ChargeConnectorId:null===(e=t.chargingConnector)||void 0===e?void 0:e.ChargeConnectorId,PageNumber:1,PageSize:10},callback:a=>{var i;null!=a&&a.Succeeded?t.chargingPackages=null!==(i=a.Data)&&void 0!==i?i:[]:(0,s.cX)(t.toastController,{},a).then(m=>m.present())}})})()}loadStepPayment(){var t=this;return(0,C.A)(function*(){var e;t.ChargePackageId?(t.step="payment",t.ChargePackageId&&(0,R.I0)({loadingController:t.loadingController,params:{PromoteCode:t.PromoteCodeApply,ChargePackageId:t.ChargePackageId,ChargeConnectorId:null===(e=t.chargingConnector)||void 0===e?void 0:e.ChargeConnectorId},callback:a=>{null!=a&&a.Succeeded?t.chargingPackage=a.Data:(0,s.cX)(t.toastController,{},a).then(i=>i.present())}}),(0,c.g)({loadingController:t.loadingController,params:{PageNumber:1,PageSize:10},callback:a=>{var i,m;null!=a&&a.Succeeded?(t.paymentMethods=null!==(i=a.Data)&&void 0!==i?i:[],1==t.paymentMethods.filter(h=>h.IsSupport).length&&(t.PaymentMethodId=null===(m=t.paymentMethods.find(h=>h.IsSupport))||void 0===m?void 0:m.PaymentMethodId)):(0,s.cX)(t.toastController,{},a).then(h=>h.present())}})):(0,s.cX)(t.toastController,{message:"Vui l\xf2ng ch\u1ecdn g\xf3i s\u1ea1c!",color:"warning"}).then(a=>a.present())})()}changePromoteCode(t){var e=this;return(0,C.A)(function*(){var a;e.PromoteCode=null==t||null===(a=t.target)||void 0===a||null===(a=a.value)||void 0===a?void 0:a.replace(/[^a-zA-Z0-9]/g,"")})()}keyupPromoteCode(t){var e=this;return(0,C.A)(function*(){13!=t.keyCode||e.submitPromoteCode(t)})()}submitPromoteCode(t){var e=this;return(0,C.A)(function*(){var a;e.ChargePackageId&&e.PromoteCode&&(0,R.I0)({loadingController:e.loadingController,params:{PromoteCode:e.PromoteCode,ChargePackageId:e.ChargePackageId,ChargeConnectorId:null===(a=e.chargingConnector)||void 0===a?void 0:a.ChargeConnectorId},callback:i=>{var m,h;null!=i&&i.Succeeded?(e.PromoteCode&&null!==(m=i.Data)&&void 0!==m&&m.PromoteValue&&(e.chargingPackage=i.Data,e.PromoteCodeApply=e.PromoteCode),null!==(h=i.Data)&&void 0!==h&&h.PromoteMsg&&(0,s.cX)(e.toastController,{message:i.Data.PromoteMsg,color:"warning"}).then(k=>k.present())):(0,s.cX)(e.toastController,{},i).then(k=>k.present())}})})()}removePromoteCode(t){var e=this;return(0,C.A)(function*(){var a;e.PromoteCode=void 0,e.PromoteCodeApply=void 0,e.ChargePackageId&&(0,R.I0)({loadingController:e.loadingController,params:{ChargePackageId:e.ChargePackageId,ChargeConnectorId:null===(a=e.chargingConnector)||void 0===a?void 0:a.ChargeConnectorId},callback:i=>{null!=i&&i.Succeeded?e.chargingPackage=i.Data:(0,s.cX)(e.toastController,{},i).then(m=>m.present())}})})()}backPackage(t){var e=this;return(0,C.A)(function*(){e.ChargePackageId=void 0,e.loadStepPackage()})()}submitPackage(t){var e=this;return(0,C.A)(function*(){e.loadStepPayment()})()}goPayment(t){var e=this;return(0,C.A)(function*(){if(!e.isPaying&&e.ChargePackageId){var a,i,m;e.isPaying=!0;var h=e.platform.platforms(),k=h.includes("desktop")?"pc":h.includes("mobileweb")?"mweb":"app";(0,M.jF)({loadingController:e.loadingController,params:{StationCode:null===(a=e.chargingStation)||void 0===a?void 0:a.StationCode,ConnectorId:null===(i=e.chargingConnector)||void 0===i?void 0:i.ConnectorId,ChargePackageId:e.ChargePackageId,PromoteCode:e.PromoteCodeApply,PmCode:null===(m=e.paymentMethods.find(_=>_.PaymentMethodId==e.PaymentMethodId))||void 0===m?void 0:m.PmCode,PlatformType:k},callback:_=>{var x,A,E,N;null!=_&&_.Succeeded?(null!==(x=_.Data)&&void 0!==x&&x.OrderId&&e.router.navigateByUrl(f._.ORDER_INFO_DETAIL.replace(":id",_.Data.OrderId.toString()),{replaceUrl:!0}),(0,I.h)({router:e.router,toastController:e.toastController},_.Data,h)):((0,s.cX)(e.toastController,{},_).then(w=>w.present()),e.isPaying=!1,null!=_&&null!==(A=_.Data)&&void 0!==A&&A.IsHasPayingOrder&&(0,s.Yy)(e.modalController,e.animationController,{selectedId:null==_||null===(E=_.Data)||void 0===E||null===(E=E.PayingOrder)||void 0===E?void 0:E.OrderId,message:{TitleConfirm:null!==(N=null==_?void 0:_.Message)&&void 0!==N?N:"CancelOrder",TextConfirm:"ConfirmCancelOrder"},fnConfirm:w=>{(0,M.rZ)({loadingController:e.loadingController,params:{OrderId:w},callback:S=>{null!=S&&S.Succeeded?e.goPayment(t):(0,s.cX)(e.toastController,{},S).then(_n=>_n.present())}})}}))}})}})()}choicePackage(t,e){var a=this;return(0,C.A)(function*(){a.ChargePackageId=e})()}changeIsPackByPower(t){var e=this;return(0,C.A)(function*(){e.IsPackByPower=t.detail.value})()}filterChargePackage(){return this.chargingPackages.filter(t=>t.IsPackByPower==this.IsPackByPower)}changeChargePackage(t){var e=this;return(0,C.A)(function*(){e.ChargePackageId=t.detail.value})()}changePaymentMethod(t){var e=this;return(0,C.A)(function*(){e.PaymentMethodId=t.detail.value})()}changeCustomElectricValue(t){var e,a;let i=null!==(e=null==t||null===(a=t.detail)||void 0===a?void 0:a.value)&&void 0!==e?e:0;i=(0,p.Rw)(i/this.customElectricStep,1)*this.customElectricStep,i<this.customElectricMin?i=this.customElectricMin:i>this.customElectricMax&&(i=this.customElectricMax),this.customElectricValue=i}applyCustomElectric(t){var e;this.customElectricValue&&(this.ChargePackageId=void 0,(0,R.GR)({params:{PowerValue:this.customElectricValue,ChargeConnectorId:null===(e=this.chargingConnector)||void 0===e?void 0:e.ChargeConnectorId},callback:a=>{var i,m;null!=a&&a.Succeeded?(this.customChargingPackage=a.Data,null===(i=this.modalCustomChargingPackageRef)||void 0===i||i.dismiss(),null===(m=this.modalCustomChargingPackageConfirmRef)||void 0===m||m.present()):(0,s.cX)(this.toastController,{},a).then(h=>h.present())}}))}submitCustomPackage(t){var e,a;null===(e=this.modalCustomChargingPackageConfirmRef)||void 0===e||e.dismiss(),null!==(a=this.customChargingPackage)&&void 0!==a&&a.ChargePackageId&&(this.ChargePackageId=this.customChargingPackage.ChargePackageId,this.loadStepPayment())}}return(r=d).\u0275fac=function(t){return new(t||r)(n.rXU(v.Ix),n.rXU(y.OD),n.rXU(v.nX),n.rXU(g.W3),n.rXU(g.Xi),n.rXU(g.K_),n.rXU(g.Hx))},r.\u0275cmp=n.VBU({type:r,selectors:[["app-charging-connector-detail"]],viewQuery:function(t,e){if(1&t&&(n.GBs(G,5),n.GBs(V,5)),2&t){let a;n.mGM(a=n.lsd())&&(e.modalCustomChargingPackageRef=a.first),n.mGM(a=n.lsd())&&(e.modalCustomChargingPackageConfirmRef=a.first)}},decls:7,vars:2,consts:[["templatePackage",""],["templatePayment",""],["modalCustomChargingPackage",""],["modalCustomChargingPackageConfirm",""],["rangeElectric",""],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchDefault"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],[3,"ngTemplateOutlet"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"container","p-0"],[1,"card-station","rounded","bg-primary","text-white"],[1,"d-flex","align-items-center"],["onError","this.src='assets/image/default/ev-station.png'",3,"src"],[1,"pl-3"],[1,"d-flex","align-items-center","my-0"],["color","light","src","../../../assets/icon/ion-icon/changing-station.svg"],[1,"ml-2"],[1,"card-connector","rounded","bg-white"],[1,"mb-2"],[1,"d-flex","align-items-center","bg-secondary","rounded","p-3"],["src","../../../assets/icon/ion-img/changing-connector.svg"],[4,"ngIf"],[1,"ion-modal-small"],[1,"card-package","bg-white"],[1,"mb-2","d-flex","align-items-center","justify-content-between"],["size","small","shape","round",3,"click",4,"ngIf"],[1,"package-list"],[1,"mt-3"],[3,"ionChange","value"],[4,"ngFor","ngForOf"],["size","small","shape","round",3,"click"],["slot","end","name","add-outline"],[1,"package-item"],["lines","none","detail","false","button","","mode","ios"],["mode","md","justify","space-between",3,"value"],["src","../../../assets/icon/ion-img/charge-package.svg"],[1,"mt-1"],[1,"text-primary"],[1,"container","pt-4","container-custom-package"],[1,"text-left"],[1,"mb-4","text-primary"],[1,"d-flex","align-items-stretch","border","border-primary","rounded"],[1,"flex-grow-1"],["lines","none","shape","round"],["type","number","inputmode","decimal",3,"ionChange","ngModel","min","max","placeholder"],[1,"border-left","border-primary","text-primary","px-3","d-flex","align-items-center"],[3,"ionChange","ngModel","min","max","step","pin"],[1,"d-flex","justify-content-between","text-muted"],[1,"py-3","mt-3"],["color","primary","shape","round","expand","block",3,"click"],[1,"d-flex","align-items-stretch","border","rounded"],[1,"flex-grow-1","px-3","py-2","d-flex","align-items-center"],[1,"text-muted"],[1,"border-left","border-primary","text-primary","d-flex","align-items-center"],["color","primary","expand","full",1,"h-100",3,"click"],[1,"d-flex","justify-content-between","py-1"],[1,"container","py-3"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["color","primary","expand","block","shape","round",3,"click"],["color","warning","expand","block","shape","round"],["color","tertiary","expand","block","shape","round"],["color","danger","expand","block","shape","round"],[3,"click"],["slot","start","name","chevron-back-outline"],[1,"card-bill-info","rounded","bg-white"],[1,"d-flex","align-items-center","my-0","text-primary"],["src","../../../assets/icon/ion-icon/changing-station.svg"],[1,"border-dashed"],["class","card-bill-info rounded bg-white",4,"ngIf"],[1,"card-promote","rounded","bg-white","mt-3"],[1,"input-group","input-group-lg","mb-3"],["type","text",1,"form-control","rounded",3,"change","keyup","ngModel","placeholder"],[1,"input-group-append"],["type","button",1,"btn","btn-primary","rounded",3,"click"],[1,"card-payment-method","rounded","bg-white","mt-3"],[1,"data-list"],[1,"table","table-borderless","m-0"],["class","border-top",4,"ngIf"],[1,"border-top"],["color","primary"],["name","close-outline",3,"click"],[1,"data-item"],["mode","md","justify","space-between",3,"value","disabled"],[3,"src"]],template:function(t,e){1&t&&(n.qex(0,5),n.DNE(1,U,1,1,"ng-container",6)(2,$,1,1,"ng-container",7),n.bVm(),n.DNE(3,nn,48,18,"ng-template",null,0,n.C5r)(5,gn,62,41,"ng-template",null,1,n.C5r)),2&t&&(n.Y8G("ngSwitch",e.step),n.R7$(2),n.Y8G("ngSwitchCase","payment"))},dependencies:[P.Sq,P.bT,P.T3,P.ux,P.e1,P.fG,b.me,b.BC,b.vS,g.Jm,g.QW,g.ZB,g.W9,g.M0,g.eU,g.iq,g.KW,g.$w,g.uz,g.he,g.KO,g.f0,g.Ob,g.To,g.Ki,g.Zx,g.BC,g.ai,g.Sb,g.su,g.Je,g.el,g.T6,g.jL,T.D9],styles:['.table[_ngcontent-%COMP%]{table-layout:fixed}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}.card-station[_ngcontent-%COMP%]{padding:1rem 1rem 2.5rem}.card-station.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important}.card-station[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 5rem;--border-radius: .5rem;border:1px solid var(--ion-color-light)}.card-connector[_ngcontent-%COMP%]{padding:1rem;margin-top:-1.5rem}.card-connector.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important}.card-connector[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-connector[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:2rem}.card-connector[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 2.5rem;--border-radius: .25rem}.card-package[_ngcontent-%COMP%]{padding:1rem}.card-package[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}.card-package[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 3rem;--border-radius: .5rem}.card-package[_ngcontent-%COMP%]   .package-list[_ngcontent-%COMP%]   .package-item[_ngcontent-%COMP%]{border-radius:.75rem;margin-bottom:1rem;box-shadow:0 0 12px 4px #0101011a}.card-package[_ngcontent-%COMP%]   .package-list[_ngcontent-%COMP%]   .package-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: .75rem}.card-bill-info[_ngcontent-%COMP%]{padding:1rem}.card-bill-info.rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-bill-info[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 5rem;--border-radius: .5rem;border:1px solid var(--ion-color-light)}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]{margin:0;position:relative;z-index:1}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:before, .card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;z-index:2;bottom:0;margin-bottom:-1rem;width:2rem;height:2rem;border-radius:50%;background-color:var(--ion-background-color-primary)}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:before{left:-1rem}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:after{right:-1rem}.card-promote[_ngcontent-%COMP%]{padding:1rem}.card-promote.rounded[_ngcontent-%COMP%], .card-promote[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:.75rem!important}.card-promote[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem;border-color:var(--ion-color-gray);border-top-right-radius:0!important;border-bottom-right-radius:0!important}.card-promote[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1rem;border-color:var(--ion-color-primary);border-top-left-radius:0!important;border-bottom-left-radius:0!important}.card-promote[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin:0;background:var(--ion-color-primary);color:var(--ion-color-light)}.card-payment-method[_ngcontent-%COMP%]{padding:1rem}.card-payment-method.rounded[_ngcontent-%COMP%]{border-radius:.75rem!important}.card-payment-method[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 3rem;--border-radius: .5rem}.card-payment-method[_ngcontent-%COMP%]   .data-list[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]{border-radius:.75rem;margin-bottom:1rem;border:1px solid var(--ion-color-gray)}.card-payment-method[_ngcontent-%COMP%]   .data-list[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: .75rem}.payment-methods[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:.5rem 0}.payment-methods[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:.25rem;overflow:hidden}.input-group-voucher[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-size:.75rem}.input-group-voucher[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.75rem}.container-custom-package[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:.5rem!important;overflow:hidden}.container-custom-package[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: .5rem}.container-custom-package[_ngcontent-%COMP%]   ion-range[_ngcontent-%COMP%]{--bar-background: var(--ion-color-medium-tint);--bar-background-active: var(--ion-color-primary);--bar-height: .25rem;--bar-border-radius: .5rem;--knob-background: var(--ion-color-primary);--knob-size: 1.25rem;--pin-background: var(--ion-color-primary);--pin-color: var(--ion-color-primary-contrast)}.container-custom-package[_ngcontent-%COMP%]   ion-range[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{margin-top:-.5rem}.container-custom-package[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--box-shadow: none}']}),d})()}];let sn=(()=>{var r;class d{}return(r=d).\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[v.iI.forChild(dn),v.iI]}),d})();var un=l(3890);let mn=(()=>{var r;class d{}return(r=d).\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[P.MD,b.YN,g.bv,sn,un.x]}),d})()},8605:(D,F,l)=>{l.d(F,{h:()=>u});var P=l(467);const g=(0,l(5083).F3)("AppLauncher",{web:()=>l.e(614).then(l.bind(l,614)).then(p=>new p.AppLauncherWeb)});var v=l(7392),C=l(5312),c=l(8650);const u=function(){var p=(0,P.A)(function*(f,s,M){var R=function(){var I=(0,P.A)(function*(n){n.match(C.c.match_web_url)?f.router.navigateByUrl(n.replace(new RegExp(C.c.match_web_url),"/"),{replaceUrl:!0}):M.includes("mobileweb")||M.includes("mobile")?yield v.P.open({url:n}):window.location.replace(n)});return function(y){return I.apply(this,arguments)}}(),O=function(){var I=(0,P.A)(function*(n){var y;M.includes("mobileweb")?yield v.P.open({url:n}):M.includes("mobile")?((y=v.P).addListener("browserFinished",()=>{window.location.reload()}),y.open({url:n})):window.location.replace(n)});return function(y){return I.apply(this,arguments)}}(),j=function(){var I=(0,P.A)(function*(n,y){if(M.includes("mobileweb"))yield v.P.open({url:n});else if(M.includes("mobile")){var T=null==n?void 0:n.split("://").shift();T&&g.openUrl({url:n}).then(G=>{G.completed||((0,c.cX)(f.toastController,{message:`Kh\xf4ng t\xecm th\u1ea5y \u1ee9ng d\u1ee5ng [${T}]`,color:"warning"}).then(V=>V.present()),y&&O(y))})}else window.location.replace(n)});return function(y,T){return I.apply(this,arguments)}}();s.ReturnOrderUrl?R(s.ReturnOrderUrl):s.UseUrlAppFirst?s.RedirectUrlApp?j(s.RedirectUrlApp,s.RedirectUrlHttp):s.RedirectUrlHttp&&O(s.RedirectUrlHttp):s.RedirectUrlHttp?O(s.RedirectUrlHttp):s.RedirectUrlApp?j(s.RedirectUrlApp,s.RedirectUrlHttp):(0,c.cX)(f.toastController,{message:"Kh\xf4ng t\xecm th\u1ea5y li\xean k\u1ebft thanh to\xe1n!",color:"danger"}).then(I=>I.present())});return function(s,M,R){return p.apply(this,arguments)}}()}}]);