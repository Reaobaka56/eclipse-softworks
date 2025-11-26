(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function _g(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Hf={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function tb(){if(ux)return So;ux=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return So.Fragment=t,So.jsx=i,So.jsxs=i,So}var fx;function nb(){return fx||(fx=1,Hf.exports=tb()),Hf.exports}var S=nb(),Gf={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function ib(){if(dx)return st;dx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function v(P,re,Se){this.props=P,this.context=re,this.refs=M,this.updater=Se||A}v.prototype.isReactComponent={},v.prototype.setState=function(P,re){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,re,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function I(){}I.prototype=v.prototype;function L(P,re,Se){this.props=P,this.context=re,this.refs=M,this.updater=Se||A}var F=L.prototype=new I;F.constructor=L,D(F,v.prototype),F.isPureReactComponent=!0;var j=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function C(P,re,Se){var Te=Se.ref;return{$$typeof:o,type:P,key:re,ref:Te!==void 0?Te:null,props:Se}}function w(P,re){return C(P.type,re,P.props)}function k(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function te(P){var re={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Se){return re[Se]})}var le=/\/+/g;function pe(P,re){return typeof P=="object"&&P!==null&&P.key!=null?te(""+P.key):re.toString(36)}function de(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(N,N):(P.status="pending",P.then(function(re){P.status==="pending"&&(P.status="fulfilled",P.value=re)},function(re){P.status==="pending"&&(P.status="rejected",P.reason=re)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,re,Se,Te,Pe){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var ue=!1;if(P===null)ue=!0;else switch(ie){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(P.$$typeof){case o:case t:ue=!0;break;case _:return ue=P._init,B(ue(P._payload),re,Se,Te,Pe)}}if(ue)return Pe=Pe(P),ue=Te===""?"."+pe(P,0):Te,j(Pe)?(Se="",ue!=null&&(Se=ue.replace(le,"$&/")+"/"),B(Pe,re,Se,"",function(je){return je})):Pe!=null&&(k(Pe)&&(Pe=w(Pe,Se+(Pe.key==null||P&&P.key===Pe.key?"":(""+Pe.key).replace(le,"$&/")+"/")+ue)),re.push(Pe)),1;ue=0;var Ce=Te===""?".":Te+":";if(j(P))for(var He=0;He<P.length;He++)Te=P[He],ie=Ce+pe(Te,He),ue+=B(Te,re,Se,ie,Pe);else if(He=y(P),typeof He=="function")for(P=He.call(P),He=0;!(Te=P.next()).done;)Te=Te.value,ie=Ce+pe(Te,He++),ue+=B(Te,re,Se,ie,Pe);else if(ie==="object"){if(typeof P.then=="function")return B(de(P),re,Se,Te,Pe);throw re=String(P),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return ue}function Z(P,re,Se){if(P==null)return P;var Te=[],Pe=0;return B(P,Te,"","",function(ie){return re.call(Se,ie,Pe++)}),Te}function Y(P){if(P._status===-1){var re=P._result;re=re(),re.then(function(Se){(P._status===0||P._status===-1)&&(P._status=1,P._result=Se)},function(Se){(P._status===0||P._status===-1)&&(P._status=2,P._result=Se)}),P._status===-1&&(P._status=0,P._result=re)}if(P._status===1)return P._result.default;throw P._result}var _e=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ve={map:Z,forEach:function(P,re,Se){Z(P,function(){re.apply(this,arguments)},Se)},count:function(P){var re=0;return Z(P,function(){re++}),re},toArray:function(P){return Z(P,function(re){return re})||[]},only:function(P){if(!k(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return st.Activity=x,st.Children=ve,st.Component=v,st.Fragment=i,st.Profiler=l,st.PureComponent=L,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,st.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},st.cache=function(P){return function(){return P.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(P,re,Se){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Te=D({},P.props),Pe=P.key;if(re!=null)for(ie in re.key!==void 0&&(Pe=""+re.key),re)!Q.call(re,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&re.ref===void 0||(Te[ie]=re[ie]);var ie=arguments.length-2;if(ie===1)Te.children=Se;else if(1<ie){for(var ue=Array(ie),Ce=0;Ce<ie;Ce++)ue[Ce]=arguments[Ce+2];Te.children=ue}return C(P.type,Pe,Te)},st.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},st.createElement=function(P,re,Se){var Te,Pe={},ie=null;if(re!=null)for(Te in re.key!==void 0&&(ie=""+re.key),re)Q.call(re,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Pe[Te]=re[Te]);var ue=arguments.length-2;if(ue===1)Pe.children=Se;else if(1<ue){for(var Ce=Array(ue),He=0;He<ue;He++)Ce[He]=arguments[He+2];Pe.children=Ce}if(P&&P.defaultProps)for(Te in ue=P.defaultProps,ue)Pe[Te]===void 0&&(Pe[Te]=ue[Te]);return C(P,ie,Pe)},st.createRef=function(){return{current:null}},st.forwardRef=function(P){return{$$typeof:h,render:P}},st.isValidElement=k,st.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:Y}},st.memo=function(P,re){return{$$typeof:p,type:P,compare:re===void 0?null:re}},st.startTransition=function(P){var re=O.T,Se={};O.T=Se;try{var Te=P(),Pe=O.S;Pe!==null&&Pe(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,_e)}catch(ie){_e(ie)}finally{re!==null&&Se.types!==null&&(re.types=Se.types),O.T=re}},st.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},st.use=function(P){return O.H.use(P)},st.useActionState=function(P,re,Se){return O.H.useActionState(P,re,Se)},st.useCallback=function(P,re){return O.H.useCallback(P,re)},st.useContext=function(P){return O.H.useContext(P)},st.useDebugValue=function(){},st.useDeferredValue=function(P,re){return O.H.useDeferredValue(P,re)},st.useEffect=function(P,re){return O.H.useEffect(P,re)},st.useEffectEvent=function(P){return O.H.useEffectEvent(P)},st.useId=function(){return O.H.useId()},st.useImperativeHandle=function(P,re,Se){return O.H.useImperativeHandle(P,re,Se)},st.useInsertionEffect=function(P,re){return O.H.useInsertionEffect(P,re)},st.useLayoutEffect=function(P,re){return O.H.useLayoutEffect(P,re)},st.useMemo=function(P,re){return O.H.useMemo(P,re)},st.useOptimistic=function(P,re){return O.H.useOptimistic(P,re)},st.useReducer=function(P,re,Se){return O.H.useReducer(P,re,Se)},st.useRef=function(P){return O.H.useRef(P)},st.useState=function(P){return O.H.useState(P)},st.useSyncExternalStore=function(P,re,Se){return O.H.useSyncExternalStore(P,re,Se)},st.useTransition=function(){return O.H.useTransition()},st.version="19.2.0",st}var hx;function ph(){return hx||(hx=1,Gf.exports=ib()),Gf.exports}var _r=ph();const ab=_g(_r);var Vf={exports:{}},Mo={},kf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function sb(){return px||(px=1,(function(o){function t(B,Z){var Y=B.length;B.push(Z);e:for(;0<Y;){var _e=Y-1>>>1,ve=B[_e];if(0<l(ve,Z))B[_e]=Z,B[Y]=ve,Y=_e;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;e:for(var _e=0,ve=B.length,P=ve>>>1;_e<P;){var re=2*(_e+1)-1,Se=B[re],Te=re+1,Pe=B[Te];if(0>l(Se,Y))Te<ve&&0>l(Pe,Se)?(B[_e]=Pe,B[Te]=Y,_e=Te):(B[_e]=Se,B[re]=Y,_e=re);else if(Te<ve&&0>l(Pe,Y))B[_e]=Pe,B[Te]=Y,_e=Te;else break e}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,b=3,y=!1,A=!1,D=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=B)s(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function j(B){if(D=!1,F(B),!A)if(i(m)!==null)A=!0,N||(N=!0,te());else{var Z=i(p);Z!==null&&de(j,Z.startTime-B)}}var N=!1,O=-1,Q=5,C=-1;function w(){return M?!0:!(o.unstable_now()-C<Q)}function k(){if(M=!1,N){var B=o.unstable_now();C=B;var Z=!0;try{e:{A=!1,D&&(D=!1,I(O),O=-1),y=!0;var Y=b;try{t:{for(F(B),x=i(m);x!==null&&!(x.expirationTime>B&&w());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,b=x.priorityLevel;var ve=_e(x.expirationTime<=B);if(B=o.unstable_now(),typeof ve=="function"){x.callback=ve,F(B),Z=!0;break t}x===i(m)&&s(m),F(B)}else s(m);x=i(m)}if(x!==null)Z=!0;else{var P=i(p);P!==null&&de(j,P.startTime-B),Z=!1}}break e}finally{x=null,b=Y,y=!1}Z=void 0}}finally{Z?te():N=!1}}}var te;if(typeof L=="function")te=function(){L(k)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,pe=le.port2;le.port1.onmessage=k,te=function(){pe.postMessage(null)}}else te=function(){v(k,0)};function de(B,Z){O=v(function(){B(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return b},o.unstable_next=function(B){switch(b){case 1:case 2:case 3:var Z=3;break;default:Z=b}var Y=b;b=Z;try{return B()}finally{b=Y}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=b;b=B;try{return Z()}finally{b=Y}},o.unstable_scheduleCallback=function(B,Z,Y){var _e=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_e+Y:_e):Y=_e,B){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Y+ve,B={id:_++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:ve,sortIndex:-1},Y>_e?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(D?(I(O),O=-1):D=!0,de(j,Y-_e))):(B.sortIndex=ve,t(m,B),A||y||(A=!0,N||(N=!0,te()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var Z=b;return function(){var Y=b;b=Z;try{return B.apply(this,arguments)}finally{b=Y}}}})(jf)),jf}var mx;function rb(){return mx||(mx=1,kf.exports=sb()),kf.exports}var Xf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function ob(){if(xx)return wn;xx=1;var o=ph();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},wn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:b,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var gx;function lb(){if(gx)return Xf.exports;gx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xf.exports=ob(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function cb(){if(_x)return Mo;_x=1;var o=rb(),t=ph(),i=lb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,r=f;break}if(T===r){g=!0,r=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,r=u;break}if(T===r){g=!0,r=f,a=u;break}T=T.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case j:return"Suspense";case N:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case L:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var de=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_e=[],ve=-1;function P(e){return{current:e}}function re(e){0>ve||(e.current=_e[ve],_e[ve]=null,ve--)}function Se(e,n){ve++,_e[ve]=e.current,e.current=n}var Te=P(null),Pe=P(null),ie=P(null),ue=P(null);function Ce(e,n){switch(Se(ie,n),Se(Pe,e),Se(Te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?L0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=L0(n),e=O0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}re(Te),Se(Te,e)}function He(){re(Te),re(Pe),re(ie)}function je(e){e.memoizedState!==null&&Se(ue,e);var n=Te.current,a=O0(n,e.type);n!==a&&(Se(Pe,e),Se(Te,a))}function lt(e){Pe.current===e&&(re(Te),re(Pe)),ue.current===e&&(re(ue),_o._currentValue=Y)}var tn,dt;function Rt(e){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+e+dt}var H=!1;function ht(e,n){if(!e||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(oe){var ne=oe}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(oe){ne=oe}e.call(xe.prototype)}}else{try{throw Error()}catch(oe){ne=oe}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(oe){if(oe&&ne&&typeof oe.stack=="string")return[oe.stack,ne.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var z=g.split(`
`),$=T.split(`
`);for(u=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===z.length||u===$.length)for(r=z.length-1,u=$.length-1;1<=r&&0<=u&&z[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(z[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||z[r]!==$[u]){var fe=`
`+z[r].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=r&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rt(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return Rt("Activity");default:return""}}function Pt(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ge=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,at=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,We=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,Qe=o.log,Xe=o.unstable_setDisableYieldValue,ye=null,Ee=null;function qe(e){if(typeof Qe=="function"&&Xe(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ye,e)}catch{}}var Ve=Math.clz32?Math.clz32:G,Oe=Math.log,nt=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(Oe(e)/nt|0)|0}var De=256,Re=262144,we=4194304;function Me(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ge(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=Me(r):(g&=T,g!==0?u=Me(g):a||(a=T&~e,a!==0&&(u=Me(a))))):(T=r&~f,T!==0?u=Me(T):g!==0?u=Me(g):a||(a=r&~e,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,a,r,u,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var fe=31-Ve(a),xe=1<<fe;T[fe]=0,z[fe]=-1;var ne=$[fe];if(ne!==null)for($[fe]=null,fe=0;fe<ne.length;fe++){var oe=ne[fe];oe!==null&&(oe.lane&=-536870913)}a&=~xe}r!==0&&ko(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function ko(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ve(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Cr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ve(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Dr(e,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|n))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nr(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:ix(e.type))}function Ur(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var jn=Math.random().toString(36).slice(2),rn="__reactFiber$"+jn,dn="__reactProps$"+jn,Oi="__reactContainer$"+jn,Ts="__reactEvents$"+jn,Lc="__reactListeners$"+jn,Oc="__reactHandles$"+jn,jo="__reactResources$"+jn,Ka="__reactMarker$"+jn;function Lr(e){delete e[rn],delete e[dn],delete e[Ts],delete e[Lc],delete e[Oc]}function pa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=G0(e);e!==null;){if(a=e[rn])return a;e=G0(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[rn]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function se(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ee(e){e[Ka]=!0}var q=new Set,Ae={};function Ne(e,n){ze(e,n),ze(e+"Capture",n)}function ze(e,n){for(Ae[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ge.call(tt,e)?!0:Ge.call($e,e)?!1:Be.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ct(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Tt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ct(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ot(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Ot(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function St(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ot(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function qt(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(e,n,a,r,u,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+yt(n)):e.value!==""+yt(n)&&(e.value=""+yt(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?_n(e,g,yt(n)):a!=null?_n(e,g,yt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+yt(T):e.removeAttribute("name")}function Yt(e,n,a,r,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Xt(e)}function _n(e,n,a){n==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function vn(e,n,a){if(n!=null&&(n=""+yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+yt(a):""}function Sn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=yt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Xt(e)}function Si(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Nh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Dh(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Dh(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return Jg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var zc=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function Uh(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[dn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Pi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[dn]||null;if(!u)throw Error(s(90));Pi(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&St(r)}break e;case"textarea":vn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&hn(e,!!a.multiple,n,!1)}}}var Bc=!1;function Lh(e,n,a){if(Bc)return e(n,a);Bc=!0;try{var r=e(n);return r}finally{if(Bc=!1,(As!==null||Rs!==null)&&(Ul(),As&&(n=As,e=Rs,Rs=As=null,Uh(n),e)))for(n=0;n<e.length;n++)Uh(e[n])}}function Or(e,n){var a=e.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Bi)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Fc=!1}var xa=null,Hc=null,Wo=null;function Oh(){if(Wo)return Wo;var e,n=Hc,a=n.length,r,u="value"in xa?xa.value:xa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===u[f-r];r++);return Wo=u.slice(e,1<r?1-r:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Ph(){return!1}function Pn(e){function n(a,r,u,f,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Ph,this.isPropagationStopped=Ph,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Pn(Qa),zr=x({},Qa,{view:0,detail:0}),$g=Pn(zr),Gc,Vc,Ir,Ko=x({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Gc=e.screenX-Ir.screenX,Vc=e.screenY-Ir.screenY):Vc=Gc=0,Ir=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),zh=Pn(Ko),e_=x({},Ko,{dataTransfer:0}),t_=Pn(e_),n_=x({},zr,{relatedTarget:0}),kc=Pn(n_),i_=x({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=Pn(i_),s_=x({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r_=Pn(s_),o_=x({},Qa,{data:0}),Ih=Pn(o_),l_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=u_[e])?!!n[e]:!1}function jc(){return f_}var d_=x({},zr,{key:function(e){if(e.key){var n=l_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h_=Pn(d_),p_=x({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=Pn(p_),m_=x({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),x_=Pn(m_),g_=x({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Pn(g_),v_=x({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b_=Pn(v_),y_=x({},Qa,{newState:0,oldState:0}),S_=Pn(y_),M_=[9,13,27,32],Xc=Bi&&"CompositionEvent"in window,Br=null;Bi&&"documentMode"in document&&(Br=document.documentMode);var E_=Bi&&"TextEvent"in window&&!Br,Fh=Bi&&(!Xc||Br&&8<Br&&11>=Br),Hh=" ",Gh=!1;function Vh(e,n){switch(e){case"keyup":return M_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ws=!1;function T_(e,n){switch(e){case"compositionend":return kh(n);case"keypress":return n.which!==32?null:(Gh=!0,Hh);case"textInput":return e=n.data,e===Hh&&Gh?null:e;default:return null}}function A_(e,n){if(ws)return e==="compositionend"||!Xc&&Vh(e,n)?(e=Oh(),Wo=Hc=xa=null,ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fh&&n.locale!=="ko"?null:n.data;default:return null}}var R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!R_[e.type]:n==="textarea"}function Xh(e,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Fl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Fr=null,Hr=null;function w_(e){R0(e,0)}function Qo(e){var n=X(e);if(St(n))return e}function Wh(e,n){if(e==="change")return n}var qh=!1;if(Bi){var Wc;if(Bi){var qc="oninput"in document;if(!qc){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),qc=typeof Yh.oninput=="function"}Wc=qc}else Wc=!1;qh=Wc&&(!document.documentMode||9<document.documentMode)}function Zh(){Fr&&(Fr.detachEvent("onpropertychange",Kh),Hr=Fr=null)}function Kh(e){if(e.propertyName==="value"&&Qo(Hr)){var n=[];Xh(n,Hr,e,Ic(e)),Lh(w_,n)}}function C_(e,n,a){e==="focusin"?(Zh(),Fr=n,Hr=a,Fr.attachEvent("onpropertychange",Kh)):e==="focusout"&&Zh()}function D_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Hr)}function N_(e,n){if(e==="click")return Qo(n)}function U_(e,n){if(e==="input"||e==="change")return Qo(n)}function L_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:L_;function Gr(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ge.call(n,u)||!Xn(e[u],n[u]))return!1}return!0}function Qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jh(e,n){var a=Qh(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qh(a)}}function $h(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$h(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gn(e.document)}return n}function Yc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var O_=Bi&&"documentMode"in document&&11>=document.documentMode,Cs=null,Zc=null,Vr=null,Kc=!1;function tp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Cs==null||Cs!==gn(r)||(r=Cs,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Gr(Vr,r)||(Vr=r,r=Fl(Zc,"onSelect"),0<r.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Cs)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Qc={},np={};Bi&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function $a(e){if(Qc[e])return Qc[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in np)return Qc[e]=n[a];return e}var ip=$a("animationend"),ap=$a("animationiteration"),sp=$a("animationstart"),P_=$a("transitionrun"),z_=$a("transitionstart"),I_=$a("transitioncancel"),rp=$a("transitionend"),op=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function pi(e,n){op.set(e,n),Ne(n,[e])}var Jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Ns=0,$c=0;function $o(){for(var e=Ns,n=$c=Ns=0;n<e;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}f!==0&&lp(a,u,f)}}function el(e,n,a,r){ii[Ns++]=e,ii[Ns++]=n,ii[Ns++]=a,ii[Ns++]=r,$c|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function eu(e,n,a,r){return el(e,n,a,r),tl(e)}function es(e,n){return el(e,null,null,n),tl(e)}function lp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ve(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<uo)throw uo=0,uf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Us={};function B_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,r){return new B_(e,n,a,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,r,u,f){var g=0;if(r=e,typeof e=="function")tu(e)&&(g=1);else if(typeof e=="string")g=kv(e,a,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C:return e=Wn(31,a,n,u),e.elementType=C,e.lanes=f,e;case D:return ts(a.children,u,f,n);case M:g=8,u|=24;break;case v:return e=Wn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case j:return e=Wn(13,a,n,u),e.elementType=j,e.lanes=f,e;case N:return e=Wn(19,a,n,u),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:g=10;break e;case I:g=9;break e;case F:g=11;break e;case O:g=14;break e;case Q:g=16,r=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Wn(g,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ts(e,n,a,r){return e=Wn(7,e,r,n),e.lanes=a,e}function nu(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function up(e){var n=Wn(18,null,null,0);return n.stateNode=e,n}function iu(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},fp.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var Ls=[],Os=0,il=null,kr=0,si=[],ri=0,ga=null,Mi=1,Ei="";function Hi(e,n){Ls[Os++]=kr,Ls[Os++]=il,il=e,kr=n}function dp(e,n,a){si[ri++]=Mi,si[ri++]=Ei,si[ri++]=ga,ga=e;var r=Mi;e=Ei;var u=32-Ve(r)-1;r&=~(1<<u),a+=1;var f=32-Ve(n)+u;if(30<f){var g=u-u%5;f=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Mi=1<<32-Ve(n)+u|a<<u|r,Ei=f+e}else Mi=1<<f|a<<u|r,Ei=e}function au(e){e.return!==null&&(Hi(e,1),dp(e,1,0))}function su(e){for(;e===il;)il=Ls[--Os],Ls[Os]=null,kr=Ls[--Os],Ls[Os]=null;for(;e===ga;)ga=si[--ri],si[ri]=null,Ei=si[--ri],si[ri]=null,Mi=si[--ri],si[ri]=null}function hp(e,n){si[ri++]=Mi,si[ri++]=Ei,si[ri++]=ga,Mi=n.id,Ei=n.overflow,ga=e}var Mn=null,Zt=null,Mt=!1,_a=null,oi=!1,ru=Error(s(519));function va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jr(ai(n,e)),ru}function pp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[dn]=r,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)gt(ho[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Yt(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||N0(n.textContent,a)?(r.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),r.onScroll!=null&&gt("scroll",n),r.onScrollEnd!=null&&gt("scrollend",n),r.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||va(e,!0)}function mp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Mn=Mn.return}}function Ps(e){if(e!==Mn)return!1;if(!Mt)return mp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Tf(e.type,e.memoizedProps)),a=!a),a&&Zt&&va(e),mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=H0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=H0(e)}else n===27?(n=Zt,La(e.type)?(e=Df,Df=null,Zt=e):Zt=n):Zt=Mn?ci(e.stateNode.nextSibling):null;return!0}function ns(){Zt=Mn=null,Mt=!1}function ou(){var e=_a;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),_a=null),e}function jr(e){_a===null?_a=[e]:_a.push(e)}var lu=P(null),is=null,Gi=null;function ba(e,n,a){Se(lu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=lu.current,re(lu)}function cu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function uu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),cu(f.return,a,e),r||(g=null);break e}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),cu(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function zs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var T=u.type;Xn(u.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(u===ue.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}u=u.return}e!==null&&uu(n,e,a,r),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return xp(is,e)}function sl(e,n){return is===null&&as(e),xp(e,n)}function xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var F_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},H_=o.unstable_scheduleCallback,G_=o.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new F_,data:new Map,refCount:0}}function Xr(e){e.refCount--,e.refCount===0&&H_(G_,function(){e.controller.abort()})}var Wr=null,du=0,Is=0,Bs=null;function V_(e,n){if(Wr===null){var a=Wr=[];du=0,Is=xf(),Bs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return du++,n.then(gp,gp),n}function gp(){if(--du===0&&Wr!==null){Bs!==null&&(Bs.status="fulfilled");var e=Wr;Wr=null,Is=0,Bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function k_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var _p=B.S;B.S=function(e,n){t0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&V_(e,n),_p!==null&&_p(e,n)};var ss=P(null);function hu(){var e=ss.current;return e!==null?e:Wt.pooledCache}function rl(e,n){n===null?Se(ss,ss.current):Se(ss,n.pool)}function vp(){var e=hu();return e===null?null:{parent:on._currentValue,pool:e}}var Fs=Error(s(460)),pu=Error(s(474)),ol=Error(s(542)),ll={then:function(){}};function bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mp(e),e}throw os=n,Fs}}function rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,Fs):a}}var os=null;function Sp(){if(os===null)throw Error(s(459));var e=os;return os=null,e}function Mp(e){if(e===Fs||e===ol)throw Error(s(483))}var Hs=null,qr=0;function cl(e){var n=qr;return qr+=1,Hs===null&&(Hs=[]),yp(Hs,e,n)}function Yr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ep(e){function n(W,V){if(e){var K=W.deletions;K===null?(W.deletions=[V],W.flags|=16):K.push(V)}}function a(W,V){if(!e)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function r(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function u(W,V){return W=Fi(W,V),W.index=0,W.sibling=null,W}function f(W,V,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<V?(W.flags|=67108866,V):K):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function g(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,V,K,he){return V===null||V.tag!==6?(V=nu(K,W.mode,he),V.return=W,V):(V=u(V,K),V.return=W,V)}function z(W,V,K,he){var Ke=K.type;return Ke===D?fe(W,V,K.props.children,he,K.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&rs(Ke)===V.type)?(V=u(V,K.props),Yr(V,K),V.return=W,V):(V=nl(K.type,K.key,K.props,null,W.mode,he),Yr(V,K),V.return=W,V)}function $(W,V,K,he){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=iu(K,W.mode,he),V.return=W,V):(V=u(V,K.children||[]),V.return=W,V)}function fe(W,V,K,he,Ke){return V===null||V.tag!==7?(V=ts(K,W.mode,he,Ke),V.return=W,V):(V=u(V,K),V.return=W,V)}function xe(W,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=nu(""+V,W.mode,K),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return K=nl(V.type,V.key,V.props,null,W.mode,K),Yr(K,V),K.return=W,K;case A:return V=iu(V,W.mode,K),V.return=W,V;case Q:return V=rs(V),xe(W,V,K)}if(de(V)||te(V))return V=ts(V,W.mode,K,null),V.return=W,V;if(typeof V.then=="function")return xe(W,cl(V),K);if(V.$$typeof===L)return xe(W,sl(W,V),K);ul(W,V)}return null}function ne(W,V,K,he){var Ke=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ke!==null?null:T(W,V,""+K,he);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===Ke?z(W,V,K,he):null;case A:return K.key===Ke?$(W,V,K,he):null;case Q:return K=rs(K),ne(W,V,K,he)}if(de(K)||te(K))return Ke!==null?null:fe(W,V,K,he,null);if(typeof K.then=="function")return ne(W,V,cl(K),he);if(K.$$typeof===L)return ne(W,V,sl(W,K),he);ul(W,K)}return null}function oe(W,V,K,he,Ke){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return W=W.get(K)||null,T(V,W,""+he,Ke);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case y:return W=W.get(he.key===null?K:he.key)||null,z(V,W,he,Ke);case A:return W=W.get(he.key===null?K:he.key)||null,$(V,W,he,Ke);case Q:return he=rs(he),oe(W,V,K,he,Ke)}if(de(he)||te(he))return W=W.get(K)||null,fe(V,W,he,Ke,null);if(typeof he.then=="function")return oe(W,V,K,cl(he),Ke);if(he.$$typeof===L)return oe(W,V,K,sl(V,he),Ke);ul(V,he)}return null}function Fe(W,V,K,he){for(var Ke=null,Dt=null,ke=V,ut=V=0,vt=null;ke!==null&&ut<K.length;ut++){ke.index>ut?(vt=ke,ke=null):vt=ke.sibling;var Nt=ne(W,ke,K[ut],he);if(Nt===null){ke===null&&(ke=vt);break}e&&ke&&Nt.alternate===null&&n(W,ke),V=f(Nt,V,ut),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt,ke=vt}if(ut===K.length)return a(W,ke),Mt&&Hi(W,ut),Ke;if(ke===null){for(;ut<K.length;ut++)ke=xe(W,K[ut],he),ke!==null&&(V=f(ke,V,ut),Dt===null?Ke=ke:Dt.sibling=ke,Dt=ke);return Mt&&Hi(W,ut),Ke}for(ke=r(ke);ut<K.length;ut++)vt=oe(ke,W,ut,K[ut],he),vt!==null&&(e&&vt.alternate!==null&&ke.delete(vt.key===null?ut:vt.key),V=f(vt,V,ut),Dt===null?Ke=vt:Dt.sibling=vt,Dt=vt);return e&&ke.forEach(function(Ba){return n(W,Ba)}),Mt&&Hi(W,ut),Ke}function et(W,V,K,he){if(K==null)throw Error(s(151));for(var Ke=null,Dt=null,ke=V,ut=V=0,vt=null,Nt=K.next();ke!==null&&!Nt.done;ut++,Nt=K.next()){ke.index>ut?(vt=ke,ke=null):vt=ke.sibling;var Ba=ne(W,ke,Nt.value,he);if(Ba===null){ke===null&&(ke=vt);break}e&&ke&&Ba.alternate===null&&n(W,ke),V=f(Ba,V,ut),Dt===null?Ke=Ba:Dt.sibling=Ba,Dt=Ba,ke=vt}if(Nt.done)return a(W,ke),Mt&&Hi(W,ut),Ke;if(ke===null){for(;!Nt.done;ut++,Nt=K.next())Nt=xe(W,Nt.value,he),Nt!==null&&(V=f(Nt,V,ut),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt);return Mt&&Hi(W,ut),Ke}for(ke=r(ke);!Nt.done;ut++,Nt=K.next())Nt=oe(ke,W,ut,Nt.value,he),Nt!==null&&(e&&Nt.alternate!==null&&ke.delete(Nt.key===null?ut:Nt.key),V=f(Nt,V,ut),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt);return e&&ke.forEach(function(eb){return n(W,eb)}),Mt&&Hi(W,ut),Ke}function Gt(W,V,K,he){if(typeof K=="object"&&K!==null&&K.type===D&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:e:{for(var Ke=K.key;V!==null;){if(V.key===Ke){if(Ke=K.type,Ke===D){if(V.tag===7){a(W,V.sibling),he=u(V,K.props.children),he.return=W,W=he;break e}}else if(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&rs(Ke)===V.type){a(W,V.sibling),he=u(V,K.props),Yr(he,K),he.return=W,W=he;break e}a(W,V);break}else n(W,V);V=V.sibling}K.type===D?(he=ts(K.props.children,W.mode,he,K.key),he.return=W,W=he):(he=nl(K.type,K.key,K.props,null,W.mode,he),Yr(he,K),he.return=W,W=he)}return g(W);case A:e:{for(Ke=K.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(W,V.sibling),he=u(V,K.children||[]),he.return=W,W=he;break e}else{a(W,V);break}else n(W,V);V=V.sibling}he=iu(K,W.mode,he),he.return=W,W=he}return g(W);case Q:return K=rs(K),Gt(W,V,K,he)}if(de(K))return Fe(W,V,K,he);if(te(K)){if(Ke=te(K),typeof Ke!="function")throw Error(s(150));return K=Ke.call(K),et(W,V,K,he)}if(typeof K.then=="function")return Gt(W,V,cl(K),he);if(K.$$typeof===L)return Gt(W,V,sl(W,K),he);ul(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(W,V.sibling),he=u(V,K),he.return=W,W=he):(a(W,V),he=nu(K,W.mode,he),he.return=W,W=he),g(W)):a(W,V)}return function(W,V,K,he){try{qr=0;var Ke=Gt(W,V,K,he);return Hs=null,Ke}catch(ke){if(ke===Fs||ke===ol)throw ke;var Dt=Wn(29,ke,null,W.mode);return Dt.lanes=he,Dt.return=W,Dt}finally{}}}var ls=Ep(!0),Tp=Ep(!1),ya=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Lt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=tl(e),lp(e,null,a),n}return el(e,r,n,a),tl(e)}function Zr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Cr(e,a)}}function gu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _u=!1;function Kr(){if(_u){var e=Bs;if(e!==null)throw e}}function Qr(e,n,a,r){_u=!1;var u=e.updateQueue;ya=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,$=z.next;z.next=null,g===null?f=$:g.next=$,g=z;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,T=fe.lastBaseUpdate,T!==g&&(T===null?fe.firstBaseUpdate=$:T.next=$,fe.lastBaseUpdate=z))}if(f!==null){var xe=u.baseState;g=0,fe=$=z=null,T=f;do{var ne=T.lane&-536870913,oe=ne!==T.lane;if(oe?(_t&ne)===ne:(r&ne)===ne){ne!==0&&ne===Is&&(_u=!0),fe!==null&&(fe=fe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Fe=e,et=T;ne=n;var Gt=a;switch(et.tag){case 1:if(Fe=et.payload,typeof Fe=="function"){xe=Fe.call(Gt,xe,ne);break e}xe=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=et.payload,ne=typeof Fe=="function"?Fe.call(Gt,xe,ne):Fe,ne==null)break e;xe=x({},xe,ne);break e;case 2:ya=!0}}ne=T.callback,ne!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ne]:oe.push(ne))}else oe={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},fe===null?($=fe=oe,z=xe):fe=fe.next=oe,g|=ne;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;oe=T,T=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);fe===null&&(z=xe),u.baseState=z,u.firstBaseUpdate=$,u.lastBaseUpdate=fe,f===null&&(u.shared.lanes=0),wa|=g,e.lanes=g,e.memoizedState=xe}}function Ap(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],n)}var Gs=P(null),fl=P(0);function wp(e,n){e=Qi,Se(fl,e),Se(Gs,n),Qi=e|n.baseLanes}function vu(){Se(fl,Qi),Se(Gs,Gs.current)}function bu(){Qi=fl.current,re(Gs),re(fl)}var qn=P(null),li=null;function Ea(e){var n=e.alternate;Se(nn,nn.current&1),Se(qn,e),li===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(li=e)}function yu(e){Se(nn,nn.current),Se(qn,e),li===null&&(li=e)}function Cp(e){e.tag===22?(Se(nn,nn.current),Se(qn,e),li===null&&(li=e)):Ta()}function Ta(){Se(nn,nn.current),Se(qn,qn.current)}function Yn(e){re(qn),li===e&&(li=null),re(nn)}var nn=P(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Cf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,rt=null,Ft=null,ln=null,hl=!1,Vs=!1,cs=!1,pl=0,Jr=0,ks=null,j_=0;function Jt(){throw Error(s(321))}function Su(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function Mu(e,n,a,r,u,f){return ki=f,rt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?dm:Bu,cs=!1,f=a(r,u),cs=!1,Vs&&(f=Np(n,a,r,u)),Dp(e),f}function Dp(e){B.H=to;var n=Ft!==null&&Ft.next!==null;if(ki=0,ln=Ft=rt=null,hl=!1,Jr=0,ks=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&al(e)&&(cn=!0))}function Np(e,n,a,r){rt=e;var u=0;do{if(Vs&&(ks=null),Jr=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,ln=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=hm,f=n(a,r)}while(Vs);return f}function X_(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?$r(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(rt.flags|=1024),n}function Eu(){var e=pl!==0;return pl=0,e}function Tu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Au(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}ki=0,ln=Ft=rt=null,Vs=!1,Jr=pl=0,ks=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?rt.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(Ft===null){var e=rt.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=ln===null?rt.memoizedState:ln.next;if(n!==null)ln=n,Ft=e;else{if(e===null)throw rt.alternate===null?Error(s(467)):Error(s(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},ln===null?rt.memoizedState=ln=e:ln=ln.next=e}return ln}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(e){var n=Jr;return Jr+=1,ks===null&&(ks=[]),e=yp(ks,e,n),n=rt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?dm:Bu),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $r(e);if(e.$$typeof===L)return En(e)}throw Error(s(438,String(e)))}function Ru(e){var n=null,a=rt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=rt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),rt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=w;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=an();return wu(n,Ft,e)}function wu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=g=null,z=null,$=n,fe=!1;do{var xe=$.lane&-536870913;if(xe!==$.lane?(_t&xe)===xe:(ki&xe)===xe){var ne=$.revertLane;if(ne===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xe===Is&&(fe=!0);else if((ki&ne)===ne){$=$.next,ne===Is&&(fe=!0);continue}else xe={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=xe,g=f):z=z.next=xe,rt.lanes|=ne,wa|=ne;xe=$.action,cs&&a(f,xe),f=$.hasEagerState?$.eagerState:a(f,xe)}else ne={lane:xe,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=ne,g=f):z=z.next=ne,rt.lanes|=xe,wa|=xe;$=$.next}while($!==null&&$!==n);if(z===null?g=f:z.next=T,!Xn(f,e.memoizedState)&&(cn=!0,fe&&(a=Bs,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=z,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Cu(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);Xn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Up(e,n,a){var r=rt,u=an(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Xn((Ft||u).memoizedState,a);if(g&&(u.memoizedState=a,cn=!0),u=u.queue,Uu(Pp.bind(null,r,u,e),[e]),u.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,js(9,{destroy:void 0},Op.bind(null,r,u,a,n),null),Wt===null)throw Error(s(349));f||(ki&127)!==0||Lp(r,n,a)}return a}function Lp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=rt.updateQueue,n===null?(n=ml(),rt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Op(e,n,a,r){n.value=a,n.getSnapshot=r,zp(n)&&Ip(e)}function Pp(e,n,a){return a(function(){zp(n)&&Ip(e)})}function zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function Ip(e){var n=es(e,2);n!==null&&Hn(n,e,2)}function Du(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),cs){qe(!0);try{a()}finally{qe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function Bp(e,n,a,r){return e.baseState=a,wu(e,Ft,typeof r=="function"?r:ji)}function W_(e,n,a,r,u){if(bl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fp(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=B.T,g={};B.T=g;try{var T=a(u,r),z=B.S;z!==null&&z(g,T),Hp(e,n,T)}catch($){Nu(e,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),B.T=f}}else try{f=a(u,r),Hp(e,n,f)}catch($){Nu(e,n,$)}}function Hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Gp(e,n,r)},function(r){return Nu(e,n,r)}):Gp(e,n,a)}function Gp(e,n,a){n.status="fulfilled",n.value=a,Vp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fp(e,a)))}function Nu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Vp(n),n=n.next;while(n!==r)}e.action=null}function Vp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kp(e,n){return n}function jp(e,n){if(Mt){var a=Wt.formState;if(a!==null){e:{var r=rt;if(Mt){if(Zt){t:{for(var u=Zt,f=oi;u.nodeType!==8;){if(!f){u=null;break t}if(u=ci(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=ci(u.nextSibling),r=u.data==="F!";break e}}va(r)}r=!1}r&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=r,a=cm.bind(null,rt,r),r.dispatch=a,r=Du(!1),f=Iu.bind(null,rt,!1,r.queue),r=Un(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=W_.bind(null,rt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Xp(e){var n=an();return Wp(n,Ft,e)}function Wp(e,n,a){if(n=wu(e,n,kp)[0],e=gl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=$r(n)}catch(g){throw g===Fs?ol:g}else r=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(rt.flags|=2048,js(9,{destroy:void 0},q_.bind(null,u,a),null)),[r,f,e]}function q_(e,n){e.action=n}function qp(e){var n=an(),a=Ft;if(a!==null)return Wp(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function js(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=rt.updateQueue,n===null&&(n=ml(),rt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Yp(){return an().memoizedState}function _l(e,n,a,r){var u=Un();rt.flags|=e,u.memoizedState=js(1|n,{destroy:void 0},a,r===void 0?null:r)}function vl(e,n,a,r){var u=an();r=r===void 0?null:r;var f=u.memoizedState.inst;Ft!==null&&r!==null&&Su(r,Ft.memoizedState.deps)?u.memoizedState=js(n,f,a,r):(rt.flags|=e,u.memoizedState=js(1|n,f,a,r))}function Zp(e,n){_l(8390656,8,e,n)}function Uu(e,n){vl(2048,8,e,n)}function Y_(e){rt.flags|=4;var n=rt.updateQueue;if(n===null)n=ml(),rt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Kp(e){var n=an().memoizedState;return Y_({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Qp(e,n){return vl(4,2,e,n)}function Jp(e,n){return vl(4,4,e,n)}function $p(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function em(e,n,a){a=a!=null?a.concat([e]):null,vl(4,4,$p.bind(null,n,e),a)}function Lu(){}function tm(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Su(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function nm(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Su(n,r[1]))return r[0];if(r=e(),cs){qe(!0);try{e()}finally{qe(!1)}}return a.memoizedState=[r,n],r}function Ou(e,n,a){return a===void 0||(ki&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=i0(),rt.lanes|=e,wa|=e,a)}function im(e,n,a,r){return Xn(a,n)?a:Gs.current!==null?(e=Ou(e,a,r),Xn(e,n)||(cn=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(_t&261930)===0?(cn=!0,e.memoizedState=a):(e=i0(),rt.lanes|=e,wa|=e,n)}function am(e,n,a,r,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=B.T,T={};B.T=T,Iu(e,!1,n,a);try{var z=u(),$=B.S;if($!==null&&$(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var fe=k_(z,r);eo(e,n,fe,Qn(e))}else eo(e,n,r,Qn(e))}catch(xe){eo(e,n,{then:function(){},status:"rejected",reason:xe},Qn())}finally{Z.p=f,g!==null&&T.types!==null&&(g.types=T.types),B.T=g}}function Z_(){}function Pu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=sm(e).queue;am(e,u,n,Y,a===null?Z_:function(){return rm(e),a(r)})}function sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rm(e){var n=sm(e);n.next===null&&(n=e.alternate.memoizedState),eo(e,n.next.queue,{},Qn())}function zu(){return En(_o)}function om(){return an().memoizedState}function lm(){return an().memoizedState}function K_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Sa(a);var r=Ma(n,e,a);r!==null&&(Hn(r,n,a),Zr(r,n,a)),n={cache:fu()},e.payload=n;return}n=n.return}}function Q_(e,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?um(n,a):(a=eu(e,n,a,r),a!==null&&(Hn(a,e,r),fm(a,n,r)))}function cm(e,n,a){var r=Qn();eo(e,n,a,r)}function eo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))um(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,Xn(T,g))return el(e,n,u,0),Wt===null&&$o(),!1}catch{}finally{}if(a=eu(e,n,u,r),a!==null)return Hn(a,e,r),fm(a,n,r),!0}return!1}function Iu(e,n,a,r){if(r={lane:2,revertLane:xf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(s(479))}else n=eu(e,a,r,2),n!==null&&Hn(n,e,2)}function bl(e){var n=e.alternate;return e===rt||n!==null&&n===rt}function um(e,n){Vs=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function fm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Cr(e,a)}}var to={readContext:En,use:xl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};to.useEffectEvent=Jt;var dm={readContext:En,use:xl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Zp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,$p.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var r=e();if(cs){qe(!0);try{e()}finally{qe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Un();if(a!==void 0){var u=a(n);if(cs){qe(!0);try{a(n)}finally{qe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Q_.bind(null,rt,e),[r.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Du(e);var n=e.queue,a=cm.bind(null,rt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(e,n){var a=Un();return Ou(a,e,n)},useTransition:function(){var e=Du(!1);return e=am.bind(null,rt,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=rt,u=Un();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(_t&127)!==0||Lp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Zp(Pp.bind(null,r,f,e),[e]),r.flags|=2048,js(9,{destroy:void 0},Op.bind(null,r,f,a,n),null),a},useId:function(){var e=Un(),n=Wt.identifierPrefix;if(Mt){var a=Ei,r=Mi;a=(r&~(1<<32-Ve(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=j_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:zu,useFormState:jp,useActionState:jp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,rt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ru,useCacheRefresh:function(){return Un().memoizedState=K_.bind(null,rt)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:En,use:xl,useCallback:tm,useContext:En,useEffect:Uu,useImperativeHandle:em,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:gl,useRef:Yp,useState:function(){return gl(ji)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=an();return im(a,Ft.memoizedState,e,n)},useTransition:function(){var e=gl(ji)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Up,useId:om,useHostTransitionStatus:zu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,n){var a=an();return Bp(a,Ft,e,n)},useMemoCache:Ru,useCacheRefresh:lm};Bu.useEffectEvent=Kp;var hm={readContext:En,use:xl,useCallback:tm,useContext:En,useEffect:Uu,useImperativeHandle:em,useInsertionEffect:Qp,useLayoutEffect:Jp,useMemo:nm,useReducer:Cu,useRef:Yp,useState:function(){return Cu(ji)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=an();return Ft===null?Ou(a,e,n):im(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Cu(ji)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Up,useId:om,useHostTransitionStatus:zu,useFormState:qp,useActionState:qp,useOptimistic:function(e,n){var a=an();return Ft!==null?Bp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:lm};hm.useEffectEvent=Kp;function Fu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Qn(),u=Sa(r);u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,r),n!==null&&(Hn(n,e,r),Zr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Qn(),u=Sa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,r),n!==null&&(Hn(n,e,r),Zr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),r=Sa(a);r.tag=2,n!=null&&(r.callback=n),n=Ma(e,r,a),n!==null&&(Hn(n,e,a),Zr(n,e,a))}};function pm(e,n,a,r,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Gr(a,r)||!Gr(u,f):!0}function mm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Hu.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function xm(e){Jo(e)}function gm(e){console.error(e)}function _m(e){Jo(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function vm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Gu(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function bm(e){return e=Sa(e),e.tag=3,e}function ym(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){vm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){vm(n,a,r),typeof u!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function J_(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,u,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Ll():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),hf(e,r,u)),!1;case 22:return a.flags|=65536,r===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),hf(e,r,u)),!1}throw Error(s(435,a.tag))}return hf(e,r,u),Ll(),!1}if(Mt)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==ru&&(e=Error(s(422),{cause:r}),jr(ai(e,a)))):(r!==ru&&(n=Error(s(423),{cause:r}),jr(ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ai(r,a),u=Gu(e.stateNode,r,u),gu(e,u),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),co===null?co=[f]:co.push(f),$t!==4&&($t=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Gu(a.stateNode,r,e),gu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=bm(u),ym(u,e,a,r),gu(a,u),!1}a=a.return}while(a!==null);return!1}var Vu=Error(s(461)),cn=!1;function Tn(e,n,a,r){n.child=e===null?Tp(n,null,a,r):ls(n,e.child,a,r)}function Sm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var T in r)T!=="ref"&&(g[T]=r[T])}else g=r;return as(n),r=Mu(e,n,a,g,f,u),T=Eu(),e!==null&&!cn?(Tu(e,n,u),Xi(e,n,u)):(Mt&&T&&au(n),n.flags|=1,Tn(e,n,r,u),n.child)}function Mm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Em(e,n,f,r,u)):(e=nl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ku(e,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gr,a(g,r)&&e.ref===n.ref)return Xi(e,n,u)}return n.flags|=1,e=Fi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Em(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Gr(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,Ku(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Xi(e,n,u)}return ku(e,n,a,r,u)}function Tm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Am(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,f!==null?f.cachePool:null),f!==null?wp(n,f):vu(),Cp(n);else return r=n.lanes=536870912,Am(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(rl(n,f.cachePool),wp(n,f),Ta(),n.memoizedState=null):(e!==null&&rl(n,null),vu(),Ta());return Tn(e,n,u,a),n.child}function no(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Am(e,n,a,r,u){var f=hu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&rl(n,null),vu(),Cp(n),e!==null&&zs(e,n,r,!0),n.childLanes=u,null}function Sl(e,n){return n=El({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Rm(e,n,a){return ls(n,e.child,null,a),e=Sl(n,n.pendingProps),e.flags|=2,Yn(n),n.memoizedState=null,e}function $_(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(r.mode==="hidden")return e=Sl(n,r),n.lanes=536870912,no(null,e);if(yu(n),(e=Zt)?(e=F0(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=up(e),a.return=n,n.child=a,Mn=n,Zt=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return Sl(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(yu(n),u)if(n.flags&256)n.flags&=-257,n=Rm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||zs(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(r=Wt,r!==null&&(g=Dr(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,es(e,g),Hn(r,e,g),Vu;Ll(),n=Rm(e,n,a)}else e=f.treeContext,Zt=ci(g.nextSibling),Mn=n,Mt=!0,_a=null,oi=!1,e!==null&&hp(n,e),n=Sl(n,r),n.flags|=4096;return n}return e=Fi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ku(e,n,a,r,u){return as(n),a=Mu(e,n,a,r,void 0,u),r=Eu(),e!==null&&!cn?(Tu(e,n,u),Xi(e,n,u)):(Mt&&r&&au(n),n.flags|=1,Tn(e,n,a,u),n.child)}function wm(e,n,a,r,u,f){return as(n),n.updateQueue=null,a=Np(n,r,a,u),Dp(e),r=Eu(),e!==null&&!cn?(Tu(e,n,f),Xi(e,n,f)):(Mt&&r&&au(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Cm(e,n,a,r,u){if(as(n),n.stateNode===null){var f=Us,g=a.contextType;typeof g=="object"&&g!==null&&(f=En(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Hu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},mu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?En(g):Us,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Fu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Hu.enqueueReplaceState(f,f.state,null),Qr(n,r,f,u),Kr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,z=us(a,T);f.props=z;var $=f.context,fe=a.contextType;g=Us,typeof fe=="object"&&fe!==null&&(g=En(fe));var xe=a.getDerivedStateFromProps;fe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==g)&&mm(n,f,r,g),ya=!1;var ne=n.memoizedState;f.state=ne,Qr(n,r,f,u),Kr(),$=n.memoizedState,T||ne!==$||ya?(typeof xe=="function"&&(Fu(n,a,xe,r),$=n.memoizedState),(z=ya||pm(n,a,z,r,ne,$,g))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=g,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,xu(e,n),g=n.memoizedProps,fe=us(a,g),f.props=fe,xe=n.pendingProps,ne=f.context,$=a.contextType,z=Us,typeof $=="object"&&$!==null&&(z=En($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==xe||ne!==z)&&mm(n,f,r,z),ya=!1,ne=n.memoizedState,f.state=ne,Qr(n,r,f,u),Kr();var oe=n.memoizedState;g!==xe||ne!==oe||ya||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof T=="function"&&(Fu(n,a,T,r),oe=n.memoizedState),(fe=ya||pm(n,a,fe,r,ne,oe,z)||e!==null&&e.dependencies!==null&&al(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,oe,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,oe,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=oe),f.props=r,f.state=oe,f.context=z,r=fe):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ml(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ls(n,e.child,null,u),n.child=ls(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Xi(e,n,u),e}function Dm(e,n,a,r){return ns(),n.flags|=256,Tn(e,n,a,r),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(e){return{baseLanes:e,cachePool:vp()}}function Wu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Nm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(u?Ea(n):Ta(),(e=Zt)?(e=F0(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=up(e),a.return=n,n.child=a,Mn=n,Zt=null)):e=null,e===null)throw va(n);return Cf(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,u?(Ta(),u=n.mode,T=El({mode:"hidden",children:T},u),r=ts(r,u,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=Xu(a),r.childLanes=Wu(e,g,a),n.memoizedState=ju,no(null,r)):(Ea(n),qu(n,T))}var z=e.memoizedState;if(z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=Yu(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),T=r.fallback,u=n.mode,r=El({mode:"visible",children:r.children},u),T=ts(T,u,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,ls(n,e.child,null,a),r=n.child,r.memoizedState=Xu(a),r.childLanes=Wu(e,g,a),n.memoizedState=ju,n=no(null,r));else if(Ea(n),Cf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var $=g.dgst;g=$,r=Error(s(419)),r.stack="",r.digest=g,jr({value:r,source:null,stack:null}),n=Yu(e,n,a)}else if(cn||zs(e,n,a,!1),g=(a&e.childLanes)!==0,cn||g){if(g=Wt,g!==null&&(r=Dr(g,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,es(e,r),Hn(g,e,r),Vu;wf(T)||Ll(),n=Yu(e,n,a)}else wf(T)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Zt=ci(T.nextSibling),Mn=n,Mt=!0,_a=null,oi=!1,e!==null&&hp(n,e),n=qu(n,r.children),n.flags|=4096);return n}return u?(Ta(),T=r.fallback,u=n.mode,z=e.child,$=z.sibling,r=Fi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,$!==null?T=Fi($,T):(T=ts(T,u,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,no(null,r),r=n.child,T=e.child.memoizedState,T===null?T=Xu(a):(u=T.cachePool,u!==null?(z=on._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=vp(),T={baseLanes:T.baseLanes|a,cachePool:u}),r.memoizedState=T,r.childLanes=Wu(e,g,a),n.memoizedState=ju,no(e.child,r)):(Ea(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function qu(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=Wn(22,e,null,n),e.lanes=0,e}function Yu(e,n,a){return ls(n,e.child,null,a),e=qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Um(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),cu(e.return,n,a)}function Zu(e,n,a,r,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Lm(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var g=nn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,Se(nn,g),Tn(e,n,r,a),r=Mt?kr:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Um(e,a,n);else if(e.tag===19)Um(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zu(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zu(n,!0,a,null,f,r);break;case"together":Zu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function ev(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),ba(n,on,e.memoizedState.cache),ns();break;case 27:case 5:je(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Nm(e,n,a):(Ea(n),e=Xi(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(zs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Lm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(nn,nn.current),r)break;return null;case 22:return n.lanes=0,Tm(e,n,a,n.pendingProps);case 24:ba(n,on,e.memoizedState.cache)}return Xi(e,n,a)}function Om(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ku(e,a)&&(n.flags&128)===0)return cn=!1,ev(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Mt&&(n.flags&1048576)!==0&&dp(n,kr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")tu(e)?(r=us(e,r),n.tag=1,n=Cm(null,n,e,r,a)):(n.tag=0,n=ku(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===F){n.tag=11,n=Sm(null,n,e,r,a);break e}else if(u===O){n.tag=14,n=Mm(null,n,e,r,a);break e}}throw n=pe(e)||e,Error(s(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=us(r,n.pendingProps),Cm(e,n,r,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,xu(e,n),Qr(n,r,null,a);var g=n.memoizedState;if(r=g.cache,ba(n,on,r),r!==f.cache&&uu(n,[on],a,!0),Kr(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dm(e,n,r,a);break e}else if(r!==u){u=ai(Error(s(424)),n),jr(u),n=Dm(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=ci(e.firstChild),Mn=n,Mt=!0,_a=null,oi=!0,a=Tp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),r===u){n=Xi(e,n,a);break e}Tn(e,n,r,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=X0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,r=Hl(ie.current).createElement(a),r[rn]=n,r[dn]=e,An(r,a,e),ee(r),n.stateNode=r):n.memoizedState=X0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return je(n),e===null&&Mt&&(r=n.stateNode=V0(n.type,n.pendingProps,ie.current),Mn=n,oi=!0,u=Zt,La(n.type)?(Df=u,Zt=ci(r.firstChild)):Zt=u),Tn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((u=r=Zt)&&(r=Dv(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,Mn=n,Zt=ci(r.firstChild),oi=!1,u=!0):u=!1),u||va(n)),je(n),u=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Tf(u,f)?r=null:g!==null&&Tf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Mu(e,n,X_,null,null,a),_o._currentValue=u),Ml(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&Mt&&((e=a=Zt)&&(a=Nv(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Mn=n,Zt=null,e=!0):e=!1),e||va(n)),null;case 13:return Nm(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ls(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return Sm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ba(n,n.type,r.value),Tn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,as(n),u=En(u),r=r(u),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Mm(e,n,n.type,n.pendingProps,a);case 15:return Em(e,n,n.type,n.pendingProps,a);case 19:return Lm(e,n,a);case 31:return $_(e,n,a);case 22:return Tm(e,n,a,n.pendingProps);case 24:return as(n),r=En(on),e===null?(u=hu(),u===null&&(u=Wt,f=fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},mu(n),ba(n,on,u)):((e.lanes&a)!==0&&(xu(e,n),Qr(n,null,null,a),Kr()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ba(n,on,r)):(r=f.cache,ba(n,on,r),r!==u.cache&&uu(n,[on],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(e){e.flags|=4}function Qu(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(o0())e.flags|=8192;else throw os=ll,pu}else e.flags&=-16777217}function Pm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(n))if(o0())e.flags|=8192;else throw os=ll,pu}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,Ys|=n)}function io(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function tv(e,n,a){var r=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(on),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ps(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ou())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Wi(n),f!==null?(Kt(n),Pm(n,f)):(Kt(n),Qu(n,u,null,r,a))):f?f!==e.memoizedState?(Wi(n),Kt(n),Pm(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Wi(n),Kt(n),Qu(n,u,e,r,a)),null;case 27:if(lt(n),a=ie.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Wi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}e=Te.current,Ps(n)?pp(n):(e=V0(u,r,a),n.stateNode=e,Wi(n))}return Kt(n),null;case 5:if(lt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Wi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=Te.current,Ps(n))pp(n);else{var g=Hl(ie.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}f[rn]=n,f[dn]=r;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(An(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Wi(n)}}return Kt(n),Qu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Wi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ie.current,Ps(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||N0(e.nodeValue,a)),e||va(n,!0)}else e=Hl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ps(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ps(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Kt(n),null);case 4:return He(),e===null&&bf(n.stateNode.containerInfo),Kt(n),null;case 10:return Vi(n.type),Kt(n),null;case 19:if(re(nn),r=n.memoizedState,r===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)io(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,io(r,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)cp(a,e),a=a.sibling;return Se(nn,nn.current&1|2),Mt&&Hi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Dl&&(n.flags|=128,u=!0,io(r,!1),n.lanes=4194304)}else{if(!u)if(e=dl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),io(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Mt)return Kt(n),null}else 2*E()-r.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,u=!0,io(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=nn.current,Se(nn,u?a&1|2:a&1),Mt&&Hi(n,r.treeForkCount),e):(Kt(n),null);case 22:case 23:return Yn(n),bu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&re(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function nv(e,n){switch(su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(on),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(nn),null;case 4:return He(),null;case 10:return Vi(n.type),null;case 22:case 23:return Yn(n),bu(),e!==null&&re(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function zm(e,n){switch(su(n),n.tag){case 3:Vi(on),He();break;case 26:case 27:case 5:lt(n);break;case 4:He();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:re(nn);break;case 10:Vi(n.type);break;case 22:case 23:Yn(n),bu(),e!==null&&re(ss);break;case 24:Vi(on)}}function ao(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==u)}}catch(T){It(n,n.return,T)}}function Aa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var g=r.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var z=a,$=T;try{$()}catch(fe){It(u,z,fe)}}}r=r.next}while(r!==f)}}catch(fe){It(n,n.return,fe)}}function Im(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rp(n,a)}catch(r){It(e,e.return,r)}}}function Bm(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){It(e,n,r)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){It(e,n,u)}}function Ti(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){It(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(e,n,u)}else a.current=null}function Fm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){It(e,e.return,u)}}function Ju(e,n,a){try{var r=e.stateNode;Ev(r,e.type,a,n),r[dn]=n}catch(u){It(e,e.return,u)}}function Hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ef(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(r!==4&&(r===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ef(e,n,a),e=e.sibling;e!==null;)ef(e,n,a),e=e.sibling}function Al(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function Gm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,r,a),n[rn]=e,n[dn]=a}catch(f){It(e,e.return,f)}}var qi=!1,un=!1,tf=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,bn=null;function iv(e,n){if(e=e.containerInfo,Mf=ql,e=ep(e),Yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,T=-1,z=-1,$=0,fe=0,xe=e,ne=null;t:for(;;){for(var oe;xe!==a||u!==0&&xe.nodeType!==3||(T=g+u),xe!==f||r!==0&&xe.nodeType!==3||(z=g+r),xe.nodeType===3&&(g+=xe.nodeValue.length),(oe=xe.firstChild)!==null;)ne=xe,xe=oe;for(;;){if(xe===e)break t;if(ne===a&&++$===u&&(T=g),ne===f&&++fe===r&&(z=g),(oe=xe.nextSibling)!==null)break;xe=ne,ne=xe.parentNode}xe=oe}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:e,selectionRange:a},ql=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Fe=us(a.type,u);e=r.getSnapshotBeforeUpdate(Fe,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){It(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Rf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function km(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),r&4&&ao(5,a);break;case 1:if(Zi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){It(a,a.return,g)}else{var u=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){It(a,a.return,g)}}r&64&&Im(a),r&512&&so(a,a.return);break;case 3:if(Zi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(e,n)}catch(g){It(a,a.return,g)}}break;case 27:n===null&&r&4&&Gm(a);case 26:case 5:Zi(e,a),n===null&&r&4&&Fm(a),r&512&&so(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),r&4&&Wm(e,a);break;case 13:Zi(e,a),r&4&&qm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dv.bind(null,a),Uv(e,a))));break;case 22:if(r=a.memoizedState!==null||qi,!r){n=n!==null&&n.memoizedState!==null||un,u=qi;var f=un;qi=r,(un=n)&&!f?Ki(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),qi=u,un=f}break;case 30:break;default:Zi(e,a)}}function jm(e){var n=e.alternate;n!==null&&(e.alternate=null,jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Lr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,zn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Xm(e,n,a),a=a.sibling}function Xm(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:un||Ti(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ti(a,n);var r=Qt,u=zn;La(a.type)&&(Qt=a.stateNode,zn=!1),Yi(e,n,a),mo(a.stateNode),Qt=r,zn=u;break;case 5:un||Ti(a,n);case 6:if(r=Qt,u=zn,Qt=null,Yi(e,n,a),Qt=r,zn=u,Qt!==null)if(zn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:Qt!==null&&(zn?(e=Qt,I0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),nr(e)):I0(Qt,a.stateNode));break;case 4:r=Qt,u=zn,Qt=a.stateNode.containerInfo,zn=!0,Yi(e,n,a),Qt=r,zn=u;break;case 0:case 11:case 14:case 15:Aa(2,a,n),un||Aa(4,a,n),Yi(e,n,a);break;case 1:un||(Ti(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Bm(a,n,r)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,Yi(e,n,a),un=r;break;default:Yi(e,n,a)}}function Wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{nr(e)}catch(a){It(n,n.return,a)}}}function qm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nr(e)}catch(a){It(n,n.return,a)}}function av(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Vm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Vm),n;default:throw Error(s(435,e.tag))}}function Rl(e,n){var a=av(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=hv.bind(null,e,r);r.then(u,u)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,g=n,T=g;e:for(;T!==null;){switch(T.tag){case 27:if(La(T.type)){Qt=T.stateNode,zn=!1;break e}break;case 5:Qt=T.stateNode,zn=!1;break e;case 3:case 4:Qt=T.stateNode.containerInfo,zn=!0;break e}T=T.return}if(Qt===null)throw Error(s(160));Xm(f,g,u),Qt=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ym(n,e),n=n.sibling}var mi=null;function Ym(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Bn(e),r&4&&(Aa(3,e,e.return),ao(3,e),Aa(5,e,e.return));break;case 1:In(n,e),Bn(e),r&512&&(un||a===null||Ti(a,a.return)),r&64&&qi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=mi;if(In(n,e),Bn(e),r&512&&(un||a===null||Ti(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ka]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,r,a),f[rn]=e,ee(f),r=f;break e;case"link":var g=Y0("link","href",u).get(r+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break t}}f=u.createElement(r),An(f,r,a),u.head.appendChild(f);break;case"meta":if(g=Y0("meta","content",u).get(r+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break t}}f=u.createElement(r),An(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,ee(f),r=f}e.stateNode=r}else Z0(u,e.type,e.stateNode);else e.stateNode=q0(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Z0(u,e.type,e.stateNode):q0(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),Bn(e),r&512&&(un||a===null||Ti(a,a.return)),a!==null&&r&4&&Ju(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),Bn(e),r&512&&(un||a===null||Ti(a,a.return)),e.flags&32){u=e.stateNode;try{Si(u,"")}catch(Fe){It(e,e.return,Fe)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Ju(e,u,a!==null?a.memoizedProps:u)),r&1024&&(tf=!0);break;case 6:if(In(n,e),Bn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Fe){It(e,e.return,Fe)}}break;case 3:if(kl=null,u=mi,mi=Gl(n.containerInfo),In(n,e),mi=u,Bn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(Fe){It(e,e.return,Fe)}tf&&(tf=!1,Zm(e));break;case 4:r=mi,mi=Gl(e.stateNode.containerInfo),In(n,e),Bn(e),mi=r;break;case 12:In(n,e),Bn(e);break;case 31:In(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Rl(e,r)));break;case 13:In(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Rl(e,r)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=qi,fe=un;if(qi=$||u,un=fe||z,In(n,e),un=fe,qi=$,Bn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||qi||un||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=z.stateNode;var xe=z.memoizedProps.style,ne=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Fe){It(z,z.return,Fe)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Fe){It(z,z.return,Fe)}}}else if(n.tag===18){if(a===null){z=n;try{var oe=z.stateNode;u?B0(oe,!0):B0(z.stateNode,!1)}catch(Fe){It(z,z.return,Fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Rl(e,a))));break;case 19:In(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Rl(e,r)));break;case 30:break;case 21:break;default:In(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Hm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=$u(e);Al(e,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Si(g,""),a.flags&=-33);var T=$u(e);Al(e,T,g);break;case 3:case 4:var z=a.stateNode.containerInfo,$=$u(e);ef(e,$,z);break;default:throw Error(s(161))}}catch(fe){It(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)km(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),fs(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),fs(n);break;case 27:mo(n.stateNode);case 26:case 5:Ti(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function Ki(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(u,f,a),ao(4,f);break;case 1:if(Ki(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){It(r,r.return,$)}if(r=f,u=r.updateQueue,u!==null){var T=r.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Ap(z[u],T)}catch($){It(r,r.return,$)}}a&&g&64&&Im(f),so(f,f.return);break;case 27:Gm(f);case 26:case 5:Ki(u,f,a),a&&r===null&&g&4&&Fm(f),so(f,f.return);break;case 12:Ki(u,f,a);break;case 31:Ki(u,f,a),a&&g&4&&Wm(u,f);break;case 13:Ki(u,f,a),a&&g&4&&qm(u,f);break;case 22:f.memoizedState===null&&Ki(u,f,a),so(f,f.return);break;case 30:break;default:Ki(u,f,a)}n=n.sibling}}function nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xr(a))}function af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xr(e))}function xi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Km(e,n,a,r),n=n.sibling}function Km(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,r),u&2048&&ao(9,n);break;case 1:xi(e,n,a,r);break;case 3:xi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xr(e)));break;case 12:if(u&2048){xi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){It(n,n.return,z)}}else xi(e,n,a,r);break;case 31:xi(e,n,a,r);break;case 13:xi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,r):ro(e,n):f._visibility&2?xi(e,n,a,r):(f._visibility|=2,Xs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&nf(g,n);break;case 24:xi(e,n,a,r),u&2048&&af(n.alternate,n);break;default:xi(e,n,a,r)}}function Xs(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,T=a,z=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:Xs(f,g,T,z,u),ao(8,g);break;case 23:break;case 22:var fe=g.stateNode;g.memoizedState!==null?fe._visibility&2?Xs(f,g,T,z,u):ro(f,g):(fe._visibility|=2,Xs(f,g,T,z,u)),u&&$&2048&&nf(g.alternate,g);break;case 24:Xs(f,g,T,z,u),u&&$&2048&&af(g.alternate,g);break;default:Xs(f,g,T,z,u)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:ro(a,r),u&2048&&nf(r.alternate,r);break;case 24:ro(a,r),u&2048&&af(r.alternate,r);break;default:ro(a,r)}n=n.sibling}}var oo=8192;function Ws(e,n,a){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)Qm(e,n,a),e=e.sibling}function Qm(e,n,a){switch(e.tag){case 26:Ws(e,n,a),e.flags&oo&&e.memoizedState!==null&&jv(a,mi,e.memoizedState,e.memoizedProps);break;case 5:Ws(e,n,a);break;case 3:case 4:var r=mi;mi=Gl(e.stateNode.containerInfo),Ws(e,n,a),mi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=oo,oo=16777216,Ws(e,n,a),oo=r):Ws(e,n,a));break;default:Ws(e,n,a)}}function Jm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,e0(r,e)}Jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,wl(e)):lo(e);break;default:lo(e)}}function wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,e0(r,e)}Jm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wl(n));break;default:wl(n)}e=e.sibling}}function e0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var u=r.sibling,f=r.return;if(jm(r),r===a){bn=null;break e}if(u!==null){u.return=f,bn=u;break e}bn=f}}}var sv={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},rv=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,xt=null,_t=0,zt=0,Zn=null,Ra=!1,qs=!1,sf=!1,Qi=0,$t=0,wa=0,ds=0,rf=0,Kn=0,Ys=0,co=null,Fn=null,of=!1,Cl=0,t0=0,Dl=1/0,Nl=null,Ca=null,pn=0,Da=null,Zs=null,Ji=0,lf=0,cf=null,n0=null,uo=0,uf=null;function Qn(){return(Lt&2)!==0&&_t!==0?_t&-_t:B.T!==null?xf():Nr()}function i0(){if(Kn===0)if((_t&536870912)===0||Mt){var e=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Kn=e}else Kn=536870912;return e=qn.current,e!==null&&(e.flags|=32),Kn}function Hn(e,n,a){(e===Wt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(Ks(e,0),Na(e,_t,Kn,!1)),Rn(e,a),((Lt&2)===0||e!==Wt)&&(e===Wt&&((Lt&2)===0&&(ds|=a),$t===4&&Na(e,_t,Kn,!1)),Ai(e))}function a0(e,n,a){if((Lt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ie(e,n),u=r?cv(e,n):df(e,n,!0),f=r;do{if(u===0){qs&&!r&&Na(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ov(a)){u=df(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var T=e;u=co;var z=T.current.memoizedState.isDehydrated;if(z&&(Ks(T,g).flags|=256),g=df(T,g,!1),g!==2){if(sf&&!z){T.errorRecoveryDisabledLanes|=f,ds|=f,u=4;break e}f=Fn,Fn=u,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){Ks(e,0),Na(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Na(r,n,Kn,!Ra);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Cl+300-E(),10<u)){if(Na(r,n,Kn,!Ra),ge(r,0,!0)!==0)break e;Ji=n,r.timeoutHandle=P0(s0.bind(null,r,a,Fn,Nl,of,n,Kn,ds,Ys,Ra,f,"Throttled",-0,0),u);break e}s0(r,a,Fn,Nl,of,n,Kn,ds,Ys,Ra,f,null,-0,0)}}break}while(!0);Ai(e)}function s0(e,n,a,r,u,f,g,T,z,$,fe,xe,ne,oe){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Qm(n,f,xe);var Fe=(f&62914560)===f?Cl-E():(f&4194048)===f?t0-E():0;if(Fe=Xv(xe,Fe),Fe!==null){Ji=f,e.cancelPendingCommit=Fe(h0.bind(null,e,n,f,a,r,u,g,T,z,fe,xe,null,ne,oe)),Na(e,f,g,!$);return}}h0(e,n,f,a,r,u,g,T,z)}function ov(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Xn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,a,r){n&=~rf,n&=~ds,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ve(u),g=1<<f;r[f]=-1,u&=~g}a!==0&&ko(e,a,n)}function Ul(){return(Lt&6)===0?(fo(0),!1):!0}function ff(){if(xt!==null){if(zt===0)var e=xt.return;else e=xt,Gi=is=null,Au(e),Hs=null,qr=0,e=xt;for(;e!==null;)zm(e.alternate,e),e=e.return;xt=null}}function Ks(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Rv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ji=0,ff(),Wt=e,xt=a=Fi(e.current,null),_t=n,zt=0,Zn=null,Ra=!1,qs=Ie(e,n),sf=!1,Ys=Kn=rf=ds=wa=$t=0,Fn=co=null,of=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ve(r),f=1<<u;n|=e[u],r&=~f}return Qi=n,$o(),a}function r0(e,n){rt=null,B.H=to,n===Fs||n===ol?(n=Sp(),zt=3):n===pu?(n=Sp(),zt=4):zt=n===Vu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,xt===null&&($t=1,yl(e,ai(n,e.current)))}function o0(){var e=qn.current;return e===null?!0:(_t&4194048)===_t?li===null:(_t&62914560)===_t||(_t&536870912)!==0?e===li:!1}function l0(){var e=B.H;return B.H=to,e===null?to:e}function c0(){var e=B.A;return B.A=sv,e}function Ll(){$t=4,Ra||(_t&4194048)!==_t&&qn.current!==null||(qs=!0),(wa&134217727)===0&&(ds&134217727)===0||Wt===null||Na(Wt,_t,Kn,!1)}function df(e,n,a){var r=Lt;Lt|=2;var u=l0(),f=c0();(Wt!==e||_t!==n)&&(Nl=null,Ks(e,n)),n=!1;var g=$t;e:do try{if(zt!==0&&xt!==null){var T=xt,z=Zn;switch(zt){case 8:ff(),g=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var $=zt;if(zt=0,Zn=null,Qs(e,T,z,$),a&&qs){g=0;break e}break;default:$=zt,zt=0,Zn=null,Qs(e,T,z,$)}}lv(),g=$t;break}catch(fe){r0(e,fe)}while(!0);return n&&e.shellSuspendCounter++,Gi=is=null,Lt=r,B.H=u,B.A=f,xt===null&&(Wt=null,_t=0,$o()),g}function lv(){for(;xt!==null;)u0(xt)}function cv(e,n){var a=Lt;Lt|=2;var r=l0(),u=c0();Wt!==e||_t!==n?(Nl=null,Dl=E()+500,Ks(e,n)):qs=Ie(e,n);e:do try{if(zt!==0&&xt!==null){n=xt;var f=Zn;t:switch(zt){case 1:zt=0,Zn=null,Qs(e,n,f,1);break;case 2:case 9:if(bp(f)){zt=0,Zn=null,f0(n);break}n=function(){zt!==2&&zt!==9||Wt!==e||(zt=7),Ai(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:bp(f)?(zt=0,Zn=null,f0(n)):(zt=0,Zn=null,Qs(e,n,f,7));break;case 5:var g=null;switch(xt.tag){case 26:g=xt.memoizedState;case 5:case 27:var T=xt;if(g?K0(g):T.stateNode.complete){zt=0,Zn=null;var z=T.sibling;if(z!==null)xt=z;else{var $=T.return;$!==null?(xt=$,Ol($)):xt=null}break t}}zt=0,Zn=null,Qs(e,n,f,5);break;case 6:zt=0,Zn=null,Qs(e,n,f,6);break;case 8:ff(),$t=6;break e;default:throw Error(s(462))}}uv();break}catch(fe){r0(e,fe)}while(!0);return Gi=is=null,B.H=r,B.A=u,Lt=a,xt!==null?0:(Wt=null,_t=0,$o(),$t)}function uv(){for(;xt!==null&&!at();)u0(xt)}function u0(e){var n=Om(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Ol(e):xt=n}function f0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=wm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=wm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Au(n);default:zm(a,n),n=xt=cp(n,Qi),n=Om(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Ol(e):xt=n}function Qs(e,n,a,r){Gi=is=null,Au(n),Hs=null,qr=0;var u=n.return;try{if(J_(e,u,n,a,_t)){$t=1,yl(e,ai(a,e.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;$t=1,yl(e,ai(a,e.current)),xt=null;return}n.flags&32768?(Mt||r===1?e=!0:qs||(_t&536870912)!==0?e=!1:(Ra=e=!0,(r===2||r===9||r===3||r===6)&&(r=qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),d0(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){d0(n,Ra);return}e=n.return;var a=tv(n.alternate,n,Qi);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);$t===0&&($t=5)}function d0(e,n){do{var a=nv(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);$t=6,xt=null}function h0(e,n,a,r,u,f,g,T,z){e.cancelPendingCommit=null;do Pl();while(pn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=$c,kn(e,a,f,g,T,z),e===Wt&&(xt=Wt=null,_t=0),Zs=n,Da=e,Ji=a,lf=f,cf=u,n0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pv(ce,function(){return _0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=Z.p,Z.p=2,g=Lt,Lt|=4;try{iv(e,n,a)}finally{Lt=g,Z.p=u,B.T=r}}pn=1,p0(),m0(),x0()}}function p0(){if(pn===1){pn=0;var e=Da,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=Z.p;Z.p=2;var u=Lt;Lt|=4;try{Ym(n,e);var f=Ef,g=ep(e.containerInfo),T=f.focusedElem,z=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&$h(T.ownerDocument.documentElement,T)){if(z!==null&&Yc(T)){var $=z.start,fe=z.end;if(fe===void 0&&(fe=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(fe,T.value.length);else{var xe=T.ownerDocument||document,ne=xe&&xe.defaultView||window;if(ne.getSelection){var oe=ne.getSelection(),Fe=T.textContent.length,et=Math.min(z.start,Fe),Gt=z.end===void 0?et:Math.min(z.end,Fe);!oe.extend&&et>Gt&&(g=Gt,Gt=et,et=g);var W=Jh(T,et),V=Jh(T,Gt);if(W&&V&&(oe.rangeCount!==1||oe.anchorNode!==W.node||oe.anchorOffset!==W.offset||oe.focusNode!==V.node||oe.focusOffset!==V.offset)){var K=xe.createRange();K.setStart(W.node,W.offset),oe.removeAllRanges(),et>Gt?(oe.addRange(K),oe.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),oe.addRange(K))}}}}for(xe=[],oe=T;oe=oe.parentNode;)oe.nodeType===1&&xe.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xe.length;T++){var he=xe[T];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}ql=!!Mf,Ef=Mf=null}finally{Lt=u,Z.p=r,B.T=a}}e.current=n,pn=2}}function m0(){if(pn===2){pn=0;var e=Da,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=Z.p;Z.p=2;var u=Lt;Lt|=4;try{km(e,n.alternate,n)}finally{Lt=u,Z.p=r,B.T=a}}pn=3}}function x0(){if(pn===4||pn===3){pn=0,U();var e=Da,n=Zs,a=Ji,r=n0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Zs=Da=null,g0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ca=null),Za(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ye,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=Z.p,Z.p=2,B.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var T=r[g];f(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=u}}(Ji&3)!==0&&Pl(),Ai(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===uf?uo++:(uo=0,uf=e):uo=0,fo(0)}}function g0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xr(n)))}function Pl(){return p0(),m0(),x0(),_0()}function _0(){if(pn!==5)return!1;var e=Da,n=lf;lf=0;var a=Za(Ji),r=B.T,u=Z.p;try{Z.p=32>a?32:a,B.T=null,a=cf,cf=null;var f=Da,g=Ji;if(pn=0,Zs=Da=null,Ji=0,(Lt&6)!==0)throw Error(s(331));var T=Lt;if(Lt|=4,$m(f.current),Km(f,f.current,g,a),Lt=T,fo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ye,f)}catch{}return!0}finally{Z.p=u,B.T=r,g0(e,n)}}function v0(e,n,a){n=ai(a,n),n=Gu(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Rn(e,2),Ai(e))}function It(e,n,a){if(e.tag===3)v0(e,e,a);else for(;n!==null;){if(n.tag===3){v0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ca===null||!Ca.has(r))){e=ai(a,e),a=bm(2),r=Ma(n,a,2),r!==null&&(ym(a,r,n,e),Rn(r,2),Ai(r));break}}n=n.return}}function hf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new rv;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(sf=!0,u.add(a),e=fv.bind(null,e,n,a),n.then(e,e))}function fv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>E()-Cl?(Lt&2)===0&&Ks(e,0):rf|=a,Ys===_t&&(Ys=0)),Ai(e)}function b0(e,n){n===0&&(n=Bt()),e=es(e,n),e!==null&&(Rn(e,n),Ai(e))}function dv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),b0(e,a)}function hv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),b0(e,a)}function pv(e,n){return jt(e,n)}var zl=null,Js=null,pf=!1,Il=!1,mf=!1,Ua=0;function Ai(e){e!==Js&&e.next===null&&(Js===null?zl=Js=e:Js=Js.next=e),Il=!0,pf||(pf=!0,xv())}function fo(e,n){if(!mf&&Il){mf=!0;do for(var a=!1,r=zl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var g=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Ve(42|e)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,E0(r,f))}else f=_t,f=ge(r,r===Wt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ie(r,f)||(a=!0,E0(r,f));r=r.next}while(a);mf=!1}}function mv(){y0()}function y0(){Il=pf=!1;var e=0;Ua!==0&&Av()&&(e=Ua);for(var n=E(),a=null,r=zl;r!==null;){var u=r.next,f=S0(r,n);f===0?(r.next=null,a===null?zl=u:a.next=u,u===null&&(Js=a)):(a=r,(e!==0||(f&3)!==0)&&(Il=!0)),r=u}pn!==0&&pn!==5||fo(e),Ua!==0&&(Ua=0)}function S0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ve(f),T=1<<g,z=u[g];z===-1?((T&a)===0||(T&r)!==0)&&(u[g]=it(T,n)):z<=n&&(e.expiredLanes|=T),f&=~T}if(n=Wt,a=_t,a=ge(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ye(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ye(r),Za(a)){case 2:case 8:a=be;break;case 32:a=ce;break;case 268435456:a=Ue;break;default:a=ce}return r=M0.bind(null,e),a=jt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ye(r),e.callbackPriority=2,e.callbackNode=null,2}function M0(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var r=_t;return r=ge(e,e===Wt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(a0(e,r,n),S0(e,E()),e.callbackNode!=null&&e.callbackNode===a?M0.bind(null,e):null)}function E0(e,n){if(Pl())return null;a0(e,n,!0)}function xv(){wv(function(){(Lt&6)!==0?jt(me,mv):y0()})}function xf(){if(Ua===0){var e=Is;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),Ua=e}return Ua}function T0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function A0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gv(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=T0((u[dn]||null).action),g=r.submitter;g&&(n=(n=g[dn]||null)?T0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Zo("action","action",null,r,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ua!==0){var z=g?A0(u,g):new FormData(u);Pu(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=g?A0(u,g):new FormData(u),Pu(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var gf=0;gf<Jc.length;gf++){var _f=Jc[gf],_v=_f.toLowerCase(),vv=_f[0].toUpperCase()+_f.slice(1);pi(_v,"on"+vv)}pi(ip,"onAnimationEnd"),pi(ap,"onAnimationIteration"),pi(sp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(P_,"onTransitionRun"),pi(z_,"onTransitionStart"),pi(I_,"onTransitionCancel"),pi(rp,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function R0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var T=r[g],z=T.instance,$=T.currentTarget;if(T=T.listener,z!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(fe){Jo(fe)}u.currentTarget=null,f=z}else for(g=0;g<r.length;g++){if(T=r[g],z=T.instance,$=T.currentTarget,T=T.listener,z!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(fe){Jo(fe)}u.currentTarget=null,f=z}}}}function gt(e,n){var a=n[Ts];a===void 0&&(a=n[Ts]=new Set);var r=e+"__bubble";a.has(r)||(w0(n,e,2,!1),a.add(r))}function vf(e,n,a){var r=0;n&&(r|=4),w0(a,e,r,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function bf(e){if(!e[Bl]){e[Bl]=!0,q.forEach(function(a){a!=="selectionchange"&&(bv.has(a)||vf(a,!1,e),vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,vf("selectionchange",!1,n))}}function w0(e,n,a,r){switch(ix(n)){case 2:var u=Yv;break;case 8:u=Zv;break;default:u=Pf}a=u.bind(null,n,a,e),u=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function yf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var T=r.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=pa(T),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=f=g;continue e}T=T.parentNode}}r=r.return}Lh(function(){var $=f,fe=Ic(a),xe=[];e:{var ne=op.get(e);if(ne!==void 0){var oe=Zo,Fe=e;switch(e){case"keypress":if(qo(a)===0)break e;case"keydown":case"keyup":oe=h_;break;case"focusin":Fe="focus",oe=kc;break;case"focusout":Fe="blur",oe=kc;break;case"beforeblur":case"afterblur":oe=kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=x_;break;case ip:case ap:case sp:oe=a_;break;case rp:oe=__;break;case"scroll":case"scrollend":oe=$g;break;case"wheel":oe=b_;break;case"copy":case"cut":case"paste":oe=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Bh;break;case"toggle":case"beforetoggle":oe=S_}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),W=et?ne!==null?ne+"Capture":null:ne;et=[];for(var V=$,K;V!==null;){var he=V;if(K=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||K===null||W===null||(he=Or(V,W),he!=null&&et.push(po(V,he,K))),Gt)break;V=V.return}0<et.length&&(ne=new oe(ne,Fe,null,a,fe),xe.push({event:ne,listeners:et}))}}if((n&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",ne&&a!==zc&&(Fe=a.relatedTarget||a.fromElement)&&(pa(Fe)||Fe[Oi]))break e;if((oe||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,oe?(Fe=a.relatedTarget||a.toElement,oe=$,Fe=Fe?pa(Fe):null,Fe!==null&&(Gt=c(Fe),et=Fe.tag,Fe!==Gt||et!==5&&et!==27&&et!==6)&&(Fe=null)):(oe=null,Fe=$),oe!==Fe)){if(et=zh,he="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(et=Bh,he="onPointerLeave",W="onPointerEnter",V="pointer"),Gt=oe==null?ne:X(oe),K=Fe==null?ne:X(Fe),ne=new et(he,V+"leave",oe,a,fe),ne.target=Gt,ne.relatedTarget=K,he=null,pa(fe)===$&&(et=new et(W,V+"enter",Fe,a,fe),et.target=K,et.relatedTarget=Gt,he=et),Gt=he,oe&&Fe)t:{for(et=yv,W=oe,V=Fe,K=0,he=W;he;he=et(he))K++;he=0;for(var Ke=V;Ke;Ke=et(Ke))he++;for(;0<K-he;)W=et(W),K--;for(;0<he-K;)V=et(V),he--;for(;K--;){if(W===V||V!==null&&W===V.alternate){et=W;break t}W=et(W),V=et(V)}et=null}else et=null;oe!==null&&C0(xe,ne,oe,et,!1),Fe!==null&&Gt!==null&&C0(xe,Gt,Fe,et,!0)}}e:{if(ne=$?X($):window,oe=ne.nodeName&&ne.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ne.type==="file")var Dt=Wh;else if(jh(ne))if(qh)Dt=U_;else{Dt=D_;var ke=C_}else oe=ne.nodeName,!oe||oe.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&Pc($.elementType)&&(Dt=Wh):Dt=N_;if(Dt&&(Dt=Dt(e,$))){Xh(xe,Dt,a,fe);break e}ke&&ke(e,ne,$),e==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&_n(ne,"number",ne.value)}switch(ke=$?X($):window,e){case"focusin":(jh(ke)||ke.contentEditable==="true")&&(Cs=ke,Zc=$,Vr=null);break;case"focusout":Vr=Zc=Cs=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,tp(xe,a,fe);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":tp(xe,a,fe)}var ut;if(Xc)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else ws?Vh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Fh&&a.locale!=="ko"&&(ws||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&ws&&(ut=Oh()):(xa=fe,Hc="value"in xa?xa.value:xa.textContent,ws=!0)),ke=Fl($,vt),0<ke.length&&(vt=new Ih(vt,e,null,a,fe),xe.push({event:vt,listeners:ke}),ut?vt.data=ut:(ut=kh(a),ut!==null&&(vt.data=ut)))),(ut=E_?T_(e,a):A_(e,a))&&(vt=Fl($,"onBeforeInput"),0<vt.length&&(ke=new Ih("onBeforeInput","beforeinput",null,a,fe),xe.push({event:ke,listeners:vt}),ke.data=ut)),gv(xe,e,$,a,fe)}R0(xe,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Or(e,a),u!=null&&r.unshift(po(e,u,f)),u=Or(e,n),u!=null&&r.push(po(e,u,f))),e.tag===3)return r;e=e.return}return[]}function yv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function C0(e,n,a,r,u){for(var f=n._reactName,g=[];a!==null&&a!==r;){var T=a,z=T.alternate,$=T.stateNode;if(T=T.tag,z!==null&&z===r)break;T!==5&&T!==26&&T!==27||$===null||(z=$,u?($=Or(a,f),$!=null&&g.unshift(po(a,$,z))):u||($=Or(a,f),$!=null&&g.push(po(a,$,z)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Sv=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function D0(e){return(typeof e=="string"?e:""+e).replace(Sv,`
`).replace(Mv,"")}function N0(e,n){return n=D0(n),D0(e)===n}function Ht(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Si(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Si(e,""+r);break;case"className":Tt(e,"class",r);break;case"tabIndex":Tt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(e,a,r);break;case"style":Nh(e,r,f);break;case"data":if(n!=="object"){Tt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Xo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",u.name,u,null),Ht(e,n,"formEncType",u.formEncType,u,null),Ht(e,n,"formMethod",u.formMethod,u,null),Ht(e,n,"formTarget",u.formTarget,u,null)):(Ht(e,n,"encType",u.encType,u,null),Ht(e,n,"method",u.method,u,null),Ht(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Xo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ii);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":gt("beforetoggle",e),gt("toggle",e),ct(e,"popover",r);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ct(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qg.get(a)||a,ct(e,a,r))}}function Sf(e,n,a,r,u,f){switch(a){case"style":Nh(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Si(e,r):(typeof r=="number"||typeof r=="bigint")&&Si(e,""+r);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ct(e,a,r)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,f,g,a,null)}}u&&Ht(e,n,"srcSet",a.srcSet,a,null),r&&Ht(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var T=f=g=u=null,z=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var fe=a[r];if(fe!=null)switch(r){case"name":u=fe;break;case"type":g=fe;break;case"checked":z=fe;break;case"defaultChecked":$=fe;break;case"value":f=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Ht(e,n,r,fe,a,null)}}Yt(e,f,T,z,$,g,u,!1);return;case"select":gt("invalid",e),r=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":r=T;default:Ht(e,n,u,T,a,null)}n=f,a=g,e.multiple=!!r,n!=null?hn(e,!!r,n,!1):a!=null&&hn(e,!!r,a,!0);return;case"textarea":gt("invalid",e),f=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ht(e,n,g,T,a,null)}Sn(e,r,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ht(e,n,z,r,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(r=0;r<ho.length;r++)gt(ho[r],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,$,r,a,null)}return;default:if(Pc(n)){for(fe in a)a.hasOwnProperty(fe)&&(r=a[fe],r!==void 0&&Sf(e,n,fe,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Ht(e,n,T,r,a,null))}function Ev(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,z=null,$=null,fe=null;for(oe in a){var xe=a[oe];if(a.hasOwnProperty(oe)&&xe!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":z=xe;default:r.hasOwnProperty(oe)||Ht(e,n,oe,null,r,xe)}}for(var ne in r){var oe=r[ne];if(xe=a[ne],r.hasOwnProperty(ne)&&(oe!=null||xe!=null))switch(ne){case"type":f=oe;break;case"name":u=oe;break;case"checked":$=oe;break;case"defaultChecked":fe=oe;break;case"value":g=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:oe!==xe&&Ht(e,n,ne,oe,r,xe)}}Pi(e,g,T,z,$,fe,f,u);return;case"select":oe=g=T=ne=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":oe=z;default:r.hasOwnProperty(f)||Ht(e,n,f,null,r,z)}for(u in r)if(f=r[u],z=a[u],r.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":ne=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==z&&Ht(e,n,u,f,r,z)}n=T,a=g,r=oe,ne!=null?hn(e,!!a,ne,!1):!!r!=!!a&&(n!=null?hn(e,!!a,n,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":oe=ne=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ht(e,n,T,null,r,u)}for(g in r)if(u=r[g],f=a[g],r.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":ne=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ht(e,n,g,u,r,f)}vn(e,ne,oe);return;case"option":for(var Fe in a)if(ne=a[Fe],a.hasOwnProperty(Fe)&&ne!=null&&!r.hasOwnProperty(Fe))switch(Fe){case"selected":e.selected=!1;break;default:Ht(e,n,Fe,null,r,ne)}for(z in r)if(ne=r[z],oe=a[z],r.hasOwnProperty(z)&&ne!==oe&&(ne!=null||oe!=null))switch(z){case"selected":e.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Ht(e,n,z,ne,r,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ne=a[et],a.hasOwnProperty(et)&&ne!=null&&!r.hasOwnProperty(et)&&Ht(e,n,et,null,r,ne);for($ in r)if(ne=r[$],oe=a[$],r.hasOwnProperty($)&&ne!==oe&&(ne!=null||oe!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Ht(e,n,$,ne,r,oe)}return;default:if(Pc(n)){for(var Gt in a)ne=a[Gt],a.hasOwnProperty(Gt)&&ne!==void 0&&!r.hasOwnProperty(Gt)&&Sf(e,n,Gt,void 0,r,ne);for(fe in r)ne=r[fe],oe=a[fe],!r.hasOwnProperty(fe)||ne===oe||ne===void 0&&oe===void 0||Sf(e,n,fe,ne,r,oe);return}}for(var W in a)ne=a[W],a.hasOwnProperty(W)&&ne!=null&&!r.hasOwnProperty(W)&&Ht(e,n,W,null,r,ne);for(xe in r)ne=r[xe],oe=a[xe],!r.hasOwnProperty(xe)||ne===oe||ne==null&&oe==null||Ht(e,n,xe,ne,r,oe)}function U0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Tv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&U0(g)){for(g=0,T=u.responseEnd,r+=1;r<a.length;r++){var z=a[r],$=z.startTime;if($>T)break;var fe=z.transferSize,xe=z.initiatorType;fe&&U0(xe)&&(z=z.responseEnd,g+=fe*(z<T?1:(T-$)/(z-$)))}if(--r,n+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mf=null,Ef=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function L0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Tf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Af=null;function Av(){var e=window.event;return e&&e.type==="popstate"?e===Af?!1:(Af=e,!0):(Af=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(Cv)}:P0;function Cv(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function I0(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),nr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Ka]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&mo(e.ownerDocument.body);a=u}while(a);nr(n)}function B0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Rf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dv(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function Nv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function F0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function wf(e){return e.data==="$?"||e.data==="$~"}function Cf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Df=null;function H0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function G0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function V0(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Lr(e)}var ui=new Map,k0=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=Z.d;Z.d={f:Lv,r:Ov,D:Pv,C:zv,L:Iv,m:Bv,X:Hv,S:Fv,M:Gv};function Lv(){var e=$i.f(),n=Ul();return e||n}function Ov(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?rm(n):$i.r(e)}var $s=typeof document>"u"?null:document;function j0(e,n,a){var r=$s;if(r&&typeof n=="string"&&n){var u=qt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),k0.has(u)||(k0.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),An(n,"link",e),ee(n),r.head.appendChild(n)))}}function Pv(e){$i.D(e),j0("dns-prefetch",e,null)}function zv(e,n){$i.C(e,n),j0("preconnect",e,n)}function Iv(e,n,a){$i.L(e,n,a);var r=$s;if(r&&e&&n){var u='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+qt(a.imageSizes)+'"]')):u+='[href="'+qt(e)+'"]';var f=u;switch(n){case"style":f=er(e);break;case"script":f=tr(e)}ui.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(xo(f))||n==="script"&&r.querySelector(go(f))||(n=r.createElement("link"),An(n,"link",e),ee(n),r.head.appendChild(n)))}}function Bv(e,n){$i.m(e,n);var a=$s;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+qt(r)+'"][href="'+qt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=tr(e)}if(!ui.has(f)&&(e=x({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}r=a.createElement("link"),An(r,"link",e),ee(r),a.head.appendChild(r)}}}function Fv(e,n,a){$i.S(e,n,a);var r=$s;if(r&&e){var u=se(r).hoistableStyles,f=er(e);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=r.querySelector(xo(f)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Nf(e,a);var z=g=r.createElement("link");ee(z),An(z,"link",e),z._p=new Promise(function($,fe){z.onload=$,z.onerror=fe}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Vl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function Hv(e,n){$i.X(e,n);var a=$s;if(a&&e){var r=se(a).hoistableScripts,u=tr(e),f=r.get(u);f||(f=a.querySelector(go(u)),f||(e=x({src:e,async:!0},n),(n=ui.get(u))&&Uf(e,n),f=a.createElement("script"),ee(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Gv(e,n){$i.M(e,n);var a=$s;if(a&&e){var r=se(a).hoistableScripts,u=tr(e),f=r.get(u);f||(f=a.querySelector(go(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&Uf(e,n),f=a.createElement("script"),ee(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function X0(e,n,a,r){var u=(u=ie.current)?Gl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=se(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=er(a.href);var f=se(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(xo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||Vv(u,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=tr(a),a=se(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function er(e){return'href="'+qt(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function W0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Vv(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),An(n,"link",a),ee(n),e.head.appendChild(n))}function tr(e){return'[src="'+qt(e)+'"]'}function go(e){return"script[async]"+e}function q0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(r)return n.instance=r,ee(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ee(r),An(r,"style",u),Vl(r,a.precedence,e),n.instance=r;case"stylesheet":u=er(a.href);var f=e.querySelector(xo(u));if(f)return n.state.loading|=4,n.instance=f,ee(f),f;r=W0(a),(u=ui.get(u))&&Nf(r,u),f=(e.ownerDocument||e).createElement("link"),ee(f);var g=f;return g._p=new Promise(function(T,z){g.onload=T,g.onerror=z}),An(f,"link",r),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=tr(a.src),(u=e.querySelector(go(f)))?(n.instance=u,ee(u),u):(r=a,(u=ui.get(f))&&(r=x({},a),Uf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),ee(u),An(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Vl(r,a.precedence,e));return n.instance}function Vl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,g=0;g<r.length;g++){var T=r[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function Y0(e,n,a){if(kl===null){var r=new Map,u=kl=new Map;u.set(a,r)}else u=kl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ka]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var T=r.get(g);T?T.push(f):r.set(g,[f])}}return r}function Z0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function kv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jv(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=er(r.href),f=n.querySelector(xo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ee(f);return}f=n.ownerDocument||n,r=W0(r),(u=ui.get(u))&&Nf(r,u),f=f.createElement("link"),ee(f);var g=f;g._p=new Promise(function(T,z){g.onload=T,g.onerror=z}),An(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lf=0;function Xv(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Lf===0&&(Lf=62500*Tv());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Lf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(Wv,e),Xl=null,jl.call(e))}function Wv(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var r=a.get(null);else{a=new Map,Xl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,u),a.set(g,u),this.count++,r=jl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var _o={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function qv(e,n,a,r,u,f,g,T,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Q0(e,n,a,r,u,f,g,T,z,$,fe,xe){return e=new qv(e,n,a,g,z,$,fe,xe,T),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},mu(f),e}function J0(e){return e?(e=Us,e):Us}function $0(e,n,a,r,u,f){u=J0(u),r.context===null?r.context=u:r.pendingContext=u,r=Sa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ma(e,r,n),a!==null&&(Hn(a,e,n),Zr(a,e,n))}function ex(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Of(e,n){ex(e,n),(e=e.alternate)&&ex(e,n)}function tx(e){if(e.tag===13||e.tag===31){var n=es(e,67108864);n!==null&&Hn(n,e,67108864),Of(e,67108864)}}function nx(e){if(e.tag===13||e.tag===31){var n=Qn();n=hi(n);var a=es(e,n);a!==null&&Hn(a,e,n),Of(e,n)}}var ql=!0;function Yv(e,n,a,r){var u=B.T;B.T=null;var f=Z.p;try{Z.p=2,Pf(e,n,a,r)}finally{Z.p=f,B.T=u}}function Zv(e,n,a,r){var u=B.T;B.T=null;var f=Z.p;try{Z.p=8,Pf(e,n,a,r)}finally{Z.p=f,B.T=u}}function Pf(e,n,a,r){if(ql){var u=zf(r);if(u===null)yf(e,n,r,Yl,a),ax(e,r);else if(Qv(u,e,n,a,r))r.stopPropagation();else if(ax(e,r),n&4&&-1<Kv.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Me(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var z=1<<31-Ve(g);T.entanglements[1]|=z,g&=~z}Ai(f),(Lt&6)===0&&(Dl=E()+500,fo(0))}}break;case 31:case 13:T=es(f,2),T!==null&&Hn(T,f,2),Ul(),Of(f,2)}if(f=zf(r),f===null&&yf(e,n,r,Yl,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else yf(e,n,r,null,a)}}function zf(e){return e=Ic(e),If(e)}var Yl=null;function If(e){if(Yl=null,e=pa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function ix(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case me:return 2;case be:return 8;case ce:case We:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Bf=!1,Oa=null,Pa=null,za=null,vo=new Map,bo=new Map,Ia=[],Kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ax(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function yo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&tx(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Qv(e,n,a,r,u){switch(n){case"focusin":return Oa=yo(Oa,e,n,a,r,u),!0;case"dragenter":return Pa=yo(Pa,e,n,a,r,u),!0;case"mouseover":return za=yo(za,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return vo.set(f,yo(vo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,bo.set(f,yo(bo.get(f)||null,e,n,a,r,u)),!0}return!1}function sx(e){var n=pa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ur(e.priority,function(){nx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ur(e.priority,function(){nx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);zc=r,a.target.dispatchEvent(r),zc=null}else return n=R(a),n!==null&&tx(n),e.blockedOn=a,!1;n.shift()}return!0}function rx(e,n,a){Zl(e)&&a.delete(n)}function Jv(){Bf=!1,Oa!==null&&Zl(Oa)&&(Oa=null),Pa!==null&&Zl(Pa)&&(Pa=null),za!==null&&Zl(za)&&(za=null),vo.forEach(rx),bo.forEach(rx)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jv)))}var Ql=null;function ox(e){Ql!==e&&(Ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(If(r||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function nr(e){function n(z){return Kl(z,e)}Oa!==null&&Kl(Oa,e),Pa!==null&&Kl(Pa,e),za!==null&&Kl(za,e),vo.forEach(n),bo.forEach(n);for(var a=0;a<Ia.length;a++){var r=Ia[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)sx(a),a.blockedOn===null&&Ia.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],g=u[dn]||null;if(typeof f=="function")g||ox(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[dn]||null)T=g.formAction;else if(If(u)!==null)continue}else T=g.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),ox(a)}}}function lx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ff(e){this._internalRoot=e}Jl.prototype.render=Ff.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();$0(a,r,e,n,null,null)},Jl.prototype.unmount=Ff.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$0(e.current,2,null,e,null,null),Ul(),n[Oi]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ia.length&&n!==0&&n<Ia[a].priority;a++);Ia.splice(a,0,e),a===0&&sx(e)}};var cx=t.version;if(cx!=="19.2.0")throw Error(s(527,cx,"19.2.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var $v={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{ye=$l.inject($v),Ee=$l}catch{}}return Mo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=xm,f=gm,g=_m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Q0(e,1,!1,null,null,a,r,null,u,f,g,lx),e[Oi]=n.current,bf(e),new Ff(n)},Mo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=xm,g=gm,T=_m,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Q0(e,1,!0,n,a??null,r,u,z,f,g,T,lx),n.context=J0(null),a=n.current,r=Qn(),r=hi(r),u=Sa(r),u.callback=null,Ma(a,u,r),a=r,n.current.lanes=a,Rn(n,a),Ai(n),e[Oi]=n.current,bf(e),new Jl(n)},Mo.version="19.2.0",Mo}var vx;function ub(){if(vx)return Vf.exports;vx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vf.exports=cb(),Vf.exports}var fb=ub();const db=_g(fb);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="181",hb=0,bx=1,pb=2,vg=1,bg=2,ra=3,Ya=0,Vn=1,oa=2,ua=0,vr=1,yx=2,Sx=3,Mx=4,mb=5,bs=100,xb=101,gb=102,_b=103,vb=104,bb=200,yb=201,Sb=202,Mb=203,Td=204,Ad=205,Eb=206,Tb=207,Ab=208,Rb=209,wb=210,Cb=211,Db=212,Nb=213,Ub=214,Rd=0,wd=1,Cd=2,yr=3,Dd=4,Nd=5,Ud=6,Ld=7,yg=0,Lb=1,Ob=2,qa=0,Pb=1,zb=2,Ib=3,Bb=4,Fb=5,Hb=6,Gb=7,Sg=300,Sr=301,Mr=302,Od=303,Pd=304,Cc=306,zd=1e3,la=1001,Id=1002,ni=1003,Vb=1004,ec=1005,di=1006,Wf=1007,Ss=1008,Ni=1009,Mg=1010,Eg=1011,Uo=1012,xh=1013,Ms=1014,ca=1015,Ar=1016,gh=1017,_h=1018,Lo=1020,Tg=35902,Ag=35899,Rg=1021,wg=1022,yi=1023,Oo=1026,Po=1027,Cg=1028,vh=1029,bh=1030,yh=1031,Sh=1033,yc=33776,Sc=33777,Mc=33778,Ec=33779,Bd=35840,Fd=35841,Hd=35842,Gd=35843,Vd=36196,kd=37492,jd=37496,Xd=37808,Wd=37809,qd=37810,Yd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,$d=37816,eh=37817,th=37818,nh=37819,ih=37820,ah=37821,sh=36492,rh=36494,oh=36495,lh=36283,ch=36284,uh=36285,fh=36286,kb=3200,jb=3201,Dg=0,Xb=1,Xa="",ei="srgb",Er="srgb-linear",Ac="linear",Vt="srgb",ir=7680,Ex=519,Wb=512,qb=513,Yb=514,Ng=515,Zb=516,Kb=517,Qb=518,Jb=519,Tx=35044,Ax="300 es",wi=2e3,Rc=2001;function Ug(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function zo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $b(){const o=zo("canvas");return o.style.display="block",o}const Rx={};function wx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ot(...o){const t="THREE."+o.shift();console.warn(t,...o)}function sn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Io(...o){const t=o.join(" ");t in Rx||(Rx[t]=!0,ot(...o))}function ey(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Rr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,dh=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function bt(o,t,i){return Math.max(t,Math.min(i,o))}function ty(o,t){return(o%t+t)%t}function Yf(o,t,i){return(1-i)*o+i*t}function Eo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,i=0){At.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(bt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3],b=c[d+0],y=c[d+1],A=c[d+2],D=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h>=1){t[i+0]=b,t[i+1]=y,t[i+2]=A,t[i+3]=D;return}if(x!==D||m!==b||p!==y||_!==A){let M=m*b+p*y+_*A+x*D;M<0&&(b=-b,y=-y,A=-A,D=-D,M=-M);let v=1-h;if(M<.9995){const I=Math.acos(M),L=Math.sin(I);v=Math.sin(v*I)/L,h=Math.sin(h*I)/L,m=m*v+b*h,p=p*v+y*h,_=_*v+A*h,x=x*v+D*h}else{m=m*v+b*h,p=p*v+y*h,_=_*v+A*h,x=x*v+D*h;const I=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=I,p*=I,_*=I,x*=I}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[d],b=c[d+1],y=c[d+2],A=c[d+3];return t[i]=h*A+_*x+m*y-p*b,t[i+1]=m*A+_*b+p*x-h*y,t[i+2]=p*A+_*y+h*b-m*x,t[i+3]=_*A-h*x-m*b-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),x=h(c/2),b=m(s/2),y=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=b*_*x+p*y*A,this._y=p*y*x-b*_*A,this._z=p*_*A+b*y*x,this._w=p*_*x-b*y*A;break;case"YXZ":this._x=b*_*x+p*y*A,this._y=p*y*x-b*_*A,this._z=p*_*A-b*y*x,this._w=p*_*x+b*y*A;break;case"ZXY":this._x=b*_*x-p*y*A,this._y=p*y*x+b*_*A,this._z=p*_*A+b*y*x,this._w=p*_*x-b*y*A;break;case"ZYX":this._x=b*_*x-p*y*A,this._y=p*y*x+b*_*A,this._z=p*_*A-b*y*x,this._w=p*_*x+b*y*A;break;case"YZX":this._x=b*_*x+p*y*A,this._y=p*y*x+b*_*A,this._z=p*_*A-b*y*x,this._w=p*_*x-b*y*A;break;case"XZY":this._x=b*_*x-p*y*A,this._y=p*y*x-b*_*A,this._z=p*_*A+b*y*x,this._w=p*_*x+b*y*A;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],b=s+h+x;if(b>0){const y=.5/Math.sqrt(b+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(s>h&&s>x){const y=2*Math.sqrt(1+s-h-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>x){const y=2*Math.sqrt(1+h-s-x);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-s*p,this._z=c*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(t=0,i=0,s=0){ae.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Cx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Cx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-c*l),x=2*(c*s-d*i);return this.x=i+m*p+d*x-h*_,this.y=s+m*_+h*p-c*x,this.z=l+m*x+c*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Zf.copy(this).projectOnVector(t),this.sub(Zf)}reflect(t){return this.sub(Zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(bt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new ae,Cx=new Fo;class ft{constructor(t,i,s,l,c,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],x=s[7],b=s[2],y=s[5],A=s[8],D=l[0],M=l[3],v=l[6],I=l[1],L=l[4],F=l[7],j=l[2],N=l[5],O=l[8];return c[0]=d*D+h*I+m*j,c[3]=d*M+h*L+m*N,c[6]=d*v+h*F+m*O,c[1]=p*D+_*I+x*j,c[4]=p*M+_*L+x*N,c[7]=p*v+_*F+x*O,c[2]=b*D+y*I+A*j,c[5]=b*M+y*L+A*N,c[8]=b*v+y*F+A*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*c*_+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*d-h*p,b=h*m-_*c,y=p*c-d*m,A=i*x+s*b+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=x*D,t[1]=(l*p-_*s)*D,t[2]=(h*s-l*d)*D,t[3]=b*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-h*i)*D,t[6]=y*D,t[7]=(s*m-p*i)*D,t[8]=(d*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new ft,Dx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){const o={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=br(l.r),l.g=br(l.g),l.b=br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Er]:{primaries:t,whitePoint:s,transfer:Ac,toXYZ:Dx,fromXYZ:Nx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:s,transfer:Vt,toXYZ:Dx,fromXYZ:Nx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const Ut=ny();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function br(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class iy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ar===void 0&&(ar=zo("canvas")),ar.width=t.width,ar.height=t.height;const l=ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=fa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ay=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Qf(l[d].image)):c.push(Qf(l[d]))}else c=Qf(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let sy=0;const Jf=new ae;class On extends Rr{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=la,l=la,c=di,d=Ss,h=yi,m=Ni,p=On.DEFAULT_ANISOTROPY,_=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Bo(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jf).x}get height(){return this.source.getSize(Jf).y}get depth(){return this.source.getSize(Jf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zd:t.x=t.x-Math.floor(t.x);break;case la:t.x=t.x<0?0:1;break;case Id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zd:t.y=t.y-Math.floor(t.y);break;case la:t.y=t.y<0?0:1;break;case Id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Sg;On.DEFAULT_ANISOTROPY=1;class kt{constructor(t=0,i=0,s=0,l=1){kt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],b=m[1],y=m[5],A=m[9],D=m[2],M=m[6],v=m[10];if(Math.abs(_-b)<.01&&Math.abs(x-D)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+b)<.1&&Math.abs(x+D)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,F=(y+1)/2,j=(v+1)/2,N=(_+b)/4,O=(x+D)/4,Q=(A+M)/4;return L>F&&L>j?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=N/s,c=O/s):F>j?F<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(F),s=N/l,c=Q/l):j<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),s=O/c,l=Q/c),this.set(s,l,c,i),this}let I=Math.sqrt((M-A)*(M-A)+(x-D)*(x-D)+(b-_)*(b-_));return Math.abs(I)<.001&&(I=1),this.x=(M-A)/I,this.y=(x-D)/I,this.z=(b-_)/I,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this.w=bt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this.w=bt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends Rr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new kt(0,0,t,i),this.scissorTest=!1,this.viewport=new kt(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new On(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Mh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends ry{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Lg extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,gi):gi.fromBufferAttribute(c,d),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),nc.subVectors(this.max,To),sr.subVectors(t.a,To),rr.subVectors(t.b,To),or.subVectors(t.c,To),Fa.subVectors(rr,sr),Ha.subVectors(or,rr),hs.subVectors(sr,or);let i=[0,-Fa.z,Fa.y,0,-Ha.z,Ha.y,0,-hs.z,hs.y,Fa.z,0,-Fa.x,Ha.z,0,-Ha.x,hs.z,0,-hs.x,-Fa.y,Fa.x,0,-Ha.y,Ha.x,0,-hs.y,hs.x,0];return!$f(i,sr,rr,or,nc)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,sr,rr,or,nc))?!1:(ic.crossVectors(Fa,Ha),i=[ic.x,ic.y,ic.z],$f(i,sr,rr,or,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],gi=new ae,tc=new Ho,sr=new ae,rr=new ae,or=new ae,Fa=new ae,Ha=new ae,hs=new ae,To=new ae,nc=new ae,ic=new ae,ps=new ae;function $f(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){ps.fromArray(o,c);const h=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),_=s.dot(ps);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const ly=new Ho,Ao=new ae,ed=new ae;class Eh{constructor(t=new ae,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ly.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ao,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(ed)),this.expandByPoint(Ao.copy(t.center).sub(ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new ae,td=new ae,ac=new ae,Ga=new ae,nd=new ae,sc=new ae,id=new ae;class cy{constructor(t=new ae,i=new ae(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){td.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(td);const c=t.distanceTo(i)*.5,d=-this.direction.dot(ac),h=Ga.dot(this.direction),m=-Ga.dot(ac),p=Ga.lengthSq(),_=Math.abs(1-d*d);let x,b,y,A;if(_>0)if(x=d*m-h,b=d*h-m,A=c*_,x>=0)if(b>=-A)if(b<=A){const D=1/_;x*=D,b*=D,y=x*(x+d*b+2*h)+b*(d*x+b+2*m)+p}else b=c,x=Math.max(0,-(d*b+h)),y=-x*x+b*(b+2*m)+p;else b=-c,x=Math.max(0,-(d*b+h)),y=-x*x+b*(b+2*m)+p;else b<=-A?(x=Math.max(0,-(-d*c+h)),b=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+b*(b+2*m)+p):b<=A?(x=0,b=Math.min(Math.max(-c,-m),c),y=b*(b+2*m)+p):(x=Math.max(0,-(d*c+h)),b=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+b*(b+2*m)+p);else b=d>0?-c:c,x=Math.max(0,-(d*b+h)),y=-x*x+b*(b+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(td).addScaledVector(ac,b),y}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,b=this.origin;return p>=0?(s=(t.min.x-b.x)*p,l=(t.max.x-b.x)*p):(s=(t.max.x-b.x)*p,l=(t.min.x-b.x)*p),_>=0?(c=(t.min.y-b.y)*_,d=(t.max.y-b.y)*_):(c=(t.max.y-b.y)*_,d=(t.min.y-b.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-b.z)*x,m=(t.max.z-b.z)*x):(h=(t.max.z-b.z)*x,m=(t.min.z-b.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,s,l,c){nd.subVectors(i,t),sc.subVectors(s,t),id.crossVectors(nd,sc);let d=this.direction.dot(id),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(sc.crossVectors(Ga,sc));if(m<0)return null;const p=h*this.direction.dot(nd.cross(Ga));if(p<0||m+p>d)return null;const _=-h*Ga.dot(id);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,c,d,h,m,p,_,x,b,y,A,D,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,_,x,b,y,A,D,M)}set(t,i,s,l,c,d,h,m,p,_,x,b,y,A,D,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=b,v[3]=y,v[7]=A,v[11]=D,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/lr.setFromMatrixColumn(t,0).length(),c=1/lr.setFromMatrixColumn(t,1).length(),d=1/lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const b=d*_,y=d*x,A=h*_,D=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=y+A*p,i[5]=b-D*p,i[9]=-h*m,i[2]=D-b*p,i[6]=A+y*p,i[10]=d*m}else if(t.order==="YXZ"){const b=m*_,y=m*x,A=p*_,D=p*x;i[0]=b+D*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=y*h-A,i[6]=D+b*h,i[10]=d*m}else if(t.order==="ZXY"){const b=m*_,y=m*x,A=p*_,D=p*x;i[0]=b-D*h,i[4]=-d*x,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*_,i[9]=D-b*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const b=d*_,y=d*x,A=h*_,D=h*x;i[0]=m*_,i[4]=A*p-y,i[8]=b*p+D,i[1]=m*x,i[5]=D*p+b,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const b=d*m,y=d*p,A=h*m,D=h*p;i[0]=m*_,i[4]=D-b*x,i[8]=A*x+y,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*x+A,i[10]=b-D*x}else if(t.order==="XZY"){const b=d*m,y=d*p,A=h*m,D=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=b*x+D,i[5]=d*_,i[9]=y*x-A,i[2]=A*x-y,i[6]=h*_,i[10]=D*x+b}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uy,t,fy)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Va.crossVectors(s,Jn),Va.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Va.crossVectors(s,Jn)),Va.normalize(),rc.crossVectors(Jn,Va),l[0]=Va.x,l[4]=rc.x,l[8]=Jn.x,l[1]=Va.y,l[5]=rc.y,l[9]=Jn.y,l[2]=Va.z,l[6]=rc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],x=s[5],b=s[9],y=s[13],A=s[2],D=s[6],M=s[10],v=s[14],I=s[3],L=s[7],F=s[11],j=s[15],N=l[0],O=l[4],Q=l[8],C=l[12],w=l[1],k=l[5],te=l[9],le=l[13],pe=l[2],de=l[6],B=l[10],Z=l[14],Y=l[3],_e=l[7],ve=l[11],P=l[15];return c[0]=d*N+h*w+m*pe+p*Y,c[4]=d*O+h*k+m*de+p*_e,c[8]=d*Q+h*te+m*B+p*ve,c[12]=d*C+h*le+m*Z+p*P,c[1]=_*N+x*w+b*pe+y*Y,c[5]=_*O+x*k+b*de+y*_e,c[9]=_*Q+x*te+b*B+y*ve,c[13]=_*C+x*le+b*Z+y*P,c[2]=A*N+D*w+M*pe+v*Y,c[6]=A*O+D*k+M*de+v*_e,c[10]=A*Q+D*te+M*B+v*ve,c[14]=A*C+D*le+M*Z+v*P,c[3]=I*N+L*w+F*pe+j*Y,c[7]=I*O+L*k+F*de+j*_e,c[11]=I*Q+L*te+F*B+j*ve,c[15]=I*C+L*le+F*Z+j*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],b=t[10],y=t[14],A=t[3],D=t[7],M=t[11],v=t[15];return A*(+c*m*x-l*p*x-c*h*b+s*p*b+l*h*y-s*m*y)+D*(+i*m*y-i*p*b+c*d*b-l*d*y+l*p*_-c*m*_)+M*(+i*p*x-i*h*y-c*d*x+s*d*y+c*h*_-s*p*_)+v*(-l*h*_-i*m*x+i*h*b+l*d*x-s*d*b+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],b=t[10],y=t[11],A=t[12],D=t[13],M=t[14],v=t[15],I=x*M*p-D*b*p+D*m*y-h*M*y-x*m*v+h*b*v,L=A*b*p-_*M*p-A*m*y+d*M*y+_*m*v-d*b*v,F=_*D*p-A*x*p+A*h*y-d*D*y-_*h*v+d*x*v,j=A*x*m-_*D*m-A*h*b+d*D*b+_*h*M-d*x*M,N=i*I+s*L+l*F+c*j;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return t[0]=I*O,t[1]=(D*b*c-x*M*c-D*l*y+s*M*y+x*l*v-s*b*v)*O,t[2]=(h*M*c-D*m*c+D*l*p-s*M*p-h*l*v+s*m*v)*O,t[3]=(x*m*c-h*b*c-x*l*p+s*b*p+h*l*y-s*m*y)*O,t[4]=L*O,t[5]=(_*M*c-A*b*c+A*l*y-i*M*y-_*l*v+i*b*v)*O,t[6]=(A*m*c-d*M*c-A*l*p+i*M*p+d*l*v-i*m*v)*O,t[7]=(d*b*c-_*m*c+_*l*p-i*b*p-d*l*y+i*m*y)*O,t[8]=F*O,t[9]=(A*x*c-_*D*c-A*s*y+i*D*y+_*s*v-i*x*v)*O,t[10]=(d*D*c-A*h*c+A*s*p-i*D*p-d*s*v+i*h*v)*O,t[11]=(_*h*c-d*x*c-_*s*p+i*x*p+d*s*y-i*h*y)*O,t[12]=j*O,t[13]=(_*D*l-A*x*l+A*s*b-i*D*b-_*s*M+i*x*M)*O,t[14]=(A*h*l-d*D*l-A*s*m+i*D*m+d*s*M-i*h*M)*O,t[15]=(d*x*l-_*h*l+_*s*m-i*x*m-d*s*b+i*h*b)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,_=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,x=h+h,b=c*p,y=c*_,A=c*x,D=d*_,M=d*x,v=h*x,I=m*p,L=m*_,F=m*x,j=s.x,N=s.y,O=s.z;return l[0]=(1-(D+v))*j,l[1]=(y+F)*j,l[2]=(A-L)*j,l[3]=0,l[4]=(y-F)*N,l[5]=(1-(b+v))*N,l[6]=(M+I)*N,l[7]=0,l[8]=(A+L)*O,l[9]=(M-I)*O,l[10]=(1-(b+D))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=lr.set(l[0],l[1],l[2]).length();const d=lr.set(l[4],l[5],l[6]).length(),h=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/c,_=1/d,x=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=wi,m=!1){const p=this.elements,_=2*c/(i-t),x=2*c/(s-l),b=(i+t)/(i-t),y=(s+l)/(s-l);let A,D;if(m)A=c/(d-c),D=d*c/(d-c);else if(h===wi)A=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(h===Rc)A=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=wi,m=!1){const p=this.elements,_=2/(i-t),x=2/(s-l),b=-(i+t)/(i-t),y=-(s+l)/(s-l);let A,D;if(m)A=1/(d-c),D=d/(d-c);else if(h===wi)A=-2/(d-c),D=-(d+c)/(d-c);else if(h===Rc)A=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=b,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const lr=new ae,_i=new en,uy=new ae(0,0,0),fy=new ae(1,1,1),Va=new ae,rc=new ae,Jn=new ae,Ux=new en,Lx=new Fo;class Ui{constructor(t=0,i=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],b=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(b,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(b,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(b,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Ux.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ux,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Lx.setFromEuler(this),this.setFromQuaternion(Lx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dy=0;const Ox=new ae,cr=new Fo,na=new en,oc=new ae,Ro=new ae,hy=new ae,py=new Fo,Px=new ae(1,0,0),zx=new ae(0,1,0),Ix=new ae(0,0,1),Bx={type:"added"},my={type:"removed"},ur={type:"childadded",child:null},ad={type:"childremoved",child:null};class Nn extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new ae,i=new Ui,s=new Fo,l=new ae(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ft}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Px,t)}rotateY(t){return this.rotateOnAxis(zx,t)}rotateZ(t){return this.rotateOnAxis(Ix,t)}translateOnAxis(t,i){return Ox.copy(t).applyQuaternion(this.quaternion),this.position.add(Ox.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Px,t)}translateY(t){return this.translateOnAxis(zx,t)}translateZ(t){return this.translateOnAxis(Ix,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?oc.copy(t):oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Ro,oc,this.up):na.lookAt(oc,Ro,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(na),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(sn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bx),ur.child=t,this.dispatchEvent(ur),ur.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(my),ad.child=t,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bx),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,hy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,py,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),x=d(t.shapes),b=d(t.skeletons),y=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),b.length>0&&(s.skeletons=b),y.length>0&&(s.animations=y),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new ae(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ae,ia=new ae,sd=new ae,aa=new ae,fr=new ae,dr=new ae,Fx=new ae,rd=new ae,od=new ae,ld=new ae,cd=new kt,ud=new kt,fd=new kt;class bi{constructor(t=new ae,i=new ae,s=new ae){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),vi.subVectors(t,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){vi.subVectors(l,i),ia.subVectors(s,i),sd.subVectors(t,i);const d=vi.dot(vi),h=vi.dot(ia),m=vi.dot(sd),p=ia.dot(ia),_=ia.dot(sd),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const b=1/x,y=(p*m-h*_)*b,A=(d*_-h*m)*b;return c.set(1-y-A,A,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return cd.setScalar(0),ud.setScalar(0),fd.setScalar(0),cd.fromBufferAttribute(t,i),ud.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(cd,c.x),d.addScaledVector(ud,c.y),d.addScaledVector(fd,c.z),d}static isFrontFacing(t,i,s,l){return vi.subVectors(s,i),ia.subVectors(t,i),vi.cross(ia).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),vi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;fr.subVectors(l,s),dr.subVectors(c,s),rd.subVectors(t,s);const m=fr.dot(rd),p=dr.dot(rd);if(m<=0&&p<=0)return i.copy(s);od.subVectors(t,l);const _=fr.dot(od),x=dr.dot(od);if(_>=0&&x<=_)return i.copy(l);const b=m*x-_*p;if(b<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(fr,d);ld.subVectors(t,c);const y=fr.dot(ld),A=dr.dot(ld);if(A>=0&&y<=A)return i.copy(c);const D=y*p-m*A;if(D<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(dr,h);const M=_*A-y*x;if(M<=0&&x-_>=0&&y-A>=0)return Fx.subVectors(c,l),h=(x-_)/(x-_+(y-A)),i.copy(l).addScaledVector(Fx,h);const v=1/(M+D+b);return d=D*v,h=b*v,i.copy(s).addScaledVector(fr,d).addScaledVector(dr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},lc={h:0,s:0,l:0};function dd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Et{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ut.workingColorSpace){if(t=ty(t,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=dd(d,c,t+1/3),this.g=dd(d,c,t),this.b=dd(d,c,t-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(t,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const s=Pg[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Ut.workingToColorSpace(Dn.copy(this),t),Math.round(bt(Dn.r*255,0,255))*65536+Math.round(bt(Dn.g*255,0,255))*256+Math.round(bt(Dn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ei){Ut.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(lc);const s=Yf(ka.h,lc.h,i),l=Yf(ka.s,lc.s,i),c=Yf(ka.l,lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Et;Et.NAMES=Pg;let xy=0;class Go extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=vr,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Td&&(s.blendSrc=this.blendSrc),this.blendDst!==Ad&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ex&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zg extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new ae,cc=new At;let gy=0;class Ci{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Tx,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Eo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tx&&(t.usage=this.usage),t}}class Ig extends Ci{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Bg extends Ci{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Di extends Ci{constructor(t,i,s){super(new Float32Array(t),i,s)}}let _y=0;const fi=new en,hd=new Nn,hr=new ae,$n=new Ho,wo=new Ho,yn=new ae;class ha extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ug(t)?Bg:Ig)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ft().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Di(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors($n.min,wo.min),$n.expandByPoint(yn),yn.addVectors($n.max,wo.max),$n.expandByPoint(yn)):($n.expandByPoint(wo.min),$n.expandByPoint(wo.max))}$n.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(hr.fromBufferAttribute(t,p),yn.add(hr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Q=0;Q<s.count;Q++)h[Q]=new ae,m[Q]=new ae;const p=new ae,_=new ae,x=new ae,b=new At,y=new At,A=new At,D=new ae,M=new ae;function v(Q,C,w){p.fromBufferAttribute(s,Q),_.fromBufferAttribute(s,C),x.fromBufferAttribute(s,w),b.fromBufferAttribute(c,Q),y.fromBufferAttribute(c,C),A.fromBufferAttribute(c,w),_.sub(p),x.sub(p),y.sub(b),A.sub(b);const k=1/(y.x*A.y-A.x*y.y);isFinite(k)&&(D.copy(_).multiplyScalar(A.y).addScaledVector(x,-y.y).multiplyScalar(k),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-A.x).multiplyScalar(k),h[Q].add(D),h[C].add(D),h[w].add(D),m[Q].add(M),m[C].add(M),m[w].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let Q=0,C=I.length;Q<C;++Q){const w=I[Q],k=w.start,te=w.count;for(let le=k,pe=k+te;le<pe;le+=3)v(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const L=new ae,F=new ae,j=new ae,N=new ae;function O(Q){j.fromBufferAttribute(l,Q),N.copy(j);const C=h[Q];L.copy(C),L.sub(j.multiplyScalar(j.dot(C))).normalize(),F.crossVectors(N,C);const k=F.dot(m[Q])<0?-1:1;d.setXYZW(Q,L.x,L.y,L.z,k)}for(let Q=0,C=I.length;Q<C;++Q){const w=I[Q],k=w.start,te=w.count;for(let le=k,pe=k+te;le<pe;le+=3)O(t.getX(le+0)),O(t.getX(le+1)),O(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let b=0,y=s.count;b<y;b++)s.setXYZ(b,0,0,0);const l=new ae,c=new ae,d=new ae,h=new ae,m=new ae,p=new ae,_=new ae,x=new ae;if(t)for(let b=0,y=t.count;b<y;b+=3){const A=t.getX(b+0),D=t.getX(b+1),M=t.getX(b+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,M),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),h.add(_),m.add(_),p.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let b=0,y=i.count;b<y;b+=3)l.fromBufferAttribute(i,b+0),c.fromBufferAttribute(i,b+1),d.fromBufferAttribute(i,b+2),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),s.setXYZ(b+0,_.x,_.y,_.z),s.setXYZ(b+1,_.x,_.y,_.z),s.setXYZ(b+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,b=new p.constructor(m.length*_);let y=0,A=0;for(let D=0,M=m.length;D<M;D++){h.isInterleavedBufferAttribute?y=m[D]*h.data.stride+h.offset:y=m[D]*_;for(let v=0;v<_;v++)b[A++]=p[y++]}return new Ci(b,_,x)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ha,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,x=p.length;_<x;_++){const b=p[_],y=t(b,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,b=p.length;x<b;x++){const y=p[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let b=0,y=x.length;b<y;b++)_.push(x[b].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hx=new en,ms=new cy,uc=new Eh,Gx=new ae,fc=new ae,dc=new ae,hc=new ae,pd=new ae,pc=new ae,Vx=new ae,mc=new ae;class Li extends Nn{constructor(t=new ha,i=new zg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],x=c[m];_!==0&&(pd.fromBufferAttribute(x,t),d?pc.addScaledVector(pd,_):pc.addScaledVector(pd.sub(i),_))}i.add(pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(c),ms.copy(t.ray).recast(t.near),!(uc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(uc,Gx)===null||ms.origin.distanceToSquared(Gx)>(t.far-t.near)**2))&&(Hx.copy(c).invert(),ms.copy(t.ray).applyMatrix4(Hx),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,b=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,D=b.length;A<D;A++){const M=b[A],v=d[M.materialIndex],I=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let F=I,j=L;F<j;F+=3){const N=h.getX(F),O=h.getX(F+1),Q=h.getX(F+2);l=xc(this,v,t,s,p,_,x,N,O,Q),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),D=Math.min(h.count,y.start+y.count);for(let M=A,v=D;M<v;M+=3){const I=h.getX(M),L=h.getX(M+1),F=h.getX(M+2);l=xc(this,d,t,s,p,_,x,I,L,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,D=b.length;A<D;A++){const M=b[A],v=d[M.materialIndex],I=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let F=I,j=L;F<j;F+=3){const N=F,O=F+1,Q=F+2;l=xc(this,v,t,s,p,_,x,N,O,Q),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let M=A,v=D;M<v;M+=3){const I=M,L=M+1,F=M+2;l=xc(this,d,t,s,p,_,x,I,L,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vy(o,t,i,s,l,c,d,h){let m;if(t.side===Vn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===Ya,h),m===null)return null;mc.copy(h),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function xc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,fc),o.getVertexPosition(m,dc),o.getVertexPosition(p,hc);const _=vy(o,t,i,s,fc,dc,hc,Vx);if(_){const x=new ae;bi.getBarycoord(Vx,fc,dc,hc,x),l&&(_.uv=bi.getInterpolatedAttribute(l,h,m,p,x,new At)),c&&(_.uv1=bi.getInterpolatedAttribute(c,h,m,p,x,new At)),d&&(_.normal=bi.getInterpolatedAttribute(d,h,m,p,x,new ae),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const b={a:h,b:m,c:p,normal:new ae,materialIndex:0};bi.getNormal(fc,dc,hc,b.normal),_.face=b,_.barycoord=x}return _}class Vo extends ha{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],x=[];let b=0,y=0;A("z","y","x",-1,-1,s,i,t,d,c,0),A("z","y","x",1,-1,s,i,-t,d,c,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Di(p,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(x,2));function A(D,M,v,I,L,F,j,N,O,Q,C){const w=F/O,k=j/Q,te=F/2,le=j/2,pe=N/2,de=O+1,B=Q+1;let Z=0,Y=0;const _e=new ae;for(let ve=0;ve<B;ve++){const P=ve*k-le;for(let re=0;re<de;re++){const Se=re*w-te;_e[D]=Se*I,_e[M]=P*L,_e[v]=pe,p.push(_e.x,_e.y,_e.z),_e[D]=0,_e[M]=0,_e[v]=N>0?1:-1,_.push(_e.x,_e.y,_e.z),x.push(re/O),x.push(1-ve/Q),Z+=1}}for(let ve=0;ve<Q;ve++)for(let P=0;P<O;P++){const re=b+P+de*ve,Se=b+P+de*(ve+1),Te=b+(P+1)+de*(ve+1),Pe=b+(P+1)+de*ve;m.push(re,Se,Pe),m.push(Se,Te,Pe),Y+=6}h.addGroup(y,Y,C),y+=Y,b+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const s=Tr(o[i]);for(const l in s)t[l]=s[l]}return t}function by(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Fg(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const yy={clone:Tr,merge:Ln};var Sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=by(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Hg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new ae,kx=new At,jx=new At;class ti extends Hg{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-t/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ja.x,ja.y).multiplyScalar(-t/ja.z)}getViewSize(t,i){return this.getViewBounds(t,kx,jx),i.subVectors(jx,kx)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class Ey extends Nn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ti(pr,mr,t,i);l.layers=this.layers,this.add(l);const c=new ti(pr,mr,t,i);c.layers=this.layers,this.add(c);const d=new ti(pr,mr,t,i);d.layers=this.layers,this.add(d);const h=new ti(pr,mr,t,i);h.layers=this.layers,this.add(h);const m=new ti(pr,mr,t,i);m.layers=this.layers,this.add(m);const p=new ti(pr,mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Rc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,x=t.getRenderTarget(),b=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(x,b,y),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Th extends On{constructor(t=[],i=Sr,s,l,c,d,h,m,p,_){super(t,i,s,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ty extends Es{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Th(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),c=new da({name:"CubemapFromEquirect",uniforms:Tr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:ua});c.uniforms.tEquirect.value=i;const d=new Li(l,c),h=i.minFilter;return i.minFilter===Ss&&(i.minFilter=di),new Ey(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class gc extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ay={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,s),v=this._getHandJoint(p,D);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],b=_.position.distanceTo(x.position),y=.02,A=.005;p.inputState.pinching&&b>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&b<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new gc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Ah{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=i}clone(){return new Ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ry extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wy extends On{constructor(t=null,i=1,s=1,l,c,d,h,m,p=ni,_=ni,x,b){super(null,d,h,m,p,_,l,c,x,b),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xd=new ae,Cy=new ae,Dy=new ft;class vs{constructor(t=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=xd.subVectors(s,i).cross(Cy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(xd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Dy.getNormalMatrix(t),l=this.coplanarPoint(xd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Eh,Ny=new At(.5,.5),_c=new ae;class Rh{constructor(t=new vs,i=new vs,s=new vs,l=new vs,c=new vs,d=new vs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=wi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],_=c[4],x=c[5],b=c[6],y=c[7],A=c[8],D=c[9],M=c[10],v=c[11],I=c[12],L=c[13],F=c[14],j=c[15];if(l[0].setComponents(p-d,y-_,v-A,j-I).normalize(),l[1].setComponents(p+d,y+_,v+A,j+I).normalize(),l[2].setComponents(p+h,y+x,v+D,j+L).normalize(),l[3].setComponents(p-h,y-x,v-D,j-L).normalize(),s)l[4].setComponents(m,b,M,F).normalize(),l[5].setComponents(p-m,y-b,v-M,j-F).normalize();else if(l[4].setComponents(p-m,y-b,v-M,j-F).normalize(),i===wi)l[5].setComponents(p+m,y+b,v+M,j+F).normalize();else if(i===Rc)l[5].setComponents(m,b,M,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);const i=Ny.distanceTo(t.center);return xs.radius=.7071067811865476+i,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(_c.x=l.normal.x>0?t.max.x:t.min.x,_c.y=l.normal.y>0?t.max.y:t.min.y,_c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gg extends On{constructor(t,i,s=Ms,l,c,d,h=ni,m=ni,p,_=Oo,x=1){if(_!==Oo&&_!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const b={width:t,height:i,depth:x};super(b,l,c,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Vg extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dc extends ha{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,x=t/h,b=i/m,y=[],A=[],D=[],M=[];for(let v=0;v<_;v++){const I=v*b-d;for(let L=0;L<p;L++){const F=L*x-c;A.push(F,-I,0),D.push(0,0,1),M.push(L/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<h;I++){const L=I+p*v,F=I+p*(v+1),j=I+1+p*(v+1),N=I+1+p*v;y.push(L,F,N),y.push(F,j,N)}this.setIndex(y),this.setAttribute("position",new Di(A,3)),this.setAttribute("normal",new Di(D,3)),this.setAttribute("uv",new Di(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.width,t.height,t.widthSegments,t.heightSegments)}}class wc extends ha{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],m=[],p=[],_=new ae,x=new ae,b=new ae;for(let y=0;y<=s;y++)for(let A=0;A<=l;A++){const D=A/l*c,M=y/s*Math.PI*2;x.x=(t+i*Math.cos(M))*Math.cos(D),x.y=(t+i*Math.cos(M))*Math.sin(D),x.z=i*Math.sin(M),h.push(x.x,x.y,x.z),_.x=t*Math.cos(D),_.y=t*Math.sin(D),b.subVectors(x,_).normalize(),m.push(b.x,b.y,b.z),p.push(A/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let A=1;A<=l;A++){const D=(l+1)*y+A-1,M=(l+1)*(y-1)+A-1,v=(l+1)*(y-1)+A,I=(l+1)*y+A;d.push(D,M,I),d.push(M,v,I)}this.setIndex(d),this.setAttribute("position",new Di(h,3)),this.setAttribute("normal",new Di(m,3)),this.setAttribute("uv",new Di(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Uy extends Go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ly extends Uy{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Oy extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Py extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gd={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class zy{constructor(t,i,s){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,d,h),c=!0},this.itemEnd=function(_){d++,l.onProgress!==void 0&&l.onProgress(_,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,x){return p.push(_,x),this},this.removeHandler=function(_){const x=p.indexOf(_);return x!==-1&&p.splice(x,2),this},this.getHandler=function(_){for(let x=0,b=p.length;x<b;x+=2){const y=p[x],A=p[x+1];if(y.global&&(y.lastIndex=0),y.test(_))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Iy=new zy;class wh{constructor(t){this.manager=t!==void 0?t:Iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}wh.DEFAULT_MATERIAL_NAME="__DEFAULT";const xr=new WeakMap;class By extends wh{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,d=gd.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(d),c.manager.itemEnd(t)},0);else{let x=xr.get(d);x===void 0&&(x=[],xr.set(d,x)),x.push({onLoad:i,onError:l})}return d}const h=zo("img");function m(){_(),i&&i(this);const x=xr.get(this)||[];for(let b=0;b<x.length;b++){const y=x[b];y.onLoad&&y.onLoad(this)}xr.delete(this),c.manager.itemEnd(t)}function p(x){_(),l&&l(x),gd.remove(`image:${t}`);const b=xr.get(this)||[];for(let y=0;y<b.length;y++){const A=b[y];A.onError&&A.onError(x)}xr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),gd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class Fy extends wh{constructor(t){super(t)}load(t,i,s,l){const c=new Th;c.colorSpace=ei;const d=new By(this.manager);d.setCrossOrigin(this.crossOrigin),d.setPath(this.path);let h=0;function m(p){d.load(t[p],function(_){c.images[p]=_,h++,h===6&&(c.needsUpdate=!0,i&&i(c))},void 0,l)}for(let p=0;p<t.length;++p)m(p);return c}}class Ch extends Nn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const _d=new en,Xx=new ae,Wx=new ae;class kg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Xx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xx),Wx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Wx),i.updateMatrixWorld(),_d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_d)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qx=new en,Co=new ae,vd=new ae;class Hy extends kg{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new ae(1,0,0),new ae(-1,0,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,1,0),new ae(0,-1,0)],this._cubeUps=[new ae(0,1,0),new ae(0,1,0),new ae(0,1,0),new ae(0,1,0),new ae(0,0,1),new ae(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Co.setFromMatrixPosition(t.matrixWorld),s.position.copy(Co),vd.copy(s.position),vd.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(vd),s.updateMatrixWorld(),l.makeTranslation(-Co.x,-Co.y,-Co.z),qx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qx,s.coordinateSystem,s.reversedDepth)}}class Gy extends Ch{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Hy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jg extends Hg{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Vy extends kg{constructor(){super(new jg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ky extends Ch{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Vy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jy extends Ch{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xy extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Wy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Yx(o,t,i,s){const l=qy(s);switch(i){case Rg:return o*t;case Cg:return o*t/l.components*l.byteLength;case vh:return o*t/l.components*l.byteLength;case bh:return o*t*2/l.components*l.byteLength;case yh:return o*t*2/l.components*l.byteLength;case wg:return o*t*3/l.components*l.byteLength;case yi:return o*t*4/l.components*l.byteLength;case Sh:return o*t*4/l.components*l.byteLength;case yc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fd:case Gd:return Math.max(o,16)*Math.max(t,8)/4;case Bd:case Hd:return Math.max(o,8)*Math.max(t,8)/2;case Vd:case kd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case qd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $d:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ah:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case sh:case rh:case oh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lh:case ch:return Math.ceil(o/4)*Math.ceil(t/4)*8;case uh:case fh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qy(o){switch(o){case Ni:case Mg:return{byteLength:1,components:1};case Uo:case Eg:case Ar:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Ms:case xh:case ca:return{byteLength:4,components:1};case Tg:case Ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xg(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Yy(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,b=o.createBuffer();o.bindBuffer(m,b),o.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:b,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((y,A)=>y.start-A.start);let b=0;for(let y=1;y<x.length;y++){const A=x[b],D=x[y];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++b,x[b]=D)}x.length=b+1;for(let y=0,A=x.length;y<A;y++){const D=x[y];o.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_S=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TS="gl_FragColor = linearToOutputTexel( gl_FragColor );",AS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,US=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,x3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Zy,alphahash_pars_fragment:Ky,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:$y,alphatest_pars_fragment:eS,aomap_fragment:tS,aomap_pars_fragment:nS,batching_pars_vertex:iS,batching_vertex:aS,begin_vertex:sS,beginnormal_vertex:rS,bsdfs:oS,iridescence_fragment:lS,bumpmap_pars_fragment:cS,clipping_planes_fragment:uS,clipping_planes_pars_fragment:fS,clipping_planes_pars_vertex:dS,clipping_planes_vertex:hS,color_fragment:pS,color_pars_fragment:mS,color_pars_vertex:xS,color_vertex:gS,common:_S,cube_uv_reflection_fragment:vS,defaultnormal_vertex:bS,displacementmap_pars_vertex:yS,displacementmap_vertex:SS,emissivemap_fragment:MS,emissivemap_pars_fragment:ES,colorspace_fragment:TS,colorspace_pars_fragment:AS,envmap_fragment:RS,envmap_common_pars_fragment:wS,envmap_pars_fragment:CS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:GS,envmap_vertex:NS,fog_vertex:US,fog_pars_vertex:LS,fog_fragment:OS,fog_pars_fragment:PS,gradientmap_pars_fragment:zS,lightmap_pars_fragment:IS,lights_lambert_fragment:BS,lights_lambert_pars_fragment:FS,lights_pars_begin:HS,lights_toon_fragment:VS,lights_toon_pars_fragment:kS,lights_phong_fragment:jS,lights_phong_pars_fragment:XS,lights_physical_fragment:WS,lights_physical_pars_fragment:qS,lights_fragment_begin:YS,lights_fragment_maps:ZS,lights_fragment_end:KS,logdepthbuf_fragment:QS,logdepthbuf_pars_fragment:JS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:eM,map_fragment:tM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:aM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:rM,morphinstance_vertex:oM,morphcolor_vertex:lM,morphnormal_vertex:cM,morphtarget_pars_vertex:uM,morphtarget_vertex:fM,normal_fragment_begin:dM,normal_fragment_maps:hM,normal_pars_fragment:pM,normal_pars_vertex:mM,normal_vertex:xM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:_M,clearcoat_normal_fragment_maps:vM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:yM,opaque_fragment:SM,packing:MM,premultiplied_alpha_fragment:EM,project_vertex:TM,dithering_fragment:AM,dithering_pars_fragment:RM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:NM,shadowmap_vertex:UM,shadowmask_pars_fragment:LM,skinbase_vertex:OM,skinning_pars_vertex:PM,skinning_vertex:zM,skinnormal_vertex:IM,specularmap_fragment:BM,specularmap_pars_fragment:FM,tonemapping_fragment:HM,tonemapping_pars_fragment:GM,transmission_fragment:VM,transmission_pars_fragment:kM,uv_pars_fragment:jM,uv_pars_vertex:XM,uv_vertex:WM,worldpos_vertex:qM,background_vert:YM,background_frag:ZM,backgroundCube_vert:KM,backgroundCube_frag:QM,cube_vert:JM,cube_frag:$M,depth_vert:e3,depth_frag:t3,distanceRGBA_vert:n3,distanceRGBA_frag:i3,equirect_vert:a3,equirect_frag:s3,linedashed_vert:r3,linedashed_frag:o3,meshbasic_vert:l3,meshbasic_frag:c3,meshlambert_vert:u3,meshlambert_frag:f3,meshmatcap_vert:d3,meshmatcap_frag:h3,meshnormal_vert:p3,meshnormal_frag:m3,meshphong_vert:x3,meshphong_frag:g3,meshphysical_vert:_3,meshphysical_frag:v3,meshtoon_vert:b3,meshtoon_frag:y3,points_vert:S3,points_frag:M3,shadow_vert:E3,shadow_frag:T3,sprite_vert:A3,sprite_frag:R3},Le={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ri={basic:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Et(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ln([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ln([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Et(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ln([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ln([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ln([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ln([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Ln([Le.common,Le.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Ln([Le.lights,Le.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ri.physical={uniforms:Ln([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const vc={r:0,b:0,g:0},gs=new Ui,w3=new en;function C3(o,t,i,s,l,c,d){const h=new Et(0);let m=c===!0?0:1,p,_,x=null,b=0,y=null;function A(L){let F=L.isScene===!0?L.background:null;return F&&F.isTexture&&(F=(L.backgroundBlurriness>0?i:t).get(F)),F}function D(L){let F=!1;const j=A(L);j===null?v(h,m):j&&j.isColor&&(v(j,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,F){const j=A(F);j&&(j.isCubeTexture||j.mapping===Cc)?(_===void 0&&(_=new Li(new Vo(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:Tr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,O,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),gs.copy(F.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.material.uniforms.envMap.value=j,_.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(w3.makeRotationFromEuler(gs)),_.material.toneMapped=Ut.getTransfer(j.colorSpace)!==Vt,(x!==j||b!==j.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,x=j,b=j.version,y=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new Li(new Dc(2,2),new da({name:"BackgroundMaterial",uniforms:Tr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(j.colorSpace)!==Vt,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(x!==j||b!==j.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=j,b=j.version,y=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,F){L.getRGB(vc,Fg(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,F,d)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,F=1){h.set(L),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:D,addToRenderList:M,dispose:I}}function D3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=b(null);let c=l,d=!1;function h(w,k,te,le,pe){let de=!1;const B=x(le,te,k);c!==B&&(c=B,p(c.object)),de=y(w,le,te,pe),de&&A(w,le,te,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,F(w,k,te,le),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function x(w,k,te){const le=te.wireframe===!0;let pe=s[w.id];pe===void 0&&(pe={},s[w.id]=pe);let de=pe[k.id];de===void 0&&(de={},pe[k.id]=de);let B=de[le];return B===void 0&&(B=b(m()),de[le]=B),B}function b(w){const k=[],te=[],le=[];for(let pe=0;pe<i;pe++)k[pe]=0,te[pe]=0,le[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:le,object:w,attributes:{},index:null}}function y(w,k,te,le){const pe=c.attributes,de=k.attributes;let B=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const ve=pe[Y];let P=de[Y];if(P===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(P=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(P=w.instanceColor)),ve===void 0||ve.attribute!==P||P&&ve.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==le}function A(w,k,te,le){const pe={},de=k.attributes;let B=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let ve=de[Y];ve===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor));const P={};P.attribute=ve,ve&&ve.data&&(P.data=ve.data),pe[Y]=P,B++}c.attributes=pe,c.attributesNum=B,c.index=le}function D(){const w=c.newAttributes;for(let k=0,te=w.length;k<te;k++)w[k]=0}function M(w){v(w,0)}function v(w,k){const te=c.newAttributes,le=c.enabledAttributes,pe=c.attributeDivisors;te[w]=1,le[w]===0&&(o.enableVertexAttribArray(w),le[w]=1),pe[w]!==k&&(o.vertexAttribDivisor(w,k),pe[w]=k)}function I(){const w=c.newAttributes,k=c.enabledAttributes;for(let te=0,le=k.length;te<le;te++)k[te]!==w[te]&&(o.disableVertexAttribArray(te),k[te]=0)}function L(w,k,te,le,pe,de,B){B===!0?o.vertexAttribIPointer(w,k,te,pe,de):o.vertexAttribPointer(w,k,te,le,pe,de)}function F(w,k,te,le){D();const pe=le.attributes,de=te.getAttributes(),B=k.defaultAttributeValues;for(const Z in de){const Y=de[Z];if(Y.location>=0){let _e=pe[Z];if(_e===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),_e!==void 0){const ve=_e.normalized,P=_e.itemSize,re=t.get(_e);if(re===void 0)continue;const Se=re.buffer,Te=re.type,Pe=re.bytesPerElement,ie=Te===o.INT||Te===o.UNSIGNED_INT||_e.gpuType===xh;if(_e.isInterleavedBufferAttribute){const ue=_e.data,Ce=ue.stride,He=_e.offset;if(ue.isInstancedInterleavedBuffer){for(let je=0;je<Y.locationSize;je++)v(Y.location+je,ue.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let je=0;je<Y.locationSize;je++)M(Y.location+je);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let je=0;je<Y.locationSize;je++)L(Y.location+je,P/Y.locationSize,Te,ve,Ce*Pe,(He+P/Y.locationSize*je)*Pe,ie)}else{if(_e.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)v(Y.location+ue,_e.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ue=0;ue<Y.locationSize;ue++)M(Y.location+ue);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let ue=0;ue<Y.locationSize;ue++)L(Y.location+ue,P/Y.locationSize,Te,ve,P*Pe,P/Y.locationSize*ue*Pe,ie)}}else if(B!==void 0){const ve=B[Z];if(ve!==void 0)switch(ve.length){case 2:o.vertexAttrib2fv(Y.location,ve);break;case 3:o.vertexAttrib3fv(Y.location,ve);break;case 4:o.vertexAttrib4fv(Y.location,ve);break;default:o.vertexAttrib1fv(Y.location,ve)}}}}I()}function j(){Q();for(const w in s){const k=s[w];for(const te in k){const le=k[te];for(const pe in le)_(le[pe].object),delete le[pe];delete k[te]}delete s[w]}}function N(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const te in k){const le=k[te];for(const pe in le)_(le[pe].object),delete le[pe];delete k[te]}delete s[w.id]}function O(w){for(const k in s){const te=s[k];if(te[w.id]===void 0)continue;const le=te[w.id];for(const pe in le)_(le[pe].object),delete le[pe];delete te[w.id]}}function Q(){C(),d=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:C,dispose:j,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:D,enableAttribute:M,disableUnusedAttributes:I}}function N3(o,t,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let A=0;A<x;A++)y+=_[A];i.update(y,s,1)}function m(p,_,x,b){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)d(p[A],_[A],b[A]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,b,0,x);let A=0;for(let D=0;D<x;D++)A+=_[D]*b[D];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function U3(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==yi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const Q=O===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ni&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ca&&!Q)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ot("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,b=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:b,maxTextures:y,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:F,vertexTextures:j,maxSamples:N}}function L3(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new vs,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,b){const y=x.length!==0||b||s!==0||l;return l=b,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,b){i=_(x,b,0)},this.setState=function(x,b,y){const A=x.clippingPlanes,D=x.clipIntersection,M=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||c&&!M)c?_(null):p();else{const I=c?0:s,L=I*4;let F=v.clippingState||null;m.value=F,F=_(A,b,L,y);for(let j=0;j!==L;++j)F[j]=i[j];v.clippingState=F,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,b,y,A){const D=x!==null?x.length:0;let M=null;if(D!==0){if(M=m.value,A!==!0||M===null){const v=y+D*4,I=b.matrixWorldInverse;h.getNormalMatrix(I),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,F=y;L!==D;++L,F+=4)d.copy(x[L]).applyMatrix4(I,h),d.normal.toArray(M,F),M[F+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}function O3(o){let t=new WeakMap;function i(d,h){return h===Od?d.mapping=Sr:h===Pd&&(d.mapping=Mr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Od||h===Pd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ty(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Wa=4,Zx=[.125,.215,.35,.446,.526,.582],ys=20,P3=256,Do=new jg,Kx=new Et;let bd=null,yd=0,Sd=0,Md=!1;const z3=new ae;class Qx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=z3}=c;bd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bd,yd,Sd),this._renderer.xr.enabled=Md,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Sr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ar,format:yi,colorSpace:Er,depthBuffer:!1},l=Jx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I3(c)),this._blurMaterial=F3(c,t,i),this._ggxMaterial=B3(c,t,i)}return l}_compileMaterial(t){const i=new Li(new ha,t);this._renderer.compile(i,Do)}_sceneToCubeUV(t,i,s,l,c){const m=new ti(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,y=x.toneMapping;x.getClearColor(Kx),x.toneMapping=qa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Vo,new zg({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let v=!1;const I=t.background;I?I.isColor&&(M.color.copy(I),t.background=null,v=!0):(M.color.copy(Kx),v=!0);for(let L=0;L<6;L++){const F=L%3;F===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):F===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const j=this._cubeSize;gr(l,F*j,L>2?j:0,j,j),x.setRenderTarget(l),v&&x.render(D,m),x.render(t,m)}x.toneMapping=y,x.autoClear=b,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Sr||t.mapping===Mr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;gr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Do)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),b=.05+p*.95,y=x*b,{_lodMax:A}=this,D=this._sizeLods[s],M=3*D*(s>A-Wa?s-A+Wa:0),v=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=A-i,gr(c,M,v,3*D,2*D),l.setRenderTarget(c),l.render(h,Do),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,gr(t,M,v,3*D,2*D),l.setRenderTarget(t),l.render(h,Do)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const b=p.uniforms,y=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ys-1),D=c/A,M=isFinite(c)?1+Math.floor(_*D):ys;M>ys&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ys}`);const v=[];let I=0;for(let O=0;O<ys;++O){const Q=O/D,C=Math.exp(-Q*Q/2);v.push(C),O===0?I+=C:O<M&&(I+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/I;b.envMap.value=t.texture,b.samples.value=M,b.weights.value=v,b.latitudinal.value=d==="latitudinal",h&&(b.poleAxis.value=h);const{_lodMax:L}=this;b.dTheta.value=A,b.mipInt.value=L-s;const F=this._sizeLods[l],j=3*F*(l>L-Wa?l-L+Wa:0),N=4*(this._cubeSize-F);gr(i,j,N,3*F,2*F),m.setRenderTarget(i),m.render(x,Do)}}function I3(o){const t=[],i=[],s=[];let l=o;const c=o-Wa+1+Zx.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Wa?m=Zx[d-o+Wa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,x=1+p,b=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,A=6,D=3,M=2,v=1,I=new Float32Array(D*A*y),L=new Float32Array(M*A*y),F=new Float32Array(v*A*y);for(let N=0;N<y;N++){const O=N%3*2/3-1,Q=N>2?0:-1,C=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];I.set(C,D*A*N),L.set(b,M*A*N);const w=[N,N,N,N,N,N];F.set(w,v*A*N)}const j=new ha;j.setAttribute("position",new Ci(I,D)),j.setAttribute("uv",new Ci(L,M)),j.setAttribute("faceIndex",new Ci(F,v)),s.push(new Li(j,null)),l>Wa&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Jx(o,t,i){const s=new Es(o,t,i);return s.texture.mapping=Cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function B3(o,t,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function F3(o,t,i){const s=new Float32Array(ys),l=new ae(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function $x(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function eg(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H3(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Od||m===Pd,_=m===Sr||m===Mr;if(p||_){let x=t.get(h);const b=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==b)return i===null&&(i=new Qx(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Qx(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function G3(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Io("WebGLRenderer: "+s+" extension not supported."),l}}}function V3(o,t,i,s){const l={},c=new WeakMap;function d(x){const b=x.target;b.index!==null&&t.remove(b.index);for(const A in b.attributes)t.remove(b.attributes[A]);b.removeEventListener("dispose",d),delete l[b.id];const y=c.get(b);y&&(t.remove(y),c.delete(b)),s.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function h(x,b){return l[b.id]===!0||(b.addEventListener("dispose",d),l[b.id]=!0,i.memory.geometries++),b}function m(x){const b=x.attributes;for(const y in b)t.update(b[y],o.ARRAY_BUFFER)}function p(x){const b=[],y=x.index,A=x.attributes.position;let D=0;if(y!==null){const I=y.array;D=y.version;for(let L=0,F=I.length;L<F;L+=3){const j=I[L+0],N=I[L+1],O=I[L+2];b.push(j,N,N,O,O,j)}}else if(A!==void 0){const I=A.array;D=A.version;for(let L=0,F=I.length/3-1;L<F;L+=3){const j=L+0,N=L+1,O=L+2;b.push(j,N,N,O,O,j)}}else return;const M=new(Ug(b)?Bg:Ig)(b,1);M.version=D;const v=c.get(x);v&&t.remove(v),c.set(x,M)}function _(x){const b=c.get(x);if(b){const y=x.index;y!==null&&b.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function k3(o,t,i){let s;function l(b){s=b}let c,d;function h(b){c=b.type,d=b.bytesPerElement}function m(b,y){o.drawElements(s,y,c,b*d),i.update(y,s,1)}function p(b,y,A){A!==0&&(o.drawElementsInstanced(s,y,c,b*d,A),i.update(y,s,A))}function _(b,y,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,b,0,A);let M=0;for(let v=0;v<A;v++)M+=y[v];i.update(M,s,1)}function x(b,y,A,D){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<b.length;v++)p(b[v]/d,y[v],D[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,b,0,D,0,A);let v=0;for(let I=0;I<A;I++)v+=y[I]*D[I];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function j3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function X3(o,t,i){const s=new WeakMap,l=new kt;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let b=s.get(h);if(b===void 0||b.count!==x){let w=function(){Q.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;b!==void 0&&b.texture.dispose();const A=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let F=0;A===!0&&(F=1),D===!0&&(F=2),M===!0&&(F=3);let j=h.attributes.position.count*F,N=1;j>t.maxTextureSize&&(N=Math.ceil(j/t.maxTextureSize),j=t.maxTextureSize);const O=new Float32Array(j*N*4*x),Q=new Lg(O,j,N,x);Q.type=ca,Q.needsUpdate=!0;const C=F*4;for(let k=0;k<x;k++){const te=v[k],le=I[k],pe=L[k],de=j*N*4*k;for(let B=0;B<te.count;B++){const Z=B*C;A===!0&&(l.fromBufferAttribute(te,B),O[de+Z+0]=l.x,O[de+Z+1]=l.y,O[de+Z+2]=l.z,O[de+Z+3]=0),D===!0&&(l.fromBufferAttribute(le,B),O[de+Z+4]=l.x,O[de+Z+5]=l.y,O[de+Z+6]=l.z,O[de+Z+7]=0),M===!0&&(l.fromBufferAttribute(pe,B),O[de+Z+8]=l.x,O[de+Z+9]=l.y,O[de+Z+10]=l.z,O[de+Z+11]=pe.itemSize===4?l.w:1)}}b={count:x,texture:Q,size:new At(j,N)},s.set(h,b),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const D=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",b.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",b.size)}return{update:c}}function W3(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==p&&(b.update(),l.set(b,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Wg=new On,tg=new Gg(1,1),qg=new Lg,Yg=new oy,Zg=new Th,ng=[],ig=[],ag=new Float32Array(16),sg=new Float32Array(9),rg=new Float32Array(4);function wr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=ng[l];if(c===void 0&&(c=new Float32Array(l),ng[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function xn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Uc(o,t){let i=ig[t];i===void 0&&(i=new Int32Array(t),ig[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function q3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),xn(i,t)}}function Z3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),xn(i,t)}}function K3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),xn(i,t)}}function Q3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(mn(i,s))return;rg.set(s),o.uniformMatrix2fv(this.addr,!1,rg),xn(i,s)}}function J3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(mn(i,s))return;sg.set(s),o.uniformMatrix3fv(this.addr,!1,sg),xn(i,s)}}function $3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(mn(i,s))return;ag.set(s),o.uniformMatrix4fv(this.addr,!1,ag),xn(i,s)}}function e1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function t1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),xn(i,t)}}function n1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),xn(i,t)}}function i1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),xn(i,t)}}function a1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function s1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),xn(i,t)}}function r1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),xn(i,t)}}function o1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),xn(i,t)}}function l1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(tg.compareFunction=Ng,c=tg):c=Wg,i.setTexture2D(t||c,l)}function c1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Yg,l)}function u1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Zg,l)}function f1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||qg,l)}function d1(o){switch(o){case 5126:return q3;case 35664:return Y3;case 35665:return Z3;case 35666:return K3;case 35674:return Q3;case 35675:return J3;case 35676:return $3;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return a1;case 36294:return s1;case 36295:return r1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}function h1(o,t){o.uniform1fv(this.addr,t)}function p1(o,t){const i=wr(t,this.size,2);o.uniform2fv(this.addr,i)}function m1(o,t){const i=wr(t,this.size,3);o.uniform3fv(this.addr,i)}function x1(o,t){const i=wr(t,this.size,4);o.uniform4fv(this.addr,i)}function g1(o,t){const i=wr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function _1(o,t){const i=wr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function v1(o,t){const i=wr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function b1(o,t){o.uniform1iv(this.addr,t)}function y1(o,t){o.uniform2iv(this.addr,t)}function S1(o,t){o.uniform3iv(this.addr,t)}function M1(o,t){o.uniform4iv(this.addr,t)}function E1(o,t){o.uniform1uiv(this.addr,t)}function T1(o,t){o.uniform2uiv(this.addr,t)}function A1(o,t){o.uniform3uiv(this.addr,t)}function R1(o,t){o.uniform4uiv(this.addr,t)}function w1(o,t,i){const s=this.cache,l=t.length,c=Uc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Wg,c[d])}function C1(o,t,i){const s=this.cache,l=t.length,c=Uc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Yg,c[d])}function D1(o,t,i){const s=this.cache,l=t.length,c=Uc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Zg,c[d])}function N1(o,t,i){const s=this.cache,l=t.length,c=Uc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||qg,c[d])}function U1(o){switch(o){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return x1;case 35674:return g1;case 35675:return _1;case 35676:return v1;case 5124:case 35670:return b1;case 35667:case 35671:return y1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return E1;case 36294:return T1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return N1}}class L1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=d1(i.type)}}class O1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=U1(i.type)}}class P1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function og(o,t){o.seq.push(t),o.map[t.id]=t}function z1(o,t,i){const s=o.name,l=s.length;for(Ed.lastIndex=0;;){const c=Ed.exec(s),d=Ed.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){og(i,p===void 0?new L1(h,o,t):new O1(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new P1(h),og(i,x)),i=x}}}class Tc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);z1(c,d,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function lg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const I1=37297;let B1=0;function F1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const cg=new ft;function H1(o){Ut._getMatrix(cg,Ut.workingColorSpace,o);const t=`mat3( ${cg.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Ac:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ug(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+F1(o.getShaderSource(t),h)}else return c}function G1(o,t){const i=H1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function V1(o,t){let i;switch(t){case Pb:i="Linear";break;case zb:i="Reinhard";break;case Ib:i="Cineon";break;case Bb:i="ACESFilmic";break;case Hb:i="AgX";break;case Gb:i="Neutral";break;case Fb:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new ae;function k1(){Ut.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),t=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function X1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function W1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function No(o){return o!==""}function fg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(o){return o.replace(q1,Z1)}const Y1=new Map;function Z1(o,t){let i=pt[t];if(i===void 0){const s=Y1.get(t);if(s!==void 0)i=pt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hh(i)}const K1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(o){return o.replace(K1,Q1)}function Q1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function J1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===bg?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function $1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Sr:case Mr:t="ENVMAP_TYPE_CUBE";break;case Cc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function tE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case yg:t="ENVMAP_BLENDING_MULTIPLY";break;case Lb:t="ENVMAP_BLENDING_MIX";break;case Ob:t="ENVMAP_BLENDING_ADD";break}return t}function nE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function iE(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=J1(i),p=$1(i),_=eE(i),x=tE(i),b=nE(i),y=j1(i),A=X1(c),D=l.createProgram();let M,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),v.length>0&&(v+=`
`)):(M=[pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),v=[pg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?pt.tonemapping_pars_fragment:"",i.toneMapping!==qa?V1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,G1("linearToOutputTexel",i.outputColorSpace),k1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=hh(d),d=fg(d,i),d=dg(d,i),h=hh(h),h=fg(h,i),h=dg(h,i),d=hg(d),h=hg(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=I+M+d,F=I+v+h,j=lg(l,l.VERTEX_SHADER,L),N=lg(l,l.FRAGMENT_SHADER,F);l.attachShader(D,j),l.attachShader(D,N),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function O(k){if(o.debug.checkShaderErrors){const te=l.getProgramInfoLog(D)||"",le=l.getShaderInfoLog(j)||"",pe=l.getShaderInfoLog(N)||"",de=te.trim(),B=le.trim(),Z=pe.trim();let Y=!0,_e=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,j,N);else{const ve=ug(l,j,"vertex"),P=ug(l,N,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+ve+`
`+P)}else de!==""?ot("WebGLProgram: Program Info Log:",de):(B===""||Z==="")&&(_e=!1);_e&&(k.diagnostics={runnable:Y,programLog:de,vertexShader:{log:B,prefix:M},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(j),l.deleteShader(N),Q=new Tc(l,D),C=W1(l,D)}let Q;this.getUniforms=function(){return Q===void 0&&O(this),Q};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(D,I1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=B1++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=j,this.fragmentShader=N,this}let aE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new rE(t),i.set(t,s)),s}}class rE{constructor(t){this.id=aE++,this.code=t,this.usedTimes=0}}function oE(o,t,i,s,l,c,d){const h=new Og,m=new sE,p=new Set,_=[],x=l.logarithmicDepthBuffer,b=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,k,te,le){const pe=te.fog,de=le.geometry,B=C.isMeshStandardMaterial?te.environment:null,Z=(C.isMeshStandardMaterial?i:t).get(C.envMap||B),Y=Z&&Z.mapping===Cc?Z.image.height:null,_e=A[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&ot("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const ve=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,P=ve!==void 0?ve.length:0;let re=0;de.morphAttributes.position!==void 0&&(re=1),de.morphAttributes.normal!==void 0&&(re=2),de.morphAttributes.color!==void 0&&(re=3);let Se,Te,Pe,ie;if(_e){const wt=Ri[_e];Se=wt.vertexShader,Te=wt.fragmentShader}else Se=C.vertexShader,Te=C.fragmentShader,m.update(C),Pe=m.getVertexShaderID(C),ie=m.getFragmentShaderID(C);const ue=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),He=le.isInstancedMesh===!0,je=le.isBatchedMesh===!0,lt=!!C.map,tn=!!C.matcap,dt=!!Z,Rt=!!C.aoMap,H=!!C.lightMap,ht=!!C.bumpMap,mt=!!C.normalMap,Pt=!!C.displacementMap,Ge=!!C.emissiveMap,jt=!!C.metalnessMap,Ye=!!C.roughnessMap,at=C.anisotropy>0,U=C.clearcoat>0,E=C.dispersion>0,J=C.iridescence>0,me=C.sheen>0,be=C.transmission>0,ce=at&&!!C.anisotropyMap,We=U&&!!C.clearcoatMap,Ue=U&&!!C.clearcoatNormalMap,Qe=U&&!!C.clearcoatRoughnessMap,Xe=J&&!!C.iridescenceMap,ye=J&&!!C.iridescenceThicknessMap,Ee=me&&!!C.sheenColorMap,qe=me&&!!C.sheenRoughnessMap,Ve=!!C.specularMap,Oe=!!C.specularColorMap,nt=!!C.specularIntensityMap,G=be&&!!C.transmissionMap,De=be&&!!C.thicknessMap,Re=!!C.gradientMap,we=!!C.alphaMap,Me=C.alphaTest>0,ge=!!C.alphaHash,Ie=!!C.extensions;let it=qa;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=o.toneMapping);const Bt={shaderID:_e,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:Te,defines:C.defines,customVertexShaderID:Pe,customFragmentShaderID:ie,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:je,batchingColor:je&&le._colorsTexture!==null,instancing:He,instancingColor:He&&le.instanceColor!==null,instancingMorph:He&&le.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Er,alphaToCoverage:!!C.alphaToCoverage,map:lt,matcap:tn,envMap:dt,envMapMode:dt&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Rt,lightMap:H,bumpMap:ht,normalMap:mt,displacementMap:b&&Pt,emissiveMap:Ge,normalMapObjectSpace:mt&&C.normalMapType===Xb,normalMapTangentSpace:mt&&C.normalMapType===Dg,metalnessMap:jt,roughnessMap:Ye,anisotropy:at,anisotropyMap:ce,clearcoat:U,clearcoatMap:We,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,dispersion:E,iridescence:J,iridescenceMap:Xe,iridescenceThicknessMap:ye,sheen:me,sheenColorMap:Ee,sheenRoughnessMap:qe,specularMap:Ve,specularColorMap:Oe,specularIntensityMap:nt,transmission:be,transmissionMap:G,thicknessMap:De,gradientMap:Re,opaque:C.transparent===!1&&C.blending===vr&&C.alphaToCoverage===!1,alphaMap:we,alphaTest:Me,alphaHash:ge,combine:C.combine,mapUv:lt&&D(C.map.channel),aoMapUv:Rt&&D(C.aoMap.channel),lightMapUv:H&&D(C.lightMap.channel),bumpMapUv:ht&&D(C.bumpMap.channel),normalMapUv:mt&&D(C.normalMap.channel),displacementMapUv:Pt&&D(C.displacementMap.channel),emissiveMapUv:Ge&&D(C.emissiveMap.channel),metalnessMapUv:jt&&D(C.metalnessMap.channel),roughnessMapUv:Ye&&D(C.roughnessMap.channel),anisotropyMapUv:ce&&D(C.anisotropyMap.channel),clearcoatMapUv:We&&D(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&D(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&D(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&D(C.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&D(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&D(C.sheenColorMap.channel),sheenRoughnessMapUv:qe&&D(C.sheenRoughnessMap.channel),specularMapUv:Ve&&D(C.specularMap.channel),specularColorMapUv:Oe&&D(C.specularColorMap.channel),specularIntensityMapUv:nt&&D(C.specularIntensityMap.channel),transmissionMapUv:G&&D(C.transmissionMap.channel),thicknessMapUv:De&&D(C.thicknessMap.channel),alphaMapUv:we&&D(C.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(mt||at),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!de.attributes.uv&&(lt||we),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ce,skinning:le.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&C.map.isVideoTexture===!0&&Ut.getTransfer(C.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ge&&C.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(C.emissiveMap.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===oa,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ie&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&C.extensions.multiDraw===!0||je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(I(w,C),L(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function I(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function F(C){const w=A[C.type];let k;if(w){const te=Ri[w];k=yy.clone(te.uniforms)}else k=C.uniforms;return k}function j(C,w){let k;for(let te=0,le=_.length;te<le;te++){const pe=_[te];if(pe.cacheKey===w){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new iE(o,w,C,c),_.push(k)),k}function N(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),C.destroy()}}function O(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:F,acquireProgram:j,releaseProgram:N,releaseShaderCache:O,programs:_,dispose:Q}}function lE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function cE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function mg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function xg(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(x,b,y,A,D,M){let v=o[t];return v===void 0?(v={id:x.id,object:x,geometry:b,material:y,groupOrder:A,renderOrder:x.renderOrder,z:D,group:M},o[t]=v):(v.id=x.id,v.object=x,v.geometry=b,v.material=y,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=D,v.group=M),t++,v}function h(x,b,y,A,D,M){const v=d(x,b,y,A,D,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(x,b,y,A,D,M){const v=d(x,b,y,A,D,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,b){i.length>1&&i.sort(x||cE),s.length>1&&s.sort(b||mg),l.length>1&&l.sort(b||mg)}function _(){for(let x=t,b=o.length;x<b;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function uE(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new xg,o.set(s,[d])):l>=c.length?(d=new xg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function fE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ae,color:new Et};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return o[t.id]=i,i}}}function dE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let hE=0;function pE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function mE(o){const t=new fE,i=dE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const l=new ae,c=new en,d=new en;function h(p){let _=0,x=0,b=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,A=0,D=0,M=0,v=0,I=0,L=0,F=0,j=0,N=0,O=0;p.sort(pE);for(let C=0,w=p.length;C<w;C++){const k=p[C],te=k.color,le=k.intensity,pe=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=te.r*le,x+=te.g*le,b+=te.b*le;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],le);O++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.directionalShadow[y]=Y,s.directionalShadowMap[y]=de,s.directionalShadowMatrix[y]=k.shadow.matrix,I++}s.directional[y]=B,y++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(te).multiplyScalar(le),B.distance=pe,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[D]=B;const Z=k.shadow;if(k.map&&(s.spotLightMap[j]=k.map,j++,Z.updateMatrices(k),k.castShadow&&N++),s.spotLightMatrix[D]=Z.matrix,k.castShadow){const Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.spotShadow[D]=Y,s.spotShadowMap[D]=de,F++}D++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(te).multiplyScalar(le),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=B,M++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const Z=k.shadow,Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,s.pointShadow[A]=Y,s.pointShadowMap[A]=de,s.pointShadowMatrix[A]=k.shadow.matrix,L++}s.point[A]=B,A++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(le),B.groundColor.copy(k.groundColor).multiplyScalar(le),s.hemi[v]=B,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=b;const Q=s.hash;(Q.directionalLength!==y||Q.pointLength!==A||Q.spotLength!==D||Q.rectAreaLength!==M||Q.hemiLength!==v||Q.numDirectionalShadows!==I||Q.numPointShadows!==L||Q.numSpotShadows!==F||Q.numSpotMaps!==j||Q.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=D,s.rectArea.length=M,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=F+j-N,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=O,Q.directionalLength=y,Q.pointLength=A,Q.spotLength=D,Q.rectAreaLength=M,Q.hemiLength=v,Q.numDirectionalShadows=I,Q.numPointShadows=L,Q.numSpotShadows=F,Q.numSpotMaps=j,Q.numLightProbes=O,s.version=hE++)}function m(p,_){let x=0,b=0,y=0,A=0,D=0;const M=_.matrixWorldInverse;for(let v=0,I=p.length;v<I;v++){const L=p[v];if(L.isDirectionalLight){const F=s.directional[x];F.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),x++}else if(L.isSpotLight){const F=s.spot[y];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const F=s.rectArea[A];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(M),d.identity(),c.copy(L.matrixWorld),c.premultiply(M),d.extractRotation(c),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const F=s.point[b];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(M),b++}else if(L.isHemisphereLight){const F=s.hemi[D];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(M),D++}}}return{setup:h,setupView:m,state:s}}function gg(o){const t=new mE(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function xE(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new gg(o),t.set(l,[h])):c>=d.length?(h=new gg(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vE(o,t,i){let s=new Rh;const l=new At,c=new At,d=new kt,h=new Oy({depthPacking:jb}),m=new Py,p={},_=i.maxTextureSize,x={[Ya]:Vn,[Vn]:Ya,[oa]:oa},b=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),y=b.clone();y.defines.HORIZONTAL_PASS=1;const A=new ha;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Li(A,b),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let v=this.type;this.render=function(N,O,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;const C=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),te=o.state;te.setBlending(ua),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const le=v!==ra&&this.type===ra,pe=v===ra&&this.type!==ra;for(let de=0,B=N.length;de<B;de++){const Z=N[de],Y=Z.shadow;if(Y===void 0){ot("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const _e=Y.getFrameExtents();if(l.multiply(_e),c.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/_e.x),l.x=c.x*_e.x,Y.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/_e.y),l.y=c.y*_e.y,Y.mapSize.y=c.y)),Y.map===null||le===!0||pe===!0){const P=this.type!==ra?{minFilter:ni,magFilter:ni}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Es(l.x,l.y,P),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const ve=Y.getViewportCount();for(let P=0;P<ve;P++){const re=Y.getViewport(P);d.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),te.viewport(d),Y.updateMatrices(Z,P),s=Y.getFrustum(),F(O,Q,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ra&&I(Y,Q),Y.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(C,w,k)};function I(N,O){const Q=t.update(D);b.defines.VSM_SAMPLES!==N.blurSamples&&(b.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,b.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Es(l.x,l.y)),b.uniforms.shadow_pass.value=N.map.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,Q,b,D,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,Q,y,D,null)}function L(N,O,Q,C){let w=null;const k=Q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)w=k;else if(w=Q.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const te=w.uuid,le=O.uuid;let pe=p[te];pe===void 0&&(pe={},p[te]=pe);let de=pe[le];de===void 0&&(de=w.clone(),pe[le]=de,O.addEventListener("dispose",j)),w=de}if(w.visible=O.visible,w.wireframe=O.wireframe,C===ra?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:x[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,Q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=o.properties.get(w);te.light=Q}return w}function F(N,O,Q,C,w){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===ra)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,N.matrixWorld);const le=t.update(N),pe=N.material;if(Array.isArray(pe)){const de=le.groups;for(let B=0,Z=de.length;B<Z;B++){const Y=de[B],_e=pe[Y.materialIndex];if(_e&&_e.visible){const ve=L(N,_e,C,w);N.onBeforeShadow(o,N,O,Q,le,ve,Y),o.renderBufferDirect(Q,null,le,ve,N,Y),N.onAfterShadow(o,N,O,Q,le,ve,Y)}}}else if(pe.visible){const de=L(N,pe,C,w);N.onBeforeShadow(o,N,O,Q,le,de,null),o.renderBufferDirect(Q,null,le,de,N,null),N.onAfterShadow(o,N,O,Q,le,de,null)}}const te=N.children;for(let le=0,pe=te.length;le<pe;le++)F(te[le],O,Q,C,w)}function j(N){N.target.removeEventListener("dispose",j);for(const Q in p){const C=p[Q],w=N.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const bE={[Rd]:wd,[Cd]:Ud,[Dd]:Ld,[yr]:Nd,[wd]:Rd,[Ud]:Cd,[Ld]:Dd,[Nd]:yr};function yE(o,t){function i(){let G=!1;const De=new kt;let Re=null;const we=new kt(0,0,0,0);return{setMask:function(Me){Re!==Me&&!G&&(o.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){G=Me},setClear:function(Me,ge,Ie,it,Bt){Bt===!0&&(Me*=it,ge*=it,Ie*=it),De.set(Me,ge,Ie,it),we.equals(De)===!1&&(o.clearColor(Me,ge,Ie,it),we.copy(De))},reset:function(){G=!1,Re=null,we.set(-1,0,0,0)}}}function s(){let G=!1,De=!1,Re=null,we=null,Me=null;return{setReversed:function(ge){if(De!==ge){const Ie=t.get("EXT_clip_control");ge?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return De},setTest:function(ge){ge?ue(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(ge){Re!==ge&&!G&&(o.depthMask(ge),Re=ge)},setFunc:function(ge){if(De&&(ge=bE[ge]),we!==ge){switch(ge){case Rd:o.depthFunc(o.NEVER);break;case wd:o.depthFunc(o.ALWAYS);break;case Cd:o.depthFunc(o.LESS);break;case yr:o.depthFunc(o.LEQUAL);break;case Dd:o.depthFunc(o.EQUAL);break;case Nd:o.depthFunc(o.GEQUAL);break;case Ud:o.depthFunc(o.GREATER);break;case Ld:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=ge}},setLocked:function(ge){G=ge},setClear:function(ge){Me!==ge&&(De&&(ge=1-ge),o.clearDepth(ge),Me=ge)},reset:function(){G=!1,Re=null,we=null,Me=null,De=!1}}}function l(){let G=!1,De=null,Re=null,we=null,Me=null,ge=null,Ie=null,it=null,Bt=null;return{setTest:function(wt){G||(wt?ue(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(wt){De!==wt&&!G&&(o.stencilMask(wt),De=wt)},setFunc:function(wt,Rn,kn){(Re!==wt||we!==Rn||Me!==kn)&&(o.stencilFunc(wt,Rn,kn),Re=wt,we=Rn,Me=kn)},setOp:function(wt,Rn,kn){(ge!==wt||Ie!==Rn||it!==kn)&&(o.stencilOp(wt,Rn,kn),ge=wt,Ie=Rn,it=kn)},setLocked:function(wt){G=wt},setClear:function(wt){Bt!==wt&&(o.clearStencil(wt),Bt=wt)},reset:function(){G=!1,De=null,Re=null,we=null,Me=null,ge=null,Ie=null,it=null,Bt=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},b=new WeakMap,y=[],A=null,D=!1,M=null,v=null,I=null,L=null,F=null,j=null,N=null,O=new Et(0,0,0),Q=0,C=!1,w=null,k=null,te=null,le=null,pe=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let _e=null,ve={};const P=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Se=new kt().fromArray(P),Te=new kt().fromArray(re);function Pe(G,De,Re,we){const Me=new Uint8Array(4),ge=o.createTexture();o.bindTexture(G,ge),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ie=0;Ie<Re;Ie++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,we,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(De+Ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return ge}const ie={};ie[o.TEXTURE_2D]=Pe(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=Pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=Pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=Pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(yr),ht(!1),mt(bx),ue(o.CULL_FACE),Rt(ua);function ue(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Ce(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function He(G,De){return x[G]!==De?(o.bindFramebuffer(G,De),x[G]=De,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=De),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=De),!0):!1}function je(G,De){let Re=y,we=!1;if(G){Re=b.get(De),Re===void 0&&(Re=[],b.set(De,Re));const Me=G.textures;if(Re.length!==Me.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,Ie=Me.length;ge<Ie;ge++)Re[ge]=o.COLOR_ATTACHMENT0+ge;Re.length=Me.length,we=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,we=!0);we&&o.drawBuffers(Re)}function lt(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const tn={[bs]:o.FUNC_ADD,[xb]:o.FUNC_SUBTRACT,[gb]:o.FUNC_REVERSE_SUBTRACT};tn[_b]=o.MIN,tn[vb]=o.MAX;const dt={[bb]:o.ZERO,[yb]:o.ONE,[Sb]:o.SRC_COLOR,[Td]:o.SRC_ALPHA,[wb]:o.SRC_ALPHA_SATURATE,[Ab]:o.DST_COLOR,[Eb]:o.DST_ALPHA,[Mb]:o.ONE_MINUS_SRC_COLOR,[Ad]:o.ONE_MINUS_SRC_ALPHA,[Rb]:o.ONE_MINUS_DST_COLOR,[Tb]:o.ONE_MINUS_DST_ALPHA,[Cb]:o.CONSTANT_COLOR,[Db]:o.ONE_MINUS_CONSTANT_COLOR,[Nb]:o.CONSTANT_ALPHA,[Ub]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(G,De,Re,we,Me,ge,Ie,it,Bt,wt){if(G===ua){D===!0&&(Ce(o.BLEND),D=!1);return}if(D===!1&&(ue(o.BLEND),D=!0),G!==mb){if(G!==M||wt!==C){if((v!==bs||F!==bs)&&(o.blendEquation(o.FUNC_ADD),v=bs,F=bs),wt)switch(G){case vr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFunc(o.ONE,o.ONE);break;case Sx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:sn("WebGLState: Invalid blending: ",G);break}else switch(G){case vr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sx:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mx:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",G);break}I=null,L=null,j=null,N=null,O.set(0,0,0),Q=0,M=G,C=wt}return}Me=Me||De,ge=ge||Re,Ie=Ie||we,(De!==v||Me!==F)&&(o.blendEquationSeparate(tn[De],tn[Me]),v=De,F=Me),(Re!==I||we!==L||ge!==j||Ie!==N)&&(o.blendFuncSeparate(dt[Re],dt[we],dt[ge],dt[Ie]),I=Re,L=we,j=ge,N=Ie),(it.equals(O)===!1||Bt!==Q)&&(o.blendColor(it.r,it.g,it.b,Bt),O.copy(it),Q=Bt),M=G,C=!1}function H(G,De){G.side===oa?Ce(o.CULL_FACE):ue(o.CULL_FACE);let Re=G.side===Vn;De&&(Re=!Re),ht(Re),G.blending===vr&&G.transparent===!1?Rt(ua):Rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const we=G.stencilWrite;h.setTest(we),we&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){w!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),w=G)}function mt(G){G!==hb?(ue(o.CULL_FACE),G!==k&&(G===bx?o.cullFace(o.BACK):G===pb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),k=G}function Pt(G){G!==te&&(B&&o.lineWidth(G),te=G)}function Ge(G,De,Re){G?(ue(o.POLYGON_OFFSET_FILL),(le!==De||pe!==Re)&&(o.polygonOffset(De,Re),le=De,pe=Re)):Ce(o.POLYGON_OFFSET_FILL)}function jt(G){G?ue(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function Ye(G){G===void 0&&(G=o.TEXTURE0+de-1),_e!==G&&(o.activeTexture(G),_e=G)}function at(G,De,Re){Re===void 0&&(_e===null?Re=o.TEXTURE0+de-1:Re=_e);let we=ve[Re];we===void 0&&(we={type:void 0,texture:void 0},ve[Re]=we),(we.type!==G||we.texture!==De)&&(_e!==Re&&(o.activeTexture(Re),_e=Re),o.bindTexture(G,De||ie[G]),we.type=G,we.texture=De)}function U(){const G=ve[_e];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function me(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function be(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function We(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ue(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Qe(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Xe(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ye(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ee(G){Se.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function qe(G){Te.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Te.copy(G))}function Ve(G,De){let Re=p.get(De);Re===void 0&&(Re=new WeakMap,p.set(De,Re));let we=Re.get(G);we===void 0&&(we=o.getUniformBlockIndex(De,G.name),Re.set(G,we))}function Oe(G,De){const we=p.get(De).get(G);m.get(De)!==we&&(o.uniformBlockBinding(De,we,G.__bindingPointIndex),m.set(De,we))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_e=null,ve={},x={},b=new WeakMap,y=[],A=null,D=!1,M=null,v=null,I=null,L=null,F=null,j=null,N=null,O=new Et(0,0,0),Q=0,C=!1,w=null,k=null,te=null,le=null,pe=null,Se.set(0,0,o.canvas.width,o.canvas.height),Te.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ue,disable:Ce,bindFramebuffer:He,drawBuffers:je,useProgram:lt,setBlending:Rt,setMaterial:H,setFlipSided:ht,setCullFace:mt,setLineWidth:Pt,setPolygonOffset:Ge,setScissorTest:jt,activeTexture:Ye,bindTexture:at,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Xe,texImage3D:ye,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:Ue,texStorage3D:Qe,texSubImage2D:me,texSubImage3D:be,compressedTexSubImage2D:ce,compressedTexSubImage3D:We,scissor:Ee,viewport:qe,reset:nt}}function SE(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,_=new WeakMap;let x;const b=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return y?new OffscreenCanvas(U,E):zo("canvas")}function D(U,E,J){let me=1;const be=at(U);if((be.width>J||be.height>J)&&(me=J/Math.max(be.width,be.height)),me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ce=Math.floor(me*be.width),We=Math.floor(me*be.height);x===void 0&&(x=A(ce,We));const Ue=E?A(ce,We):x;return Ue.width=ce,Ue.height=We,Ue.getContext("2d").drawImage(U,0,0,ce,We),ot("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ce+"x"+We+")."),Ue}else return"data"in U&&ot("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,E,J,me,be=!1){if(U!==null){if(o[U]!==void 0)return o[U];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce=E;if(E===o.RED&&(J===o.FLOAT&&(ce=o.R32F),J===o.HALF_FLOAT&&(ce=o.R16F),J===o.UNSIGNED_BYTE&&(ce=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ce=o.R8UI),J===o.UNSIGNED_SHORT&&(ce=o.R16UI),J===o.UNSIGNED_INT&&(ce=o.R32UI),J===o.BYTE&&(ce=o.R8I),J===o.SHORT&&(ce=o.R16I),J===o.INT&&(ce=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ce=o.RG32F),J===o.HALF_FLOAT&&(ce=o.RG16F),J===o.UNSIGNED_BYTE&&(ce=o.RG8)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ce=o.RG8UI),J===o.UNSIGNED_SHORT&&(ce=o.RG16UI),J===o.UNSIGNED_INT&&(ce=o.RG32UI),J===o.BYTE&&(ce=o.RG8I),J===o.SHORT&&(ce=o.RG16I),J===o.INT&&(ce=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),J===o.UNSIGNED_INT&&(ce=o.RGB32UI),J===o.BYTE&&(ce=o.RGB8I),J===o.SHORT&&(ce=o.RGB16I),J===o.INT&&(ce=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),J===o.UNSIGNED_INT&&(ce=o.RGBA32UI),J===o.BYTE&&(ce=o.RGBA8I),J===o.SHORT&&(ce=o.RGBA16I),J===o.INT&&(ce=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),E===o.RGBA){const We=be?Ac:Ut.getTransfer(me);J===o.FLOAT&&(ce=o.RGBA32F),J===o.HALF_FLOAT&&(ce=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ce=We===Vt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function F(U,E){let J;return U?E===null||E===Ms||E===Lo?J=o.DEPTH24_STENCIL8:E===ca?J=o.DEPTH32F_STENCIL8:E===Uo&&(J=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ms||E===Lo?J=o.DEPTH_COMPONENT24:E===ca?J=o.DEPTH_COMPONENT32F:E===Uo&&(J=o.DEPTH_COMPONENT16),J}function j(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ni&&U.minFilter!==di?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function N(U){const E=U.target;E.removeEventListener("dispose",N),Q(E),E.isVideoTexture&&_.delete(E)}function O(U){const E=U.target;E.removeEventListener("dispose",O),w(E)}function Q(U){const E=s.get(U);if(E.__webglInit===void 0)return;const J=U.source,me=b.get(J);if(me){const be=me[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&C(U),Object.keys(me).length===0&&b.delete(J)}s.remove(U)}function C(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const J=U.source,me=b.get(J);delete me[E.__cacheKey],d.memory.textures--}function w(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let be=0;be<E.__webglFramebuffer[me].length;be++)o.deleteFramebuffer(E.__webglFramebuffer[me][be]);else o.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)o.deleteFramebuffer(E.__webglFramebuffer[me]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let me=0,be=J.length;me<be;me++){const ce=s.get(J[me]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),s.remove(J[me])}s.remove(U)}let k=0;function te(){k=0}function le(){const U=k;return U>=l.maxTextures&&ot("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),k+=1,U}function pe(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function de(U,E){const J=s.get(U);if(U.isVideoTexture&&jt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const me=U.image;if(me===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(J,U,E);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function B(U,E){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){ie(J,U,E);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){ie(J,U,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function Y(U,E){const J=s.get(U);if(U.version>0&&J.__version!==U.version){ue(J,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const _e={[zd]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[Id]:o.MIRRORED_REPEAT},ve={[ni]:o.NEAREST,[Vb]:o.NEAREST_MIPMAP_NEAREST,[ec]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Wf]:o.LINEAR_MIPMAP_NEAREST,[Ss]:o.LINEAR_MIPMAP_LINEAR},P={[Wb]:o.NEVER,[Jb]:o.ALWAYS,[qb]:o.LESS,[Ng]:o.LEQUAL,[Yb]:o.EQUAL,[Qb]:o.GEQUAL,[Zb]:o.GREATER,[Kb]:o.NOTEQUAL};function re(U,E){if(E.type===ca&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===di||E.magFilter===Wf||E.magFilter===ec||E.magFilter===Ss||E.minFilter===di||E.minFilter===Wf||E.minFilter===ec||E.minFilter===Ss)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_e[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_e[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_e[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,ve[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ni||E.minFilter!==ec&&E.minFilter!==Ss||E.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Se(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",N));const me=E.source;let be=b.get(me);be===void 0&&(be={},b.set(me,be));const ce=pe(E);if(ce!==U.__cacheKey){be[ce]===void 0&&(be[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),be[ce].usedTimes++;const We=be[U.__cacheKey];We!==void 0&&(be[U.__cacheKey].usedTimes--,We.usedTimes===0&&C(E)),U.__cacheKey=ce,U.__webglTexture=be[ce].texture}return J}function Te(U,E,J){return Math.floor(Math.floor(U/J)/E)}function Pe(U,E,J,me){const ce=U.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,me,E.data);else{ce.sort((ye,Ee)=>ye.start-Ee.start);let We=0;for(let ye=1;ye<ce.length;ye++){const Ee=ce[We],qe=ce[ye],Ve=Ee.start+Ee.count,Oe=Te(qe.start,E.width,4),nt=Te(Ee.start,E.width,4);qe.start<=Ve+1&&Oe===nt&&Te(qe.start+qe.count-1,E.width,4)===Oe?Ee.count=Math.max(Ee.count,qe.start+qe.count-Ee.start):(++We,ce[We]=qe)}ce.length=We+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),Xe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let ye=0,Ee=ce.length;ye<Ee;ye++){const qe=ce[ye],Ve=Math.floor(qe.start/4),Oe=Math.ceil(qe.count/4),nt=Ve%E.width,G=Math.floor(Ve/E.width),De=Oe,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,nt,G,De,Re,J,me,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xe)}}function ie(U,E,J){let me=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=o.TEXTURE_3D);const be=Se(U,E),ce=E.source;i.bindTexture(me,U.__webglTexture,o.TEXTURE0+J);const We=s.get(ce);if(ce.version!==We.__version||be===!0){i.activeTexture(o.TEXTURE0+J);const Ue=Ut.getPrimaries(Ut.workingColorSpace),Qe=E.colorSpace===Xa?null:Ut.getPrimaries(E.colorSpace),Xe=E.colorSpace===Xa||Ue===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ye=D(E.image,!1,l.maxTextureSize);ye=Ye(E,ye);const Ee=c.convert(E.format,E.colorSpace),qe=c.convert(E.type);let Ve=L(E.internalFormat,Ee,qe,E.colorSpace,E.isVideoTexture);re(me,E);let Oe;const nt=E.mipmaps,G=E.isVideoTexture!==!0,De=We.__version===void 0||be===!0,Re=ce.dataReady,we=j(E,ye);if(E.isDepthTexture)Ve=F(E.format===Po,E.type),De&&(G?i.texStorage2D(o.TEXTURE_2D,1,Ve,ye.width,ye.height):i.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Ee,qe,null));else if(E.isDataTexture)if(nt.length>0){G&&De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,nt[0].width,nt[0].height);for(let Me=0,ge=nt.length;Me<ge;Me++)Oe=nt[Me],G?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,qe,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Ee,qe,Oe.data);E.generateMipmaps=!1}else G?(De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,ye.width,ye.height),Re&&Pe(E,ye,Ee,qe)):i.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Ee,qe,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ve,nt[0].width,nt[0].height,ye.depth);for(let Me=0,ge=nt.length;Me<ge;Me++)if(Oe=nt[Me],E.format!==yi)if(Ee!==null)if(G){if(Re)if(E.layerUpdates.size>0){const Ie=Yx(Oe.width,Oe.height,E.format,E.type);for(const it of E.layerUpdates){const Bt=Oe.data.subarray(it*Ie/Oe.data.BYTES_PER_ELEMENT,(it+1)*Ie/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,it,Oe.width,Oe.height,1,Ee,Bt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,ye.depth,Ee,Oe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,ye.depth,Ee,qe,Oe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,ye.depth,0,Ee,qe,Oe.data)}else{G&&De&&i.texStorage2D(o.TEXTURE_2D,we,Ve,nt[0].width,nt[0].height);for(let Me=0,ge=nt.length;Me<ge;Me++)Oe=nt[Me],E.format!==yi?Ee!==null?G?Re&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,Oe.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Oe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,qe,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Ee,qe,Oe.data)}else if(E.isDataArrayTexture)if(G){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ve,ye.width,ye.height,ye.depth),Re)if(E.layerUpdates.size>0){const Me=Yx(ye.width,ye.height,E.format,E.type);for(const ge of E.layerUpdates){const Ie=ye.data.subarray(ge*Me/ye.data.BYTES_PER_ELEMENT,(ge+1)*Me/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Ee,qe,Ie)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ee,qe,ye.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,Ee,qe,ye.data);else if(E.isData3DTexture)G?(De&&i.texStorage3D(o.TEXTURE_3D,we,Ve,ye.width,ye.height,ye.depth),Re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ee,qe,ye.data)):i.texImage3D(o.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,Ee,qe,ye.data);else if(E.isFramebufferTexture){if(De)if(G)i.texStorage2D(o.TEXTURE_2D,we,Ve,ye.width,ye.height);else{let Me=ye.width,ge=ye.height;for(let Ie=0;Ie<we;Ie++)i.texImage2D(o.TEXTURE_2D,Ie,Ve,Me,ge,0,Ee,qe,null),Me>>=1,ge>>=1}}else if(nt.length>0){if(G&&De){const Me=at(nt[0]);i.texStorage2D(o.TEXTURE_2D,we,Ve,Me.width,Me.height)}for(let Me=0,ge=nt.length;Me<ge;Me++)Oe=nt[Me],G?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ee,qe,Oe):i.texImage2D(o.TEXTURE_2D,Me,Ve,Ee,qe,Oe);E.generateMipmaps=!1}else if(G){if(De){const Me=at(ye);i.texStorage2D(o.TEXTURE_2D,we,Ve,Me.width,Me.height)}Re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,qe,ye)}else i.texImage2D(o.TEXTURE_2D,0,Ve,Ee,qe,ye);M(E)&&v(me),We.__version=ce.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ue(U,E,J){if(E.image.length!==6)return;const me=Se(U,E),be=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const ce=s.get(be);if(be.version!==ce.__version||me===!0){i.activeTexture(o.TEXTURE0+J);const We=Ut.getPrimaries(Ut.workingColorSpace),Ue=E.colorSpace===Xa?null:Ut.getPrimaries(E.colorSpace),Qe=E.colorSpace===Xa||We===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let ge=0;ge<6;ge++)!Xe&&!ye?Ee[ge]=D(E.image[ge],!0,l.maxCubemapSize):Ee[ge]=ye?E.image[ge].image:E.image[ge],Ee[ge]=Ye(E,Ee[ge]);const qe=Ee[0],Ve=c.convert(E.format,E.colorSpace),Oe=c.convert(E.type),nt=L(E.internalFormat,Ve,Oe,E.colorSpace),G=E.isVideoTexture!==!0,De=ce.__version===void 0||me===!0,Re=be.dataReady;let we=j(E,qe);re(o.TEXTURE_CUBE_MAP,E);let Me;if(Xe){G&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,qe.width,qe.height);for(let ge=0;ge<6;ge++){Me=Ee[ge].mipmaps;for(let Ie=0;Ie<Me.length;Ie++){const it=Me[Ie];E.format!==yi?Ve!==null?G?Re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,it.width,it.height,Ve,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,nt,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,it.width,it.height,Ve,Oe,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,nt,it.width,it.height,0,Ve,Oe,it.data)}}}else{if(Me=E.mipmaps,G&&De){Me.length>0&&we++;const ge=at(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){G?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ee[ge].width,Ee[ge].height,Ve,Oe,Ee[ge].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Ee[ge].width,Ee[ge].height,0,Ve,Oe,Ee[ge].data);for(let Ie=0;Ie<Me.length;Ie++){const Bt=Me[Ie].image[ge].image;G?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Bt.width,Bt.height,Ve,Oe,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,nt,Bt.width,Bt.height,0,Ve,Oe,Bt.data)}}else{G?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve,Oe,Ee[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Ve,Oe,Ee[ge]);for(let Ie=0;Ie<Me.length;Ie++){const it=Me[Ie];G?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Ve,Oe,it.image[ge]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,nt,Ve,Oe,it.image[ge])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),ce.__version=be.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ce(U,E,J,me,be,ce){const We=c.convert(J.format,J.colorSpace),Ue=c.convert(J.type),Qe=L(J.internalFormat,We,Ue,J.colorSpace),Xe=s.get(E),ye=s.get(J);if(ye.__renderTarget=E,!Xe.__hasExternalTextures){const Ee=Math.max(1,E.width>>ce),qe=Math.max(1,E.height>>ce);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,ce,Qe,Ee,qe,E.depth,0,We,Ue,null):i.texImage2D(be,ce,Qe,Ee,qe,0,We,Ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ge(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,be,ye.__webglTexture,0,Pt(E)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,be,ye.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(U,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const me=E.depthTexture,be=me&&me.isDepthTexture?me.type:null,ce=F(E.stencilBuffer,be),We=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=Pt(E);Ge(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue,ce,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue,ce,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ce,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,U)}else{const me=E.textures;for(let be=0;be<me.length;be++){const ce=me[be],We=c.convert(ce.format,ce.colorSpace),Ue=c.convert(ce.type),Qe=L(ce.internalFormat,We,Ue,ce.colorSpace),Xe=Pt(E);J&&Ge(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,Qe,E.width,E.height):Ge(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe,Qe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function je(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const be=me.__webglTexture,ce=Pt(E);if(E.depthTexture.format===Oo)Ge(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0);else if(E.depthTexture.format===Po)Ge(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function lt(U){const E=s.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const me=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",be)};me.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=me}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const me=U.texture.mipmaps;me&&me.length>0?je(E.__webglFramebuffer[0],U):je(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=o.createRenderbuffer(),He(E.__webglDepthbuffer[me],U,!1);else{const be=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,ce)}}else{const me=U.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),He(E.__webglDepthbuffer,U,!1);else{const be=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(U,E,J){const me=s.get(U);E!==void 0&&Ce(me.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&lt(U)}function dt(U){const E=U.texture,J=s.get(U),me=s.get(E);U.addEventListener("dispose",O);const be=U.textures,ce=U.isWebGLCubeRenderTarget===!0,We=be.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=E.version,d.memory.textures++),ce){J.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Ue]=[];for(let Qe=0;Qe<E.mipmaps.length;Qe++)J.__webglFramebuffer[Ue][Qe]=o.createFramebuffer()}else J.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)J.__webglFramebuffer[Ue]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(We)for(let Ue=0,Qe=be.length;Ue<Qe;Ue++){const Xe=s.get(be[Ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Ge(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ue=0;Ue<be.length;Ue++){const Qe=be[Ue];J.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Ue]);const Xe=c.convert(Qe.format,Qe.colorSpace),ye=c.convert(Qe.type),Ee=L(Qe.internalFormat,Xe,ye,Qe.colorSpace,U.isXRRenderTarget===!0),qe=Pt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Ee,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,J.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),He(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),re(o.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Ce(J.__webglFramebuffer[Ue][Qe],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe);else Ce(J.__webglFramebuffer[Ue],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let Ue=0,Qe=be.length;Ue<Qe;Ue++){const Xe=be[Ue],ye=s.get(Xe);let Ee=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ee=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,ye.__webglTexture),re(Ee,Xe),Ce(J.__webglFramebuffer,U,Xe,o.COLOR_ATTACHMENT0+Ue,Ee,0),M(Xe)&&v(Ee)}i.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,me.__webglTexture),re(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Ce(J.__webglFramebuffer[Qe],U,E,o.COLOR_ATTACHMENT0,Ue,Qe);else Ce(J.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Ue,0);M(E)&&v(Ue),i.unbindTexture()}U.depthBuffer&&lt(U)}function Rt(U){const E=U.textures;for(let J=0,me=E.length;J<me;J++){const be=E[J];if(M(be)){const ce=I(U),We=s.get(be).__webglTexture;i.bindTexture(ce,We),v(ce),i.unbindTexture()}}}const H=[],ht=[];function mt(U){if(U.samples>0){if(Ge(U)===!1){const E=U.textures,J=U.width,me=U.height;let be=o.COLOR_BUFFER_BIT;const ce=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=s.get(U),Ue=E.length>1;if(Ue)for(let Xe=0;Xe<E.length;Xe++)i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Qe=U.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Xe=0;Xe<E.length;Xe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Xe]);const ye=s.get(E[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,J,me,0,0,J,me,be,o.NEAREST),m===!0&&(H.length=0,ht.length=0,H.push(o.COLOR_ATTACHMENT0+Xe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(H.push(ce),ht.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let Xe=0;Xe<E.length;Xe++){i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,We.__webglColorRenderbuffer[Xe]);const ye=s.get(E[Xe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,ye,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Pt(U){return Math.min(l.maxSamples,U.samples)}function Ge(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(U){const E=d.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Ye(U,E){const J=U.colorSpace,me=U.format,be=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Er&&J!==Xa&&(Ut.getTransfer(J)===Vt?(me!==yi||be!==Ni)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",J)),E}function at(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=te,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=tn,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ge}function ME(o,t){function i(s,l=Xa){let c;const d=Ut.getTransfer(l);if(s===Ni)return o.UNSIGNED_BYTE;if(s===gh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_h)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Tg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ag)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Mg)return o.BYTE;if(s===Eg)return o.SHORT;if(s===Uo)return o.UNSIGNED_SHORT;if(s===xh)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===Ar)return o.HALF_FLOAT;if(s===Rg)return o.ALPHA;if(s===wg)return o.RGB;if(s===yi)return o.RGBA;if(s===Oo)return o.DEPTH_COMPONENT;if(s===Po)return o.DEPTH_STENCIL;if(s===Cg)return o.RED;if(s===vh)return o.RED_INTEGER;if(s===bh)return o.RG;if(s===yh)return o.RG_INTEGER;if(s===Sh)return o.RGBA_INTEGER;if(s===yc||s===Sc||s===Mc||s===Ec)if(d===Vt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bd||s===Fd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vd||s===kd||s===jd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Vd||s===kd)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===jd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xd||s===Wd||s===qd||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh||s===ih||s===ah)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Xd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jd)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$d)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===th)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ih)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ah)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sh||s===rh||s===oh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===sh)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===oh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lh||s===ch||s===uh||s===fh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===lh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Vg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new da({vertexShader:EE,fragmentShader:TE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new Dc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends Rr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,b=null,y=null,A=null;const D=typeof XRWebGLBinding<"u",M=new AE,v={},I=i.getContextAttributes();let L=null,F=null;const j=[],N=[],O=new At;let Q=null;const C=new ti;C.viewport=new kt;const w=new ti;w.viewport=new kt;const k=[C,w],te=new Xy;let le=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=j[ie];return ue===void 0&&(ue=new md,j[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=j[ie];return ue===void 0&&(ue=new md,j[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=j[ie];return ue===void 0&&(ue=new md,j[ie]=ue),ue.getHandSpace()};function de(ie){const ue=N.indexOf(ie.inputSource);if(ue===-1)return;const Ce=j[ue];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,p||d),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",Z);for(let ie=0;ie<j.length;ie++){const ue=N[ie];ue!==null&&(N[ie]=null,j[ie].disconnect(ue))}le=null,pe=null,M.reset();for(const ie in v)delete v[ie];t.setRenderTarget(L),y=null,b=null,x=null,l=null,F=null,Pe.stop(),s.isPresenting=!1,t.setPixelRatio(Q),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return b!==null?b:y},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",B),l.addEventListener("inputsourceschange",Z),I.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(O),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,He=null,je=null;I.depth&&(je=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=I.stencil?Po:Oo,He=I.stencil?Lo:Ms);const lt={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};x=this.getBinding(),b=x.createProjectionLayer(lt),l.updateRenderState({layers:[b]}),t.setPixelRatio(1),t.setSize(b.textureWidth,b.textureHeight,!1),F=new Es(b.textureWidth,b.textureHeight,{format:yi,type:Ni,depthTexture:new Gg(b.textureWidth,b.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}else{const Ce={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Es(y.framebufferWidth,y.framebufferHeight,{format:yi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(ie){for(let ue=0;ue<ie.removed.length;ue++){const Ce=ie.removed[ue],He=N.indexOf(Ce);He>=0&&(N[He]=null,j[He].disconnect(Ce))}for(let ue=0;ue<ie.added.length;ue++){const Ce=ie.added[ue];let He=N.indexOf(Ce);if(He===-1){for(let lt=0;lt<j.length;lt++)if(lt>=N.length){N.push(Ce),He=lt;break}else if(N[lt]===null){N[lt]=Ce,He=lt;break}if(He===-1)break}const je=j[He];je&&je.connect(Ce)}}const Y=new ae,_e=new ae;function ve(ie,ue,Ce){Y.setFromMatrixPosition(ue.matrixWorld),_e.setFromMatrixPosition(Ce.matrixWorld);const He=Y.distanceTo(_e),je=ue.projectionMatrix.elements,lt=Ce.projectionMatrix.elements,tn=je[14]/(je[10]-1),dt=je[14]/(je[10]+1),Rt=(je[9]+1)/je[5],H=(je[9]-1)/je[5],ht=(je[8]-1)/je[0],mt=(lt[8]+1)/lt[0],Pt=tn*ht,Ge=tn*mt,jt=He/(-ht+mt),Ye=jt*-ht;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ye),ie.translateZ(jt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),je[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const at=tn+jt,U=dt+jt,E=Pt-Ye,J=Ge+(He-Ye),me=Rt*dt/U*at,be=H*dt/U*at;ie.projectionMatrix.makePerspective(E,J,me,be,at,U),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let ue=ie.near,Ce=ie.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),te.near=w.near=C.near=ue,te.far=w.far=C.far=Ce,(le!==te.near||pe!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),le=te.near,pe=te.far),te.layers.mask=ie.layers.mask|6,C.layers.mask=te.layers.mask&3,w.layers.mask=te.layers.mask&5;const He=ie.parent,je=te.cameras;P(te,He);for(let lt=0;lt<je.length;lt++)P(je[lt],He);je.length===2?ve(te,C,w):te.projectionMatrix.copy(C.projectionMatrix),re(ie,te,He)};function re(ie,ue,Ce){Ce===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=dh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(b===null&&y===null))return m},this.setFoveation=function(ie){m=ie,b!==null&&(b.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(te)},this.getCameraTexture=function(ie){return v[ie]};let Se=null;function Te(ie,ue){if(_=ue.getViewerPose(p||d),A=ue,_!==null){const Ce=_.views;y!==null&&(t.setRenderTargetFramebuffer(F,y.framebuffer),t.setRenderTarget(F));let He=!1;Ce.length!==te.cameras.length&&(te.cameras.length=0,He=!0);for(let dt=0;dt<Ce.length;dt++){const Rt=Ce[dt];let H=null;if(y!==null)H=y.getViewport(Rt);else{const mt=x.getViewSubImage(b,Rt);H=mt.viewport,dt===0&&(t.setRenderTargetTextures(F,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(F))}let ht=k[dt];ht===void 0&&(ht=new ti,ht.layers.enable(dt),ht.viewport=new kt,k[dt]=ht),ht.matrix.fromArray(Rt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Rt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(H.x,H.y,H.width,H.height),dt===0&&(te.matrix.copy(ht.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),He===!0&&te.cameras.push(ht)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=s.getBinding();const dt=x.getDepthInformation(Ce[0]);dt&&dt.isValid&&dt.texture&&M.init(dt,l.renderState)}if(je&&je.includes("camera-access")&&D){t.state.unbindTexture(),x=s.getBinding();for(let dt=0;dt<Ce.length;dt++){const Rt=Ce[dt].camera;if(Rt){let H=v[Rt];H||(H=new Vg,v[Rt]=H);const ht=x.getCameraImage(Rt);H.sourceTexture=ht}}}}for(let Ce=0;Ce<j.length;Ce++){const He=N[Ce],je=j[Ce];He!==null&&je!==void 0&&je.update(He,ue,p||d)}Se&&Se(ie,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),A=null}const Pe=new Xg;Pe.setAnimationLoop(Te),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}}const _s=new Ui,wE=new en;function CE(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Fg(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,I,L,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),x(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),b(M,v),v.isMeshPhysicalMaterial&&y(M,v,F)):v.isMeshMatcapMaterial?(c(M,v),A(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),D(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,I,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Vn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Vn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const I=t.get(v),L=I.envMap,F=I.envMapRotation;L&&(M.envMap.value=L,_s.copy(F),_s.x*=-1,_s.y*=-1,_s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),M.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(_s)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,I,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*I,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function b(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,I){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function D(M,v){const I=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function DE(o,t,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,L){const F=L.program;s.uniformBlockBinding(I,F)}function p(I,L){let F=l[I.id];F===void 0&&(A(I),F=_(I),l[I.id]=F,I.addEventListener("dispose",M));const j=L.program;s.updateUBOMapping(I,j);const N=t.render.frame;c[I.id]!==N&&(b(I),c[I.id]=N)}function _(I){const L=x();I.__bindingPointIndex=L;const F=o.createBuffer(),j=I.__size,N=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,j,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,F),F}function x(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(I){const L=l[I.id],F=I.uniforms,j=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let N=0,O=F.length;N<O;N++){const Q=Array.isArray(F[N])?F[N]:[F[N]];for(let C=0,w=Q.length;C<w;C++){const k=Q[C];if(y(k,N,C,j)===!0){const te=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let de=0;de<le.length;de++){const B=le[de],Z=D(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,te+pe,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,pe),pe+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,te,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,L,F,j){const N=I.value,O=L+"_"+F;if(j[O]===void 0)return typeof N=="number"||typeof N=="boolean"?j[O]=N:j[O]=N.clone(),!0;{const Q=j[O];if(typeof N=="number"||typeof N=="boolean"){if(Q!==N)return j[O]=N,!0}else if(Q.equals(N)===!1)return Q.copy(N),!0}return!1}function A(I){const L=I.uniforms;let F=0;const j=16;for(let O=0,Q=L.length;O<Q;O++){const C=Array.isArray(L[O])?L[O]:[L[O]];for(let w=0,k=C.length;w<k;w++){const te=C[w],le=Array.isArray(te.value)?te.value:[te.value];for(let pe=0,de=le.length;pe<de;pe++){const B=le[pe],Z=D(B),Y=F%j,_e=Y%Z.boundary,ve=Y+_e;F+=_e,ve!==0&&j-ve<Z.storage&&(F+=j-ve),te.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=F,F+=Z.storage}}}const N=F%j;return N>0&&(F+=j-N),I.__size=F,I.__cache={},this}function D(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",I),L}function M(I){const L=I.target;L.removeEventListener("dispose",M);const F=d.indexOf(L.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const NE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let sa=null;function UE(){return sa===null&&(sa=new wy(NE,32,32,bh,Ar),sa.minFilter=di,sa.magFilter=di,sa.wrapS=la,sa.wrapT=la,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class LE{constructor(t={}){const{canvas:i=$b(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:b=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const A=new Set([Sh,yh,vh]),D=new Set([Ni,Ms,Uo,Lo,gh,_h]),M=new Uint32Array(4),v=new Int32Array(4);let I=null,L=null;const F=[],j=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1;this._outputColorSpace=ei;let Q=0,C=0,w=null,k=-1,te=null;const le=new kt,pe=new kt;let de=null;const B=new Et(0);let Z=0,Y=i.width,_e=i.height,ve=1,P=null,re=null;const Se=new kt(0,0,Y,_e),Te=new kt(0,0,Y,_e);let Pe=!1;const ie=new Rh;let ue=!1,Ce=!1;const He=new en,je=new ae,lt=new kt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Rt(){return w===null?ve:1}let H=s;function ht(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),H===null){const X="webgl2";if(H=ht(X,R),H===null)throw ht(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let mt,Pt,Ge,jt,Ye,at,U,E,J,me,be,ce,We,Ue,Qe,Xe,ye,Ee,qe,Ve,Oe,nt,G,De;function Re(){mt=new G3(H),mt.init(),nt=new ME(H,mt),Pt=new U3(H,mt,t,nt),Ge=new yE(H,mt),Pt.reversedDepthBuffer&&b&&Ge.buffers.depth.setReversed(!0),jt=new j3(H),Ye=new lE,at=new SE(H,mt,Ge,Ye,Pt,nt,jt),U=new O3(N),E=new H3(N),J=new Yy(H),G=new D3(H,J),me=new V3(H,J,jt,G),be=new W3(H,me,J,jt),qe=new X3(H,Pt,at),Xe=new L3(Ye),ce=new oE(N,U,E,mt,Pt,G,Xe),We=new CE(N,Ye),Ue=new uE,Qe=new xE(mt),Ee=new C3(N,U,E,Ge,be,y,m),ye=new vE(N,be,Pt),De=new DE(H,jt,Pt,Ge),Ve=new N3(H,mt,jt),Oe=new k3(H,mt,jt),jt.programs=ce.programs,N.capabilities=Pt,N.extensions=mt,N.properties=Ye,N.renderLists=Ue,N.shadowMap=ye,N.state=Ge,N.info=jt}Re();const we=new RE(N,H);this.xr=we,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(Y,_e,!1))},this.getSize=function(R){return R.set(Y,_e)},this.setSize=function(R,X,se=!0){if(we.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,_e=X,i.width=Math.floor(R*ve),i.height=Math.floor(X*ve),se===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Y*ve,_e*ve).floor()},this.setDrawingBufferSize=function(R,X,se){Y=R,_e=X,ve=se,i.width=Math.floor(R*se),i.height=Math.floor(X*se),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,X,se,ee){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,X,se,ee),Ge.viewport(le.copy(Se).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,X,se,ee){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,X,se,ee),Ge.scissor(pe.copy(Te).multiplyScalar(ve).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){Ge.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){P=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,se=!0){let ee=0;if(R){let q=!1;if(w!==null){const Ae=w.texture.format;q=A.has(Ae)}if(q){const Ae=w.texture.type,Ne=D.has(Ae),ze=Ee.getClearColor(),Be=Ee.getClearAlpha(),$e=ze.r,tt=ze.g,Ze=ze.b;Ne?(M[0]=$e,M[1]=tt,M[2]=Ze,M[3]=Be,H.clearBufferuiv(H.COLOR,0,M)):(v[0]=$e,v[1]=tt,v[2]=Ze,v[3]=Be,H.clearBufferiv(H.COLOR,0,v))}else ee|=H.COLOR_BUFFER_BIT}X&&(ee|=H.DEPTH_BUFFER_BIT),se&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Ee.dispose(),Ue.dispose(),Qe.dispose(),Ye.dispose(),U.dispose(),E.dispose(),be.dispose(),G.dispose(),De.dispose(),ce.dispose(),we.dispose(),we.removeEventListener("sessionstart",Cr),we.removeEventListener("sessionend",Dr),hi.stop()};function Me(R){R.preventDefault(),wx("WebGLRenderer: Context Lost."),O=!0}function ge(){wx("WebGLRenderer: Context Restored."),O=!1;const R=jt.autoReset,X=ye.enabled,se=ye.autoUpdate,ee=ye.needsUpdate,q=ye.type;Re(),jt.autoReset=R,ye.enabled=X,ye.autoUpdate=se,ye.needsUpdate=ee,ye.type=q}function Ie(R){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const X=R.target;X.removeEventListener("dispose",it),Bt(X)}function Bt(R){wt(R),Ye.remove(R)}function wt(R){const X=Ye.get(R).programs;X!==void 0&&(X.forEach(function(se){ce.releaseProgram(se)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,se,ee,q,Ae){X===null&&(X=tn);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,ze=Lc(R,X,se,ee,q);Ge.setMaterial(ee,Ne);let Be=se.index,$e=1;if(ee.wireframe===!0){if(Be=me.getWireframeAttribute(se),Be===void 0)return;$e=2}const tt=se.drawRange,Ze=se.attributes.position;let ct=tt.start*$e,Tt=(tt.start+tt.count)*$e;Ae!==null&&(ct=Math.max(ct,Ae.start*$e),Tt=Math.min(Tt,(Ae.start+Ae.count)*$e)),Be!==null?(ct=Math.max(ct,0),Tt=Math.min(Tt,Be.count)):Ze!=null&&(ct=Math.max(ct,0),Tt=Math.min(Tt,Ze.count));const Ct=Tt-ct;if(Ct<0||Ct===1/0)return;G.setup(q,ee,ze,se,Be);let yt,Ot=Ve;if(Be!==null&&(yt=J.get(Be),Ot=Oe,Ot.setIndex(yt)),q.isMesh)ee.wireframe===!0?(Ge.setLineWidth(ee.wireframeLinewidth*Rt()),Ot.setMode(H.LINES)):Ot.setMode(H.TRIANGLES);else if(q.isLine){let Je=ee.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*Rt()),q.isLineSegments?Ot.setMode(H.LINES):q.isLineLoop?Ot.setMode(H.LINE_LOOP):Ot.setMode(H.LINE_STRIP)}else q.isPoints?Ot.setMode(H.POINTS):q.isSprite&&Ot.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Io("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,Xt=q._multiDrawCounts,St=q._multiDrawCount,gn=Be?J.get(Be).bytesPerElement:1,ma=Ye.get(ee).currentProgram.getUniforms();for(let qt=0;qt<St;qt++)ma.setValue(H,"_gl_DrawID",qt),Ot.render(Je[qt]/gn,Xt[qt])}else if(q.isInstancedMesh)Ot.renderInstances(ct,Ct,q.count);else if(se.isInstancedBufferGeometry){const Je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xt=Math.min(se.instanceCount,Je);Ot.renderInstances(ct,Ct,Xt)}else Ot.render(ct,Ct)};function Rn(R,X,se){R.transparent===!0&&R.side===oa&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,dn(R,X,se),R.side=Ya,R.needsUpdate=!0,dn(R,X,se),R.side=oa):dn(R,X,se)}this.compile=function(R,X,se=null){se===null&&(se=R),L=Qe.get(se),L.init(X),j.push(L),se.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),R!==se&&R.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(L.pushLight(q),q.castShadow&&L.pushShadow(q))}),L.setupLights();const ee=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const ze=Ae[Ne];Rn(ze,se,q),ee.add(ze)}else Rn(Ae,se,q),ee.add(Ae)}),L=j.pop(),ee},this.compileAsync=function(R,X,se=null){const ee=this.compile(R,X,se);return new Promise(q=>{function Ae(){if(ee.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&ee.delete(Ne)}),ee.size===0){q(R);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let kn=null;function ko(R){kn&&kn(R)}function Cr(){hi.stop()}function Dr(){hi.start()}const hi=new Xg;hi.setAnimationLoop(ko),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(R){kn=R,we.setAnimationLoop(R),R===null?hi.stop():hi.start()},we.addEventListener("sessionstart",Cr),we.addEventListener("sessionend",Dr),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,X,w),L=Qe.get(R,j.length),L.init(X),j.push(L),He.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ie.setFromProjectionMatrix(He,wi,X.reversedDepth),Ce=this.localClippingEnabled,ue=Xe.init(this.clippingPlanes,Ce),I=Ue.get(R,F.length),I.init(),F.push(I),we.enabled===!0&&we.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&Za(Ae,X,-1/0,N.sortObjects)}Za(R,X,0,N.sortObjects),I.finish(),N.sortObjects===!0&&I.sort(P,re),dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,dt&&Ee.addToRenderList(I,R),this.info.render.frame++,ue===!0&&Xe.beginShadows();const se=L.state.shadowsArray;ye.render(se,R,X),ue===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=I.opaque,q=I.transmissive;if(L.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(q.length>0)for(let Ne=0,ze=Ae.length;Ne<ze;Ne++){const Be=Ae[Ne];Ur(ee,q,R,Be)}dt&&Ee.render(R);for(let Ne=0,ze=Ae.length;Ne<ze;Ne++){const Be=Ae[Ne];Nr(I,R,Be,Be.viewport)}}else q.length>0&&Ur(ee,q,R,X),dt&&Ee.render(R),Nr(I,R,X);w!==null&&C===0&&(at.updateMultisampleRenderTarget(w),at.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(N,R,X),G.resetDefaultState(),k=-1,te=null,j.pop(),j.length>0?(L=j[j.length-1],ue===!0&&Xe.setGlobalState(N.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?I=F[F.length-1]:I=null};function Za(R,X,se,ee){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){ee&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(He);const Ne=be.update(R),ze=R.material;ze.visible&&I.push(R,Ne,ze,se,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const Ne=be.update(R),ze=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),lt.copy(Ne.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(He)),Array.isArray(ze)){const Be=Ne.groups;for(let $e=0,tt=Be.length;$e<tt;$e++){const Ze=Be[$e],ct=ze[Ze.materialIndex];ct&&ct.visible&&I.push(R,Ne,ct,se,lt.z,Ze)}}else ze.visible&&I.push(R,Ne,ze,se,lt.z,null)}}const Ae=R.children;for(let Ne=0,ze=Ae.length;Ne<ze;Ne++)Za(Ae[Ne],X,se,ee)}function Nr(R,X,se,ee){const{opaque:q,transmissive:Ae,transparent:Ne}=R;L.setupLightsView(se),ue===!0&&Xe.setGlobalState(N.clippingPlanes,se),ee&&Ge.viewport(le.copy(ee)),q.length>0&&jn(q,X,se),Ae.length>0&&jn(Ae,X,se),Ne.length>0&&jn(Ne,X,se),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ur(R,X,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[ee.id]===void 0&&(L.state.transmissionRenderTarget[ee.id]=new Es(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ar:Ni,minFilter:Ss,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ae=L.state.transmissionRenderTarget[ee.id],Ne=ee.viewport||le;Ae.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const ze=N.getRenderTarget(),Be=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(B),Z=N.getClearAlpha(),Z<1&&N.setClearColor(16777215,.5),N.clear(),dt&&Ee.render(se);const tt=N.toneMapping;N.toneMapping=qa;const Ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),ue===!0&&Xe.setGlobalState(N.clippingPlanes,ee),jn(R,se,ee),at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Tt=0,Ct=X.length;Tt<Ct;Tt++){const yt=X[Tt],{object:Ot,geometry:Je,material:Xt,group:St}=yt;if(Xt.side===oa&&Ot.layers.test(ee.layers)){const gn=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,rn(Ot,se,ee,Je,Xt,St),Xt.side=gn,Xt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae))}N.setRenderTarget(ze,Be,$e),N.setClearColor(B,Z),Ze!==void 0&&(ee.viewport=Ze),N.toneMapping=tt}function jn(R,X,se){const ee=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ae=R.length;q<Ae;q++){const Ne=R[q],{object:ze,geometry:Be,group:$e}=Ne;let tt=Ne.material;tt.allowOverride===!0&&ee!==null&&(tt=ee),ze.layers.test(se.layers)&&rn(ze,X,se,Be,tt,$e)}}function rn(R,X,se,ee,q,Ae){R.onBeforeRender(N,X,se,ee,q,Ae),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(N,X,se,ee,R,Ae),q.transparent===!0&&q.side===oa&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,N.renderBufferDirect(se,X,ee,q,R,Ae),q.side=Ya,q.needsUpdate=!0,N.renderBufferDirect(se,X,ee,q,R,Ae),q.side=oa):N.renderBufferDirect(se,X,ee,q,R,Ae),R.onAfterRender(N,X,se,ee,q,Ae)}function dn(R,X,se){X.isScene!==!0&&(X=tn);const ee=Ye.get(R),q=L.state.lights,Ae=L.state.shadowsArray,Ne=q.state.version,ze=ce.getParameters(R,q.state,Ae,X,se),Be=ce.getProgramCacheKey(ze);let $e=ee.programs;ee.environment=R.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(R.isMeshStandardMaterial?E:U).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",it),$e=new Map,ee.programs=$e);let tt=$e.get(Be);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===Ne)return Ts(R,ze),tt}else ze.uniforms=ce.getUniforms(R),R.onBeforeCompile(ze,N),tt=ce.acquireProgram(ze,Be),$e.set(Be,tt),ee.uniforms=ze.uniforms;const Ze=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Xe.uniform),Ts(R,ze),ee.needsLights=jo(R),ee.lightsStateVersion=Ne,ee.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=tt,ee.uniformsList=null,tt}function Oi(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Tc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Ts(R,X){const se=Ye.get(R);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Lc(R,X,se,ee,q){X.isScene!==!0&&(X=tn),at.resetTextureUnits();const Ae=X.fog,Ne=ee.isMeshStandardMaterial?X.environment:null,ze=w===null?N.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Er,Be=(ee.isMeshStandardMaterial?E:U).get(ee.envMap||Ne),$e=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,Tt=!!se.morphAttributes.color;let Ct=qa;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const yt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=yt!==void 0?yt.length:0,Je=Ye.get(ee),Xt=L.state.lights;if(ue===!0&&(Ce===!0||R!==te)){const vn=R===te&&ee.id===k;Xe.setState(ee,R,vn)}let St=!1;ee.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xt.state.version||Je.outputColorSpace!==ze||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==Be||ee.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Xe.numPlanes||Je.numIntersection!==Xe.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ct||Je.morphColors!==Tt||Je.toneMapping!==Ct||Je.morphTargetsCount!==Ot)&&(St=!0):(St=!0,Je.__version=ee.version);let gn=Je.currentProgram;St===!0&&(gn=dn(ee,X,q));let ma=!1,qt=!1,Pi=!1;const Yt=gn.getUniforms(),_n=Je.uniforms;if(Ge.useProgram(gn.program)&&(ma=!0,qt=!0,Pi=!0),ee.id!==k&&(k=ee.id,qt=!0),ma||te!==R){Ge.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Yt.setValue(H,"projectionMatrix",R.projectionMatrix),Yt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Sn=Yt.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,je.setFromMatrixPosition(R.matrixWorld)),Pt.logarithmicDepthBuffer&&Yt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Yt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,qt=!0,Pi=!0)}if(q.isSkinnedMesh){Yt.setOptional(H,q,"bindMatrix"),Yt.setOptional(H,q,"bindMatrixInverse");const vn=q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Yt.setValue(H,"boneTexture",vn.boneTexture,at))}q.isBatchedMesh&&(Yt.setOptional(H,q,"batchingTexture"),Yt.setValue(H,"batchingTexture",q._matricesTexture,at),Yt.setOptional(H,q,"batchingIdTexture"),Yt.setValue(H,"batchingIdTexture",q._indirectTexture,at),Yt.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Yt.setValue(H,"batchingColorTexture",q._colorsTexture,at));const hn=se.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&qe.update(q,se,gn),(qt||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Yt.setValue(H,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(_n.envMap.value=Be,_n.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(_n.envMapIntensity.value=X.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=UE()),qt&&(Yt.setValue(H,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&Oc(_n,Pi),Ae&&ee.fog===!0&&We.refreshFogUniforms(_n,Ae),We.refreshMaterialUniforms(_n,ee,ve,_e,L.state.transmissionRenderTarget[R.id]),Tc.upload(H,Oi(Je),_n,at)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Tc.upload(H,Oi(Je),_n,at),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Yt.setValue(H,"center",q.center),Yt.setValue(H,"modelViewMatrix",q.modelViewMatrix),Yt.setValue(H,"normalMatrix",q.normalMatrix),Yt.setValue(H,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const vn=ee.uniformsGroups;for(let Sn=0,Si=vn.length;Sn<Si;Sn++){const zi=vn[Sn];De.update(zi,gn),De.bind(zi,gn)}}return gn}function Oc(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function jo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,X,se){const ee=Ye.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=X,Ye.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const se=Ye.get(R);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const Ka=H.createFramebuffer();this.setRenderTarget=function(R,X=0,se=0){w=R,Q=X,C=se;let ee=!0,q=null,Ae=!1,Ne=!1;if(R){const Be=Ye.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),ee=!1;else if(Be.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Be.__hasExternalTextures)at.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Be.__boundDepthTexture!==Ze){if(Ze!==null&&Ye.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const tt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?q=tt[X][se]:q=tt[X],Ae=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?q=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[se]:q=tt,le.copy(R.viewport),pe.copy(R.scissor),de=R.scissorTest}else le.copy(Se).multiplyScalar(ve).floor(),pe.copy(Te).multiplyScalar(ve).floor(),de=Pe;if(se!==0&&(q=Ka),Ge.bindFramebuffer(H.FRAMEBUFFER,q)&&ee&&Ge.drawBuffers(R,q),Ge.viewport(le),Ge.scissor(pe),Ge.setScissorTest(de),Ae){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,se)}else if(Ne){const Be=X;for(let $e=0;$e<R.textures.length;$e++){const tt=Ye.get(R.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,tt.__webglTexture,se,Be)}}else if(R!==null&&se!==0){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,se)}k=-1},this.readRenderTargetPixels=function(R,X,se,ee,q,Ae,Ne,ze=0){if(!(R&&R.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){Ge.bindFramebuffer(H.FRAMEBUFFER,Be);try{const $e=R.textures[ze],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ze)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ee&&se>=0&&se<=R.height-q&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze),H.readPixels(X,se,ee,q,nt.convert(tt),nt.convert(Ze),Ae))}finally{const $e=w!==null?Ye.get(w).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,X,se,ee,q,Ae,Ne,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(X>=0&&X<=R.width-ee&&se>=0&&se<=R.height-q){Ge.bindFramebuffer(H.FRAMEBUFFER,Be);const $e=R.textures[ze],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ze),H.readPixels(X,se,ee,q,nt.convert(tt),nt.convert(Ze),0);const Tt=w!==null?Ye.get(w).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Tt);const Ct=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ey(H,Ct,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(ct),H.deleteSync(Ct),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,se=0){const ee=Math.pow(2,-se),q=Math.floor(R.image.width*ee),Ae=Math.floor(R.image.height*ee),Ne=X!==null?X.x:0,ze=X!==null?X.y:0;at.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,Ne,ze,q,Ae),Ge.unbindTexture()};const Lr=H.createFramebuffer(),pa=H.createFramebuffer();this.copyTextureToTexture=function(R,X,se=null,ee=null,q=0,Ae=null){Ae===null&&(q!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=q,q=0):Ae=0);let Ne,ze,Be,$e,tt,Ze,ct,Tt,Ct;const yt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(se!==null)Ne=se.max.x-se.min.x,ze=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,$e=se.min.x,tt=se.min.y,Ze=se.isBox3?se.min.z:0;else{const hn=Math.pow(2,-q);Ne=Math.floor(yt.width*hn),ze=Math.floor(yt.height*hn),R.isDataArrayTexture?Be=yt.depth:R.isData3DTexture?Be=Math.floor(yt.depth*hn):Be=1,$e=0,tt=0,Ze=0}ee!==null?(ct=ee.x,Tt=ee.y,Ct=ee.z):(ct=0,Tt=0,Ct=0);const Ot=nt.convert(X.format),Je=nt.convert(X.type);let Xt;X.isData3DTexture?(at.setTexture3D(X,0),Xt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(at.setTexture2DArray(X,0),Xt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(X,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const St=H.getParameter(H.UNPACK_ROW_LENGTH),gn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ma=H.getParameter(H.UNPACK_SKIP_PIXELS),qt=H.getParameter(H.UNPACK_SKIP_ROWS),Pi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,yt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze);const Yt=R.isDataArrayTexture||R.isData3DTexture,_n=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const hn=Ye.get(R),vn=Ye.get(X),Sn=Ye.get(hn.__renderTarget),Si=Ye.get(vn.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let zi=0;zi<Be;zi++)Yt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,q,Ze+zi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(X).__webglTexture,Ae,Ct+zi)),H.blitFramebuffer($e,tt,Ne,ze,ct,Tt,Ne,ze,H.DEPTH_BUFFER_BIT,H.NEAREST);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Ye.has(R)){const hn=Ye.get(R),vn=Ye.get(X);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,Lr),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,pa);for(let Sn=0;Sn<Be;Sn++)Yt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,q,Ze+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,q),_n?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vn.__webglTexture,Ae,Ct+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vn.__webglTexture,Ae),q!==0?H.blitFramebuffer($e,tt,Ne,ze,ct,Tt,Ne,ze,H.COLOR_BUFFER_BIT,H.NEAREST):_n?H.copyTexSubImage3D(Xt,Ae,ct,Tt,Ct+Sn,$e,tt,Ne,ze):H.copyTexSubImage2D(Xt,Ae,ct,Tt,$e,tt,Ne,ze);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else _n?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Xt,Ae,ct,Tt,Ct,Ne,ze,Be,Ot,Je,yt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Ae,ct,Tt,Ct,Ne,ze,Be,Ot,yt.data):H.texSubImage3D(Xt,Ae,ct,Tt,Ct,Ne,ze,Be,Ot,Je,yt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,ct,Tt,Ne,ze,Ot,Je,yt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,ct,Tt,yt.width,yt.height,Ot,yt.data):H.texSubImage2D(H.TEXTURE_2D,Ae,ct,Tt,Ne,ze,Ot,Je,yt);H.pixelStorei(H.UNPACK_ROW_LENGTH,St),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ma),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pi),Ae===0&&X.generateMipmaps&&H.generateMipmap(Xt),Ge.unbindTexture()},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){Q=0,C=0,w=null,Ge.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const OE=()=>{const o=_r.useRef(null);return _r.useEffect(()=>{if(!o.current)return;const t=o.current;for(;t.firstChild;)t.removeChild(t.firstChild);const i=new Ry;i.fog=new Ah(0,.01);const s=new ti(75,window.innerWidth/window.innerHeight,.1,1e3),l=new LE({alpha:!0,antialias:!0,powerPreference:"high-performance"});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,l.shadowMap.type=bg,t.appendChild(l.domElement);const c=new jy(16777215,2);i.add(c);const d=new ky(16777215,10);d.position.set(20,30,20),d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,i.add(d),[{color:4491519,intensity:600,position:[15,10,15]},{color:16746564,intensity:500,position:[-15,5,-10]},{color:8978244,intensity:400,position:[10,-10,15]},{color:16729343,intensity:300,position:[-10,15,-15]}].forEach(N=>{const O=new Gy(N.color,N.intensity,40);O.position.set(N.position[0],N.position[1],N.position[2]),O.castShadow=!0,i.add(O)});const m=new Ly({color:3355443,roughness:.05,metalness:.95,clearcoat:1,clearcoatRoughness:.03,reflectivity:1,envMapIntensity:3,transparent:!0,opacity:.9}),p=new Fy().load(["","","","","",""]);m.envMap=p;const _=[];for(let N=0;N<25;N++){const O=Math.random()*1.5+1.5,Q=O*.3,C=new wc(O,Q,32,64),w=new Li(C,m.clone());w.position.set((Math.random()-.5)*120,(Math.random()-.5)*80,(Math.random()-.5)*60-30),w.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),w.userData={baseY:w.position.y,baseX:w.position.x,baseZ:w.position.z,floatSpeed:Math.random()*.002+.003,floatAmplitude:Math.random()*8+4,rotationSpeed:{x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005,z:(Math.random()-.5)*.005},hoverOffset:Math.random()*Math.PI*2,driftSpeed:Math.random()*.001+5e-4,pulseSpeed:Math.random()*.003+.002,pulseAmplitude:Math.random()*.1+.05},w.castShadow=!0,w.receiveShadow=!0,_.push(w),i.add(w)}for(let N=0;N<5;N++){const O=Math.random()*2+3,Q=O*.25,C=new wc(O,Q,48,96),w=new Li(C,m.clone());w.position.set((Math.random()-.5)*40,(Math.random()-.5)*30,(Math.random()-.5)*20-10),w.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),w.userData={baseY:w.position.y,baseX:w.position.x,baseZ:w.position.z,floatSpeed:Math.random()*.001+.002,floatAmplitude:Math.random()*6+3,rotationSpeed:{x:(Math.random()-.5)*.003,y:(Math.random()-.5)*.003,z:(Math.random()-.5)*.003},hoverOffset:Math.random()*Math.PI*2,driftSpeed:Math.random()*5e-4+3e-4,pulseSpeed:Math.random()*.002+.001,pulseAmplitude:Math.random()*.08+.04},w.castShadow=!0,w.receiveShadow=!0,_.push(w),i.add(w)}s.position.z=25;let x=0,b=0,y=0,A=0;const D=8e-4,M=N=>{y=(N.clientX-window.innerWidth/2)*D,A=(N.clientY-window.innerHeight/2)*D};document.addEventListener("mousemove",M);const v=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",v);const I=()=>{_.forEach((N,O)=>{const Q=N.scale.x;N.scale.setScalar(Q*1.2),setTimeout(()=>{N.scale.setScalar(Q)},200),N.material.color.setHSL(.6,.8,.5),setTimeout(()=>{N.material.color.setHSL(.1,.3,.2)},100)})};document.addEventListener("click",I);const L=new Wy;let F;const j=()=>{F=requestAnimationFrame(j);const N=L.getElapsedTime();x+=(y-x)*.02,b+=(A-b)*.02,s.rotation.x=-b*.6,s.rotation.y=-x*.6,s.position.x=Math.sin(N*.05)*1+x*10,s.position.y=Math.cos(N*.03)*.5+b*10,_.forEach((O,Q)=>{const C=O.userData,w=O.material,k=Math.sin(N*C.floatSpeed+C.hoverOffset)*C.floatAmplitude,te=Math.cos(N*C.floatSpeed*.7+C.hoverOffset)*C.floatAmplitude*.3,le=Math.sin(N*C.floatSpeed*.5+C.hoverOffset)*C.floatAmplitude*.2;O.position.y=C.baseY+k,O.position.x=C.baseX+te,O.position.z=C.baseZ+le,O.position.x+=Math.sin(N*C.driftSpeed)*.05,O.position.z+=Math.cos(N*C.driftSpeed*.8)*.03,O.rotation.x+=C.rotationSpeed.x,O.rotation.y+=C.rotationSpeed.y,O.rotation.z+=C.rotationSpeed.z,O.rotation.x+=b*.02,O.rotation.y+=x*.02;const pe=Math.sin(N*C.pulseSpeed+Q)*C.pulseAmplitude+1;O.scale.setScalar(pe);const de=(Math.sin(N*.1+Q*.5)+1)*.1;w.color.setHSL(.1+de,.3,.2)}),l.render(i,s)};return j(),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("click",I),window.removeEventListener("resize",v),cancelAnimationFrame(F),t.removeChild(l.domElement),l.dispose()}},[]),S.jsx("div",{ref:o,id:"canvas-container",className:"fixed top-0 left-0 w-full h-full z-0 bg-black pointer-events-none"})},PE=()=>S.jsxs("div",{className:"glass-card rounded-sm overflow-hidden border-glow floating-object relative",children:[S.jsxs("div",{className:"px-4 py-2 border-b border-white/10 bg-black/40 flex items-center justify-between",children:[S.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-500",children:"neural_network.vis"}),S.jsxs("div",{className:"flex gap-1.5",children:[S.jsx("div",{className:"w-2 h-2 rounded-full border border-white/20"}),S.jsx("div",{className:"w-2 h-2 rounded-full border border-white/20"})]})]}),S.jsx("div",{className:"p-6 bg-black/80 font-mono text-sm overflow-x-auto",children:S.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[S.jsxs("div",{className:"flex flex-col items-center",children:[S.jsx("div",{className:"w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2",children:S.jsx("i",{className:"fa-solid fa-brain text-white/70"})}),S.jsx("span",{className:"text-xs text-gray-400",children:"Neural Networks"})]}),S.jsxs("div",{className:"flex flex-col items-center",children:[S.jsx("div",{className:"w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2",children:S.jsx("i",{className:"fa-solid fa-chart-line text-white/70"})}),S.jsx("span",{className:"text-xs text-gray-400",children:"Predictive Analytics"})]}),S.jsxs("div",{className:"flex flex-col items-center",children:[S.jsx("div",{className:"w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2",children:S.jsx("i",{className:"fa-solid fa-robot text-white/70"})}),S.jsx("span",{className:"text-xs text-gray-400",children:"Automation"})]})]})}),S.jsx("div",{className:"absolute -inset-4 border border-white/5 z-[-1] rounded-sm"})]}),zE=()=>{const[o,t]=_r.useState("home"),[i,s]=_r.useState(!1);_r.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o]);const l=c=>{t(c),s(!1)};return S.jsxs("div",{className:"antialiased text-white min-h-screen",children:[S.jsx(OE,{}),S.jsxs("nav",{className:"fixed w-full z-50 glass-panel",children:[S.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3 group cursor-pointer",onClick:()=>l("home"),children:[S.jsxs("div",{className:"relative w-8 h-8 flex items-center justify-center",children:[S.jsx("div",{className:"absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md"}),S.jsx("div",{className:"w-8 h-8 border border-white/20 bg-black rounded-full flex items-center justify-center relative z-10",children:S.jsx("div",{className:"w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"})})]}),S.jsx("span",{className:"font-bold text-lg tracking-[0.15em] uppercase",children:"Eclipse"})]}),S.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[["home","services","solutions","projects","about","team","downloads","contact"].map(c=>S.jsx("button",{onClick:()=>l(c),className:`text-xs font-medium uppercase tracking-widest transition-colors ${o===c?"text-white border-b-2 border-white":"text-gray-400 hover:text-white"}`,children:c},c)),S.jsxs("button",{onClick:()=>l("contact"),className:"flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors text-xs font-bold uppercase tracking-wider",children:[S.jsx("i",{className:"fa-solid fa-download"})," Get Started"]})]}),S.jsx("button",{className:"md:hidden text-white",onClick:()=>s(!i),children:S.jsx("i",{className:"fa-solid fa-bars"})})]}),i&&S.jsx("div",{className:"md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl absolute w-full",children:S.jsx("div",{className:"flex flex-col p-4 gap-4",children:["home","services","solutions","projects","about","team","downloads","contact"].map(c=>S.jsx("button",{onClick:()=>l(c),className:"text-sm text-left text-gray-300 uppercase tracking-widest",children:c},c))})})]}),S.jsxs("main",{children:[S.jsx("header",{className:`relative pt-40 pb-20 lg:pt-60 lg:pb-40 px-6 ${o==="home"?"block animate-slide-down":"hidden"}`,children:S.jsxs("div",{className:"max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center",children:[S.jsxs("div",{className:"relative z-10",children:[S.jsxs("div",{className:"inline-flex items-center gap-3 px-3 py-1 mb-8 border border-white/10 bg-white/5 rounded-full backdrop-blur-md",children:[S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"}),S.jsx("span",{className:"text-[10px] font-mono text-gray-400 uppercase tracking-widest",children:"Now Accepting New Clients"})]}),S.jsxs("h1",{className:"text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8",children:["Build ",S.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-800 text-glow",children:"Intelligence"}),"."]}),S.jsx("p",{className:"text-xl text-gray-400 font-light leading-relaxed max-w-lg mb-10 border-l border-white/20 pl-6",children:"Eclipse Softworks brings you cutting-edge AI solutions tailored to your business needs. We specialize in machine learning, data analytics, and custom software development."}),S.jsxs("div",{className:"flex gap-4 mb-10",children:[S.jsx("button",{onClick:()=>l("contact"),className:"px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider",children:"Start a Project"}),S.jsx("button",{onClick:()=>l("services"),className:"px-6 py-3 border border-white/30 hover:border-white transition-colors text-sm font-bold uppercase tracking-wider",children:"Our Services"})]}),S.jsxs("div",{className:"flex gap-6",children:[S.jsx("button",{onClick:()=>l("projects"),className:"text-sm font-bold uppercase tracking-widest border-b border-white hover:border-transparent transition-colors pb-1",children:"View Projects"}),S.jsx("button",{onClick:()=>l("downloads"),className:"text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors pb-1",children:"Downloads"})]})]}),S.jsx("div",{className:"relative z-10",children:S.jsx(PE,{})})]})}),o==="services"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Services"}),S.jsx("h2",{className:"text-4xl font-bold text-white",children:"What We Offer"})]}),S.jsx("p",{className:"text-gray-500 text-sm max-w-sm text-right",children:"Comprehensive AI development services from concept to deployment."})]}),S.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[S.jsxs("div",{className:"glass-card p-8 group",children:[S.jsx("i",{className:"fa-solid fa-code text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"}),S.jsx("h3",{className:"text-lg font-bold mb-3",children:"Custom AI Development"}),S.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Tailored AI solutions designed to solve your specific business challenges, from data processing to decision-making systems."})]}),S.jsxs("div",{className:"glass-card p-8 group",children:[S.jsx("i",{className:"fa-solid fa-server text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"}),S.jsx("h3",{className:"text-lg font-bold mb-3",children:"ML Infrastructure"}),S.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"End-to-end machine learning infrastructure setup, including data pipelines, model training, and deployment systems."})]}),S.jsxs("div",{className:"glass-card p-8 group",children:[S.jsx("i",{className:"fa-solid fa-chart-bar text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"}),S.jsx("h3",{className:"text-lg font-bold mb-3",children:"Data Analytics"}),S.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Transform your raw data into actionable insights with advanced analytics and visualization tools."})]}),S.jsx("div",{className:"glass-card p-8 group lg:col-span-2",children:S.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[S.jsxs("div",{className:"flex-1",children:[S.jsx("i",{className:"fa-solid fa-brain text-2xl mb-6 text-gray-300 group-hover:text-white transition-colors"}),S.jsx("h3",{className:"text-lg font-bold mb-3",children:"AI Consulting"}),S.jsx("p",{className:"text-sm text-gray-400 leading-relaxed mb-4",children:"Strategic guidance on implementing AI technologies, identifying opportunities, and building competitive advantages."}),S.jsx("button",{onClick:()=>l("contact"),className:"text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all",children:"Get Consultation"})]}),S.jsxs("div",{className:"flex-1 bg-black/50 border border-white/10 rounded p-4 font-mono text-xs text-gray-400",children:[S.jsxs("div",{className:"flex justify-between border-b border-white/5 pb-2 mb-2",children:[S.jsx("span",{children:"AI Readiness Assessment"}),S.jsx("span",{className:"text-green-500",children:"COMPLETE"})]}),S.jsxs("div",{className:"space-y-1",children:[S.jsxs("p",{children:[">"," Data infrastructure..."]}),S.jsxs("p",{children:[">"," Team capabilities..."]}),S.jsxs("p",{children:[">"," Implementation roadmap..."]}),S.jsxs("p",{className:"text-white",children:[">"," Ready for AI integration"]})]})]})]})}),S.jsxs("div",{className:"glass-card p-8 group flex flex-col justify-center text-center",children:[S.jsx("h3",{className:"text-3xl font-bold mb-2",children:"24/7"}),S.jsx("p",{className:"text-xs font-mono uppercase tracking-widest text-gray-500",children:"Support & Maintenance"})]})]})]})}),o==="downloads"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Downloads & Resources"}),S.jsx("h2",{className:"text-4xl font-bold text-white",children:"Our Development Tools"})]}),S.jsx("p",{className:"text-gray-500 text-sm max-w-sm text-right",children:"Cutting-edge tools to accelerate your development workflow"})]}),S.jsx("div",{className:"glass-card p-8 mb-12",children:S.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[S.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Coming Soon"}),S.jsx("p",{className:"text-gray-400 text-lg",children:"Our cutting-edge tools and applications are currently being prepared to accelerate your development workflow. Stay tuned for exciting releases!"})]})}),S.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-16",children:[S.jsxs("div",{className:"glass-card download-card p-8 group",children:[S.jsxs("div",{className:"flex items-center justify-between mb-6",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center",children:S.jsx("span",{className:"text-white font-bold text-xl",children:"U"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-xl font-bold",children:"Umbra Programming Language"}),S.jsx("p",{className:"text-sm text-gray-400",children:"v1.0.0"})]})]}),S.jsx("span",{className:"text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full",children:"Coming Soon"})]}),S.jsx("p",{className:"text-gray-400 mb-6",children:"A modern, high-performance programming language designed for system-level development with memory safety and concurrency built-in."}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{children:[S.jsx("h4",{className:"text-sm font-bold text-gray-300 mb-2",children:"Platforms"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:"Windows"}),S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:"Mac"}),S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:"Linux"})]})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-sm font-bold text-gray-300 mb-2",children:"File Size"}),S.jsx("p",{className:"text-sm text-gray-400",children:"TBD"})]}),S.jsxs("div",{className:"flex gap-3",children:[S.jsxs("button",{className:"flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2",children:[S.jsx("i",{className:"fa-solid fa-bell"}),"Get Notified"]}),S.jsx("button",{className:"px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded",children:S.jsx("i",{className:"fa-solid fa-info"})})]})]})]}),S.jsxs("div",{className:"glass-card download-card p-8 group",children:[S.jsxs("div",{className:"flex items-center justify-between mb-6",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-600 to-orange-600 rounded-lg flex items-center justify-center",children:S.jsx("span",{className:"text-white font-bold text-xl",children:"K"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-xl font-bold",children:"Kasi Meals"}),S.jsx("p",{className:"text-sm text-gray-400",children:"v1.0.0"})]})]}),S.jsx("span",{className:"text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full",children:"Coming Soon"})]}),S.jsx("p",{className:"text-gray-400 mb-6",children:"A comprehensive meal planning and delivery application connecting local communities with authentic South African cuisine."}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{children:[S.jsx("h4",{className:"text-sm font-bold text-gray-300 mb-2",children:"Platforms"}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:"Android"}),S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:"iOS"}),S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:"Web"})]})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-sm font-bold text-gray-300 mb-2",children:"File Size"}),S.jsx("p",{className:"text-sm text-gray-400",children:"TBD"})]}),S.jsxs("div",{className:"flex gap-3",children:[S.jsxs("button",{className:"flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded flex items-center justify-center gap-2",children:[S.jsx("i",{className:"fa-solid fa-bell"}),"Get Notified"]}),S.jsx("button",{className:"px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded",children:S.jsx("i",{className:"fa-solid fa-info"})})]})]})]})]}),S.jsx("div",{className:"glass-card p-8 text-center",children:S.jsxs("div",{className:"max-w-2xl mx-auto",children:[S.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Need Custom Solutions?"}),S.jsx("p",{className:"text-gray-400 mb-6",children:"While our tools are being prepared, we're ready to build custom solutions tailored to your unique requirements. Let's create something amazing together!"}),S.jsx("button",{onClick:()=>l("contact"),className:"inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider",children:"Request Custom Development"})]})})]})}),o==="solutions"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsx("div",{className:"mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4",children:S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Our Solutions"}),S.jsx("h2",{className:"text-4xl font-bold text-white",children:"Innovative approaches to solve your most complex challenges"})]})}),S.jsx("div",{className:"glass-card p-8 mb-16",children:S.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Why Choose Our Solutions?"}),S.jsx("p",{className:"text-gray-400 mb-6",children:"We combine cutting-edge technology with industry expertise to deliver results that matter."}),S.jsx("ul",{className:"space-y-4",children:["Proven track record across industries","Customized to your specific needs","Scalable and future-proof architectures","24/7 support and maintenance"].map((c,d)=>S.jsxs("li",{className:"flex items-start gap-3",children:[S.jsx("i",{className:"fa-solid fa-check text-green-500 mt-1"}),S.jsx("span",{className:"text-gray-300",children:c})]},d))}),S.jsx("button",{onClick:()=>l("contact"),className:"inline-block mt-6 px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider",children:"Request Consultation"})]}),S.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{icon:"fa-chart-line",title:"Data Analytics",desc:"Unlock insights from your data with our advanced analytics platform."},{icon:"fa-robot",title:"AI Integration",desc:"Implement cutting-edge AI solutions tailored to your business needs."},{icon:"fa-mobile-alt",title:"Mobile Development",desc:"Native and cross-platform mobile applications that deliver exceptional user experiences."},{icon:"fa-shield-alt",title:"Cybersecurity",desc:"Protect your digital assets with our comprehensive security solutions."}].map((c,d)=>S.jsxs("div",{className:"glass-card p-4 text-center",children:[S.jsx("i",{className:`fa-solid ${c.icon} text-3xl mb-3 text-gray-300`}),S.jsx("h4",{className:"font-bold mb-2",children:c.title}),S.jsx("p",{className:"text-xs text-gray-400 mb-3",children:c.desc}),S.jsx("button",{className:"text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all",children:"Learn more →"})]},d))})]})}),S.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[S.jsxs("div",{className:"glass-card p-6 group",children:[S.jsx("i",{className:"fa-solid fa-wifi text-2xl mb-4 text-gray-300 group-hover:text-white transition-colors"}),S.jsx("h3",{className:"text-lg font-bold mb-3",children:"IoT Development"}),S.jsx("p",{className:"text-sm text-gray-400 mb-4",children:"Build connected devices and smart systems for the modern world."}),S.jsx("button",{className:"text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all",children:"Learn more →"})]}),S.jsxs("div",{className:"glass-card p-6 group",children:[S.jsx("i",{className:"fa-solid fa-link text-2xl mb-4 text-gray-300 group-hover:text-white transition-colors"}),S.jsx("h3",{className:"text-lg font-bold mb-3",children:"Blockchain"}),S.jsx("p",{className:"text-sm text-gray-400 mb-4",children:"Leverage decentralized technology for transparent and secure transactions."}),S.jsx("button",{className:"text-xs font-bold uppercase tracking-wider border-b border-white/50 pb-0.5 hover:text-white hover:border-white transition-all",children:"Learn more →"})]})]}),S.jsxs("div",{className:"glass-card p-8 mt-12 text-center",children:[S.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Ready to transform your business?"}),S.jsx("p",{className:"text-gray-400 mb-6 max-w-2xl mx-auto",children:"Our team of experts is standing by to help you implement the perfect solution for your needs."}),S.jsx("button",{onClick:()=>l("contact"),className:"inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider",children:"Get Started Today"})]})]})}),o==="solutions"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down",children:S.jsx("div",{className:"max-w-7xl mx-auto",children:S.jsx("div",{className:"glass-card p-8",children:S.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"Empower Your Business with Eclipse Softworks"}),S.jsx("p",{className:"text-gray-400 text-lg mb-8",children:"We deliver innovative technology solutions that drive growth, enhance efficiency, and transform the way you do business."}),S.jsx("div",{className:"space-y-6",children:[{icon:"fa-chart-bar",title:"Advanced Analytics Solutions",desc:"Transform your data into actionable insights with our cutting-edge analytics platform."},{icon:"fa-brain",title:"AI-Powered Innovation",desc:"Leverage artificial intelligence to automate processes, enhance productivity, and unlock new opportunities."},{icon:"fa-code",title:"Custom Application Development",desc:"Build scalable, robust applications tailored to your specific business requirements."},{icon:"fa-user-check",title:"Exceptional User Experiences",desc:"Create memorable digital experiences that engage your customers and drive business success."}].map((c,d)=>S.jsxs("div",{className:"flex items-start gap-4",children:[S.jsx("i",{className:`fa-solid ${c.icon} text-xl text-gray-300 mt-1`}),S.jsxs("div",{children:[S.jsx("h3",{className:"font-bold mb-2",children:c.title}),S.jsx("p",{className:"text-gray-400 text-sm",children:c.desc})]})]},d))})]}),S.jsxs("div",{className:"glass-card p-8",children:[S.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Our Mission"}),S.jsx("p",{className:"text-gray-400 mb-6",children:"To deliver innovative technology solutions that empower businesses to achieve their goals, drive growth, and create lasting impact in their industries."}),S.jsx("button",{onClick:()=>l("about"),className:"inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider",children:"Join Our Mission"})]})]})})})}),o==="projects"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Portfolio"}),S.jsx("h2",{className:"text-4xl font-bold text-white",children:"Recent Projects"})]}),S.jsx("p",{className:"text-gray-500 text-sm max-w-sm text-right",children:"A selection of our recent AI implementations across various industries."})]}),S.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:"fa-industry",title:"Predictive Maintenance",desc:"AI system for manufacturing equipment failure prediction.",tags:["ML","IoT","Python"]},{icon:"fa-comments",title:"Customer Service AI",desc:"Natural language processing for automated customer support.",tags:["NLP","Chatbots","TensorFlow"]},{icon:"fa-chart-pie",title:"Financial Analytics",desc:"Risk assessment and market prediction models for finance sector.",tags:["Analytics","Forecasting","PyTorch"]}].map((c,d)=>S.jsxs("div",{className:"glass-card p-6 group",children:[S.jsx("div",{className:"h-48 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10",children:S.jsx("i",{className:`fa-solid ${c.icon} text-4xl text-gray-700`})}),S.jsx("h3",{className:"text-lg font-bold mb-2",children:c.title}),S.jsx("p",{className:"text-sm text-gray-400 mb-4",children:c.desc}),S.jsx("div",{className:"flex gap-2",children:c.tags.map(h=>S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:h},h))})]},d))})]})}),o==="about"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsx("div",{className:"mb-16 border-b border-white/10 pb-8",children:S.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[S.jsx("div",{className:"w-16 h-16 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]",children:S.jsx("div",{className:"w-14 h-14 bg-black rounded-full flex items-center justify-center",children:S.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})})}),S.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"About Eclipse Softworks"}),S.jsx("p",{className:"text-xl text-gray-400 leading-relaxed mb-10",children:"Building Africa's digital future through innovative software solutions, one line of code at a time."})]})}),S.jsx("div",{className:"grid md:grid-cols-3 gap-8 mb-20",children:[{icon:"fa-bullseye",title:"Our Mission",desc:"To empower businesses across Africa with reliable, scalable, and innovative digital solutions that drive measurable impact."},{icon:"fa-eye",title:"Our Vision",desc:"To become the leading software powerhouse born in Africa — a hub for engineering excellence, creativity, and global innovation."},{icon:"fa-heart",title:"Our Values",desc:"Integrity, quality, collaboration, and a relentless drive for excellence form the foundation of everything we build."}].map((c,d)=>S.jsxs("div",{className:"glass-card p-8 text-center",children:[S.jsx("i",{className:`fa-solid ${c.icon} text-2xl mb-4 text-gray-300`}),S.jsx("h3",{className:"text-xl font-bold mb-4",children:c.title}),S.jsx("p",{className:"text-gray-400",children:c.desc})]},d))}),S.jsx("div",{className:"glass-card p-8 mb-16",children:S.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-3xl font-bold mb-6",children:"Meet the Team"}),S.jsx("p",{className:"text-gray-400 leading-relaxed mb-6",children:"Behind every line of code is a team of passionate Africans who care deeply about building for Africa, in Africa. Our diverse team brings experience across engineering, design, data science, business strategy, and entrepreneurship."}),S.jsxs("blockquote",{className:"border-l-4 border-white/30 pl-6 py-2",children:[S.jsx("p",{className:"text-lg italic text-gray-300 mb-4",children:`"We're not just building software. We're building Africa's tomorrow."`}),S.jsx("cite",{className:"text-sm text-gray-500",children:"— The Eclipse Team"})]})]}),S.jsx("div",{className:"grid grid-cols-2 gap-4",children:[{val:"50+",label:"Projects Completed"},{val:"15+",label:"Team Members"},{val:"5+",label:"Years Experience"},{val:"100%",label:"Client Satisfaction"}].map((c,d)=>S.jsxs("div",{className:"text-center",children:[S.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-gray-700 to-black rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold",children:c.val}),S.jsx("p",{className:"text-xs text-gray-400",children:c.label})]},d))})]})}),S.jsxs("div",{className:"mb-16",children:[S.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Featured Projects"}),S.jsx("h3",{className:"text-2xl font-bold text-white",children:"Showcasing some of our most impactful projects"})]}),S.jsx("p",{className:"text-gray-500 text-sm max-w-sm",children:"Projects that demonstrate our expertise and commitment to innovation."})]}),S.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{icon:"fa-brain",title:"AI-Powered Analytics Platform",desc:"Advanced machine learning platform for business intelligence and predictive analytics.",tags:["Python","TensorFlow","React"],status:"Live",statusColor:"green"},{icon:"fa-mobile-alt",title:"Mobile Banking Solution",desc:"Secure and intuitive mobile banking application for African financial institutions.",tags:["React Native","Node.js","MongoDB"],status:"In Development",statusColor:"blue"},{icon:"fa-shopping-cart",title:"E-Commerce Platform",desc:"Scalable e-commerce solution tailored for African markets and payment systems.",tags:["Next.js","Stripe","PostgreSQL"],status:"Live",statusColor:"green"}].map((c,d)=>S.jsxs("div",{className:"glass-card p-6 group",children:[S.jsxs("div",{className:"h-48 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10 relative",children:[S.jsx("i",{className:`fa-solid ${c.icon} text-4xl text-gray-700`}),S.jsx("span",{className:`absolute top-3 right-3 text-xs px-2 py-1 bg-${c.statusColor}-500/20 text-${c.statusColor}-400 rounded-full`,children:c.status})]}),S.jsx("h3",{className:"text-lg font-bold mb-2",children:c.title}),S.jsx("p",{className:"text-sm text-gray-400 mb-4",children:c.desc}),S.jsx("div",{className:"flex gap-2",children:c.tags.map(h=>S.jsx("span",{className:"text-xs px-2 py-1 bg-white/10 rounded",children:h},h))})]},d))})]}),S.jsxs("div",{className:"mb-16",children:[S.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Downloads & Resources"}),S.jsx("h3",{className:"text-2xl font-bold text-white",children:"Tools to accelerate your projects"})]}),S.jsx("p",{className:"text-gray-500 text-sm max-w-sm",children:"Our development tools, documentation, and resources are currently being prepared."})]}),S.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{icon:"fa-cube",title:"Eclipse SDK",desc:"Complete software development kit for building applications with Eclipse Softworks tools.",meta:["Size: 45 MB","Version: v2.1.0"]},{icon:"fa-book",title:"API Documentation",desc:"Comprehensive documentation and examples for our REST API endpoints.",meta:["Size: PDF","Version: v1.8"]},{icon:"fa-mobile",title:"Mobile Templates",desc:"Ready-to-use mobile app templates and UI components for rapid development.",meta:["Size: 120 MB","Version: v1.5.2"]}].map((c,d)=>S.jsxs("div",{className:"glass-card p-6 group",children:[S.jsx("div",{className:"h-32 bg-gradient-to-br from-gray-900 to-black rounded mb-4 flex items-center justify-center border border-white/10",children:S.jsx("i",{className:`fa-solid ${c.icon} text-3xl text-gray-600`})}),S.jsxs("div",{className:"flex justify-between items-start mb-3",children:[S.jsx("h3",{className:"text-lg font-bold",children:c.title}),S.jsx("span",{className:"text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full",children:"Coming Soon"})]}),S.jsx("p",{className:"text-sm text-gray-400 mb-4",children:c.desc}),S.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mb-4",children:[S.jsx("span",{children:c.meta[0]}),S.jsx("span",{children:c.meta[1]})]}),S.jsx("button",{className:"w-full px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium rounded",children:"Get Notified"})]},d))})]}),S.jsx("div",{className:"glass-card p-8",children:S.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Why Choose Us"}),S.jsx("ul",{className:"space-y-4",children:[{title:"Local Insight",desc:"Deep understanding of African markets and user behavior."},{title:"Technical Expertise",desc:"Proficiency in cutting-edge tools and methodologies."},{title:"Collaboration",desc:"We work closely with our clients to bring their vision to life."},{title:"Scalability",desc:"Future-proof architecture designed to grow with your business."},{title:"Social Impact",desc:"We support initiatives that uplift underserved communities through digital tools and training."}].map((c,d)=>S.jsxs("li",{className:"flex items-start gap-3",children:[S.jsx("div",{className:"w-5 h-5 flex items-center justify-center rounded-full bg-green-500/10 mt-1",children:S.jsx("i",{className:"fa-solid fa-check text-xs text-green-500"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"font-bold mb-1",children:c.title}),S.jsx("p",{className:"text-sm text-gray-400",children:c.desc})]})]},d))})]}),S.jsxs("div",{className:"glass-card p-6 bg-gradient-to-br from-black to-gray-900",children:[S.jsx("h3",{className:"text-xl font-bold mb-4",children:"Ready to Build Something Amazing?"}),S.jsx("p",{className:"text-gray-400 mb-6",children:"Let's discuss how we can help bring your vision to life with cutting-edge technology solutions."}),S.jsx("button",{onClick:()=>l("contact"),className:"inline-block px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider",children:"Start Your Project Today"})]})]})})]})}),o==="team"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-zinc-900/20 to-black animate-slide-down",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Our Team"}),S.jsx("h2",{className:"text-4xl font-bold text-white",children:"Meet the Team"})]}),S.jsx("p",{className:"text-gray-500 text-sm max-w-sm text-right",children:"The talented individuals behind Eclipse Softworks"})]}),S.jsx("div",{className:"team-grid",children:[{initials:"MK",name:"Moon Khumalo",role:"Founder & CEO - AI Systems and Backend",desc:"Moon is the visionary founder and CEO of Eclipse Softworks, specializing in AI systems and backend infrastructure. He leads the team with innovation and purpose."},{initials:"PM",name:"Philani Makhoba",role:"COO & Front-End Developer",desc:"Philani serves as the COO of Eclipse Softworks. A skilled front-end developer, he brings structure and clarity to every project the team undertakes."},{initials:"TM",name:"Tshepiso Mokwena",role:"Full-Stack Dev (Front-End Focused)",desc:"Tshepiso is a passionate front-end developer and aspiring full-stack engineer, dedicated to creating impactful user experiences and scalable digital solutions."},{initials:"KM",name:"Karabo Makgala",role:"Security Engineer",desc:"Karabo is a security engineer focused on ensuring the safety, integrity, and privacy of all digital systems built by Eclipse Softworks."},{initials:"NK",name:"Neo Kganyile",role:"Pen Tester",desc:"Neo is an enthusiastic learner and aspiring penetration tester who brings curiosity and a security-first mindset to the team."},{initials:"SM",name:"Siphesihle Magudulela",role:"Front-End Developer",desc:"Siphesihle is a dedicated front-end developer with a keen eye for clean interfaces and intuitive user interactions."},{initials:"XB",name:"Xolani Buthelezi",role:"CTO & Technical Architect",desc:"Xolani is the Chief Technology Officer and Technical Architect, responsible for the overall technical strategy and system architecture."},{initials:"YN",name:"Yongama Nkosi",role:"Accountant",desc:"Yongama is a dedicated accountant who ensures Eclipse Softworks maintains financial accuracy and compliance while supporting strategic business decisions."},{initials:"SK",name:"Simphiwe Kubheka",role:"Accountant",desc:"Simphiwe is a meticulous accountant focused on financial planning and analysis, helping Eclipse Softworks achieve sustainable growth and profitability."},{initials:"NN",name:"Nkanyiso Ndlovu",role:"Systems Engineer & Coordinator",desc:"Nkanyiso is a systems engineer and coordinator who ensures seamless integration and coordination across all technical systems and team operations."}].map((c,d)=>S.jsxs("div",{className:"glass-card p-6 text-center",children:[S.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-gray-700 to-black rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl",children:c.initials}),S.jsx("h3",{className:"font-bold mb-1",children:c.name}),S.jsx("p",{className:"text-xs text-gray-500 mb-3",children:c.role}),S.jsx("p",{className:"text-sm text-gray-400",children:c.desc})]},d))})]})}),o==="contact"&&S.jsx("section",{className:"py-24 px-6 relative z-10 border-t border-white/10 animate-slide-down",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"mb-16 text-center",children:[S.jsx("span",{className:"text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block",children:"Contact"}),S.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Let's Talk"}),S.jsx("p",{className:"text-gray-500 text-lg max-w-lg mx-auto",children:"Have a project in mind or want to collaborate? We're just a message away."})]}),S.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[S.jsx("div",{className:"glass-card rounded-lg p-8",children:S.jsxs("form",{className:"space-y-6",onSubmit:c=>c.preventDefault(),children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Name"}),S.jsx("input",{type:"text",className:"w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors",placeholder:"Your Name"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Email"}),S.jsx("input",{type:"email",className:"w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors",placeholder:"you@example.com"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Message"}),S.jsx("textarea",{className:"w-full h-32 bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors",placeholder:"Your message..."})]}),S.jsx("button",{type:"submit",className:"w-full px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-sm font-bold uppercase tracking-wider",children:"Send Message"})]})}),S.jsxs("div",{className:"space-y-8",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-xl font-bold mb-4",children:"Contact Information"}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("i",{className:"fa-solid fa-envelope text-gray-400"}),S.jsx("span",{className:"text-gray-300",children:"info@eclipse-softworks.com"})]}),S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("i",{className:"fa-solid fa-phone text-gray-400"}),S.jsx("span",{className:"text-gray-300",children:"+27 (0) 82 079 1642"})]}),S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("i",{className:"fa-solid fa-location-dot text-gray-400"}),S.jsx("span",{className:"text-gray-300",children:"Sandton, Johannesburg, South Africa"})]})]})]}),S.jsxs("div",{className:"glass-card p-6",children:[S.jsx("h3",{className:"text-xl font-bold mb-4",children:"Eclipse Softworks"}),S.jsx("p",{className:"text-gray-400 mb-4",children:"Building Africa's digital future through innovative software solutions, one line of code at a time."}),S.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[S.jsxs("div",{children:[S.jsx("h4",{className:"font-bold text-sm mb-2",children:"Services"}),S.jsxs("ul",{className:"text-xs text-gray-400 space-y-1",children:[S.jsx("li",{children:"AI-Powered Solutions"}),S.jsx("li",{children:"Mobile App Development"}),S.jsx("li",{children:"Custom Software Engineering"}),S.jsx("li",{children:"DevOps & Automation"}),S.jsx("li",{children:"Consulting & Strategy"})]})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"font-bold text-sm mb-2",children:"Company"}),S.jsxs("ul",{className:"text-xs text-gray-400 space-y-1",children:[S.jsx("li",{children:"About Us"}),S.jsx("li",{children:"Products"}),S.jsx("li",{children:"Downloads"}),S.jsx("li",{children:"Contact Us"})]})]})]})]})]})]})]})}),S.jsxs("footer",{className:"border-t border-white/10 bg-black py-16 px-6 relative z-10",children:[S.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[S.jsx("div",{className:"w-6 h-6 border border-white/30 rounded-full flex items-center justify-center",children:S.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})}),S.jsx("span",{className:"font-bold tracking-widest uppercase text-sm",children:"Eclipse Softworks"})]}),S.jsx("p",{className:"text-gray-500 text-xs max-w-xs leading-relaxed",children:"Developing the infrastructure for the next generation of artificial intelligence."})]}),S.jsxs("div",{className:"flex gap-16",children:[S.jsxs("div",{children:[S.jsx("h4",{className:"text-white font-bold text-xs uppercase tracking-widest mb-4",children:"Services"}),S.jsxs("ul",{className:"space-y-3 text-sm text-gray-500",children:[S.jsx("li",{children:S.jsx("button",{onClick:()=>l("services"),className:"hover:text-white transition-colors",children:"AI Development"})}),S.jsx("li",{children:S.jsx("button",{onClick:()=>l("services"),className:"hover:text-white transition-colors",children:"ML Infrastructure"})}),S.jsx("li",{children:S.jsx("button",{onClick:()=>l("services"),className:"hover:text-white transition-colors",children:"Data Analytics"})}),S.jsx("li",{children:S.jsx("button",{onClick:()=>l("services"),className:"hover:text-white transition-colors",children:"Consulting"})})]})]}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-white font-bold text-xs uppercase tracking-widest mb-4",children:"Company"}),S.jsxs("ul",{className:"space-y-3 text-sm text-gray-500",children:[S.jsx("li",{children:S.jsx("button",{onClick:()=>l("about"),className:"hover:text-white transition-colors",children:"About"})}),S.jsx("li",{children:S.jsx("button",{onClick:()=>l("projects"),className:"hover:text-white transition-colors",children:"Projects"})}),S.jsx("li",{children:S.jsx("button",{onClick:()=>l("downloads"),className:"hover:text-white transition-colors",children:"Downloads"})}),S.jsx("li",{children:S.jsx("button",{onClick:()=>l("contact"),className:"hover:text-white transition-colors",children:"Contact"})})]})]})]})]}),S.jsxs("div",{className:"max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-gray-600 font-mono",children:[S.jsx("p",{children:"© 2025 Eclipse Softworks. All rights reserved."}),S.jsxs("div",{className:"flex gap-4",children:[S.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy Policy"}),S.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms of Service"}),S.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Cookie Policy"})]})]})]})]})]})},Kg=document.getElementById("root");if(!Kg)throw new Error("Could not find root element to mount to");const IE=db.createRoot(Kg);IE.render(S.jsx(ab.StrictMode,{children:S.jsx(zE,{})}));
