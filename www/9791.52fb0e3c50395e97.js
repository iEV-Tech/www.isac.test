"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9791],{9791:(Fn,F,c)=>{c.r(F),c.d(F,{OrderInfoDetailPageModule:()=>On});var b=c(177),k=c(9417),s=c(791),R=c(7625),g=c(467),M=c(5083),j=c(1806),$=c(9051),E=c(5137),P=c(6944),T=c(5970),O=c(9061),x=c(6539),S=c(2313),p=c(8517),m=c(8650),I=c(3588),C=c(8833),D=c(2071),G=c(7586),V=c.n(G),N=c(9762),n=c(4438),y=c(4842);const J=["modalAddCustomerInvoiceSuccess"],B=()=>["android","ios"],X=(t,l,o)=>[t,l,o];function A(t,l){if(1&t){const o=n.RV6();n.j41(0,"ion-buttons",9),n.bIt("click",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.shareOrder(e))}),n.j41(1,"ion-chip",10)(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.nrm(5,"ion-icon",11),n.k0s()()}2&t&&(n.R7$(3),n.JRh(n.bMT(4,1,"Share")))}function U(t,l){1&t&&(n.qex(0),n.j41(1,"div",13),n.nrm(2,"ion-spinner",14),n.k0s(),n.bVm())}function Y(t,l){if(1&t&&(n.j41(0,"tr")(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td"),n.EFF(5),n.k0s()()),2&t){const o=n.XpG(3);n.R7$(2),n.JRh(n.bMT(3,2,"PaymentMethod")),n.R7$(3),n.JRh(o.orderInfo.KindOfCard)}}function w(t,l){if(1&t&&(n.j41(0,"tr",22)(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td"),n.EFF(5),n.k0s()()),2&t){const o=n.XpG(3);n.R7$(2),n.JRh(n.bMT(3,2,"Discount")),n.R7$(3),n.SpI("-",o.APP_FUNC_FormatMoney(o.orderInfo.PromoteValue),"\u0111")}}function L(t,l){1&t&&(n.j41(0,"b",29),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&t&&(n.R7$(),n.JRh(n.bMT(2,1,"RefundYes")))}function H(t,l){1&t&&(n.j41(0,"b",29),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&t&&(n.R7$(),n.JRh(n.bMT(2,1,"RefundRequested")))}function K(t,l){if(1&t&&(n.qex(0),n.j41(1,"div",27)(2,"table",17)(3,"tr")(4,"td"),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.j41(7,"td"),n.DNE(8,L,3,3,"b",28)(9,H,3,3,"b",28),n.k0s()(),n.j41(10,"tr")(11,"td"),n.EFF(12),n.nI1(13,"translate"),n.k0s(),n.j41(14,"td")(15,"b"),n.EFF(16),n.k0s()()()()(),n.bVm()),2&t){const o=n.XpG(4);n.R7$(5),n.JRh(n.bMT(6,5,"Refund")),n.R7$(3),n.Y8G("ngIf",o.orderInfo.IsRefund&&o.orderInfo.RefundFinish),n.R7$(),n.Y8G("ngIf",o.orderInfo.IsRefund&&!o.orderInfo.RefundFinish),n.R7$(3),n.JRh(n.bMT(13,7,"RefundValue")),n.R7$(4),n.SpI("",o.APP_FUNC_FormatMoney(o.orderInfo.RefundValue),"\u0111")}}function W(t,l){if(1&t&&(n.qex(0),n.j41(1,"div",30)(2,"div",26)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"table",17)(7,"tr")(8,"td"),n.EFF(9),n.nI1(10,"translate"),n.k0s(),n.j41(11,"td")(12,"b"),n.EFF(13),n.k0s()()()()(),n.bVm()),2&t){const o=n.XpG(4);n.R7$(4),n.JRh(n.bMT(5,3,"Exchange")),n.R7$(5),n.JRh(n.bMT(10,5,"ExchangeValue")),n.R7$(4),n.SpI("",o.APP_FUNC_FormatMoney(o.orderInfo.ExchangeValue),"\u0111")}}function z(t,l){if(1&t&&(n.qex(0),n.j41(1,"div",31)(2,"div",26)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"table",17)(7,"tr")(8,"td"),n.EFF(9),n.nI1(10,"translate"),n.k0s(),n.j41(11,"td")(12,"b"),n.EFF(13),n.k0s()()()()(),n.bVm()),2&t){const o=n.XpG(4);n.R7$(4),n.JRh(n.bMT(5,3,"BillVAT")),n.R7$(5),n.JRh(n.bMT(10,5,"Status")),n.R7$(4),n.JRh(o.orderInfo.VEinvoiceStatusName)}}function Q(t,l){if(1&t&&(n.j41(0,"tr")(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td")(5,"b"),n.EFF(6),n.k0s()()()),2&t){const o=n.XpG(7);n.R7$(2),n.JRh(n.bMT(3,2,"Email")),n.R7$(4),n.JRh(o.customerInvoice.BuyerEmail)}}function Z(t,l){if(1&t&&(n.j41(0,"tr")(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td")(5,"b"),n.EFF(6),n.k0s()()()),2&t){const o=n.XpG(7);n.R7$(2),n.JRh(n.bMT(3,2,"Mobile")),n.R7$(4),n.JRh(o.customerInvoice.BuyerPhone)}}function q(t,l){if(1&t&&(n.j41(0,"table",17)(1,"tr")(2,"td"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"td")(6,"b"),n.EFF(7),n.k0s()()(),n.j41(8,"tr")(9,"td"),n.EFF(10),n.nI1(11,"translate"),n.k0s(),n.j41(12,"td")(13,"b"),n.EFF(14),n.k0s()()(),n.j41(15,"tr")(16,"td"),n.EFF(17),n.nI1(18,"translate"),n.k0s(),n.j41(19,"td")(20,"b"),n.EFF(21),n.k0s()()(),n.DNE(22,Q,7,4,"tr",5)(23,Z,7,4,"tr",5),n.k0s()),2&t){const o=n.XpG(6);n.R7$(3),n.JRh(n.bMT(4,8,"BillCompanyName")),n.R7$(4),n.JRh(o.customerInvoice.CompanyName),n.R7$(3),n.JRh(n.bMT(11,10,"BillCompanyAddress")),n.R7$(4),n.JRh(o.customerInvoice.Address),n.R7$(3),n.JRh(n.bMT(18,12,"BillCompanyTax")),n.R7$(4),n.JRh(o.customerInvoice.TaxCode),n.R7$(),n.Y8G("ngIf",o.customerInvoice.BuyerEmail),n.R7$(),n.Y8G("ngIf",o.customerInvoice.BuyerPhone)}}function nn(t,l){if(1&t){const o=n.RV6();n.j41(0,"div",36)(1,"div",37)(2,"b"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"ion-button",38),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(5);return n.Njj(a.presentModalCustomerInvoice(e))}),n.nrm(6,"ion-icon",39),n.k0s()(),n.nrm(7,"hr"),n.DNE(8,q,24,14,"table",40),n.k0s()}if(2&t){const o=n.XpG(5);n.R7$(3),n.JRh(n.bMT(4,2,"ExportBillInfo")),n.R7$(5),n.Y8G("ngIf",o.customerInvoice)}}function en(t,l){if(1&t){const o=n.RV6();n.qex(0),n.j41(1,"div",32)(2,"ion-radio-group",33),n.bIt("ionChange",function(e){n.eBV(o);const a=n.XpG(4);return n.Njj(a.changeIsGetBill(e))}),n.j41(3,"ion-radio",34),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.j41(6,"ion-radio",34),n.EFF(7),n.nI1(8,"translate"),n.k0s()()(),n.DNE(9,nn,9,4,"div",35),n.bVm()}if(2&t){const o=n.XpG(4);n.R7$(2),n.Y8G("value",0),n.R7$(),n.Y8G("value",0),n.R7$(),n.JRh(n.bMT(5,6,"NoGetBill")),n.R7$(2),n.Y8G("value",1),n.R7$(),n.JRh(n.bMT(8,8,"YesGetBill")),n.R7$(2),n.Y8G("ngIf",o.IsGetBill)}}function tn(t,l){if(1&t&&(n.qex(0)(1),n.j41(2,"div",25)(3,"div",26)(4,"b"),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"table",17)(8,"tr")(9,"td"),n.EFF(10),n.nI1(11,"translate"),n.k0s(),n.j41(12,"td"),n.EFF(13),n.k0s()(),n.j41(14,"tr")(15,"td"),n.EFF(16),n.nI1(17,"translate"),n.k0s(),n.j41(18,"td"),n.EFF(19),n.k0s()()()(),n.bVm(),n.DNE(20,K,17,9,"ng-container",5)(21,W,14,7,"ng-container",5)(22,z,14,7,"ng-container",5)(23,en,10,10,"ng-container",5),n.bVm()),2&t){let o,r;const e=n.XpG(3);n.R7$(5),n.JRh(n.bMT(6,10,"Used")),n.R7$(5),n.JRh(n.bMT(11,12,"UsedElectricValue")),n.R7$(3),n.Lme("",e.APP_FUNC_RoundNumber(null!==(o=e.orderInfo.ElectricUsed)&&void 0!==o?o:0),"",null!==(o=e.orderInfo.Unit)&&void 0!==o?o:"kWh",""),n.R7$(3),n.JRh(n.bMT(17,14,"UsedMoneyValue")),n.R7$(3),n.SpI("",e.APP_FUNC_FormatMoney(null!==(r=e.orderInfo.AftertaxBillValue)&&void 0!==r?r:0),"\u0111"),n.R7$(),n.Y8G("ngIf",e.orderInfo.RefundValue),n.R7$(),n.Y8G("ngIf",e.orderInfo.ExchangeValue),n.R7$(),n.Y8G("ngIf",e.orderInfo.VEinvoiceStatus&&e.orderInfo.VEinvoiceStatus!=e.v_einvoice_status.ChuaXacNhan),n.R7$(),n.Y8G("ngIf",e.orderInfo.VEinvoiceStatus==e.v_einvoice_status.ChuaXacNhan)}}function on(t,l){if(1&t&&(n.qex(0),n.j41(1,"div",15)(2,"div",16)(3,"table",17)(4,"tr")(5,"td"),n.EFF(6),n.nI1(7,"translate"),n.k0s(),n.j41(8,"td")(9,"b"),n.EFF(10),n.k0s()()(),n.j41(11,"tr")(12,"td"),n.EFF(13),n.nI1(14,"translate"),n.k0s(),n.j41(15,"td")(16,"b"),n.EFF(17),n.k0s()()(),n.j41(18,"tr")(19,"td"),n.EFF(20),n.nI1(21,"translate"),n.k0s(),n.j41(22,"td")(23,"b"),n.EFF(24),n.k0s()()(),n.DNE(25,Y,6,4,"tr",5),n.j41(26,"tr")(27,"td"),n.EFF(28),n.nI1(29,"translate"),n.k0s(),n.j41(30,"td"),n.EFF(31),n.k0s()()()(),n.nrm(32,"hr",18),n.j41(33,"div",19)(34,"div",20)(35,"b"),n.EFF(36),n.nI1(37,"translate"),n.k0s()(),n.j41(38,"table",17)(39,"tr")(40,"td"),n.EFF(41),n.nI1(42,"translate"),n.k0s(),n.j41(43,"td")(44,"div"),n.EFF(45),n.k0s(),n.j41(46,"div")(47,"b"),n.EFF(48),n.k0s(),n.j41(49,"small"),n.EFF(50),n.k0s()()()(),n.DNE(51,w,6,4,"tr",21),n.j41(52,"tr",22)(53,"td",23)(54,"b"),n.EFF(55),n.nI1(56,"translate"),n.k0s()(),n.j41(57,"td",24)(58,"strong"),n.EFF(59),n.k0s()()()()()(),n.DNE(60,tn,24,16,"ng-container",5),n.bVm()),2&t){let o,r,e,a;const i=n.XpG(2);n.R7$(6),n.JRh(n.bMT(7,22,"OrderCode")),n.R7$(4),n.JRh(i.orderInfo.OrderCode),n.R7$(3),n.JRh(n.bMT(14,24,"OrderValue")),n.R7$(4),n.SpI("",i.APP_FUNC_FormatMoney(i.orderInfo.PayValue),"\u0111"),n.R7$(3),n.JRh(n.bMT(21,26,"OrderStatus")),n.R7$(3),n.ZvI("text-",i.APP_FUNC_GetColor_VOrderStatus(i.orderInfo.VOrderStatus),""),n.R7$(),n.JRh(i.orderInfo.VOrderStatusName),n.R7$(),n.Y8G("ngIf",i.orderInfo.Paymethod),n.R7$(3),n.JRh(n.bMT(29,28,"LastUpdateTime")),n.R7$(3),n.JRh(i.APP_FUNC_FormatDate(i.getLastUpdateTime())),n.R7$(5),n.JRh(n.bMT(37,30,"Detail")),n.R7$(5),n.JRh(n.bMT(42,32,"ChargingPackage")),n.R7$(4),n.JRh(i.orderInfo.ChargePackName),n.R7$(3),n.SpI("",i.APP_FUNC_FormatMoney(null!==(o=i.orderInfo.PayValue)&&void 0!==o?o:0),"\u0111"),n.R7$(2),n.Lme(" / ",i.orderInfo.PowerValue,"",null!==(r=i.orderInfo.Unit)&&void 0!==r?r:"kWh",""),n.R7$(),n.Y8G("ngIf",i.orderInfo.PromoteValue),n.R7$(4),n.JRh(n.bMT(56,34,"PayValue")),n.R7$(4),n.SpI("",i.APP_FUNC_FormatMoney(null!==(e=i.orderInfo.RealValue)&&void 0!==e?e:0),"\u0111"),n.R7$(),n.Y8G("ngIf",n.sMw(36,X,i.v_order_status.DaHoanTien,i.v_order_status.DaYeuCauHoanTien,i.v_order_status.HoanTat).includes(null!==(a=i.orderInfo.VOrderStatus)&&void 0!==a?a:0))}}function rn(t,l){if(1&t&&(n.qex(0),n.j41(1,"div",12),n.DNE(2,U,3,0,"ng-container",5)(3,on,61,40,"ng-container",5),n.k0s(),n.bVm()),2&t){const o=n.XpG();n.R7$(2),n.Y8G("ngIf",(null==o.orderInfo?null:o.orderInfo.VOrderStatus)==o.v_order_status.DangThanhToan),n.R7$(),n.Y8G("ngIf",o.orderInfo)}}function an(t,l){if(1&t){const o=n.RV6();n.j41(0,"div",41),n.nrm(1,"ion-img",42),n.j41(2,"h4"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"div")(6,"small"),n.EFF(7),n.nI1(8,"translate"),n.k0s()(),n.j41(9,"div",43)(10,"ion-button",44),n.bIt("click",function(){n.eBV(o),n.XpG();const e=n.sdS(13);return n.Njj(null==e?null:e.dismiss())}),n.EFF(11),n.nI1(12,"translate"),n.k0s()()()}2&t&&(n.R7$(3),n.JRh(n.bMT(4,3,"InvoiceRequestSent")),n.R7$(4),n.JRh(n.bMT(8,5,"InvoiceRequestSentMessage")),n.R7$(4),n.JRh(n.bMT(12,7,"Close")))}function ln(t,l){if(1&t){const o=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",45)(3,"ion-button",46),n.bIt("click",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.cancelOrder(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&t&&(n.R7$(5),n.JRh(n.bMT(6,1,"CancelOrder")))}function dn(t,l){if(1&t){const o=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",45)(3,"ion-button",47),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.openDetailChargingSession(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&t&&(n.R7$(5),n.JRh(n.bMT(6,1,"GoToChargingSession")))}function cn(t,l){if(1&t){const o=n.RV6();n.qex(0),n.j41(1,"div",48)(2,"div")(3,"small"),n.EFF(4),n.nI1(5,"translate"),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"div")(8,"b"),n.EFF(9),n.k0s()(),n.j41(10,"small"),n.EFF(11),n.nI1(12,"translate"),n.k0s()(),n.j41(13,"div")(14,"ion-button",47),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(3);return n.Njj(a.chargingStart(e))}),n.j41(15,"ion-label"),n.EFF(16),n.nI1(17,"translate"),n.k0s()()(),n.bVm()}if(2&t){const o=n.XpG(3);n.R7$(4),n.E5c("",n.bMT(5,6,"OrderWillExpireLater")," ",o.APP_FUNC_RoundNumber(o.timeout/6e4,1)," ",n.bMT(6,8,"Minute"),"!"),n.R7$(5),n.JRh(o.getTimeCountdown()),n.R7$(2),n.JRh(n.bMT(12,10,"PleaseStartChargingSession")),n.R7$(5),n.JRh(n.bMT(17,12,"StartChargingSession"))}}function sn(t,l){if(1&t){const o=n.RV6();n.qex(0),n.j41(1,"div",49)(2,"div",50)(3,"small"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"div",51)(7,"ion-button",44),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(3);return n.Njj(a.sendFeedback(e))}),n.j41(8,"ion-label"),n.EFF(9),n.nI1(10,"translate"),n.k0s()()()(),n.bVm()}2&t&&(n.R7$(4),n.JRh(n.bMT(5,2,"OrderHasExpired")),n.R7$(5),n.JRh(n.bMT(10,4,"Feedback")))}function _n(t,l){if(1&t&&(n.qex(0),n.j41(1,"ion-footer")(2,"div",45),n.DNE(3,cn,18,14,"ng-container",5)(4,sn,11,6,"ng-container",5),n.k0s()(),n.bVm()),2&t){const o=n.XpG(2);n.R7$(3),n.Y8G("ngIf",o.timeCountdown>0),n.R7$(),n.Y8G("ngIf",o.timeCountdown<=0)}}function un(t,l){if(1&t&&(n.qex(0),n.DNE(1,dn,7,3,"ng-container",5)(2,_n,5,2,"ng-container",5),n.bVm()),2&t){const o=n.XpG();n.R7$(),n.Y8G("ngIf",o.chargingSession),n.R7$(),n.Y8G("ngIf",!o.chargingSession)}}function gn(t,l){if(1&t){const o=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",45)(3,"ion-button",47),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(2);return n.Njj(a.openDetailChargingSession(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&t&&(n.R7$(5),n.JRh(n.bMT(6,1,"GoToChargingSession")))}function fn(t,l){if(1&t&&(n.qex(0),n.DNE(1,gn,7,3,"ng-container",5),n.bVm()),2&t){const o=n.XpG();n.R7$(),n.Y8G("ngIf",o.chargingSession)}}function mn(t,l){if(1&t){const o=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",45)(3,"ion-button",52),n.bIt("click",function(e){n.eBV(o);const a=n.XpG();return n.Njj(a.sendFeedback(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&t&&(n.R7$(5),n.JRh(n.bMT(6,1,"SendFeedback")))}function In(t,l){if(1&t){const o=n.RV6();n.j41(0,"div",45)(1,"ion-button",54),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(3);return n.Njj(a.completeOrder(e))}),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()()()}2&t&&(n.R7$(3),n.JRh(n.bMT(4,1,"Complete")))}function hn(t,l){if(1&t){const o=n.RV6();n.j41(0,"div",45)(1,"div",55)(2,"div",56)(3,"ion-chip",57),n.bIt("click",function(){n.eBV(o);const e=n.XpG(3);return n.Njj(e.navigateByUrl(e.APP_ROUTE.DEFAULT))}),n.nrm(4,"ion-icon",58),n.j41(5,"ion-label"),n.EFF(6),n.nI1(7,"translate"),n.k0s()()(),n.j41(8,"div",59)(9,"ion-button",60),n.bIt("click",function(e){n.eBV(o);const a=n.XpG(3);return n.Njj(a.openDetailBill(e))}),n.nrm(10,"ion-icon",61),n.j41(11,"ion-label"),n.EFF(12),n.nI1(13,"translate"),n.k0s()()()()()}2&t&&(n.R7$(6),n.JRh(n.bMT(7,2,"Home")),n.R7$(6),n.JRh(n.bMT(13,4,"ViewBill")))}function vn(t,l){if(1&t&&(n.j41(0,"ion-footer"),n.DNE(1,In,5,3,"div",53)(2,hn,14,6,"div",53),n.k0s()),2&t){const o=n.XpG(2);n.R7$(),n.Y8G("ngIf",(null==o.orderInfo?null:o.orderInfo.VEinvoiceStatus)==o.v_einvoice_status.ChuaXacNhan),n.R7$(),n.Y8G("ngIf",(null==o.orderInfo?null:o.orderInfo.VEinvoiceStatus)!=o.v_einvoice_status.ChuaXacNhan)}}function pn(t,l){if(1&t&&(n.qex(0),n.DNE(1,vn,3,2,"ion-footer",5),n.bVm()),2&t){const o=n.XpG();n.R7$(),n.Y8G("ngIf",null==o.orderInfo?null:o.orderInfo.BillId)}}const bn=[{path:"",component:(()=>{var t;class l{constructor(r,e,a,i,d,_){var u,f;this.router=r,this.loadingController=a,this.toastController=i,this.modalController=d,this.animationController=_,this.platform=M.Ii.getPlatform(),this.APP_ROUTE=C._,this.APP_FUNC_FormatMoney=p.xi,this.APP_FUNC_FormatDate=p.Rv,this.APP_FUNC_GetColor_VOrderStatus=p.qM,this.APP_FUNC_RoundNumber=p.Rw,this.v_order_status=I.TL,this.v_einvoice_status=I.XM,this.customerInvoices=[],this.timeout=18e4,this.timeCountdown=0,this.intervalCountdown=null;let h=null!==(u=e.snapshot.params.id)&&void 0!==u?u:"";h&&(this.OrderId=parseInt(h));let v=null!==(f=e.snapshot.params.code)&&void 0!==f?f:"";v&&(this.OrderCode=v)}ngOnInit(){var r=this;this.IsOnInit=!0,(0,g.A)(function*(){(yield(0,x.kU)())&&r.refreshData()})()}ngOnDestroy(){this.IsOnInit=!1,this.destroyTimeout()}ionViewDidEnter(){this.IsOnInit||this.ngOnInit()}ionViewDidLeave(){this.ngOnDestroy()}onIonRefresher(r){this.refreshData(()=>{r.target.complete()})}refreshTimeoutOrder(){clearTimeout(this.timeoutOrder),this.timeoutOrder=setTimeout(()=>{var r,e;this.orderInfo&&[I.TL.DangThanhToan,I.TL.DaThanhToan].includes(null!==(r=null===(e=this.orderInfo)||void 0===e?void 0:e.VOrderStatus)&&void 0!==r?r:0)&&this.refreshOrder()},5e3)}destroyTimeout(){clearTimeout(this.timeoutOrder)}refreshData(r){var e=this;return(0,g.A)(function*(){e.refreshOrder(r)})()}refreshOrder(r){var e=this;return(0,g.A)(function*(){var a=()=>{var i,d,_;e.refreshTimeoutOrder(),[I.TL.DaThanhToan,I.TL.DangSac].includes(null!==(i=null===(d=e.orderInfo)||void 0===d?void 0:d.VOrderStatus)&&void 0!==i?i:0)&&(0,P.KX)({params:{OrderCode:null===(_=e.orderInfo)||void 0===_?void 0:_.OrderCode},callback:u=>{var f;if(null!=u&&u.Succeeded){if(e.chargingSession=(null!==(f=u.Data)&&void 0!==f?f:[]).find(h=>{var v;return[I.jT.KhoiTaoPhienSac,I.jT.DangSac].includes(null!==(v=h.VSessionStatus)&&void 0!==v?v:0)}),e.chargingSession)return}else(0,m.cX)(e.toastController,{},u).then(h=>h.present());e.setTimeCountdown()}})};e.OrderId?(0,O.vp)({loadingController:e.loadingController,params:{OrderId:e.OrderId},callback:i=>{e.response=i,null!=i&&i.Succeeded?(e.orderInfo=i.Data,a()):(0,m.cX)(e.toastController,{},i).then(d=>d.present()),r&&r()}}):e.OrderCode&&(0,O.FS)({loadingController:e.loadingController,params:{OrderCode:e.OrderCode},callback:i=>{e.response=i,null!=i&&i.Succeeded?(e.orderInfo=i.Data,a()):(0,m.cX)(e.toastController,{},i).then(d=>d.present()),r&&r()}})})()}chargingStart(r){var e=this;return(0,g.A)(function*(){var a,i,d;(0,P.aN)({loadingController:e.loadingController,params:{StationCode:null===(a=e.orderInfo)||void 0===a?void 0:a.StationCode,ConnectorId:null===(i=e.orderInfo)||void 0===i?void 0:i.ConnectorId,OrderCode:null===(d=e.orderInfo)||void 0===d?void 0:d.OrderCode},callback:_=>{null!=_&&_.Succeeded?e.router.navigateByUrl(C._.CHARGING_SESSION_DETAIL.replace(":id",_.Data)):(0,m.cX)(e.toastController,{},_).then(u=>u.present())}})})()}sendFeedback(r){var e=this;return(0,g.A)(function*(){var a;(yield e.modalController.create({component:$.l,componentProps:{feedback:{DocType:S.vK.ORDER_INFO,DocId:null===(a=e.orderInfo)||void 0===a?void 0:a.OrderId}},cssClass:"ion-modal-breakpoint",breakpoints:[0,.5,1],initialBreakpoint:1})).present()})()}shareOrder(r){var e=this;return(0,g.A)(function*(){(0,p.HU)(document.getElementById("orderShare")).then(a=>{var i;a&&(0,N.C)(a,`${null===(i=e.orderInfo)||void 0===i?void 0:i.OrderCode}.png`)})})()}changeIsGetBill(r){this.IsGetBill=r.detail.value,this.GetCustomerinvoices()}selectCustomerInvoice(r){this.presentModalCustomerInvoice(r)}editCustomerInvoice(r){var e;this.presentModalAddCustomerInvoice(r,null===(e=this.customerInvoice)||void 0===e?void 0:e.CustomerInvoiceId)}GetCustomerinvoices(){var r=this;return(0,g.A)(function*(){(0,T.Ul)({loadingController:r.loadingController,params:{PageNumber:1,PageSize:100},callback:e=>{var a;if(null!=e&&e.Succeeded)if(r.customerInvoices=null!==(a=e.Data)&&void 0!==a?a:[],r.customerInvoices.length)if(1==r.customerInvoices.length)r.customerInvoice=r.customerInvoices[0];else{var i;r.customerInvoice=null!==(i=r.customerInvoices.filter(d=>d.IsDefault)[0])&&void 0!==i?i:r.customerInvoices[0]}else r.presentModalAddCustomerInvoice()}})})()}GetCustomerinvoice(r){var e=this;return(0,g.A)(function*(){r&&(0,T.kT)({loadingController:e.loadingController,params:{CustomerInvoiceId:r},callback:a=>{null!=a&&a.Succeeded&&(e.customerInvoice=a.Data)}})})()}completeOrder(r){var e=this;return(0,g.A)(function*(){var a;if(null!==(a=e.orderInfo)&&void 0!==a&&a.BillId&&!e.isCompleteOrder)if(e.isCompleteOrder=!0,e.IsGetBill){var i;(0,D.k)({loadingController:e.loadingController,params:Object.assign({},e.customerInvoice,{BillId:null===(i=e.orderInfo)||void 0===i?void 0:i.BillId}),callback:_=>{var u;null!=_&&_.Succeeded?(e.refreshData(),null===(u=e.modalAddCustomerInvoiceSuccessRef)||void 0===u||u.present()):((0,m.cX)(e.toastController,{},_).then(f=>f.present()),e.isCompleteOrder=!1)}})}else{var d;(0,D.o)({loadingController:e.loadingController,params:{BillId:null===(d=e.orderInfo)||void 0===d?void 0:d.BillId},callback:_=>{null!=_&&_.Succeeded?e.refreshData():((0,m.cX)(e.toastController,{},_).then(u=>u.present()),e.isCompleteOrder=!1)}})}})()}cancelOrder(r){var e=this;return(0,g.A)(function*(){var a;(0,m.Yy)(e.modalController,e.animationController,{selectedId:null===(a=e.orderInfo)||void 0===a?void 0:a.OrderId,message:{TitleConfirm:"CancelOrder",TextConfirm:"Confirm"},fnConfirm:i=>{(0,O.rZ)({loadingController:e.loadingController,params:{OrderId:i},callback:d=>{null!=d&&d.Succeeded?e.refreshData():(0,m.cX)(e.toastController,{},d).then(_=>_.present())}})}})})()}presentModalCustomerInvoice(r){var e=this;return(0,g.A)(function*(){var a;const i=yield e.modalController.create({component:E.u,componentProps:{CustomerInvoiceId:null===(a=e.customerInvoice)||void 0===a?void 0:a.CustomerInvoiceId}});i.onDidDismiss().then(d=>{"submit"==d.role&&e.GetCustomerinvoice(d.data)}),i.present()})()}presentModalAddCustomerInvoice(r,e){var a=this;return(0,g.A)(function*(){const i=yield a.modalController.create({component:j.$,componentProps:{CustomerInvoiceId:e}});i.onDidDismiss().then(d=>{"success"==d.role&&a.GetCustomerinvoices()}),i.present()})()}navigateByUrl(r){this.router.navigateByUrl(r)}openDetailBill(r){var e=this;return(0,g.A)(function*(){var a,i;e.router.navigateByUrl(C._.BILL_INFO_DETAIL.replace(":id",null!==(a=null===(i=e.orderInfo)||void 0===i||null===(i=i.BillId)||void 0===i?void 0:i.toString())&&void 0!==a?a:""))})()}openDetailChargingSession(r){var e=this;return(0,g.A)(function*(){var a,i;e.router.navigateByUrl(C._.CHARGING_SESSION_DETAIL.replace(":id",null!==(a=null===(i=e.chargingSession)||void 0===i||null===(i=i.ChargeSessionId)||void 0===i?void 0:i.toString())&&void 0!==a?a:""))})()}getLastUpdateTime(){var r,e,a,i,d;return null!==(r=null!==(e=null===(a=this.orderInfo)||void 0===a?void 0:a.ModifiedDate)&&void 0!==e?e:null===(i=this.orderInfo)||void 0===i?void 0:i.PurchaseDate)&&void 0!==r?r:null===(d=this.orderInfo)||void 0===d?void 0:d.OrderDate}getTimeCountdown(){return V()(this.timeCountdown).format("mm:ss")}setTimeCountdown(){var r;let e=this.getLastUpdateTime(),a=null===(r=this.orderInfo)||void 0===r?void 0:r.ServerTime;if(e&&a){let i=new Date(e).getTime()-new Date(a).getTime()+this.timeout;if(i>0){this.timeCountdown=i,clearInterval(this.intervalCountdown);let d=1e3;this.intervalCountdown=setInterval(()=>{if(this.timeCountdown<=d)return this.timeCountdown=0,void clearInterval(this.intervalCountdown);this.timeCountdown-=d},d)}}}}return(t=l).\u0275fac=function(r){return new(r||t)(n.rXU(R.Ix),n.rXU(R.nX),n.rXU(s.Xi),n.rXU(s.K_),n.rXU(s.W3),n.rXU(s.Hx))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-order-info-detail"]],viewQuery:function(r,e){if(1&r&&n.GBs(J,5),2&r){let a;n.mGM(a=n.lsd())&&(e.modalAddCustomerInvoiceSuccessRef=a.first)}},decls:21,vars:13,consts:[["modalAddCustomerInvoiceSuccess",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","end","class","ion-no-margin",3,"click",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],[1,"ion-modal-small"],[3,"ngSwitch"],[4,"ngSwitchCase"],["slot","end",1,"ion-no-margin",3,"click"],["color","primary",1,"no-opacity"],["src","../../../assets/icon/ion-icon/share.svg"],[1,"container","mb-5"],[1,"text-center","line-height-0","mb-3"],["color","primary","name","crescent"],["id","orderShare",1,"container-order"],[1,"card-order","rounded","bg-white"],[1,"table","table-borderless","m-0"],[1,"border-dashed"],[1,"card-order-detail","rounded","bg-white"],[1,"mt-3","mb-2"],["class","border-top",4,"ngIf"],[1,"border-top"],[1,"pt-3"],[1,"pt-3","text-primary"],[1,"card-order-used","rounded","bg-white","mt-3"],[1,"mb-2","d-flex","justify-content-between"],[1,"card-order-refund","rounded","bg-white","mt-3"],["class","text-primary",4,"ngIf"],[1,"text-primary"],[1,"card-order-exchange","rounded","bg-white","mt-3"],[1,"card-order-einvoice","rounded","bg-white","mt-3"],[1,"mt-5","mb-3","bill-group-radio"],["mode","md",3,"ionChange","value"],["label-placement","end",3,"value"],["class","card-bill rounded bg-white mt-3",4,"ngIf"],[1,"card-bill","rounded","bg-white","mt-3"],[1,"d-flex","align-items-center","justify-content-between"],["size","small","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/chevron-right.svg",1,"fs-4"],["class","table table-borderless m-0",4,"ngIf"],[1,"container","p-4","text-center","container-success"],["src","../../../assets/icon/ion-img/success.svg"],[1,"mt-5"],["color","medium","shape","round","fill","outline","expand","block",3,"click"],[1,"container","py-3"],["color","danger","shape","round","fill","outline","expand","block",3,"click"],["color","primary","expand","block","shape","round",3,"click"],[1,"mb-3","text-center"],[1,"row","align-items-center"],[1,"col","pr-2"],[1,"col-auto","pl-2"],["color","warning","shape","round","fill","outline","expand","block",3,"click"],["class","container py-3",4,"ngIf"],["color","primary","shape","round","expand","block",3,"click"],[1,"d-flex","align-items-center"],[1,"pr-3"],["color","primary",3,"click"],["name","home-outline",1,"fs-24"],[1,"flex-grow-1"],["color","primary","shape","round","fill","outline","expand","block",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/view-circle.svg",1,"fs-4"]],template:function(r,e){if(1&r){const a=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.DNE(7,A,6,3,"ion-buttons",3),n.k0s()(),n.j41(8,"ion-content")(9,"ion-refresher",4),n.bIt("ionRefresh",function(d){return n.eBV(a),n.Njj(e.onIonRefresher(d))}),n.nrm(10,"ion-refresher-content"),n.k0s(),n.DNE(11,rn,4,2,"ng-container",5),n.j41(12,"ion-modal",6,0),n.DNE(14,an,13,9,"ng-template"),n.k0s()(),n.qex(15,7),n.DNE(16,ln,7,3,"ng-container",8)(17,un,3,2,"ng-container",8)(18,fn,2,1,"ng-container",8)(19,mn,7,3,"ng-container",8)(20,pn,2,1,"ng-container",8),n.bVm()}2&r&&(n.R7$(3),n.Y8G("defaultHref",e.APP_ROUTE.DEFAULT),n.R7$(2),n.JRh(n.bMT(6,10,"OrderInfo")),n.R7$(2),n.Y8G("ngIf",n.lJ4(12,B).includes(e.platform)),n.R7$(4),n.Y8G("ngIf",null==e.response?null:e.response.Succeeded),n.R7$(4),n.Y8G("ngSwitch",null==e.orderInfo?null:e.orderInfo.VOrderStatus),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.DangThanhToan),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.DaThanhToan),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.DangSac),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.KhongThanhCong),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.HoanTat||e.v_order_status.DaHoanTien||e.v_order_status.DaYeuCauHoanTien))},dependencies:[b.bT,b.ux,b.e1,s.Jm,s.QW,s.ZB,s.W9,s.M0,s.eU,s.iq,s.KW,s.he,s.KO,s.f0,s.To,s.Ki,s.w2,s.BC,s.ai,s.Sb,s.Je,s.el,y.D9],styles:['ion-spinner[_ngcontent-%COMP%]{width:3rem;height:3rem}.table[_ngcontent-%COMP%]{table-layout:fixed}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}.card-order[_ngcontent-%COMP%]{padding:1rem}.card-order.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.card-order-detail[_ngcontent-%COMP%]{padding:1rem}.card-order-detail.rounded[_ngcontent-%COMP%]{border-top-left-radius:0!important;border-top-right-radius:0!important;border-bottom-left-radius:1.5rem!important;border-bottom-right-radius:1.5rem!important}.card-order-used[_ngcontent-%COMP%], .card-order-exchange[_ngcontent-%COMP%], .card-order-refund[_ngcontent-%COMP%], .card-order-einvoice[_ngcontent-%COMP%]{padding:1rem}.card-order-used.rounded[_ngcontent-%COMP%], .card-order-exchange.rounded[_ngcontent-%COMP%], .card-order-refund.rounded[_ngcontent-%COMP%], .card-order-einvoice.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-bill[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-size:.875rem}.bill-group-radio[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0 2rem .5rem 0}hr.border-dashed[_ngcontent-%COMP%]{margin:0;position:relative;z-index:1}hr.border-dashed[_ngcontent-%COMP%]:before, hr.border-dashed[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;z-index:2;bottom:0;margin-bottom:-1rem;width:2rem;height:2rem;border-radius:50%;background-color:var(--ion-background-color-primary)}hr.border-dashed[_ngcontent-%COMP%]:before{left:-1rem}hr.border-dashed[_ngcontent-%COMP%]:after{right:-1rem}.container-success[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3.5rem;margin:1rem auto}']}),l})()}];let Rn=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[R.iI.forChild(bn),R.iI]}),l})();var Cn=c(3890);let On=(()=>{var t;class l{}return(t=l).\u0275fac=function(r){return new(r||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[b.MD,k.YN,s.bv,Rn,Cn.x]}),l})()}}]);