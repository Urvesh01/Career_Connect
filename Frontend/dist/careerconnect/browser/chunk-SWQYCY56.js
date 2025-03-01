import{n as X}from"./chunk-AJFSSVMH.js";import{S as J,a as U,c as z,fa as P,ga as V,ha as K,ia as T,na as L,oa as I}from"./chunk-TMBS6J6O.js";import{D as H,E as B,M as A,x as q,z as R}from"./chunk-5NUTWOLN.js";import{Hb as D,Ib as l,La as x,Mb as E,Sb as f,Tb as u,Vb as v,Wb as C,Xb as y,cc as _,dc as O,ec as g,ia as h,ib as o,ic as p,ja as w,kc as d,lc as s,na as F,oa as Q,pc as S,qc as M,tb as j,ub as $,wc as N,xb as k,za as b,zb as c}from"./chunk-7423FXEI.js";var Z=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,ee={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},G=(()=>{class e extends L{name="card";theme=Z;classes=ee;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var te=["header"],ne=["title"],ae=["subtitle"],ie=["content"],re=["footer"],oe=["*",[["p-header"]],[["p-footer"]]],le=["*","p-header","p-footer"];function ce(e,r){e&1&&y(0)}function pe(e,r){if(e&1&&(f(0,"div",8),g(1,1),c(2,ce,1,0,"ng-container",6),u()),e&2){let t=_();o(2),l("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function de(e,r){if(e&1&&(v(0),S(1),C()),e&2){let t=_(2);o(),M(t.header)}}function se(e,r){e&1&&y(0)}function me(e,r){if(e&1&&(f(0,"div",9),c(1,de,2,1,"ng-container",10)(2,se,1,0,"ng-container",6),u()),e&2){let t=_();o(),l("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),o(),l("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function fe(e,r){if(e&1&&(v(0),S(1),C()),e&2){let t=_(2);o(),M(t.subheader)}}function ue(e,r){e&1&&y(0)}function _e(e,r){if(e&1&&(f(0,"div",11),c(1,fe,2,1,"ng-container",10)(2,ue,1,0,"ng-container",6),u()),e&2){let t=_();o(),l("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),o(),l("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function ye(e,r){e&1&&y(0)}function he(e,r){e&1&&y(0)}function ge(e,r){if(e&1&&(f(0,"div",12),g(1,2),c(2,he,1,0,"ng-container",6),u()),e&2){let t=_();o(2),l("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Te=(()=>{class e extends X{header;subheader;set style(t){J(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=x(null);_componentStyle=Q(G);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=j({type:e,selectors:[["p-card"]],contentQueries:function(i,n,m){if(i&1&&(p(m,P,5),p(m,V,5),p(m,te,4),p(m,ne,4),p(m,ae,4),p(m,ie,4),p(m,re,4),p(m,K,4)),i&2){let a;d(a=s())&&(n.headerFacet=a.first),d(a=s())&&(n.footerFacet=a.first),d(a=s())&&(n.headerTemplate=a.first),d(a=s())&&(n.titleTemplate=a.first),d(a=s())&&(n.subtitleTemplate=a.first),d(a=s())&&(n.contentTemplate=a.first),d(a=s())&&(n.footerTemplate=a.first),d(a=s())&&(n.templates=a)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[N([G]),k],ngContentSelectors:le,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,n){i&1&&(O(oe),f(0,"div",0),c(1,pe,3,1,"div",1),f(2,"div",2),c(3,me,3,2,"div",3)(4,_e,3,2,"div",4),f(5,"div",5),g(6),c(7,ye,1,0,"ng-container",6),u(),c(8,ge,3,1,"div",7),u()()),i&2&&(E(n.styleClass),l("ngClass","p-card p-component")("ngStyle",n._style()),D("data-pc-name","card"),o(),l("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),o(2),l("ngIf",n.header||n.titleTemplate||n._titleTemplate),o(),l("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),o(3),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),o(),l("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[A,q,R,B,H,T],encapsulation:2,changeDetection:0})}return e})(),Ne=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=$({type:e});static \u0275inj=w({imports:[Te,T,T]})}return e})();var W=class e{constructor(r){this.http=r}accountSid=I.ACCOUNT_SID;authToken=I.AUTH_TOKEN;twilioUrl=`https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`;sendMessage(r,t){let i=new URLSearchParams;i.set("To",`whatsapp:${r}`),i.set("From","whatsapp:+14155238886"),i.set("ContentSid","HXb5b62575e6e4ff6129ad7c8efe1f983e"),i.set("ContentVariables",JSON.stringify(t));let n=new U({Authorization:"Basic "+btoa(`${this.accountSid}:${this.authToken}`),"Content-Type":"application/x-www-form-urlencoded"});return this.http.post(this.twilioUrl,i.toString(),{headers:n})}static \u0275fac=function(t){return new(t||e)(F(z))};static \u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})};export{Te as a,Ne as b,W as c};
