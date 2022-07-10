const ot=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ot();const j={},st=(e,t)=>e===t,lt=Symbol("solid-proxy"),ct=Symbol("solid-track"),ae={equals:st};let at=Ke;const G={},F=1,ue=2,Ie={owned:null,cleanups:null,context:null,owner:null},[ut,or]=J(!1);var p=null;let ie=null,S=null,ee=null,P=null,W=null,be=0;function te(e,t){const n=S,r=p,i=e.length===0,o=i?Ie:{owned:null,cleanups:null,context:null,owner:t||r},l=i?e:()=>e(()=>Ae(o));p=o,S=null;try{return he(l,!0)}finally{S=n,p=r}}function J(e,t){t=t?Object.assign({},ae,t):ae;const n={value:e,observers:null,observerSlots:null,pending:G,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.pending!==G?n.pending:n.value)),Se(n,i));return[Me.bind(n),r]}function ft(e,t,n){const r=Ce(e,t,!0,F);oe(r)}function A(e,t,n){const r=Ce(e,t,!1,F);oe(r)}function L(e,t,n){n=n?Object.assign({},ae,n):ae;const r=Ce(e,t,!0,0);return r.pending=G,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,oe(r),Me.bind(r)}function Be(e){if(ee)return e();let t;const n=ee=[];try{t=e()}finally{ee=null}return he(()=>{for(let r=0;r<n.length;r+=1){const i=n[r];if(i.pending!==G){const o=i.pending;i.pending=G,Se(i,o)}}},!1),t}function M(e){let t,n=S;return S=null,t=e(),S=n,t}function We(e,t,n){const r=Array.isArray(e);let i,o=n&&n.defer;return l=>{let s;if(r){s=Array(e.length);for(let u=0;u<e.length;u++)s[u]=e[u]()}else s=e();if(o){o=!1;return}const a=M(()=>t(s,i,l));return i=s,a}}function ye(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function dt(){return p}function ht(e,t){const n=p;p=e;try{return he(t,!0)}finally{p=n}}function vt(e){const t=S,n=p;return Promise.resolve().then(()=>{S=t,p=n;let r;return Be(e),S=p=null,r?r.done:void 0})}function _t(){return[ut,vt]}function je(e){const t=Symbol("context");return{id:t,Provider:$t(t),defaultValue:e}}function we(e){let t;return(t=He(p,e.id))!==void 0?t:e.defaultValue}function xe(e){const t=L(e);return L(()=>$e(t()))}function Me(){const e=ie;if(this.sources&&(this.state||e)){const t=P;P=null,this.state===F||e?oe(this):fe(this),P=t}if(S){const t=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(t)):(S.sources=[this],S.sourceSlots=[t]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return this.value}function Se(e,t,n){if(ee)return e.pending===G&&ee.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&he(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];r&&ie.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?P.push(o):W.push(o),o.observers&&Fe(o)),r||(o.state=F)}if(P.length>1e6)throw P=[],new Error},!1),t}function oe(e){if(!e.fn)return;Ae(e);const t=p,n=S,r=be;S=p=e,gt(e,e.value,r),S=n,p=t}function gt(e,t,n){let r;try{r=e.fn(t)}catch(i){Ve(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?Se(e,r):e.value=r,e.updatedAt=n)}function Ce(e,t,n,r=F,i){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==Ie&&(p.owned?p.owned.push(o):p.owned=[o]),o}function Ue(e){const t=ie;if(e.state===0||t)return;if(e.state===ue||t)return fe(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<be);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===F||t)oe(e);else if(e.state===ue||t){const i=P;P=null,fe(e,n[0]),P=i}}function he(e,t){if(P)return e();let n=!1;t||(P=[]),W?n=!0:W=[],be++;try{const r=e();return pt(n),r}catch(r){P||(W=null),Ve(r)}}function pt(e){P&&(Ke(P),P=null),!e&&(W.length?Be(()=>{at(W),W=null}):W=null)}function Ke(e){for(let t=0;t<e.length;t++)Ue(e[t])}function fe(e,t){const n=ie;e.state=0;for(let r=0;r<e.sources.length;r+=1){const i=e.sources[r];i.sources&&(i.state===F||n?i!==t&&Ue(i):(i.state===ue||n)&&fe(i,t))}}function Fe(e){const t=ie;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ue,r.pure?P.push(r):W.push(r),r.observers&&Fe(r))}}function Ae(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();r<i.length&&(o.sourceSlots[l]=r,i[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)Ae(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ve(e){throw e}function He(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:He(e.owner,t):void 0}function $e(e){if(typeof e=="function"&&!e.length)return $e(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=$e(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function $t(e){return function(n){let r;return ft(()=>r=M(()=>(p.context={[e]:n.value},xe(()=>n.children)))),r}}const mt=Symbol("fallback");function Ne(e){for(let t=0;t<e.length;t++)e[t]()}function bt(e,t,n={}){let r=[],i=[],o=[],l=0,s=t.length>1?[]:null;return ye(()=>Ne(o)),()=>{let a=e()||[],u,c;return a[ct],M(()=>{let h=a.length,d,_,T,g,E,$,b,C,N;if(h===0)l!==0&&(Ne(o),o=[],r=[],i=[],l=0,s&&(s=[])),n.fallback&&(r=[mt],i[0]=te(B=>(o[0]=B,n.fallback())),l=1);else if(l===0){for(i=new Array(h),c=0;c<h;c++)r[c]=a[c],i[c]=te(v);l=h}else{for(T=new Array(h),g=new Array(h),s&&(E=new Array(h)),$=0,b=Math.min(l,h);$<b&&r[$]===a[$];$++);for(b=l-1,C=h-1;b>=$&&C>=$&&r[b]===a[C];b--,C--)T[C]=i[b],g[C]=o[b],s&&(E[C]=s[b]);for(d=new Map,_=new Array(C+1),c=C;c>=$;c--)N=a[c],u=d.get(N),_[c]=u===void 0?-1:u,d.set(N,c);for(u=$;u<=b;u++)N=r[u],c=d.get(N),c!==void 0&&c!==-1?(T[c]=i[u],g[c]=o[u],s&&(E[c]=s[u]),c=_[c],d.set(N,c)):o[u]();for(c=$;c<h;c++)c in T?(i[c]=T[c],o[c]=g[c],s&&(s[c]=E[c],s[c](c))):i[c]=te(v);i=i.slice(0,l=h),r=a.slice(0)}return i});function v(h){if(o[c]=h,s){const[d,_]=J(c);return s[c]=_,t(a[c],d)}return t(a[c])}}}function k(e,t){return M(()=>e(t||{}))}function le(){return!0}const yt={get(e,t,n){return t===lt?n:e.get(t)},has(e,t){return e.has(t)},set:le,deleteProperty:le,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:le,deleteProperty:le}},ownKeys(e){return e.keys()}};function _e(e){return(e=typeof e=="function"?e():e)==null?{}:e}function wt(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=_e(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in _e(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(_e(e[n])));return[...new Set(t)]}},yt)}function ze(e){const t="fallback"in e&&{fallback:()=>e.fallback};return L(bt(()=>e.each,e.children,t||void 0))}function Te(e){let t=!1;const n=L(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return L(()=>{const r=n();if(r){const i=e.children;return(t=typeof i=="function"&&i.length>0)?M(()=>i(r)):i}return e.fallback})}function xt(e,t,n){let r=n.length,i=t.length,o=r,l=0,s=0,a=t[i-1].nextSibling,u=null;for(;l<i||s<o;){if(t[l]===n[s]){l++,s++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const c=o<r?s?n[s-1].nextSibling:n[o-s]:a;for(;s<o;)e.insertBefore(n[s++],c)}else if(o===s)for(;l<i;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[s]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--o],c),t[i]=n[o]}else{if(!u){u=new Map;let v=s;for(;v<o;)u.set(n[v],v++)}const c=u.get(t[l]);if(c!=null)if(s<c&&c<o){let v=l,h=1,d;for(;++v<i&&v<o&&!((d=u.get(t[v]))==null||d!==c+h);)h++;if(h>c-s){const _=t[l];for(;s<c;)e.insertBefore(n[s++],_)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const Re="_$DX_DELEGATE";function St(e,t,n){let r;return te(i=>{r=i,t===document?e():I(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function q(e,t,n){const r=document.createElement("template");r.innerHTML=e;let i=r.content.firstChild;return n&&(i=i.firstChild),i}function Ct(e,t=window.document){const n=t[Re]||(t[Re]=new Set);for(let r=0,i=e.length;r<i;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,At))}}function Ge(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function f(e,t){t==null?e.removeAttribute("class"):e.className=t}function I(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return de(e,t,r,n);A(i=>de(e,t(),i,n),r)}function At(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),j.registry&&!j.done&&(j.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function de(e,t,n,r,i){for(j.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(j.context)return n;if(o==="number"&&(t=t.toString()),l){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=V(e,n,r,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(j.context)return n;n=V(e,n,r)}else{if(o==="function")return A(()=>{let s=t();for(;typeof s=="function";)s=s();n=de(e,s,n,r)}),()=>n;if(Array.isArray(t)){const s=[],a=n&&Array.isArray(n);if(me(s,t,n,i))return A(()=>n=de(e,s,n,r,!0)),()=>n;if(j.context){for(let u=0;u<s.length;u++)if(s[u].parentNode)return n=s}if(s.length===0){if(n=V(e,n,r),l)return n}else a?n.length===0?Le(e,s,r):xt(e,n,s):(n&&V(e),Le(e,s));n=s}else if(t instanceof Node){if(j.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=V(e,n,r,t);V(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function me(e,t,n,r){let i=!1;for(let o=0,l=t.length;o<l;o++){let s=t[o],a=n&&n[o];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))i=me(e,s,a)||i;else if(typeof s=="function")if(r){for(;typeof s=="function";)s=s();i=me(e,Array.isArray(s)?s:[s],a)||i}else e.push(s),i=!0;else{const u=String(s);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return i}function Le(e,t,n){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function V(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(i!==s){const a=s.parentNode===e;!o&&!l?a?e.replaceChild(i,s):e.insertBefore(i,n):a&&s.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function Tt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function kt([e,t],n,r){return[n?()=>n(e()):e,r?i=>t(r(i)):t]}function Pt(e){try{return document.querySelector(e)}catch{return null}}function Et(e,t){const n=Pt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Nt(e,t,n,r){let i=!1;const o=s=>typeof s=="string"?{value:s}:s,l=kt(J(o(e()),{equals:(s,a)=>s.value===a.value}),void 0,s=>(!i&&t(s),s));return n&&ye(n((s=e())=>{i=!0,l[1](o(s)),i=!1})),{signal:l,utils:r}}function Rt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:J({value:""})};return e}function Lt(){return Nt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),Et(window.location.hash.slice(1),n)},e=>Tt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const qt=/^(?:[a-z0-9]+:)?\/\//i,Dt=/^\/+|\/+$/g;function ne(e,t=!1){const n=e.replace(Dt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ce(e,t,n){if(qt.test(t))return;const r=ne(e),i=n&&ne(n);let o="";return!i||t.startsWith("/")?o=r:i.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+i:o=i,(o||"/")+ne(t,!o)}function Ot(e,t){if(e==null)throw new Error(t);return e}function Je(e,t){return ne(e).replace(/\/*(\*.*)?$/g,"")+ne(t)}function It(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function z(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Bt(e,t){const[n,r]=e.split("/*",2),i=n.split("/").filter(Boolean),o=i.length;return l=>{const s=l.split("/").filter(Boolean),a=s.length-o;if(a<0||a>0&&r===void 0&&!t)return null;const u={path:o?"":"/",params:{}};for(let c=0;c<o;c++){const v=i[c],h=s[c];if(v[0]===":")u.params[v.slice(1)]=h;else if(v.localeCompare(h,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${h}`}return r&&(u.params[r]=a?s.slice(-a).join("/"):""),u}}function Wt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((i,o)=>i+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Xe(e){const t=new Map,n=dt();return new Proxy({},{get(r,i){return t.has(i)||ht(n,()=>t.set(i,L(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ye(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const i=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(n+=t[1]),r=r.slice(t[0].length);return Ye(r).reduce((o,l)=>[...o,...i.map(s=>s+l)],[])}const jt=100,Qe=je(),ve=je(),Ze=()=>Ot(we(Qe),"Make sure your app is wrapped in a <Router />");let re;const et=()=>re||we(ve)||Ze().base;function Mt(e,t="",n){const{component:r,data:i,children:o}=e,l=!o||Array.isArray(o)&&!o.length,s={key:e,element:r?()=>k(r,{}):()=>{const{element:a}=e;return a===void 0&&n?k(n,{}):a},preload:e.component?r.preload:e.preload,data:i};return tt(e.path).reduce((a,u)=>{for(const c of Ye(u)){const v=Je(t,c),h=l?v:v.split("/*",1)[0];a.push({...s,originalPath:c,pattern:h,matcher:Bt(h,!l)})}return a},[])}function Ut(e,t=0){return{routes:e,score:Wt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let i=e.length-1;i>=0;i--){const o=e[i],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function tt(e){return Array.isArray(e)?e:[e]}function nt(e,t="",n,r=[],i=[]){const o=tt(e);for(let l=0,s=o.length;l<s;l++){const a=o[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=Mt(a,t,n);for(const c of u){if(r.push(c),a.children)nt(a.children,c.pattern,n,r,i);else{const v=Ut([...r],i.length);i.push(v)}r.pop()}}}return r.length?i:i.sort((l,s)=>s.score-l.score)}function Kt(e,t){for(let n=0,r=e.length;n<r;n++){const i=e[n].matcher(t);if(i)return i}return[]}function Ft(e,t){const n=new URL("http://sar"),r=L(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),i=L(()=>z(r().pathname)),o=L(()=>z(r().search,!0)),l=L(()=>z(r().hash)),s=L(()=>"");return{get pathname(){return i()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return s()},query:Xe(We(o,()=>It(r())))}}function Vt(e,t="",n,r){const{signal:[i,o],utils:l={}}=Rt(e),s=l.parsePath||(m=>m),a=l.renderPath||(m=>m),u=ce("",t),c=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!i().value&&o({value:u,replace:!0,scroll:!1});const[v,h]=_t(),[d,_]=J(i().value),[T,g]=J(i().state),E=Ft(d,T),$=[],b={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(m){return ce(u,m)}};if(n)try{re=b,b.data=n({data:void 0,params:{},location:E,navigate:N(b)})}finally{re=void 0}function C(m,y,D){M(()=>{if(typeof y=="number"){y&&(l.go?l.go(y):console.warn("Router integration does not support relative routing"));return}const{replace:O,resolve:Y,scroll:Q,state:se}={replace:!1,resolve:!0,scroll:!0,...D},U=Y?m.resolvePath(y):ce("",y);if(U===void 0)throw new Error(`Path '${y}' is not a routable path`);if($.length>=jt)throw new Error("Too many redirects");const K=d();if(U!==K||se!==T()){const Z=$.push({value:K,replace:O,scroll:Q,state:T()});h(()=>{_(U),g(se)}).then(()=>{$.length===Z&&B({value:U,state:se})})}})}function N(m){return m=m||we(ve)||b,(y,D)=>C(m,y,D)}function B(m){const y=$[0];y&&((m.value!==y.value||m.state!==y.state)&&o({...m,replace:y.replace,scroll:y.scroll}),$.length=0)}A(()=>{const{value:m,state:y}=i();M(()=>{m!==d()&&h(()=>{_(m),g(y)})})});{let m=function(D){return D.namespaceURI==="http://www.w3.org/2000/svg"},y=function(D){if(D.defaultPrevented||D.button!==0||D.metaKey||D.altKey||D.ctrlKey||D.shiftKey)return;const O=D.composedPath().find(Ee=>Ee instanceof Node&&Ee.nodeName.toUpperCase()==="A");if(!O)return;const Y=m(O),Q=Y?O.href.baseVal:O.href;if((Y?O.target.baseVal:O.target)||!Q&&!O.hasAttribute("state"))return;const U=(O.getAttribute("rel")||"").split(/\s+/);if(O.hasAttribute("download")||U&&U.includes("external"))return;const K=Y?new URL(Q,document.baseURI):new URL(Q),Z=z(K.pathname);if(K.origin!==window.location.origin||u&&Z&&!Z.toLowerCase().startsWith(u.toLowerCase()))return;const it=s(Z+z(K.search,!0)+z(K.hash)),Pe=O.getAttribute("state");D.preventDefault(),C(b,it,{resolve:!1,replace:O.hasAttribute("replace"),scroll:!O.hasAttribute("noscroll"),state:Pe&&JSON.parse(Pe)})};var X=m,ke=y;document.addEventListener("click",y),ye(()=>document.removeEventListener("click",y))}return{base:b,out:c,location:E,isRouting:v,renderPath:a,parsePath:s,navigatorFactory:N}}function Ht(e,t,n,r){const{base:i,location:o,navigatorFactory:l}=e,{pattern:s,element:a,preload:u,data:c}=r().route,v=L(()=>r().path),h=Xe(()=>r().params);u&&u();const d={parent:t,pattern:s,get child(){return n()},path:v,params:h,data:t.data,outlet:a,resolvePath(_){return ce(i.path(),_,v())}};if(c)try{re=d,d.data=c({data:t.data,params:h,location:o,navigate:l(d)})}finally{re=void 0}return d}const zt=e=>{const{source:t,url:n,base:r,data:i,out:o}=e,l=t||Lt(),s=Vt(l,r,i);return k(Qe.Provider,{value:s,get children(){return e.children}})},Gt=e=>{const t=Ze(),n=et(),r=xe(()=>e.children),i=L(()=>nt(r(),Je(n.pattern,e.base||""),Jt)),o=L(()=>Kt(i(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:u,path:c,params:v})=>({originalPath:u.originalPath,pattern:u.pattern,path:c,params:v})));const l=[];let s;const a=L(We(o,(u,c,v)=>{let h=c&&u.length===c.length;const d=[];for(let _=0,T=u.length;_<T;_++){const g=c&&c[_],E=u[_];v&&g&&E.route.key===g.route.key?d[_]=v[_]:(h=!1,l[_]&&l[_](),te($=>{l[_]=$,d[_]=Ht(t,d[_-1]||n,()=>a()[_+1],()=>o()[_])}))}return l.splice(u.length).forEach(_=>_()),v&&h?v:(s=d[0],d)}));return k(Te,{get when(){return a()&&s},children:u=>k(ve.Provider,{value:u,get children(){return u.outlet()}})})},ge=e=>{const t=xe(()=>e.children);return wt(e,{get children(){return t()}})},Jt=()=>{const e=et();return k(Te,{get when(){return e.child},children:t=>k(ve.Provider,{value:t,get children(){return t.outlet()}})})},Xt="_hero_myqp0_7",Yt="_container_myqp0_11",Qt="_heading_myqp0_18",Zt="_description_myqp0_27",en="_btn_myqp0_33",tn="_about_myqp0_51",nn="_title_myqp0_55",rn="_content_myqp0_65",on="_info_myqp0_71",sn="_infotext_myqp0_75",ln="_team_myqp0_80";var R={hero:Xt,container:Yt,heading:Qt,description:Zt,btn:en,about:tn,title:nn,content:rn,info:on,infotext:sn,team:ln};const cn="_cards_43luv_1",an="_card_43luv_1",un="_cardInfo_43luv_21",fn="_cardTitle_43luv_27",dn="_cardDesc_43luv_33",hn="_imageWrapper_43luv_37";var H={cards:cn,card:an,cardInfo:un,cardTitle:fn,cardDesc:dn,imageWrapper:hn};const qe=q("<div></div>"),vn=q('<div><div><a target="blank"></a><p></p></div><div><img src="src/assets/logo.svg" alt="#"></div></div>'),_n=()=>(()=>{const e=qe.cloneNode(!0);return I(e,k(ze,{each:gn,get fallback(){return qe.cloneNode(!0)},children:(t,n)=>(()=>{const r=vn.cloneNode(!0),i=r.firstChild,o=i.firstChild,l=o.nextSibling,s=i.nextSibling;return I(o,()=>t.name),I(l,()=>t.work),A(a=>{const u=H.card,c=H.cardInfo,v=H.cardTitle,h=t.git,d=H.cardDesc,_=H.imageWrapper;return u!==a._v$&&f(r,a._v$=u),c!==a._v$2&&f(i,a._v$2=c),v!==a._v$3&&f(o,a._v$3=v),h!==a._v$4&&Ge(o,"href",a._v$4=h),d!==a._v$5&&f(l,a._v$5=d),_!==a._v$6&&f(s,a._v$6=_),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),r})()})),A(()=>f(e,H.cards)),e})();let gn=[{name:"Karen Khachatryan",work:"Front-End Developer",git:"https://github.com/IamVirgoo"},{name:"Mark Sorokin",work:"Full-Stack Developer",git:"https://github.com/MaskedTrench"},{name:"Alexey Ryumkin",work:"Back-End Developer",git:"https://github.com/YHT97"},{name:"Vadim Breev",work:"Back-End Developer",git:"https://github.com/Vadim2422"}];const pn=q('<section><div><h1>E-Commerce Tool</h1><div>Especially for business</div><a href="/service" target="blank">Try</a></div></section>'),$n=q('<section><div><h1>About Us</h1><div><div><img src="/src/assets/logo.svg" alt="#"></div><div><p>We, Cpp Segmentation Error, are a young team from Lipetsk engaged in WEB development.</p></div></div></div></section>'),mn=q("<section><div><h1>Team</h1></div></section>"),bn=()=>[(()=>{const e=pn.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.nextSibling;return A(o=>{const l=R.hero,s=R.container,a=R.heading,u=R.description,c=R.btn;return l!==o._v$&&f(e,o._v$=l),s!==o._v$2&&f(t,o._v$2=s),a!==o._v$3&&f(n,o._v$3=a),u!==o._v$4&&f(r,o._v$4=u),c!==o._v$5&&f(i,o._v$5=c),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})(),(()=>{const e=$n.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.firstChild,o=i.nextSibling,l=o.firstChild;return A(s=>{const a=R.about,u=R.container,c=R.title,v=R.content,h=R.wrapper,d=R.info,_=R.infotext;return a!==s._v$6&&f(e,s._v$6=a),u!==s._v$7&&f(t,s._v$7=u),c!==s._v$8&&f(n,s._v$8=c),v!==s._v$9&&f(r,s._v$9=v),h!==s._v$10&&f(i,s._v$10=h),d!==s._v$11&&f(o,s._v$11=d),_!==s._v$12&&f(l,s._v$12=_),s},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),e})(),(()=>{const e=mn.cloneNode(!0),t=e.firstChild,n=t.firstChild;return I(t,k(_n,{}),null),A(r=>{const i=R.team,o=R.container,l=R.title;return i!==r._v$13&&f(e,r._v$13=i),o!==r._v$14&&f(t,r._v$14=o),l!==r._v$15&&f(n,r._v$15=l),r},{_v$13:void 0,_v$14:void 0,_v$15:void 0}),e})()],yn="_hero_1uc4f_1",wn="_container_1uc4f_5",xn="_heading_1uc4f_12",Sn="_description_1uc4f_21",Cn="_btn_1uc4f_27",An="_option_1uc4f_45",Tn="_title_1uc4f_49",kn="_result_1uc4f_85",Pn="_final_1uc4f_89",En="_content_1uc4f_94",Nn="_resDescription_1uc4f_100";var w={hero:yn,container:wn,heading:xn,description:Sn,btn:Cn,option:An,title:Tn,result:kn,final:Pn,content:En,resDescription:Nn};const Rn=q('<section><div><h1>How it works?</h1><p>The program is a web application, the main script of which is written in Python. The script works according to the following principle: The database is loaded, the script receives values from the database and processes them according to the written mathematical model</p><a href="/service#option" target="blank">Try</a></div></section>'),Ln=q('<section id="option"><div><h1>Enter the link</h1><p>Description that we need to wait</p><div><input type="input" placeholder="https://www.google.ru/sheets"><button type="submit">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C</button></div></div></section>'),qn=q('<select id=""></select>'),Dn=q("<section><div><h1>Choose the name of product</h1><p>Description that we need to wait</p><div></div></div></section>"),On=q("<section><div><h1>Result</h1><div><p>In the first half of the year, based on the downloaded database, the product you selected will cost: <strong>\u{1F4B2}</strong></p><p>In the second half of the year, based on the downloaded database, the product you selected will cost: <strong>\u{1F4B2}</strong></p><p>In the coming year, based on the downloaded database, the product you selected will cost: <strong>\u{1F4B2}</strong></p></div></div></section>"),De=q("<div></div>"),In=q("<option></option>");let Bn,rt=!0,Oe;function Wn(){var e=new Request("https://dollar-api-application.herokuapp.com/api/v1/"+Bn);fetch(e).then(t=>t.json()).then(t=>{Oe=t}).then(()=>{console.log("Getted!"),console.log(Oe.ctn),rt=!0})}const jn=()=>[(()=>{const e=Rn.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.nextSibling;return A(o=>{const l=w.hero,s=w.container,a=w.heading,u=w.description,c=w.btn;return l!==o._v$&&f(e,o._v$=l),s!==o._v$2&&f(t,o._v$2=s),a!==o._v$3&&f(n,o._v$3=a),u!==o._v$4&&f(r,o._v$4=u),c!==o._v$5&&f(i,o._v$5=c),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})(),(()=>{const e=Ln.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.nextSibling,o=i.firstChild,l=o.nextSibling;return l.$$click=Wn,A(s=>{const a=w.option,u=w.container,c=w.title,v=w.description,h=w.btnWrapper;return a!==s._v$6&&f(e,s._v$6=a),u!==s._v$7&&f(t,s._v$7=u),c!==s._v$8&&f(n,s._v$8=c),v!==s._v$9&&f(r,s._v$9=v),h!==s._v$10&&f(i,s._v$10=h),s},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),e})(),(()=>{const e=Dn.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.nextSibling;return I(i,k(Te,{when:rt,get fallback(){return De.cloneNode(!0)},get children(){const o=qn.cloneNode(!0);return I(o,k(ze,{each:Mn,get fallback(){return De.cloneNode(!0)},children:l=>(()=>{const s=In.cloneNode(!0);return I(s,()=>l.name),A(()=>Ge(s,"id",l.name)),s})()})),o}})),A(o=>{const l=w.result,s=w.container,a=w.title,u=w.description,c=w.content;return l!==o._v$11&&f(e,o._v$11=l),s!==o._v$12&&f(t,o._v$12=s),a!==o._v$13&&f(n,o._v$13=a),u!==o._v$14&&f(r,o._v$14=u),c!==o._v$15&&f(i,o._v$15=c),o},{_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),e})(),(()=>{const e=On.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.firstChild,o=i.firstChild,l=o.nextSibling,s=l.firstChild,a=i.nextSibling,u=a.firstChild,c=u.nextSibling,v=c.firstChild,h=a.nextSibling,d=h.firstChild,_=d.nextSibling,T=_.firstChild;return I(l,()=>pe["first-half"],s),I(c,()=>pe["first-half"],v),I(_,()=>pe.all,T),A(g=>{const E=w.final,$=w.container,b=w.title,C=w.content,N=w.resDescription,B=w.resDescription,X=w.resDescription;return E!==g._v$16&&f(e,g._v$16=E),$!==g._v$17&&f(t,g._v$17=$),b!==g._v$18&&f(n,g._v$18=b),C!==g._v$19&&f(r,g._v$19=C),N!==g._v$20&&f(i,g._v$20=N),B!==g._v$21&&f(a,g._v$21=B),X!==g._v$22&&f(h,g._v$22=X),g},{_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0}),e})()];let Mn=[{name:"Select please",price:""},{name:"name1",price:"10000"},{name:"name2",price:"10000"},{name:"name3",price:"10000"},{name:"name4",price:"10000"}],pe={"first-half":"100000","second-half":"150000",all:"200000"};Ct(["click"]);const Un="_hero_1sfni_1",Kn="_container_1sfni_5",Fn="_heading_1sfni_12",Vn="_desc_1sfni_21",Hn="_btn_1sfni_25",zn="_struct_1sfni_43",Gn="_stack_1sfni_47",Jn="_structTitle_1sfni_52",Xn="_stackTitle_1sfni_53",Yn="_imageWrapper_1sfni_63",Qn="_cards_1sfni_68",Zn="_card_1sfni_68",er="_name_1sfni_88";var x={hero:Un,container:Kn,heading:Fn,desc:Vn,btn:Hn,struct:zn,stack:Gn,structTitle:Jn,stackTitle:Xn,imageWrapper:Yn,cards:Qn,card:Zn,name:er};const tr=q('<section><div><h1>Documentation</h1><p>On this page you can get full information about how our system works and on the basis of which data you get your predict.</p><a href="/service" target="blank">Try</a></div></section>'),nr=q("<section><div><h1>Structure of the Application</h1><p>Our program is a web application based on a fairly clear structure. First of all, the user uploads a link to a templated database, after which our script parses the values from there into the main script, thereby getting to the server part. Then the processed value is sent via the api to the client side and output to the user.</p></div></section>"),rr=q('<section><div><h1>Technology Stack</h1><div><div><div><img src="src/logo.svg" alt="#"></div><p>Solid JS</p></div><div><div><img src="src/assets/ts.svg" alt="#"></div><p>Type Script</p></div><div><div><img src="src/assets/java.svg" alt="#"></div><p>Java</p></div></div></div></section>'),ir=()=>[(()=>{const e=tr.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.nextSibling;return A(o=>{const l=x.hero,s=x.container,a=x.heading,u=x.desc,c=x.btn;return l!==o._v$&&f(e,o._v$=l),s!==o._v$2&&f(t,o._v$2=s),a!==o._v$3&&f(n,o._v$3=a),u!==o._v$4&&f(r,o._v$4=u),c!==o._v$5&&f(i,o._v$5=c),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})(),(()=>{const e=nr.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling;return A(i=>{const o=x.struct,l=x.container,s=x.structTitle,a=x.desc;return o!==i._v$6&&f(e,i._v$6=o),l!==i._v$7&&f(t,i._v$7=l),s!==i._v$8&&f(n,i._v$8=s),a!==i._v$9&&f(r,i._v$9=a),i},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})(),(()=>{const e=rr.cloneNode(!0),t=e.firstChild,n=t.firstChild,r=n.nextSibling,i=r.firstChild,o=i.firstChild,l=o.nextSibling,s=i.nextSibling,a=s.firstChild,u=a.nextSibling,c=s.nextSibling,v=c.firstChild,h=v.nextSibling;return A(d=>{const _=x.stack,T=x.container,g=x.stackTitle,E=x.cards,$=x.card,b=x.imageWrapper,C=x.name,N=x.card,B=x.imageWrapper,X=x.name,ke=x.card,m=x.imageWrapper,y=x.name;return _!==d._v$10&&f(e,d._v$10=_),T!==d._v$11&&f(t,d._v$11=T),g!==d._v$12&&f(n,d._v$12=g),E!==d._v$13&&f(r,d._v$13=E),$!==d._v$14&&f(i,d._v$14=$),b!==d._v$15&&f(o,d._v$15=b),C!==d._v$16&&f(l,d._v$16=C),N!==d._v$17&&f(s,d._v$17=N),B!==d._v$18&&f(a,d._v$18=B),X!==d._v$19&&f(u,d._v$19=X),ke!==d._v$20&&f(c,d._v$20=ke),m!==d._v$21&&f(v,d._v$21=m),y!==d._v$22&&f(h,d._v$22=y),d},{_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0}),e})()];St(()=>k(zt,{get children(){return k(Gt,{get children(){return[k(ge,{path:"/",component:bn}),k(ge,{path:"/service",component:jn}),k(ge,{path:"/docs",component:ir})]}})}}),document.getElementById("root"));