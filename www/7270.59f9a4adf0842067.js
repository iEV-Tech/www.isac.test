"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7270],{7270:(H,b,s)=>{s.r(b),s.d(b,{FeedbackDetailPageModule:()=>J});var _=s(177),h=s(9417),r=s(7896),f=s(7625),d=s(467),k=s(2254),p=s(5972);const v=function(){var l=(0,d.A)(function*(i){var o,a,n;i.params=i.params||{},(0,p.Ll)({url:"api/FeedbackComment/create",params:{FeedbackId:null!==(o=i.params.FeedbackId)&&void 0!==o?o:null,PId:null!==(a=i.params.PId)&&void 0!==a?a:null,Comment:null!==(n=i.params.Comment)&&void 0!==n?n:null},success:t=>{"function"==typeof i.callback&&i.callback(t.data||null)},error:t=>{var c;"function"==typeof i.callback&&i.callback(null==t||null===(c=t.response)||void 0===c?void 0:c.data),console.error(t)},loading:i.loading})});return function(o){return l.apply(this,arguments)}}(),F=function(){var l=(0,d.A)(function*(i){var o,a,n;i.params=i.params||{},(0,p.IH)({url:"api/FeedbackComment/update",params:{FeedbackId:null!==(o=i.params.FeedbackId)&&void 0!==o?o:null,PId:null!==(a=i.params.PId)&&void 0!==a?a:null,Comment:null!==(n=i.params.Comment)&&void 0!==n?n:null},success:t=>{"function"==typeof i.callback&&i.callback(t.data||null)},error:t=>{var c;"function"==typeof i.callback&&i.callback(null==t||null===(c=t.response)||void 0===c?void 0:c.data),console.error(t)},loading:i.loading})});return function(o){return l.apply(this,arguments)}}(),P=function(){var l=(0,d.A)(function*(i){var o,a,n;i.params=i.params||{},(0,p.hm)({url:"api/FeedbackComment/get-feedbackcommentbyfbid",params:{FeedbackId:null!==(o=i.params.FeedbackId)&&void 0!==o?o:null,PageNumber:null!==(a=i.params.PageNumber)&&void 0!==a?a:1,PageSize:null!==(n=i.params.PageSize)&&void 0!==n?n:10},success:t=>{"function"==typeof i.callback&&i.callback(t.data||null)},error:t=>{var c;"function"==typeof i.callback&&i.callback(null==t||null===(c=t.response)||void 0===c?void 0:c.data),console.error(t)},loading:i.loading})});return function(o){return l.apply(this,arguments)}}(),I=function(){var l=(0,d.A)(function*(i){i.params=i.params||{},(0,p.sj)({url:`api/FeedbackComment/delete/${i.params.FbCommentId}`,params:{},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var a;"function"==typeof i.callback&&i.callback(null==o||null===(a=o.response)||void 0===a?void 0:a.data),console.error(o)},loading:i.loading})});return function(o){return l.apply(this,arguments)}}();var $=s(6539),D=s(8517),u=s(8344),M=s(8833),e=s(4438),R=s(4842);const C=l=>({$implicit:l});function O(l,i){1&l&&(e.j41(0,"div",6),e.nrm(1,"ion-spinner",7),e.k0s())}function y(l,i){if(1&l&&(e.j41(0,"small",22),e.EFF(1),e.k0s()),2&l){const o=e.XpG(2);e.R7$(),e.JRh(o.feedback.FbCatgTitle)}}function G(l,i){if(1&l&&(e.j41(0,"small"),e.EFF(1),e.k0s()),2&l){const o=e.XpG(2);e.R7$(),e.SpI("(",o.feedback.NumComment,")")}}function j(l,i){1&l&&(e.j41(0,"div",23),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&l&&(e.R7$(),e.JRh(e.bMT(2,1,"NoComment")))}function T(l,i){if(1&l&&e.eu8(0,26),2&l){const o=i.$implicit;e.XpG(3);const a=e.sdS(12);e.Y8G("ngTemplateOutlet",a)("ngTemplateOutletContext",e.eq3(2,C,o))}}function x(l,i){if(1&l&&(e.j41(0,"ion-list",24)(1,"ul"),e.DNE(2,T,1,4,"ng-container",25),e.k0s()()),2&l){const o=e.XpG(2);e.R7$(2),e.Y8G("ngForOf",o.filterComments())}}function N(l,i){if(1&l){const o=e.RV6();e.j41(0,"ion-infinite-scroll",27),e.bIt("ionInfinite",function(n){e.eBV(o);const t=e.XpG(2);return e.Njj(t.onIonInfinite(n))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function X(l,i){if(1&l){const o=e.RV6();e.qex(0),e.j41(1,"div",8)(2,"h6"),e.DNE(3,y,2,1,"small",9),e.k0s(),e.j41(4,"h4"),e.EFF(5),e.k0s(),e.nrm(6,"div",10),e.k0s(),e.j41(7,"div",11)(8,"div",12)(9,"div",13)(10,"h5"),e.EFF(11),e.nI1(12,"translate"),e.DNE(13,G,2,1,"small",5),e.k0s(),e.j41(14,"ion-item",14)(15,"ion-input",15),e.nI1(16,"translate"),e.bIt("ionChange",function(n){e.eBV(o);const t=e.XpG();return e.Njj(t.changeComment(n))})("keyup",function(n){e.eBV(o);const t=e.XpG();return e.Njj(t.keyupComment(n))}),e.k0s(),e.j41(17,"ion-button",16),e.bIt("click",function(n){e.eBV(o);const t=e.XpG();return e.Njj(t.sendComment(n,t.comment))}),e.nrm(18,"ion-icon",17),e.k0s()()()(),e.j41(19,"div",12)(20,"div",18),e.DNE(21,j,3,3,"div",19)(22,x,3,1,"ion-list",20),e.k0s()()(),e.DNE(23,N,2,0,"ion-infinite-scroll",21),e.bVm()}if(2&l){let o;const a=e.XpG();e.R7$(3),e.Y8G("ngIf",a.feedback.FbCatgId),e.R7$(2),e.JRh(a.feedback.Title),e.R7$(),e.Y8G("innerHTML",a.feedback.Content,e.npT),e.R7$(5),e.SpI("",e.bMT(12,10,"Comment")," "),e.R7$(2),e.Y8G("ngIf",a.feedback.NumComment),e.R7$(2),e.FS9("placeholder",e.bMT(16,12,"EnterComment")),e.Y8G("value",null!==(o=a.comment.Comment)&&void 0!==o?o:""),e.R7$(6),e.Y8G("ngIf",!(null!=a.comments&&a.comments.length)),e.R7$(),e.Y8G("ngIf",a.comments.length),e.R7$(),e.Y8G("ngIf",a.paging.active&&!a.paging.loading)}}function E(l,i){if(1&l){const o=e.RV6();e.qex(0),e.j41(1,"ion-item",30)(2,"ion-input",31),e.nI1(3,"translate"),e.bIt("ionChange",function(n){e.eBV(o);const t=e.XpG(2);return e.Njj(t.changeComment2(n))})("keyup",function(n){e.eBV(o);const t=e.XpG(2);return e.Njj(t.keyupComment2(n))}),e.k0s(),e.j41(4,"ion-button",32),e.bIt("click",function(n){e.eBV(o);const t=e.XpG(2);return e.Njj(t.sendComment(n,t.comment2))}),e.nrm(5,"ion-icon",17),e.k0s()(),e.bVm()}if(2&l){let o;const a=e.XpG(2);e.R7$(2),e.FS9("placeholder",e.bMT(3,3,"EnterComment")),e.Y8G("autofocus",!0)("value",null!==(o=a.comment2.Comment)&&void 0!==o?o:"")}}function S(l,i){if(1&l){const o=e.RV6();e.qex(0),e.j41(1,"ul")(2,"li")(3,"ion-item",30)(4,"ion-input",31),e.nI1(5,"translate"),e.bIt("ionChange",function(n){e.eBV(o);const t=e.XpG(3);return e.Njj(t.changeComment2(n))})("keyup",function(n){e.eBV(o);const t=e.XpG(3);return e.Njj(t.keyupComment2(n))}),e.k0s(),e.j41(6,"ion-button",32),e.bIt("click",function(n){e.eBV(o);const t=e.XpG(3);return e.Njj(t.sendComment(n,t.comment2))}),e.nrm(7,"ion-icon",17),e.k0s()()()(),e.bVm()}if(2&l){let o;const a=e.XpG(3);e.R7$(4),e.FS9("placeholder",e.bMT(5,3,"EnterReply")),e.Y8G("autofocus",!0)("value",null!==(o=a.comment2.Comment)&&void 0!==o?o:"")}}function V(l,i){if(1&l){const o=e.RV6();e.qex(0),e.j41(1,"ion-item-sliding")(2,"ion-item")(3,"ion-thumbnail",1),e.nrm(4,"img",33),e.k0s(),e.j41(5,"ion-label")(6,"div",34),e.EFF(7),e.j41(8,"small"),e.EFF(9),e.k0s()(),e.j41(10,"div",35),e.EFF(11),e.k0s(),e.j41(12,"div",36)(13,"small",37),e.bIt("click",function(n){e.eBV(o);const t=e.XpG().$implicit,c=e.XpG();return e.Njj(c.replyComment(n,t.FbCommentId))}),e.EFF(14),e.nI1(15,"translate"),e.k0s()()()(),e.j41(16,"ion-item-options",38)(17,"ion-item-option",39),e.nI1(18,"translate"),e.bIt("click",function(n){e.eBV(o);const t=e.XpG().$implicit,c=e.XpG();return e.Njj(c.editComment(n,t.FbCommentId))}),e.nrm(19,"ion-icon",40),e.k0s(),e.j41(20,"ion-item-option",41),e.nI1(21,"translate"),e.bIt("click",function(n){e.eBV(o);const t=e.XpG().$implicit,c=e.XpG();return e.Njj(c.deleteComment(n,t.FbCommentId))}),e.nrm(22,"ion-icon",42),e.k0s()()(),e.qex(23,28),e.DNE(24,S,8,5,"ng-container",29),e.bVm()()}if(2&l){let o;const a=e.XpG().$implicit,n=e.XpG();e.R7$(7),e.JRh(null!==(o=a.CustomerFullname)&&void 0!==o?o:"[T\xf4i]"),e.R7$(2),e.JRh(n.APP_FUNC_FormatDate(a.createddate)),e.R7$(2),e.JRh(a.Comment),e.R7$(3),e.JRh(e.bMT(15,8,"Reply")),e.R7$(3),e.Y8G("title",e.bMT(18,10,"Edit")),e.R7$(3),e.Y8G("title",e.bMT(21,12,"Delete")),e.R7$(3),e.Y8G("ngSwitch",n.comment2.PId==a.FbCommentId),e.R7$(),e.Y8G("ngSwitchCase",!0)}}function A(l,i){if(1&l&&e.eu8(0,26),2&l){const o=i.$implicit;e.XpG(2);const a=e.sdS(12);e.Y8G("ngTemplateOutlet",a)("ngTemplateOutletContext",e.eq3(2,C,o))}}function Y(l,i){if(1&l&&(e.j41(0,"li"),e.qex(1,28),e.DNE(2,E,6,5,"ng-container",29)(3,V,25,14,"ng-container",29),e.bVm(),e.j41(4,"ul"),e.DNE(5,A,1,4,"ng-container",25),e.k0s()()),2&l){const o=i.$implicit,a=e.XpG();e.R7$(),e.Y8G("ngSwitch",a.comment2.FbCommentId==o.FbCommentId),e.R7$(),e.Y8G("ngSwitchCase",!0),e.R7$(),e.Y8G("ngSwitchCase",!1),e.R7$(2),e.Y8G("ngForOf",a.filterComments(o.FbCommentId))}}const B=[{path:"",component:(()=>{var l;class i{constructor(a,n,t){var c,m=this;this.activatedRoute=a,this.loadingController=n,this.toastController=t,this.comment={},this.comment2={},this.comments=[],this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.APP_ROUTE=M._,this.APP_FUNC_FormatDate=D.Rv;let g=null!==(c=a.snapshot.params.id)&&void 0!==c?c:"";g&&(this.FeedbackId=parseFloat(g)),(0,d.A)(function*(){m.loading=yield m.loadingController.create({message:""})})()}ngOnInit(){var a=this;(0,d.A)(function*(){(yield(0,$.kU)())&&a.refreshData()})()}onIonRefresher(a){this.refreshData(()=>{a.target.complete()})}onIonInfinite(a){this.loadMore(()=>{a.target.complete()})}resetData(){this.comments.length=0}pushData(a){this.comments=this.comments.concat(a)}refreshData(a){this.FeedbackId&&(this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(a),(0,k.C)({loading:n=>{var t,c;n?null===(t=this.loading)||void 0===t||t.present():null===(c=this.loading)||void 0===c||c.dismiss()},params:{FeedbackId:this.FeedbackId},callback:n=>{this.response=n,null!=n&&n.Succeeded?this.feedback=n.Data:(0,u.cX)(this.toastController,{},n).then(t=>t.present()),a&&a()}}))}loadMore(a){this.paging.page+=1,this.loadData_Paging(a)}searchChange(a){this.filter.search=a.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(a,n){this.paging.sortfield=a||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(a){var n=this;return(0,d.A)(function*(){n.paging.loading=!0,P({loading:t=>{var c,m;t?null===(c=n.loading)||void 0===c||c.present():null===(m=n.loading)||void 0===m||m.dismiss()},params:{FeedbackId:n.FeedbackId,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:t=>{var c;n.response=t,null!=t&&t.Succeeded?n.pushData(null!==(c=t.Data)&&void 0!==c?c:[]):(0,u.cX)(n.toastController,{},t).then(m=>m.present()),n.paging.loading=!1,n.paging.active=!(null==t||!t.HasNextPage),a&&a()}})})()}filterComments(a){return a?this.comments.filter(n=>n.PId==a).sort((n,t)=>{var c,m;return(null!==(c=t.FbCommentId)&&void 0!==c?c:0)-(null!==(m=n.FbCommentId)&&void 0!==m?m:0)}):this.comments.filter(n=>!n.PId).sort((n,t)=>{var c,m;return(null!==(c=t.FbCommentId)&&void 0!==c?c:0)-(null!==(m=n.FbCommentId)&&void 0!==m?m:0)})}keyupComment(a){var n=this;return(0,d.A)(function*(){13==a.keyCode&&n.sendComment(a,n.comment)})()}changeComment(a){var n=this;return(0,d.A)(function*(){var t;n.comment.Comment=null!==(t=a.detail.value)&&void 0!==t?t:""})()}keyupComment2(a){var n=this;return(0,d.A)(function*(){13==a.keyCode&&n.sendComment(a,n.comment2)})()}changeComment2(a){var n=this;return(0,d.A)(function*(){var t;n.comment2.Comment=null!==(t=a.detail.value)&&void 0!==t?t:""})()}replyComment(a,n){var t=this;return(0,d.A)(function*(){t.comment2={PId:n}})()}editComment(a,n){var t=this;return(0,d.A)(function*(){var c;t.comment2=null!==(c=t.comments.find(m=>m.FbCommentId==n))&&void 0!==c?c:{}})()}sendComment(a,n){var t=this;return(0,d.A)(function*(){n.Comment&&(n.FbCommentId?F({loading:c=>{var m,g;c?null===(m=t.loading)||void 0===m||m.present():null===(g=t.loading)||void 0===g||g.dismiss()},params:{FeedbackId:t.FeedbackId,FbCommentId:n.FbCommentId,PId:n.PId,Comment:n.Comment},callback:c=>{null!=c&&c.Succeeded?(t.comments.filter(m=>m.FbCommentId!=n.FbCommentId).forEach(m=>n),t.comment={},t.comment2={}):(0,u.cX)(t.toastController,{},c).then(m=>m.present())}}):v({loading:c=>{var m,g;c?null===(m=t.loading)||void 0===m||m.present():null===(g=t.loading)||void 0===g||g.dismiss()},params:{FeedbackId:t.FeedbackId,PId:n.PId,Comment:n.Comment},callback:c=>{null!=c&&c.Succeeded?(n.FbCommentId=c.Data,t.comments.push(n),t.comment={},t.comment2={}):(0,u.cX)(t.toastController,{},c).then(m=>m.present())}}))})()}deleteComment(a,n){var t=this;return(0,d.A)(function*(){I({loading:c=>{var m,g;c?null===(m=t.loading)||void 0===m||m.present():null===(g=t.loading)||void 0===g||g.dismiss()},params:{FbCommentId:n},callback:c=>{null!=c&&c.Succeeded?t.comments=t.comments.filter(m=>m.FbCommentId!=n&&m.PId!=n):(0,u.cX)(t.toastController,{},c).then(m=>{m.present()})}})})()}}return(l=i).\u0275fac=function(a){return new(a||l)(e.rXU(f.nX),e.rXU(r.Xi),e.rXU(r.K_))},l.\u0275cmp=e.VBU({type:l,selectors:[["app-feedback-detail"]],decls:13,vars:4,consts:[["templateCommentLI",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-4"],["class","text-muted",4,"ngIf"],[3,"innerHTML"],[1,"container","container-comment","mt-5","mb-5"],[1,"row","mb-4"],[1,"col-12","col-lg-8"],["lines","full","mode","ios"],[3,"ionChange","keyup","placeholder","value"],["slot","end","mode","ios","size","default","shape","clear",3,"click"],["name","paper-plane-outline"],[1,"col-12","col-lg-8","pl-0"],["class","p-3 text-muted small",4,"ngIf"],["lines","none",4,"ngIf"],[3,"ionInfinite",4,"ngIf"],[1,"text-muted"],[1,"p-3","text-muted","small"],["lines","none"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[3,"ngSwitch"],[4,"ngSwitchCase"],["lines","full"],[3,"ionChange","keyup","placeholder","autofocus","value"],["slot","end","mode","ios","size","large","shape","clear",3,"click"],["src","../../../assets/image/favicon.svg"],[1,"comment-name"],[1,"comment-content"],[1,"comment-action"],[3,"click"],["side","end"],["color","secondary",3,"click","title"],["name","create-outline"],["color","danger",3,"click","title"],["name","trash-outline"]],template:function(a,n){if(1&a){const t=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()(),e.j41(6,"ion-content")(7,"ion-refresher",3),e.bIt("ionRefresh",function(m){return e.eBV(t),e.Njj(n.onIonRefresher(m))}),e.nrm(8,"ion-refresher-content"),e.k0s(),e.DNE(9,O,2,0,"div",4)(10,X,24,14,"ng-container",5),e.k0s(),e.DNE(11,Y,6,4,"ng-template",null,0,e.C5r)}if(2&a){let t;e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.FEEDBACK),e.R7$(2),e.JRh(null!==(t=null==n.feedback?null:n.feedback.FbCatgTitle)&&void 0!==t?t:null==n.feedback?null:n.feedback.Title),e.R7$(4),e.Y8G("ngIf",!n.response),e.R7$(),e.Y8G("ngIf",n.feedback)}},dependencies:[_.Sq,_.bT,_.T3,_.ux,_.e1,r.Jm,r.QW,r.W9,r.eU,r.iq,r.Ax,r.Hp,r.$w,r.uz,r.LU,r.CE,r.A7,r.he,r.nf,r.To,r.Ki,r.w2,r.Zx,r.BC,r.ai,r.Gw,r.el,R.D9],styles:[".container-comment[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:block;padding:0;margin:1rem 0}.container-comment[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:empty{display:none}.container-comment[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;margin:0 0 .5rem}.container-comment[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:4rem}.container-comment[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--ion-item-background: transparent}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: transparent}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 3rem;--border-radius: 50%;margin-top:0;margin-bottom:0;align-self:flex-start}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .comment-name[_ngcontent-%COMP%]{line-height:1.5rem;font-weight:500}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .comment-name[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{margin-left:.5rem;font-size:.75rem;color:var(--ion-color-medium);vertical-align:top}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .comment-content[_ngcontent-%COMP%]{line-height:1.5rem;white-space:wrap;text-align:justify}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%]{line-height:1.5rem}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{line-height:1;vertical-align:middle;font-size:.75rem;color:var(--ion-color-primary);cursor:pointer}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;min-height:auto;margin:0;font-size:1rem;--background: var(--ion-color-secondary);--border-radius: .5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0}.container-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.75rem}.container-comment[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]{text-transform:initial}.container-comment[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}"]}),i})()}];let z=(()=>{var l;class i{}return(l=i).\u0275fac=function(a){return new(a||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[f.iI.forChild(B),f.iI]}),i})();var U=s(3890);let J=(()=>{var l;class i{}return(l=i).\u0275fac=function(a){return new(a||l)},l.\u0275mod=e.$C({type:l}),l.\u0275inj=e.G2t({imports:[_.MD,h.YN,r.bv,z,U.x]}),i})()}}]);