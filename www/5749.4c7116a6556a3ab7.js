"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5749],{5354:(h,R,n)=>{n.d(R,{G:()=>m,U:()=>c});var d=n(467),P=n(5972);const c=function(){var g=(0,d.A)(function*(o){var t,a,k;o.params=o.params||{},(0,P.hm)({url:"api/Reflookup/get-byname",params:{ObjectName:null!==(t=o.params.ObjectName)&&void 0!==t?t:null,PageNumber:null!==(a=o.params.PageNumber)&&void 0!==a?a:1,PageSize:null!==(k=o.params.PageSize)&&void 0!==k?k:10},success:i=>{"function"==typeof o.callback&&o.callback(i.data||null)},error:i=>{var v;"function"==typeof o.callback&&o.callback(null==i||null===(v=i.response)||void 0===v?void 0:v.data),console.error(i)},loading:o.loading,loadingController:o.loadingController})});return function(t){return g.apply(this,arguments)}}(),m=function(){var g=(0,d.A)(function*(o){o.params=o.params||{},(0,P.hm)({url:`api/Reflookup/get/${o.params.LookupId}`,success:t=>{"function"==typeof o.callback&&o.callback(t.data||null)},error:t=>{var a;"function"==typeof o.callback&&o.callback(null==t||null===(a=t.response)||void 0===a?void 0:a.data),console.error(t)},loading:o.loading,loadingController:o.loadingController})});return function(t){return g.apply(this,arguments)}}()},5749:(h,R,n)=>{n.r(R),n.d(R,{ReflookupPageModule:()=>M});var d=n(177),P=n(9417),c=n(791),m=n(7625),g=n(467),o=n(5354),t=n(8517),a=n(4438);const k=()=>[],i=()=>({});function v(l,s){if(1&l&&(a.j41(0,"ion-content")(1,"textarea",1),a.EFF(2),a.k0s()()),2&l){let r;const e=a.XpG();a.R7$(2),a.Lme("",(null!==(r=(null!==(r=null==e.response?null:e.response.Data)&&void 0!==r?r:a.lJ4(2,k))[0])&&void 0!==r?r:a.lJ4(3,i)).Objectname," = ",e.renderLookup(null==e.response?null:e.response.Data),"")}}const C=[{path:"",component:(()=>{var l;class s{constructor(e,u){var f,p;this.loadingController=u,this.params={},this.params.id=null!==(f=e.snapshot.queryParamMap.get("id"))&&void 0!==f?f:"",this.params.key=null!==(p=e.snapshot.queryParamMap.get("key"))&&void 0!==p?p:""}ngOnInit(){var e=this;(0,g.A)(function*(){e.params.id?(0,o.G)({loadingController:e.loadingController,params:{LookupId:e.params.id},callback:u=>{e.response=u}}):e.params.key&&(0,o.U)({loadingController:e.loadingController,params:{ObjectName:e.params.key,PageNumber:1,PageSize:1e3},callback:u=>{e.response=u}})})()}renderLookup(e){let u={};return(null!=e?e:[]).forEach(f=>{var p;u[(0,t.Kr)(null===(p=f.Objectvalue)||void 0===p?void 0:p.split(" ").map(y=>y.charAt(0).toUpperCase()+y.slice(1)).join(" ")).replace(/\s+/g,"")]=f.LookupId}),u._data=e,this.JSONstringify(u)}JSONstringify(e){return JSON.stringify(null!=e?e:{},null,2)}}return(l=s).\u0275fac=function(e){return new(e||l)(a.rXU(m.nX),a.rXU(c.Xi))},l.\u0275cmp=a.VBU({type:l,selectors:[["app-reflookup"]],decls:5,vars:1,consts:[[4,"ngIf"],[1,"form-control","h-100",2,"resize","none"]],template:function(e,u){1&e&&(a.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),a.EFF(3,"Ref Lookup"),a.k0s()()(),a.DNE(4,v,3,4,"ion-content",0)),2&e&&(a.R7$(4),a.Y8G("ngIf",null==u.response?null:u.response.Succeeded))},dependencies:[d.bT,c.W9,c.eU,c.BC,c.ai]}),s})()}];let b=(()=>{var l;class s{}return(l=s).\u0275fac=function(e){return new(e||l)},l.\u0275mod=a.$C({type:l}),l.\u0275inj=a.G2t({imports:[m.iI.forChild(C),m.iI]}),s})(),M=(()=>{var l;class s{}return(l=s).\u0275fac=function(e){return new(e||l)},l.\u0275mod=a.$C({type:l}),l.\u0275inj=a.G2t({imports:[d.MD,P.YN,c.bv,b]}),s})()}}]);