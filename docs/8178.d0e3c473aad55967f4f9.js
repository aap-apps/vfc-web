(self.webpackChunkvfc_web=self.webpackChunkvfc_web||[]).push([[8178],{8178:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CsfUploadPageModule:()=>f});var o=n(6274),c=n(4988),s=n(5401),r=n(3991),i=n(3606),a=n(1887);let l=(()=>{class e{constructor(e){this.http=e}postFile(e,t){let n=new FormData;n.append("file",t),this.http.post(e,n).subscribe(e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(a.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const p=[{path:"",component:(()=>{class e{constructor(e){this.apiService=e,this.filePath=""}getFilePath(e){console.log(e.target.files[0]),this.apiService.postFile("https://fournotone.com/csvtovcf/uploadCsv",e.target.files[0])}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(l))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-csf-upload"]],decls:6,vars:1,consts:[["accept",".csv","type","file",3,"ngModel","ngModelChange","change"]],template:function(e,t){1&e&&(i.TgZ(0,"ion-header"),i.TgZ(1,"ion-toolbar"),i.TgZ(2,"ion-title"),i._uU(3,"csf-upload"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(4,"ion-content"),i.TgZ(5,"input",0),i.NdJ("ngModelChange",function(e){return t.filePath=e})("change",function(e){return t.getFilePath(e)}),i.qZA(),i.qZA()),2&e&&(i.xp6(5),i.Q6J("ngModel",t.filePath))},directives:[s.Gu,s.sr,s.wd,s.W2,c.Fj,c.JJ,c.On],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez,c.u5,s.Pc,u]]}),e})()}}]);