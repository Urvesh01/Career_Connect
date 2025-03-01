import{$ as Rt,C as qo,D as Go,G as Zn,K as Qo,O as ue,Q as Yn,X as Zo,aa as A,g as Le,ha as Yo,i as Je,ia as Se,ka as Et,la as q,ma as Xe,na as U,p as Wo,v as Ke,z as Qn}from"./chunk-TMBS6J6O.js";import{D as jo,E as Bo,M as Ye,N as zo,O as ln,P as Ct,Q as Ho,R as Vo,a as an,b as Oo,c as _o,d as x,e as ko,f as St,g as Po,h as Lo,i as wt,w as No,x as Fo,z as Uo}from"./chunk-5NUTWOLN.js";import{$ as Q,$a as po,$c as yt,A as C,Aa as no,Ab as zn,B as Zt,Ba as xe,Bb as Co,C as j,Ca as ro,D as ht,Db as Hn,E as Qr,Ea as oo,Eb as Ro,F as _n,Fa as oe,Fb as Vn,Ga as pe,Gb as Wn,Ha as Nn,Hb as Y,Ia as ie,Ib as T,Ja as De,Jb as Eo,Kb as Jt,La as $e,Lb as Io,M as Me,Mb as qe,N as Be,Na as io,O as ze,Oa as Fn,Pa as so,Pc as sn,Qa as se,R as kn,S as He,Sa as Un,Sb as Ge,T as Yt,Ta as ao,Tb as Qe,Tc as Ze,U as ye,Ua as lo,Ub as ce,V as Pn,Va as gt,Vb as Kt,W as Zr,Wa as Ve,Wb as Xt,Wc as xo,X as Yr,Xa as We,Xb as To,Xc as R,Ya as co,Yc as Do,Za as uo,Zc as vt,_ as Jr,_a as ho,_c as $o,a as h,aa as Kr,ab as fo,b as k,bb as go,bc as en,bd as Ao,ca as O,cb as mo,cc as J,db as Ae,dc as tn,ec as nn,fa as I,gb as bo,ia as b,ib as _,ic as _e,j as Vr,ja as te,jb as mt,ka as Xr,kc as ke,l as Wr,la as M,lb as vo,lc as Pe,ma as Ln,mb as bt,mc as qn,n as An,na as S,nb as Z,nc as Mo,o as On,oa as d,ob as yo,p as ee,pb as So,pc as rn,q as W,qa as pt,qb as jn,qc as on,ra as eo,rb as wo,s as he,sa as ft,sb as Bn,ta as ne,tb as ae,ub as le,v as F,va as re,vb as P,w as f,wc as B,x as dt,xb as L,y as qr,ya as to,yb as fe,yc as Gn,z as Gr,za as E,zb as Oe}from"./chunk-7423FXEI.js";var Kn=class extends _o{supportsDOMEvents=!0},Xn=class t extends Kn{static makeCurrent(){Oo(new t)}onAndCancel(o,e,n,r){return o.addEventListener(e,n,r),()=>{o.removeEventListener(e,n,r)}}dispatchEvent(o,e){o.dispatchEvent(e)}remove(o){o.remove()}createElement(o,e){return e=e||this.getDefaultDocument(),e.createElement(o)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(o){return o.nodeType===Node.ELEMENT_NODE}isShadowRoot(o){return o instanceof DocumentFragment}getGlobalEventTarget(o,e){return e==="window"?window:e==="document"?o:e==="body"?o.body:null}getBaseHref(o){let e=fs();return e==null?null:gs(e)}resetBaseElement(){It=null}getUserAgent(){return window.navigator.userAgent}getCookie(o){return No(document.cookie,o)}},It=null;function fs(){return It=It||document.querySelector("base"),It?It.getAttribute("href"):null}function gs(t){return new URL(t,document.baseURI).pathname}var ms=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),er=new M(""),ni=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,i){return this._findPluginFor(n).addEventListener(e,n,r,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new I(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(S(er),S(pe))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),un=class{_doc;constructor(o){this._doc=o}manager},cn="ng-app-id";function Jo(t){for(let o of t)o.remove()}function Ko(t,o){let e=o.createElement("style");return e.textContent=t,e}function bs(t,o,e,n){let r=t.head?.querySelectorAll(`style[${cn}="${o}"],link[${cn}="${o}"]`);if(r)for(let i of r)i.removeAttribute(cn),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function tr(t,o){let e=o.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ri=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,i={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=Ct(i),bs(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Ko);n?.forEach(r=>this.addUsage(r,this.external,tr))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let i=n.get(e);i?i.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(Jo(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Jo(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Ko(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,tr(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(cn,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(S(x),S(Fn),S(Un,8),S(se))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Jn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},rr=/%COMP%/g;var oi="%COMP%",vs=`_nghost-${oi}`,ys=`_ngcontent-${oi}`,Ss=!0,ws=new M("",{providedIn:"root",factory:()=>Ss});function Cs(t){return ys.replace(rr,t)}function Rs(t){return vs.replace(rr,t)}function ii(t,o){return o.map(e=>e.replace(rr,t))}var Xo=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,i,s,l,a,c=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=l,this.ngZone=a,this.nonce=c,this.tracingService=u,this.platformIsServer=Ct(l),this.defaultRenderer=new Tt(e,s,a,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===gt.ShadowDom&&(n=k(h({},n),{encapsulation:gt.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof dn?r.applyToHost(e):r instanceof Mt&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,i=r.get(n.id);if(!i){let s=this.doc,l=this.ngZone,a=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.platformIsServer,g=this.tracingService;switch(n.encapsulation){case gt.Emulated:i=new dn(a,c,n,this.appId,u,s,l,p,g);break;case gt.ShadowDom:return new nr(a,c,e,n,s,l,this.nonce,p,g);default:i=new Mt(a,c,n,u,s,l,p,g);break}r.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(S(ni),S(ri),S(Fn),S(ws),S(x),S(se),S(pe),S(Un),S(ao,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Tt=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(o,e,n,r,i){this.eventManager=o,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(o,e){return e?this.doc.createElementNS(Jn[e]||e,o):this.doc.createElement(o)}createComment(o){return this.doc.createComment(o)}createText(o){return this.doc.createTextNode(o)}appendChild(o,e){(ei(o)?o.content:o).appendChild(e)}insertBefore(o,e,n){o&&(ei(o)?o.content:o).insertBefore(e,n)}removeChild(o,e){e.remove()}selectRootElement(o,e){let n=typeof o=="string"?this.doc.querySelector(o):o;if(!n)throw new I(-5104,!1);return e||(n.textContent=""),n}parentNode(o){return o.parentNode}nextSibling(o){return o.nextSibling}setAttribute(o,e,n,r){if(r){e=r+":"+e;let i=Jn[r];i?o.setAttributeNS(i,e,n):o.setAttribute(e,n)}else o.setAttribute(e,n)}removeAttribute(o,e,n){if(n){let r=Jn[n];r?o.removeAttributeNS(r,e):o.removeAttribute(`${n}:${e}`)}else o.removeAttribute(e)}addClass(o,e){o.classList.add(e)}removeClass(o,e){o.classList.remove(e)}setStyle(o,e,n,r){r&(mt.DashCase|mt.Important)?o.style.setProperty(e,n,r&mt.Important?"important":""):o.style[e]=n}removeStyle(o,e,n){n&mt.DashCase?o.style.removeProperty(e):o.style[e]=""}setProperty(o,e,n){o!=null&&(o[e]=n)}setValue(o,e){o.nodeValue=e}listen(o,e,n,r){if(typeof o=="string"&&(o=an().getGlobalEventTarget(this.doc,o),!o))throw new Error(`Unsupported event target ${o} for event ${e}`);let i=this.decoratePreventDefault(n);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(i=this.tracingService.wrapEventListener(o,e,i)),this.eventManager.addEventListener(o,e,i,r)}decoratePreventDefault(o){return e=>{if(e==="__ngUnwrap__")return o;(this.platformIsServer?this.ngZone.runGuarded(()=>o(e)):o(e))===!1&&e.preventDefault()}}};function ei(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var nr=class extends Tt{sharedStylesHost;hostEl;shadowRoot;constructor(o,e,n,r,i,s,l,a,c){super(o,i,s,a,c),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=ii(r.id,u);for(let g of u){let v=document.createElement("style");l&&v.setAttribute("nonce",l),v.textContent=g,this.shadowRoot.appendChild(v)}let p=r.getExternalStyles?.();if(p)for(let g of p){let v=tr(g,i);l&&v.setAttribute("nonce",l),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(o){return o===this.hostEl?this.shadowRoot:o}appendChild(o,e){return super.appendChild(this.nodeOrShadowRoot(o),e)}insertBefore(o,e,n){return super.insertBefore(this.nodeOrShadowRoot(o),e,n)}removeChild(o,e){return super.removeChild(null,e)}parentNode(o){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(o)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Mt=class extends Tt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(o,e,n,r,i,s,l,a,c){super(o,i,s,l,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=c?ii(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},dn=class extends Mt{contentAttr;hostAttr;constructor(o,e,n,r,i,s,l,a,c){let u=r+"-"+n.id;super(o,e,n,i,s,l,a,c,u),this.contentAttr=Cs(u),this.hostAttr=Rs(u)}applyToHost(o){this.applyStyles(),this.setAttribute(o,this.hostAttr,"")}createElement(o,e){let n=super.createElement(o,e);return super.setAttribute(n,this.contentAttr,""),n}},Es=(()=>{class t extends un{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,i){return e.addEventListener(n,r,i),()=>this.removeEventListener(e,n,r,i)}removeEventListener(e,n,r,i){return e.removeEventListener(n,r,i)}static \u0275fac=function(n){return new(n||t)(S(x))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),ti=["alt","control","meta","shift"],Is={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ts={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ms=(()=>{class t extends un{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,i){let s=t.parseEventName(n),l=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>an().onAndCancel(e,s.domEventName,l,i))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let i=t._normalizeKey(n.pop()),s="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),s="code."),ti.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=i,n.length!=0||i.length===0)return null;let a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,n){let r=Is[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(r=e.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ti.forEach(s=>{if(s!==r){let l=Ts[s];l(e)&&(i+=s+".")}}),i+=r,i===n)}static eventCallback(e,n,r){return i=>{t.matchEventFullKeyCode(i,e)&&r.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(S(x))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Oc(t,o){return xo(h({rootComponent:t},xs(o)))}function xs(t){return{appProviders:[..._s,...t?.providers??[]],platformProviders:Os}}function Ds(){Xn.makeCurrent()}function $s(){return new Nn}function As(){return io(document),document}var Os=[{provide:se,useValue:zo},{provide:so,useValue:Ds,multi:!0},{provide:x,useFactory:As,deps:[]}];var _s=[{provide:eo,useValue:"root"},{provide:Nn,useFactory:$s,deps:[]},{provide:er,useClass:Es,multi:!0,deps:[x]},{provide:er,useClass:Ms,multi:!0,deps:[x]},Xo,ri,ni,{provide:vo,useExisting:Xo},{provide:Vo,useClass:ms,deps:[]},[]];var si=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(S(x))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ks=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=S(Ps),r},providedIn:"root"})}return t})(),Ps=(()=>{class t extends ks{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ae.NONE:return n;case Ae.HTML:return We(n,"HTML")?Ve(n):mo(this._doc,String(n)).toString();case Ae.STYLE:return We(n,"Style")?Ve(n):n;case Ae.SCRIPT:if(We(n,"Script"))return Ve(n);throw new I(5200,!1);case Ae.URL:return We(n,"URL")?Ve(n):go(String(n));case Ae.RESOURCE_URL:if(We(n,"ResourceURL"))return Ve(n);throw new I(5201,!1);default:throw new I(5202,!1)}}bypassSecurityTrustHtml(e){return co(e)}bypassSecurityTrustStyle(e){return uo(e)}bypassSecurityTrustScript(e){return ho(e)}bypassSecurityTrustUrl(e){return po(e)}bypassSecurityTrustResourceUrl(e){return fo(e)}static \u0275fac=function(n){return new(n||t)(S(x))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var m="primary",Bt=Symbol("RouteTitle"),lr=class{params;constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e[0]:e}return null}getAll(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function it(t){return new lr(t)}function Fs(t,o,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(o.hasChildren()||n.length<t.length))return null;let r={};for(let i=0;i<n.length;i++){let s=n[i],l=t[i];if(s[0]===":")r[s.substring(1)]=l;else if(s!==l.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function Us(t,o){if(t.length!==o.length)return!1;for(let e=0;e<t.length;++e)if(!de(t[e],o[e]))return!1;return!0}function de(t,o){let e=t?cr(t):void 0,n=o?cr(o):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let i=0;i<e.length;i++)if(r=e[i],!bi(t[r],o[r]))return!1;return!0}function cr(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function bi(t,o){if(Array.isArray(t)&&Array.isArray(o)){if(t.length!==o.length)return!1;let e=[...t].sort(),n=[...o].sort();return e.every((r,i)=>n[i]===r)}else return t===o}function vi(t){return t.length>0?t[t.length-1]:null}function Re(t){return qr(t)?t:Co(t)?F(Promise.resolve(t)):f(t)}var js={exact:Si,subset:wi},yi={exact:Bs,subset:zs,ignored:()=>!0};function ai(t,o,e){return js[e.paths](t.root,o.root,e.matrixParams)&&yi[e.queryParams](t.queryParams,o.queryParams)&&!(e.fragment==="exact"&&t.fragment!==o.fragment)}function Bs(t,o){return de(t,o)}function Si(t,o,e){if(!Fe(t.segments,o.segments)||!fn(t.segments,o.segments,e)||t.numberOfChildren!==o.numberOfChildren)return!1;for(let n in o.children)if(!t.children[n]||!Si(t.children[n],o.children[n],e))return!1;return!0}function zs(t,o){return Object.keys(o).length<=Object.keys(t).length&&Object.keys(o).every(e=>bi(t[e],o[e]))}function wi(t,o,e){return Ci(t,o,o.segments,e)}function Ci(t,o,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Fe(r,e)||o.hasChildren()||!fn(r,e,n))}else if(t.segments.length===e.length){if(!Fe(t.segments,e)||!fn(t.segments,e,n))return!1;for(let r in o.children)if(!t.children[r]||!wi(t.children[r],o.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),i=e.slice(t.segments.length);return!Fe(t.segments,r)||!fn(t.segments,r,n)||!t.children[m]?!1:Ci(t.children[m],o,i,n)}}function fn(t,o,e){return o.every((n,r)=>yi[e](t[r].parameters,n.parameters))}var be=class{root;queryParams;fragment;_queryParamMap;constructor(o=new y([],{}),e={},n=null){this.root=o,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=it(this.queryParams),this._queryParamMap}toString(){return Ws.serialize(this)}},y=class{segments;children;parent=null;constructor(o,e){this.segments=o,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gn(this)}},Ne=class{path;parameters;_parameterMap;constructor(o,e){this.path=o,this.parameters=e}get parameterMap(){return this._parameterMap??=it(this.parameters),this._parameterMap}toString(){return Ei(this)}};function Hs(t,o){return Fe(t,o)&&t.every((e,n)=>de(e.parameters,o[n].parameters))}function Fe(t,o){return t.length!==o.length?!1:t.every((e,n)=>e.path===o[n].path)}function Vs(t,o){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===m&&(e=e.concat(o(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==m&&(e=e.concat(o(r,n)))}),e}var zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new st,providedIn:"root"})}return t})(),st=class{parse(o){let e=new dr(o);return new be(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(o){let e=`/${xt(o.root,!0)}`,n=Qs(o.queryParams),r=typeof o.fragment=="string"?`#${qs(o.fragment)}`:"";return`${e}${n}${r}`}},Ws=new st;function gn(t){return t.segments.map(o=>Ei(o)).join("/")}function xt(t,o){if(!t.hasChildren())return gn(t);if(o){let e=t.children[m]?xt(t.children[m],!1):"",n=[];return Object.entries(t.children).forEach(([r,i])=>{r!==m&&n.push(`${r}:${xt(i,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Vs(t,(n,r)=>r===m?[xt(t.children[m],!1)]:[`${r}:${xt(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[m]!=null?`${gn(t)}/${e[0]}`:`${gn(t)}/(${e.join("//")})`}}function Ri(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function hn(t){return Ri(t).replace(/%3B/gi,";")}function qs(t){return encodeURI(t)}function ur(t){return Ri(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function mn(t){return decodeURIComponent(t)}function li(t){return mn(t.replace(/\+/g,"%20"))}function Ei(t){return`${ur(t.path)}${Gs(t.parameters)}`}function Gs(t){return Object.entries(t).map(([o,e])=>`;${ur(o)}=${ur(e)}`).join("")}function Qs(t){let o=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${hn(e)}=${hn(r)}`).join("&"):`${hn(e)}=${hn(n)}`).filter(e=>e);return o.length?`?${o.join("&")}`:""}var Zs=/^[^\/()?;#]+/;function or(t){let o=t.match(Zs);return o?o[0]:""}var Ys=/^[^\/()?;=#]+/;function Js(t){let o=t.match(Ys);return o?o[0]:""}var Ks=/^[^=?&#]+/;function Xs(t){let o=t.match(Ks);return o?o[0]:""}var ea=/^[^&#]+/;function ta(t){let o=t.match(ea);return o?o[0]:""}var dr=class{url;remaining;constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new y([],{}):new y([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let o=[];for(this.peekStartsWith("(")||o.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),o.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(o.length>0||Object.keys(e).length>0)&&(n[m]=new y(o,e)),n}parseSegment(){let o=or(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new I(4009,!1);return this.capture(o),new Ne(mn(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let e=Js(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=or(this.remaining);r&&(n=r,this.capture(n))}o[mn(e)]=mn(n)}parseQueryParam(o){let e=Xs(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=ta(this.remaining);s&&(n=s,this.capture(n))}let r=li(e),i=li(n);if(o.hasOwnProperty(r)){let s=o[r];Array.isArray(s)||(s=[s],o[r]=s),s.push(i)}else o[r]=i}parseParens(o){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=or(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new I(4010,!1);let i;n.indexOf(":")>-1?(i=n.slice(0,n.indexOf(":")),this.capture(i),this.capture(":")):o&&(i=m);let s=this.parseChildren();e[i]=Object.keys(s).length===1?s[m]:new y([],s),this.consumeOptional("//")}return e}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new I(4011,!1)}};function Ii(t){return t.segments.length>0?new y([],{[m]:t}):t}function Ti(t){let o={};for(let[n,r]of Object.entries(t.children)){let i=Ti(r);if(n===m&&i.segments.length===0&&i.hasChildren())for(let[s,l]of Object.entries(i.children))o[s]=l;else(i.segments.length>0||i.hasChildren())&&(o[n]=i)}let e=new y(t.segments,o);return na(e)}function na(t){if(t.numberOfChildren===1&&t.children[m]){let o=t.children[m];return new y(t.segments.concat(o.segments),o.children)}return t}function Ue(t){return t instanceof be}function ra(t,o,e=null,n=null){let r=Mi(t);return xi(r,o,e,n)}function Mi(t){let o;function e(i){let s={};for(let a of i.children){let c=e(a);s[a.outlet]=c}let l=new y(i.url,s);return i===t&&(o=l),l}let n=e(t.root),r=Ii(n);return o??r}function xi(t,o,e,n){let r=t;for(;r.parent;)r=r.parent;if(o.length===0)return ir(r,r,r,e,n);let i=oa(o);if(i.toRoot())return ir(r,r,new y([],{}),e,n);let s=ia(i,r,t),l=s.processChildren?$t(s.segmentGroup,s.index,i.commands):$i(s.segmentGroup,s.index,i.commands);return ir(r,s.segmentGroup,l,e,n)}function bn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function _t(t){return typeof t=="object"&&t!=null&&t.outlets}function ir(t,o,e,n,r){let i={};n&&Object.entries(n).forEach(([a,c])=>{i[a]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;t===o?s=e:s=Di(t,o,e);let l=Ii(Ti(s));return new be(l,i,r)}function Di(t,o,e){let n={};return Object.entries(t.children).forEach(([r,i])=>{i===o?n[r]=e:n[r]=Di(i,o,e)}),new y(t.segments,n)}var vn=class{isAbsolute;numberOfDoubleDots;commands;constructor(o,e,n){if(this.isAbsolute=o,this.numberOfDoubleDots=e,this.commands=n,o&&n.length>0&&bn(n[0]))throw new I(4003,!1);let r=n.find(_t);if(r&&r!==vi(n))throw new I(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function oa(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new vn(!0,0,t);let o=0,e=!1,n=t.reduce((r,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let l={};return Object.entries(i.outlets).forEach(([a,c])=>{l[a]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:l}]}if(i.segmentPath)return[...r,i.segmentPath]}return typeof i!="string"?[...r,i]:s===0?(i.split("/").forEach((l,a)=>{a==0&&l==="."||(a==0&&l===""?e=!0:l===".."?o++:l!=""&&r.push(l))}),r):[...r,i]},[]);return new vn(e,o,n)}var nt=class{segmentGroup;processChildren;index;constructor(o,e,n){this.segmentGroup=o,this.processChildren=e,this.index=n}};function ia(t,o,e){if(t.isAbsolute)return new nt(o,!0,0);if(!e)return new nt(o,!1,NaN);if(e.parent===null)return new nt(e,!0,0);let n=bn(t.commands[0])?0:1,r=e.segments.length-1+n;return sa(e,r,t.numberOfDoubleDots)}function sa(t,o,e){let n=t,r=o,i=e;for(;i>r;){if(i-=r,n=n.parent,!n)throw new I(4005,!1);r=n.segments.length}return new nt(n,!1,r-i)}function aa(t){return _t(t[0])?t[0].outlets:{[m]:t}}function $i(t,o,e){if(t??=new y([],{}),t.segments.length===0&&t.hasChildren())return $t(t,o,e);let n=la(t,o,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let i=new y(t.segments.slice(0,n.pathIndex),{});return i.children[m]=new y(t.segments.slice(n.pathIndex),t.children),$t(i,0,r)}else return n.match&&r.length===0?new y(t.segments,{}):n.match&&!t.hasChildren()?hr(t,o,e):n.match?$t(t,0,r):hr(t,o,e)}function $t(t,o,e){if(e.length===0)return new y(t.segments,{});{let n=aa(e),r={};if(Object.keys(n).some(i=>i!==m)&&t.children[m]&&t.numberOfChildren===1&&t.children[m].segments.length===0){let i=$t(t.children[m],o,e);return new y(t.segments,i.children)}return Object.entries(n).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[i]=$i(t.children[i],o,s))}),Object.entries(t.children).forEach(([i,s])=>{n[i]===void 0&&(r[i]=s)}),new y(t.segments,r)}}function la(t,o,e){let n=0,r=o,i={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return i;let s=t.segments[r],l=e[n];if(_t(l))break;let a=`${l}`,c=n<e.length-1?e[n+1]:null;if(r>0&&a===void 0)break;if(a&&c&&typeof c=="object"&&c.outlets===void 0){if(!ui(a,c,s))return i;n+=2}else{if(!ui(a,{},s))return i;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function hr(t,o,e){let n=t.segments.slice(0,o),r=0;for(;r<e.length;){let i=e[r];if(_t(i)){let a=ca(i.outlets);return new y(n,a)}if(r===0&&bn(e[0])){let a=t.segments[o];n.push(new Ne(a.path,ci(e[0]))),r++;continue}let s=_t(i)?i.outlets[m]:`${i}`,l=r<e.length-1?e[r+1]:null;s&&l&&bn(l)?(n.push(new Ne(s,ci(l))),r+=2):(n.push(new Ne(s,{})),r++)}return new y(n,{})}function ca(t){let o={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(o[e]=hr(new y([],{}),0,n))}),o}function ci(t){let o={};return Object.entries(t).forEach(([e,n])=>o[e]=`${n}`),o}function ui(t,o,e){return t==e.path&&de(o,e.parameters)}var At="imperative",D=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(D||{}),G=class{id;url;constructor(o,e){this.id=o,this.url=e}},at=class extends G{type=D.NavigationStart;navigationTrigger;restoredState;constructor(o,e,n="imperative",r=null){super(o,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},X=class extends G{urlAfterRedirects;type=D.NavigationEnd;constructor(o,e,n){super(o,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},H=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(H||{}),yn=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(yn||{}),me=class extends G{reason;code;type=D.NavigationCancel;constructor(o,e,n,r){super(o,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},we=class extends G{reason;code;type=D.NavigationSkipped;constructor(o,e,n,r){super(o,e),this.reason=n,this.code=r}},kt=class extends G{error;target;type=D.NavigationError;constructor(o,e,n,r){super(o,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Sn=class extends G{urlAfterRedirects;state;type=D.RoutesRecognized;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},pr=class extends G{urlAfterRedirects;state;type=D.GuardsCheckStart;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fr=class extends G{urlAfterRedirects;state;shouldActivate;type=D.GuardsCheckEnd;constructor(o,e,n,r,i){super(o,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},gr=class extends G{urlAfterRedirects;state;type=D.ResolveStart;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mr=class extends G{urlAfterRedirects;state;type=D.ResolveEnd;constructor(o,e,n,r){super(o,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},br=class{route;type=D.RouteConfigLoadStart;constructor(o){this.route=o}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},vr=class{route;type=D.RouteConfigLoadEnd;constructor(o){this.route=o}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},yr=class{snapshot;type=D.ChildActivationStart;constructor(o){this.snapshot=o}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sr=class{snapshot;type=D.ChildActivationEnd;constructor(o){this.snapshot=o}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wr=class{snapshot;type=D.ActivationStart;constructor(o){this.snapshot=o}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Cr=class{snapshot;type=D.ActivationEnd;constructor(o){this.snapshot=o}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},wn=class{routerEvent;position;anchor;type=D.Scroll;constructor(o,e,n){this.routerEvent=o,this.position=e,this.anchor=n}toString(){let o=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${o}')`}},Pt=class{},lt=class{url;navigationBehaviorOptions;constructor(o,e){this.url=o,this.navigationBehaviorOptions=e}};function ua(t,o){return t.providers&&!t._injector&&(t._injector=Bn(t.providers,o,`Route: ${t.path}`)),t._injector??o}function K(t){return t.outlet||m}function da(t,o){let e=t.filter(n=>K(n)===o);return e.push(...t.filter(n=>K(n)!==o)),e}function Ht(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let o=t.parent;o;o=o.parent){let e=o.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Rr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ht(this.route?.snapshot)??this.rootInjector}constructor(o){this.rootInjector=o,this.children=new Vt(this.rootInjector)}},Vt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Rr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(S(ft))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cn=class{_root;constructor(o){this._root=o}get root(){return this._root.value}parent(o){let e=this.pathFromRoot(o);return e.length>1?e[e.length-2]:null}children(o){let e=Er(o,this._root);return e?e.children.map(n=>n.value):[]}firstChild(o){let e=Er(o,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(o){let e=Ir(o,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==o)}pathFromRoot(o){return Ir(o,this._root).map(e=>e.value)}};function Er(t,o){if(t===o.value)return o;for(let e of o.children){let n=Er(t,e);if(n)return n}return null}function Ir(t,o){if(t===o.value)return[o];for(let e of o.children){let n=Ir(t,e);if(n.length)return n.unshift(o),n}return[]}var z=class{value;children;constructor(o,e){this.value=o,this.children=e}toString(){return`TreeNode(${this.value})`}};function tt(t){let o={};return t&&t.children.forEach(e=>o[e.value.outlet]=e),o}var Rn=class extends Cn{snapshot;constructor(o,e){super(o),this.snapshot=e,kr(this,o)}toString(){return this.snapshot.toString()}};function Ai(t){let o=ha(t),e=new W([new Ne("",{})]),n=new W({}),r=new W({}),i=new W({}),s=new W(""),l=new Ce(e,n,i,s,r,m,t,o.root);return l.snapshot=o.root,new Rn(new z(l,[]),o)}function ha(t){let o={},e={},n={},r="",i=new rt([],o,n,r,e,m,t,null,{});return new In("",new z(i,[]))}var Ce=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(o,e,n,r,i,s,l,a){this.urlSubject=o,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=i,this.outlet=s,this.component=l,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(C(c=>c[Bt]))??f(void 0),this.url=o,this.params=e,this.queryParams=n,this.fragment=r,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(C(o=>it(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(C(o=>it(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function En(t,o,e="emptyOnly"){let n,{routeConfig:r}=t;return o!==null&&(e==="always"||r?.path===""||!o.component&&!o.routeConfig?.loadComponent)?n={params:h(h({},o.params),t.params),data:h(h({},o.data),t.data),resolve:h(h(h(h({},t.data),o.data),r?.data),t._resolvedData)}:n={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},r&&_i(r)&&(n.resolve[Bt]=r.title),n}var rt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Bt]}constructor(o,e,n,r,i,s,l,a,c){this.url=o,this.params=e,this.queryParams=n,this.fragment=r,this.data=i,this.outlet=s,this.component=l,this.routeConfig=a,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=it(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=it(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${e}')`}},In=class extends Cn{url;constructor(o,e){super(e),this.url=o,kr(this,e)}toString(){return Oi(this._root)}};function kr(t,o){o.value._routerState=t,o.children.forEach(e=>kr(t,e))}function Oi(t){let o=t.children.length>0?` { ${t.children.map(Oi).join(", ")} } `:"";return`${t.value}${o}`}function sr(t){if(t.snapshot){let o=t.snapshot,e=t._futureSnapshot;t.snapshot=e,de(o.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),o.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),de(o.params,e.params)||t.paramsSubject.next(e.params),Us(o.url,e.url)||t.urlSubject.next(e.url),de(o.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Tr(t,o){let e=de(t.params,o.params)&&Hs(t.url,o.url),n=!t.parent!=!o.parent;return e&&!n&&(!t.parent||Tr(t.parent,o.parent))}function _i(t){return typeof t.title=="string"||t.title===null}var pa=new M(""),fa=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=m;activateEvents=new oe;deactivateEvents=new oe;attachEvents=new oe;detachEvents=new oe;routerOutletData=ie(void 0);parentContexts=d(Vt);location=d(So);changeDetector=d(Ze);inputBinder=d(Dn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new I(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new I(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new I(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new I(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,a=new Mr(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[re]})}return t})(),Mr=class t{route;childContexts;parent;outletData;__ngOutletInjector(o){return new t(this.route,this.childContexts,o,this.outletData)}constructor(o,e,n,r){this.route=o,this.childContexts=e,this.parent=n,this.outletData=r}get(o,e){return o===Ce?this.route:o===Vt?this.childContexts:o===pa?this.outletData:this.parent.get(o,e)}},Dn=new M(""),di=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=Zt([n.queryParams,n.params,n.data]).pipe(Q(([i,s,l],a)=>(l=h(h(h({},i),s),l),a===0?f(l):Promise.resolve(l)))).subscribe(i=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let s=Ao(n.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:l}of s.inputs)e.activatedComponentRef.setInput(l,i[l])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function ga(t,o,e){let n=Lt(t,o._root,e?e._root:void 0);return new Rn(n,o)}function Lt(t,o,e){if(e&&t.shouldReuseRoute(o.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=o.value;let r=ma(t,o,e);return new z(n,r)}else{if(t.shouldAttach(o.value)){let i=t.retrieve(o.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=o.value,s.children=o.children.map(l=>Lt(t,l)),s}}let n=ba(o.value),r=o.children.map(i=>Lt(t,i));return new z(n,r)}}function ma(t,o,e){return o.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Lt(t,n,r);return Lt(t,n)})}function ba(t){return new Ce(new W(t.url),new W(t.params),new W(t.queryParams),new W(t.fragment),new W(t.data),t.outlet,t.component,t)}var Nt=class{redirectTo;navigationBehaviorOptions;constructor(o,e){this.redirectTo=o,this.navigationBehaviorOptions=e}},ki="ngNavigationCancelingError";function Tn(t,o){let{redirectTo:e,navigationBehaviorOptions:n}=Ue(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,r=Pi(!1,H.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Pi(t,o){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ki]=!0,e.cancellationCode=o,e}function va(t){return Li(t)&&Ue(t.url)}function Li(t){return!!t&&t[ki]}var ya=(t,o,e,n)=>C(r=>(new xr(o,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),xr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(o,e,n,r,i){this.routeReuseStrategy=o,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=i}activate(o){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,o),sr(this.futureState.root),this.activateChildRoutes(e,n,o)}deactivateChildRoutes(o,e,n){let r=tt(e);o.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,r[s],n),delete r[s]}),Object.values(r).forEach(i=>{this.deactivateRouteAndItsChildren(i,n)})}deactivateRoutes(o,e,n){let r=o.value,i=e?e.value:null;if(r===i)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(o,e,s.children)}else this.deactivateChildRoutes(o,e,n);else i&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(o,e){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,e):this.deactivateRouteAndOutlet(o,e)}detachAndStoreRouteSubtree(o,e){let n=e.getContext(o.value.outlet),r=n&&o.value.component?n.children:e,i=tt(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:s,route:o,contexts:l})}}deactivateRouteAndOutlet(o,e){let n=e.getContext(o.value.outlet),r=n&&o.value.component?n.children:e,i=tt(o);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(o,e,n){let r=tt(e);o.children.forEach(i=>{this.activateRoutes(i,r[i.value.outlet],n),this.forwardEvent(new Cr(i.value.snapshot))}),o.children.length&&this.forwardEvent(new Sr(o.value.snapshot))}activateRoutes(o,e,n){let r=o.value,i=e?e.value:null;if(sr(r),r===i)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(o,e,s.children)}else this.activateChildRoutes(o,e,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(l.contexts),s.attachRef=l.componentRef,s.route=l.route.value,s.outlet&&s.outlet.attach(l.componentRef,l.route.value),sr(l.route.value),this.activateChildRoutes(o,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(o,null,s.children)}else this.activateChildRoutes(o,null,n)}},Mn=class{path;route;constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},ot=class{component;route;constructor(o,e){this.component=o,this.route=e}};function Sa(t,o,e){let n=t._root,r=o?o._root:null;return Dt(n,r,e,[n.value])}function wa(t){let o=t.routeConfig?t.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:t,guards:o}}function ut(t,o){let e=Symbol(),n=o.get(t,e);return n===e?typeof t=="function"&&!Xr(t)?t:o.get(t):n}function Dt(t,o,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=tt(o);return t.children.forEach(s=>{Ca(s,i[s.value.outlet],e,n.concat([s.value]),r),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,l])=>Ot(l,e.getContext(s),r)),r}function Ca(t,o,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=t.value,s=o?o.value:null,l=e?e.getContext(t.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let a=Ra(s,i,i.routeConfig.runGuardsAndResolvers);a?r.canActivateChecks.push(new Mn(n)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Dt(t,o,l?l.children:null,n,r):Dt(t,o,e,n,r),a&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new ot(l.outlet.component,s))}else s&&Ot(o,l,r),r.canActivateChecks.push(new Mn(n)),i.component?Dt(t,null,l?l.children:null,n,r):Dt(t,null,e,n,r);return r}function Ra(t,o,e){if(typeof e=="function")return e(t,o);switch(e){case"pathParamsChange":return!Fe(t.url,o.url);case"pathParamsOrQueryParamsChange":return!Fe(t.url,o.url)||!de(t.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Tr(t,o)||!de(t.queryParams,o.queryParams);case"paramsChange":default:return!Tr(t,o)}}function Ot(t,o,e){let n=tt(t),r=t.value;Object.entries(n).forEach(([i,s])=>{r.component?o?Ot(s,o.children.getContext(i),e):Ot(s,null,e):Ot(s,o,e)}),r.component?o&&o.outlet&&o.outlet.isActivated?e.canDeactivateChecks.push(new ot(o.outlet.component,r)):e.canDeactivateChecks.push(new ot(null,r)):e.canDeactivateChecks.push(new ot(null,r))}function Wt(t){return typeof t=="function"}function Ea(t){return typeof t=="boolean"}function Ia(t){return t&&Wt(t.canLoad)}function Ta(t){return t&&Wt(t.canActivate)}function Ma(t){return t&&Wt(t.canActivateChild)}function xa(t){return t&&Wt(t.canDeactivate)}function Da(t){return t&&Wt(t.canMatch)}function Ni(t){return t instanceof Gr||t?.name==="EmptyError"}var pn=Symbol("INITIAL_VALUE");function ct(){return Q(t=>Zt(t.map(o=>o.pipe(He(1),Jr(pn)))).pipe(C(o=>{for(let e of o)if(e!==!0){if(e===pn)return pn;if(e===!1||$a(e))return e}return!0}),Me(o=>o!==pn),He(1)))}function $a(t){return Ue(t)||t instanceof Nt}function Aa(t,o){return j(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:s}}=e;return s.length===0&&i.length===0?f(k(h({},e),{guardsResult:!0})):Oa(s,n,r,t).pipe(j(l=>l&&Ea(l)?_a(n,i,t,o):f(l)),C(l=>k(h({},e),{guardsResult:l})))})}function Oa(t,o,e,n){return F(t).pipe(j(r=>Fa(r.component,r.route,e,o,n)),ye(r=>r!==!0,!0))}function _a(t,o,e,n){return F(o).pipe(ze(r=>Qr(Pa(r.route.parent,n),ka(r.route,n),Na(t,r.path,e),La(t,r.route,e))),ye(r=>r!==!0,!0))}function ka(t,o){return t!==null&&o&&o(new wr(t)),f(!0)}function Pa(t,o){return t!==null&&o&&o(new yr(t)),f(!0)}function La(t,o,e){let n=o.routeConfig?o.routeConfig.canActivate:null;if(!n||n.length===0)return f(!0);let r=n.map(i=>_n(()=>{let s=Ht(o)??e,l=ut(i,s),a=Ta(l)?l.canActivate(o,t):ne(s,()=>l(o,t));return Re(a).pipe(ye())}));return f(r).pipe(ct())}function Na(t,o,e){let n=o[o.length-1],i=o.slice(0,o.length-1).reverse().map(s=>wa(s)).filter(s=>s!==null).map(s=>_n(()=>{let l=s.guards.map(a=>{let c=Ht(s.node)??e,u=ut(a,c),p=Ma(u)?u.canActivateChild(n,t):ne(c,()=>u(n,t));return Re(p).pipe(ye())});return f(l).pipe(ct())}));return f(i).pipe(ct())}function Fa(t,o,e,n,r){let i=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!i||i.length===0)return f(!0);let s=i.map(l=>{let a=Ht(o)??r,c=ut(l,a),u=xa(c)?c.canDeactivate(t,o,e,n):ne(a,()=>c(t,o,e,n));return Re(u).pipe(ye())});return f(s).pipe(ct())}function Ua(t,o,e,n){let r=o.canLoad;if(r===void 0||r.length===0)return f(!0);let i=r.map(s=>{let l=ut(s,t),a=Ia(l)?l.canLoad(o,e):ne(t,()=>l(o,e));return Re(a)});return f(i).pipe(ct(),Fi(n))}function Fi(t){return Wr(O(o=>{if(typeof o!="boolean")throw Tn(t,o)}),C(o=>o===!0))}function ja(t,o,e,n){let r=o.canMatch;if(!r||r.length===0)return f(!0);let i=r.map(s=>{let l=ut(s,t),a=Da(l)?l.canMatch(o,e):ne(t,()=>l(o,e));return Re(a)});return f(i).pipe(ct(),Fi(n))}var Ft=class{segmentGroup;constructor(o){this.segmentGroup=o||null}},Ut=class extends Error{urlTree;constructor(o){super(),this.urlTree=o}};function et(t){return dt(new Ft(t))}function Ba(t){return dt(new I(4e3,!1))}function za(t){return dt(Pi(!1,H.GuardRejected))}var Dr=class{urlSerializer;urlTree;constructor(o,e){this.urlSerializer=o,this.urlTree=e}lineralizeSegments(o,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return f(n);if(r.numberOfChildren>1||!r.children[m])return Ba(`${o.redirectTo}`);r=r.children[m]}}applyRedirectCommands(o,e,n,r,i){if(typeof e!="string"){let l=e,{queryParams:a,fragment:c,routeConfig:u,url:p,outlet:g,params:v,data:w,title:$}=r,N=ne(i,()=>l({params:v,data:w,queryParams:a,fragment:c,routeConfig:u,url:p,outlet:g,title:$}));if(N instanceof be)throw new Ut(N);e=N}let s=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),o,n);if(e[0]==="/")throw new Ut(s);return s}applyRedirectCreateUrlTree(o,e,n,r){let i=this.createSegmentGroup(o,e.root,n,r);return new be(i,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(o,e){let n={};return Object.entries(o).forEach(([r,i])=>{if(typeof i=="string"&&i[0]===":"){let l=i.substring(1);n[r]=e[l]}else n[r]=i}),n}createSegmentGroup(o,e,n,r){let i=this.createSegments(o,e.segments,n,r),s={};return Object.entries(e.children).forEach(([l,a])=>{s[l]=this.createSegmentGroup(o,a,n,r)}),new y(i,s)}createSegments(o,e,n,r){return e.map(i=>i.path[0]===":"?this.findPosParam(o,i,r):this.findOrReturn(i,n))}findPosParam(o,e,n){let r=n[e.path.substring(1)];if(!r)throw new I(4001,!1);return r}findOrReturn(o,e){let n=0;for(let r of e){if(r.path===o.path)return e.splice(n),r;n++}return o}},$r={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ha(t,o,e,n,r){let i=Ui(t,o,e);return i.matched?(n=ua(o,n),ja(n,o,e,r).pipe(C(s=>s===!0?i:h({},$r)))):f(i)}function Ui(t,o,e){if(o.path==="**")return Va(e);if(o.path==="")return o.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},$r):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(o.matcher||Fs)(e,t,o);if(!r)return h({},$r);let i={};Object.entries(r.posParams??{}).forEach(([l,a])=>{i[l]=a.path});let s=r.consumed.length>0?h(h({},i),r.consumed[r.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Va(t){return{matched:!0,parameters:t.length>0?vi(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function hi(t,o,e,n){return e.length>0&&Ga(t,e,n)?{segmentGroup:new y(o,qa(n,new y(e,t.children))),slicedSegments:[]}:e.length===0&&Qa(t,e,n)?{segmentGroup:new y(t.segments,Wa(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new y(t.segments,t.children),slicedSegments:e}}function Wa(t,o,e,n){let r={};for(let i of e)if($n(t,o,i)&&!n[K(i)]){let s=new y([],{});r[K(i)]=s}return h(h({},n),r)}function qa(t,o){let e={};e[m]=o;for(let n of t)if(n.path===""&&K(n)!==m){let r=new y([],{});e[K(n)]=r}return e}function Ga(t,o,e){return e.some(n=>$n(t,o,n)&&K(n)!==m)}function Qa(t,o,e){return e.some(n=>$n(t,o,n))}function $n(t,o,e){return(t.hasChildren()||o.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Za(t,o,e){return o.length===0&&!t.children[e]}var Ar=class{};function Ya(t,o,e,n,r,i,s="emptyOnly"){return new Or(t,o,e,n,r,s,i).recognize()}var Ja=31,Or=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(o,e,n,r,i,s,l){this.injector=o,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=l,this.applyRedirects=new Dr(this.urlSerializer,this.urlTree)}noMatchError(o){return new I(4002,`'${o.segmentGroup}'`)}recognize(){let o=hi(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(o).pipe(C(({children:e,rootSnapshot:n})=>{let r=new z(n,e),i=new In("",r),s=ra(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(o){let e=new rt([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),m,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,o,m,e).pipe(C(n=>({children:n,rootSnapshot:e})),Be(n=>{if(n instanceof Ut)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ft?this.noMatchError(n):n}))}processSegmentGroup(o,e,n,r,i){return n.segments.length===0&&n.hasChildren()?this.processChildren(o,e,n,i):this.processSegment(o,e,n,n.segments,r,!0,i).pipe(C(s=>s instanceof z?[s]:[]))}processChildren(o,e,n,r){let i=[];for(let s of Object.keys(n.children))s==="primary"?i.unshift(s):i.push(s);return F(i).pipe(ze(s=>{let l=n.children[s],a=da(e,s);return this.processSegmentGroup(o,a,l,s,r)}),Yr((s,l)=>(s.push(...l),s)),kn(null),Zr(),j(s=>{if(s===null)return et(n);let l=ji(s);return Ka(l),f(l)}))}processSegment(o,e,n,r,i,s,l){return F(e).pipe(ze(a=>this.processSegmentAgainstRoute(a._injector??o,e,a,n,r,i,s,l).pipe(Be(c=>{if(c instanceof Ft)return f(null);throw c}))),ye(a=>!!a),Be(a=>{if(Ni(a))return Za(n,r,i)?f(new Ar):et(n);throw a}))}processSegmentAgainstRoute(o,e,n,r,i,s,l,a){return K(n)!==s&&(s===m||!$n(r,i,n))?et(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(o,r,n,i,s,a):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(o,r,e,n,i,s,a):et(r)}expandSegmentAgainstRouteUsingRedirect(o,e,n,r,i,s,l){let{matched:a,parameters:c,consumedSegments:u,positionalParamSegments:p,remainingSegments:g}=Ui(e,r,i);if(!a)return et(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ja&&(this.allowRedirects=!1));let v=new rt(i,c,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,pi(r),K(r),r.component??r._loadedComponent??null,r,fi(r)),w=En(v,l,this.paramsInheritanceStrategy);v.params=Object.freeze(w.params),v.data=Object.freeze(w.data);let $=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,p,v,o);return this.applyRedirects.lineralizeSegments(r,$).pipe(j(N=>this.processSegment(o,n,e,N.concat(g),s,!1,l)))}matchSegmentAgainstRoute(o,e,n,r,i,s){let l=Ha(e,n,r,o,this.urlSerializer);return n.path==="**"&&(e.children={}),l.pipe(Q(a=>a.matched?(o=n._injector??o,this.getChildConfig(o,n,r).pipe(Q(({routes:c})=>{let u=n._loadedInjector??o,{parameters:p,consumedSegments:g,remainingSegments:v}=a,w=new rt(g,p,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,pi(n),K(n),n.component??n._loadedComponent??null,n,fi(n)),$=En(w,s,this.paramsInheritanceStrategy);w.params=Object.freeze($.params),w.data=Object.freeze($.data);let{segmentGroup:N,slicedSegments:Te}=hi(e,g,v,c);if(Te.length===0&&N.hasChildren())return this.processChildren(u,c,N,w).pipe(C(Qt=>new z(w,Qt)));if(c.length===0&&Te.length===0)return f(new z(w,[]));let je=K(n)===i;return this.processSegment(u,c,N,Te,je?m:i,!0,w).pipe(C(Qt=>new z(w,Qt instanceof z?[Qt]:[])))}))):et(e)))}getChildConfig(o,e,n){return e.children?f({routes:e.children,injector:o}):e.loadChildren?e._loadedRoutes!==void 0?f({routes:e._loadedRoutes,injector:e._loadedInjector}):Ua(o,e,n,this.urlSerializer).pipe(j(r=>r?this.configLoader.loadChildren(o,e).pipe(O(i=>{e._loadedRoutes=i.routes,e._loadedInjector=i.injector})):za(e))):f({routes:[],injector:o})}};function Ka(t){t.sort((o,e)=>o.value.outlet===m?-1:e.value.outlet===m?1:o.value.outlet.localeCompare(e.value.outlet))}function Xa(t){let o=t.value.routeConfig;return o&&o.path===""}function ji(t){let o=[],e=new Set;for(let n of t){if(!Xa(n)){o.push(n);continue}let r=o.find(i=>n.value.routeConfig===i.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):o.push(n)}for(let n of e){let r=ji(n.children);o.push(new z(n.value,r))}return o.filter(n=>!e.has(n))}function pi(t){return t.data||{}}function fi(t){return t.resolve||{}}function el(t,o,e,n,r,i){return j(s=>Ya(t,o,e,n,s.extractedUrl,r,i).pipe(C(({state:l,tree:a})=>k(h({},s),{targetSnapshot:l,urlAfterRedirects:a}))))}function tl(t,o){return j(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return f(e);let i=new Set(r.map(a=>a.route)),s=new Set;for(let a of i)if(!s.has(a))for(let c of Bi(a))s.add(c);let l=0;return F(s).pipe(ze(a=>i.has(a)?nl(a,n,t,o):(a.data=En(a,a.parent,t).resolve,f(void 0))),O(()=>l++),Pn(1),j(a=>l===s.size?f(e):he))})}function Bi(t){let o=t.children.map(e=>Bi(e)).flat();return[t,...o]}function nl(t,o,e,n){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!_i(r)&&(i[Bt]=r.title),rl(i,t,o,n).pipe(C(s=>(t._resolvedData=s,t.data=En(t,t.parent,e).resolve,null)))}function rl(t,o,e,n){let r=cr(t);if(r.length===0)return f({});let i={};return F(r).pipe(j(s=>ol(t[s],o,e,n).pipe(ye(),O(l=>{if(l instanceof Nt)throw Tn(new st,l);i[s]=l}))),Pn(1),C(()=>i),Be(s=>Ni(s)?he:dt(s)))}function ol(t,o,e,n){let r=Ht(o)??n,i=ut(t,r),s=i.resolve?i.resolve(o,e):ne(r,()=>i(o,e));return Re(s)}function ar(t){return Q(o=>{let e=t(o);return e?F(e).pipe(C(()=>o)):f(o)})}var zi=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(i=>i.outlet===m);return n}getResolvedTitleForRoute(e){return e.data[Bt]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(il),providedIn:"root"})}return t})(),il=(()=>{class t extends zi{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(S(si))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qt=new M("",{providedIn:"root",factory:()=>({})}),sl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=ae({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&ce(0,"router-outlet")},dependencies:[fa],encapsulation:2})}return t})();function Pr(t){let o=t.children&&t.children.map(Pr),e=o?k(h({},t),{children:o}):h({},t);return!e.component&&!e.loadComponent&&(o||e.loadChildren)&&e.outlet&&e.outlet!==m&&(e.component=sl),e}var jt=new M(""),Lr=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(sn);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return f(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=Re(e.loadComponent()).pipe(C(Hi),O(i=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=i}),Yt(()=>{this.componentLoaders.delete(e)})),r=new On(n,()=>new ee).pipe(An());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return f({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=al(n,this.compiler,e,this.onLoadEndListener).pipe(Yt(()=>{this.childrenLoaders.delete(n)})),s=new On(i,()=>new ee).pipe(An());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function al(t,o,e,n){return Re(t.loadChildren()).pipe(C(Hi),j(r=>r instanceof wo||Array.isArray(r)?f(r):F(o.compileModuleAsync(r))),C(r=>{n&&n(t);let i,s,l=!1;return Array.isArray(r)?(s=r,l=!0):(i=r.create(e).injector,s=i.get(jt,[],{optional:!0,self:!0}).flat()),{routes:s.map(Pr),injector:i}}))}function ll(t){return t&&typeof t=="object"&&"default"in t}function Hi(t){return ll(t)?t.default:t}var Nr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(cl),providedIn:"root"})}return t})(),cl=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Vi=new M(""),Wi=new M("");function ul(t,o,e){let n=t.get(Wi),r=t.get(x);return t.get(pe).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let i,s=new Promise(c=>{i=c}),l=r.startViewTransition(()=>(i(),dl(t))),{onViewTransitionCreated:a}=n;return a&&ne(t,()=>a({transition:l,from:o,to:e})),s})}function dl(t){return new Promise(o=>{lo({read:()=>setTimeout(o)},{injector:t})})}var qi=new M(""),Fr=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new ee;transitionAbortSubject=new ee;configLoader=d(Lr);environmentInjector=d(ft);destroyRef=d(ro);urlSerializer=d(zt);rootContexts=d(Vt);location=d(wt);inputBindingEnabled=d(Dn,{optional:!0})!==null;titleStrategy=d(zi);options=d(qt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Nr);createViewTransition=d(Vi,{optional:!0});navigationErrorHandler=d(qi,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>f(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new br(r)),n=r=>this.events.next(new vr(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(k(h(h({},this.transitions.value),e),{id:n}))}setupNavigations(e,n,r){return this.transitions=new W({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:At,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Me(i=>i.id!==0),C(i=>k(h({},i),{extractedUrl:this.urlHandlingStrategy.extract(i.rawUrl)})),Q(i=>{let s=!1,l=!1;return f(i).pipe(Q(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",H.SupersededByNewNavigation),he;this.currentTransition=i,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?k(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload"){let p="";return this.events.next(new we(a.id,this.urlSerializer.serialize(a.rawUrl),p,yn.IgnoredSameUrlNavigation)),a.resolve(!1),he}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return f(a).pipe(Q(p=>{let g=this.transitions?.getValue();return this.events.next(new at(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),g!==this.transitions?.getValue()?he:Promise.resolve(p)}),el(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),O(p=>{i.targetSnapshot=p.targetSnapshot,i.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation=k(h({},this.currentNavigation),{finalUrl:p.urlAfterRedirects});let g=new Sn(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(g)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:p,extractedUrl:g,source:v,restoredState:w,extras:$}=a,N=new at(p,this.urlSerializer.serialize(g),v,w);this.events.next(N);let Te=Ai(this.rootComponentType).snapshot;return this.currentTransition=i=k(h({},a),{targetSnapshot:Te,urlAfterRedirects:g,extras:k(h({},$),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=g,f(i)}else{let p="";return this.events.next(new we(a.id,this.urlSerializer.serialize(a.extractedUrl),p,yn.IgnoredByUrlHandlingStrategy)),a.resolve(!1),he}}),O(a=>{let c=new pr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),C(a=>(this.currentTransition=i=k(h({},a),{guards:Sa(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i)),Aa(this.environmentInjector,a=>this.events.next(a)),O(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Tn(this.urlSerializer,a.guardsResult);let c=new fr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(c)}),Me(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",H.GuardRejected),!1)),ar(a=>{if(a.guards.canActivateChecks.length)return f(a).pipe(O(c=>{let u=new gr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),Q(c=>{let u=!1;return f(c).pipe(tl(this.paramsInheritanceStrategy,this.environmentInjector),O({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",H.NoDataFromResolver)}}))}),O(c=>{let u=new mr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),ar(a=>{let c=u=>{let p=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&p.push(this.configLoader.loadComponent(u.routeConfig).pipe(O(g=>{u.component=g}),C(()=>{})));for(let g of u.children)p.push(...c(g));return p};return Zt(c(a.targetSnapshot.root)).pipe(kn(null),He(1))}),ar(()=>this.afterPreactivation()),Q(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,u=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return u?F(u).pipe(C(()=>i)):f(i)}),C(a=>{let c=ga(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=i=k(h({},a),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,i}),O(()=>{this.events.next(new Pt)}),ya(this.rootContexts,e.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),He(1),O({next:a=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new X(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{s=!0}}),Kr(this.transitionAbortSubject.pipe(O(a=>{throw a}))),Yt(()=>{!s&&!l&&this.cancelNavigationTransition(i,"",H.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Be(a=>{if(this.destroyed)return i.resolve(!1),he;if(l=!0,Li(a))this.events.next(new me(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),va(a)?this.events.next(new lt(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new kt(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let u=ne(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Nt){let{message:p,cancellationCode:g}=Tn(this.urlSerializer,u);this.events.next(new me(i.id,this.urlSerializer.serialize(i.extractedUrl),p,g)),this.events.next(new lt(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(u){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(u)}}return he}))}))}cancelNavigationTransition(e,n,r){let i=new me(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(i),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hl(t){return t!==At}var pl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(fl),providedIn:"root"})}return t})(),_r=class{shouldDetach(o){return!1}store(o,e){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,e){return o.routeConfig===e.routeConfig}},fl=(()=>{class t extends _r{static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>d(gl),providedIn:"root"})}return t})(),gl=(()=>{class t extends Gi{location=d(wt);urlSerializer=d(zt);options=d(qt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=d(Nr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new be;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Ai(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&e(n.url,n.state)})}handleRouterEvent(e,n){if(e instanceof at)this.stateMemento=this.createStateMemento();else if(e instanceof we)this.rawUrlTree=n.initialUrl;else if(e instanceof Sn){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(n.targetBrowserUrl??r,n)}}else e instanceof Pt?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(n.targetBrowserUrl??this.rawUrlTree,n)):e instanceof me&&(e.code===H.GuardRejected||e.code===H.NoDataFromResolver)?this.restoreHistory(n):e instanceof kt?this.restoreHistory(n,!0):e instanceof X&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let r=e instanceof be?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(r)||n.extras.replaceUrl){let i=this.browserPageId,s=h(h({},n.extras.state),this.generateNgRouterState(n.id,i));this.location.replaceState(r,"",s)}else{let i=h(h({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(r,"",i)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,i=this.currentPageId-r;i!==0?this.location.historyGo(i):this.currentUrlTree===e.finalUrl&&i===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qi(t,o){t.events.pipe(Me(e=>e instanceof X||e instanceof me||e instanceof kt||e instanceof we),C(e=>e instanceof X||e instanceof we?0:(e instanceof me?e.code===H.Redirect||e.code===H.SupersededByNewNavigation:!1)?2:1),Me(e=>e!==2),He(1)).subscribe(()=>{o()})}var ml={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},bl={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},ve=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(zn);stateManager=d(Gi);options=d(qt,{optional:!0})||{};pendingTasks=d(oo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Fr);urlSerializer=d(zt);location=d(wt);urlHandlingStrategy=d(Nr);_events=new ee;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(pl);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(jt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Dn,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Vr;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(r!==null&&i!==null){if(this.stateManager.handleRouterEvent(n,i),n instanceof me&&n.code!==H.Redirect&&n.code!==H.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof X)this.navigated=!0;else if(n instanceof lt){let s=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),a=h({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||hl(r.source)},s);this.scheduleNavigation(l,At,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}yl(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),At,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",n)},0)})}navigateToSyncWithBrowser(e,n,r){let i={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let a=h({},r);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(i.state=a)}let l=this.parseUrl(e);this.scheduleNavigation(l,n,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Pr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:i,fragment:s,queryParamsHandling:l,preserveFragment:a}=n,c=a?this.currentUrlTree.fragment:s,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let p;try{let g=r?r.snapshot:this.routerState.snapshot.root;p=Mi(g)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),p=this.currentUrlTree.root}return xi(p,e,u,c??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Ue(e)?e:this.parseUrl(e),i=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(i,At,null,n)}navigate(e,n={skipLocationChange:!1}){return vl(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=h({},ml):n===!1?r=h({},bl):r=n,Ue(e))return ai(this.currentUrlTree,e,r);let i=this.parseUrl(e);return ai(this.currentUrlTree,i,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,i])=>(i!=null&&(n[r]=i),n),{})}scheduleNavigation(e,n,r,i,s){if(this.disposed)return Promise.resolve(!1);let l,a,c;s?(l=s.resolve,a=s.reject,c=s.promise):c=new Promise((p,g)=>{l=p,a=g});let u=this.pendingTasks.add();return Qi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:i,resolve:l,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(p=>Promise.reject(p))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vl(t){for(let o=0;o<t.length;o++)if(t[o]==null)throw new I(4008,!1)}function yl(t){return!(t instanceof Pt)&&!(t instanceof lt)}var gi=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new ee;constructor(e,n,r,i,s,l){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=i,this.el=s,this.locationStrategy=l;let a=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a==="a"||a==="area",this.isAnchorElement?this.subscription=e.events.subscribe(c=>{c instanceof X&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Ue(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,i,s){let l=this.urlTree;if(l===null||this.isAnchorElement&&(e!==0||n||r||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let a={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(l,a),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:bo(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,i=this.el.nativeElement;n!==null?r.setAttribute(i,e,n):r.removeAttribute(i,e)}get urlTree(){return this.routerLinkInput===null?null:Ue(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||t)(Z(ve),Z(Ce),no("tabindex"),Z(bt),Z(De),Z(St))};static \u0275dir=P({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&en("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&Y("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",R],skipLocationChange:[2,"skipLocationChange","skipLocationChange",R],replaceUrl:[2,"replaceUrl","replaceUrl",R],routerLink:"routerLink"},features:[fe,re]})}return t})(),eu=(()=>{class t{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new oe;constructor(e,n,r,i,s){this.router=e,this.element=n,this.renderer=r,this.cdr=i,this.link=s,this.routerEventsSubscription=e.events.subscribe(l=>{l instanceof X&&this.update()})}ngAfterContentInit(){f(this.links.changes,f(null)).pipe(ht()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=F(e).pipe(ht()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Sl(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let i=r.urlTree;return i?e.isActive(i,n):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(Z(ve),Z(De),Z(bt),Z(Ze),Z(gi,8))};static \u0275dir=P({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,i){if(n&1&&_e(i,gi,5),n&2){let s;ke(s=Pe())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[re]})}return t})();function Sl(t){return!!t.paths}var xn=class{};var wl=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,i,s){this.router=e,this.injector=r,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(Me(e=>e instanceof X),ze(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,n){let r=[];for(let i of n){i.providers&&!i._injector&&(i._injector=Bn(i.providers,e,`Route: ${i.path}`));let s=i._injector??e,l=i._loadedInjector??s;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&r.push(this.preloadConfig(s,i)),(i.children||i._loadedRoutes)&&r.push(this.processRoutes(l,i.children??i._loadedRoutes))}return F(r).pipe(ht())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(e,n):r=f(null);let i=r.pipe(j(s=>s===null?f(void 0):(n._loadedRoutes=s.routes,n._loadedInjector=s.injector,this.processRoutes(s.injector??e,s.routes))));if(n.loadComponent&&!n._loadedComponent){let s=this.loader.loadComponent(n);return F([i,s]).pipe(ht())}else return i})}static \u0275fac=function(n){return new(n||t)(S(ve),S(sn),S(ft),S(xn),S(Lr))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zi=new M(""),Cl=(()=>{class t{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(e,n,r,i,s={}){this.urlSerializer=e,this.transitions=n,this.viewportScroller=r,this.zone=i,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof at?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof X?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof we&&e.code===yn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof wn&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new wn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){yo()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function tu(t,...o){return pt([{provide:jt,multi:!0,useValue:t},[],{provide:Ce,useFactory:Yi,deps:[ve]},{provide:Vn,multi:!0,useFactory:Ji},o.map(e=>e.\u0275providers)])}function Yi(t){return t.routerState.root}function Gt(t,o){return{\u0275kind:t,\u0275providers:o}}function Ji(){let t=d(xe);return o=>{let e=t.get(Wn);if(o!==e.components[0])return;let n=t.get(ve),r=t.get(Ki);t.get(Ur)===1&&n.initialNavigation(),t.get(Xi,null,Ln.Optional)?.setUpPreloading(),t.get(Zi,null,Ln.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ki=new M("",{factory:()=>new ee}),Ur=new M("",{providedIn:"root",factory:()=>1});function Rl(){return Gt(2,[{provide:Ur,useValue:0},{provide:Hn,multi:!0,deps:[xe],useFactory:o=>{let e=o.get(ko,Promise.resolve());return()=>e.then(()=>new Promise(n=>{let r=o.get(ve),i=o.get(Ki);Qi(r,()=>{n(!0)}),o.get(Fr).afterPreactivation=()=>(n(!0),i.closed?f(void 0):i),r.initialNavigation()}))}}])}function El(){return Gt(3,[{provide:Hn,multi:!0,useFactory:()=>{let o=d(ve);return()=>{o.setUpLocationChangeListener()}}},{provide:Ur,useValue:2}])}var Xi=new M("");function Il(t){return Gt(0,[{provide:Xi,useExisting:wl},{provide:xn,useExisting:t}])}function Tl(){return Gt(8,[di,{provide:Dn,useExisting:di}])}function Ml(t){let o=[{provide:Vi,useValue:ul},{provide:Wi,useValue:h({skipNextTransition:!!t?.skipInitialTransition},t)}];return Gt(9,o)}var xl=[wt,{provide:zt,useClass:st},ve,Vt,{provide:Ce,useFactory:Yi,deps:[ve]},Lr,[]],nu=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[xl,[],{provide:jt,multi:!0,useValue:e},[],n?.errorHandler?{provide:qi,useValue:n.errorHandler}:[],{provide:qt,useValue:n||{}},n?.useHash?$l():Al(),Dl(),n?.preloadingStrategy?Il(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?Ol(n):[],n?.bindToComponentInputs?Tl().\u0275providers:[],n?.enableViewTransitions?Ml().\u0275providers:[],_l()]}}static forChild(e){return{ngModule:t,providers:[{provide:jt,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=te({})}return t})();function Dl(){return{provide:Zi,useFactory:()=>{let t=d(Ho),o=d(pe),e=d(qt),n=d(Fr),r=d(zt);return e.scrollOffset&&t.setOffset(e.scrollOffset),new Cl(r,n,t,o,e)}}}function $l(){return{provide:St,useClass:Lo}}function Al(){return{provide:St,useClass:Po}}function Ol(t){return[t.initialNavigation==="disabled"?El().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Rl().\u0275providers:[]]}var mi=new M("");function _l(){return[{provide:mi,useFactory:Ji},{provide:Vn,multi:!0,useExisting:mi}]}var kl=(()=>{class t{theme=$e(void 0);csp=$e({nonce:void 0});isThemeChanged=!1;document=d(x);baseStyle=d(U);constructor(){yt(()=>{Et.on("theme:change",e=>{$o(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),yt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){q.clearLoadedStyleNames(),Et.clear()}onThemeChange(e){q.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!q.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:i}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,h({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,h({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(h({name:"global-style"},s),i),q.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jr=(()=>{class t extends kl{ripple=$e(!1);platformId=d(se);inputStyle=$e(null);inputVariant=$e(null);overlayOptions={};csp=$e({nonce:void 0});filterMatchModeOptions={text:[A.STARTS_WITH,A.CONTAINS,A.NOT_CONTAINS,A.ENDS_WITH,A.EQUALS,A.NOT_EQUALS],numeric:[A.EQUALS,A.NOT_EQUALS,A.LESS_THAN,A.LESS_THAN_OR_EQUAL_TO,A.GREATER_THAN,A.GREATER_THAN_OR_EQUAL_TO],date:[A.DATE_IS,A.DATE_IS_NOT,A.DATE_BEFORE,A.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ee;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=h(h({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:i,inputVariant:s,theme:l,overlayOptions:a,translation:c}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),i&&this.inputStyle.set(i),s&&this.inputVariant.set(s),a&&(this.overlayOptions=a),c&&this.setTranslation(c),l&&this.setThemeConfig({theme:l,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pl=new M("PRIME_NG_CONFIG");function hu(...t){let o=t?.map(n=>({provide:Pl,useValue:n,multi:!1})),e=Ro(()=>{let n=d(jr);t?.forEach(r=>n.setConfig(r))});return pt([...o,e])}var es=(()=>{class t extends U{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),V=(()=>{class t{document=d(x);platformId=d(se);el=d(De);injector=d(xe);cd=d(Ze);renderer=d(bt);config=d(jr);baseComponentStyle=d(es);baseStyle=d(U);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Rt("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return Zo(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Ct(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{Xe.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Xe.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Xe.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Xe.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!q.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,h({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,h({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(h({name:"global-style"},this.styleOptions),i),q.setLoadedStyleName("common")}if(!q.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,h({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(h({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),q.setLoadedStyleName(this.componentStyle?.name)}if(!q.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,h({name:"layer-order",first:!0},this.styleOptions)),q.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,h({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Xe.clearLoadedStyleNames(),Et.on("theme:change",e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:h({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,inputs:{dt:"dt"},features:[B([es,U]),re]})}return t})();var Br=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let i=0;i<r.length;i++)e.classList.add(r[i])}else{let r=n.split(" ");for(let i=0;i<r.length;i++)e.className+=" "+r[i]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(i=>this.removeClass(e,i)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var i=0;i<n.length;i++){if(n[i]==e)return r;n[i].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],i=0;for(var s=0;s<r.length;s++){if(r[s]==e)return i;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&i++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",i=!0){e&&n&&(i&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let i=je=>{if(je)return getComputedStyle(je).getPropertyValue("position")==="relative"?je:i(je.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),v=i(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},w,$;a.top+l+s.height>p.height?(w=a.top-v.top-s.height,e.style.transformOrigin="bottom",a.top+w<0&&(w=-1*a.top)):(w=l+a.top-v.top,e.style.transformOrigin="top");let N=a.left+s.width-p.width,Te=a.left-v.left;s.width>p.width?$=(a.left-v.left)*-1:N>0?$=Te-N:$=a.left-v.left,e.style.top=w+"px",e.style.left=$+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=i.height,l=i.width,a=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),p=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),v=this.getViewport(),w,$;u.top+a+s>v.height?(w=u.top+p-s,e.style.transformOrigin="bottom",w<0&&(w=p)):(w=a+u.top+p,e.style.transformOrigin="top"),u.left+l>v.width?$=Math.max(0,u.left+g+c-l):$=u.left+g,e.style.top=w+"px",e.style.left=$+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),i=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return i.test(a.getPropertyValue("overflow"))||i.test(a.getPropertyValue("overflowX"))||i.test(a.getPropertyValue("overflowY"))};for(let l of r){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let u of c){let p=this.findSingle(l,u);p&&s(p)&&n.push(p)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-i-l,p=e.scrollTop,g=e.clientHeight,v=this.getOuterHeight(n);u<0?e.scrollTop=p+u:u+v>g&&(e.scrollTop=p+u-g+v)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,i=0,s=function(){i=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,i=50,s=n,l=i/s;let a=setInterval(()=>{r=r-l,r<=0&&(r=0,clearInterval(a)),e.style.opacity=r},i)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,i=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return i.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let i=getComputedStyle(e);r+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||i.clientWidth,l=e.innerHeight||r.clientHeight||i.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var i=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),i=[];for(let s of r){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&i.push(s)}return i}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let i=getComputedStyle(r);if(this.isVisible(r)&&i.display!="none"&&i.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),i=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?i=r.length-1:i=s-1:s!=-1&&s!==r.length-1&&(i=s+1)}return r[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let i=document.createElement(e);return this.setAttributes(i,n),i.append(...r),i}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(i,s)=>{let l=e?.$attrs?.[i]?[e?.$attrs?.[i]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let p=Array.isArray(c)?r(i,c):Object.entries(c).map(([g,v])=>i==="style"&&(v||v===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${v}`:v?g:void 0);a=p.length?a.concat(p.filter(g=>!!g)):a}}return a},l)};Object.entries(n).forEach(([i,s])=>{if(s!=null){let l=i.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):i==="pBind"?this.setAttributes(e,s):(s=i==="class"?[...new Set(r("class",s))].join(" ").trim():i==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=s),e.setAttribute(i,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),ts=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Br.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var ns=(()=>{class t extends V{autofocus=!1;_autofocus=!1;focused=!1;platformId=d(se);document=d(x);host=d(De);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ln(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Br.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",R],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[fe,L]})}return t})(),ku=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=te({})}return t})();var Ll=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Nl={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":Yn(t.value)&&String(t.value).length===1,"p-badge-dot":ue(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},rs=(()=>{class t extends U{name="badge";theme=Ll;classes=Nl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Hr=(()=>{class t extends V{styleClass=ie();style=ie();badgeSize=ie();size=ie();severity=ie();value=ie();badgeDisabled=ie(!1,{transform:R});_componentStyle=d(rs);containerClass=vt(()=>{let e="p-badge p-component";return Yn(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),ue(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275cmp=ae({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(Io(r.style()),qe(r.containerClass()),Eo("display",r.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[B([rs]),L],decls:1,vars:1,template:function(n,r){n&1&&rn(0),n&2&&on(r.value())},dependencies:[Ye,Se],encapsulation:2,changeDetection:0})}return t})(),os=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=te({imports:[Hr,Se,Se]})}return t})();var Ul=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,jl=(()=>{class t extends U{name="baseicon";inlineStyles=Ul;static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Bl=["*"],is=(()=>{class t extends V{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=ue(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275cmp=ae({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",R],styleClass:"styleClass"},features:[B([jl]),fe,L],ngContentSelectors:Bl,decls:1,vars:0,template:function(n,r){n&1&&(tn(),nn(0))},encapsulation:2,changeDetection:0})}return t})();var ss=(()=>{class t extends is{pathId;ngOnInit(){this.pathId="url(#"+Rt()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275cmp=ae({type:t,selectors:[["SpinnerIcon"]],features:[L],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(to(),Ge(0,"svg",0)(1,"g"),ce(2,"path",1),Qe(),Ge(3,"defs")(4,"clipPath",2),ce(5,"rect",3),Qe()()()),n&2&&(qe(r.getClassNames()),Y("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),_(),Y("clip-path",r.pathId),_(3),T("id",r.pathId))},encapsulation:2})}return t})();var zl=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Hl={root:"p-ink"},as=(()=>{class t extends U{name="ripple";theme=zl;classes=Hl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ls=(()=>{class t extends V{zone=d(pe);_componentStyle=d(as);animationListener;mouseDownListener;timeout;constructor(){super(),yt(()=>{ln(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Je(n,"p-ink-active"),!Qn(n)&&!Zn(n)){let l=Math.max(Wo(this.el.nativeElement),Go(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let r=qo(this.el.nativeElement),i=e.pageX-r.left+this.document.body.scrollTop-Zn(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-Qn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",i+"px"),Le(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Je(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Je(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Je(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Qo(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=P({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[B([as]),L]})}return t})();var Vl=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Wl={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Ie=(()=>{class t extends U{name="button";theme=Vl;classes=Wl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var ql=["content"],Gl=["loading"],Ql=["icon"],Zl=["*"],ds=t=>({class:t});function Yl(t,o){t&1&&To(0)}function Jl(t,o){if(t&1&&ce(0,"span",8),t&2){let e=J(3);T("ngClass",e.iconClass()),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Kl(t,o){if(t&1&&ce(0,"SpinnerIcon",9),t&2){let e=J(3);T("styleClass",e.spinnerIconClass())("spin",!0),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Xl(t,o){if(t&1&&(Kt(0),Oe(1,Jl,1,3,"span",6)(2,Kl,1,4,"SpinnerIcon",7),Xt()),t&2){let e=J(2);_(),T("ngIf",e.loadingIcon),_(),T("ngIf",!e.loadingIcon)}}function ec(t,o){}function tc(t,o){if(t&1&&Oe(0,ec,0,0,"ng-template",10),t&2){let e=J(2);T("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function nc(t,o){if(t&1&&(Kt(0),Oe(1,Xl,3,2,"ng-container",2)(2,tc,1,1,null,5),Xt()),t&2){let e=J();_(),T("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),_(),T("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Gn(3,ds,e.iconClass()))}}function rc(t,o){if(t&1&&ce(0,"span",8),t&2){let e=J(2);qe(e.icon),T("ngClass",e.iconClass()),Y("data-pc-section","icon")}}function oc(t,o){}function ic(t,o){if(t&1&&Oe(0,oc,0,0,"ng-template",10),t&2){let e=J(2);T("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function sc(t,o){if(t&1&&(Kt(0),Oe(1,rc,1,4,"span",11)(2,ic,1,1,null,5),Xt()),t&2){let e=J();_(),T("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),_(),T("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Gn(3,ds,e.iconClass()))}}function ac(t,o){if(t&1&&(Ge(0,"span",12),rn(1),Qe()),t&2){let e=J();Y("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),_(),on(e.label)}}function lc(t,o){if(t&1&&ce(0,"p-badge",13),t&2){let e=J();T("value",e.badge)("severity",e.badgeSeverity)}}var Ee={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},cs=(()=>{class t extends V{_componentStyle=d(Ie);static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,r){n&2&&Jt("p-button-label",!0)},features:[B([Ie]),L]})}return t})(),us=(()=>{class t extends V{_componentStyle=d(Ie);static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,r){n&2&&Jt("p-button-icon",!0)},features:[B([Ie]),L]})}return t})(),Fd=(()=>{class t extends V{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=jn(us);labelSignal=jn(cs);isIconOnly=vt(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Ee);isTextButton=vt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=d(Ie);ngAfterViewInit(){super.ngAfterViewInit(),Le(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let i in r)this[i]=r[i]}}getStyleClass(){let e=[Ee.button,Ee.component];return this.icon&&!this.label&&ue(this.htmlElement.textContent)&&e.push(Ee.iconOnly),this.loading&&(e.push(Ee.disabled,Ee.loading),!this.icon&&this.label&&e.push(Ee.labelOnly),this.icon&&!this.label&&!ue(this.htmlElement.textContent)&&e.push(Ee.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ue(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}createLabel(){if(!Ke(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Ke(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&Le(n,r);let i=this.getIconClass();i&&Le(n,i),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Ke(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Ke(this.htmlElement,".p-button-icon"),n=Ke(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","pButton",""]],contentQueries:function(n,r,i){n&1&&(qn(i,r.iconSignal,us,5),qn(i,r.labelSignal,cs,5)),n&2&&Mo(2)},hostVars:4,hostBindings:function(n,r){n&2&&Jt("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],outlined:[2,"outlined","outlined",R],size:"size",plain:[2,"plain","plain",R],fluid:[2,"fluid","fluid",R],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[B([Ie]),fe,L,re]})}return t})(),cc=(()=>{class t extends V{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new oe;onFocus=new oe;onBlur=new oe;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ue(this.fluid)?!!n:this.fluid}_componentStyle=d(Ie);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let i in r)this[i]=r[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=E(t)))(r||t)}})();static \u0275cmp=ae({type:t,selectors:[["p-button"]],contentQueries:function(n,r,i){if(n&1&&(_e(i,ql,5),_e(i,Gl,5),_e(i,Ql,5),_e(i,Yo,4)),n&2){let s;ke(s=Pe())&&(r.contentTemplate=s.first),ke(s=Pe())&&(r.loadingIconTemplate=s.first),ke(s=Pe())&&(r.iconTemplate=s.first),ke(s=Pe())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",R],loading:[2,"loading","loading",R],loadingIcon:"loadingIcon",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],plain:[2,"plain","plain",R],severity:"severity",outlined:[2,"outlined","outlined",R],link:[2,"link","link",R],tabindex:[2,"tabindex","tabindex",Do],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",R],fluid:[2,"fluid","fluid",R],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[B([Ie]),fe,L,re],ngContentSelectors:Zl,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(tn(),Ge(0,"button",0),en("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),nn(1),Oe(2,Yl,1,0,"ng-container",1)(3,nc,3,5,"ng-container",2)(4,sc,3,5,"ng-container",2)(5,ac,2,3,"span",3)(6,lc,1,2,"p-badge",4),Qe()),n&2&&(T("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),Y("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),_(2),T("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),_(),T("ngIf",r.loading),_(),T("ngIf",!r.loading),_(),T("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),_(),T("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[Ye,Fo,Uo,Bo,jo,ls,ns,ss,os,Hr,Se],encapsulation:2,changeDetection:0})}return t})(),Ud=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=te({imports:[Ye,cc,Se,Se]})}return t})();export{ni as a,Xo as b,Oc as c,ks as d,Ce as e,fa as f,ve as g,gi as h,eu as i,tu as j,nu as k,jr as l,hu as m,V as n,Hr as o,os as p,is as q,ss as r,Br as s,ts as t,ns as u,ku as v,ls as w,Fd as x,cc as y,Ud as z};
