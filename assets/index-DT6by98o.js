(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function $E(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ud={exports:{}},Gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function eT(){if(kv)return Gl;kv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:s,type:a,key:c,ref:o!==void 0?o:null,props:l}}return Gl.Fragment=e,Gl.jsx=n,Gl.jsxs=n,Gl}var Xv;function tT(){return Xv||(Xv=1,Ud.exports=eT()),Ud.exports}var Te=tT(),Nd={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function nT(){if(qv)return lt;qv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function x(B,$,ve){this.props=B,this.context=$,this.refs=y,this.updater=ve||T}x.prototype.isReactComponent={},x.prototype.setState=function(B,$){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,$,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function D(){}D.prototype=x.prototype;function w(B,$,ve){this.props=B,this.context=$,this.refs=y,this.updater=ve||T}var R=w.prototype=new D;R.constructor=w,M(R,x.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function P(){}var L={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function b(B,$,ve){var Me=ve.ref;return{$$typeof:s,type:B,key:$,ref:Me!==void 0?Me:null,props:ve}}function N(B,$){return b(B.type,$,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function j(B){var $={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ve){return $[ve]})}var J=/\/+/g;function oe(B,$){return typeof B=="object"&&B!==null&&B.key!=null?j(""+B.key):$.toString(36)}function X(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function($){B.status==="pending"&&(B.status="fulfilled",B.value=$)},function($){B.status==="pending"&&(B.status="rejected",B.reason=$)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,$,ve,Me,De){var ie=typeof B;(ie==="undefined"||ie==="boolean")&&(B=null);var fe=!1;if(B===null)fe=!0;else switch(ie){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(B.$$typeof){case s:case e:fe=!0;break;case _:return fe=B._init,z(fe(B._payload),$,ve,Me,De)}}if(fe)return De=De(B),fe=Me===""?"."+oe(B,0):Me,O(De)?(ve="",fe!=null&&(ve=fe.replace(J,"$&/")+"/"),z(De,$,ve,"",function(He){return He})):De!=null&&(H(De)&&(De=N(De,ve+(De.key==null||B&&B.key===De.key?"":(""+De.key).replace(J,"$&/")+"/")+fe)),$.push(De)),1;fe=0;var Le=Me===""?".":Me+":";if(O(B))for(var Ue=0;Ue<B.length;Ue++)Me=B[Ue],ie=Le+oe(Me,Ue),fe+=z(Me,$,ve,ie,De);else if(Ue=S(B),typeof Ue=="function")for(B=Ue.call(B),Ue=0;!(Me=B.next()).done;)Me=Me.value,ie=Le+oe(Me,Ue++),fe+=z(Me,$,ve,ie,De);else if(ie==="object"){if(typeof B.then=="function")return z(X(B),$,ve,Me,De);throw $=String(B),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return fe}function G(B,$,ve){if(B==null)return B;var Me=[],De=0;return z(B,Me,"","",function(ie){return $.call(ve,ie,De++)}),Me}function q(B){if(B._status===-1){var $=B._result;$=$(),$.then(function(ve){(B._status===0||B._status===-1)&&(B._status=1,B._result=ve)},function(ve){(B._status===0||B._status===-1)&&(B._status=2,B._result=ve)}),B._status===-1&&(B._status=0,B._result=$)}if(B._status===1)return B._result.default;throw B._result}var ce=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},_e={map:G,forEach:function(B,$,ve){G(B,function(){$.apply(this,arguments)},ve)},count:function(B){var $=0;return G(B,function(){$++}),$},toArray:function(B){return G(B,function($){return $})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return lt.Activity=g,lt.Children=_e,lt.Component=x,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=w,lt.StrictMode=a,lt.Suspense=p,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,lt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return L.H.useMemoCache(B)}},lt.cache=function(B){return function(){return B.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(B,$,ve){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Me=M({},B.props),De=B.key;if($!=null)for(ie in $.key!==void 0&&(De=""+$.key),$)!F.call($,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&$.ref===void 0||(Me[ie]=$[ie]);var ie=arguments.length-2;if(ie===1)Me.children=ve;else if(1<ie){for(var fe=Array(ie),Le=0;Le<ie;Le++)fe[Le]=arguments[Le+2];Me.children=fe}return b(B.type,De,Me)},lt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},lt.createElement=function(B,$,ve){var Me,De={},ie=null;if($!=null)for(Me in $.key!==void 0&&(ie=""+$.key),$)F.call($,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(De[Me]=$[Me]);var fe=arguments.length-2;if(fe===1)De.children=ve;else if(1<fe){for(var Le=Array(fe),Ue=0;Ue<fe;Ue++)Le[Ue]=arguments[Ue+2];De.children=Le}if(B&&B.defaultProps)for(Me in fe=B.defaultProps,fe)De[Me]===void 0&&(De[Me]=fe[Me]);return b(B,ie,De)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(B){return{$$typeof:f,render:B}},lt.isValidElement=H,lt.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:q}},lt.memo=function(B,$){return{$$typeof:d,type:B,compare:$===void 0?null:$}},lt.startTransition=function(B){var $=L.T,ve={};L.T=ve;try{var Me=B(),De=L.S;De!==null&&De(ve,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(P,ce)}catch(ie){ce(ie)}finally{$!==null&&ve.types!==null&&($.types=ve.types),L.T=$}},lt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},lt.use=function(B){return L.H.use(B)},lt.useActionState=function(B,$,ve){return L.H.useActionState(B,$,ve)},lt.useCallback=function(B,$){return L.H.useCallback(B,$)},lt.useContext=function(B){return L.H.useContext(B)},lt.useDebugValue=function(){},lt.useDeferredValue=function(B,$){return L.H.useDeferredValue(B,$)},lt.useEffect=function(B,$){return L.H.useEffect(B,$)},lt.useEffectEvent=function(B){return L.H.useEffectEvent(B)},lt.useId=function(){return L.H.useId()},lt.useImperativeHandle=function(B,$,ve){return L.H.useImperativeHandle(B,$,ve)},lt.useInsertionEffect=function(B,$){return L.H.useInsertionEffect(B,$)},lt.useLayoutEffect=function(B,$){return L.H.useLayoutEffect(B,$)},lt.useMemo=function(B,$){return L.H.useMemo(B,$)},lt.useOptimistic=function(B,$){return L.H.useOptimistic(B,$)},lt.useReducer=function(B,$,ve){return L.H.useReducer(B,$,ve)},lt.useRef=function(B){return L.H.useRef(B)},lt.useState=function(B){return L.H.useState(B)},lt.useSyncExternalStore=function(B,$,ve){return L.H.useSyncExternalStore(B,$,ve)},lt.useTransition=function(){return L.H.useTransition()},lt.version="19.2.0",lt}var Wv;function Lm(){return Wv||(Wv=1,Nd.exports=nT()),Nd.exports}var ct=Lm();const iT=$E(ct);var Ld={exports:{}},Vl={},Od={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function aT(){return Yv||(Yv=1,(function(s){function e(z,G){var q=z.length;z.push(G);e:for(;0<q;){var ce=q-1>>>1,_e=z[ce];if(0<o(_e,G))z[ce]=G,z[q]=_e,q=ce;else break e}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var G=z[0],q=z.pop();if(q!==G){z[0]=q;e:for(var ce=0,_e=z.length,B=_e>>>1;ce<B;){var $=2*(ce+1)-1,ve=z[$],Me=$+1,De=z[Me];if(0>o(ve,q))Me<_e&&0>o(De,ve)?(z[ce]=De,z[Me]=q,ce=Me):(z[ce]=ve,z[$]=q,ce=$);else if(Me<_e&&0>o(De,q))z[ce]=De,z[Me]=q,ce=Me;else break e}}return G}function o(z,G){var q=z.sortIndex-G.sortIndex;return q!==0?q:z.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,S=!1,T=!1,M=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function R(z){for(var G=n(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=z)a(d),G.sortIndex=G.expirationTime,e(p,G);else break;G=n(d)}}function O(z){if(M=!1,R(z),!T)if(n(p)!==null)T=!0,P||(P=!0,j());else{var G=n(d);G!==null&&X(O,G.startTime-z)}}var P=!1,L=-1,F=5,b=-1;function N(){return y?!0:!(s.unstable_now()-b<F)}function H(){if(y=!1,P){var z=s.unstable_now();b=z;var G=!0;try{e:{T=!1,M&&(M=!1,D(L),L=-1),S=!0;var q=v;try{t:{for(R(z),g=n(p);g!==null&&!(g.expirationTime>z&&N());){var ce=g.callback;if(typeof ce=="function"){g.callback=null,v=g.priorityLevel;var _e=ce(g.expirationTime<=z);if(z=s.unstable_now(),typeof _e=="function"){g.callback=_e,R(z),G=!0;break t}g===n(p)&&a(p),R(z)}else a(p);g=n(p)}if(g!==null)G=!0;else{var B=n(d);B!==null&&X(O,B.startTime-z),G=!1}}break e}finally{g=null,v=q,S=!1}G=void 0}}finally{G?j():P=!1}}}var j;if(typeof w=="function")j=function(){w(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,oe=J.port2;J.port1.onmessage=H,j=function(){oe.postMessage(null)}}else j=function(){x(H,0)};function X(z,G){L=x(function(){z(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var q=v;v=G;try{return z()}finally{v=q}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=v;v=z;try{return G()}finally{v=q}},s.unstable_scheduleCallback=function(z,G,q){var ce=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ce+q:ce):q=ce,z){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=q+_e,z={id:_++,callback:G,priorityLevel:z,startTime:q,expirationTime:_e,sortIndex:-1},q>ce?(z.sortIndex=q,e(d,z),n(p)===null&&z===n(d)&&(M?(D(L),L=-1):M=!0,X(O,q-ce))):(z.sortIndex=_e,e(p,z),T||S||(T=!0,P||(P=!0,j()))),z},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(z){var G=v;return function(){var q=v;v=G;try{return z.apply(this,arguments)}finally{v=q}}}})(Pd)),Pd}var jv;function rT(){return jv||(jv=1,Od.exports=aT()),Od.exports}var zd={exports:{}},kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function sT(){if(Zv)return kn;Zv=1;var s=Lm();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,kn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(p,d,null,_)},kn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},kn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},kn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},kn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},kn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},kn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},kn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},kn.requestFormReset=function(p){a.d.r(p)},kn.unstable_batchedUpdates=function(p,d){return p(d)},kn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},kn.version="19.2.0",kn}var Kv;function oT(){if(Kv)return zd.exports;Kv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zd.exports=sT(),zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function lT(){if(Qv)return Vl;Qv=1;var s=rT(),e=Lm(),n=oT();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function l(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(l(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=l(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,u=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),t;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==u.return)r=h,u=m;else{for(var E=!1,C=h.child;C;){if(C===r){E=!0,r=h,u=m;break}if(C===u){E=!0,u=h,r=m;break}C=C.sibling}if(!E){for(C=m.child;C;){if(C===r){E=!0,r=m,u=h;break}if(C===u){E=!0,u=m,r=h;break}C=C.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),w=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var J=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===J?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case b:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case w:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case R:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return i=t.displayName||null,i!==null?i:oe(t.type)||"Memo";case F:i=t._payload,t=t._init;try{return oe(t(i))}catch{}}return null}var X=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ce=[],_e=-1;function B(t){return{current:t}}function $(t){0>_e||(t.current=ce[_e],ce[_e]=null,_e--)}function ve(t,i){_e++,ce[_e]=t.current,t.current=i}var Me=B(null),De=B(null),ie=B(null),fe=B(null);function Le(t,i){switch(ve(ie,i),ve(De,t),ve(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?hv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=hv(i),t=dv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Me),ve(Me,t)}function Ue(){$(Me),$(De),$(ie)}function He(t){t.memoizedState!==null&&ve(fe,t);var i=Me.current,r=dv(i,t.type);i!==r&&(ve(De,t),ve(Me,r))}function st(t){De.current===t&&($(Me),$(De)),fe.current===t&&($(fe),Bl._currentValue=q)}var nn,k;function Rt(t){if(nn===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);nn=i&&i[1]||"",k=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+t+k}var nt=!1;function $e(t,i){if(!t||nt)return"";nt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var ae=le}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(le){ae=le}t.call(ge.prototype)}}else{try{throw Error()}catch(le){ae=le}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],C=m[1];if(E&&C){var V=E.split(`
`),te=C.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<te.length&&!te[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===te.length)for(u=V.length-1,h=te.length-1;1<=u&&0<=h&&V[u]!==te[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==te[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==te[h]){var de=`
`+V[u].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=u&&0<=h);break}}}finally{nt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Rt(r):""}function Re(t,i){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==i&&i!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return $e(t.type,!1);case 11:return $e(t.type.render,!1);case 1:return $e(t.type,!0);case 31:return Rt("Activity");default:return""}}function rt(t){try{var i="",r=null;do i+=Re(t,r),r=t,t=t.return;while(t);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Be=Object.prototype.hasOwnProperty,et=s.unstable_scheduleCallback,Zt=s.unstable_cancelCallback,Qt=s.unstable_shouldYield,I=s.unstable_requestPaint,A=s.unstable_now,ne=s.unstable_getCurrentPriorityLevel,pe=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,Ze=s.unstable_LowPriority,Ce=s.unstable_IdlePriority,Ye=s.log,je=s.unstable_setDisableYieldValue,be=null,we=null;function Ke(t){if(typeof Ye=="function"&&je(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(be,t)}catch{}}var Fe=Math.clz32?Math.clz32:Y,Oe=Math.log,ut=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Oe(t)/ut|0)|0}var Ae=256,Ne=262144,Ge=4194304;function Ee(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,r){var u=t.pendingLanes;if(u===0)return 0;var h=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var C=u&134217727;return C!==0?(u=C&~m,u!==0?h=Ee(u):(E&=C,E!==0?h=Ee(E):r||(r=C&~t,r!==0&&(h=Ee(r))))):(C=u&~m,C!==0?h=Ee(C):E!==0?h=Ee(E):r||(r=u&~t,r!==0&&(h=Ee(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Ve(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ot(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function Ct(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Zn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ui(t,i,r,u,h,m){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,te=t.hiddenUpdates;for(r=E&~r;0<r;){var de=31-Fe(r),ge=1<<de;C[de]=0,V[de]=-1;var ae=te[de];if(ae!==null)for(te[de]=null,de=0;de<ae.length;de++){var le=ae[de];le!==null&&(le.lane&=-536870913)}r&=~ge}u!==0&&Qo(t,u,0),m!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function Qo(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var u=31-Fe(i);t.entangledLanes|=i,t.entanglements[u]=t.entanglements[u]|1073741824|r&261930}function ra(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var u=31-Fe(r),h=1<<u;h&i|t[u]&i&&(t[u]|=i),r&=~h}}function Us(t,i){var r=i&-i;return r=(r&42)!==0?1:Ns(r),(r&(t.suspendedLanes|i))!==0?0:r}function Ns(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ls(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:zv(t.type))}function Jo(t,i){var r=G.p;try{return G.p=t,i()}finally{G.p=r}}var hi=Math.random().toString(36).slice(2),mn="__reactFiber$"+hi,On="__reactProps$"+hi,Qa="__reactContainer$"+hi,$o="__reactEvents$"+hi,bf="__reactListeners$"+hi,Af="__reactHandles$"+hi,xu="__reactResources$"+hi,kr="__reactMarker$"+hi;function U(t){delete t[mn],delete t[On],delete t[$o],delete t[bf],delete t[Af]}function Z(t){var i=t[mn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Qa]||r[mn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Sv(t);t!==null;){if(r=t[mn])return r;t=Sv(t)}return i}t=r,r=t.parentNode}return null}function re(t){if(t=t[mn]||t[Qa]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function se(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Q(t){var i=t[xu];return i||(i=t[xu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Se(t){t[kr]=!0}var Pe=new Set,Xe={};function Ie(t,i){Qe(t,i),Qe(t+"Capture",i)}function Qe(t,i){for(Xe[t]=i,t=0;t<i.length;t++)Pe.add(i[t])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},mt={};function Pt(t){return Be.call(mt,t)?!0:Be.call(Je,t)?!1:at.test(t)?mt[t]=!0:(Je[t]=!0,!1)}function qt(t,i,r){if(Pt(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function zt(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function gt(t,i,r,u){if(u===null)t.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+u)}}function qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(t,i,r){var u=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){r=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:u.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pn(t){if(!t._valueTracker){var i=Kt(t)?"checked":"value";t._valueTracker=wt(t,i,""+t[i])}}function xa(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return t&&(u=Kt(t)?t.checked?"true":"false":t.value),t=u,t!==r?(i.setValue(t),!0):!1}function wn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xr=/[\n"\\]/g;function St(t){return t.replace(Xr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Vn(t,i,r,u,h,m,E,C){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+qe(i)):t.value!==""+qe(i)&&(t.value=""+qe(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?En(t,E,qe(i)):r!=null?En(t,E,qe(r)):u!=null&&t.removeAttribute("value"),h==null&&m!=null&&(t.defaultChecked=!!m),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+qe(C):t.removeAttribute("name")}function Kn(t,i,r,u,h,m,E,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Pn(t);return}r=r!=null?""+qe(r):"",i=i!=null?""+qe(i):r,C||i===t.value||(t.value=i),t.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,t.checked=C?t.checked:!!u,t.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Pn(t)}function En(t,i,r){i==="number"&&wn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function un(t,i,r,u){if(t=t.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<t.length;r++)h=i.hasOwnProperty("$"+t[r].value),t[r].selected!==h&&(t[r].selected=h),h&&u&&(t[r].defaultSelected=!0)}else{for(r=""+qe(r),i=null,h=0;h<t.length;h++){if(t[h].value===r){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Os(t,i,r){if(i!=null&&(i=""+qe(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+qe(r):""}function sa(t,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if(X(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=qe(i),t.defaultValue=r,u=t.textContent,u===r&&u!==""&&u!==null&&(t.value=u),Pn(t)}function Ps(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var jy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function u_(t,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":u?t.setProperty(i,r):typeof r!="number"||r===0||jy.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function c_(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?t.setProperty(u,""):u==="float"?t.cssFloat="":t[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&r[h]!==u&&u_(t,h,u)}else for(var m in i)i.hasOwnProperty(m)&&u_(t,m,i[m])}function Rf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ky=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Su(t){return Ky.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Sa(){}var Cf=null;function wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zs=null,Bs=null;function f_(t){var i=re(t);if(i&&(t=i.stateNode)){var r=t[On]||null;e:switch(t=i.stateNode,i.type){case"input":if(Vn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+St(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==t&&u.form===t.form){var h=u[On]||null;if(!h)throw Error(a(90));Vn(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===t.form&&xa(u)}break e;case"textarea":Os(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&un(t,!!r.multiple,i,!1)}}}var Df=!1;function h_(t,i,r){if(Df)return t(i,r);Df=!0;try{var u=t(i);return u}finally{if(Df=!1,(zs!==null||Bs!==null)&&(oc(),zs&&(i=zs,t=Bs,Bs=zs=null,f_(i),t)))for(i=0;i<t.length;i++)f_(t[i])}}function el(t,i){var r=t.stateNode;if(r===null)return null;var u=r[On]||null;if(u===null)return null;r=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(ya)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{Uf=!1}var Ja=null,Nf=null,yu=null;function d_(){if(yu)return yu;var t,i=Nf,r=i.length,u,h="value"in Ja?Ja.value:Ja.textContent,m=h.length;for(t=0;t<r&&i[t]===h[t];t++);var E=r-t;for(u=1;u<=E&&i[r-u]===h[m-u];u++);return yu=h.slice(t,1<u?1-u:void 0)}function Mu(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Eu(){return!0}function p_(){return!1}function ei(t){function i(r,u,h,m,E){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(r=t[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Eu:p_,this.isPropagationStopped=p_,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),i}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=ei(qr),nl=g({},qr,{view:0,detail:0}),Qy=ei(nl),Lf,Of,il,bu=g({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==il&&(il&&t.type==="mousemove"?(Lf=t.screenX-il.screenX,Of=t.screenY-il.screenY):Of=Lf=0,il=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Of}}),m_=ei(bu),Jy=g({},bu,{dataTransfer:0}),$y=ei(Jy),eM=g({},nl,{relatedTarget:0}),Pf=ei(eM),tM=g({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),nM=ei(tM),iM=g({},qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aM=ei(iM),rM=g({},qr,{data:0}),__=ei(rM),sM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=lM[t])?!!i[t]:!1}function zf(){return uM}var cM=g({},nl,{key:function(t){if(t.key){var i=sM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fM=ei(cM),hM=g({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=ei(hM),dM=g({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),pM=ei(dM),mM=g({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_M=ei(mM),gM=g({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vM=ei(gM),xM=g({},qr,{newState:0,oldState:0}),SM=ei(xM),yM=[9,13,27,32],Bf=ya&&"CompositionEvent"in window,al=null;ya&&"documentMode"in document&&(al=document.documentMode);var MM=ya&&"TextEvent"in window&&!al,v_=ya&&(!Bf||al&&8<al&&11>=al),x_=" ",S_=!1;function y_(t,i){switch(t){case"keyup":return yM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function EM(t,i){switch(t){case"compositionend":return M_(i);case"keypress":return i.which!==32?null:(S_=!0,x_);case"textInput":return t=i.data,t===x_&&S_?null:t;default:return null}}function TM(t,i){if(Is)return t==="compositionend"||!Bf&&y_(t,i)?(t=d_(),yu=Nf=Ja=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v_&&i.locale!=="ko"?null:i.data;default:return null}}var bM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E_(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!bM[t.type]:i==="textarea"}function T_(t,i,r,u){zs?Bs?Bs.push(u):Bs=[u]:zs=u,i=pc(i,"onChange"),0<i.length&&(r=new Tu("onChange","change",null,r,u),t.push({event:r,listeners:i}))}var rl=null,sl=null;function AM(t){sv(t,0)}function Au(t){var i=se(t);if(xa(i))return t}function b_(t,i){if(t==="change")return i}var A_=!1;if(ya){var If;if(ya){var Ff="oninput"in document;if(!Ff){var R_=document.createElement("div");R_.setAttribute("oninput","return;"),Ff=typeof R_.oninput=="function"}If=Ff}else If=!1;A_=If&&(!document.documentMode||9<document.documentMode)}function C_(){rl&&(rl.detachEvent("onpropertychange",w_),sl=rl=null)}function w_(t){if(t.propertyName==="value"&&Au(sl)){var i=[];T_(i,sl,t,wf(t)),h_(AM,i)}}function RM(t,i,r){t==="focusin"?(C_(),rl=i,sl=r,rl.attachEvent("onpropertychange",w_)):t==="focusout"&&C_()}function CM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(sl)}function wM(t,i){if(t==="click")return Au(i)}function DM(t,i){if(t==="input"||t==="change")return Au(i)}function UM(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var di=typeof Object.is=="function"?Object.is:UM;function ol(t,i){if(di(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!Be.call(i,h)||!di(t[h],i[h]))return!1}return!0}function D_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function U_(t,i){var r=D_(t);t=0;for(var u;r;){if(r.nodeType===3){if(u=t+r.textContent.length,t<=i&&u>=i)return{node:r,offset:i-t};t=u}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=D_(r)}}function N_(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?N_(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function L_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=wn(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=wn(t.document)}return i}function Hf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var NM=ya&&"documentMode"in document&&11>=document.documentMode,Fs=null,Gf=null,ll=null,Vf=!1;function O_(t,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vf||Fs==null||Fs!==wn(u)||(u=Fs,"selectionStart"in u&&Hf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ll&&ol(ll,u)||(ll=u,u=pc(Gf,"onSelect"),0<u.length&&(i=new Tu("onSelect","select",null,i,r),t.push({event:i,listeners:u}),i.target=Fs)))}function Wr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Hs={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionrun:Wr("Transition","TransitionRun"),transitionstart:Wr("Transition","TransitionStart"),transitioncancel:Wr("Transition","TransitionCancel"),transitionend:Wr("Transition","TransitionEnd")},kf={},P_={};ya&&(P_=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Yr(t){if(kf[t])return kf[t];if(!Hs[t])return t;var i=Hs[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in P_)return kf[t]=i[r];return t}var z_=Yr("animationend"),B_=Yr("animationiteration"),I_=Yr("animationstart"),LM=Yr("transitionrun"),OM=Yr("transitionstart"),PM=Yr("transitioncancel"),F_=Yr("transitionend"),H_=new Map,Xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xf.push("scrollEnd");function ji(t,i){H_.set(t,i),Ie(i,[t])}var Ru=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ni=[],Gs=0,qf=0;function Cu(){for(var t=Gs,i=qf=Gs=0;i<t;){var r=Ni[i];Ni[i++]=null;var u=Ni[i];Ni[i++]=null;var h=Ni[i];Ni[i++]=null;var m=Ni[i];if(Ni[i++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&G_(r,h,m)}}function wu(t,i,r,u){Ni[Gs++]=t,Ni[Gs++]=i,Ni[Gs++]=r,Ni[Gs++]=u,qf|=u,t.lanes|=u,t=t.alternate,t!==null&&(t.lanes|=u)}function Wf(t,i,r,u){return wu(t,i,r,u),Du(t)}function jr(t,i){return wu(t,null,null,i),Du(t)}function G_(t,i,r){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r);for(var h=!1,m=t.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(h=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,h&&i!==null&&(h=31-Fe(r),t=m.hiddenUpdates,u=t[h],u===null?t[h]=[i]:u.push(i),i.lane=r|536870912),m):null}function Du(t){if(50<Dl)throw Dl=0,td=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Vs={};function zM(t,i,r,u){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,i,r,u){return new zM(t,i,r,u)}function Yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ma(t,i){var r=t.alternate;return r===null?(r=pi(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function V_(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Uu(t,i,r,u,h,m){var E=0;if(u=t,typeof t=="function")Yf(t)&&(E=1);else if(typeof t=="string")E=GE(t,r,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case b:return t=pi(31,r,i,h),t.elementType=b,t.lanes=m,t;case M:return Zr(r.children,h,m,i);case y:E=8,h|=24;break;case x:return t=pi(12,r,i,h|2),t.elementType=x,t.lanes=m,t;case O:return t=pi(13,r,i,h),t.elementType=O,t.lanes=m,t;case P:return t=pi(19,r,i,h),t.elementType=P,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:E=10;break e;case D:E=9;break e;case R:E=11;break e;case L:E=14;break e;case F:E=16,u=null;break e}E=29,r=Error(a(130,t===null?"null":typeof t,"")),u=null}return i=pi(E,r,i,h),i.elementType=t,i.type=u,i.lanes=m,i}function Zr(t,i,r,u){return t=pi(7,t,u,i),t.lanes=r,t}function jf(t,i,r){return t=pi(6,t,null,i),t.lanes=r,t}function k_(t){var i=pi(18,null,null,0);return i.stateNode=t,i}function Zf(t,i,r){return i=pi(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var X_=new WeakMap;function Li(t,i){if(typeof t=="object"&&t!==null){var r=X_.get(t);return r!==void 0?r:(i={value:t,source:i,stack:rt(i)},X_.set(t,i),i)}return{value:t,source:i,stack:rt(i)}}var ks=[],Xs=0,Nu=null,ul=0,Oi=[],Pi=0,$a=null,oa=1,la="";function Ea(t,i){ks[Xs++]=ul,ks[Xs++]=Nu,Nu=t,ul=i}function q_(t,i,r){Oi[Pi++]=oa,Oi[Pi++]=la,Oi[Pi++]=$a,$a=t;var u=oa;t=la;var h=32-Fe(u)-1;u&=~(1<<h),r+=1;var m=32-Fe(i)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,oa=1<<32-Fe(i)+h|r<<h|u,la=m+t}else oa=1<<m|r<<h|u,la=t}function Kf(t){t.return!==null&&(Ea(t,1),q_(t,1,0))}function Qf(t){for(;t===Nu;)Nu=ks[--Xs],ks[Xs]=null,ul=ks[--Xs],ks[Xs]=null;for(;t===$a;)$a=Oi[--Pi],Oi[Pi]=null,la=Oi[--Pi],Oi[Pi]=null,oa=Oi[--Pi],Oi[Pi]=null}function W_(t,i){Oi[Pi++]=oa,Oi[Pi++]=la,Oi[Pi++]=$a,oa=i.id,la=i.overflow,$a=t}var zn=null,Jt=null,Et=!1,er=null,zi=!1,Jf=Error(a(519));function tr(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(Li(i,t)),Jf}function Y_(t){var i=t.stateNode,r=t.type,u=t.memoizedProps;switch(i[mn]=t,i[On]=u,r){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Nl.length;r++)xt(Nl[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),Kn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),sa(i,u.value,u.defaultValue,u.children)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||cv(i.textContent,r)?(u.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),u.onScroll!=null&&xt("scroll",i),u.onScrollEnd!=null&&xt("scrollend",i),u.onClick!=null&&(i.onclick=Sa),i=!0):i=!1,i||tr(t,!0)}function j_(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:zn=zn.return}}function qs(t){if(t!==zn)return!1;if(!Et)return j_(t),Et=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||_d(t.type,t.memoizedProps)),r=!r),r&&Jt&&tr(t),j_(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=xv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=xv(t)}else i===27?(i=Jt,mr(t.type)?(t=yd,yd=null,Jt=t):Jt=i):Jt=zn?Ii(t.stateNode.nextSibling):null;return!0}function Kr(){Jt=zn=null,Et=!1}function $f(){var t=er;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),er=null),t}function cl(t){er===null?er=[t]:er.push(t)}var eh=B(null),Qr=null,Ta=null;function nr(t,i,r){ve(eh,i._currentValue),i._currentValue=r}function ba(t){t._currentValue=eh.current,$(eh)}function th(t,i,r){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===r)break;t=t.return}}function nh(t,i,r,u){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=h;for(var V=0;V<i.length;V++)if(C.context===i[V]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),th(m.return,r,t),u||(E=null);break e}m=C.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),th(E,r,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Ws(t,i,r,u){t=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var C=h.type;di(h.pendingProps.value,E.value)||(t!==null?t.push(C):t=[C])}}else if(h===fe.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Bl):t=[Bl])}h=h.return}t!==null&&nh(i,t,r,u),i.flags|=262144}function Lu(t){for(t=t.firstContext;t!==null;){if(!di(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Jr(t){Qr=t,Ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bn(t){return Z_(Qr,t)}function Ou(t,i){return Qr===null&&Jr(t),Z_(t,i)}function Z_(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ta===null){if(t===null)throw Error(a(308));Ta=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ta=Ta.next=i;return r}var BM=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,u){t.push(u)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},IM=s.unstable_scheduleCallback,FM=s.unstable_NormalPriority,_n={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ih(){return{controller:new BM,data:new Map,refCount:0}}function fl(t){t.refCount--,t.refCount===0&&IM(FM,function(){t.controller.abort()})}var hl=null,ah=0,Ys=0,js=null;function HM(t,i){if(hl===null){var r=hl=[];ah=0,Ys=od(),js={status:"pending",value:void 0,then:function(u){r.push(u)}}}return ah++,i.then(K_,K_),i}function K_(){if(--ah===0&&hl!==null){js!==null&&(js.status="fulfilled");var t=hl;hl=null,Ys=0,js=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function GM(t,i){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return t.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var Q_=z.S;z.S=function(t,i){O0=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&HM(t,i),Q_!==null&&Q_(t,i)};var $r=B(null);function rh(){var t=$r.current;return t!==null?t:Wt.pooledCache}function Pu(t,i){i===null?ve($r,$r.current):ve($r,i.pool)}function J_(){var t=rh();return t===null?null:{parent:_n._currentValue,pool:t}}var Zs=Error(a(460)),sh=Error(a(474)),zu=Error(a(542)),Bu={then:function(){}};function $_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function eg(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Sa,Sa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ng(t),t;default:if(typeof i.status=="string")i.then(Sa,Sa);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ng(t),t}throw ts=i,Zs}}function es(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ts=r,Zs):r}}var ts=null;function tg(){if(ts===null)throw Error(a(459));var t=ts;return ts=null,t}function ng(t){if(t===Zs||t===zu)throw Error(a(483))}var Ks=null,dl=0;function Iu(t){var i=dl;return dl+=1,Ks===null&&(Ks=[]),eg(Ks,t,i)}function pl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Fu(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ig(t){function i(K,W){if(t){var ee=K.deletions;ee===null?(K.deletions=[W],K.flags|=16):ee.push(W)}}function r(K,W){if(!t)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function u(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function h(K,W){return K=Ma(K,W),K.index=0,K.sibling=null,K}function m(K,W,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<W?(K.flags|=67108866,W):ee):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function E(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function C(K,W,ee,me){return W===null||W.tag!==6?(W=jf(ee,K.mode,me),W.return=K,W):(W=h(W,ee),W.return=K,W)}function V(K,W,ee,me){var tt=ee.type;return tt===M?de(K,W,ee.props.children,me,ee.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===F&&es(tt)===W.type)?(W=h(W,ee.props),pl(W,ee),W.return=K,W):(W=Uu(ee.type,ee.key,ee.props,null,K.mode,me),pl(W,ee),W.return=K,W)}function te(K,W,ee,me){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=Zf(ee,K.mode,me),W.return=K,W):(W=h(W,ee.children||[]),W.return=K,W)}function de(K,W,ee,me,tt){return W===null||W.tag!==7?(W=Zr(ee,K.mode,me,tt),W.return=K,W):(W=h(W,ee),W.return=K,W)}function ge(K,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=jf(""+W,K.mode,ee),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return ee=Uu(W.type,W.key,W.props,null,K.mode,ee),pl(ee,W),ee.return=K,ee;case T:return W=Zf(W,K.mode,ee),W.return=K,W;case F:return W=es(W),ge(K,W,ee)}if(X(W)||j(W))return W=Zr(W,K.mode,ee,null),W.return=K,W;if(typeof W.then=="function")return ge(K,Iu(W),ee);if(W.$$typeof===w)return ge(K,Ou(K,W),ee);Fu(K,W)}return null}function ae(K,W,ee,me){var tt=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return tt!==null?null:C(K,W,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===tt?V(K,W,ee,me):null;case T:return ee.key===tt?te(K,W,ee,me):null;case F:return ee=es(ee),ae(K,W,ee,me)}if(X(ee)||j(ee))return tt!==null?null:de(K,W,ee,me,null);if(typeof ee.then=="function")return ae(K,W,Iu(ee),me);if(ee.$$typeof===w)return ae(K,W,Ou(K,ee),me);Fu(K,ee)}return null}function le(K,W,ee,me,tt){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return K=K.get(ee)||null,C(W,K,""+me,tt);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case S:return K=K.get(me.key===null?ee:me.key)||null,V(W,K,me,tt);case T:return K=K.get(me.key===null?ee:me.key)||null,te(W,K,me,tt);case F:return me=es(me),le(K,W,ee,me,tt)}if(X(me)||j(me))return K=K.get(ee)||null,de(W,K,me,tt,null);if(typeof me.then=="function")return le(K,W,ee,Iu(me),tt);if(me.$$typeof===w)return le(K,W,ee,Ou(W,me),tt);Fu(W,me)}return null}function ke(K,W,ee,me){for(var tt=null,Dt=null,We=W,ht=W=0,Mt=null;We!==null&&ht<ee.length;ht++){We.index>ht?(Mt=We,We=null):Mt=We.sibling;var Ut=ae(K,We,ee[ht],me);if(Ut===null){We===null&&(We=Mt);break}t&&We&&Ut.alternate===null&&i(K,We),W=m(Ut,W,ht),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut,We=Mt}if(ht===ee.length)return r(K,We),Et&&Ea(K,ht),tt;if(We===null){for(;ht<ee.length;ht++)We=ge(K,ee[ht],me),We!==null&&(W=m(We,W,ht),Dt===null?tt=We:Dt.sibling=We,Dt=We);return Et&&Ea(K,ht),tt}for(We=u(We);ht<ee.length;ht++)Mt=le(We,K,ht,ee[ht],me),Mt!==null&&(t&&Mt.alternate!==null&&We.delete(Mt.key===null?ht:Mt.key),W=m(Mt,W,ht),Dt===null?tt=Mt:Dt.sibling=Mt,Dt=Mt);return t&&We.forEach(function(Sr){return i(K,Sr)}),Et&&Ea(K,ht),tt}function it(K,W,ee,me){if(ee==null)throw Error(a(151));for(var tt=null,Dt=null,We=W,ht=W=0,Mt=null,Ut=ee.next();We!==null&&!Ut.done;ht++,Ut=ee.next()){We.index>ht?(Mt=We,We=null):Mt=We.sibling;var Sr=ae(K,We,Ut.value,me);if(Sr===null){We===null&&(We=Mt);break}t&&We&&Sr.alternate===null&&i(K,We),W=m(Sr,W,ht),Dt===null?tt=Sr:Dt.sibling=Sr,Dt=Sr,We=Mt}if(Ut.done)return r(K,We),Et&&Ea(K,ht),tt;if(We===null){for(;!Ut.done;ht++,Ut=ee.next())Ut=ge(K,Ut.value,me),Ut!==null&&(W=m(Ut,W,ht),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return Et&&Ea(K,ht),tt}for(We=u(We);!Ut.done;ht++,Ut=ee.next())Ut=le(We,K,ht,Ut.value,me),Ut!==null&&(t&&Ut.alternate!==null&&We.delete(Ut.key===null?ht:Ut.key),W=m(Ut,W,ht),Dt===null?tt=Ut:Dt.sibling=Ut,Dt=Ut);return t&&We.forEach(function(JE){return i(K,JE)}),Et&&Ea(K,ht),tt}function kt(K,W,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===M&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var tt=ee.key;W!==null;){if(W.key===tt){if(tt=ee.type,tt===M){if(W.tag===7){r(K,W.sibling),me=h(W,ee.props.children),me.return=K,K=me;break e}}else if(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===F&&es(tt)===W.type){r(K,W.sibling),me=h(W,ee.props),pl(me,ee),me.return=K,K=me;break e}r(K,W);break}else i(K,W);W=W.sibling}ee.type===M?(me=Zr(ee.props.children,K.mode,me,ee.key),me.return=K,K=me):(me=Uu(ee.type,ee.key,ee.props,null,K.mode,me),pl(me,ee),me.return=K,K=me)}return E(K);case T:e:{for(tt=ee.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){r(K,W.sibling),me=h(W,ee.children||[]),me.return=K,K=me;break e}else{r(K,W);break}else i(K,W);W=W.sibling}me=Zf(ee,K.mode,me),me.return=K,K=me}return E(K);case F:return ee=es(ee),kt(K,W,ee,me)}if(X(ee))return ke(K,W,ee,me);if(j(ee)){if(tt=j(ee),typeof tt!="function")throw Error(a(150));return ee=tt.call(ee),it(K,W,ee,me)}if(typeof ee.then=="function")return kt(K,W,Iu(ee),me);if(ee.$$typeof===w)return kt(K,W,Ou(K,ee),me);Fu(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,W!==null&&W.tag===6?(r(K,W.sibling),me=h(W,ee),me.return=K,K=me):(r(K,W),me=jf(ee,K.mode,me),me.return=K,K=me),E(K)):r(K,W)}return function(K,W,ee,me){try{dl=0;var tt=kt(K,W,ee,me);return Ks=null,tt}catch(We){if(We===Zs||We===zu)throw We;var Dt=pi(29,We,null,K.mode);return Dt.lanes=me,Dt.return=K,Dt}finally{}}}var ns=ig(!0),ag=ig(!1),ir=!1;function oh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ar(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rr(t,i,r){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Du(t),G_(t,null,r),i}return wu(t,u,i,r),Du(t)}function ml(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var u=i.lanes;u&=t.pendingLanes,r|=u,i.lanes=r,ra(t,r)}}function uh(t,i){var r=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var ch=!1;function _l(){if(ch){var t=js;if(t!==null)throw t}}function gl(t,i,r,u){ch=!1;var h=t.updateQueue;ir=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var V=C,te=V.next;V.next=null,E===null?m=te:E.next=te,E=V;var de=t.alternate;de!==null&&(de=de.updateQueue,C=de.lastBaseUpdate,C!==E&&(C===null?de.firstBaseUpdate=te:C.next=te,de.lastBaseUpdate=V))}if(m!==null){var ge=h.baseState;E=0,de=te=V=null,C=m;do{var ae=C.lane&-536870913,le=ae!==C.lane;if(le?(yt&ae)===ae:(u&ae)===ae){ae!==0&&ae===Ys&&(ch=!0),de!==null&&(de=de.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var ke=t,it=C;ae=i;var kt=r;switch(it.tag){case 1:if(ke=it.payload,typeof ke=="function"){ge=ke.call(kt,ge,ae);break e}ge=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=it.payload,ae=typeof ke=="function"?ke.call(kt,ge,ae):ke,ae==null)break e;ge=g({},ge,ae);break e;case 2:ir=!0}}ae=C.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=h.callbacks,le===null?h.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:C.tag,payload:C.payload,callback:C.callback,next:null},de===null?(te=de=le,V=ge):de=de.next=le,E|=ae;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;le=C,C=le.next,le.next=null,h.lastBaseUpdate=le,h.shared.pending=null}}while(!0);de===null&&(V=ge),h.baseState=V,h.firstBaseUpdate=te,h.lastBaseUpdate=de,m===null&&(h.shared.lanes=0),cr|=E,t.lanes=E,t.memoizedState=ge}}function rg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function sg(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)rg(r[t],i)}var Qs=B(null),Hu=B(0);function og(t,i){t=Oa,ve(Hu,t),ve(Qs,i),Oa=t|i.baseLanes}function fh(){ve(Hu,Oa),ve(Qs,Qs.current)}function hh(){Oa=Hu.current,$(Qs),$(Hu)}var mi=B(null),Bi=null;function sr(t){var i=t.alternate;ve(cn,cn.current&1),ve(mi,t),Bi===null&&(i===null||Qs.current!==null||i.memoizedState!==null)&&(Bi=t)}function dh(t){ve(cn,cn.current),ve(mi,t),Bi===null&&(Bi=t)}function lg(t){t.tag===22?(ve(cn,cn.current),ve(mi,t),Bi===null&&(Bi=t)):or()}function or(){ve(cn,cn.current),ve(mi,mi.current)}function _i(t){$(mi),Bi===t&&(Bi=null),$(cn)}var cn=B(0);function Gu(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||xd(r)||Sd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Aa=0,ft=null,Gt=null,gn=null,Vu=!1,Js=!1,is=!1,ku=0,vl=0,$s=null,VM=0;function sn(){throw Error(a(321))}function ph(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!di(t[r],i[r]))return!1;return!0}function mh(t,i,r,u,h,m){return Aa=m,ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=t===null||t.memoizedState===null?qg:Dh,is=!1,m=r(u,h),is=!1,Js&&(m=cg(i,r,u,h)),ug(t),m}function ug(t){z.H=yl;var i=Gt!==null&&Gt.next!==null;if(Aa=0,gn=Gt=ft=null,Vu=!1,vl=0,$s=null,i)throw Error(a(300));t===null||vn||(t=t.dependencies,t!==null&&Lu(t)&&(vn=!0))}function cg(t,i,r,u){ft=t;var h=0;do{if(Js&&($s=null),vl=0,Js=!1,25<=h)throw Error(a(301));if(h+=1,gn=Gt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=Wg,m=i(r,u)}while(Js);return m}function kM(){var t=z.H,i=t.useState()[0];return i=typeof i.then=="function"?xl(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ft.flags|=1024),i}function _h(){var t=ku!==0;return ku=0,t}function gh(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function vh(t){if(Vu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Vu=!1}Aa=0,gn=Gt=ft=null,Js=!1,vl=ku=0,$s=null}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ft.memoizedState=gn=t:gn=gn.next=t,gn}function fn(){if(Gt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=gn===null?ft.memoizedState:gn.next;if(i!==null)gn=i,Gt=t;else{if(t===null)throw ft.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},gn===null?ft.memoizedState=gn=t:gn=gn.next=t}return gn}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xl(t){var i=vl;return vl+=1,$s===null&&($s=[]),t=eg($s,t,i),i=ft,(gn===null?i.memoizedState:gn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?qg:Dh),t}function qu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xl(t);if(t.$$typeof===w)return Bn(t)}throw Error(a(438,String(t)))}function xh(t){var i=null,r=ft.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=ft.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Xu(),ft.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),u=0;u<t;u++)r[u]=N;return i.index++,r}function Ra(t,i){return typeof i=="function"?i(t):i}function Wu(t){var i=fn();return Sh(i,Gt,t)}function Sh(t,i,r){var u=t.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var h=t.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,u.pending=null}if(m=t.baseState,h===null)t.memoizedState=m;else{i=h.next;var C=E=null,V=null,te=i,de=!1;do{var ge=te.lane&-536870913;if(ge!==te.lane?(yt&ge)===ge:(Aa&ge)===ge){var ae=te.revertLane;if(ae===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ge===Ys&&(de=!0);else if((Aa&ae)===ae){te=te.next,ae===Ys&&(de=!0);continue}else ge={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},V===null?(C=V=ge,E=m):V=V.next=ge,ft.lanes|=ae,cr|=ae;ge=te.action,is&&r(m,ge),m=te.hasEagerState?te.eagerState:r(m,ge)}else ae={lane:ge,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},V===null?(C=V=ae,E=m):V=V.next=ae,ft.lanes|=ge,cr|=ge;te=te.next}while(te!==null&&te!==i);if(V===null?E=m:V.next=C,!di(m,t.memoizedState)&&(vn=!0,de&&(r=js,r!==null)))throw r;t.memoizedState=m,t.baseState=E,t.baseQueue=V,u.lastRenderedState=m}return h===null&&(u.lanes=0),[t.memoizedState,u.dispatch]}function yh(t){var i=fn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var u=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var E=h=h.next;do m=t(m,E.action),E=E.next;while(E!==h);di(m,i.memoizedState)||(vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,u]}function fg(t,i,r){var u=ft,h=fn(),m=Et;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var E=!di((Gt||h).memoizedState,r);if(E&&(h.memoizedState=r,vn=!0),h=h.queue,Th(pg.bind(null,u,h,t),[t]),h.getSnapshot!==i||E||gn!==null&&gn.memoizedState.tag&1){if(u.flags|=2048,eo(9,{destroy:void 0},dg.bind(null,u,h,r,i),null),Wt===null)throw Error(a(349));m||(Aa&127)!==0||hg(u,i,r)}return r}function hg(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=ft.updateQueue,i===null?(i=Xu(),ft.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function dg(t,i,r,u){i.value=r,i.getSnapshot=u,mg(i)&&_g(t)}function pg(t,i,r){return r(function(){mg(i)&&_g(t)})}function mg(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!di(t,r)}catch{return!0}}function _g(t){var i=jr(t,2);i!==null&&ri(i,t,2)}function Mh(t){var i=Qn();if(typeof t=="function"){var r=t;if(t=r(),is){Ke(!0);try{r()}finally{Ke(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i}function gg(t,i,r,u){return t.baseState=r,Sh(t,Gt,typeof u=="function"?u:Ra)}function XM(t,i,r,u,h){if(Zu(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?r(!0):m.isTransition=!1,u(m),r=i.pending,r===null?(m.next=i.pending=m,vg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function vg(t,i){var r=i.action,u=i.payload,h=t.state;if(i.isTransition){var m=z.T,E={};z.T=E;try{var C=r(h,u),V=z.S;V!==null&&V(E,C),xg(t,i,C)}catch(te){Eh(t,i,te)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=r(h,u),xg(t,i,m)}catch(te){Eh(t,i,te)}}function xg(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){Sg(t,i,u)},function(u){return Eh(t,i,u)}):Sg(t,i,r)}function Sg(t,i,r){i.status="fulfilled",i.value=r,yg(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,vg(t,r)))}function Eh(t,i,r){var u=t.pending;if(t.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,yg(i),i=i.next;while(i!==u)}t.action=null}function yg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Mg(t,i){return i}function Eg(t,i){if(Et){var r=Wt.formState;if(r!==null){e:{var u=ft;if(Et){if(Jt){t:{for(var h=Jt,m=zi;h.nodeType!==8;){if(!m){h=null;break t}if(h=Ii(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Jt=Ii(h.nextSibling),u=h.data==="F!";break e}}tr(u)}u=!1}u&&(i=r[0])}}return r=Qn(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:i},r.queue=u,r=Vg.bind(null,ft,u),u.dispatch=r,u=Mh(!1),m=wh.bind(null,ft,!1,u.queue),u=Qn(),h={state:i,dispatch:null,action:t,pending:null},u.queue=h,r=XM.bind(null,ft,h,m,r),h.dispatch=r,u.memoizedState=t,[i,r,!1]}function Tg(t){var i=fn();return bg(i,Gt,t)}function bg(t,i,r){if(i=Sh(t,i,Mg)[0],t=Wu(Ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=xl(i)}catch(E){throw E===Zs?zu:E}else u=i;i=fn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(ft.flags|=2048,eo(9,{destroy:void 0},qM.bind(null,h,r),null)),[u,m,t]}function qM(t,i){t.action=i}function Ag(t){var i=fn(),r=Gt;if(r!==null)return bg(i,r,t);fn(),i=i.memoizedState,r=fn();var u=r.queue.dispatch;return r.memoizedState=t,[i,u,!1]}function eo(t,i,r,u){return t={tag:t,create:r,deps:u,inst:i,next:null},i=ft.updateQueue,i===null&&(i=Xu(),ft.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(u=r.next,r.next=t,t.next=u,i.lastEffect=t),t}function Rg(){return fn().memoizedState}function Yu(t,i,r,u){var h=Qn();ft.flags|=t,h.memoizedState=eo(1|i,{destroy:void 0},r,u===void 0?null:u)}function ju(t,i,r,u){var h=fn();u=u===void 0?null:u;var m=h.memoizedState.inst;Gt!==null&&u!==null&&ph(u,Gt.memoizedState.deps)?h.memoizedState=eo(i,m,r,u):(ft.flags|=t,h.memoizedState=eo(1|i,m,r,u))}function Cg(t,i){Yu(8390656,8,t,i)}function Th(t,i){ju(2048,8,t,i)}function WM(t){ft.flags|=4;var i=ft.updateQueue;if(i===null)i=Xu(),ft.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function wg(t){var i=fn().memoizedState;return WM({ref:i,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Dg(t,i){return ju(4,2,t,i)}function Ug(t,i){return ju(4,4,t,i)}function Ng(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Lg(t,i,r){r=r!=null?r.concat([t]):null,ju(4,4,Ng.bind(null,i,t),r)}function bh(){}function Og(t,i){var r=fn();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&ph(i,u[1])?u[0]:(r.memoizedState=[t,i],t)}function Pg(t,i){var r=fn();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&ph(i,u[1]))return u[0];if(u=t(),is){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[u,i],u}function Ah(t,i,r){return r===void 0||(Aa&1073741824)!==0&&(yt&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=z0(),ft.lanes|=t,cr|=t,r)}function zg(t,i,r,u){return di(r,i)?r:Qs.current!==null?(t=Ah(t,r,u),di(t,i)||(vn=!0),t):(Aa&42)===0||(Aa&1073741824)!==0&&(yt&261930)===0?(vn=!0,t.memoizedState=r):(t=z0(),ft.lanes|=t,cr|=t,i)}function Bg(t,i,r,u,h){var m=G.p;G.p=m!==0&&8>m?m:8;var E=z.T,C={};z.T=C,wh(t,!1,i,r);try{var V=h(),te=z.S;if(te!==null&&te(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=GM(V,u);Sl(t,i,de,xi(t))}else Sl(t,i,u,xi(t))}catch(ge){Sl(t,i,{then:function(){},status:"rejected",reason:ge},xi())}finally{G.p=m,E!==null&&C.types!==null&&(E.types=C.types),z.T=E}}function YM(){}function Rh(t,i,r,u){if(t.tag!==5)throw Error(a(476));var h=Ig(t).queue;Bg(t,h,i,q,r===null?YM:function(){return Fg(t),r(u)})}function Ig(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Fg(t){var i=Ig(t);i.next===null&&(i=t.alternate.memoizedState),Sl(t,i.next.queue,{},xi())}function Ch(){return Bn(Bl)}function Hg(){return fn().memoizedState}function Gg(){return fn().memoizedState}function jM(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=xi();t=ar(r);var u=rr(i,t,r);u!==null&&(ri(u,i,r),ml(u,i,r)),i={cache:ih()},t.payload=i;return}i=i.return}}function ZM(t,i,r){var u=xi();r={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Zu(t)?kg(i,r):(r=Wf(t,i,r,u),r!==null&&(ri(r,t,u),Xg(r,i,u)))}function Vg(t,i,r){var u=xi();Sl(t,i,r,u)}function Sl(t,i,r,u){var h={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Zu(t))kg(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,C=m(E,r);if(h.hasEagerState=!0,h.eagerState=C,di(C,E))return wu(t,i,h,0),Wt===null&&Cu(),!1}catch{}finally{}if(r=Wf(t,i,h,u),r!==null)return ri(r,t,u),Xg(r,i,u),!0}return!1}function wh(t,i,r,u){if(u={lane:2,revertLane:od(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Zu(t)){if(i)throw Error(a(479))}else i=Wf(t,r,u,2),i!==null&&ri(i,t,2)}function Zu(t){var i=t.alternate;return t===ft||i!==null&&i===ft}function kg(t,i){Js=Vu=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Xg(t,i,r){if((r&4194048)!==0){var u=i.lanes;u&=t.pendingLanes,r|=u,i.lanes=r,ra(t,r)}}var yl={readContext:Bn,use:qu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};yl.useEffectEvent=sn;var qg={readContext:Bn,use:qu,useCallback:function(t,i){return Qn().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:Cg,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Yu(4194308,4,Ng.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Yu(4194308,4,t,i)},useInsertionEffect:function(t,i){Yu(4,2,t,i)},useMemo:function(t,i){var r=Qn();i=i===void 0?null:i;var u=t();if(is){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[u,i],u},useReducer:function(t,i,r){var u=Qn();if(r!==void 0){var h=r(i);if(is){Ke(!0);try{r(i)}finally{Ke(!1)}}}else h=i;return u.memoizedState=u.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},u.queue=t,t=t.dispatch=ZM.bind(null,ft,t),[u.memoizedState,t]},useRef:function(t){var i=Qn();return t={current:t},i.memoizedState=t},useState:function(t){t=Mh(t);var i=t.queue,r=Vg.bind(null,ft,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:bh,useDeferredValue:function(t,i){var r=Qn();return Ah(r,t,i)},useTransition:function(){var t=Mh(!1);return t=Bg.bind(null,ft,t.queue,!0,!1),Qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var u=ft,h=Qn();if(Et){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Wt===null)throw Error(a(349));(yt&127)!==0||hg(u,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Cg(pg.bind(null,u,m,t),[t]),u.flags|=2048,eo(9,{destroy:void 0},dg.bind(null,u,m,r,i),null),r},useId:function(){var t=Qn(),i=Wt.identifierPrefix;if(Et){var r=la,u=oa;r=(u&~(1<<32-Fe(u)-1)).toString(32)+r,i="_"+i+"R_"+r,r=ku++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=VM++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Ch,useFormState:Eg,useActionState:Eg,useOptimistic:function(t){var i=Qn();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=wh.bind(null,ft,!0,r),r.dispatch=i,[t,i]},useMemoCache:xh,useCacheRefresh:function(){return Qn().memoizedState=jM.bind(null,ft)},useEffectEvent:function(t){var i=Qn(),r={impl:t};return i.memoizedState=r,function(){if((Ot&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Dh={readContext:Bn,use:qu,useCallback:Og,useContext:Bn,useEffect:Th,useImperativeHandle:Lg,useInsertionEffect:Dg,useLayoutEffect:Ug,useMemo:Pg,useReducer:Wu,useRef:Rg,useState:function(){return Wu(Ra)},useDebugValue:bh,useDeferredValue:function(t,i){var r=fn();return zg(r,Gt.memoizedState,t,i)},useTransition:function(){var t=Wu(Ra)[0],i=fn().memoizedState;return[typeof t=="boolean"?t:xl(t),i]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:Ch,useFormState:Tg,useActionState:Tg,useOptimistic:function(t,i){var r=fn();return gg(r,Gt,t,i)},useMemoCache:xh,useCacheRefresh:Gg};Dh.useEffectEvent=wg;var Wg={readContext:Bn,use:qu,useCallback:Og,useContext:Bn,useEffect:Th,useImperativeHandle:Lg,useInsertionEffect:Dg,useLayoutEffect:Ug,useMemo:Pg,useReducer:yh,useRef:Rg,useState:function(){return yh(Ra)},useDebugValue:bh,useDeferredValue:function(t,i){var r=fn();return Gt===null?Ah(r,t,i):zg(r,Gt.memoizedState,t,i)},useTransition:function(){var t=yh(Ra)[0],i=fn().memoizedState;return[typeof t=="boolean"?t:xl(t),i]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:Ch,useFormState:Ag,useActionState:Ag,useOptimistic:function(t,i){var r=fn();return Gt!==null?gg(r,Gt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:xh,useCacheRefresh:Gg};Wg.useEffectEvent=wg;function Uh(t,i,r,u){i=t.memoizedState,r=r(u,i),r=r==null?i:g({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Nh={enqueueSetState:function(t,i,r){t=t._reactInternals;var u=xi(),h=ar(u);h.payload=i,r!=null&&(h.callback=r),i=rr(t,h,u),i!==null&&(ri(i,t,u),ml(i,t,u))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var u=xi(),h=ar(u);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=rr(t,h,u),i!==null&&(ri(i,t,u),ml(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=xi(),u=ar(r);u.tag=2,i!=null&&(u.callback=i),i=rr(t,u,r),i!==null&&(ri(i,t,r),ml(i,t,r))}};function Yg(t,i,r,u,h,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!ol(r,u)||!ol(h,m):!0}function jg(t,i,r,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==t&&Nh.enqueueReplaceState(i,i.state,null)}function as(t,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(t=t.defaultProps){r===i&&(r=g({},r));for(var h in t)r[h]===void 0&&(r[h]=t[h])}return r}function Zg(t){Ru(t)}function Kg(t){console.error(t)}function Qg(t){Ru(t)}function Ku(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Jg(t,i,r){try{var u=t.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Lh(t,i,r){return r=ar(r),r.tag=3,r.payload={element:null},r.callback=function(){Ku(t,i)},r}function $g(t){return t=ar(t),t.tag=3,t}function e0(t,i,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;t.payload=function(){return h(m)},t.callback=function(){Jg(i,r,u)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Jg(i,r,u),typeof h!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var C=u.stack;this.componentDidCatch(u.value,{componentStack:C!==null?C:""})})}function KM(t,i,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&Ws(i,r,h,!0),r=mi.current,r!==null){switch(r.tag){case 31:case 13:return Bi===null?lc():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===Bu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),ad(t,u,h)),!1;case 22:return r.flags|=65536,u===Bu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),ad(t,u,h)),!1}throw Error(a(435,r.tag))}return ad(t,u,h),lc(),!1}if(Et)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Jf&&(t=Error(a(422),{cause:u}),cl(Li(t,r)))):(u!==Jf&&(i=Error(a(423),{cause:u}),cl(Li(i,r))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,u=Li(u,r),h=Lh(t.stateNode,u,h),uh(t,h),on!==4&&(on=2)),!1;var m=Error(a(520),{cause:u});if(m=Li(m,r),wl===null?wl=[m]:wl.push(m),on!==4&&(on=2),i===null)return!0;u=Li(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=h&-h,r.lanes|=t,t=Lh(r.stateNode,u,t),uh(r,t),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fr===null||!fr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=$g(h),e0(h,t,r,u),uh(r,h),!1}r=r.return}while(r!==null);return!1}var Oh=Error(a(461)),vn=!1;function In(t,i,r,u){i.child=t===null?ag(i,null,r,u):ns(i,t.child,r,u)}function t0(t,i,r,u,h){r=r.render;var m=i.ref;if("ref"in u){var E={};for(var C in u)C!=="ref"&&(E[C]=u[C])}else E=u;return Jr(i),u=mh(t,i,r,E,m,h),C=_h(),t!==null&&!vn?(gh(t,i,h),Ca(t,i,h)):(Et&&C&&Kf(i),i.flags|=1,In(t,i,u,h),i.child)}function n0(t,i,r,u,h){if(t===null){var m=r.type;return typeof m=="function"&&!Yf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,i0(t,i,m,u,h)):(t=Uu(r.type,null,u,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Vh(t,h)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:ol,r(E,u)&&t.ref===i.ref)return Ca(t,i,h)}return i.flags|=1,t=Ma(m,u),t.ref=i.ref,t.return=i,i.child=t}function i0(t,i,r,u,h){if(t!==null){var m=t.memoizedProps;if(ol(m,u)&&t.ref===i.ref)if(vn=!1,i.pendingProps=u=m,Vh(t,h))(t.flags&131072)!==0&&(vn=!0);else return i.lanes=t.lanes,Ca(t,i,h)}return Ph(t,i,r,u,h)}function a0(t,i,r,u){var h=u.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,t!==null){for(u=i.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return r0(t,i,m,r,u)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pu(i,m!==null?m.cachePool:null),m!==null?og(i,m):fh(),lg(i);else return u=i.lanes=536870912,r0(t,i,m!==null?m.baseLanes|r:r,r,u)}else m!==null?(Pu(i,m.cachePool),og(i,m),or(),i.memoizedState=null):(t!==null&&Pu(i,null),fh(),or());return In(t,i,h,r),i.child}function Ml(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function r0(t,i,r,u,h){var m=rh();return m=m===null?null:{parent:_n._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},t!==null&&Pu(i,null),fh(),lg(i),t!==null&&Ws(t,i,u,!0),i.childLanes=h,null}function Qu(t,i){return i=$u({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function s0(t,i,r){return ns(i,t.child,null,r),t=Qu(i,i.pendingProps),t.flags|=2,_i(i),i.memoizedState=null,t}function QM(t,i,r){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Et){if(u.mode==="hidden")return t=Qu(i,u),i.lanes=536870912,Ml(null,t);if(dh(i),(t=Jt)?(t=vv(t,zi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:$a!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},r=k_(t),r.return=i,i.child=r,zn=i,Jt=null)):t=null,t===null)throw tr(i);return i.lanes=536870912,null}return Qu(i,u)}var m=t.memoizedState;if(m!==null){var E=m.dehydrated;if(dh(i),h)if(i.flags&256)i.flags&=-257,i=s0(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(vn||Ws(t,i,r,!1),h=(r&t.childLanes)!==0,vn||h){if(u=Wt,u!==null&&(E=Us(u,r),E!==0&&E!==m.retryLane))throw m.retryLane=E,jr(t,E),ri(u,t,E),Oh;lc(),i=s0(t,i,r)}else t=m.treeContext,Jt=Ii(E.nextSibling),zn=i,Et=!0,er=null,zi=!1,t!==null&&W_(i,t),i=Qu(i,u),i.flags|=4096;return i}return t=Ma(t.child,{mode:u.mode,children:u.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Ju(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Ph(t,i,r,u,h){return Jr(i),r=mh(t,i,r,u,void 0,h),u=_h(),t!==null&&!vn?(gh(t,i,h),Ca(t,i,h)):(Et&&u&&Kf(i),i.flags|=1,In(t,i,r,h),i.child)}function o0(t,i,r,u,h,m){return Jr(i),i.updateQueue=null,r=cg(i,u,r,h),ug(t),u=_h(),t!==null&&!vn?(gh(t,i,m),Ca(t,i,m)):(Et&&u&&Kf(i),i.flags|=1,In(t,i,r,m),i.child)}function l0(t,i,r,u,h){if(Jr(i),i.stateNode===null){var m=Vs,E=r.contextType;typeof E=="object"&&E!==null&&(m=Bn(E)),m=new r(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Nh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},oh(i),E=r.contextType,m.context=typeof E=="object"&&E!==null?Bn(E):Vs,m.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Uh(i,r,E,u),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Nh.enqueueReplaceState(m,m.state,null),gl(i,u,m,h),_l(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(t===null){m=i.stateNode;var C=i.memoizedProps,V=as(r,C);m.props=V;var te=m.context,de=r.contextType;E=Vs,typeof de=="object"&&de!==null&&(E=Bn(de));var ge=r.getDerivedStateFromProps;de=typeof ge=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,de||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||te!==E)&&jg(i,m,u,E),ir=!1;var ae=i.memoizedState;m.state=ae,gl(i,u,m,h),_l(),te=i.memoizedState,C||ae!==te||ir?(typeof ge=="function"&&(Uh(i,r,ge,u),te=i.memoizedState),(V=ir||Yg(i,r,V,u,ae,te,E))?(de||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=te),m.props=u,m.state=te,m.context=E,u=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,lh(t,i),E=i.memoizedProps,de=as(r,E),m.props=de,ge=i.pendingProps,ae=m.context,te=r.contextType,V=Vs,typeof te=="object"&&te!==null&&(V=Bn(te)),C=r.getDerivedStateFromProps,(te=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==ge||ae!==V)&&jg(i,m,u,V),ir=!1,ae=i.memoizedState,m.state=ae,gl(i,u,m,h),_l();var le=i.memoizedState;E!==ge||ae!==le||ir||t!==null&&t.dependencies!==null&&Lu(t.dependencies)?(typeof C=="function"&&(Uh(i,r,C,u),le=i.memoizedState),(de=ir||Yg(i,r,de,u,ae,le,V)||t!==null&&t.dependencies!==null&&Lu(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,le,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,le,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=le),m.props=u,m.state=le,m.context=V,u=de):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),u=!1)}return m=u,Ju(t,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&u?(i.child=ns(i,t.child,null,h),i.child=ns(i,null,r,h)):In(t,i,r,h),i.memoizedState=m.state,t=i.child):t=Ca(t,i,h),t}function u0(t,i,r,u){return Kr(),i.flags|=256,In(t,i,r,u),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bh(t){return{baseLanes:t,cachePool:J_()}}function Ih(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=vi),t}function c0(t,i,r){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Et){if(h?sr(i):or(),(t=Jt)?(t=vv(t,zi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:$a!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},r=k_(t),r.return=i,i.child=r,zn=i,Jt=null)):t=null,t===null)throw tr(i);return Sd(t)?i.lanes=32:i.lanes=536870912,null}var C=u.children;return u=u.fallback,h?(or(),h=i.mode,C=$u({mode:"hidden",children:C},h),u=Zr(u,h,r,null),C.return=i,u.return=i,C.sibling=u,i.child=C,u=i.child,u.memoizedState=Bh(r),u.childLanes=Ih(t,E,r),i.memoizedState=zh,Ml(null,u)):(sr(i),Fh(i,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(m)i.flags&256?(sr(i),i.flags&=-257,i=Hh(t,i,r)):i.memoizedState!==null?(or(),i.child=t.child,i.flags|=128,i=null):(or(),C=u.fallback,h=i.mode,u=$u({mode:"visible",children:u.children},h),C=Zr(C,h,r,null),C.flags|=2,u.return=i,C.return=i,u.sibling=C,i.child=u,ns(i,t.child,null,r),u=i.child,u.memoizedState=Bh(r),u.childLanes=Ih(t,E,r),i.memoizedState=zh,i=Ml(null,u));else if(sr(i),Sd(C)){if(E=C.nextSibling&&C.nextSibling.dataset,E)var te=E.dgst;E=te,u=Error(a(419)),u.stack="",u.digest=E,cl({value:u,source:null,stack:null}),i=Hh(t,i,r)}else if(vn||Ws(t,i,r,!1),E=(r&t.childLanes)!==0,vn||E){if(E=Wt,E!==null&&(u=Us(E,r),u!==0&&u!==V.retryLane))throw V.retryLane=u,jr(t,u),ri(E,t,u),Oh;xd(C)||lc(),i=Hh(t,i,r)}else xd(C)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,Jt=Ii(C.nextSibling),zn=i,Et=!0,er=null,zi=!1,t!==null&&W_(i,t),i=Fh(i,u.children),i.flags|=4096);return i}return h?(or(),C=u.fallback,h=i.mode,V=t.child,te=V.sibling,u=Ma(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,te!==null?C=Ma(te,C):(C=Zr(C,h,r,null),C.flags|=2),C.return=i,u.return=i,u.sibling=C,i.child=u,Ml(null,u),u=i.child,C=t.child.memoizedState,C===null?C=Bh(r):(h=C.cachePool,h!==null?(V=_n._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=J_(),C={baseLanes:C.baseLanes|r,cachePool:h}),u.memoizedState=C,u.childLanes=Ih(t,E,r),i.memoizedState=zh,Ml(t.child,u)):(sr(i),r=t.child,t=r.sibling,r=Ma(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=r,i.memoizedState=null,r)}function Fh(t,i){return i=$u({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function $u(t,i){return t=pi(22,t,null,i),t.lanes=0,t}function Hh(t,i,r){return ns(i,t.child,null,r),t=Fh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function f0(t,i,r){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),th(t.return,i,r)}function Gh(t,i,r,u,h,m){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=r,E.tailMode=h,E.treeForkCount=m)}function h0(t,i,r){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var E=cn.current,C=(E&2)!==0;if(C?(E=E&1|2,i.flags|=128):E&=1,ve(cn,E),In(t,i,u,r),u=Et?ul:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f0(t,r,i);else if(t.tag===19)f0(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)t=r.alternate,t!==null&&Gu(t)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Gh(i,!1,h,r,m,u);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Gu(t)===null){i.child=h;break}t=h.sibling,h.sibling=r,r=h,h=t}Gh(i,!0,r,null,m,u);break;case"together":Gh(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Ca(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),cr|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(Ws(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=Ma(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Ma(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Vh(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Lu(t)))}function JM(t,i,r){switch(i.tag){case 3:Le(i,i.stateNode.containerInfo),nr(i,_n,t.memoizedState.cache),Kr();break;case 27:case 5:He(i);break;case 4:Le(i,i.stateNode.containerInfo);break;case 10:nr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,dh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(sr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?c0(t,i,r):(sr(i),t=Ca(t,i,r),t!==null?t.sibling:null);sr(i);break;case 19:var h=(t.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(Ws(t,i,r,!1),u=(r&i.childLanes)!==0),h){if(u)return h0(t,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ve(cn,cn.current),u)break;return null;case 22:return i.lanes=0,a0(t,i,r,i.pendingProps);case 24:nr(i,_n,t.memoizedState.cache)}return Ca(t,i,r)}function d0(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)vn=!0;else{if(!Vh(t,r)&&(i.flags&128)===0)return vn=!1,JM(t,i,r);vn=(t.flags&131072)!==0}else vn=!1,Et&&(i.flags&1048576)!==0&&q_(i,ul,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(t=es(i.elementType),i.type=t,typeof t=="function")Yf(t)?(u=as(t,u),i.tag=1,i=l0(null,i,t,u,r)):(i.tag=0,i=Ph(null,i,t,u,r));else{if(t!=null){var h=t.$$typeof;if(h===R){i.tag=11,i=t0(null,i,t,u,r);break e}else if(h===L){i.tag=14,i=n0(null,i,t,u,r);break e}}throw i=oe(t)||t,Error(a(306,i,""))}}return i;case 0:return Ph(t,i,i.type,i.pendingProps,r);case 1:return u=i.type,h=as(u,i.pendingProps),l0(t,i,u,h,r);case 3:e:{if(Le(i,i.stateNode.containerInfo),t===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,lh(t,i),gl(i,u,null,r);var E=i.memoizedState;if(u=E.cache,nr(i,_n,u),u!==m.cache&&nh(i,[_n],r,!0),_l(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=u0(t,i,u,r);break e}else if(u!==h){h=Li(Error(a(424)),i),cl(h),i=u0(t,i,u,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=Ii(t.firstChild),zn=i,Et=!0,er=null,zi=!0,r=ag(i,null,u,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Kr(),u===h){i=Ca(t,i,r);break e}In(t,i,u,r)}i=i.child}return i;case 26:return Ju(t,i),t===null?(r=Tv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Et||(r=i.type,t=i.pendingProps,u=mc(ie.current).createElement(r),u[mn]=i,u[On]=t,Fn(u,r,t),Se(u),i.stateNode=u):i.memoizedState=Tv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return He(i),t===null&&Et&&(u=i.stateNode=yv(i.type,i.pendingProps,ie.current),zn=i,zi=!0,h=Jt,mr(i.type)?(yd=h,Jt=Ii(u.firstChild)):Jt=h),In(t,i,i.pendingProps.children,r),Ju(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Et&&((h=u=Jt)&&(u=CE(u,i.type,i.pendingProps,zi),u!==null?(i.stateNode=u,zn=i,Jt=Ii(u.firstChild),zi=!1,h=!0):h=!1),h||tr(i)),He(i),h=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,u=m.children,_d(h,m)?u=null:E!==null&&_d(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=mh(t,i,kM,null,null,r),Bl._currentValue=h),Ju(t,i),In(t,i,u,r),i.child;case 6:return t===null&&Et&&((t=r=Jt)&&(r=wE(r,i.pendingProps,zi),r!==null?(i.stateNode=r,zn=i,Jt=null,t=!0):t=!1),t||tr(i)),null;case 13:return c0(t,i,r);case 4:return Le(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=ns(i,null,u,r):In(t,i,u,r),i.child;case 11:return t0(t,i,i.type,i.pendingProps,r);case 7:return In(t,i,i.pendingProps,r),i.child;case 8:return In(t,i,i.pendingProps.children,r),i.child;case 12:return In(t,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,nr(i,i.type,u.value),In(t,i,u.children,r),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Jr(i),h=Bn(h),u=u(h),i.flags|=1,In(t,i,u,r),i.child;case 14:return n0(t,i,i.type,i.pendingProps,r);case 15:return i0(t,i,i.type,i.pendingProps,r);case 19:return h0(t,i,r);case 31:return QM(t,i,r);case 22:return a0(t,i,r,i.pendingProps);case 24:return Jr(i),u=Bn(_n),t===null?(h=rh(),h===null&&(h=Wt,m=ih(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:u,cache:h},oh(i),nr(i,_n,h)):((t.lanes&r)!==0&&(lh(t,i),gl(i,null,null,r),_l()),h=t.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),nr(i,_n,u)):(u=m.cache,nr(i,_n,u),u!==h.cache&&nh(i,[_n],r,!0))),In(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function wa(t){t.flags|=4}function kh(t,i,r,u,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(H0())t.flags|=8192;else throw ts=Bu,sh}else t.flags&=-16777217}function p0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wv(i))if(H0())t.flags|=8192;else throw ts=Bu,sh}function ec(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?It():536870912,t.lanes|=i,ao|=i)}function El(t,i){if(!Et)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function $t(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,u=0;if(i)for(var h=t.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=r,i}function $M(t,i,r){var u=i.pendingProps;switch(Qf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return r=i.stateNode,u=null,t!==null&&(u=t.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),ba(_n),Ue(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(i)?wa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$f())),$t(i),null;case 26:var h=i.type,m=i.memoizedState;return t===null?(wa(i),m!==null?($t(i),p0(i,m)):($t(i),kh(i,h,null,u,r))):m?m!==t.memoizedState?(wa(i),$t(i),p0(i,m)):($t(i),i.flags&=-16777217):(t=t.memoizedProps,t!==u&&wa(i),$t(i),kh(i,h,t,u,r)),null;case 27:if(st(i),r=ie.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&wa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return $t(i),null}t=Me.current,qs(i)?Y_(i):(t=yv(h,u,r),i.stateNode=t,wa(i))}return $t(i),null;case 5:if(st(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==u&&wa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return $t(i),null}if(m=Me.current,qs(i))Y_(i);else{var E=mc(ie.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?E.createElement(h,{is:u.is}):E.createElement(h)}}m[mn]=i,m[On]=u;e:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break e;for(;E.sibling===null;){if(E.return===null||E.return===i)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;e:switch(Fn(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&wa(i)}}return $t(i),kh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==u&&wa(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(t=ie.current,qs(i)){if(t=i.stateNode,r=i.memoizedProps,u=null,h=zn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}t[mn]=i,t=!!(t.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||cv(t.nodeValue,r)),t||tr(i,!0)}else t=mc(t).createTextNode(u),t[mn]=i,i.stateNode=t}return $t(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(u=qs(i),r!==null){if(t===null){if(!u)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[mn]=i}else Kr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),t=!1}else r=$f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(_i(i),i):(_i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $t(i),null;case 13:if(u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=qs(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[mn]=i}else Kr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),h=!1}else h=$f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(_i(i),i):(_i(i),null)}return _i(i),(i.flags&128)!==0?(i.lanes=r,i):(r=u!==null,t=t!==null&&t.memoizedState!==null,r&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),ec(i,i.updateQueue),$t(i),null);case 4:return Ue(),t===null&&fd(i.stateNode.containerInfo),$t(i),null;case 10:return ba(i.type),$t(i),null;case 19:if($(cn),u=i.memoizedState,u===null)return $t(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)El(u,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Gu(t),m!==null){for(i.flags|=128,El(u,!1),t=m.updateQueue,i.updateQueue=t,ec(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)V_(r,t),r=r.sibling;return ve(cn,cn.current&1|2),Et&&Ea(i,u.treeForkCount),i.child}t=t.sibling}u.tail!==null&&A()>rc&&(i.flags|=128,h=!0,El(u,!1),i.lanes=4194304)}else{if(!h)if(t=Gu(m),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,ec(i,t),El(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Et)return $t(i),null}else 2*A()-u.renderingStartTime>rc&&r!==536870912&&(i.flags|=128,h=!0,El(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(t=u.last,t!==null?t.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=A(),t.sibling=null,r=cn.current,ve(cn,h?r&1|2:r&1),Et&&Ea(i,u.treeForkCount),t):($t(i),null);case 22:case 23:return _i(i),hh(),u=i.memoizedState!==null,t!==null?t.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),r=i.updateQueue,r!==null&&ec(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),t!==null&&$($r),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ba(_n),$t(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function eE(t,i){switch(Qf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ba(_n),Ue(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return st(i),null;case 31:if(i.memoizedState!==null){if(_i(i),i.alternate===null)throw Error(a(340));Kr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(_i(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Kr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $(cn),null;case 4:return Ue(),null;case 10:return ba(i.type),null;case 22:case 23:return _i(i),hh(),t!==null&&$($r),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ba(_n),null;case 25:return null;default:return null}}function m0(t,i){switch(Qf(i),i.tag){case 3:ba(_n),Ue();break;case 26:case 27:case 5:st(i);break;case 4:Ue();break;case 31:i.memoizedState!==null&&_i(i);break;case 13:_i(i);break;case 19:$(cn);break;case 10:ba(i.type);break;case 22:case 23:_i(i),hh(),t!==null&&$($r);break;case 24:ba(_n)}}function Tl(t,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&t)===t){u=void 0;var m=r.create,E=r.inst;u=m(),E.destroy=u}r=r.next}while(r!==h)}}catch(C){Ht(i,i.return,C)}}function lr(t,i,r){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&t)===t){var E=u.inst,C=E.destroy;if(C!==void 0){E.destroy=void 0,h=i;var V=r,te=C;try{te()}catch(de){Ht(h,V,de)}}}u=u.next}while(u!==m)}}catch(de){Ht(i,i.return,de)}}function _0(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{sg(i,r)}catch(u){Ht(t,t.return,u)}}}function g0(t,i,r){r.props=as(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(u){Ht(t,i,u)}}function bl(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var u=t.stateNode;break;case 30:u=t.stateNode;break;default:u=t.stateNode}typeof r=="function"?t.refCleanup=r(u):r.current=u}}catch(h){Ht(t,i,h)}}function ua(t,i){var r=t.ref,u=t.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){Ht(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Ht(t,i,h)}else r.current=null}function v0(t){var i=t.type,r=t.memoizedProps,u=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break e;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){Ht(t,t.return,h)}}function Xh(t,i,r){try{var u=t.stateNode;ME(u,t.type,r,i),u[On]=i}catch(h){Ht(t,t.return,h)}}function x0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&mr(t.type)||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&mr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wh(t,i,r){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Sa));else if(u!==4&&(u===27&&mr(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(Wh(t,i,r),t=t.sibling;t!==null;)Wh(t,i,r),t=t.sibling}function tc(t,i,r){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(u!==4&&(u===27&&mr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(tc(t,i,r),t=t.sibling;t!==null;)tc(t,i,r),t=t.sibling}function S0(t){var i=t.stateNode,r=t.memoizedProps;try{for(var u=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Fn(i,u,r),i[mn]=t,i[On]=r}catch(m){Ht(t,t.return,m)}}var Da=!1,xn=!1,Yh=!1,y0=typeof WeakSet=="function"?WeakSet:Set,Dn=null;function tE(t,i){if(t=t.containerInfo,pd=Mc,t=L_(t),Hf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var E=0,C=-1,V=-1,te=0,de=0,ge=t,ae=null;t:for(;;){for(var le;ge!==r||h!==0&&ge.nodeType!==3||(C=E+h),ge!==m||u!==0&&ge.nodeType!==3||(V=E+u),ge.nodeType===3&&(E+=ge.nodeValue.length),(le=ge.firstChild)!==null;)ae=ge,ge=le;for(;;){if(ge===t)break t;if(ae===r&&++te===h&&(C=E),ae===m&&++de===u&&(V=E),(le=ge.nextSibling)!==null)break;ge=ae,ae=ge.parentNode}ge=le}r=C===-1||V===-1?null:{start:C,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(md={focusedElem:t,selectionRange:r},Mc=!1,Dn=i;Dn!==null;)if(i=Dn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Dn=t;else for(;Dn!==null;){switch(i=Dn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)h=t[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var ke=as(r.type,h);t=u.getSnapshotBeforeUpdate(ke,m),u.__reactInternalSnapshotBeforeUpdate=t}catch(it){Ht(r,r.return,it)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)vd(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Dn=t;break}Dn=i.return}}function M0(t,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Na(t,r),u&4&&Tl(5,r);break;case 1:if(Na(t,r),u&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(E){Ht(r,r.return,E)}else{var h=as(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ht(r,r.return,E)}}u&64&&_0(r),u&512&&bl(r,r.return);break;case 3:if(Na(t,r),u&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{sg(t,i)}catch(E){Ht(r,r.return,E)}}break;case 27:i===null&&u&4&&S0(r);case 26:case 5:Na(t,r),i===null&&u&4&&v0(r),u&512&&bl(r,r.return);break;case 12:Na(t,r);break;case 31:Na(t,r),u&4&&b0(t,r);break;case 13:Na(t,r),u&4&&A0(t,r),u&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=cE.bind(null,r),DE(t,r))));break;case 22:if(u=r.memoizedState!==null||Da,!u){i=i!==null&&i.memoizedState!==null||xn,h=Da;var m=xn;Da=u,(xn=i)&&!m?La(t,r,(r.subtreeFlags&8772)!==0):Na(t,r),Da=h,xn=m}break;case 30:break;default:Na(t,r)}}function E0(t){var i=t.alternate;i!==null&&(t.alternate=null,E0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&U(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,ti=!1;function Ua(t,i,r){for(r=r.child;r!==null;)T0(t,i,r),r=r.sibling}function T0(t,i,r){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(be,r)}catch{}switch(r.tag){case 26:xn||ua(r,i),Ua(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:xn||ua(r,i);var u=en,h=ti;mr(r.type)&&(en=r.stateNode,ti=!1),Ua(t,i,r),Ol(r.stateNode),en=u,ti=h;break;case 5:xn||ua(r,i);case 6:if(u=en,h=ti,en=null,Ua(t,i,r),en=u,ti=h,en!==null)if(ti)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(m){Ht(r,i,m)}else try{en.removeChild(r.stateNode)}catch(m){Ht(r,i,m)}break;case 18:en!==null&&(ti?(t=en,_v(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),ho(t)):_v(en,r.stateNode));break;case 4:u=en,h=ti,en=r.stateNode.containerInfo,ti=!0,Ua(t,i,r),en=u,ti=h;break;case 0:case 11:case 14:case 15:lr(2,r,i),xn||lr(4,r,i),Ua(t,i,r);break;case 1:xn||(ua(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&g0(r,i,u)),Ua(t,i,r);break;case 21:Ua(t,i,r);break;case 22:xn=(u=xn)||r.memoizedState!==null,Ua(t,i,r),xn=u;break;default:Ua(t,i,r)}}function b0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ho(t)}catch(r){Ht(i,i.return,r)}}}function A0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(r){Ht(i,i.return,r)}}function nE(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new y0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new y0),i;default:throw Error(a(435,t.tag))}}function nc(t,i){var r=nE(t);i.forEach(function(u){if(!r.has(u)){r.add(u);var h=fE.bind(null,t,u);u.then(h,h)}})}function ni(t,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],m=t,E=i,C=E;e:for(;C!==null;){switch(C.tag){case 27:if(mr(C.type)){en=C.stateNode,ti=!1;break e}break;case 5:en=C.stateNode,ti=!1;break e;case 3:case 4:en=C.stateNode.containerInfo,ti=!0;break e}C=C.return}if(en===null)throw Error(a(160));T0(m,E,h),en=null,ti=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)R0(i,t),i=i.sibling}var Zi=null;function R0(t,i){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(i,t),ii(t),u&4&&(lr(3,t,t.return),Tl(3,t),lr(5,t,t.return));break;case 1:ni(i,t),ii(t),u&512&&(xn||r===null||ua(r,r.return)),u&64&&Da&&(t=t.updateQueue,t!==null&&(u=t.callbacks,u!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=Zi;if(ni(i,t),ii(t),u&512&&(xn||r===null||ua(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=t.memoizedState,r===null)if(u===null)if(t.stateNode===null){e:{u=t.type,r=t.memoizedProps,h=h.ownerDocument||h;t:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[kr]||m[mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Fn(m,u,r),m[mn]=t,Se(m),u=m;break e;case"link":var E=Rv("link","href",h).get(u+(r.href||""));if(E){for(var C=0;C<E.length;C++)if(m=E[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(C,1);break t}}m=h.createElement(u),Fn(m,u,r),h.head.appendChild(m);break;case"meta":if(E=Rv("meta","content",h).get(u+(r.content||""))){for(C=0;C<E.length;C++)if(m=E[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(C,1);break t}}m=h.createElement(u),Fn(m,u,r),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[mn]=t,Se(m),u=m}t.stateNode=u}else Cv(h,t.type,t.stateNode);else t.stateNode=Av(h,u,t.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?Cv(h,t.type,t.stateNode):Av(h,u,t.memoizedProps)):u===null&&t.stateNode!==null&&Xh(t,t.memoizedProps,r.memoizedProps)}break;case 27:ni(i,t),ii(t),u&512&&(xn||r===null||ua(r,r.return)),r!==null&&u&4&&Xh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ni(i,t),ii(t),u&512&&(xn||r===null||ua(r,r.return)),t.flags&32){h=t.stateNode;try{Ps(h,"")}catch(ke){Ht(t,t.return,ke)}}u&4&&t.stateNode!=null&&(h=t.memoizedProps,Xh(t,h,r!==null?r.memoizedProps:h)),u&1024&&(Yh=!0);break;case 6:if(ni(i,t),ii(t),u&4){if(t.stateNode===null)throw Error(a(162));u=t.memoizedProps,r=t.stateNode;try{r.nodeValue=u}catch(ke){Ht(t,t.return,ke)}}break;case 3:if(vc=null,h=Zi,Zi=_c(i.containerInfo),ni(i,t),Zi=h,ii(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(ke){Ht(t,t.return,ke)}Yh&&(Yh=!1,C0(t));break;case 4:u=Zi,Zi=_c(t.stateNode.containerInfo),ni(i,t),ii(t),Zi=u;break;case 12:ni(i,t),ii(t);break;case 31:ni(i,t),ii(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,nc(t,u)));break;case 13:ni(i,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ac=A()),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,nc(t,u)));break;case 22:h=t.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,te=Da,de=xn;if(Da=te||h,xn=de||V,ni(i,t),xn=de,Da=te,ii(t),u&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||V||Da||xn||rs(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(m=V.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{C=V.stateNode;var ge=V.memoizedProps.style,ae=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;C.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ke){Ht(V,V.return,ke)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(ke){Ht(V,V.return,ke)}}}else if(i.tag===18){if(r===null){V=i;try{var le=V.stateNode;h?gv(le,!0):gv(V.stateNode,!1)}catch(ke){Ht(V,V.return,ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=t.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,nc(t,r))));break;case 19:ni(i,t),ii(t),u&4&&(u=t.updateQueue,u!==null&&(t.updateQueue=null,nc(t,u)));break;case 30:break;case 21:break;default:ni(i,t),ii(t)}}function ii(t){var i=t.flags;if(i&2){try{for(var r,u=t.return;u!==null;){if(x0(u)){r=u;break}u=u.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=qh(t);tc(t,m,h);break;case 5:var E=r.stateNode;r.flags&32&&(Ps(E,""),r.flags&=-33);var C=qh(t);tc(t,C,E);break;case 3:case 4:var V=r.stateNode.containerInfo,te=qh(t);Wh(t,te,V);break;default:throw Error(a(161))}}catch(de){Ht(t,t.return,de)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function C0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;C0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Na(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)M0(t,i.alternate,i),i=i.sibling}function rs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:lr(4,i,i.return),rs(i);break;case 1:ua(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&g0(i,i.return,r),rs(i);break;case 27:Ol(i.stateNode);case 26:case 5:ua(i,i.return),rs(i);break;case 22:i.memoizedState===null&&rs(i);break;case 30:rs(i);break;default:rs(i)}t=t.sibling}}function La(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:La(h,m,r),Tl(4,m);break;case 1:if(La(h,m,r),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(te){Ht(u,u.return,te)}if(u=m,h=u.updateQueue,h!==null){var C=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)rg(V[h],C)}catch(te){Ht(u,u.return,te)}}r&&E&64&&_0(m),bl(m,m.return);break;case 27:S0(m);case 26:case 5:La(h,m,r),r&&u===null&&E&4&&v0(m),bl(m,m.return);break;case 12:La(h,m,r);break;case 31:La(h,m,r),r&&E&4&&b0(h,m);break;case 13:La(h,m,r),r&&E&4&&A0(h,m);break;case 22:m.memoizedState===null&&La(h,m,r),bl(m,m.return);break;case 30:break;default:La(h,m,r)}i=i.sibling}}function jh(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&fl(r))}function Zh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fl(t))}function Ki(t,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)w0(t,i,r,u),i=i.sibling}function w0(t,i,r,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ki(t,i,r,u),h&2048&&Tl(9,i);break;case 1:Ki(t,i,r,u);break;case 3:Ki(t,i,r,u),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fl(t)));break;case 12:if(h&2048){Ki(t,i,r,u),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,C=m.onPostCommit;typeof C=="function"&&C(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ht(i,i.return,V)}}else Ki(t,i,r,u);break;case 31:Ki(t,i,r,u);break;case 13:Ki(t,i,r,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Ki(t,i,r,u):Al(t,i):m._visibility&2?Ki(t,i,r,u):(m._visibility|=2,to(t,i,r,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&jh(E,i);break;case 24:Ki(t,i,r,u),h&2048&&Zh(i.alternate,i);break;default:Ki(t,i,r,u)}}function to(t,i,r,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,E=i,C=r,V=u,te=E.flags;switch(E.tag){case 0:case 11:case 15:to(m,E,C,V,h),Tl(8,E);break;case 23:break;case 22:var de=E.stateNode;E.memoizedState!==null?de._visibility&2?to(m,E,C,V,h):Al(m,E):(de._visibility|=2,to(m,E,C,V,h)),h&&te&2048&&jh(E.alternate,E);break;case 24:to(m,E,C,V,h),h&&te&2048&&Zh(E.alternate,E);break;default:to(m,E,C,V,h)}i=i.sibling}}function Al(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,u=i,h=u.flags;switch(u.tag){case 22:Al(r,u),h&2048&&jh(u.alternate,u);break;case 24:Al(r,u),h&2048&&Zh(u.alternate,u);break;default:Al(r,u)}i=i.sibling}}var Rl=8192;function no(t,i,r){if(t.subtreeFlags&Rl)for(t=t.child;t!==null;)D0(t,i,r),t=t.sibling}function D0(t,i,r){switch(t.tag){case 26:no(t,i,r),t.flags&Rl&&t.memoizedState!==null&&VE(r,Zi,t.memoizedState,t.memoizedProps);break;case 5:no(t,i,r);break;case 3:case 4:var u=Zi;Zi=_c(t.stateNode.containerInfo),no(t,i,r),Zi=u;break;case 22:t.memoizedState===null&&(u=t.alternate,u!==null&&u.memoizedState!==null?(u=Rl,Rl=16777216,no(t,i,r),Rl=u):no(t,i,r));break;default:no(t,i,r)}}function U0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Cl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];Dn=u,L0(u,t)}U0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N0(t),t=t.sibling}function N0(t){switch(t.tag){case 0:case 11:case 15:Cl(t),t.flags&2048&&lr(9,t,t.return);break;case 3:Cl(t);break;case 12:Cl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ic(t)):Cl(t);break;default:Cl(t)}}function ic(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];Dn=u,L0(u,t)}U0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:lr(8,i,i.return),ic(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,ic(i));break;default:ic(i)}t=t.sibling}}function L0(t,i){for(;Dn!==null;){var r=Dn;switch(r.tag){case 0:case 11:case 15:lr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:fl(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,Dn=u;else e:for(r=t;Dn!==null;){u=Dn;var h=u.sibling,m=u.return;if(E0(u),u===r){Dn=null;break e}if(h!==null){h.return=m,Dn=h;break e}Dn=m}}}var iE={getCacheForType:function(t){var i=Bn(_n),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return Bn(_n).controller.signal}},aE=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Wt=null,vt=null,yt=0,Ft=0,gi=null,ur=!1,io=!1,Kh=!1,Oa=0,on=0,cr=0,ss=0,Qh=0,vi=0,ao=0,wl=null,ai=null,Jh=!1,ac=0,O0=0,rc=1/0,sc=null,fr=null,Tn=0,hr=null,ro=null,Pa=0,$h=0,ed=null,P0=null,Dl=0,td=null;function xi(){return(Ot&2)!==0&&yt!==0?yt&-yt:z.T!==null?od():Vr()}function z0(){if(vi===0)if((yt&536870912)===0||Et){var t=Ne;Ne<<=1,(Ne&3932160)===0&&(Ne=262144),vi=t}else vi=536870912;return t=mi.current,t!==null&&(t.flags|=32),vi}function ri(t,i,r){(t===Wt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(so(t,0),dr(t,yt,vi,!1)),Zn(t,r),((Ot&2)===0||t!==Wt)&&(t===Wt&&((Ot&2)===0&&(ss|=r),on===4&&dr(t,yt,vi,!1)),ca(t))}function B0(t,i,r){if((Ot&6)!==0)throw Error(a(327));var u=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Ve(t,i),h=u?oE(t,i):id(t,i,!0),m=u;do{if(h===0){io&&!u&&dr(t,i,0,!1);break}else{if(r=t.current.alternate,m&&!rE(r)){h=id(t,i,!1),m=!1;continue}if(h===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var C=t;h=wl;var V=C.current.memoizedState.isDehydrated;if(V&&(so(C,E).flags|=256),E=id(C,E,!1),E!==2){if(Kh&&!V){C.errorRecoveryDisabledLanes|=m,ss|=m,h=4;break e}m=ai,ai=h,m!==null&&(ai===null?ai=m:ai.push.apply(ai,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){so(t,0),dr(t,i,0,!0);break}e:{switch(u=t,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:dr(u,i,vi,!ur);break e;case 2:ai=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=ac+300-A(),10<h)){if(dr(u,i,vi,!ur),xe(u,0,!0)!==0)break e;Pa=i,u.timeoutHandle=pv(I0.bind(null,u,r,ai,sc,Jh,i,vi,ss,ao,ur,m,"Throttled",-0,0),h);break e}I0(u,r,ai,sc,Jh,i,vi,ss,ao,ur,m,null,-0,0)}}break}while(!0);ca(t)}function I0(t,i,r,u,h,m,E,C,V,te,de,ge,ae,le){if(t.timeoutHandle=-1,ge=i.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sa},D0(i,m,ge);var ke=(m&62914560)===m?ac-A():(m&4194048)===m?O0-A():0;if(ke=kE(ge,ke),ke!==null){Pa=m,t.cancelPendingCommit=ke(W0.bind(null,t,i,m,r,u,h,E,C,V,de,ge,null,ae,le)),dr(t,m,E,!te);return}}W0(t,i,m,r,u,h,E,C,V)}function rE(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],m=h.getSnapshot;h=h.value;try{if(!di(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i,r,u){i&=~Qh,i&=~ss,t.suspendedLanes|=i,t.pingedLanes&=~i,u&&(t.warmLanes|=i),u=t.expirationTimes;for(var h=i;0<h;){var m=31-Fe(h),E=1<<m;u[m]=-1,h&=~E}r!==0&&Qo(t,r,i)}function oc(){return(Ot&6)===0?(Ul(0),!1):!0}function nd(){if(vt!==null){if(Ft===0)var t=vt.return;else t=vt,Ta=Qr=null,vh(t),Ks=null,dl=0,t=vt;for(;t!==null;)m0(t.alternate,t),t=t.return;vt=null}}function so(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,bE(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Pa=0,nd(),Wt=t,vt=r=Ma(t.current,null),yt=i,Ft=0,gi=null,ur=!1,io=Ve(t,i),Kh=!1,ao=vi=Qh=ss=cr=on=0,ai=wl=null,Jh=!1,(i&8)!==0&&(i|=i&32);var u=t.entangledLanes;if(u!==0)for(t=t.entanglements,u&=i;0<u;){var h=31-Fe(u),m=1<<h;i|=t[h],u&=~m}return Oa=i,Cu(),r}function F0(t,i){ft=null,z.H=yl,i===Zs||i===zu?(i=tg(),Ft=3):i===sh?(i=tg(),Ft=4):Ft=i===Oh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gi=i,vt===null&&(on=1,Ku(t,Li(i,t.current)))}function H0(){var t=mi.current;return t===null?!0:(yt&4194048)===yt?Bi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Bi:!1}function G0(){var t=z.H;return z.H=yl,t===null?yl:t}function V0(){var t=z.A;return z.A=iE,t}function lc(){on=4,ur||(yt&4194048)!==yt&&mi.current!==null||(io=!0),(cr&134217727)===0&&(ss&134217727)===0||Wt===null||dr(Wt,yt,vi,!1)}function id(t,i,r){var u=Ot;Ot|=2;var h=G0(),m=V0();(Wt!==t||yt!==i)&&(sc=null,so(t,i)),i=!1;var E=on;e:do try{if(Ft!==0&&vt!==null){var C=vt,V=gi;switch(Ft){case 8:nd(),E=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var te=Ft;if(Ft=0,gi=null,oo(t,C,V,te),r&&io){E=0;break e}break;default:te=Ft,Ft=0,gi=null,oo(t,C,V,te)}}sE(),E=on;break}catch(de){F0(t,de)}while(!0);return i&&t.shellSuspendCounter++,Ta=Qr=null,Ot=u,z.H=h,z.A=m,vt===null&&(Wt=null,yt=0,Cu()),E}function sE(){for(;vt!==null;)k0(vt)}function oE(t,i){var r=Ot;Ot|=2;var u=G0(),h=V0();Wt!==t||yt!==i?(sc=null,rc=A()+500,so(t,i)):io=Ve(t,i);e:do try{if(Ft!==0&&vt!==null){i=vt;var m=gi;t:switch(Ft){case 1:Ft=0,gi=null,oo(t,i,m,1);break;case 2:case 9:if($_(m)){Ft=0,gi=null,X0(i);break}i=function(){Ft!==2&&Ft!==9||Wt!==t||(Ft=7),ca(t)},m.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:$_(m)?(Ft=0,gi=null,X0(i)):(Ft=0,gi=null,oo(t,i,m,7));break;case 5:var E=null;switch(vt.tag){case 26:E=vt.memoizedState;case 5:case 27:var C=vt;if(E?wv(E):C.stateNode.complete){Ft=0,gi=null;var V=C.sibling;if(V!==null)vt=V;else{var te=C.return;te!==null?(vt=te,uc(te)):vt=null}break t}}Ft=0,gi=null,oo(t,i,m,5);break;case 6:Ft=0,gi=null,oo(t,i,m,6);break;case 8:nd(),on=6;break e;default:throw Error(a(462))}}lE();break}catch(de){F0(t,de)}while(!0);return Ta=Qr=null,z.H=u,z.A=h,Ot=r,vt!==null?0:(Wt=null,yt=0,Cu(),on)}function lE(){for(;vt!==null&&!Qt();)k0(vt)}function k0(t){var i=d0(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,i===null?uc(t):vt=i}function X0(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=o0(r,i,i.pendingProps,i.type,void 0,yt);break;case 11:i=o0(r,i,i.pendingProps,i.type.render,i.ref,yt);break;case 5:vh(i);default:m0(r,i),i=vt=V_(i,Oa),i=d0(r,i,Oa)}t.memoizedProps=t.pendingProps,i===null?uc(t):vt=i}function oo(t,i,r,u){Ta=Qr=null,vh(i),Ks=null,dl=0;var h=i.return;try{if(KM(t,h,i,r,yt)){on=1,Ku(t,Li(r,t.current)),vt=null;return}}catch(m){if(h!==null)throw vt=h,m;on=1,Ku(t,Li(r,t.current)),vt=null;return}i.flags&32768?(Et||u===1?t=!0:io||(yt&536870912)!==0?t=!1:(ur=t=!0,(u===2||u===9||u===3||u===6)&&(u=mi.current,u!==null&&u.tag===13&&(u.flags|=16384))),q0(i,t)):uc(i)}function uc(t){var i=t;do{if((i.flags&32768)!==0){q0(i,ur);return}t=i.return;var r=$M(i.alternate,i,Oa);if(r!==null){vt=r;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);on===0&&(on=5)}function q0(t,i){do{var r=eE(t.alternate,t);if(r!==null){r.flags&=32767,vt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=r}while(t!==null);on=6,vt=null}function W0(t,i,r,u,h,m,E,C,V){t.cancelPendingCommit=null;do cc();while(Tn!==0);if((Ot&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=qf,Ui(t,r,m,E,C,V),t===Wt&&(vt=Wt=null,yt=0),ro=i,hr=t,Pa=r,$h=m,ed=h,P0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hE(he,function(){return Q0(),null})):(t.callbackNode=null,t.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,h=G.p,G.p=2,E=Ot,Ot|=4;try{tE(t,i,r)}finally{Ot=E,G.p=h,z.T=u}}Tn=1,Y0(),j0(),Z0()}}function Y0(){if(Tn===1){Tn=0;var t=hr,i=ro,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var u=G.p;G.p=2;var h=Ot;Ot|=4;try{R0(i,t);var m=md,E=L_(t.containerInfo),C=m.focusedElem,V=m.selectionRange;if(E!==C&&C&&C.ownerDocument&&N_(C.ownerDocument.documentElement,C)){if(V!==null&&Hf(C)){var te=V.start,de=V.end;if(de===void 0&&(de=te),"selectionStart"in C)C.selectionStart=te,C.selectionEnd=Math.min(de,C.value.length);else{var ge=C.ownerDocument||document,ae=ge&&ge.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),ke=C.textContent.length,it=Math.min(V.start,ke),kt=V.end===void 0?it:Math.min(V.end,ke);!le.extend&&it>kt&&(E=kt,kt=it,it=E);var K=U_(C,it),W=U_(C,kt);if(K&&W&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==W.node||le.focusOffset!==W.offset)){var ee=ge.createRange();ee.setStart(K.node,K.offset),le.removeAllRanges(),it>kt?(le.addRange(ee),le.extend(W.node,W.offset)):(ee.setEnd(W.node,W.offset),le.addRange(ee))}}}}for(ge=[],le=C;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ge.length;C++){var me=ge[C];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Mc=!!pd,md=pd=null}finally{Ot=h,G.p=u,z.T=r}}t.current=i,Tn=2}}function j0(){if(Tn===2){Tn=0;var t=hr,i=ro,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var u=G.p;G.p=2;var h=Ot;Ot|=4;try{M0(t,i.alternate,i)}finally{Ot=h,G.p=u,z.T=r}}Tn=3}}function Z0(){if(Tn===4||Tn===3){Tn=0,I();var t=hr,i=ro,r=Pa,u=P0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,ro=hr=null,K0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(fr=null),Ls(r),i=i.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(be,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=z.T,h=G.p,G.p=2,z.T=null;try{for(var m=t.onRecoverableError,E=0;E<u.length;E++){var C=u[E];m(C.value,{componentStack:C.stack})}}finally{z.T=i,G.p=h}}(Pa&3)!==0&&cc(),ca(t),h=t.pendingLanes,(r&261930)!==0&&(h&42)!==0?t===td?Dl++:(Dl=0,td=t):Dl=0,Ul(0)}}function K0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,fl(i)))}function cc(){return Y0(),j0(),Z0(),Q0()}function Q0(){if(Tn!==5)return!1;var t=hr,i=$h;$h=0;var r=Ls(Pa),u=z.T,h=G.p;try{G.p=32>r?32:r,z.T=null,r=ed,ed=null;var m=hr,E=Pa;if(Tn=0,ro=hr=null,Pa=0,(Ot&6)!==0)throw Error(a(331));var C=Ot;if(Ot|=4,N0(m.current),w0(m,m.current,E,r),Ot=C,Ul(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(be,m)}catch{}return!0}finally{G.p=h,z.T=u,K0(t,i)}}function J0(t,i,r){i=Li(r,i),i=Lh(t.stateNode,i,2),t=rr(t,i,2),t!==null&&(Zn(t,2),ca(t))}function Ht(t,i,r){if(t.tag===3)J0(t,t,r);else for(;i!==null;){if(i.tag===3){J0(i,t,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(fr===null||!fr.has(u))){t=Li(r,t),r=$g(2),u=rr(i,r,2),u!==null&&(e0(r,u,i,t),Zn(u,2),ca(u));break}}i=i.return}}function ad(t,i,r){var u=t.pingCache;if(u===null){u=t.pingCache=new aE;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(r)||(Kh=!0,h.add(r),t=uE.bind(null,t,i,r),i.then(t,t))}function uE(t,i,r){var u=t.pingCache;u!==null&&u.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Wt===t&&(yt&r)===r&&(on===4||on===3&&(yt&62914560)===yt&&300>A()-ac?(Ot&2)===0&&so(t,0):Qh|=r,ao===yt&&(ao=0)),ca(t)}function $0(t,i){i===0&&(i=It()),t=jr(t,i),t!==null&&(Zn(t,i),ca(t))}function cE(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),$0(t,r)}function fE(t,i){var r=0;switch(t.tag){case 31:case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=t.stateNode;break;case 22:u=t.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),$0(t,r)}function hE(t,i){return et(t,i)}var fc=null,lo=null,rd=!1,hc=!1,sd=!1,pr=0;function ca(t){t!==lo&&t.next===null&&(lo===null?fc=lo=t:lo=lo.next=t),hc=!0,rd||(rd=!0,pE())}function Ul(t,i){if(!sd&&hc){sd=!0;do for(var r=!1,u=fc;u!==null;){if(t!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,C=u.pingedLanes;m=(1<<31-Fe(42|t)+1)-1,m&=h&~(E&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,iv(u,m))}else m=yt,m=xe(u,u===Wt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ve(u,m)||(r=!0,iv(u,m));u=u.next}while(r);sd=!1}}function dE(){ev()}function ev(){hc=rd=!1;var t=0;pr!==0&&TE()&&(t=pr);for(var i=A(),r=null,u=fc;u!==null;){var h=u.next,m=tv(u,i);m===0?(u.next=null,r===null?fc=h:r.next=h,h===null&&(lo=r)):(r=u,(t!==0||(m&3)!==0)&&(hc=!0)),u=h}Tn!==0&&Tn!==5||Ul(t),pr!==0&&(pr=0)}function tv(t,i){for(var r=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-Fe(m),C=1<<E,V=h[E];V===-1?((C&r)===0||(C&u)!==0)&&(h[E]=ot(C,i)):V<=i&&(t.expiredLanes|=C),m&=~C}if(i=Wt,r=yt,r=xe(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u=t.callbackNode,r===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return u!==null&&u!==null&&Zt(u),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ve(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(u!==null&&Zt(u),Ls(r)){case 2:case 8:r=ye;break;case 32:r=he;break;case 268435456:r=Ce;break;default:r=he}return u=nv.bind(null,t),r=et(r,u),t.callbackPriority=i,t.callbackNode=r,i}return u!==null&&u!==null&&Zt(u),t.callbackPriority=2,t.callbackNode=null,2}function nv(t,i){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(cc()&&t.callbackNode!==r)return null;var u=yt;return u=xe(t,t===Wt?u:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),u===0?null:(B0(t,u,i),tv(t,A()),t.callbackNode!=null&&t.callbackNode===r?nv.bind(null,t):null)}function iv(t,i){if(cc())return null;B0(t,i,!0)}function pE(){AE(function(){(Ot&6)!==0?et(pe,dE):ev()})}function od(){if(pr===0){var t=Ys;t===0&&(t=Ae,Ae<<=1,(Ae&261888)===0&&(Ae=256)),pr=t}return pr}function av(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Su(""+t)}function rv(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function mE(t,i,r,u,h){if(i==="submit"&&r&&r.stateNode===h){var m=av((h[On]||null).action),E=u.submitter;E&&(i=(i=E[On]||null)?av(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var C=new Tu("action","action",null,u,h);t.push({event:C,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(pr!==0){var V=E?rv(h,E):new FormData(h);Rh(r,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(C.preventDefault(),V=E?rv(h,E):new FormData(h),Rh(r,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var ld=0;ld<Xf.length;ld++){var ud=Xf[ld],_E=ud.toLowerCase(),gE=ud[0].toUpperCase()+ud.slice(1);ji(_E,"on"+gE)}ji(z_,"onAnimationEnd"),ji(B_,"onAnimationIteration"),ji(I_,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(LM,"onTransitionRun"),ji(OM,"onTransitionStart"),ji(PM,"onTransitionCancel"),ji(F_,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nl));function sv(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var u=t[r],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var C=u[E],V=C.instance,te=C.currentTarget;if(C=C.listener,V!==m&&h.isPropagationStopped())break e;m=C,h.currentTarget=te;try{m(h)}catch(de){Ru(de)}h.currentTarget=null,m=V}else for(E=0;E<u.length;E++){if(C=u[E],V=C.instance,te=C.currentTarget,C=C.listener,V!==m&&h.isPropagationStopped())break e;m=C,h.currentTarget=te;try{m(h)}catch(de){Ru(de)}h.currentTarget=null,m=V}}}}function xt(t,i){var r=i[$o];r===void 0&&(r=i[$o]=new Set);var u=t+"__bubble";r.has(u)||(ov(i,t,2,!1),r.add(u))}function cd(t,i,r){var u=0;i&&(u|=4),ov(r,t,u,i)}var dc="_reactListening"+Math.random().toString(36).slice(2);function fd(t){if(!t[dc]){t[dc]=!0,Pe.forEach(function(r){r!=="selectionchange"&&(vE.has(r)||cd(r,!1,t),cd(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[dc]||(i[dc]=!0,cd("selectionchange",!1,i))}}function ov(t,i,r,u){switch(zv(i)){case 2:var h=WE;break;case 8:h=YE;break;default:h=Ad}r=h.bind(null,i,r,t),h=void 0,!Uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(i,r,{capture:!0,passive:h}):t.addEventListener(i,r,!0):h!==void 0?t.addEventListener(i,r,{passive:h}):t.addEventListener(i,r,!1)}function hd(t,i,r,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var C=u.stateNode.containerInfo;if(C===h)break;if(E===4)for(E=u.return;E!==null;){var V=E.tag;if((V===3||V===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;C!==null;){if(E=Z(C),E===null)return;if(V=E.tag,V===5||V===6||V===26||V===27){u=m=E;continue e}C=C.parentNode}}u=u.return}h_(function(){var te=m,de=wf(r),ge=[];e:{var ae=H_.get(t);if(ae!==void 0){var le=Tu,ke=t;switch(t){case"keypress":if(Mu(r)===0)break e;case"keydown":case"keyup":le=fM;break;case"focusin":ke="focus",le=Pf;break;case"focusout":ke="blur",le=Pf;break;case"beforeblur":case"afterblur":le=Pf;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=m_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=pM;break;case z_:case B_:case I_:le=nM;break;case F_:le=_M;break;case"scroll":case"scrollend":le=Qy;break;case"wheel":le=vM;break;case"copy":case"cut":case"paste":le=aM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=g_;break;case"toggle":case"beforetoggle":le=SM}var it=(i&4)!==0,kt=!it&&(t==="scroll"||t==="scrollend"),K=it?ae!==null?ae+"Capture":null:ae;it=[];for(var W=te,ee;W!==null;){var me=W;if(ee=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||ee===null||K===null||(me=el(W,K),me!=null&&it.push(Ll(W,me,ee))),kt)break;W=W.return}0<it.length&&(ae=new le(ae,ke,null,r,de),ge.push({event:ae,listeners:it}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&r!==Cf&&(ke=r.relatedTarget||r.fromElement)&&(Z(ke)||ke[Qa]))break e;if((le||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(ke=r.relatedTarget||r.toElement,le=te,ke=ke?Z(ke):null,ke!==null&&(kt=l(ke),it=ke.tag,ke!==kt||it!==5&&it!==27&&it!==6)&&(ke=null)):(le=null,ke=te),le!==ke)){if(it=m_,me="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(it=g_,me="onPointerLeave",K="onPointerEnter",W="pointer"),kt=le==null?ae:se(le),ee=ke==null?ae:se(ke),ae=new it(me,W+"leave",le,r,de),ae.target=kt,ae.relatedTarget=ee,me=null,Z(de)===te&&(it=new it(K,W+"enter",ke,r,de),it.target=ee,it.relatedTarget=kt,me=it),kt=me,le&&ke)t:{for(it=xE,K=le,W=ke,ee=0,me=K;me;me=it(me))ee++;me=0;for(var tt=W;tt;tt=it(tt))me++;for(;0<ee-me;)K=it(K),ee--;for(;0<me-ee;)W=it(W),me--;for(;ee--;){if(K===W||W!==null&&K===W.alternate){it=K;break t}K=it(K),W=it(W)}it=null}else it=null;le!==null&&lv(ge,ae,le,it,!1),ke!==null&&kt!==null&&lv(ge,kt,ke,it,!0)}}e:{if(ae=te?se(te):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Dt=b_;else if(E_(ae))if(A_)Dt=DM;else{Dt=CM;var We=RM}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Rf(te.elementType)&&(Dt=b_):Dt=wM;if(Dt&&(Dt=Dt(t,te))){T_(ge,Dt,r,de);break e}We&&We(t,ae,te),t==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&En(ae,"number",ae.value)}switch(We=te?se(te):window,t){case"focusin":(E_(We)||We.contentEditable==="true")&&(Fs=We,Gf=te,ll=null);break;case"focusout":ll=Gf=Fs=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,O_(ge,r,de);break;case"selectionchange":if(NM)break;case"keydown":case"keyup":O_(ge,r,de)}var ht;if(Bf)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Is?y_(t,r)&&(Mt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Mt="onCompositionStart");Mt&&(v_&&r.locale!=="ko"&&(Is||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Is&&(ht=d_()):(Ja=de,Nf="value"in Ja?Ja.value:Ja.textContent,Is=!0)),We=pc(te,Mt),0<We.length&&(Mt=new __(Mt,t,null,r,de),ge.push({event:Mt,listeners:We}),ht?Mt.data=ht:(ht=M_(r),ht!==null&&(Mt.data=ht)))),(ht=MM?EM(t,r):TM(t,r))&&(Mt=pc(te,"onBeforeInput"),0<Mt.length&&(We=new __("onBeforeInput","beforeinput",null,r,de),ge.push({event:We,listeners:Mt}),We.data=ht)),mE(ge,t,te,r,de)}sv(ge,i)})}function Ll(t,i,r){return{instance:t,listener:i,currentTarget:r}}function pc(t,i){for(var r=i+"Capture",u=[];t!==null;){var h=t,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=el(t,r),h!=null&&u.unshift(Ll(t,h,m)),h=el(t,i),h!=null&&u.push(Ll(t,h,m))),t.tag===3)return u;t=t.return}return[]}function xE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lv(t,i,r,u,h){for(var m=i._reactName,E=[];r!==null&&r!==u;){var C=r,V=C.alternate,te=C.stateNode;if(C=C.tag,V!==null&&V===u)break;C!==5&&C!==26&&C!==27||te===null||(V=te,h?(te=el(r,m),te!=null&&E.unshift(Ll(r,te,V))):h||(te=el(r,m),te!=null&&E.push(Ll(r,te,V)))),r=r.return}E.length!==0&&t.push({event:i,listeners:E})}var SE=/\r\n?/g,yE=/\u0000|\uFFFD/g;function uv(t){return(typeof t=="string"?t:""+t).replace(SE,`
`).replace(yE,"")}function cv(t,i){return i=uv(i),uv(t)===i}function Vt(t,i,r,u,h,m){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Ps(t,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Ps(t,""+u);break;case"className":zt(t,"class",u);break;case"tabIndex":zt(t,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(t,r,u);break;case"style":c_(t,u,m);break;case"data":if(i!=="object"){zt(t,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(r);break}u=Su(""+u),t.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Vt(t,i,"name",h.name,h,null),Vt(t,i,"formEncType",h.formEncType,h,null),Vt(t,i,"formMethod",h.formMethod,h,null),Vt(t,i,"formTarget",h.formTarget,h,null)):(Vt(t,i,"encType",h.encType,h,null),Vt(t,i,"method",h.method,h,null),Vt(t,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){t.removeAttribute(r);break}u=Su(""+u),t.setAttribute(r,u);break;case"onClick":u!=null&&(t.onclick=Sa);break;case"onScroll":u!=null&&xt("scroll",t);break;case"onScrollEnd":u!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":t.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){t.removeAttribute("xlink:href");break}r=Su(""+u),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(r,""+u):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":u===!0?t.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?t.setAttribute(r,u):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?t.setAttribute(r,u):t.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?t.removeAttribute(r):t.setAttribute(r,u);break;case"popover":xt("beforetoggle",t),xt("toggle",t),qt(t,"popover",u);break;case"xlinkActuate":gt(t,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":gt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":gt(t,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":gt(t,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":gt(t,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":gt(t,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":gt(t,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":gt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":gt(t,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":qt(t,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Zy.get(r)||r,qt(t,r,u))}}function dd(t,i,r,u,h,m){switch(r){case"style":c_(t,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof u=="string"?Ps(t,u):(typeof u=="number"||typeof u=="bigint")&&Ps(t,""+u);break;case"onScroll":u!=null&&xt("scroll",t);break;case"onScrollEnd":u!=null&&xt("scrollend",t);break;case"onClick":u!=null&&(t.onclick=Sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xe.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=t[On]||null,m=m!=null?m[r]:null,typeof m=="function"&&t.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,u,h);break e}r in t?t[r]=u:u===!0?t.setAttribute(r,""):qt(t,r,u)}}}function Fn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var u=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Vt(t,i,m,E,r,null)}}h&&Vt(t,i,"srcSet",r.srcSet,r,null),u&&Vt(t,i,"src",r.src,r,null);return;case"input":xt("invalid",t);var C=m=E=h=null,V=null,te=null;for(u in r)if(r.hasOwnProperty(u)){var de=r[u];if(de!=null)switch(u){case"name":h=de;break;case"type":E=de;break;case"checked":V=de;break;case"defaultChecked":te=de;break;case"value":m=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:Vt(t,i,u,de,r,null)}}Kn(t,m,C,V,te,E,h,!1);return;case"select":xt("invalid",t),u=E=m=null;for(h in r)if(r.hasOwnProperty(h)&&(C=r[h],C!=null))switch(h){case"value":m=C;break;case"defaultValue":E=C;break;case"multiple":u=C;default:Vt(t,i,h,C,r,null)}i=m,r=E,t.multiple=!!u,i!=null?un(t,!!u,i,!1):r!=null&&un(t,!!u,r,!0);return;case"textarea":xt("invalid",t),m=h=u=null;for(E in r)if(r.hasOwnProperty(E)&&(C=r[E],C!=null))switch(E){case"value":u=C;break;case"defaultValue":h=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Vt(t,i,E,C,r,null)}sa(t,u,h,m);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(u=r[V],u!=null))switch(V){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Vt(t,i,V,u,r,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(u=0;u<Nl.length;u++)xt(Nl[u],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in r)if(r.hasOwnProperty(te)&&(u=r[te],u!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Vt(t,i,te,u,r,null)}return;default:if(Rf(i)){for(de in r)r.hasOwnProperty(de)&&(u=r[de],u!==void 0&&dd(t,i,de,u,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(u=r[C],u!=null&&Vt(t,i,C,u,r,null))}function ME(t,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,C=null,V=null,te=null,de=null;for(le in r){var ge=r[le];if(r.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":V=ge;default:u.hasOwnProperty(le)||Vt(t,i,le,null,u,ge)}}for(var ae in u){var le=u[ae];if(ge=r[ae],u.hasOwnProperty(ae)&&(le!=null||ge!=null))switch(ae){case"type":m=le;break;case"name":h=le;break;case"checked":te=le;break;case"defaultChecked":de=le;break;case"value":E=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==ge&&Vt(t,i,ae,le,u,ge)}}Vn(t,E,C,V,te,de,m,h);return;case"select":le=E=C=ae=null;for(m in r)if(V=r[m],r.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":le=V;default:u.hasOwnProperty(m)||Vt(t,i,m,null,u,V)}for(h in u)if(m=u[h],V=r[h],u.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":ae=m;break;case"defaultValue":C=m;break;case"multiple":E=m;default:m!==V&&Vt(t,i,h,m,u,V)}i=C,r=E,u=le,ae!=null?un(t,!!r,ae,!1):!!u!=!!r&&(i!=null?un(t,!!r,i,!0):un(t,!!r,r?[]:"",!1));return;case"textarea":le=ae=null;for(C in r)if(h=r[C],r.hasOwnProperty(C)&&h!=null&&!u.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Vt(t,i,C,null,u,h)}for(E in u)if(h=u[E],m=r[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":ae=h;break;case"defaultValue":le=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Vt(t,i,E,h,u,m)}Os(t,ae,le);return;case"option":for(var ke in r)if(ae=r[ke],r.hasOwnProperty(ke)&&ae!=null&&!u.hasOwnProperty(ke))switch(ke){case"selected":t.selected=!1;break;default:Vt(t,i,ke,null,u,ae)}for(V in u)if(ae=u[V],le=r[V],u.hasOwnProperty(V)&&ae!==le&&(ae!=null||le!=null))switch(V){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Vt(t,i,V,ae,u,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in r)ae=r[it],r.hasOwnProperty(it)&&ae!=null&&!u.hasOwnProperty(it)&&Vt(t,i,it,null,u,ae);for(te in u)if(ae=u[te],le=r[te],u.hasOwnProperty(te)&&ae!==le&&(ae!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:Vt(t,i,te,ae,u,le)}return;default:if(Rf(i)){for(var kt in r)ae=r[kt],r.hasOwnProperty(kt)&&ae!==void 0&&!u.hasOwnProperty(kt)&&dd(t,i,kt,void 0,u,ae);for(de in u)ae=u[de],le=r[de],!u.hasOwnProperty(de)||ae===le||ae===void 0&&le===void 0||dd(t,i,de,ae,u,le);return}}for(var K in r)ae=r[K],r.hasOwnProperty(K)&&ae!=null&&!u.hasOwnProperty(K)&&Vt(t,i,K,null,u,ae);for(ge in u)ae=u[ge],le=r[ge],!u.hasOwnProperty(ge)||ae===le||ae==null&&le==null||Vt(t,i,ge,ae,u,le)}function fv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function EE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),u=0;u<r.length;u++){var h=r[u],m=h.transferSize,E=h.initiatorType,C=h.duration;if(m&&C&&fv(E)){for(E=0,C=h.responseEnd,u+=1;u<r.length;u++){var V=r[u],te=V.startTime;if(te>C)break;var de=V.transferSize,ge=V.initiatorType;de&&fv(ge)&&(V=V.responseEnd,E+=de*(V<C?1:(C-te)/(V-te)))}if(--u,i+=8*(m+E)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var pd=null,md=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function hv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function _d(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gd=null;function TE(){var t=window.event;return t&&t.type==="popstate"?t===gd?!1:(gd=t,!0):(gd=null,!1)}var pv=typeof setTimeout=="function"?setTimeout:void 0,bE=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(t){return mv.resolve(null).then(t).catch(RE)}:pv;function RE(t){setTimeout(function(){throw t})}function mr(t){return t==="head"}function _v(t,i){var r=i,u=0;do{var h=r.nextSibling;if(t.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(u===0){t.removeChild(h),ho(i);return}u--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")u++;else if(r==="html")Ol(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ol(r);for(var m=r.firstChild;m;){var E=m.nextSibling,C=m.nodeName;m[kr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=E}}else r==="body"&&Ol(t.ownerDocument.body);r=h}while(r);ho(i)}function gv(t,i){var r=t;t=0;do{var u=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=u}while(r)}function vd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":vd(r),U(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function CE(t,i,r,u){for(;t.nodeType===1;){var h=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(u){if(!t[kr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ii(t.nextSibling),t===null)break}return null}function wE(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ii(t.nextSibling),t===null))return null;return t}function vv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ii(t.nextSibling),t===null))return null;return t}function xd(t){return t.data==="$?"||t.data==="$~"}function Sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function DE(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var u=function(){i(),r.removeEventListener("DOMContentLoaded",u)};r.addEventListener("DOMContentLoaded",u),t._reactRetry=u}}function Ii(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var yd=null;function xv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return Ii(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function Sv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function yv(t,i,r){switch(i=mc(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ol(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);U(t)}var Fi=new Map,Mv=new Set;function _c(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var za=G.d;G.d={f:UE,r:NE,D:LE,C:OE,L:PE,m:zE,X:IE,S:BE,M:FE};function UE(){var t=za.f(),i=oc();return t||i}function NE(t){var i=re(t);i!==null&&i.tag===5&&i.type==="form"?Fg(i):za.r(t)}var uo=typeof document>"u"?null:document;function Ev(t,i,r){var u=uo;if(u&&typeof i=="string"&&i){var h=St(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Mv.has(h)||(Mv.add(h),t={rel:t,crossOrigin:r,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Fn(i,"link",t),Se(i),u.head.appendChild(i)))}}function LE(t){za.D(t),Ev("dns-prefetch",t,null)}function OE(t,i){za.C(t,i),Ev("preconnect",t,i)}function PE(t,i,r){za.L(t,i,r);var u=uo;if(u&&t&&i){var h='link[rel="preload"][as="'+St(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+St(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+St(r.imageSizes)+'"]')):h+='[href="'+St(t)+'"]';var m=h;switch(i){case"style":m=co(t);break;case"script":m=fo(t)}Fi.has(m)||(t=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),Fi.set(m,t),u.querySelector(h)!==null||i==="style"&&u.querySelector(Pl(m))||i==="script"&&u.querySelector(zl(m))||(i=u.createElement("link"),Fn(i,"link",t),Se(i),u.head.appendChild(i)))}}function zE(t,i){za.m(t,i);var r=uo;if(r&&t){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+St(u)+'"][href="'+St(t)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fo(t)}if(!Fi.has(m)&&(t=g({rel:"modulepreload",href:t},i),Fi.set(m,t),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(zl(m)))return}u=r.createElement("link"),Fn(u,"link",t),Se(u),r.head.appendChild(u)}}}function BE(t,i,r){za.S(t,i,r);var u=uo;if(u&&t){var h=Q(u).hoistableStyles,m=co(t);i=i||"default";var E=h.get(m);if(!E){var C={loading:0,preload:null};if(E=u.querySelector(Pl(m)))C.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},r),(r=Fi.get(m))&&Md(t,r);var V=E=u.createElement("link");Se(V),Fn(V,"link",t),V._p=new Promise(function(te,de){V.onload=te,V.onerror=de}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,gc(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:C},h.set(m,E)}}}function IE(t,i){za.X(t,i);var r=uo;if(r&&t){var u=Q(r).hoistableScripts,h=fo(t),m=u.get(h);m||(m=r.querySelector(zl(h)),m||(t=g({src:t,async:!0},i),(i=Fi.get(h))&&Ed(t,i),m=r.createElement("script"),Se(m),Fn(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function FE(t,i){za.M(t,i);var r=uo;if(r&&t){var u=Q(r).hoistableScripts,h=fo(t),m=u.get(h);m||(m=r.querySelector(zl(h)),m||(t=g({src:t,async:!0,type:"module"},i),(i=Fi.get(h))&&Ed(t,i),m=r.createElement("script"),Se(m),Fn(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function Tv(t,i,r,u){var h=(h=ie.current)?_c(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=co(r.href),r=Q(h).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=co(r.href);var m=Q(h).hoistableStyles,E=m.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=h.querySelector(Pl(t)))&&!m._p&&(E.instance=m,E.state.loading=5),Fi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Fi.set(t,r),m||HE(h,t,r,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=fo(r),r=Q(h).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function co(t){return'href="'+St(t)+'"'}function Pl(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function HE(t,i,r,u){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=t.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Fn(i,"link",r),Se(i),t.head.appendChild(i))}function fo(t){return'[src="'+St(t)+'"]'}function zl(t){return"script[async]"+t}function Av(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=t.querySelector('style[data-href~="'+St(r.href)+'"]');if(u)return i.instance=u,Se(u),u;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(t.ownerDocument||t).createElement("style"),Se(u),Fn(u,"style",h),gc(u,r.precedence,t),i.instance=u;case"stylesheet":h=co(r.href);var m=t.querySelector(Pl(h));if(m)return i.state.loading|=4,i.instance=m,Se(m),m;u=bv(r),(h=Fi.get(h))&&Md(u,h),m=(t.ownerDocument||t).createElement("link"),Se(m);var E=m;return E._p=new Promise(function(C,V){E.onload=C,E.onerror=V}),Fn(m,"link",u),i.state.loading|=4,gc(m,r.precedence,t),i.instance=m;case"script":return m=fo(r.src),(h=t.querySelector(zl(m)))?(i.instance=h,Se(h),h):(u=r,(h=Fi.get(m))&&(u=g({},r),Ed(u,h)),t=t.ownerDocument||t,h=t.createElement("script"),Se(h),Fn(h,"link",u),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,gc(u,r.precedence,t));return i.instance}function gc(t,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var C=u[E];if(C.dataset.precedence===i)m=C;else if(m!==h)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Md(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Ed(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var vc=null;function Rv(t,i,r){if(vc===null){var u=new Map,h=vc=new Map;h.set(r,u)}else h=vc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(t))return u;for(u.set(t,null),r=r.getElementsByTagName(t),h=0;h<r.length;h++){var m=r[h];if(!(m[kr]||m[mn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var C=u.get(E);C?C.push(m):u.set(E,[m])}}return u}function Cv(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function GE(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function wv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function VE(t,i,r,u){if(r.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=co(u.href),m=i.querySelector(Pl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=xc.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=m,Se(m);return}m=i.ownerDocument||i,u=bv(u),(h=Fi.get(h))&&Md(u,h),m=m.createElement("link"),Se(m);var E=m;E._p=new Promise(function(C,V){E.onload=C,E.onerror=V}),Fn(m,"link",u),r.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=xc.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Td=0;function kE(t,i){return t.stylesheets&&t.count===0&&yc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var u=setTimeout(function(){if(t.stylesheets&&yc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Td===0&&(Td=62500*EE());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&yc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Td?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function yc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,i.forEach(XE,t),Sc=null,xc.call(t))}function XE(t,i){if(!(i.state.loading&4)){var r=Sc.get(t);if(r)var u=r.get(null);else{r=new Map,Sc.set(t,r);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),u=E)}u&&r.set(null,u)}h=i.instance,E=h.getAttribute("data-precedence"),m=r.get(E)||u,m===u&&r.set(null,h),r.set(E,h),this.count++,u=xc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Bl={$$typeof:w,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function qE(t,i,r,u,h,m,E,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Dv(t,i,r,u,h,m,E,C,V,te,de,ge){return t=new qE(t,i,r,E,V,te,de,ge,C),i=1,m===!0&&(i|=24),m=pi(3,null,null,i),t.current=m,m.stateNode=t,i=ih(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:i},oh(m),t}function Uv(t){return t?(t=Vs,t):Vs}function Nv(t,i,r,u,h,m){h=Uv(h),u.context===null?u.context=h:u.pendingContext=h,u=ar(i),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=rr(t,u,i),r!==null&&(ri(r,t,i),ml(r,t,i))}function Lv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function bd(t,i){Lv(t,i),(t=t.alternate)&&Lv(t,i)}function Ov(t){if(t.tag===13||t.tag===31){var i=jr(t,67108864);i!==null&&ri(i,t,67108864),bd(t,67108864)}}function Pv(t){if(t.tag===13||t.tag===31){var i=xi();i=Ns(i);var r=jr(t,i);r!==null&&ri(r,t,i),bd(t,i)}}var Mc=!0;function WE(t,i,r,u){var h=z.T;z.T=null;var m=G.p;try{G.p=2,Ad(t,i,r,u)}finally{G.p=m,z.T=h}}function YE(t,i,r,u){var h=z.T;z.T=null;var m=G.p;try{G.p=8,Ad(t,i,r,u)}finally{G.p=m,z.T=h}}function Ad(t,i,r,u){if(Mc){var h=Rd(u);if(h===null)hd(t,i,u,Ec,r),Bv(t,u);else if(ZE(h,t,i,r,u))u.stopPropagation();else if(Bv(t,u),i&4&&-1<jE.indexOf(t)){for(;h!==null;){var m=re(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ee(m.pendingLanes);if(E!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;E;){var V=1<<31-Fe(E);C.entanglements[1]|=V,E&=~V}ca(m),(Ot&6)===0&&(rc=A()+500,Ul(0))}}break;case 31:case 13:C=jr(m,2),C!==null&&ri(C,m,2),oc(),bd(m,2)}if(m=Rd(u),m===null&&hd(t,i,u,Ec,r),m===h)break;h=m}h!==null&&u.stopPropagation()}else hd(t,i,u,null,r)}}function Rd(t){return t=wf(t),Cd(t)}var Ec=null;function Cd(t){if(Ec=null,t=Z(t),t!==null){var i=l(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=c(i),t!==null)return t;t=null}else if(r===31){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ec=t,null}function zv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case pe:return 2;case ye:return 8;case he:case Ze:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var wd=!1,_r=null,gr=null,vr=null,Il=new Map,Fl=new Map,xr=[],jE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bv(t,i){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Il.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(i.pointerId)}}function Hl(t,i,r,u,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=re(i),i!==null&&Ov(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function ZE(t,i,r,u,h){switch(i){case"focusin":return _r=Hl(_r,t,i,r,u,h),!0;case"dragenter":return gr=Hl(gr,t,i,r,u,h),!0;case"mouseover":return vr=Hl(vr,t,i,r,u,h),!0;case"pointerover":var m=h.pointerId;return Il.set(m,Hl(Il.get(m)||null,t,i,r,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Fl.set(m,Hl(Fl.get(m)||null,t,i,r,u,h)),!0}return!1}function Iv(t){var i=Z(t.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){t.blockedOn=i,Jo(t.priority,function(){Pv(r)});return}}else if(i===31){if(i=f(r),i!==null){t.blockedOn=i,Jo(t.priority,function(){Pv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Rd(t.nativeEvent);if(r===null){r=t.nativeEvent;var u=new r.constructor(r.type,r);Cf=u,r.target.dispatchEvent(u),Cf=null}else return i=re(r),i!==null&&Ov(i),t.blockedOn=r,!1;i.shift()}return!0}function Fv(t,i,r){Tc(t)&&r.delete(i)}function KE(){wd=!1,_r!==null&&Tc(_r)&&(_r=null),gr!==null&&Tc(gr)&&(gr=null),vr!==null&&Tc(vr)&&(vr=null),Il.forEach(Fv),Fl.forEach(Fv)}function bc(t,i){t.blockedOn===i&&(t.blockedOn=null,wd||(wd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,KE)))}var Ac=null;function Hv(t){Ac!==t&&(Ac=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ac===t&&(Ac=null);for(var i=0;i<t.length;i+=3){var r=t[i],u=t[i+1],h=t[i+2];if(typeof u!="function"){if(Cd(u||r)===null)continue;break}var m=re(r);m!==null&&(t.splice(i,3),i-=3,Rh(m,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function ho(t){function i(V){return bc(V,t)}_r!==null&&bc(_r,t),gr!==null&&bc(gr,t),vr!==null&&bc(vr,t),Il.forEach(i),Fl.forEach(i);for(var r=0;r<xr.length;r++){var u=xr[r];u.blockedOn===t&&(u.blockedOn=null)}for(;0<xr.length&&(r=xr[0],r.blockedOn===null);)Iv(r),r.blockedOn===null&&xr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],m=r[u+1],E=h[On]||null;if(typeof m=="function")E||Hv(r);else if(E){var C=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[On]||null)C=E.formAction;else if(Cd(h)!==null)continue}else C=E.action;typeof C=="function"?r[u+1]=C:(r.splice(u,3),u-=3),Hv(r)}}}function Gv(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(r,20)}function r(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){u=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Dd(t){this._internalRoot=t}Rc.prototype.render=Dd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=xi();Nv(r,u,t,i,null,null)},Rc.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nv(t.current,2,null,t,null,null),oc(),i[Qa]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Vr();t={blockedOn:null,target:t,priority:i};for(var r=0;r<xr.length&&i!==0&&i<xr[r].priority;r++);xr.splice(r,0,t),r===0&&Iv(t)}};var Vv=e.version;if(Vv!=="19.2.0")throw Error(a(527,Vv,"19.2.0"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var QE={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{be=Cc.inject(QE),we=Cc}catch{}}return Vl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,u="",h=Zg,m=Kg,E=Qg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=Dv(t,1,!1,null,null,r,u,null,h,m,E,Gv),t[Qa]=i.current,fd(t),new Dd(i)},Vl.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var u=!1,h="",m=Zg,E=Kg,C=Qg,V=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=Dv(t,1,!0,i,r??null,u,h,V,m,E,C,Gv),i.context=Uv(null),r=i.current,u=xi(),u=Ns(u),h=ar(u),h.callback=null,rr(r,h,u),r=u,i.current.lanes=r,Zn(i,r),ca(i),t[Qa]=i.current,fd(t),new Rc(i)},Vl.version="19.2.0",Vl}var Jv;function uT(){if(Jv)return Ld.exports;Jv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ld.exports=lT(),Ld.exports}var cT=uT();const fT="/StarMobile/assets/StarLogo5-CmSN2yeg.svg";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="180",hT=0,$v=1,dT=2,gS=1,pT=2,Va=3,Ya=0,Nn=1,Ei=2,ga=0,No=1,ex=2,tx=3,nx=4,mT=5,vs=100,_T=101,gT=102,vT=103,xT=104,ST=200,yT=201,MT=202,ET=203,bp=204,Ap=205,TT=206,bT=207,AT=208,RT=209,CT=210,wT=211,DT=212,UT=213,NT=214,Rp=0,Cp=1,wp=2,Bo=3,Dp=4,Up=5,Np=6,Lp=7,vS=0,LT=1,OT=2,Ur=0,PT=1,zT=2,BT=3,IT=4,FT=5,HT=6,GT=7,xS=300,Io=301,Fo=302,Op=303,Pp=304,Sf=306,zp=1e3,Ss=1001,Bp=1002,ia=1003,VT=1004,wc=1005,Yn=1006,Bd=1007,ys=1008,Ci=1009,SS=1010,yS=1011,tu=1012,Om=1013,Or=1014,qa=1015,fu=1016,Pm=1017,zm=1018,Ho=1020,MS=35902,ES=35899,TS=1021,bS=1022,ta=1023,nu=1026,Go=1027,AS=1028,Bm=1029,RS=1030,Im=1031,Fm=1033,$c=33776,ef=33777,tf=33778,nf=33779,Ip=35840,Fp=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,qp=37808,Wp=37809,Yp=37810,jp=37811,Zp=37812,Kp=37813,Qp=37814,Jp=37815,$p=37816,em=37817,tm=37818,nm=37819,im=37820,am=37821,rm=36492,sm=36494,om=36495,lm=36283,um=36284,cm=36285,fm=36286,hu=3200,kT=3201,XT=0,qT=1,da="",dn="srgb",Pr="srgb-linear",uf="linear",Xt="srgb",po=7680,ix=519,WT=512,YT=513,jT=514,CS=515,ZT=516,KT=517,QT=518,JT=519,ax=35044,hm="300 es",ma=2e3,cf=2001;class Ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Id=Math.PI/180,dm=180/Math.PI;function du(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[a&255]+Xn[a>>8&255]+Xn[a>>16&255]+Xn[a>>24&255]).toLowerCase()}function bt(s,e,n){return Math.max(e,Math.min(n,s))}function $T(s,e){return(s%e+e)%e}function Fd(s,e,n){return(1-n)*s+n*e}function kl(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,n=0){_t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(bt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(bt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*a-c*o+e.x,this.y=l*o+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pu{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,l,c,f){let p=a[o+0],d=a[o+1],_=a[o+2],g=a[o+3];const v=l[c+0],S=l[c+1],T=l[c+2],M=l[c+3];if(f===0){e[n+0]=p,e[n+1]=d,e[n+2]=_,e[n+3]=g;return}if(f===1){e[n+0]=v,e[n+1]=S,e[n+2]=T,e[n+3]=M;return}if(g!==M||p!==v||d!==S||_!==T){let y=1-f;const x=p*v+d*S+_*T+g*M,D=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const O=Math.sqrt(w),P=Math.atan2(O,x*D);y=Math.sin(y*P)/O,f=Math.sin(f*P)/O}const R=f*D;if(p=p*y+v*R,d=d*y+S*R,_=_*y+T*R,g=g*y+M*R,y===1-f){const O=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=O,d*=O,_*=O,g*=O}}e[n]=p,e[n+1]=d,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,o,l,c){const f=a[o],p=a[o+1],d=a[o+2],_=a[o+3],g=l[c],v=l[c+1],S=l[c+2],T=l[c+3];return e[n]=f*T+_*g+p*S-d*v,e[n+1]=p*T+_*v+d*g-f*S,e[n+2]=d*T+_*S+f*v-p*g,e[n+3]=_*T-f*g-p*v-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(o/2),g=f(l/2),v=p(a/2),S=p(o/2),T=p(l/2);switch(c){case"XYZ":this._x=v*_*g+d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g-v*S*T;break;case"YXZ":this._x=v*_*g+d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g+v*S*T;break;case"ZXY":this._x=v*_*g-d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g-v*S*T;break;case"ZYX":this._x=v*_*g-d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g+v*S*T;break;case"YZX":this._x=v*_*g+d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g-v*S*T;break;case"XZY":this._x=v*_*g-d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(l-d)*S,this._z=(c-o)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(_-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+d)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(l-d)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(c-o)/S,this._x=(l+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,l=e._z,c=e._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+o*d-l*p,this._y=o*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-o*f,this._w=c*_-a*f-o*p-l*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+a*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=a,this._y=o,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*a+n*this._x,this._y=S*o+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const d=Math.sqrt(p),_=Math.atan2(d,f),g=Math.sin((1-n)*_)/d,v=Math.sin(n*_)/d;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,a=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*o,this.y=l[1]*n+l[4]*a+l[7]*o,this.z=l[2]*n+l[5]*a+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,l=e.elements,c=1/(l[3]*n+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*o+l[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,l=e.x,c=e.y,f=e.z,p=e.w,d=2*(c*o-f*a),_=2*(f*n-l*o),g=2*(l*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-l*g,this.z=o+p*g+l*_-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*o,this.y=l[1]*n+l[5]*a+l[9]*o,this.z=l[2]*n+l[6]*a+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(bt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=o*p-l*f,this.y=l*c-a*p,this.z=a*f-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(bt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new ue,rx=new pu;class dt{constructor(e,n,a,o,l,c,f,p,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,l,c,f,p,d)}set(e,n,a,o,l,c,f,p,d){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],S=a[5],T=a[8],M=o[0],y=o[3],x=o[6],D=o[1],w=o[4],R=o[7],O=o[2],P=o[5],L=o[8];return l[0]=c*M+f*D+p*O,l[3]=c*y+f*w+p*P,l[6]=c*x+f*R+p*L,l[1]=d*M+_*D+g*O,l[4]=d*y+_*w+g*P,l[7]=d*x+_*R+g*L,l[2]=v*M+S*D+T*O,l[5]=v*y+S*w+T*P,l[8]=v*x+S*R+T*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],_=e[8];return n*c*_-n*f*d-a*l*_+a*f*p+o*l*d-o*c*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],_=e[8],g=_*c-f*d,v=f*p-_*l,S=d*l-c*p,T=n*g+a*v+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=g*M,e[1]=(o*d-_*a)*M,e[2]=(f*a-o*c)*M,e[3]=v*M,e[4]=(_*n-o*p)*M,e[5]=(o*l-f*n)*M,e[6]=S*M,e[7]=(a*p-d*n)*M,e[8]=(c*n-a*l)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+e,-o*d,o*p,-o*(-d*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Gd.makeScale(e,n)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new dt;function wS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ff(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function e1(){const s=ff("canvas");return s.style.display="block",s}const sx={};function iu(s){s in sx||(sx[s]=!0,console.warn(s))}function t1(s,e,n){return new Promise(function(a,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const ox=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lx=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n1(){const s={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Xt&&(o.r=Wa(o.r),o.g=Wa(o.g),o.b=Wa(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Xt&&(o.r=Lo(o.r),o.g=Lo(o.g),o.b=Lo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===da?uf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return iu("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return iu("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Pr]:{primaries:e,whitePoint:a,transfer:uf,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:a,transfer:Xt,toXYZ:ox,fromXYZ:lx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}const Nt=n1();function Wa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let mo;class i1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{mo===void 0&&(mo=ff("canvas")),mo.width=e.width,mo.height=e.height;const o=mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=mo}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ff("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Wa(l[c]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Wa(n[a]/255)*255):n[a]=Wa(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a1=0;class Hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=du(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Vd(o[c].image)):l.push(Vd(o[c]))}else l=Vd(o);a.url=l}return n||(e.images[this.uuid]=a),a}}function Vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?i1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r1=0;const kd=new ue;class Hn extends Ir{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=Ss,o=Ss,l=Yn,c=ys,f=ta,p=Ci,d=Hn.DEFAULT_ANISOTROPY,_=da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=du(),this.name="",this.source=new Hm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zp:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case Bp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zp:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case Bp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=xS;Hn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,n=0,a=0,o=1){pn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,l;const p=e.elements,d=p[0],_=p[4],g=p[8],v=p[1],S=p[5],T=p[9],M=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(T+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,R=(S+1)/2,O=(x+1)/2,P=(_+v)/4,L=(g+M)/4,F=(T+y)/4;return w>R&&w>O?w<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(w),o=P/a,l=L/a):R>O?R<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),a=P/o,l=F/o):O<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),a=L/l,o=F/l),this.set(a,o,l,n),this}let D=Math.sqrt((y-T)*(y-T)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(g-M)/D,this.z=(v-_)/D,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(bt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s1 extends Ir{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new pn(0,0,e,n),this.scissorTest=!1,this.viewport=new pn(0,0,e,n);const o={width:e,height:n,depth:a.depth},l=new Hn(o);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Hm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends s1{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class DS extends Hn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=ia,this.minFilter=ia,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o1 extends Hn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=ia,this.minFilter=ia,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mu{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Qi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Qi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Qi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Qi):Qi.fromBufferAttribute(l,c),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Dc.copy(a.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xl),Uc.subVectors(this.max,Xl),_o.subVectors(e.a,Xl),go.subVectors(e.b,Xl),vo.subVectors(e.c,Xl),yr.subVectors(go,_o),Mr.subVectors(vo,go),os.subVectors(_o,vo);let n=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-os.z,os.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,os.z,0,-os.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-os.y,os.x,0];return!Xd(n,_o,go,vo,Uc)||(n=[1,0,0,0,1,0,0,0,1],!Xd(n,_o,go,vo,Uc))?!1:(Nc.crossVectors(yr,Mr),n=[Nc.x,Nc.y,Nc.z],Xd(n,_o,go,vo,Uc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ba=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Qi=new ue,Dc=new mu,_o=new ue,go=new ue,vo=new ue,yr=new ue,Mr=new ue,os=new ue,Xl=new ue,Uc=new ue,Nc=new ue,ls=new ue;function Xd(s,e,n,a,o){for(let l=0,c=s.length-3;l<=c;l+=3){ls.fromArray(s,l);const f=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),p=e.dot(ls),d=n.dot(ls),_=a.dot(ls);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const l1=new mu,ql=new ue,qd=new ue;class Gm{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):l1.setFromPoints(e).getCenter(a);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ql.subVectors(e,this.center);const n=ql.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(ql,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ql.copy(e.center).add(qd)),this.expandByPoint(ql.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ia=new ue,Wd=new ue,Lc=new ue,Er=new ue,Yd=new ue,Oc=new ue,jd=new ue;class u1{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ia)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ia.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ia.copy(this.origin).addScaledVector(this.direction,n),Ia.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Wd.copy(e).add(n).multiplyScalar(.5),Lc.copy(n).sub(e).normalize(),Er.copy(this.origin).sub(Wd);const l=e.distanceTo(n)*.5,c=-this.direction.dot(Lc),f=Er.dot(this.direction),p=-Er.dot(Lc),d=Er.lengthSq(),_=Math.abs(1-c*c);let g,v,S,T;if(_>0)if(g=c*p-f,v=c*f-p,T=l*_,g>=0)if(v>=-T)if(v<=T){const M=1/_;g*=M,v*=M,S=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v<=-T?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),S=-g*g+v*(v+2*p)+d):v<=T?(g=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),S=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Wd).addScaledVector(Lc,v),S}intersectSphere(e,n){Ia.subVectors(e.center,this.origin);const a=Ia.dot(this.direction),o=Ia.dot(Ia)-a*a,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),_>=0?(l=(e.min.y-v.y)*_,c=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,c=(e.min.y-v.y)*_),a>c||l>o||((l>a||isNaN(a))&&(a=l),(c<o||isNaN(o))&&(o=c),g>=0?(f=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ia)!==null}intersectTriangle(e,n,a,o,l){Yd.subVectors(n,e),Oc.subVectors(a,e),jd.crossVectors(Yd,Oc);let c=this.direction.dot(jd),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Er.subVectors(this.origin,e);const p=f*this.direction.dot(Oc.crossVectors(Er,Oc));if(p<0)return null;const d=f*this.direction.dot(Yd.cross(Er));if(d<0||p+d>c)return null;const _=-f*Er.dot(jd);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An{constructor(e,n,a,o,l,c,f,p,d,_,g,v,S,T,M,y){An.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,l,c,f,p,d,_,g,v,S,T,M,y)}set(e,n,a,o,l,c,f,p,d,_,g,v,S,T,M,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=a,x[12]=o,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=T,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new An().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/xo.setFromMatrixColumn(e,0).length(),l=1/xo.setFromMatrixColumn(e,1).length(),c=1/xo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,l=e.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*_,S=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=S+T*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=T+S*d,n[10]=c*p}else if(e.order==="YXZ"){const v=p*_,S=p*g,T=d*_,M=d*g;n[0]=v+M*f,n[4]=T*f-S,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=S*f-T,n[6]=M+v*f,n[10]=c*p}else if(e.order==="ZXY"){const v=p*_,S=p*g,T=d*_,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=T+S*f,n[1]=S+T*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const v=c*_,S=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=T*d-S,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=S*d-T,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const v=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=T*g+S,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*g+T,n[10]=v-M*g}else if(e.order==="XZY"){const v=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=c*_,n[9]=S*g-T,n[2]=T*g-S,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c1,e,f1)}lookAt(e,n,a){const o=this.elements;return Si.subVectors(e,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Tr.crossVectors(a,Si),Tr.lengthSq()===0&&(Math.abs(a.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Tr.crossVectors(a,Si)),Tr.normalize(),Pc.crossVectors(Si,Tr),o[0]=Tr.x,o[4]=Pc.x,o[8]=Si.x,o[1]=Tr.y,o[5]=Pc.y,o[9]=Si.y,o[2]=Tr.z,o[6]=Pc.z,o[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],S=a[13],T=a[2],M=a[6],y=a[10],x=a[14],D=a[3],w=a[7],R=a[11],O=a[15],P=o[0],L=o[4],F=o[8],b=o[12],N=o[1],H=o[5],j=o[9],J=o[13],oe=o[2],X=o[6],z=o[10],G=o[14],q=o[3],ce=o[7],_e=o[11],B=o[15];return l[0]=c*P+f*N+p*oe+d*q,l[4]=c*L+f*H+p*X+d*ce,l[8]=c*F+f*j+p*z+d*_e,l[12]=c*b+f*J+p*G+d*B,l[1]=_*P+g*N+v*oe+S*q,l[5]=_*L+g*H+v*X+S*ce,l[9]=_*F+g*j+v*z+S*_e,l[13]=_*b+g*J+v*G+S*B,l[2]=T*P+M*N+y*oe+x*q,l[6]=T*L+M*H+y*X+x*ce,l[10]=T*F+M*j+y*z+x*_e,l[14]=T*b+M*J+y*G+x*B,l[3]=D*P+w*N+R*oe+O*q,l[7]=D*L+w*H+R*X+O*ce,l[11]=D*F+w*j+R*z+O*_e,l[15]=D*b+w*J+R*G+O*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],l=e[12],c=e[1],f=e[5],p=e[9],d=e[13],_=e[2],g=e[6],v=e[10],S=e[14],T=e[3],M=e[7],y=e[11],x=e[15];return T*(+l*p*g-o*d*g-l*f*v+a*d*v+o*f*S-a*p*S)+M*(+n*p*S-n*d*v+l*c*v-o*c*S+o*d*_-l*p*_)+y*(+n*d*g-n*f*S-l*c*g+a*c*S+l*f*_-a*d*_)+x*(-o*f*_-n*p*g+n*f*v+o*c*g-a*c*v+a*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],p=e[6],d=e[7],_=e[8],g=e[9],v=e[10],S=e[11],T=e[12],M=e[13],y=e[14],x=e[15],D=g*y*d-M*v*d+M*p*S-f*y*S-g*p*x+f*v*x,w=T*v*d-_*y*d-T*p*S+c*y*S+_*p*x-c*v*x,R=_*M*d-T*g*d+T*f*S-c*M*S-_*f*x+c*g*x,O=T*g*p-_*M*p-T*f*v+c*M*v+_*f*y-c*g*y,P=n*D+a*w+o*R+l*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=D*L,e[1]=(M*v*l-g*y*l-M*o*S+a*y*S+g*o*x-a*v*x)*L,e[2]=(f*y*l-M*p*l+M*o*d-a*y*d-f*o*x+a*p*x)*L,e[3]=(g*p*l-f*v*l-g*o*d+a*v*d+f*o*S-a*p*S)*L,e[4]=w*L,e[5]=(_*y*l-T*v*l+T*o*S-n*y*S-_*o*x+n*v*x)*L,e[6]=(T*p*l-c*y*l-T*o*d+n*y*d+c*o*x-n*p*x)*L,e[7]=(c*v*l-_*p*l+_*o*d-n*v*d-c*o*S+n*p*S)*L,e[8]=R*L,e[9]=(T*g*l-_*M*l-T*a*S+n*M*S+_*a*x-n*g*x)*L,e[10]=(c*M*l-T*f*l+T*a*d-n*M*d-c*a*x+n*f*x)*L,e[11]=(_*f*l-c*g*l-_*a*d+n*g*d+c*a*S-n*f*S)*L,e[12]=O*L,e[13]=(_*M*o-T*g*o+T*a*v-n*M*v-_*a*y+n*g*y)*L,e[14]=(T*f*o-c*M*o-T*a*p+n*M*p+c*a*y-n*f*y)*L,e[15]=(c*g*o-_*f*o+_*a*p-n*g*p-c*a*v+n*f*v)*L,this}scale(e){const n=this.elements,a=e.x,o=e.y,l=e.z;return n[0]*=a,n[4]*=o,n[8]*=l,n[1]*=a,n[5]*=o,n[9]*=l,n[2]*=a,n[6]*=o,n[10]*=l,n[3]*=a,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),l=1-a,c=e.x,f=e.y,p=e.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-o*p,d*p+o*f,0,d*f+o*p,_*f+a,_*p-o*c,0,d*p-o*f,_*p+o*c,l*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,l,c){return this.set(1,a,l,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,g=f+f,v=l*d,S=l*_,T=l*g,M=c*_,y=c*g,x=f*g,D=p*d,w=p*_,R=p*g,O=a.x,P=a.y,L=a.z;return o[0]=(1-(M+x))*O,o[1]=(S+R)*O,o[2]=(T-w)*O,o[3]=0,o[4]=(S-R)*P,o[5]=(1-(v+x))*P,o[6]=(y+D)*P,o[7]=0,o[8]=(T+w)*L,o[9]=(y-D)*L,o[10]=(1-(v+M))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let l=xo.set(o[0],o[1],o[2]).length();const c=xo.set(o[4],o[5],o[6]).length(),f=xo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Ji.copy(this);const d=1/l,_=1/c,g=1/f;return Ji.elements[0]*=d,Ji.elements[1]*=d,Ji.elements[2]*=d,Ji.elements[4]*=_,Ji.elements[5]*=_,Ji.elements[6]*=_,Ji.elements[8]*=g,Ji.elements[9]*=g,Ji.elements[10]*=g,n.setFromRotationMatrix(Ji),a.x=l,a.y=c,a.z=f,this}makePerspective(e,n,a,o,l,c,f=ma,p=!1){const d=this.elements,_=2*l/(n-e),g=2*l/(a-o),v=(n+e)/(n-e),S=(a+o)/(a-o);let T,M;if(p)T=l/(c-l),M=c*l/(c-l);else if(f===ma)T=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===cf)T=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,o,l,c,f=ma,p=!1){const d=this.elements,_=2/(n-e),g=2/(a-o),v=-(n+e)/(n-e),S=-(a+o)/(a-o);let T,M;if(p)T=1/(c-l),M=c/(c-l);else if(f===ma)T=-2/(c-l),M=-(c+l)/(c-l);else if(f===cf)T=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const xo=new ue,Ji=new An,c1=new ue(0,0,0),f1=new ue(1,1,1),Tr=new ue,Pc=new ue,Si=new ue,ux=new An,cx=new pu;class ja{constructor(e=0,n=0,a=0,o=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],p=o[1],d=o[5],_=o[9],g=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return ux.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ux,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cx.setFromEuler(this),this.setFromQuaternion(cx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class US{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h1=0;const fx=new ue,So=new pu,Fa=new An,zc=new ue,Wl=new ue,d1=new ue,p1=new pu,hx=new ue(1,0,0),dx=new ue(0,1,0),px=new ue(0,0,1),mx={type:"added"},m1={type:"removed"},yo={type:"childadded",child:null},Zd={type:"childremoved",child:null};class Ai extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=du(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ai.DEFAULT_UP.clone();const e=new ue,n=new ja,a=new pu,o=new ue(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new An},normalMatrix:{value:new dt}}),this.matrix=new An,this.matrixWorld=new An,this.matrixAutoUpdate=Ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new US,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(hx,e)}rotateY(e){return this.rotateOnAxis(dx,e)}rotateZ(e){return this.rotateOnAxis(px,e)}translateOnAxis(e,n){return fx.copy(e).applyQuaternion(this.quaternion),this.position.add(fx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hx,e)}translateY(e){return this.translateOnAxis(dx,e)}translateZ(e){return this.translateOnAxis(px,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?zc.copy(e):zc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fa.lookAt(Wl,zc,this.up):Fa.lookAt(zc,Wl,this.up),this.quaternion.setFromRotationMatrix(Fa),o&&(Fa.extractRotation(o.matrixWorld),So.setFromRotationMatrix(Fa),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mx),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(m1),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mx),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,e,d1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,p1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];l(e.shapes,g)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),d=c(e.textures),_=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),T.length>0&&(a.nodes=T)}return a.object=o,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Ai.DEFAULT_UP=new ue(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new ue,Ha=new ue,Kd=new ue,Ga=new ue,Mo=new ue,Eo=new ue,_x=new ue,Qd=new ue,Jd=new ue,$d=new ue,ep=new pn,tp=new pn,np=new pn;class ea{constructor(e=new ue,n=new ue,a=new ue){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),$i.subVectors(e,n),o.cross($i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,a,o,l){$i.subVectors(o,n),Ha.subVectors(a,n),Kd.subVectors(e,n);const c=$i.dot($i),f=$i.dot(Ha),p=$i.dot(Kd),d=Ha.dot(Ha),_=Ha.dot(Kd),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(d*p-f*_)*v,T=(c*_-f*p)*v;return l.set(1-S-T,T,S)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(e,n,a,o,l,c,f,p){return this.getBarycoord(e,n,a,o,Ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ga.x),p.addScaledVector(c,Ga.y),p.addScaledVector(f,Ga.z),p)}static getInterpolatedAttribute(e,n,a,o,l,c){return ep.setScalar(0),tp.setScalar(0),np.setScalar(0),ep.fromBufferAttribute(e,n),tp.fromBufferAttribute(e,a),np.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(ep,l.x),c.addScaledVector(tp,l.y),c.addScaledVector(np,l.z),c}static isFrontFacing(e,n,a,o){return $i.subVectors(a,n),Ha.subVectors(e,n),$i.cross(Ha).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),$i.cross(Ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ea.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ea.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,l){return ea.getInterpolation(e,this.a,this.b,this.c,n,a,o,l)}containsPoint(e){return ea.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ea.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,l=this.c;let c,f;Mo.subVectors(o,a),Eo.subVectors(l,a),Qd.subVectors(e,a);const p=Mo.dot(Qd),d=Eo.dot(Qd);if(p<=0&&d<=0)return n.copy(a);Jd.subVectors(e,o);const _=Mo.dot(Jd),g=Eo.dot(Jd);if(_>=0&&g<=_)return n.copy(o);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(Mo,c);$d.subVectors(e,l);const S=Mo.dot($d),T=Eo.dot($d);if(T>=0&&S<=T)return n.copy(l);const M=S*d-p*T;if(M<=0&&d>=0&&T<=0)return f=d/(d-T),n.copy(a).addScaledVector(Eo,f);const y=_*T-S*g;if(y<=0&&g-_>=0&&S-T>=0)return _x.subVectors(l,o),f=(g-_)/(g-_+(S-T)),n.copy(o).addScaledVector(_x,f);const x=1/(y+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(Mo,c).addScaledVector(Eo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const NS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function ip(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Bt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Nt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Nt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Nt.workingColorSpace){if(e=$T(e,1),n=bt(n,0,1),a=bt(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=ip(c,l,e+1/3),this.g=ip(c,l,e),this.b=ip(c,l,e-1/3)}return Nt.colorSpaceToWorking(this,o),this}setStyle(e,n=dn){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=dn){const a=NS[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Nt.workingToColorSpace(qn.copy(this),e),Math.round(bt(qn.r*255,0,255))*65536+Math.round(bt(qn.g*255,0,255))*256+Math.round(bt(qn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nt.workingColorSpace){Nt.workingToColorSpace(qn.copy(this),n);const a=qn.r,o=qn.g,l=qn.b,c=Math.max(a,o,l),f=Math.min(a,o,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(o-l)/g+(o<l?6:0);break;case o:p=(l-a)/g+2;break;case l:p=(a-o)/g+4;break}p/=6}return e.h=p,e.s=d,e.l=_,e}getRGB(e,n=Nt.workingColorSpace){return Nt.workingToColorSpace(qn.copy(this),n),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=dn){Nt.workingToColorSpace(qn.copy(this),e);const n=qn.r,a=qn.g,o=qn.b;return e!==dn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(br),this.setHSL(br.h+e,br.s+n,br.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(br),e.getHSL(Bc);const a=Fd(br.h,Bc.h,n),o=Fd(br.s,Bc.s,n),l=Fd(br.l,Bc.l,n);return this.setHSL(a,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*o,this.g=l[1]*n+l[4]*a+l[7]*o,this.b=l[2]*n+l[5]*a+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Bt;Bt.NAMES=NS;let _1=0;class Zo extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=du(),this.name="",this.type="Material",this.blending=No,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Ap,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ix,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(a.blending=this.blending),this.side!==Ya&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==bp&&(a.blendSrc=this.blendSrc),this.blendDst!==Ap&&(a.blendDst=this.blendDst),this.blendEquation!==vs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ix&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(a.stencilFail=this.stencilFail),this.stencilZFail!==po&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=o(e.textures),c=o(e.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class LS extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.combine=vS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new ue,Ic=new _t;let g1=0;class Wi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=ax,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ic.fromBufferAttribute(this,n),Ic.applyMatrix3(e),this.setXY(n,Ic.x,Ic.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=kl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=si(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=kl(n,this.array)),n}setX(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=kl(n,this.array)),n}setY(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=kl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=kl(n,this.array)),n}setW(e,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),a=si(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),a=si(a,this.array),o=si(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,l){return e*=this.itemSize,this.normalized&&(n=si(n,this.array),a=si(a,this.array),o=si(o,this.array),l=si(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ax&&(e.usage=this.usage),e}}class OS extends Wi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class PS extends Wi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Es extends Wi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let v1=0;const Hi=new An,ap=new Ai,To=new ue,yi=new mu,Yl=new mu,Un=new ue;class Fr extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=du(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wS(e)?PS:OS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new dt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,n,a){return Hi.makeTranslation(e,n,a),this.applyMatrix4(Hi),this}scale(e,n,a){return Hi.makeScale(e,n,a),this.applyMatrix4(Hi),this}lookAt(e){return ap.lookAt(e),ap.updateMatrix(),this.applyMatrix4(ap.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Es(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const l=n[a];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const a=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Yl.setFromBufferAttribute(f),this.morphTargetsRelative?(Un.addVectors(yi.min,Yl.min),yi.expandByPoint(Un),Un.addVectors(yi.max,Yl.max),yi.expandByPoint(Un)):(yi.expandByPoint(Yl.min),yi.expandByPoint(Yl.max))}yi.getCenter(a);let o=0;for(let l=0,c=e.count;l<c;l++)Un.fromBufferAttribute(e,l),o=Math.max(o,a.distanceToSquared(Un));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Un.fromBufferAttribute(f,d),p&&(To.fromBufferAttribute(e,d),Un.add(To)),o=Math.max(o,a.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let F=0;F<a.count;F++)f[F]=new ue,p[F]=new ue;const d=new ue,_=new ue,g=new ue,v=new _t,S=new _t,T=new _t,M=new ue,y=new ue;function x(F,b,N){d.fromBufferAttribute(a,F),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,N),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,N),_.sub(d),g.sub(d),S.sub(v),T.sub(v);const H=1/(S.x*T.y-T.x*S.y);isFinite(H)&&(M.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(H),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(H),f[F].add(M),f[b].add(M),f[N].add(M),p[F].add(y),p[b].add(y),p[N].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let F=0,b=D.length;F<b;++F){const N=D[F],H=N.start,j=N.count;for(let J=H,oe=H+j;J<oe;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const w=new ue,R=new ue,O=new ue,P=new ue;function L(F){O.fromBufferAttribute(o,F),P.copy(O);const b=f[F];w.copy(b),w.sub(O.multiplyScalar(O.dot(b))).normalize(),R.crossVectors(P,b);const H=R.dot(p[F])<0?-1:1;c.setXYZW(F,w.x,w.y,w.z,H)}for(let F=0,b=D.length;F<b;++F){const N=D[F],H=N.start,j=N.count;for(let J=H,oe=H+j;J<oe;J+=3)L(e.getX(J+0)),L(e.getX(J+1)),L(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Wi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const o=new ue,l=new ue,c=new ue,f=new ue,p=new ue,d=new ue,_=new ue,g=new ue;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),M=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),_.subVectors(c,l),g.subVectors(o,l),_.cross(g),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(o,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Un.fromBufferAttribute(e,n),Un.normalize(),e.setXYZ(n,Un.x,Un.y,Un.z)}toNonIndexed(){function e(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let S=0,T=0;for(let M=0,y=p.length;M<y;M++){f.isInterleavedBufferAttribute?S=p[M]*f.data.stride+f.offset:S=p[M]*_;for(let x=0;x<_;x++)v[T++]=d[S++]}return new Wi(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fr,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=e(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],S=e(v,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const S=d[g];_.push(S.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const _=o[d];this.setAttribute(d,_.clone(n))}const l=e.morphAttributes;for(const d in l){const _=[],g=l[d];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gx=new An,us=new u1,Fc=new Gm,vx=new ue,Hc=new ue,Gc=new ue,Vc=new ue,rp=new ue,kc=new ue,xx=new ue,Xc=new ue;class na extends Ai{constructor(e=new Fr,n=new LS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kc.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],g=l[p];_!==0&&(rp.fromBufferAttribute(g,e),c?kc.addScaledVector(rp,_):kc.addScaledVector(rp.sub(n),_))}n.add(kc)}return n}raycast(e,n){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Fc.copy(a.boundingSphere),Fc.applyMatrix4(l),us.copy(e.ray).recast(e.near),!(Fc.containsPoint(us.origin)===!1&&(us.intersectSphere(Fc,vx)===null||us.origin.distanceToSquared(vx)>(e.far-e.near)**2))&&(gx.copy(l).invert(),us.copy(e.ray).applyMatrix4(gx),!(a.boundingBox!==null&&us.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,us)))}_computeIntersections(e,n,a){let o;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const y=v[T],x=c[y.materialIndex],D=Math.max(y.start,S.start),w=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,O=w;R<O;R+=3){const P=f.getX(R),L=f.getX(R+1),F=f.getX(R+2);o=qc(this,x,e,a,d,_,g,P,L,F),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=T,x=M;y<x;y+=3){const D=f.getX(y),w=f.getX(y+1),R=f.getX(y+2);o=qc(this,c,e,a,d,_,g,D,w,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const y=v[T],x=c[y.materialIndex],D=Math.max(y.start,S.start),w=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,O=w;R<O;R+=3){const P=R,L=R+1,F=R+2;o=qc(this,x,e,a,d,_,g,P,L,F),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),M=Math.min(p.count,S.start+S.count);for(let y=T,x=M;y<x;y+=3){const D=y,w=y+1,R=y+2;o=qc(this,c,e,a,d,_,g,D,w,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function x1(s,e,n,a,o,l,c,f){let p;if(e.side===Nn?p=a.intersectTriangle(c,l,o,!0,f):p=a.intersectTriangle(o,l,c,e.side===Ya,f),p===null)return null;Xc.copy(f),Xc.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(Xc);return d<n.near||d>n.far?null:{distance:d,point:Xc.clone(),object:s}}function qc(s,e,n,a,o,l,c,f,p,d){s.getVertexPosition(f,Hc),s.getVertexPosition(p,Gc),s.getVertexPosition(d,Vc);const _=x1(s,e,n,a,Hc,Gc,Vc,xx);if(_){const g=new ue;ea.getBarycoord(xx,Hc,Gc,Vc,g),o&&(_.uv=ea.getInterpolatedAttribute(o,f,p,d,g,new _t)),l&&(_.uv1=ea.getInterpolatedAttribute(l,f,p,d,g,new _t)),c&&(_.normal=ea.getInterpolatedAttribute(c,f,p,d,g,new ue),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new ue,materialIndex:0};ea.getNormal(Hc,Gc,Vc,v.normal),_.face=v,_.barycoord=g}return _}class _u extends Fr{constructor(e=1,n=1,a=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,S=0;T("z","y","x",-1,-1,a,n,e,c,l,0),T("z","y","x",1,-1,a,n,-e,c,l,1),T("x","z","y",1,1,e,a,n,o,c,2),T("x","z","y",1,-1,e,a,-n,o,c,3),T("x","y","z",1,-1,e,n,a,o,l,4),T("x","y","z",-1,-1,e,n,-a,o,l,5),this.setIndex(p),this.setAttribute("position",new Es(d,3)),this.setAttribute("normal",new Es(_,3)),this.setAttribute("uv",new Es(g,2));function T(M,y,x,D,w,R,O,P,L,F,b){const N=R/L,H=O/F,j=R/2,J=O/2,oe=P/2,X=L+1,z=F+1;let G=0,q=0;const ce=new ue;for(let _e=0;_e<z;_e++){const B=_e*H-J;for(let $=0;$<X;$++){const ve=$*N-j;ce[M]=ve*D,ce[y]=B*w,ce[x]=oe,d.push(ce.x,ce.y,ce.z),ce[M]=0,ce[y]=0,ce[x]=P>0?1:-1,_.push(ce.x,ce.y,ce.z),g.push($/L),g.push(1-_e/F),G+=1}}for(let _e=0;_e<F;_e++)for(let B=0;B<L;B++){const $=v+B+X*_e,ve=v+B+X*(_e+1),Me=v+(B+1)+X*(_e+1),De=v+(B+1)+X*_e;p.push($,ve,De),p.push(ve,Me,De),q+=6}f.addGroup(S,q,b),S+=q,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vo(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Jn(s){const e={};for(let n=0;n<s.length;n++){const a=Vo(s[n]);for(const o in a)e[o]=a[o]}return e}function S1(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function zS(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const y1={clone:Vo,merge:Jn};var M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=S1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Vm extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new An,this.projectionMatrix=new An,this.projectionMatrixInverse=new An,this.coordinateSystem=ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new ue,Sx=new _t,yx=new _t;class Vi extends Vm{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Id*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(Id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,Sx,yx),n.subVectors(yx,Sx)}setViewOffset(e,n,a,o,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Id*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/p,n-=c.offsetY*a/d,o*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bo=-90,Ao=1;class T1 extends Ai{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(bo,Ao,e,n);o.layers=this.layers,this.add(o);const l=new Vi(bo,Ao,e,n);l.layers=this.layers,this.add(l);const c=new Vi(bo,Ao,e,n);c.layers=this.layers,this.add(c);const f=new Vi(bo,Ao,e,n);f.layers=this.layers,this.add(f);const p=new Vi(bo,Ao,e,n);p.layers=this.layers,this.add(p);const d=new Vi(bo,Ao,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,l,c,f,p]=n;for(const d of n)this.remove(d);if(e===ma)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===cf)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,l),e.setRenderTarget(a,1,o),e.render(n,c),e.setRenderTarget(a,2,o),e.render(n,f),e.setRenderTarget(a,3,o),e.render(n,p),e.setRenderTarget(a,4,o),e.render(n,d),a.texture.generateMipmaps=M,e.setRenderTarget(a,5,o),e.render(n,_),e.setRenderTarget(g,v,S),e.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class BS extends Hn{constructor(e=[],n=Io,a,o,l,c,f,p,d,_){super(e,n,a,o,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b1 extends aa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new BS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _u(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:Vo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Nn,blending:ga});l.uniforms.tEquirect.value=n;const c=new na(o,l),f=n.minFilter;return n.minFilter===ys&&(n.minFilter=Yn),new T1(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,o);e.setRenderTarget(l)}}class Wc extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A1={type:"move"};class sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const y=n.getJointPose(M,a),x=this._getHandJoint(d,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,T=.005;d.inputState.pinching&&v>S+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=S-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Wc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class pm extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ja,this.environmentIntensity=1,this.environmentRotation=new ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const op=new ue,R1=new ue,C1=new dt;class ms{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=op.subVectors(a,n).cross(R1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(op),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||C1.getNormalMatrix(e),o=this.coplanarPoint(op).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Gm,w1=new _t(.5,.5),Yc=new ue;class IS{constructor(e=new ms,n=new ms,a=new ms,o=new ms,l=new ms,c=new ms){this.planes=[e,n,a,o,l,c]}set(e,n,a,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ma,a=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],g=l[5],v=l[6],S=l[7],T=l[8],M=l[9],y=l[10],x=l[11],D=l[12],w=l[13],R=l[14],O=l[15];if(o[0].setComponents(d-c,S-_,x-T,O-D).normalize(),o[1].setComponents(d+c,S+_,x+T,O+D).normalize(),o[2].setComponents(d+f,S+g,x+M,O+w).normalize(),o[3].setComponents(d-f,S-g,x-M,O-w).normalize(),a)o[4].setComponents(p,v,y,R).normalize(),o[5].setComponents(d-p,S-v,x-y,O-R).normalize();else if(o[4].setComponents(d-p,S-v,x-y,O-R).normalize(),n===ma)o[5].setComponents(d+p,S+v,x+y,O+R).normalize();else if(n===cf)o[5].setComponents(p,v,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const n=w1.distanceTo(e.center);return cs.radius=.7071067811865476+n,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Yc.x=o.normal.x>0?e.max.x:e.min.x,Yc.y=o.normal.y>0?e.max.y:e.min.y,Yc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class km extends Hn{constructor(e,n,a=Or,o,l,c,f=ia,p=ia,d,_=nu,g=1){if(_!==nu&&_!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,o,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gu extends Fr{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const l=e/2,c=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,_=p+1,g=e/f,v=n/p,S=[],T=[],M=[],y=[];for(let x=0;x<_;x++){const D=x*v-c;for(let w=0;w<d;w++){const R=w*g-l;T.push(R,-D,0),M.push(0,0,1),y.push(w/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<f;D++){const w=D+d*x,R=D+d*(x+1),O=D+1+d*(x+1),P=D+1+d*x;S.push(w,R,P),S.push(R,O,P)}this.setIndex(S),this.setAttribute("position",new Es(T,3)),this.setAttribute("normal",new Es(M,3)),this.setAttribute("uv",new Es(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class D1 extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U1 extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class HS extends Vm{constructor(e=-1,n=1,a=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-e,c=a+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class N1 extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class L1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class bn{constructor(e){this.value=e}clone(){return new bn(this.value.clone===void 0?this.value:this.value.clone())}}function Mx(s,e,n,a){const o=O1(a);switch(n){case TS:return s*e;case AS:return s*e/o.components*o.byteLength;case Bm:return s*e/o.components*o.byteLength;case RS:return s*e*2/o.components*o.byteLength;case Im:return s*e*2/o.components*o.byteLength;case bS:return s*e*3/o.components*o.byteLength;case ta:return s*e*4/o.components*o.byteLength;case Fm:return s*e*4/o.components*o.byteLength;case $c:case ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tf:case nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fp:case Gp:return Math.max(s,16)*Math.max(e,8)/4;case Ip:case Hp:return Math.max(s,8)*Math.max(e,8)/2;case Vp:case kp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kp:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $p:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case em:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tm:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nm:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case im:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case am:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rm:case sm:case om:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lm:case um:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cm:case fm:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function O1(s){switch(s){case Ci:case SS:return{byteLength:1,components:1};case tu:case yS:case fu:return{byteLength:2,components:1};case Pm:case zm:return{byteLength:2,components:4};case Or:case Om:case qa:return{byteLength:4,components:1};case MS:case ES:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function GS(){let s=null,e=!1,n=null,a=null;function o(l,c){n(l,c),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function P1(s){const e=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=s.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=s.SHORT;else if(d instanceof Uint32Array)S=s.UNSIGNED_INT;else if(d instanceof Int32Array)S=s.INT;else if(d instanceof Int8Array)S=s.BYTE;else if(d instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(s.bindBuffer(d,f),g.length===0)s.bufferSubData(d,0,_);else{g.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<g.length;S++){const T=g[v],M=g[S];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,T=g.length;S<T;S++){const M=g[S];s.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:l,update:c}}var z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B1=`#ifdef USE_ALPHAHASH
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
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
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
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X1=`#ifdef USE_BATCHING
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
#endif`,q1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z1=`#ifdef USE_IRIDESCENCE
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
#endif`,K1=`#ifdef USE_BUMPMAP
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rb=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ob=`vec3 transformedNormal = objectNormal;
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
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eb=`#ifdef USE_GRADIENTMAP
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
}`,Tb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
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
#endif`,Cb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
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
#endif`,Ob=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Pb=`
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qb=`#if defined( USE_POINTS_UV )
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
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`#ifdef USE_MORPHTARGETS
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
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aA=`#ifdef USE_NORMALMAP
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
#endif`,rA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_A=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SA=`float getShadowMask() {
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
}`,yA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MA=`#ifdef USE_SKINNING
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
#endif`,EA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TA=`#ifdef USE_SKINNING
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
#endif`,bA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wA=`#ifdef USE_TRANSMISSION
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
#endif`,DA=`#ifdef USE_TRANSMISSION
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zA=`uniform sampler2D t2D;
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
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`#include <common>
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
}`,VA=`#if DEPTH_PACKING == 3200
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
}`,kA=`#define DISTANCE
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
}`,XA=`#define DISTANCE
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
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`uniform float scale;
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
}`,jA=`uniform vec3 diffuse;
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
}`,ZA=`#include <common>
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
}`,KA=`uniform vec3 diffuse;
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
}`,QA=`#define LAMBERT
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
}`,JA=`#define LAMBERT
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
}`,$A=`#define MATCAP
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
}`,eR=`#define MATCAP
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
}`,tR=`#define NORMAL
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
}`,nR=`#define NORMAL
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
}`,iR=`#define PHONG
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
}`,aR=`#define PHONG
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
}`,rR=`#define STANDARD
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
}`,sR=`#define STANDARD
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
}`,oR=`#define TOON
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
}`,lR=`#define TOON
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
}`,uR=`uniform float size;
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
}`,cR=`uniform vec3 diffuse;
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
}`,fR=`#include <common>
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
}`,hR=`uniform vec3 color;
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
}`,dR=`uniform float rotation;
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
}`,pR=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:z1,alphahash_pars_fragment:B1,alphamap_fragment:I1,alphamap_pars_fragment:F1,alphatest_fragment:H1,alphatest_pars_fragment:G1,aomap_fragment:V1,aomap_pars_fragment:k1,batching_pars_vertex:X1,batching_vertex:q1,begin_vertex:W1,beginnormal_vertex:Y1,bsdfs:j1,iridescence_fragment:Z1,bumpmap_pars_fragment:K1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:eb,color_fragment:tb,color_pars_fragment:nb,color_pars_vertex:ib,color_vertex:ab,common:rb,cube_uv_reflection_fragment:sb,defaultnormal_vertex:ob,displacementmap_pars_vertex:lb,displacementmap_vertex:ub,emissivemap_fragment:cb,emissivemap_pars_fragment:fb,colorspace_fragment:hb,colorspace_pars_fragment:db,envmap_fragment:pb,envmap_common_pars_fragment:mb,envmap_pars_fragment:_b,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Cb,envmap_vertex:vb,fog_vertex:xb,fog_pars_vertex:Sb,fog_fragment:yb,fog_pars_fragment:Mb,gradientmap_pars_fragment:Eb,lightmap_pars_fragment:Tb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Ab,lights_pars_begin:Rb,lights_toon_fragment:wb,lights_toon_pars_fragment:Db,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Lb,lights_physical_pars_fragment:Ob,lights_fragment_begin:Pb,lights_fragment_maps:zb,lights_fragment_end:Bb,logdepthbuf_fragment:Ib,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:Hb,logdepthbuf_vertex:Gb,map_fragment:Vb,map_pars_fragment:kb,map_particle_fragment:Xb,map_particle_pars_fragment:qb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:Yb,morphinstance_vertex:jb,morphcolor_vertex:Zb,morphnormal_vertex:Kb,morphtarget_pars_vertex:Qb,morphtarget_vertex:Jb,normal_fragment_begin:$b,normal_fragment_maps:eA,normal_pars_fragment:tA,normal_pars_vertex:nA,normal_vertex:iA,normalmap_pars_fragment:aA,clearcoat_normal_fragment_begin:rA,clearcoat_normal_fragment_maps:sA,clearcoat_pars_fragment:oA,iridescence_pars_fragment:lA,opaque_fragment:uA,packing:cA,premultiplied_alpha_fragment:fA,project_vertex:hA,dithering_fragment:dA,dithering_pars_fragment:pA,roughnessmap_fragment:mA,roughnessmap_pars_fragment:_A,shadowmap_pars_fragment:gA,shadowmap_pars_vertex:vA,shadowmap_vertex:xA,shadowmask_pars_fragment:SA,skinbase_vertex:yA,skinning_pars_vertex:MA,skinning_vertex:EA,skinnormal_vertex:TA,specularmap_fragment:bA,specularmap_pars_fragment:AA,tonemapping_fragment:RA,tonemapping_pars_fragment:CA,transmission_fragment:wA,transmission_pars_fragment:DA,uv_pars_fragment:UA,uv_pars_vertex:NA,uv_vertex:LA,worldpos_vertex:OA,background_vert:PA,background_frag:zA,backgroundCube_vert:BA,backgroundCube_frag:IA,cube_vert:FA,cube_frag:HA,depth_vert:GA,depth_frag:VA,distanceRGBA_vert:kA,distanceRGBA_frag:XA,equirect_vert:qA,equirect_frag:WA,linedashed_vert:YA,linedashed_frag:jA,meshbasic_vert:ZA,meshbasic_frag:KA,meshlambert_vert:QA,meshlambert_frag:JA,meshmatcap_vert:$A,meshmatcap_frag:eR,meshnormal_vert:tR,meshnormal_frag:nR,meshphong_vert:iR,meshphong_frag:aR,meshphysical_vert:rR,meshphysical_frag:sR,meshtoon_vert:oR,meshtoon_frag:lR,points_vert:uR,points_frag:cR,shadow_vert:fR,shadow_frag:hR,sprite_vert:dR,sprite_frag:pR},ze={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ha={basic:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Jn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Jn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Bt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Jn([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Jn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Jn([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Jn([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Jn([ze.common,ze.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Jn([ze.lights,ze.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ha.physical={uniforms:Jn([ha.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const jc={r:0,b:0,g:0},fs=new ja,mR=new An;function _R(s,e,n,a,o,l,c){const f=new Bt(0);let p=l===!0?0:1,d,_,g=null,v=0,S=null;function T(w){let R=w.isScene===!0?w.background:null;return R&&R.isTexture&&(R=(w.backgroundBlurriness>0?n:e).get(R)),R}function M(w){let R=!1;const O=T(w);O===null?x(f,p):O&&O.isColor&&(x(O,1),R=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(s.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(w,R){const O=T(R);O&&(O.isCubeTexture||O.mapping===Sf)?(_===void 0&&(_=new na(new _u(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Vo(ha.backgroundCube.uniforms),vertexShader:ha.backgroundCube.vertexShader,fragmentShader:ha.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),fs.copy(R.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(mR.makeRotationFromEuler(fs)),_.material.toneMapped=Nt.getTransfer(O.colorSpace)!==Xt,(g!==O||v!==O.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=O,v=O.version,S=s.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new na(new gu(2,2),new Yi({name:"BackgroundMaterial",uniforms:Vo(ha.background.uniforms),vertexShader:ha.background.vertexShader,fragmentShader:ha.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Nt.getTransfer(O.colorSpace)!==Xt,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||S!==s.toneMapping)&&(d.material.needsUpdate=!0,g=O,v=O.version,S=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function x(w,R){w.getRGB(jc,zS(s)),a.buffers.color.setClear(jc.r,jc.g,jc.b,R,c)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,R=1){f.set(w),p=R,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:M,addToRenderList:y,dispose:D}}function gR(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let l=o,c=!1;function f(N,H,j,J,oe){let X=!1;const z=g(J,j,H);l!==z&&(l=z,d(l.object)),X=S(N,J,j,oe),X&&T(N,J,j,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(X||c)&&(c=!1,R(N,H,j,J),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function d(N){return s.bindVertexArray(N)}function _(N){return s.deleteVertexArray(N)}function g(N,H,j){const J=j.wireframe===!0;let oe=a[N.id];oe===void 0&&(oe={},a[N.id]=oe);let X=oe[H.id];X===void 0&&(X={},oe[H.id]=X);let z=X[J];return z===void 0&&(z=v(p()),X[J]=z),z}function v(N){const H=[],j=[],J=[];for(let oe=0;oe<n;oe++)H[oe]=0,j[oe]=0,J[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:J,object:N,attributes:{},index:null}}function S(N,H,j,J){const oe=l.attributes,X=H.attributes;let z=0;const G=j.getAttributes();for(const q in G)if(G[q].location>=0){const _e=oe[q];let B=X[q];if(B===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(B=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(B=N.instanceColor)),_e===void 0||_e.attribute!==B||B&&_e.data!==B.data)return!0;z++}return l.attributesNum!==z||l.index!==J}function T(N,H,j,J){const oe={},X=H.attributes;let z=0;const G=j.getAttributes();for(const q in G)if(G[q].location>=0){let _e=X[q];_e===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor));const B={};B.attribute=_e,_e&&_e.data&&(B.data=_e.data),oe[q]=B,z++}l.attributes=oe,l.attributesNum=z,l.index=J}function M(){const N=l.newAttributes;for(let H=0,j=N.length;H<j;H++)N[H]=0}function y(N){x(N,0)}function x(N,H){const j=l.newAttributes,J=l.enabledAttributes,oe=l.attributeDivisors;j[N]=1,J[N]===0&&(s.enableVertexAttribArray(N),J[N]=1),oe[N]!==H&&(s.vertexAttribDivisor(N,H),oe[N]=H)}function D(){const N=l.newAttributes,H=l.enabledAttributes;for(let j=0,J=H.length;j<J;j++)H[j]!==N[j]&&(s.disableVertexAttribArray(j),H[j]=0)}function w(N,H,j,J,oe,X,z){z===!0?s.vertexAttribIPointer(N,H,j,oe,X):s.vertexAttribPointer(N,H,j,J,oe,X)}function R(N,H,j,J){M();const oe=J.attributes,X=j.getAttributes(),z=H.defaultAttributeValues;for(const G in X){const q=X[G];if(q.location>=0){let ce=oe[G];if(ce===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ce!==void 0){const _e=ce.normalized,B=ce.itemSize,$=e.get(ce);if($===void 0)continue;const ve=$.buffer,Me=$.type,De=$.bytesPerElement,ie=Me===s.INT||Me===s.UNSIGNED_INT||ce.gpuType===Om;if(ce.isInterleavedBufferAttribute){const fe=ce.data,Le=fe.stride,Ue=ce.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<q.locationSize;He++)x(q.location+He,fe.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<q.locationSize;He++)y(q.location+He);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let He=0;He<q.locationSize;He++)w(q.location+He,B/q.locationSize,Me,_e,Le*De,(Ue+B/q.locationSize*He)*De,ie)}else{if(ce.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)x(q.location+fe,ce.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let fe=0;fe<q.locationSize;fe++)y(q.location+fe);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let fe=0;fe<q.locationSize;fe++)w(q.location+fe,B/q.locationSize,Me,_e,B*De,B/q.locationSize*fe*De,ie)}}else if(z!==void 0){const _e=z[G];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(q.location,_e);break;case 3:s.vertexAttrib3fv(q.location,_e);break;case 4:s.vertexAttrib4fv(q.location,_e);break;default:s.vertexAttrib1fv(q.location,_e)}}}}D()}function O(){F();for(const N in a){const H=a[N];for(const j in H){const J=H[j];for(const oe in J)_(J[oe].object),delete J[oe];delete H[j]}delete a[N]}}function P(N){if(a[N.id]===void 0)return;const H=a[N.id];for(const j in H){const J=H[j];for(const oe in J)_(J[oe].object),delete J[oe];delete H[j]}delete a[N.id]}function L(N){for(const H in a){const j=a[H];if(j[N.id]===void 0)continue;const J=j[N.id];for(const oe in J)_(J[oe].object),delete J[oe];delete j[N.id]}}function F(){b(),c=!0,l!==o&&(l=o,d(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function vR(s,e,n){let a;function o(d){a=d}function l(d,_){s.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(s.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=_[T];n.update(S,a,1)}function p(d,_,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<d.length;T++)c(d[T],_[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let T=0;for(let M=0;M<g;M++)T+=_[M]*v[M];n.update(T,a,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function xR(s,e,n,a){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(L){return!(L!==ta&&a.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const F=L===fu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ci&&a.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qa&&!F)}function p(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:w,maxFragmentUniforms:R,vertexTextures:O,maxSamples:P}}function SR(s){const e=this;let n=null,a=0,o=!1,l=!1;const c=new ms,f=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||o;return o=v,a=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,S){const T=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,x=s.get(g);if(!o||T===null||T.length===0||l&&!y)l?_(null):d();else{const D=l?0:a,w=D*4;let R=x.clippingState||null;p.value=R,R=_(T,v,w,S);for(let O=0;O!==w;++O)R[O]=n[O];x.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(g,v,S,T){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=p.value,T!==!0||y===null){const x=S+M*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let w=0,R=S;w!==M;++w,R+=4)c.copy(g[w]).applyMatrix4(D,f),c.normal.toArray(y,R),y[R+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function yR(s){let e=new WeakMap;function n(c,f){return f===Op?c.mapping=Io:f===Pp&&(c.mapping=Fo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Op||f===Pp)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new b1(p.height);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",o),n(d.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const wo=4,Ex=[.125,.215,.35,.446,.526,.582],xs=20,lp=new HS,Tx=new Bt;let up=null,cp=0,fp=0,hp=!1;const _s=(1+Math.sqrt(5))/2,Ro=1/_s,bx=[new ue(-_s,Ro,0),new ue(_s,Ro,0),new ue(-Ro,0,_s),new ue(Ro,0,_s),new ue(0,_s,-Ro),new ue(0,_s,Ro),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)],MR=new ue;class Ax{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,o=100,l={}){const{size:c=256,position:f=MR}=l;up=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(up,cp,fp),this._renderer.xr.enabled=hp,e.scissorTest=!1,Zc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),up=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:fu,format:ta,colorSpace:Pr,depthBuffer:!1},o=Rx(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rx(e,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ER(l)),this._blurMaterial=TR(l,e,n)}return o}_compileMaterial(e){const n=new na(this._lodPlanes[0],e);this._renderer.compile(n,lp)}_sceneToCubeUV(e,n,a,o,l){const p=new Vi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(Tx),g.toneMapping=Ur,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const M=new LS({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),y=new na(new _u,M);let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(Tx),x=!0);for(let w=0;w<6;w++){const R=w%3;R===0?(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[w],l.y,l.z)):R===1?(p.up.set(0,0,d[w]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[w],l.z)):(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[w]));const O=this._cubeSize;Zc(o,R*O,w>2?O:0,O,O),g.setRenderTarget(o),x&&g.render(y,p),g.render(e,p)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=S,g.autoClear=v,e.background=D}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Io||e.mapping===Fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cx());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new na(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Zc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,lp)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=bx[(o-l-1)%bx.length];this._blur(e,l-1,l,c,f)}n.autoClear=a}_blur(e,n,a,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,o,"latitudinal",l),this._halfBlur(c,e,a,a,o,"longitudinal",l)}_halfBlur(e,n,a,o,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new na(this._lodPlanes[o],d),v=d.uniforms,S=this._sizeLods[a]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*xs-1),M=l/T,y=isFinite(l)?1+Math.floor(_*M):xs;y>xs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const x=[];let D=0;for(let L=0;L<xs;++L){const F=L/M,b=Math.exp(-F*F/2);x.push(b),L===0?D+=b:L<y&&(D+=2*b)}for(let L=0;L<x.length;L++)x[L]=x[L]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=T,v.mipInt.value=w-a;const R=this._sizeLods[o],O=3*R*(o>w-wo?o-w+wo:0),P=4*(this._cubeSize-R);Zc(n,O,P,3*R,2*R),p.setRenderTarget(n),p.render(g,lp)}}function ER(s){const e=[],n=[],a=[];let o=s;const l=s-wo+1+Ex.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);n.push(f);let p=1/f;c>s-wo?p=Ex[c-s+wo-1]:c===0&&(p=0),a.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,T=6,M=3,y=2,x=1,D=new Float32Array(M*T*S),w=new Float32Array(y*T*S),R=new Float32Array(x*T*S);for(let P=0;P<S;P++){const L=P%3*2/3-1,F=P>2?0:-1,b=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];D.set(b,M*T*P),w.set(v,y*T*P);const N=[P,P,P,P,P,P];R.set(N,x*T*P)}const O=new Fr;O.setAttribute("position",new Wi(D,M)),O.setAttribute("uv",new Wi(w,y)),O.setAttribute("faceIndex",new Wi(R,x)),e.push(O),o>wo&&o--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function Rx(s,e,n){const a=new aa(s,e,n);return a.texture.mapping=Sf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zc(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function TR(s,e,n){const a=new Float32Array(xs),o=new ue(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Cx(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function wx(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Xm(){return`

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
	`}function bR(s){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Op||p===Pp,_=p===Io||p===Fo;if(d||_){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Ax(s)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return d&&S&&S.height>0||_&&S&&o(S)?(n===null&&(n=new Ax(s)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function AR(s){const e={};function n(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&iu("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function RR(s,e,n,a){const o={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function d(g){const v=[],S=g.index,T=g.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let w=0,R=D.length;w<R;w+=3){const O=D[w+0],P=D[w+1],L=D[w+2];v.push(O,P,P,L,L,O)}}else if(T!==void 0){const D=T.array;M=T.version;for(let w=0,R=D.length/3-1;w<R;w+=3){const O=w+0,P=w+1,L=w+2;v.push(O,P,P,L,L,O)}}else return;const y=new(wS(v)?PS:OS)(v,1);y.version=M;const x=l.get(g);x&&e.remove(x),l.set(g,y)}function _(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function CR(s,e,n){let a;function o(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,S){s.drawElements(a,S,l,v*c),n.update(S,a,1)}function d(v,S,T){T!==0&&(s.drawElementsInstanced(a,S,l,v*c,T),n.update(S,a,T))}function _(v,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,l,v,0,T);let y=0;for(let x=0;x<T;x++)y+=S[x];n.update(y,a,1)}function g(v,S,T,M){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)d(v[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,M,0,T);let x=0;for(let D=0;D<T;D++)x+=S[D]*M[D];n.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function wR(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function DR(s,e,n){const a=new WeakMap,o=new pn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let N=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",N)};var S=N;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),M===!0&&(R=2),y===!0&&(R=3);let O=f.attributes.position.count*R,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const L=new Float32Array(O*P*4*g),F=new DS(L,O,P,g);F.type=qa,F.needsUpdate=!0;const b=R*4;for(let H=0;H<g;H++){const j=x[H],J=D[H],oe=w[H],X=O*P*4*H;for(let z=0;z<j.count;z++){const G=z*b;T===!0&&(o.fromBufferAttribute(j,z),L[X+G+0]=o.x,L[X+G+1]=o.y,L[X+G+2]=o.z,L[X+G+3]=0),M===!0&&(o.fromBufferAttribute(J,z),L[X+G+4]=o.x,L[X+G+5]=o.y,L[X+G+6]=o.z,L[X+G+7]=0),y===!0&&(o.fromBufferAttribute(oe,z),L[X+G+8]=o.x,L[X+G+9]=o.y,L[X+G+10]=o.z,L[X+G+11]=oe.itemSize===4?o.w:1)}}v={count:g,texture:F,size:new _t(O,P)},a.set(f,v),f.addEventListener("dispose",N)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let T=0;for(let y=0;y<d.length;y++)T+=d[y];const M=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",M),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function UR(s,e,n,a){let o=new WeakMap;function l(p){const d=a.render.frame,_=p.geometry,g=e.get(p,_);if(o.get(g)!==d&&(e.update(g),o.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function c(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const VS=new Hn,Dx=new km(1,1),kS=new DS,XS=new o1,qS=new BS,Ux=[],Nx=[],Lx=new Float32Array(16),Ox=new Float32Array(9),Px=new Float32Array(4);function Ko(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let l=Ux[o];if(l===void 0&&(l=new Float32Array(o),Ux[o]=l),e!==0){a.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,s[c].toArray(l,f)}return l}function Rn(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function Cn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function yf(s,e){let n=Nx[e];n===void 0&&(n=new Int32Array(e),Nx[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function NR(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function LR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;s.uniform2fv(this.addr,e),Cn(n,e)}}function OR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rn(n,e))return;s.uniform3fv(this.addr,e),Cn(n,e)}}function PR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;s.uniform4fv(this.addr,e),Cn(n,e)}}function zR(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Rn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(Rn(n,a))return;Px.set(a),s.uniformMatrix2fv(this.addr,!1,Px),Cn(n,a)}}function BR(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Rn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(Rn(n,a))return;Ox.set(a),s.uniformMatrix3fv(this.addr,!1,Ox),Cn(n,a)}}function IR(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Rn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(Rn(n,a))return;Lx.set(a),s.uniformMatrix4fv(this.addr,!1,Lx),Cn(n,a)}}function FR(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function HR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;s.uniform2iv(this.addr,e),Cn(n,e)}}function GR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;s.uniform3iv(this.addr,e),Cn(n,e)}}function VR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;s.uniform4iv(this.addr,e),Cn(n,e)}}function kR(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function XR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rn(n,e))return;s.uniform2uiv(this.addr,e),Cn(n,e)}}function qR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rn(n,e))return;s.uniform3uiv(this.addr,e),Cn(n,e)}}function WR(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rn(n,e))return;s.uniform4uiv(this.addr,e),Cn(n,e)}}function YR(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Dx.compareFunction=CS,l=Dx):l=VS,n.setTexture2D(e||l,o)}function jR(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||XS,o)}function ZR(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||qS,o)}function KR(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||kS,o)}function QR(s){switch(s){case 5126:return NR;case 35664:return LR;case 35665:return OR;case 35666:return PR;case 35674:return zR;case 35675:return BR;case 35676:return IR;case 5124:case 35670:return FR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return VR;case 5125:return kR;case 36294:return XR;case 36295:return qR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return jR;case 35680:case 36300:case 36308:case 36293:return ZR;case 36289:case 36303:case 36311:case 36292:return KR}}function JR(s,e){s.uniform1fv(this.addr,e)}function $R(s,e){const n=Ko(e,this.size,2);s.uniform2fv(this.addr,n)}function eC(s,e){const n=Ko(e,this.size,3);s.uniform3fv(this.addr,n)}function tC(s,e){const n=Ko(e,this.size,4);s.uniform4fv(this.addr,n)}function nC(s,e){const n=Ko(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function iC(s,e){const n=Ko(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function aC(s,e){const n=Ko(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function rC(s,e){s.uniform1iv(this.addr,e)}function sC(s,e){s.uniform2iv(this.addr,e)}function oC(s,e){s.uniform3iv(this.addr,e)}function lC(s,e){s.uniform4iv(this.addr,e)}function uC(s,e){s.uniform1uiv(this.addr,e)}function cC(s,e){s.uniform2uiv(this.addr,e)}function fC(s,e){s.uniform3uiv(this.addr,e)}function hC(s,e){s.uniform4uiv(this.addr,e)}function dC(s,e,n){const a=this.cache,o=e.length,l=yf(n,o);Rn(a,l)||(s.uniform1iv(this.addr,l),Cn(a,l));for(let c=0;c!==o;++c)n.setTexture2D(e[c]||VS,l[c])}function pC(s,e,n){const a=this.cache,o=e.length,l=yf(n,o);Rn(a,l)||(s.uniform1iv(this.addr,l),Cn(a,l));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||XS,l[c])}function mC(s,e,n){const a=this.cache,o=e.length,l=yf(n,o);Rn(a,l)||(s.uniform1iv(this.addr,l),Cn(a,l));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||qS,l[c])}function _C(s,e,n){const a=this.cache,o=e.length,l=yf(n,o);Rn(a,l)||(s.uniform1iv(this.addr,l),Cn(a,l));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||kS,l[c])}function gC(s){switch(s){case 5126:return JR;case 35664:return $R;case 35665:return eC;case 35666:return tC;case 35674:return nC;case 35675:return iC;case 35676:return aC;case 5124:case 35670:return rC;case 35667:case 35671:return sC;case 35668:case 35672:return oC;case 35669:case 35673:return lC;case 5125:return uC;case 36294:return cC;case 36295:return fC;case 36296:return hC;case 35678:case 36198:case 36298:case 36306:case 35682:return dC;case 35679:case 36299:case 36307:return pC;case 35680:case 36300:case 36308:case 36293:return mC;case 36289:case 36303:case 36311:case 36292:return _C}}class vC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=QR(n.type)}}class xC{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gC(n.type)}}class SC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,n[f.id],a)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function zx(s,e){s.seq.push(e),s.map[e.id]=e}function yC(s,e,n){const a=s.name,o=a.length;for(dp.lastIndex=0;;){const l=dp.exec(a),c=dp.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===o){zx(n,d===void 0?new vC(f,s,e):new xC(f,s,e));break}else{let g=n.map[f];g===void 0&&(g=new SC(f),zx(n,g)),n=g}}}class af{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const l=e.getActiveUniform(n,o),c=e.getUniformLocation(n,l.name);yC(l,c,this)}}setValue(e,n,a,o){const l=this.map[n];l!==void 0&&l.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in n&&a.push(c)}return a}}function Bx(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const MC=37297;let EC=0;function TC(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=o;c<l;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const Ix=new dt;function bC(s){Nt._getMatrix(Ix,Nt.workingColorSpace,s);const e=`mat3( ${Ix.elements.map(n=>n.toFixed(4))} )`;switch(Nt.getTransfer(s)){case uf:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Fx(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+TC(s.getShaderSource(e),f)}else return l}function AC(s,e){const n=bC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function RC(s,e){let n;switch(e){case PT:n="Linear";break;case zT:n="Reinhard";break;case BT:n="Cineon";break;case IT:n="ACESFilmic";break;case HT:n="AgX";break;case GT:n="Neutral";break;case FT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kc=new ue;function CC(){Nt.getLuminanceCoefficients(Kc);const s=Kc.x.toFixed(4),e=Kc.y.toFixed(4),n=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function DC(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function UC(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return n}function Zl(s){return s!==""}function Hx(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NC=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(s){return s.replace(NC,OC)}const LC=new Map;function OC(s,e){let n=pt[e];if(n===void 0){const a=LC.get(e);if(a!==void 0)n=pt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return mm(n)}const PC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vx(s){return s.replace(PC,zC)}function zC(s,e,n,a){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function kx(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BC(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gS?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pT?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Va&&(e="SHADOWMAP_TYPE_VSM"),e}function IC(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Io:case Fo:e="ENVMAP_TYPE_CUBE";break;case Sf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FC(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function HC(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vS:e="ENVMAP_BLENDING_MULTIPLY";break;case LT:e="ENVMAP_BLENDING_MIX";break;case OT:e="ENVMAP_BLENDING_ADD";break}return e}function GC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function VC(s,e,n,a){const o=s.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=BC(n),d=IC(n),_=FC(n),g=HC(n),v=GC(n),S=wC(n),T=DC(l),M=o.createProgram();let y,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Zl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Zl).join(`
`),x.length>0&&(x+=`
`)):(y=[kx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),x=[kx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ur?"#define TONE_MAPPING":"",n.toneMapping!==Ur?pt.tonemapping_pars_fragment:"",n.toneMapping!==Ur?RC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,AC("linearToOutputTexel",n.outputColorSpace),CC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zl).join(`
`)),c=mm(c),c=Hx(c,n),c=Gx(c,n),f=mm(f),f=Hx(f,n),f=Gx(f,n),c=Vx(c),f=Vx(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=D+y+c,R=D+x+f,O=Bx(o,o.VERTEX_SHADER,w),P=Bx(o,o.FRAGMENT_SHADER,R);o.attachShader(M,O),o.attachShader(M,P),n.index0AttributeName!==void 0?o.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function L(H){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(M)||"",J=o.getShaderInfoLog(O)||"",oe=o.getShaderInfoLog(P)||"",X=j.trim(),z=J.trim(),G=oe.trim();let q=!0,ce=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,O,P);else{const _e=Fx(o,O,"vertex"),B=Fx(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+_e+`
`+B)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||G==="")&&(ce=!1);ce&&(H.diagnostics={runnable:q,programLog:X,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:x}})}o.deleteShader(O),o.deleteShader(P),F=new af(o,M),b=UC(o,M)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(M,MC)),N},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=P,this}let kC=0;class XC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new qC(e),n.set(e,a)),a}}class qC{constructor(e){this.id=kC++,this.code=e,this.usedTimes=0}}function WC(s,e,n,a,o,l,c){const f=new US,p=new XC,d=new Set,_=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return d.add(b),b===0?"uv":`uv${b}`}function y(b,N,H,j,J){const oe=j.fog,X=J.geometry,z=b.isMeshStandardMaterial?j.environment:null,G=(b.isMeshStandardMaterial?n:e).get(b.envMap||z),q=G&&G.mapping===Sf?G.image.height:null,ce=T[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,B=_e!==void 0?_e.length:0;let $=0;X.morphAttributes.position!==void 0&&($=1),X.morphAttributes.normal!==void 0&&($=2),X.morphAttributes.color!==void 0&&($=3);let ve,Me,De,ie;if(ce){const Ct=ha[ce];ve=Ct.vertexShader,Me=Ct.fragmentShader}else ve=b.vertexShader,Me=b.fragmentShader,p.update(b),De=p.getVertexShaderID(b),ie=p.getFragmentShaderID(b);const fe=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),Ue=J.isInstancedMesh===!0,He=J.isBatchedMesh===!0,st=!!b.map,nn=!!b.matcap,k=!!G,Rt=!!b.aoMap,nt=!!b.lightMap,$e=!!b.bumpMap,Re=!!b.normalMap,rt=!!b.displacementMap,Be=!!b.emissiveMap,et=!!b.metalnessMap,Zt=!!b.roughnessMap,Qt=b.anisotropy>0,I=b.clearcoat>0,A=b.dispersion>0,ne=b.iridescence>0,pe=b.sheen>0,ye=b.transmission>0,he=Qt&&!!b.anisotropyMap,Ze=I&&!!b.clearcoatMap,Ce=I&&!!b.clearcoatNormalMap,Ye=I&&!!b.clearcoatRoughnessMap,je=ne&&!!b.iridescenceMap,be=ne&&!!b.iridescenceThicknessMap,we=pe&&!!b.sheenColorMap,Ke=pe&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,Oe=!!b.specularColorMap,ut=!!b.specularIntensityMap,Y=ye&&!!b.transmissionMap,Ae=ye&&!!b.thicknessMap,Ne=!!b.gradientMap,Ge=!!b.alphaMap,Ee=b.alphaTest>0,xe=!!b.alphaHash,Ve=!!b.extensions;let ot=Ur;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ot=s.toneMapping);const It={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:Me,defines:b.defines,customVertexShaderID:De,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:He,batchingColor:He&&J._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,instancingMorph:Ue&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Pr,alphaToCoverage:!!b.alphaToCoverage,map:st,matcap:nn,envMap:k,envMapMode:k&&G.mapping,envMapCubeUVHeight:q,aoMap:Rt,lightMap:nt,bumpMap:$e,normalMap:Re,displacementMap:v&&rt,emissiveMap:Be,normalMapObjectSpace:Re&&b.normalMapType===qT,normalMapTangentSpace:Re&&b.normalMapType===XT,metalnessMap:et,roughnessMap:Zt,anisotropy:Qt,anisotropyMap:he,clearcoat:I,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,dispersion:A,iridescence:ne,iridescenceMap:je,iridescenceThicknessMap:be,sheen:pe,sheenColorMap:we,sheenRoughnessMap:Ke,specularMap:Fe,specularColorMap:Oe,specularIntensityMap:ut,transmission:ye,transmissionMap:Y,thicknessMap:Ae,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===No&&b.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ee,alphaHash:xe,combine:b.combine,mapUv:st&&M(b.map.channel),aoMapUv:Rt&&M(b.aoMap.channel),lightMapUv:nt&&M(b.lightMap.channel),bumpMapUv:$e&&M(b.bumpMap.channel),normalMapUv:Re&&M(b.normalMap.channel),displacementMapUv:rt&&M(b.displacementMap.channel),emissiveMapUv:Be&&M(b.emissiveMap.channel),metalnessMapUv:et&&M(b.metalnessMap.channel),roughnessMapUv:Zt&&M(b.roughnessMap.channel),anisotropyMapUv:he&&M(b.anisotropyMap.channel),clearcoatMapUv:Ze&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(b.sheenRoughnessMap.channel),specularMapUv:Fe&&M(b.specularMap.channel),specularColorMapUv:Oe&&M(b.specularColorMap.channel),specularIntensityMapUv:ut&&M(b.specularIntensityMap.channel),transmissionMapUv:Y&&M(b.transmissionMap.channel),thicknessMapUv:Ae&&M(b.thicknessMap.channel),alphaMapUv:Ge&&M(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Re||Qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!X.attributes.uv&&(st||Ge),fog:!!oe,useFog:b.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Le,skinning:J.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:$,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:st&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:Be&&b.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===Nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||He)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=d.has(1),It.vertexUv2s=d.has(2),It.vertexUv3s=d.has(3),d.clear(),It}function x(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)N.push(H),N.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(D(N,b),w(N,b),N.push(s.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function D(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function w(b,N){f.disableAll(),N.supportsVertexTextures&&f.enable(0),N.instancing&&f.enable(1),N.instancingColor&&f.enable(2),N.instancingMorph&&f.enable(3),N.matcap&&f.enable(4),N.envMap&&f.enable(5),N.normalMapObjectSpace&&f.enable(6),N.normalMapTangentSpace&&f.enable(7),N.clearcoat&&f.enable(8),N.iridescence&&f.enable(9),N.alphaTest&&f.enable(10),N.vertexColors&&f.enable(11),N.vertexAlphas&&f.enable(12),N.vertexUv1s&&f.enable(13),N.vertexUv2s&&f.enable(14),N.vertexUv3s&&f.enable(15),N.vertexTangents&&f.enable(16),N.anisotropy&&f.enable(17),N.alphaHash&&f.enable(18),N.batching&&f.enable(19),N.dispersion&&f.enable(20),N.batchingColor&&f.enable(21),N.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const N=T[b.type];let H;if(N){const j=ha[N];H=y1.clone(j.uniforms)}else H=b.uniforms;return H}function O(b,N){let H;for(let j=0,J=_.length;j<J;j++){const oe=_[j];if(oe.cacheKey===N){H=oe,++H.usedTimes;break}}return H===void 0&&(H=new VC(s,N,b,l),_.push(H)),H}function P(b){if(--b.usedTimes===0){const N=_.indexOf(b);_[N]=_[_.length-1],_.pop(),b.destroy()}}function L(b){p.remove(b)}function F(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:O,releaseProgram:P,releaseShaderCache:L,programs:_,dispose:F}}function YC(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function a(c){s.delete(c)}function o(c,f,p){s.get(c)[f]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:l}}function jC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qx(){const s=[];let e=0;const n=[],a=[],o=[];function l(){e=0,n.length=0,a.length=0,o.length=0}function c(g,v,S,T,M,y){let x=s[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:T,renderOrder:g.renderOrder,z:M,group:y},s[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=M,x.group=y),e++,x}function f(g,v,S,T,M,y){const x=c(g,v,S,T,M,y);S.transmission>0?a.push(x):S.transparent===!0?o.push(x):n.push(x)}function p(g,v,S,T,M,y){const x=c(g,v,S,T,M,y);S.transmission>0?a.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||jC),a.length>1&&a.sort(v||Xx),o.length>1&&o.sort(v||Xx)}function _(){for(let g=e,v=s.length;g<v;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:l,push:f,unshift:p,finish:_,sort:d}}function ZC(){let s=new WeakMap;function e(a,o){const l=s.get(a);let c;return l===void 0?(c=new qx,s.set(a,[c])):o>=l.length?(c=new qx,l.push(c)):c=l[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function KC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new Bt};break;case"SpotLight":n={position:new ue,direction:new ue,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":n={color:new Bt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return s[e.id]=n,n}}}function QC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let JC=0;function $C(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function e2(s){const e=new KC,n=QC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ue);const o=new ue,l=new An,c=new An;function f(d){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let S=0,T=0,M=0,y=0,x=0,D=0,w=0,R=0,O=0,P=0,L=0;d.sort($C);for(let b=0,N=d.length;b<N;b++){const H=d[b],j=H.color,J=H.intensity,oe=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=j.r*J,g+=j.g*J,v+=j.b*J;else if(H.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(H.sh.coefficients[z],J);L++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,q=n.get(H);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,a.directionalShadow[S]=q,a.directionalShadowMap[S]=X,a.directionalShadowMatrix[S]=H.shadow.matrix,D++}a.directional[S]=z,S++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(j).multiplyScalar(J),z.distance=oe,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,a.spot[M]=z;const G=H.shadow;if(H.map&&(a.spotLightMap[O]=H.map,O++,G.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[M]=G.matrix,H.castShadow){const q=n.get(H);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,a.spotShadow[M]=q,a.spotShadowMap[M]=X,R++}M++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(j).multiplyScalar(J),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=z,y++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const G=H.shadow,q=n.get(H);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,a.pointShadow[T]=q,a.pointShadowMap[T]=X,a.pointShadowMatrix[T]=H.shadow.matrix,w++}a.point[T]=z,T++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(J),z.groundColor.copy(H.groundColor).multiplyScalar(J),a.hemi[x]=z,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==S||F.pointLength!==T||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==D||F.numPointShadows!==w||F.numSpotShadows!==R||F.numSpotMaps!==O||F.numLightProbes!==L)&&(a.directional.length=S,a.spot.length=M,a.rectArea.length=y,a.point.length=T,a.hemi.length=x,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=R+O-P,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=L,F.directionalLength=S,F.pointLength=T,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=D,F.numPointShadows=w,F.numSpotShadows=R,F.numSpotMaps=O,F.numLightProbes=L,a.version=JC++)}function p(d,_){let g=0,v=0,S=0,T=0,M=0;const y=_.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const w=d[x];if(w.isDirectionalLight){const R=a.directional[g];R.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),g++}else if(w.isSpotLight){const R=a.spot[S];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(w.isRectAreaLight){const R=a.rectArea[T];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(w.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(w.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(y),v++}else if(w.isHemisphereLight){const R=a.hemi[M];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(y),M++}}}return{setup:f,setupView:p,state:a}}function Wx(s){const e=new e2(s),n=[],a=[];function o(_){d.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function t2(s){let e=new WeakMap;function n(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Wx(s),e.set(o,[f])):l>=c.length?(f=new Wx(s),c.push(f)):f=c[l],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const n2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i2=`uniform sampler2D shadow_pass;
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
}`;function a2(s,e,n){let a=new IS;const o=new _t,l=new _t,c=new pn,f=new D1({depthPacking:kT}),p=new U1,d={},_=n.maxTextureSize,g={[Ya]:Nn,[Nn]:Ya,[Ei]:Ei},v=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:n2,fragmentShader:i2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Fr;T.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new na(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gS;let x=this.type;this.render=function(P,L,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const b=s.getRenderTarget(),N=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),j=s.state;j.setBlending(ga),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const J=x!==Va&&this.type===Va,oe=x===Va&&this.type!==Va;for(let X=0,z=P.length;X<z;X++){const G=P[X],q=G.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const ce=q.getFrameExtents();if(o.multiply(ce),l.copy(q.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ce.x),o.x=l.x*ce.x,q.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ce.y),o.y=l.y*ce.y,q.mapSize.y=l.y)),q.map===null||J===!0||oe===!0){const B=this.type!==Va?{minFilter:ia,magFilter:ia}:{};q.map!==null&&q.map.dispose(),q.map=new aa(o.x,o.y,B),q.map.texture.name=G.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const _e=q.getViewportCount();for(let B=0;B<_e;B++){const $=q.getViewport(B);c.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),j.viewport(c),q.updateMatrices(G,B),a=q.getFrustum(),R(L,F,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===Va&&D(q,F),q.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(b,N,H)};function D(P,L){const F=e.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new aa(o.x,o.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(L,null,F,v,M,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(L,null,F,S,M,null)}function w(P,L,F,b){let N=null;const H=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)N=H;else if(N=F.isPointLight===!0?p:f,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const j=N.uuid,J=L.uuid;let oe=d[j];oe===void 0&&(oe={},d[j]=oe);let X=oe[J];X===void 0&&(X=N.clone(),oe[J]=X,L.addEventListener("dispose",O)),N=X}if(N.visible=L.visible,N.wireframe=L.wireframe,b===Va?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:g[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,F.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const j=s.properties.get(N);j.light=F}return N}function R(P,L,F,b,N){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&N===Va)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const J=e.update(P),oe=P.material;if(Array.isArray(oe)){const X=J.groups;for(let z=0,G=X.length;z<G;z++){const q=X[z],ce=oe[q.materialIndex];if(ce&&ce.visible){const _e=w(P,ce,b,N);P.onBeforeShadow(s,P,L,F,J,_e,q),s.renderBufferDirect(F,null,J,_e,P,q),P.onAfterShadow(s,P,L,F,J,_e,q)}}}else if(oe.visible){const X=w(P,oe,b,N);P.onBeforeShadow(s,P,L,F,J,X,null),s.renderBufferDirect(F,null,J,X,P,null),P.onAfterShadow(s,P,L,F,J,X,null)}}const j=P.children;for(let J=0,oe=j.length;J<oe;J++)R(j[J],L,F,b,N)}function O(P){P.target.removeEventListener("dispose",O);for(const F in d){const b=d[F],N=P.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}const r2={[Rp]:Cp,[wp]:Np,[Dp]:Lp,[Bo]:Up,[Cp]:Rp,[Np]:wp,[Lp]:Dp,[Up]:Bo};function s2(s,e){function n(){let Y=!1;const Ae=new pn;let Ne=null;const Ge=new pn(0,0,0,0);return{setMask:function(Ee){Ne!==Ee&&!Y&&(s.colorMask(Ee,Ee,Ee,Ee),Ne=Ee)},setLocked:function(Ee){Y=Ee},setClear:function(Ee,xe,Ve,ot,It){It===!0&&(Ee*=ot,xe*=ot,Ve*=ot),Ae.set(Ee,xe,Ve,ot),Ge.equals(Ae)===!1&&(s.clearColor(Ee,xe,Ve,ot),Ge.copy(Ae))},reset:function(){Y=!1,Ne=null,Ge.set(-1,0,0,0)}}}function a(){let Y=!1,Ae=!1,Ne=null,Ge=null,Ee=null;return{setReversed:function(xe){if(Ae!==xe){const Ve=e.get("EXT_clip_control");xe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ae=xe;const ot=Ee;Ee=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(xe){xe?fe(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(xe){Ne!==xe&&!Y&&(s.depthMask(xe),Ne=xe)},setFunc:function(xe){if(Ae&&(xe=r2[xe]),Ge!==xe){switch(xe){case Rp:s.depthFunc(s.NEVER);break;case Cp:s.depthFunc(s.ALWAYS);break;case wp:s.depthFunc(s.LESS);break;case Bo:s.depthFunc(s.LEQUAL);break;case Dp:s.depthFunc(s.EQUAL);break;case Up:s.depthFunc(s.GEQUAL);break;case Np:s.depthFunc(s.GREATER);break;case Lp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=xe}},setLocked:function(xe){Y=xe},setClear:function(xe){Ee!==xe&&(Ae&&(xe=1-xe),s.clearDepth(xe),Ee=xe)},reset:function(){Y=!1,Ne=null,Ge=null,Ee=null,Ae=!1}}}function o(){let Y=!1,Ae=null,Ne=null,Ge=null,Ee=null,xe=null,Ve=null,ot=null,It=null;return{setTest:function(Ct){Y||(Ct?fe(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(Ct){Ae!==Ct&&!Y&&(s.stencilMask(Ct),Ae=Ct)},setFunc:function(Ct,Zn,Ui){(Ne!==Ct||Ge!==Zn||Ee!==Ui)&&(s.stencilFunc(Ct,Zn,Ui),Ne=Ct,Ge=Zn,Ee=Ui)},setOp:function(Ct,Zn,Ui){(xe!==Ct||Ve!==Zn||ot!==Ui)&&(s.stencilOp(Ct,Zn,Ui),xe=Ct,Ve=Zn,ot=Ui)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){It!==Ct&&(s.clearStencil(Ct),It=Ct)},reset:function(){Y=!1,Ae=null,Ne=null,Ge=null,Ee=null,xe=null,Ve=null,ot=null,It=null}}}const l=new n,c=new a,f=new o,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,S=[],T=null,M=!1,y=null,x=null,D=null,w=null,R=null,O=null,P=null,L=new Bt(0,0,0),F=0,b=!1,N=null,H=null,j=null,J=null,oe=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=G>=2);let ce=null,_e={};const B=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ve=new pn().fromArray(B),Me=new pn().fromArray($);function De(Y,Ae,Ne,Ge){const Ee=new Uint8Array(4),xe=s.createTexture();s.bindTexture(Y,xe),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<Ne;Ve++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Ae+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return xe}const ie={};ie[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),fe(s.DEPTH_TEST),c.setFunc(Bo),$e(!1),Re($v),fe(s.CULL_FACE),Rt(ga);function fe(Y){_[Y]!==!0&&(s.enable(Y),_[Y]=!0)}function Le(Y){_[Y]!==!1&&(s.disable(Y),_[Y]=!1)}function Ue(Y,Ae){return g[Y]!==Ae?(s.bindFramebuffer(Y,Ae),g[Y]=Ae,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He(Y,Ae){let Ne=S,Ge=!1;if(Y){Ne=v.get(Ae),Ne===void 0&&(Ne=[],v.set(Ae,Ne));const Ee=Y.textures;if(Ne.length!==Ee.length||Ne[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Ve=Ee.length;xe<Ve;xe++)Ne[xe]=s.COLOR_ATTACHMENT0+xe;Ne.length=Ee.length,Ge=!0}}else Ne[0]!==s.BACK&&(Ne[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(Ne)}function st(Y){return T!==Y?(s.useProgram(Y),T=Y,!0):!1}const nn={[vs]:s.FUNC_ADD,[_T]:s.FUNC_SUBTRACT,[gT]:s.FUNC_REVERSE_SUBTRACT};nn[vT]=s.MIN,nn[xT]=s.MAX;const k={[ST]:s.ZERO,[yT]:s.ONE,[MT]:s.SRC_COLOR,[bp]:s.SRC_ALPHA,[CT]:s.SRC_ALPHA_SATURATE,[AT]:s.DST_COLOR,[TT]:s.DST_ALPHA,[ET]:s.ONE_MINUS_SRC_COLOR,[Ap]:s.ONE_MINUS_SRC_ALPHA,[RT]:s.ONE_MINUS_DST_COLOR,[bT]:s.ONE_MINUS_DST_ALPHA,[wT]:s.CONSTANT_COLOR,[DT]:s.ONE_MINUS_CONSTANT_COLOR,[UT]:s.CONSTANT_ALPHA,[NT]:s.ONE_MINUS_CONSTANT_ALPHA};function Rt(Y,Ae,Ne,Ge,Ee,xe,Ve,ot,It,Ct){if(Y===ga){M===!0&&(Le(s.BLEND),M=!1);return}if(M===!1&&(fe(s.BLEND),M=!0),Y!==mT){if(Y!==y||Ct!==b){if((x!==vs||R!==vs)&&(s.blendEquation(s.FUNC_ADD),x=vs,R=vs),Ct)switch(Y){case No:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ex:s.blendFunc(s.ONE,s.ONE);break;case tx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case No:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ex:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}D=null,w=null,O=null,P=null,L.set(0,0,0),F=0,y=Y,b=Ct}return}Ee=Ee||Ae,xe=xe||Ne,Ve=Ve||Ge,(Ae!==x||Ee!==R)&&(s.blendEquationSeparate(nn[Ae],nn[Ee]),x=Ae,R=Ee),(Ne!==D||Ge!==w||xe!==O||Ve!==P)&&(s.blendFuncSeparate(k[Ne],k[Ge],k[xe],k[Ve]),D=Ne,w=Ge,O=xe,P=Ve),(ot.equals(L)===!1||It!==F)&&(s.blendColor(ot.r,ot.g,ot.b,It),L.copy(ot),F=It),y=Y,b=!1}function nt(Y,Ae){Y.side===Ei?Le(s.CULL_FACE):fe(s.CULL_FACE);let Ne=Y.side===Nn;Ae&&(Ne=!Ne),$e(Ne),Y.blending===No&&Y.transparent===!1?Rt(ga):Rt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Ge=Y.stencilWrite;f.setTest(Ge),Ge&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Be(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(Y){N!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),N=Y)}function Re(Y){Y!==hT?(fe(s.CULL_FACE),Y!==H&&(Y===$v?s.cullFace(s.BACK):Y===dT?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),H=Y}function rt(Y){Y!==j&&(z&&s.lineWidth(Y),j=Y)}function Be(Y,Ae,Ne){Y?(fe(s.POLYGON_OFFSET_FILL),(J!==Ae||oe!==Ne)&&(s.polygonOffset(Ae,Ne),J=Ae,oe=Ne)):Le(s.POLYGON_OFFSET_FILL)}function et(Y){Y?fe(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function Zt(Y){Y===void 0&&(Y=s.TEXTURE0+X-1),ce!==Y&&(s.activeTexture(Y),ce=Y)}function Qt(Y,Ae,Ne){Ne===void 0&&(ce===null?Ne=s.TEXTURE0+X-1:Ne=ce);let Ge=_e[Ne];Ge===void 0&&(Ge={type:void 0,texture:void 0},_e[Ne]=Ge),(Ge.type!==Y||Ge.texture!==Ae)&&(ce!==Ne&&(s.activeTexture(Ne),ce=Ne),s.bindTexture(Y,Ae||ie[Y]),Ge.type=Y,Ge.texture=Ae)}function I(){const Y=_e[ce];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ne(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pe(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function be(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(Y){ve.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),ve.copy(Y))}function Ke(Y){Me.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function Fe(Y,Ae){let Ne=d.get(Ae);Ne===void 0&&(Ne=new WeakMap,d.set(Ae,Ne));let Ge=Ne.get(Y);Ge===void 0&&(Ge=s.getUniformBlockIndex(Ae,Y.name),Ne.set(Y,Ge))}function Oe(Y,Ae){const Ge=d.get(Ae).get(Y);p.get(Ae)!==Ge&&(s.uniformBlockBinding(Ae,Ge,Y.__bindingPointIndex),p.set(Ae,Ge))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ce=null,_e={},g={},v=new WeakMap,S=[],T=null,M=!1,y=null,x=null,D=null,w=null,R=null,O=null,P=null,L=new Bt(0,0,0),F=0,b=!1,N=null,H=null,j=null,J=null,oe=null,ve.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:fe,disable:Le,bindFramebuffer:Ue,drawBuffers:He,useProgram:st,setBlending:Rt,setMaterial:nt,setFlipSided:$e,setCullFace:Re,setLineWidth:rt,setPolygonOffset:Be,setScissorTest:et,activeTexture:Zt,bindTexture:Qt,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:ne,texImage2D:je,texImage3D:be,updateUBOMapping:Fe,uniformBlockBinding:Oe,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Ze,scissor:we,viewport:Ke,reset:ut}}function o2(s,e,n,a,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new _t,_=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,A){return S?new OffscreenCanvas(I,A):ff("canvas")}function M(I,A,ne){let pe=1;const ye=Qt(I);if((ye.width>ne||ye.height>ne)&&(pe=ne/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const he=Math.floor(pe*ye.width),Ze=Math.floor(pe*ye.height);g===void 0&&(g=T(he,Ze));const Ce=A?T(he,Ze):g;return Ce.width=he,Ce.height=Ze,Ce.getContext("2d").drawImage(I,0,0,he,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+Ze+")."),Ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){s.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(I,A,ne,pe,ye=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he=A;if(A===s.RED&&(ne===s.FLOAT&&(he=s.R32F),ne===s.HALF_FLOAT&&(he=s.R16F),ne===s.UNSIGNED_BYTE&&(he=s.R8)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(he=s.R8UI),ne===s.UNSIGNED_SHORT&&(he=s.R16UI),ne===s.UNSIGNED_INT&&(he=s.R32UI),ne===s.BYTE&&(he=s.R8I),ne===s.SHORT&&(he=s.R16I),ne===s.INT&&(he=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(he=s.RG32F),ne===s.HALF_FLOAT&&(he=s.RG16F),ne===s.UNSIGNED_BYTE&&(he=s.RG8)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(he=s.RG8UI),ne===s.UNSIGNED_SHORT&&(he=s.RG16UI),ne===s.UNSIGNED_INT&&(he=s.RG32UI),ne===s.BYTE&&(he=s.RG8I),ne===s.SHORT&&(he=s.RG16I),ne===s.INT&&(he=s.RG32I)),A===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ne===s.UNSIGNED_INT&&(he=s.RGB32UI),ne===s.BYTE&&(he=s.RGB8I),ne===s.SHORT&&(he=s.RGB16I),ne===s.INT&&(he=s.RGB32I)),A===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ne===s.UNSIGNED_INT&&(he=s.RGBA32UI),ne===s.BYTE&&(he=s.RGBA8I),ne===s.SHORT&&(he=s.RGBA16I),ne===s.INT&&(he=s.RGBA32I)),A===s.RGB&&(ne===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),A===s.RGBA){const Ze=ye?uf:Nt.getTransfer(pe);ne===s.FLOAT&&(he=s.RGBA32F),ne===s.HALF_FLOAT&&(he=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(he=Ze===Xt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(I,A){let ne;return I?A===null||A===Or||A===Ho?ne=s.DEPTH24_STENCIL8:A===qa?ne=s.DEPTH32F_STENCIL8:A===tu&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Or||A===Ho?ne=s.DEPTH_COMPONENT24:A===qa?ne=s.DEPTH_COMPONENT32F:A===tu&&(ne=s.DEPTH_COMPONENT16),ne}function O(I,A){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==ia&&I.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function P(I){const A=I.target;A.removeEventListener("dispose",P),F(A),A.isVideoTexture&&_.delete(A)}function L(I){const A=I.target;A.removeEventListener("dispose",L),N(A)}function F(I){const A=a.get(I);if(A.__webglInit===void 0)return;const ne=I.source,pe=v.get(ne);if(pe){const ye=pe[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&b(I),Object.keys(pe).length===0&&v.delete(ne)}a.remove(I)}function b(I){const A=a.get(I);s.deleteTexture(A.__webglTexture);const ne=I.source,pe=v.get(ne);delete pe[A.__cacheKey],c.memory.textures--}function N(I){const A=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ye=0;ye<A.__webglFramebuffer[pe].length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[pe][ye]);else s.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)s.deleteFramebuffer(A.__webglFramebuffer[pe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=I.textures;for(let pe=0,ye=ne.length;pe<ye;pe++){const he=a.get(ne[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),a.remove(ne[pe])}a.remove(I)}let H=0;function j(){H=0}function J(){const I=H;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),H+=1,I}function oe(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function X(I,A){const ne=a.get(I);if(I.isVideoTexture&&et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ne.__version!==I.version){const pe=I.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(ne,I,A);return}}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function z(I,A){const ne=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){ie(ne,I,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function G(I,A){const ne=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){ie(ne,I,A);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function q(I,A){const ne=a.get(I);if(I.version>0&&ne.__version!==I.version){fe(ne,I,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const ce={[zp]:s.REPEAT,[Ss]:s.CLAMP_TO_EDGE,[Bp]:s.MIRRORED_REPEAT},_e={[ia]:s.NEAREST,[VT]:s.NEAREST_MIPMAP_NEAREST,[wc]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[Bd]:s.LINEAR_MIPMAP_NEAREST,[ys]:s.LINEAR_MIPMAP_LINEAR},B={[WT]:s.NEVER,[JT]:s.ALWAYS,[YT]:s.LESS,[CS]:s.LEQUAL,[jT]:s.EQUAL,[QT]:s.GEQUAL,[ZT]:s.GREATER,[KT]:s.NOTEQUAL};function $(I,A){if(A.type===qa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===Bd||A.magFilter===wc||A.magFilter===ys||A.minFilter===Yn||A.minFilter===Bd||A.minFilter===wc||A.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ce[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ce[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ce[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,_e[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,_e[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ia||A.minFilter!==wc&&A.minFilter!==ys||A.type===qa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function ve(I,A){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",P));const pe=A.source;let ye=v.get(pe);ye===void 0&&(ye={},v.set(pe,ye));const he=oe(A);if(he!==I.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),ye[he].usedTimes++;const Ze=ye[I.__cacheKey];Ze!==void 0&&(ye[I.__cacheKey].usedTimes--,Ze.usedTimes===0&&b(A)),I.__cacheKey=he,I.__webglTexture=ye[he].texture}return ne}function Me(I,A,ne){return Math.floor(Math.floor(I/ne)/A)}function De(I,A,ne,pe){const he=I.updateRanges;if(he.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ne,pe,A.data);else{he.sort((be,we)=>be.start-we.start);let Ze=0;for(let be=1;be<he.length;be++){const we=he[Ze],Ke=he[be],Fe=we.start+we.count,Oe=Me(Ke.start,A.width,4),ut=Me(we.start,A.width,4);Ke.start<=Fe+1&&Oe===ut&&Me(Ke.start+Ke.count-1,A.width,4)===Oe?we.count=Math.max(we.count,Ke.start+Ke.count-we.start):(++Ze,he[Ze]=Ke)}he.length=Ze+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),Ye=s.getParameter(s.UNPACK_SKIP_PIXELS),je=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let be=0,we=he.length;be<we;be++){const Ke=he[be],Fe=Math.floor(Ke.start/4),Oe=Math.ceil(Ke.count/4),ut=Fe%A.width,Y=Math.floor(Fe/A.width),Ae=Oe,Ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(s.TEXTURE_2D,0,ut,Y,Ae,Ne,ne,pe,A.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,je)}}function ie(I,A,ne){let pe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=s.TEXTURE_3D);const ye=ve(I,A),he=A.source;n.bindTexture(pe,I.__webglTexture,s.TEXTURE0+ne);const Ze=a.get(he);if(he.version!==Ze.__version||ye===!0){n.activeTexture(s.TEXTURE0+ne);const Ce=Nt.getPrimaries(Nt.workingColorSpace),Ye=A.colorSpace===da?null:Nt.getPrimaries(A.colorSpace),je=A.colorSpace===da||Ce===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let be=M(A.image,!1,o.maxTextureSize);be=Zt(A,be);const we=l.convert(A.format,A.colorSpace),Ke=l.convert(A.type);let Fe=w(A.internalFormat,we,Ke,A.colorSpace,A.isVideoTexture);$(pe,A);let Oe;const ut=A.mipmaps,Y=A.isVideoTexture!==!0,Ae=Ze.__version===void 0||ye===!0,Ne=he.dataReady,Ge=O(A,be);if(A.isDepthTexture)Fe=R(A.format===Go,A.type),Ae&&(Y?n.texStorage2D(s.TEXTURE_2D,1,Fe,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,Fe,be.width,be.height,0,we,Ke,null));else if(A.isDataTexture)if(ut.length>0){Y&&Ae&&n.texStorage2D(s.TEXTURE_2D,Ge,Fe,ut[0].width,ut[0].height);for(let Ee=0,xe=ut.length;Ee<xe;Ee++)Oe=ut[Ee],Y?Ne&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,we,Ke,Oe.data):n.texImage2D(s.TEXTURE_2D,Ee,Fe,Oe.width,Oe.height,0,we,Ke,Oe.data);A.generateMipmaps=!1}else Y?(Ae&&n.texStorage2D(s.TEXTURE_2D,Ge,Fe,be.width,be.height),Ne&&De(A,be,we,Ke)):n.texImage2D(s.TEXTURE_2D,0,Fe,be.width,be.height,0,we,Ke,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Y&&Ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Fe,ut[0].width,ut[0].height,be.depth);for(let Ee=0,xe=ut.length;Ee<xe;Ee++)if(Oe=ut[Ee],A.format!==ta)if(we!==null)if(Y){if(Ne)if(A.layerUpdates.size>0){const Ve=Mx(Oe.width,Oe.height,A.format,A.type);for(const ot of A.layerUpdates){const It=Oe.data.subarray(ot*Ve/Oe.data.BYTES_PER_ELEMENT,(ot+1)*Ve/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,ot,Oe.width,Oe.height,1,we,It)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,be.depth,we,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,Oe.width,Oe.height,be.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Ne&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,be.depth,we,Ke,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,Oe.width,Oe.height,be.depth,0,we,Ke,Oe.data)}else{Y&&Ae&&n.texStorage2D(s.TEXTURE_2D,Ge,Fe,ut[0].width,ut[0].height);for(let Ee=0,xe=ut.length;Ee<xe;Ee++)Oe=ut[Ee],A.format!==ta?we!==null?Y?Ne&&n.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,we,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,Ee,Fe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Ne&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,we,Ke,Oe.data):n.texImage2D(s.TEXTURE_2D,Ee,Fe,Oe.width,Oe.height,0,we,Ke,Oe.data)}else if(A.isDataArrayTexture)if(Y){if(Ae&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Fe,be.width,be.height,be.depth),Ne)if(A.layerUpdates.size>0){const Ee=Mx(be.width,be.height,A.format,A.type);for(const xe of A.layerUpdates){const Ve=be.data.subarray(xe*Ee/be.data.BYTES_PER_ELEMENT,(xe+1)*Ee/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,be.width,be.height,1,we,Ke,Ve)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,we,Ke,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,we,Ke,be.data);else if(A.isData3DTexture)Y?(Ae&&n.texStorage3D(s.TEXTURE_3D,Ge,Fe,be.width,be.height,be.depth),Ne&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,we,Ke,be.data)):n.texImage3D(s.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,we,Ke,be.data);else if(A.isFramebufferTexture){if(Ae)if(Y)n.texStorage2D(s.TEXTURE_2D,Ge,Fe,be.width,be.height);else{let Ee=be.width,xe=be.height;for(let Ve=0;Ve<Ge;Ve++)n.texImage2D(s.TEXTURE_2D,Ve,Fe,Ee,xe,0,we,Ke,null),Ee>>=1,xe>>=1}}else if(ut.length>0){if(Y&&Ae){const Ee=Qt(ut[0]);n.texStorage2D(s.TEXTURE_2D,Ge,Fe,Ee.width,Ee.height)}for(let Ee=0,xe=ut.length;Ee<xe;Ee++)Oe=ut[Ee],Y?Ne&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,we,Ke,Oe):n.texImage2D(s.TEXTURE_2D,Ee,Fe,we,Ke,Oe);A.generateMipmaps=!1}else if(Y){if(Ae){const Ee=Qt(be);n.texStorage2D(s.TEXTURE_2D,Ge,Fe,Ee.width,Ee.height)}Ne&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ke,be)}else n.texImage2D(s.TEXTURE_2D,0,Fe,we,Ke,be);y(A)&&x(pe),Ze.__version=he.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function fe(I,A,ne){if(A.image.length!==6)return;const pe=ve(I,A),ye=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ne);const he=a.get(ye);if(ye.version!==he.__version||pe===!0){n.activeTexture(s.TEXTURE0+ne);const Ze=Nt.getPrimaries(Nt.workingColorSpace),Ce=A.colorSpace===da?null:Nt.getPrimaries(A.colorSpace),Ye=A.colorSpace===da||Ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const je=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,we=[];for(let xe=0;xe<6;xe++)!je&&!be?we[xe]=M(A.image[xe],!0,o.maxCubemapSize):we[xe]=be?A.image[xe].image:A.image[xe],we[xe]=Zt(A,we[xe]);const Ke=we[0],Fe=l.convert(A.format,A.colorSpace),Oe=l.convert(A.type),ut=w(A.internalFormat,Fe,Oe,A.colorSpace),Y=A.isVideoTexture!==!0,Ae=he.__version===void 0||pe===!0,Ne=ye.dataReady;let Ge=O(A,Ke);$(s.TEXTURE_CUBE_MAP,A);let Ee;if(je){Y&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,ut,Ke.width,Ke.height);for(let xe=0;xe<6;xe++){Ee=we[xe].mipmaps;for(let Ve=0;Ve<Ee.length;Ve++){const ot=Ee[Ve];A.format!==ta?Fe!==null?Y?Ne&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,0,0,ot.width,ot.height,Fe,ot.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,ut,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,0,0,ot.width,ot.height,Fe,Oe,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve,ut,ot.width,ot.height,0,Fe,Oe,ot.data)}}}else{if(Ee=A.mipmaps,Y&&Ae){Ee.length>0&&Ge++;const xe=Qt(we[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,ut,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){Y?Ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,we[xe].width,we[xe].height,Fe,Oe,we[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,we[xe].width,we[xe].height,0,Fe,Oe,we[xe].data);for(let Ve=0;Ve<Ee.length;Ve++){const It=Ee[Ve].image[xe].image;Y?Ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,0,0,It.width,It.height,Fe,Oe,It.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,ut,It.width,It.height,0,Fe,Oe,It.data)}}else{Y?Ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe,Oe,we[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,Fe,Oe,we[xe]);for(let Ve=0;Ve<Ee.length;Ve++){const ot=Ee[Ve];Y?Ne&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,0,0,Fe,Oe,ot.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ve+1,ut,Fe,Oe,ot.image[xe])}}}y(A)&&x(s.TEXTURE_CUBE_MAP),he.__version=ye.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Le(I,A,ne,pe,ye,he){const Ze=l.convert(ne.format,ne.colorSpace),Ce=l.convert(ne.type),Ye=w(ne.internalFormat,Ze,Ce,ne.colorSpace),je=a.get(A),be=a.get(ne);if(be.__renderTarget=A,!je.__hasExternalTextures){const we=Math.max(1,A.width>>he),Ke=Math.max(1,A.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,he,Ye,we,Ke,A.depth,0,Ze,Ce,null):n.texImage2D(ye,he,Ye,we,Ke,0,Ze,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),Be(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ye,be.__webglTexture,0,rt(A)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ye,be.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(I,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){const pe=A.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,he=R(A.stencilBuffer,ye),Ze=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=rt(A);Be(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,he,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,I)}else{const pe=A.textures;for(let ye=0;ye<pe.length;ye++){const he=pe[ye],Ze=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),Ye=w(he.internalFormat,Ze,Ce,he.colorSpace),je=rt(A);ne&&Be(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Ye,A.width,A.height):Be(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,Ye,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=a.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const ye=pe.__webglTexture,he=rt(A);if(A.depthTexture.format===nu)Be(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(A.depthTexture.format===Go)Be(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function st(I){const A=a.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=pe}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const pe=I.texture.mipmaps;pe&&pe.length>0?He(A.__webglFramebuffer[0],I):He(A.__webglFramebuffer,I)}else if(ne){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=s.createRenderbuffer(),Ue(A.__webglDepthbuffer[pe],I,!1);else{const ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else{const pe=I.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ue(A.__webglDepthbuffer,I,!1);else{const ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function nn(I,A,ne){const pe=a.get(I);A!==void 0&&Le(pe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&st(I)}function k(I){const A=I.texture,ne=a.get(I),pe=a.get(A);I.addEventListener("dispose",L);const ye=I.textures,he=I.isWebGLCubeRenderTarget===!0,Ze=ye.length>1;if(Ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=A.version,c.memory.textures++),he){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let Ye=0;Ye<A.mipmaps.length;Ye++)ne.__webglFramebuffer[Ce][Ye]=s.createFramebuffer()}else ne.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ce=0,Ye=ye.length;Ce<Ye;Ce++){const je=a.get(ye[Ce]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&Be(I)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const Ye=ye[Ce];ne.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const je=l.convert(Ye.format,Ye.colorSpace),be=l.convert(Ye.type),we=w(Ye.internalFormat,je,be,Ye.colorSpace,I.isXRRenderTarget===!0),Ke=rt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,we,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(ne.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),$(s.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)Le(ne.__webglFramebuffer[Ce][Ye],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ye);else Le(ne.__webglFramebuffer[Ce],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(A)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ze){for(let Ce=0,Ye=ye.length;Ce<Ye;Ce++){const je=ye[Ce],be=a.get(je);let we=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,be.__webglTexture),$(we,je),Le(ne.__webglFramebuffer,I,je,s.COLOR_ATTACHMENT0+Ce,we,0),y(je)&&x(we)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),$(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Ye=0;Ye<A.mipmaps.length;Ye++)Le(ne.__webglFramebuffer[Ye],I,A,s.COLOR_ATTACHMENT0,Ce,Ye);else Le(ne.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,Ce,0);y(A)&&x(Ce),n.unbindTexture()}I.depthBuffer&&st(I)}function Rt(I){const A=I.textures;for(let ne=0,pe=A.length;ne<pe;ne++){const ye=A[ne];if(y(ye)){const he=D(I),Ze=a.get(ye).__webglTexture;n.bindTexture(he,Ze),x(he),n.unbindTexture()}}}const nt=[],$e=[];function Re(I){if(I.samples>0){if(Be(I)===!1){const A=I.textures,ne=I.width,pe=I.height;let ye=s.COLOR_BUFFER_BIT;const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=a.get(I),Ce=A.length>1;if(Ce)for(let je=0;je<A.length;je++)n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Ye=I.texture.mipmaps;Ye&&Ye.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let je=0;je<A.length;je++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[je]);const be=a.get(A[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,ye,s.NEAREST),p===!0&&(nt.length=0,$e.length=0,nt.push(s.COLOR_ATTACHMENT0+je),I.depthBuffer&&I.resolveDepthBuffer===!1&&(nt.push(he),$e.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let je=0;je<A.length;je++){n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[je]);const be=a.get(A[je]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,be,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function rt(I){return Math.min(o.maxSamples,I.samples)}function Be(I){const A=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function et(I){const A=c.render.frame;_.get(I)!==A&&(_.set(I,A),I.update())}function Zt(I,A){const ne=I.colorSpace,pe=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==Pr&&ne!==da&&(Nt.getTransfer(ne)===Xt?(pe!==ta||ye!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),A}function Qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=nn,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Be}function l2(s,e){function n(a,o=da){let l;const c=Nt.getTransfer(o);if(a===Ci)return s.UNSIGNED_BYTE;if(a===Pm)return s.UNSIGNED_SHORT_4_4_4_4;if(a===zm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===MS)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===ES)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===SS)return s.BYTE;if(a===yS)return s.SHORT;if(a===tu)return s.UNSIGNED_SHORT;if(a===Om)return s.INT;if(a===Or)return s.UNSIGNED_INT;if(a===qa)return s.FLOAT;if(a===fu)return s.HALF_FLOAT;if(a===TS)return s.ALPHA;if(a===bS)return s.RGB;if(a===ta)return s.RGBA;if(a===nu)return s.DEPTH_COMPONENT;if(a===Go)return s.DEPTH_STENCIL;if(a===AS)return s.RED;if(a===Bm)return s.RED_INTEGER;if(a===RS)return s.RG;if(a===Im)return s.RG_INTEGER;if(a===Fm)return s.RGBA_INTEGER;if(a===$c||a===ef||a===tf||a===nf)if(c===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===$c)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ef)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===nf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===$c)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ef)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===nf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ip||a===Fp||a===Hp||a===Gp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Ip)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Fp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Gp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Vp||a===kp||a===Xp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Vp||a===kp)return c===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Xp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===qp||a===Wp||a===Yp||a===jp||a===Zp||a===Kp||a===Qp||a===Jp||a===$p||a===em||a===tm||a===nm||a===im||a===am)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===qp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Wp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jp)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$p)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===em)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===tm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===nm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===im)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===am)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rm||a===sm||a===om)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===rm)return c===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===sm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===om)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===lm||a===um||a===cm||a===fm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===lm)return l.COMPRESSED_RED_RGTC1_EXT;if(a===um)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ho?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const u2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c2=`
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

}`;class f2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new FS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Yi({vertexShader:u2,fragmentShader:c2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new na(new gu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h2 extends Ir{constructor(e,n){super();const a=this;let o=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,S=null,T=null;const M=typeof XRWebGLBinding<"u",y=new f2,x={},D=n.getContextAttributes();let w=null,R=null;const O=[],P=[],L=new _t;let F=null;const b=new Vi;b.viewport=new pn;const N=new Vi;N.viewport=new pn;const H=[b,N],j=new N1;let J=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=O[ie];return fe===void 0&&(fe=new sp,O[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=O[ie];return fe===void 0&&(fe=new sp,O[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=O[ie];return fe===void 0&&(fe=new sp,O[ie]=fe),fe.getHandSpace()};function X(ie){const fe=P.indexOf(ie.inputSource);if(fe===-1)return;const Le=O[fe];Le!==void 0&&(Le.update(ie.inputSource,ie.frame,d||c),Le.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",G);for(let ie=0;ie<O.length;ie++){const fe=P[ie];fe!==null&&(P[ie]=null,O[ie].disconnect(fe))}J=null,oe=null,y.reset();for(const ie in x)delete x[ie];e.setRenderTarget(w),S=null,v=null,g=null,o=null,R=null,De.stop(),a.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(w=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",z),o.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Ue=null,He=null;D.depth&&(He=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Le=D.stencil?Go:nu,Ue=D.stencil?Ho:Or);const st={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(st),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new aa(v.textureWidth,v.textureHeight,{format:ta,type:Ci,depthTexture:new km(v.textureWidth,v.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Le),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new aa(S.framebufferWidth,S.framebufferHeight,{format:ta,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(f),De.setContext(o),De.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ie){for(let fe=0;fe<ie.removed.length;fe++){const Le=ie.removed[fe],Ue=P.indexOf(Le);Ue>=0&&(P[Ue]=null,O[Ue].disconnect(Le))}for(let fe=0;fe<ie.added.length;fe++){const Le=ie.added[fe];let Ue=P.indexOf(Le);if(Ue===-1){for(let st=0;st<O.length;st++)if(st>=P.length){P.push(Le),Ue=st;break}else if(P[st]===null){P[st]=Le,Ue=st;break}if(Ue===-1)break}const He=O[Ue];He&&He.connect(Le)}}const q=new ue,ce=new ue;function _e(ie,fe,Le){q.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Le.matrixWorld);const Ue=q.distanceTo(ce),He=fe.projectionMatrix.elements,st=Le.projectionMatrix.elements,nn=He[14]/(He[10]-1),k=He[14]/(He[10]+1),Rt=(He[9]+1)/He[5],nt=(He[9]-1)/He[5],$e=(He[8]-1)/He[0],Re=(st[8]+1)/st[0],rt=nn*$e,Be=nn*Re,et=Ue/(-$e+Re),Zt=et*-$e;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Zt),ie.translateZ(et),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),He[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Qt=nn+et,I=k+et,A=rt-Zt,ne=Be+(Ue-Zt),pe=Rt*k/I*Qt,ye=nt*k/I*Qt;ie.projectionMatrix.makePerspective(A,ne,pe,ye,Qt,I),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function B(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let fe=ie.near,Le=ie.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Le=y.depthFar)),j.near=N.near=b.near=fe,j.far=N.far=b.far=Le,(J!==j.near||oe!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),J=j.near,oe=j.far),j.layers.mask=ie.layers.mask|6,b.layers.mask=j.layers.mask&3,N.layers.mask=j.layers.mask&5;const Ue=ie.parent,He=j.cameras;B(j,Ue);for(let st=0;st<He.length;st++)B(He[st],Ue);He.length===2?_e(j,b,N):j.projectionMatrix.copy(b.projectionMatrix),$(ie,j,Ue)};function $(ie,fe,Le){Le===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(Le.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=dm*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(ie){p=ie,v!==null&&(v.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(ie){return x[ie]};let ve=null;function Me(ie,fe){if(_=fe.getViewerPose(d||c),T=fe,_!==null){const Le=_.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Ue=!1;Le.length!==j.cameras.length&&(j.cameras.length=0,Ue=!0);for(let k=0;k<Le.length;k++){const Rt=Le[k];let nt=null;if(S!==null)nt=S.getViewport(Rt);else{const Re=g.getViewSubImage(v,Rt);nt=Re.viewport,k===0&&(e.setRenderTargetTextures(R,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(R))}let $e=H[k];$e===void 0&&($e=new Vi,$e.layers.enable(k),$e.viewport=new pn,H[k]=$e),$e.matrix.fromArray(Rt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Rt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(nt.x,nt.y,nt.width,nt.height),k===0&&(j.matrix.copy($e.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ue===!0&&j.cameras.push($e)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const k=g.getDepthInformation(Le[0]);k&&k.isValid&&k.texture&&y.init(k,o.renderState)}if(He&&He.includes("camera-access")&&M){e.state.unbindTexture(),g=a.getBinding();for(let k=0;k<Le.length;k++){const Rt=Le[k].camera;if(Rt){let nt=x[Rt];nt||(nt=new FS,x[Rt]=nt);const $e=g.getCameraImage(Rt);nt.sourceTexture=$e}}}}for(let Le=0;Le<O.length;Le++){const Ue=P[Le],He=O[Le];Ue!==null&&He!==void 0&&He.update(Ue,fe,d||c)}ve&&ve(ie,fe),fe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:fe}),T=null}const De=new GS;De.setAnimationLoop(Me),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}}const hs=new ja,d2=new An;function p2(s,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,zS(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,w,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,R)):x.isMeshMatcapMaterial?(l(y,x),T(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,D,w):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Nn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Nn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),w=D.envMap,R=D.envMapRotation;w&&(y.envMap.value=w,hs.copy(R),hs.x*=-1,hs.y*=-1,hs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),y.envMapRotation.value.setFromMatrix4(d2.makeRotationFromEuler(hs)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,D,w){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=w*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Nn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function m2(s,e,n,a){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,w){const R=w.program;a.uniformBlockBinding(D,R)}function d(D,w){let R=o[D.id];R===void 0&&(T(D),R=_(D),o[D.id]=R,D.addEventListener("dispose",y));const O=w.program;a.updateUBOMapping(D,O);const P=e.render.frame;l[D.id]!==P&&(v(D),l[D.id]=P)}function _(D){const w=g();D.__bindingPointIndex=w;const R=s.createBuffer(),O=D.__size,P=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,O,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,R),R}function g(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const w=o[D.id],R=D.uniforms,O=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let P=0,L=R.length;P<L;P++){const F=Array.isArray(R[P])?R[P]:[R[P]];for(let b=0,N=F.length;b<N;b++){const H=F[b];if(S(H,P,b,O)===!0){const j=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let oe=0;for(let X=0;X<J.length;X++){const z=J[X],G=M(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,j+oe,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,oe),oe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,w,R,O){const P=D.value,L=w+"_"+R;if(O[L]===void 0)return typeof P=="number"||typeof P=="boolean"?O[L]=P:O[L]=P.clone(),!0;{const F=O[L];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[L]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function T(D){const w=D.uniforms;let R=0;const O=16;for(let L=0,F=w.length;L<F;L++){const b=Array.isArray(w[L])?w[L]:[w[L]];for(let N=0,H=b.length;N<H;N++){const j=b[N],J=Array.isArray(j.value)?j.value:[j.value];for(let oe=0,X=J.length;oe<X;oe++){const z=J[oe],G=M(z),q=R%O,ce=q%G.boundary,_e=q+ce;R+=ce,_e!==0&&O-_e<G.storage&&(R+=O-_e),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=R,R+=G.storage}}}const P=R%O;return P>0&&(R+=O-P),D.__size=R,D.__cache={},this}function M(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),w}function y(D){const w=D.target;w.removeEventListener("dispose",y);const R=c.indexOf(w.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function x(){for(const D in o)s.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:p,update:d,dispose:x}}class _2{constructor(e={}){const{canvas:n=e1(),context:a=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const D=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let O=!1;this._outputColorSpace=dn;let P=0,L=0,F=null,b=-1,N=null;const H=new pn,j=new pn;let J=null;const oe=new Bt(0);let X=0,z=n.width,G=n.height,q=1,ce=null,_e=null;const B=new pn(0,0,z,G),$=new pn(0,0,z,G);let ve=!1;const Me=new IS;let De=!1,ie=!1;const fe=new An,Le=new ue,Ue=new pn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function nn(){return F===null?q:1}let k=a;function Rt(U,Z){return n.getContext(U,Z)}try{const U={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xf}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),k===null){const Z="webgl2";if(k=Rt(Z,U),k===null)throw Rt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let nt,$e,Re,rt,Be,et,Zt,Qt,I,A,ne,pe,ye,he,Ze,Ce,Ye,je,be,we,Ke,Fe,Oe,ut;function Y(){nt=new AR(k),nt.init(),Fe=new l2(k,nt),$e=new xR(k,nt,e,Fe),Re=new s2(k,nt),$e.reversedDepthBuffer&&v&&Re.buffers.depth.setReversed(!0),rt=new wR(k),Be=new YC,et=new o2(k,nt,Re,Be,$e,Fe,rt),Zt=new yR(R),Qt=new bR(R),I=new P1(k),Oe=new gR(k,I),A=new RR(k,I,rt,Oe),ne=new UR(k,A,I,rt),be=new DR(k,$e,et),Ce=new SR(Be),pe=new WC(R,Zt,Qt,nt,$e,Oe,Ce),ye=new p2(R,Be),he=new ZC,Ze=new t2(nt),je=new _R(R,Zt,Qt,Re,ne,S,p),Ye=new a2(R,ne,$e),ut=new m2(k,rt,$e,Re),we=new vR(k,nt,rt),Ke=new CR(k,nt,rt),rt.programs=pe.programs,R.capabilities=$e,R.extensions=nt,R.properties=Be,R.renderLists=he,R.shadowMap=Ye,R.state=Re,R.info=rt}Y();const Ae=new h2(R,k);this.xr=Ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const U=nt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=nt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(U){U!==void 0&&(q=U,this.setSize(z,G,!1))},this.getSize=function(U){return U.set(z,G)},this.setSize=function(U,Z,re=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,G=Z,n.width=Math.floor(U*q),n.height=Math.floor(Z*q),re===!0&&(n.style.width=U+"px",n.style.height=Z+"px"),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(z*q,G*q).floor()},this.setDrawingBufferSize=function(U,Z,re){z=U,G=Z,q=re,n.width=Math.floor(U*re),n.height=Math.floor(Z*re),this.setViewport(0,0,U,Z)},this.getCurrentViewport=function(U){return U.copy(H)},this.getViewport=function(U){return U.copy(B)},this.setViewport=function(U,Z,re,se){U.isVector4?B.set(U.x,U.y,U.z,U.w):B.set(U,Z,re,se),Re.viewport(H.copy(B).multiplyScalar(q).round())},this.getScissor=function(U){return U.copy($)},this.setScissor=function(U,Z,re,se){U.isVector4?$.set(U.x,U.y,U.z,U.w):$.set(U,Z,re,se),Re.scissor(j.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(U){Re.setScissorTest(ve=U)},this.setOpaqueSort=function(U){ce=U},this.setTransparentSort=function(U){_e=U},this.getClearColor=function(U){return U.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(U=!0,Z=!0,re=!0){let se=0;if(U){let Q=!1;if(F!==null){const Se=F.texture.format;Q=Se===Fm||Se===Im||Se===Bm}if(Q){const Se=F.texture.type,Pe=Se===Ci||Se===Or||Se===tu||Se===Ho||Se===Pm||Se===zm,Xe=je.getClearColor(),Ie=je.getClearAlpha(),Qe=Xe.r,at=Xe.g,Je=Xe.b;Pe?(T[0]=Qe,T[1]=at,T[2]=Je,T[3]=Ie,k.clearBufferuiv(k.COLOR,0,T)):(M[0]=Qe,M[1]=at,M[2]=Je,M[3]=Ie,k.clearBufferiv(k.COLOR,0,M))}else se|=k.COLOR_BUFFER_BIT}Z&&(se|=k.DEPTH_BUFFER_BIT),re&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),je.dispose(),he.dispose(),Ze.dispose(),Be.dispose(),Zt.dispose(),Qt.dispose(),ne.dispose(),Oe.dispose(),ut.dispose(),pe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Ui),Ae.removeEventListener("sessionend",Qo),ra.stop()};function Ne(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const U=rt.autoReset,Z=Ye.enabled,re=Ye.autoUpdate,se=Ye.needsUpdate,Q=Ye.type;Y(),rt.autoReset=U,Ye.enabled=Z,Ye.autoUpdate=re,Ye.needsUpdate=se,Ye.type=Q}function Ee(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function xe(U){const Z=U.target;Z.removeEventListener("dispose",xe),Ve(Z)}function Ve(U){ot(U),Be.remove(U)}function ot(U){const Z=Be.get(U).programs;Z!==void 0&&(Z.forEach(function(re){pe.releaseProgram(re)}),U.isShaderMaterial&&pe.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,re,se,Q,Se){Z===null&&(Z=He);const Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Xe=Qa(U,Z,re,se,Q);Re.setMaterial(se,Pe);let Ie=re.index,Qe=1;if(se.wireframe===!0){if(Ie=A.getWireframeAttribute(re),Ie===void 0)return;Qe=2}const at=re.drawRange,Je=re.attributes.position;let mt=at.start*Qe,Pt=(at.start+at.count)*Qe;Se!==null&&(mt=Math.max(mt,Se.start*Qe),Pt=Math.min(Pt,(Se.start+Se.count)*Qe)),Ie!==null?(mt=Math.max(mt,0),Pt=Math.min(Pt,Ie.count)):Je!=null&&(mt=Math.max(mt,0),Pt=Math.min(Pt,Je.count));const qt=Pt-mt;if(qt<0||qt===1/0)return;Oe.setup(Q,se,Xe,re,Ie);let zt,gt=we;if(Ie!==null&&(zt=I.get(Ie),gt=Ke,gt.setIndex(zt)),Q.isMesh)se.wireframe===!0?(Re.setLineWidth(se.wireframeLinewidth*nn()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(Q.isLine){let qe=se.linewidth;qe===void 0&&(qe=1),Re.setLineWidth(qe*nn()),Q.isLineSegments?gt.setMode(k.LINES):Q.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else Q.isPoints?gt.setMode(k.POINTS):Q.isSprite&&gt.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)iu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const qe=Q._multiDrawStarts,Kt=Q._multiDrawCounts,wt=Q._multiDrawCount,Pn=Ie?I.get(Ie).bytesPerElement:1,xa=Be.get(se).currentProgram.getUniforms();for(let wn=0;wn<wt;wn++)xa.setValue(k,"_gl_DrawID",wn),gt.render(qe[wn]/Pn,Kt[wn])}else if(Q.isInstancedMesh)gt.renderInstances(mt,qt,Q.count);else if(re.isInstancedBufferGeometry){const qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Kt=Math.min(re.instanceCount,qe);gt.renderInstances(mt,qt,Kt)}else gt.render(mt,qt)};function It(U,Z,re){U.transparent===!0&&U.side===Ei&&U.forceSinglePass===!1?(U.side=Nn,U.needsUpdate=!0,hi(U,Z,re),U.side=Ya,U.needsUpdate=!0,hi(U,Z,re),U.side=Ei):hi(U,Z,re)}this.compile=function(U,Z,re=null){re===null&&(re=U),x=Ze.get(re),x.init(Z),w.push(x),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),U!==re&&U.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const se=new Set;return U.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Se=Q.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Xe=Se[Pe];It(Xe,re,Q),se.add(Xe)}else It(Se,re,Q),se.add(Se)}),x=w.pop(),se},this.compileAsync=function(U,Z,re=null){const se=this.compile(U,Z,re);return new Promise(Q=>{function Se(){if(se.forEach(function(Pe){Be.get(Pe).currentProgram.isReady()&&se.delete(Pe)}),se.size===0){Q(U);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ct=null;function Zn(U){Ct&&Ct(U)}function Ui(){ra.stop()}function Qo(){ra.start()}const ra=new GS;ra.setAnimationLoop(Zn),typeof self<"u"&&ra.setContext(self),this.setAnimationLoop=function(U){Ct=U,Ae.setAnimationLoop(U),U===null?ra.stop():ra.start()},Ae.addEventListener("sessionstart",Ui),Ae.addEventListener("sessionend",Qo),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Z),Z=Ae.getCamera()),U.isScene===!0&&U.onBeforeRender(R,U,Z,F),x=Ze.get(U,w.length),x.init(Z),w.push(x),fe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Me.setFromProjectionMatrix(fe,ma,Z.reversedDepth),ie=this.localClippingEnabled,De=Ce.init(this.clippingPlanes,ie),y=he.get(U,D.length),y.init(),D.push(y),Ae.enabled===!0&&Ae.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Us(Se,Z,-1/0,R.sortObjects)}Us(U,Z,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ce,_e),st=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,st&&je.addToRenderList(y,U),this.info.render.frame++,De===!0&&Ce.beginShadows();const re=x.state.shadowsArray;Ye.render(re,U,Z),De===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,Q=y.transmissive;if(x.setupLights(),Z.isArrayCamera){const Se=Z.cameras;if(Q.length>0)for(let Pe=0,Xe=Se.length;Pe<Xe;Pe++){const Ie=Se[Pe];Ls(se,Q,U,Ie)}st&&je.render(U);for(let Pe=0,Xe=Se.length;Pe<Xe;Pe++){const Ie=Se[Pe];Ns(y,U,Ie,Ie.viewport)}}else Q.length>0&&Ls(se,Q,U,Z),st&&je.render(U),Ns(y,U,Z);F!==null&&L===0&&(et.updateMultisampleRenderTarget(F),et.updateRenderTargetMipmap(F)),U.isScene===!0&&U.onAfterRender(R,U,Z),Oe.resetDefaultState(),b=-1,N=null,w.pop(),w.length>0?(x=w[w.length-1],De===!0&&Ce.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Us(U,Z,re,se){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)re=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLight)x.pushLight(U),U.castShadow&&x.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Me.intersectsSprite(U)){se&&Ue.setFromMatrixPosition(U.matrixWorld).applyMatrix4(fe);const Pe=ne.update(U),Xe=U.material;Xe.visible&&y.push(U,Pe,Xe,re,Ue.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Me.intersectsObject(U))){const Pe=ne.update(U),Xe=U.material;if(se&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ue.copy(U.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ue.copy(Pe.boundingSphere.center)),Ue.applyMatrix4(U.matrixWorld).applyMatrix4(fe)),Array.isArray(Xe)){const Ie=Pe.groups;for(let Qe=0,at=Ie.length;Qe<at;Qe++){const Je=Ie[Qe],mt=Xe[Je.materialIndex];mt&&mt.visible&&y.push(U,Pe,mt,re,Ue.z,Je)}}else Xe.visible&&y.push(U,Pe,Xe,re,Ue.z,null)}}const Se=U.children;for(let Pe=0,Xe=Se.length;Pe<Xe;Pe++)Us(Se[Pe],Z,re,se)}function Ns(U,Z,re,se){const Q=U.opaque,Se=U.transmissive,Pe=U.transparent;x.setupLightsView(re),De===!0&&Ce.setGlobalState(R.clippingPlanes,re),se&&Re.viewport(H.copy(se)),Q.length>0&&Vr(Q,Z,re),Se.length>0&&Vr(Se,Z,re),Pe.length>0&&Vr(Pe,Z,re),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Ls(U,Z,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new aa(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?fu:Ci,minFilter:ys,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Se=x.state.transmissionRenderTarget[se.id],Pe=se.viewport||H;Se.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const Xe=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Qe=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(oe),X=R.getClearAlpha(),X<1&&R.setClearColor(16777215,.5),R.clear(),st&&je.render(re);const at=R.toneMapping;R.toneMapping=Ur;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),De===!0&&Ce.setGlobalState(R.clippingPlanes,se),Vr(U,re,se),et.updateMultisampleRenderTarget(Se),et.updateRenderTargetMipmap(Se),nt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Pt=0,qt=Z.length;Pt<qt;Pt++){const zt=Z[Pt],gt=zt.object,qe=zt.geometry,Kt=zt.material,wt=zt.group;if(Kt.side===Ei&&gt.layers.test(se.layers)){const Pn=Kt.side;Kt.side=Nn,Kt.needsUpdate=!0,Jo(gt,re,se,qe,Kt,wt),Kt.side=Pn,Kt.needsUpdate=!0,mt=!0}}mt===!0&&(et.updateMultisampleRenderTarget(Se),et.updateRenderTargetMipmap(Se))}R.setRenderTarget(Xe,Ie,Qe),R.setClearColor(oe,X),Je!==void 0&&(se.viewport=Je),R.toneMapping=at}function Vr(U,Z,re){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Se=U.length;Q<Se;Q++){const Pe=U[Q],Xe=Pe.object,Ie=Pe.geometry,Qe=Pe.group;let at=Pe.material;at.allowOverride===!0&&se!==null&&(at=se),Xe.layers.test(re.layers)&&Jo(Xe,Z,re,Ie,at,Qe)}}function Jo(U,Z,re,se,Q,Se){U.onBeforeRender(R,Z,re,se,Q,Se),U.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Q.onBeforeRender(R,Z,re,se,U,Se),Q.transparent===!0&&Q.side===Ei&&Q.forceSinglePass===!1?(Q.side=Nn,Q.needsUpdate=!0,R.renderBufferDirect(re,Z,se,Q,U,Se),Q.side=Ya,Q.needsUpdate=!0,R.renderBufferDirect(re,Z,se,Q,U,Se),Q.side=Ei):R.renderBufferDirect(re,Z,se,Q,U,Se),U.onAfterRender(R,Z,re,se,Q,Se)}function hi(U,Z,re){Z.isScene!==!0&&(Z=He);const se=Be.get(U),Q=x.state.lights,Se=x.state.shadowsArray,Pe=Q.state.version,Xe=pe.getParameters(U,Q.state,Se,Z,re),Ie=pe.getProgramCacheKey(Xe);let Qe=se.programs;se.environment=U.isMeshStandardMaterial?Z.environment:null,se.fog=Z.fog,se.envMap=(U.isMeshStandardMaterial?Qt:Zt).get(U.envMap||se.environment),se.envMapRotation=se.environment!==null&&U.envMap===null?Z.environmentRotation:U.envMapRotation,Qe===void 0&&(U.addEventListener("dispose",xe),Qe=new Map,se.programs=Qe);let at=Qe.get(Ie);if(at!==void 0){if(se.currentProgram===at&&se.lightsStateVersion===Pe)return On(U,Xe),at}else Xe.uniforms=pe.getUniforms(U),U.onBeforeCompile(Xe,R),at=pe.acquireProgram(Xe,Ie),Qe.set(Ie,at),se.uniforms=Xe.uniforms;const Je=se.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Je.clippingPlanes=Ce.uniform),On(U,Xe),se.needsLights=bf(U),se.lightsStateVersion=Pe,se.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.directionalShadowMap.value=Q.state.directionalShadowMap,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotShadowMap.value=Q.state.spotShadowMap,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMap.value=Q.state.pointShadowMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=at,se.uniformsList=null,at}function mn(U){if(U.uniformsList===null){const Z=U.currentProgram.getUniforms();U.uniformsList=af.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function On(U,Z){const re=Be.get(U);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function Qa(U,Z,re,se,Q){Z.isScene!==!0&&(Z=He),et.resetTextureUnits();const Se=Z.fog,Pe=se.isMeshStandardMaterial?Z.environment:null,Xe=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Pr,Ie=(se.isMeshStandardMaterial?Qt:Zt).get(se.envMap||Pe),Qe=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,at=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Pt=!!re.morphAttributes.color;let qt=Ur;se.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(qt=R.toneMapping);const zt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gt=zt!==void 0?zt.length:0,qe=Be.get(se),Kt=x.state.lights;if(De===!0&&(ie===!0||U!==N)){const En=U===N&&se.id===b;Ce.setState(se,U,En)}let wt=!1;se.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Kt.state.version||qe.outputColorSpace!==Xe||Q.isBatchedMesh&&qe.batching===!1||!Q.isBatchedMesh&&qe.batching===!0||Q.isBatchedMesh&&qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&qe.instancing===!1||!Q.isInstancedMesh&&qe.instancing===!0||Q.isSkinnedMesh&&qe.skinning===!1||!Q.isSkinnedMesh&&qe.skinning===!0||Q.isInstancedMesh&&qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&qe.instancingMorph===!1&&Q.morphTexture!==null||qe.envMap!==Ie||se.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ce.numPlanes||qe.numIntersection!==Ce.numIntersection)||qe.vertexAlphas!==Qe||qe.vertexTangents!==at||qe.morphTargets!==Je||qe.morphNormals!==mt||qe.morphColors!==Pt||qe.toneMapping!==qt||qe.morphTargetsCount!==gt)&&(wt=!0):(wt=!0,qe.__version=se.version);let Pn=qe.currentProgram;wt===!0&&(Pn=hi(se,Z,Q));let xa=!1,wn=!1,Xr=!1;const St=Pn.getUniforms(),Vn=qe.uniforms;if(Re.useProgram(Pn.program)&&(xa=!0,wn=!0,Xr=!0),se.id!==b&&(b=se.id,wn=!0),xa||N!==U){Re.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),St.setValue(k,"projectionMatrix",U.projectionMatrix),St.setValue(k,"viewMatrix",U.matrixWorldInverse);const un=St.map.cameraPosition;un!==void 0&&un.setValue(k,Le.setFromMatrixPosition(U.matrixWorld)),$e.logarithmicDepthBuffer&&St.setValue(k,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&St.setValue(k,"isOrthographic",U.isOrthographicCamera===!0),N!==U&&(N=U,wn=!0,Xr=!0)}if(Q.isSkinnedMesh){St.setOptional(k,Q,"bindMatrix"),St.setOptional(k,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),St.setValue(k,"boneTexture",En.boneTexture,et))}Q.isBatchedMesh&&(St.setOptional(k,Q,"batchingTexture"),St.setValue(k,"batchingTexture",Q._matricesTexture,et),St.setOptional(k,Q,"batchingIdTexture"),St.setValue(k,"batchingIdTexture",Q._indirectTexture,et),St.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&St.setValue(k,"batchingColorTexture",Q._colorsTexture,et));const Kn=re.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&be.update(Q,re,Pn),(wn||qe.receiveShadow!==Q.receiveShadow)&&(qe.receiveShadow=Q.receiveShadow,St.setValue(k,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Vn.envMap.value=Ie,Vn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Z.environment!==null&&(Vn.envMapIntensity.value=Z.environmentIntensity),wn&&(St.setValue(k,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&$o(Vn,Xr),Se&&se.fog===!0&&ye.refreshFogUniforms(Vn,Se),ye.refreshMaterialUniforms(Vn,se,q,G,x.state.transmissionRenderTarget[U.id]),af.upload(k,mn(qe),Vn,et)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(af.upload(k,mn(qe),Vn,et),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&St.setValue(k,"center",Q.center),St.setValue(k,"modelViewMatrix",Q.modelViewMatrix),St.setValue(k,"normalMatrix",Q.normalMatrix),St.setValue(k,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const En=se.uniformsGroups;for(let un=0,Os=En.length;un<Os;un++){const sa=En[un];ut.update(sa,Pn),ut.bind(sa,Pn)}}return Pn}function $o(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function bf(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(U,Z,re){const se=Be.get(U);se.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Be.get(U.texture).__webglTexture=Z,Be.get(U.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Z){const re=Be.get(U);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0};const Af=k.createFramebuffer();this.setRenderTarget=function(U,Z=0,re=0){F=U,P=Z,L=re;let se=!0,Q=null,Se=!1,Pe=!1;if(U){const Ie=Be.get(U);if(Ie.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(k.FRAMEBUFFER,null),se=!1;else if(Ie.__webglFramebuffer===void 0)et.setupRenderTarget(U);else if(Ie.__hasExternalTextures)et.rebindTextures(U,Be.get(U.texture).__webglTexture,Be.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Je=U.depthTexture;if(Ie.__boundDepthTexture!==Je){if(Je!==null&&Be.has(Je)&&(U.width!==Je.image.width||U.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(U)}}const Qe=U.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Pe=!0);const at=Be.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(at[Z])?Q=at[Z][re]:Q=at[Z],Se=!0):U.samples>0&&et.useMultisampledRTT(U)===!1?Q=Be.get(U).__webglMultisampledFramebuffer:Array.isArray(at)?Q=at[re]:Q=at,H.copy(U.viewport),j.copy(U.scissor),J=U.scissorTest}else H.copy(B).multiplyScalar(q).floor(),j.copy($).multiplyScalar(q).floor(),J=ve;if(re!==0&&(Q=Af),Re.bindFramebuffer(k.FRAMEBUFFER,Q)&&se&&Re.drawBuffers(U,Q),Re.viewport(H),Re.scissor(j),Re.setScissorTest(J),Se){const Ie=Be.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,re)}else if(Pe){const Ie=Z;for(let Qe=0;Qe<U.textures.length;Qe++){const at=Be.get(U.textures[Qe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Qe,at.__webglTexture,re,Ie)}}else if(U!==null&&re!==0){const Ie=Be.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,re)}b=-1},this.readRenderTargetPixels=function(U,Z,re,se,Q,Se,Pe,Xe=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Be.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){Re.bindFramebuffer(k.FRAMEBUFFER,Ie);try{const Qe=U.textures[Xe],at=Qe.format,Je=Qe.type;if(!$e.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-se&&re>=0&&re<=U.height-Q&&(U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Xe),k.readPixels(Z,re,se,Q,Fe.convert(at),Fe.convert(Je),Se))}finally{const Qe=F!==null?Be.get(F).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(U,Z,re,se,Q,Se,Pe,Xe=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Be.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(Z>=0&&Z<=U.width-se&&re>=0&&re<=U.height-Q){Re.bindFramebuffer(k.FRAMEBUFFER,Ie);const Qe=U.textures[Xe],at=Qe.format,Je=Qe.type;if(!$e.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Xe),k.readPixels(Z,re,se,Q,Fe.convert(at),Fe.convert(Je),0);const Pt=F!==null?Be.get(F).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,Pt);const qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await t1(k,qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.deleteBuffer(mt),k.deleteSync(qt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Z=null,re=0){const se=Math.pow(2,-re),Q=Math.floor(U.image.width*se),Se=Math.floor(U.image.height*se),Pe=Z!==null?Z.x:0,Xe=Z!==null?Z.y:0;et.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,re,0,0,Pe,Xe,Q,Se),Re.unbindTexture()};const xu=k.createFramebuffer(),kr=k.createFramebuffer();this.copyTextureToTexture=function(U,Z,re=null,se=null,Q=0,Se=null){Se===null&&(Q!==0?(iu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Q,Q=0):Se=0);let Pe,Xe,Ie,Qe,at,Je,mt,Pt,qt;const zt=U.isCompressedTexture?U.mipmaps[Se]:U.image;if(re!==null)Pe=re.max.x-re.min.x,Xe=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,Qe=re.min.x,at=re.min.y,Je=re.isBox3?re.min.z:0;else{const Kn=Math.pow(2,-Q);Pe=Math.floor(zt.width*Kn),Xe=Math.floor(zt.height*Kn),U.isDataArrayTexture?Ie=zt.depth:U.isData3DTexture?Ie=Math.floor(zt.depth*Kn):Ie=1,Qe=0,at=0,Je=0}se!==null?(mt=se.x,Pt=se.y,qt=se.z):(mt=0,Pt=0,qt=0);const gt=Fe.convert(Z.format),qe=Fe.convert(Z.type);let Kt;Z.isData3DTexture?(et.setTexture3D(Z,0),Kt=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(et.setTexture2DArray(Z,0),Kt=k.TEXTURE_2D_ARRAY):(et.setTexture2D(Z,0),Kt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const wt=k.getParameter(k.UNPACK_ROW_LENGTH),Pn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xa=k.getParameter(k.UNPACK_SKIP_PIXELS),wn=k.getParameter(k.UNPACK_SKIP_ROWS),Xr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,at),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const St=U.isDataArrayTexture||U.isData3DTexture,Vn=Z.isDataArrayTexture||Z.isData3DTexture;if(U.isDepthTexture){const Kn=Be.get(U),En=Be.get(Z),un=Be.get(Kn.__renderTarget),Os=Be.get(En.__renderTarget);Re.bindFramebuffer(k.READ_FRAMEBUFFER,un.__webglFramebuffer),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let sa=0;sa<Ie;sa++)St&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.get(U).__webglTexture,Q,Je+sa),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.get(Z).__webglTexture,Se,qt+sa)),k.blitFramebuffer(Qe,at,Pe,Xe,mt,Pt,Pe,Xe,k.DEPTH_BUFFER_BIT,k.NEAREST);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||U.isRenderTargetTexture||Be.has(U)){const Kn=Be.get(U),En=Be.get(Z);Re.bindFramebuffer(k.READ_FRAMEBUFFER,xu),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,kr);for(let un=0;un<Ie;un++)St?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kn.__webglTexture,Q,Je+un):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kn.__webglTexture,Q),Vn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,En.__webglTexture,Se,qt+un):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,En.__webglTexture,Se),Q!==0?k.blitFramebuffer(Qe,at,Pe,Xe,mt,Pt,Pe,Xe,k.COLOR_BUFFER_BIT,k.NEAREST):Vn?k.copyTexSubImage3D(Kt,Se,mt,Pt,qt+un,Qe,at,Pe,Xe):k.copyTexSubImage2D(Kt,Se,mt,Pt,Qe,at,Pe,Xe);Re.bindFramebuffer(k.READ_FRAMEBUFFER,null),Re.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Vn?U.isDataTexture||U.isData3DTexture?k.texSubImage3D(Kt,Se,mt,Pt,qt,Pe,Xe,Ie,gt,qe,zt.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Kt,Se,mt,Pt,qt,Pe,Xe,Ie,gt,zt.data):k.texSubImage3D(Kt,Se,mt,Pt,qt,Pe,Xe,Ie,gt,qe,zt):U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,mt,Pt,Pe,Xe,gt,qe,zt.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,mt,Pt,zt.width,zt.height,gt,zt.data):k.texSubImage2D(k.TEXTURE_2D,Se,mt,Pt,Pe,Xe,gt,qe,zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,wt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xa),k.pixelStorei(k.UNPACK_SKIP_ROWS,wn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xr),Se===0&&Z.generateMipmaps&&k.generateMipmap(Kt),Re.unbindTexture()},this.initRenderTarget=function(U){Be.get(U).__webglFramebuffer===void 0&&et.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?et.setTextureCube(U,0):U.isData3DTexture?et.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?et.setTexture2DArray(U,0):et.setTexture2D(U,0),Re.unbindTexture()},this.resetState=function(){P=0,L=0,F=null,Re.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Nt._getUnpackColorSpace()}}/**
 * postprocessing v6.37.8 build Fri Sep 12 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var pp=1/1e3,g2=1e3,v2=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(s){typeof document<"u"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=s)}get delta(){return this._delta*pp}get fixedDelta(){return this._fixedDelta*pp}set fixedDelta(s){this._fixedDelta=s*g2}get elapsed(){return this._elapsed*pp}update(s){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(s!==void 0?s:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},x2=(()=>{const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Fr;return n.setAttribute("position",new Wi(s,3)),n.setAttribute("uv",new Wi(e,2)),n})(),Hr=class _m{static get fullscreenGeometry(){return x2}constructor(e="Pass",n=new pm,a=new Vm){this.name=e,this.renderer=null,this.scene=n,this.camera=a,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new na(_m.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new pm),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=hu){}render(e,n,a,o,l){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,a){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof aa||n instanceof Zo||n instanceof Hn||n instanceof _m)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},S2=class extends Hr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(s,e,n,a,o){const l=s.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},y2=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,M2="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",E2=class extends Yi{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new bn(null),opacity:new bn(1)},blending:ga,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:y2,vertexShader:M2})}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}getOpacity(s){return this.uniforms.opacity.value}setOpacity(s){this.uniforms.opacity.value=s}},T2=class extends Hr{constructor(s,e=!0){super("CopyPass"),this.fullscreenMaterial=new E2,this.needsSwap=!1,this.renderTarget=s,s===void 0&&(this.renderTarget=new aa(1,1,{minFilter:Yn,magFilter:Yn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(s){this.autoResize=s}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(s){this.autoResize=s}render(s,e,n,a,o){this.fullscreenMaterial.inputBuffer=e.texture,s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera)}setSize(s,e){this.autoResize&&this.renderTarget.setSize(s,e)}initialize(s,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Ci?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":s!==null&&s.outputColorSpace===dn&&(this.renderTarget.texture.colorSpace=dn))}},Yx=new Bt,WS=class extends Hr{constructor(s=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=s,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(s,e,n){this.color=s,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(s){this.overrideClearColor=s}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(s){this.overrideClearAlpha=s}render(s,e,n,a,o){const l=this.overrideClearColor,c=this.overrideClearAlpha,f=s.getClearAlpha(),p=l!==null,d=c>=0;p?(s.getClearColor(Yx),s.setClearColor(l,d?c:f)):d&&s.setClearAlpha(c),s.setRenderTarget(this.renderToScreen?null:e),s.clear(this.color,this.depth,this.stencil),p?s.setClearColor(Yx,f):d&&s.setClearAlpha(f)}},b2=class extends Hr{constructor(s,e){super("MaskPass",s,e),this.needsSwap=!1,this.clearPass=new WS(!1,!1,!0),this.inverse=!1}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get inverted(){return this.inverse}set inverted(s){this.inverse=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(s){this.inverted=s}render(s,e,n,a,o){const l=s.getContext(),c=s.state.buffers,f=this.scene,p=this.camera,d=this.clearPass,_=this.inverted?0:1,g=1-_;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.stencil.setFunc(l.ALWAYS,_,4294967295),c.stencil.setClear(g),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?d.render(s,null):(d.render(s,e),d.render(s,n))),this.renderToScreen?(s.setRenderTarget(null),s.render(f,p)):(s.setRenderTarget(e),s.render(f,p),s.setRenderTarget(n),s.render(f,p)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(l.EQUAL,1,4294967295),c.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.stencil.setLocked(!0)}},jx=class{constructor(s=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:a=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,o,a),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new T2,this.depthTexture=null,this.passes=[],this.timer=new v2,this.autoRenderToScreen=!0,this.setRenderer(s)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(s){const e=this.inputBuffer,n=this.multisampling;n>0&&s>0?(this.inputBuffer.samples=s,this.outputBuffer.samples=s,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,s),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(s){if(this.renderer=s,s!==null){const e=s.getSize(new _t),n=s.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;a===Ci&&s.outputColorSpace===dn&&(this.inputBuffer.texture.colorSpace=dn,this.outputBuffer.texture.colorSpace=dn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),s.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(s,n,a)}}replaceRenderer(s,e=!0){const n=this.renderer,a=n.domElement.parentNode;return this.setRenderer(s),e&&a!==null&&(a.removeChild(n.domElement),a.appendChild(s.domElement)),n}createDepthTexture(){const s=this.depthTexture=new km;return this.inputBuffer.depthTexture=s,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(s.format=Go,s.type=Ho):s.type=Or,s}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const s of this.passes)s.setDepthTexture(null)}}createBuffer(s,e,n,a){const o=this.renderer,l=o===null?new _t:o.getDrawingBufferSize(new _t),c={minFilter:Yn,magFilter:Yn,stencilBuffer:e,depthBuffer:s,type:n},f=new aa(l.width,l.height,c);return a>0&&(f.ignoreDepthForMultisampleCopy=!1,f.samples=a),n===Ci&&o!==null&&o.outputColorSpace===dn&&(f.texture.colorSpace=dn),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(s){for(const e of this.passes)e.mainScene=s}setMainCamera(s){for(const e of this.passes)e.mainCamera=s}addPass(s,e){const n=this.passes,a=this.renderer,o=a.getDrawingBufferSize(new _t),l=a.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(s.setRenderer(a),s.setSize(o.width,o.height),s.initialize(a,l,c),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,s):n.push(s),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(s of n)s.setDepthTexture(f)}else s.setDepthTexture(this.depthTexture)}removePass(s){const e=this.passes,n=e.indexOf(s);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const l=(f,p)=>f||p.needsDepthTexture;e.reduce(l,!1)||(s.getDepthTexture()===this.depthTexture&&s.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(s.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),this.passes=[])}render(s){const e=this.renderer,n=this.copyPass;let a=this.inputBuffer,o=this.outputBuffer,l=!1,c,f,p;s===void 0&&(this.timer.update(),s=this.timer.getDelta());for(const d of this.passes)d.enabled&&(d.render(e,a,o,s,l),d.needsSwap&&(l&&(n.renderToScreen=d.renderToScreen,c=e.getContext(),f=e.state.buffers.stencil,f.setFunc(c.NOTEQUAL,1,4294967295),n.render(e,a,o,s,l),f.setFunc(c.EQUAL,1,4294967295)),p=a,a=o,o=p),d instanceof b2?l=!0:d instanceof S2&&(l=!1))}setSize(s,e,n){const a=this.renderer,o=a.getSize(new _t);(s===void 0||e===void 0)&&(s=o.width,e=o.height),(o.width!==s||o.height!==e)&&a.setSize(s,e,n);const l=a.getDrawingBufferSize(new _t);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const c of this.passes)c.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const s of this.passes)s.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Hr.fullscreenGeometry.dispose()}},Ts={NONE:0,DEPTH:1,CONVOLUTION:2},Lt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},A2=class{constructor(){this.shaderParts=new Map([[Lt.FRAGMENT_HEAD,null],[Lt.FRAGMENT_MAIN_UV,null],[Lt.FRAGMENT_MAIN_IMAGE,null],[Lt.VERTEX_HEAD,null],[Lt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ts.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Pr}},mp=!1,Zx=class{constructor(s=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(s),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Ei:n=this.materialsFlatShadedDoubleSide;break;case Nn:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Ei:n=this.materialsDoubleSide;break;case Nn:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(s){if(!(s instanceof Yi))return s.clone();const e=s.uniforms,n=new Map;for(const o in e){const l=e[o].value;l.isRenderTargetTexture&&(e[o].value=null,n.set(o,l))}const a=s.clone();for(const o of n)e[o[0]].value=o[1],a.uniforms[o[0]].value=o[1];return a}setMaterial(s){if(this.disposeMaterials(),this.material=s,s!==null){const e=this.materials=[this.cloneMaterial(s),this.cloneMaterial(s),this.cloneMaterial(s)];for(const n of e)n.uniforms=Object.assign({},s.uniforms),n.side=Ya;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},s.uniforms),a.side=Nn,a}),this.materialsDoubleSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},s.uniforms),a.side=Ei,a}),this.materialsFlatShaded=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},s.uniforms),a.flatShading=!0,a}),this.materialsFlatShadedBackSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},s.uniforms),a.flatShading=!0,a.side=Nn,a}),this.materialsFlatShadedDoubleSide=e.map(n=>{const a=this.cloneMaterial(n);return a.uniforms=Object.assign({},s.uniforms),a.flatShading=!0,a.side=Ei,a})}}render(s,e,n){const a=s.shadowMap.enabled;if(s.shadowMap.enabled=!1,mp){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),s.render(e,n);for(const l of o)l[0].material=l[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,s.render(e,n),e.overrideMaterial=o}s.shadowMap.enabled=a}disposeMaterials(){if(this.material!==null){const s=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of s)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return mp}static set workaroundEnabled(s){mp=s}},Tt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},R2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",C2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",w2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",D2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",U2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",N2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",L2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",O2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",P2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",z2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",B2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",I2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",F2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",H2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",G2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",V2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",k2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",X2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",q2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",W2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",Y2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",j2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",Z2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",K2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",Q2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",J2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",$2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",ew="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",tw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",nw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",iw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",aw="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",rw=new Map([[Tt.ADD,R2],[Tt.ALPHA,C2],[Tt.AVERAGE,w2],[Tt.COLOR,D2],[Tt.COLOR_BURN,U2],[Tt.COLOR_DODGE,N2],[Tt.DARKEN,L2],[Tt.DIFFERENCE,O2],[Tt.DIVIDE,P2],[Tt.DST,null],[Tt.EXCLUSION,z2],[Tt.HARD_LIGHT,B2],[Tt.HARD_MIX,I2],[Tt.HUE,F2],[Tt.INVERT,H2],[Tt.INVERT_RGB,G2],[Tt.LIGHTEN,V2],[Tt.LINEAR_BURN,k2],[Tt.LINEAR_DODGE,X2],[Tt.LINEAR_LIGHT,q2],[Tt.LUMINOSITY,W2],[Tt.MULTIPLY,Y2],[Tt.NEGATION,j2],[Tt.NORMAL,Z2],[Tt.OVERLAY,K2],[Tt.PIN_LIGHT,Q2],[Tt.REFLECT,J2],[Tt.SATURATION,$2],[Tt.SCREEN,ew],[Tt.SOFT_LIGHT,tw],[Tt.SRC,nw],[Tt.SUBTRACT,iw],[Tt.VIVID_LIGHT,aw]]),sw=class extends Ir{constructor(s,e=1){super(),this._blendFunction=s,this.opacity=new bn(e)}getOpacity(){return this.opacity.value}setOpacity(s){this.opacity.value=s}get blendFunction(){return this._blendFunction}set blendFunction(s){this._blendFunction=s,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(s){this.blendFunction=s}getShaderCode(){return rw.get(this.blendFunction)}},YS=class extends Ir{constructor(s,e,{attributes:n=Ts.NONE,blendFunction:a=Tt.NORMAL,defines:o=new Map,uniforms:l=new Map,extensions:c=null,vertexShader:f=null}={}){super(),this.name=s,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=f,this.defines=o,this.uniforms=l,this.extensions=c,this.blendMode=new sw(a),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Pr,this._outputColorSpace=da}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(s){this._inputColorSpace=s,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(s){this._outputColorSpace=s,this.setChanged()}set mainScene(s){}set mainCamera(s){}getName(){return this.name}setRenderer(s){this.renderer=s}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(s){this.attributes=s,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(s){this.fragmentShader=s,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(s){this.vertexShader=s,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(s,e=hu){}update(s,e,n){}setSize(s,e){}initialize(s,e,n){}dispose(){for(const s of Object.keys(this)){const e=this[s];(e instanceof aa||e instanceof Zo||e instanceof Hn||e instanceof Hr)&&this[s].dispose()}}},Kx=class extends Hr{constructor(s,e,n=null){super("RenderPass",s,e),this.needsSwap=!1,this.clearPass=new WS,this.overrideMaterialManager=n===null?null:new Zx(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(s){this.scene=s}set mainCamera(s){this.camera=s}get renderToScreen(){return super.renderToScreen}set renderToScreen(s){super.renderToScreen=s,this.clearPass.renderToScreen=s}get overrideMaterial(){const s=this.overrideMaterialManager;return s!==null?s.material:null}set overrideMaterial(s){const e=this.overrideMaterialManager;s!==null?e!==null?e.setMaterial(s):this.overrideMaterialManager=new Zx(s):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(s){this.overrideMaterial=s}get clear(){return this.clearPass.enabled}set clear(s){this.clearPass.enabled=s}getSelection(){return this.selection}setSelection(s){this.selection=s}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(s){this.ignoreBackground=s}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(s){this.skipShadowMapUpdate=s}getClearPass(){return this.clearPass}render(s,e,n,a,o){const l=this.scene,c=this.camera,f=this.selection,p=c.layers.mask,d=l.background,_=s.shadowMap.autoUpdate,g=this.renderToScreen?null:e;f!==null&&c.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(s.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(s,e),s.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(s,l,c):s.render(l,c),c.layers.mask=p,l.background=d,s.shadowMap.autoUpdate=_}},ow=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,lw="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",uw=class extends Yi{constructor(s,e,n,a,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:xf.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new bn(null),depthBuffer:new bn(null),resolution:new bn(new _t),texelSize:new bn(new _t),cameraNear:new bn(.3),cameraFar:new bn(1e3),aspect:new bn(1),time:new bn(0)},blending:ga,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),s&&this.setShaderParts(s),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(a)}set inputBuffer(s){this.uniforms.inputBuffer.value=s}setInputBuffer(s){this.uniforms.inputBuffer.value=s}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(s){this.uniforms.depthBuffer.value=s}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(s){this.defines.DEPTH_PACKING=s.toFixed(0),this.needsUpdate=!0}setDepthBuffer(s,e=hu){this.depthBuffer=s,this.depthPacking=e}setShaderData(s){this.setShaderParts(s.shaderParts),this.setDefines(s.defines),this.setUniforms(s.uniforms),this.setExtensions(s.extensions)}setShaderParts(s){return this.fragmentShader=ow.replace(Lt.FRAGMENT_HEAD,s.get(Lt.FRAGMENT_HEAD)||"").replace(Lt.FRAGMENT_MAIN_UV,s.get(Lt.FRAGMENT_MAIN_UV)||"").replace(Lt.FRAGMENT_MAIN_IMAGE,s.get(Lt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=lw.replace(Lt.VERTEX_HEAD,s.get(Lt.VERTEX_HEAD)||"").replace(Lt.VERTEX_MAIN_SUPPORT,s.get(Lt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(s){for(const e of s.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(s){for(const e of s.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(s){this.extensions={};for(const e of s)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(s){this.encodeOutput!==s&&(s?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(s){return this.encodeOutput}setOutputEncodingEnabled(s){this.encodeOutput=s}get time(){return this.uniforms.time.value}set time(s){this.uniforms.time.value=s}setDeltaTime(s){this.uniforms.time.value+=s}adoptCameraSettings(s){this.copyCameraSettings(s)}copyCameraSettings(s){s&&(this.uniforms.cameraNear.value=s.near,this.uniforms.cameraFar.value=s.far,s instanceof Vi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(s,e){const n=this.uniforms;n.resolution.value.set(s,e),n.texelSize.value.set(1/s,1/e),n.aspect.value=s/e}static get Section(){return Lt}};function Qx(s,e,n){for(const a of e){const o="$1"+s+a.charAt(0).toUpperCase()+a.slice(1),l=new RegExp("([^\\.])(\\b"+a+"\\b)","g");for(const c of n.entries())c[1]!==null&&n.set(c[0],c[1].replace(l,o))}}function cw(s,e,n){let a=e.getFragmentShader(),o=e.getVertexShader();const l=a!==void 0&&/mainImage/.test(a),c=a!==void 0&&/mainUv/.test(a);if(n.attributes|=e.getAttributes(),a===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(c&&(n.attributes&Ts.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!c)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=n.shaderParts;let d=p.get(Lt.FRAGMENT_HEAD)||"",_=p.get(Lt.FRAGMENT_MAIN_UV)||"",g=p.get(Lt.FRAGMENT_MAIN_IMAGE)||"",v=p.get(Lt.VERTEX_HEAD)||"",S=p.get(Lt.VERTEX_MAIN_SUPPORT)||"";const T=new Set,M=new Set;if(c&&(_+=`	${s}MainUv(UV);
`,n.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const D=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);S+=`	${s}MainSupport(`,S+=D?`vUv);
`:`);
`;for(const w of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const R of w[1].split(/\s*,\s*/))n.varyings.add(R),T.add(R),M.add(R);for(const w of o.matchAll(f))M.add(w[1])}for(const D of a.matchAll(f))M.add(D[1]);for(const D of e.defines.keys())M.add(D.replace(/\([\w\s,]*\)/g,""));for(const D of e.uniforms.keys())M.add(D);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((D,w)=>n.uniforms.set(s+w.charAt(0).toUpperCase()+w.slice(1),D)),e.defines.forEach((D,w)=>n.defines.set(s+w.charAt(0).toUpperCase()+w.slice(1),D));const y=new Map([["fragment",a],["vertex",o]]);Qx(s,M,n.defines),Qx(s,M,y),a=y.get("fragment"),o=y.get("vertex");const x=e.blendMode;if(n.blendModes.set(x.blendFunction,x),l){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(g+=e.inputColorSpace===dn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==da?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const D=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${s}MainImage(color0, UV, `,(n.attributes&Ts.DEPTH)!==0&&D.test(a)&&(g+="depth, ",n.readDepth=!0),g+=`color1);
	`;const w=s+"BlendOpacity";n.uniforms.set(w,x.opacity),g+=`color0 = blend${x.blendFunction}(color0, color1, ${w});

	`,d+=`uniform float ${w};

`}if(d+=a+`
`,o!==null&&(v+=o+`
`),p.set(Lt.FRAGMENT_HEAD,d),p.set(Lt.FRAGMENT_MAIN_UV,_),p.set(Lt.FRAGMENT_MAIN_IMAGE,g),p.set(Lt.VERTEX_HEAD,v),p.set(Lt.VERTEX_MAIN_SUPPORT,S),e.extensions!==null)for(const D of e.extensions)n.extensions.add(D)}}var Jx=class extends Hr{constructor(s,...e){super("EffectPass"),this.fullscreenMaterial=new uw(null,null,null,s),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(s){for(const e of this.effects)e.mainScene=s}set mainCamera(s){this.fullscreenMaterial.copyCameraSettings(s);for(const e of this.effects)e.mainCamera=s}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(s){this.fullscreenMaterial.encodeOutput=s}get dithering(){return this.fullscreenMaterial.dithering}set dithering(s){const e=this.fullscreenMaterial;e.dithering=s,e.needsUpdate=!0}setEffects(s){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=s.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const s=new A2;let e=0;for(const c of this.effects)if(c.blendMode.blendFunction===Tt.DST)s.attributes|=c.getAttributes()&Ts.DEPTH;else{if((s.attributes&c.getAttributes()&Ts.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);cw("e"+e++,c,s)}let n=s.shaderParts.get(Lt.FRAGMENT_HEAD),a=s.shaderParts.get(Lt.FRAGMENT_MAIN_IMAGE),o=s.shaderParts.get(Lt.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const c of s.blendModes.values())n+=c.getShaderCode().replace(l,`blend${c.blendFunction}`)+`
`;(s.attributes&Ts.DEPTH)!==0?(s.readDepth&&(a=`float depth = readDepth(UV);

	`+a),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,s.colorSpace===dn&&(a+=`color0 = sRGBToLinear(color0);
	`),s.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,s.defines.set("UV","transformedUv")):s.defines.set("UV","vUv"),s.shaderParts.set(Lt.FRAGMENT_HEAD,n),s.shaderParts.set(Lt.FRAGMENT_MAIN_IMAGE,a),s.shaderParts.set(Lt.FRAGMENT_MAIN_UV,o);for(const[c,f]of s.shaderParts)f!==null&&s.shaderParts.set(c,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(s)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(s,e=hu){this.fullscreenMaterial.depthBuffer=s,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(s,e)}render(s,e,n,a,o){for(const l of this.effects)l.update(s,e,a);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=a*this.timeScale,s.setRenderTarget(this.renderToScreen?null:n),s.render(this.scene,this.camera)}}setSize(s,e){this.fullscreenMaterial.setSize(s,e);for(const n of this.effects)n.setSize(s,e)}initialize(s,e,n){this.renderer=s;for(const a of this.effects)a.initialize(s,e,n);this.updateMaterial(),n!==void 0&&n!==Ci&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const s of this.effects)s.removeEventListener("change",this.listener),s.dispose()}handleEvent(s){switch(s.type){case"change":this.recompile();break}}};const fw=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);const a=new Hn(e);a.minFilter=Yn,a.magFilter=Yn,a.generateMipmaps=!1;const o=[];let l=null;const c=64;let f=.1*64;const p=1/c,d=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},_=S=>{const T={x:S.x*64,y:(1-S.y)*64};let M=1;const y=R=>Math.sin(R*Math.PI/2),x=R=>-R*(R-2);S.age<c*.3?M=y(S.age/(c*.3)):M=x(1-(S.age-c*.3)/(c*.7))||0,M*=S.force;const D=`${(S.vx+1)/2*255}, ${(S.vy+1)/2*255}, ${M*255}`,w=320;n.shadowOffsetX=w,n.shadowOffsetY=w,n.shadowBlur=f,n.shadowColor=`rgba(${D},${.22*M})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(T.x-w,T.y-w,f,0,Math.PI*2),n.fill()};return{canvas:e,texture:a,addTouch:S=>{let T=0,M=0,y=0;if(l){const x=S.x-l.x,D=S.y-l.y;if(x===0&&D===0)return;const w=x*x+D*D,R=Math.sqrt(w);M=x/(R||1),y=D/(R||1),T=Math.min(w*1e4,1)}l={x:S.x,y:S.y},o.push({x:S.x,y:S.y,age:0,force:T,vx:M,vy:y})},update:()=>{d();for(let S=o.length-1;S>=0;S--){const T=o[S],M=T.force*p*(1-T.age/c);T.x+=T.vx*M,T.y+=T.vy*M,T.age++,T.age>c&&o.splice(S,1)}for(let S=0;S<o.length;S++)_(o[S]);a.needsUpdate=!0},set radiusScale(S){f=.1*64*S},get radiusScale(){return f/(.1*64)},size:64}},hw=(s,e)=>{const n=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new YS("LiquidEffect",n,{uniforms:new Map([["uTexture",new bn(s)],["uStrength",new bn(e?.strength??.025)],["uTime",new bn(0)],["uFreq",new bn(e?.freq??4.5)]])})},$x={square:0,circle:1,triangle:2,diamond:3},dw=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,pw=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,_p=10,Qc=({variant:s="square",pixelSize:e=3,color:n="#B19EEF",className:a,style:o,antialias:l=!0,patternScale:c=2,patternDensity:f=1,liquid:p=!1,liquidStrength:d=.1,liquidRadius:_=1,pixelSizeJitter:g=0,enableRipples:v=!0,rippleIntensityScale:S=1,rippleThickness:T=.1,rippleSpeed:M=.3,liquidWobbleSpeed:y=4.5,autoPauseOffscreen:x=!0,speed:D=.5,transparent:w=!0,edgeFade:R=.5,noiseAmount:O=0})=>{const P=ct.useRef(null),L=ct.useRef({visible:!0}),F=ct.useRef(D),b=ct.useRef(null),N=ct.useRef(null);return ct.useEffect(()=>{const H=P.current;if(!H)return;F.current=D;const j=["antialias","liquid","noiseAmount"],J={antialias:l,liquid:p,noiseAmount:O};let oe=!1;if(!b.current)oe=!0;else if(N.current){for(const X of j)if(N.current[X]!==J[X]){oe=!0;break}}if(oe){if(b.current){const Re=b.current;Re.resizeObserver?.disconnect(),cancelAnimationFrame(Re.raf),Re.quad?.geometry.dispose(),Re.material.dispose(),Re.composer?.dispose(),Re.renderer.dispose(),Re.renderer.domElement.parentElement===H&&H.removeChild(Re.renderer.domElement),b.current=null}const X=document.createElement("canvas"),z=X.getContext("webgl2",{antialias:l,alpha:!0});if(!z)return;const G=new _2({canvas:X,context:z,antialias:l,alpha:!0});G.domElement.style.width="100%",G.domElement.style.height="100%",G.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.appendChild(G.domElement);const q={uResolution:{value:new _t(0,0)},uTime:{value:0},uColor:{value:new Bt(n)},uClickPos:{value:Array.from({length:_p},()=>new _t(-1,-1))},uClickTimes:{value:new Float32Array(_p)},uShapeType:{value:$x[s]??0},uPixelSize:{value:e*G.getPixelRatio()},uScale:{value:c},uDensity:{value:f},uPixelJitter:{value:g},uEnableRipples:{value:v?1:0},uRippleSpeed:{value:M},uRippleThickness:{value:T},uRippleIntensity:{value:S},uEdgeFade:{value:R}},ce=new pm,_e=new HS(-1,1,1,-1,0,1),B=new Yi({vertexShader:dw,fragmentShader:pw,uniforms:q,transparent:!0,glslVersion:hm,depthTest:!1,depthWrite:!1}),$=new gu(2,2),ve=new na($,B);ce.add(ve);const Me=new L1,De=()=>{const Re=H.clientWidth||1,rt=H.clientHeight||1;G.setSize(Re,rt,!1),q.uResolution.value.set(G.domElement.width,G.domElement.height),b.current?.composer&&b.current.composer.setSize(G.domElement.width,G.domElement.height),q.uPixelSize.value=e*G.getPixelRatio()};De();const ie=new ResizeObserver(De);ie.observe(H);const Le=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Re=new Uint32Array(1);return window.crypto.getRandomValues(Re),Re[0]/4294967295}return Math.random()})()*1e3;let Ue,He,st;if(p){He=fw(),He.radiusScale=_,Ue=new jx(G);const Re=new Kx(ce,_e);st=hw(He.texture,{strength:d,freq:y});const rt=new Jx(_e,st);rt.renderToScreen=!0,Ue.addPass(Re),Ue.addPass(rt)}if(O>0){Ue||(Ue=new jx(G),Ue.addPass(new Kx(ce,_e)));const Re=new YS("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new bn(0)],["uAmount",new bn(O)]])}),rt=new Jx(_e,Re);rt.renderToScreen=!0,Ue&&Ue.passes.length>0&&Ue.passes.forEach(Be=>Be.renderToScreen=!1),Ue.addPass(rt)}Ue&&Ue.setSize(G.domElement.width,G.domElement.height);const nn=Re=>{const rt=G.domElement.getBoundingClientRect(),Be=G.domElement.width/rt.width,et=G.domElement.height/rt.height,Zt=(Re.clientX-rt.left)*Be,Qt=(rt.height-(Re.clientY-rt.top))*et;return{fx:Zt,fy:Qt,w:G.domElement.width,h:G.domElement.height}},k=Re=>{const{fx:rt,fy:Be}=nn(Re),et=b.current?.clickIx??0;q.uClickPos.value[et].set(rt,Be),q.uClickTimes.value[et]=q.uTime.value,b.current&&(b.current.clickIx=(et+1)%_p)},Rt=Re=>{if(!He)return;const{fx:rt,fy:Be,w:et,h:Zt}=nn(Re);He.addTouch({x:rt/et,y:Be/Zt})};G.domElement.addEventListener("pointerdown",k,{passive:!0}),G.domElement.addEventListener("pointermove",Rt,{passive:!0});let nt=0;const $e=()=>{if(x&&!L.current.visible){nt=requestAnimationFrame($e);return}q.uTime.value=Le+Me.getElapsedTime()*F.current,st&&(st.uniforms.get("uTime").value=q.uTime.value),Ue?(He&&He.update(),Ue.passes.forEach(Re=>{const rt=Re.effects;rt&&rt.forEach(Be=>{const et=Be.uniforms?.get("uTime");et&&(et.value=q.uTime.value)})}),Ue.render()):G.render(ce,_e),nt=requestAnimationFrame($e)};nt=requestAnimationFrame($e),b.current={renderer:G,scene:ce,camera:_e,material:B,clock:Me,clickIx:0,uniforms:q,resizeObserver:ie,raf:nt,quad:ve,timeOffset:Le,composer:Ue,touch:He,liquidEffect:st}}else{const X=b.current;if(X.uniforms.uShapeType.value=$x[s]??0,X.uniforms.uPixelSize.value=e*X.renderer.getPixelRatio(),X.uniforms.uColor.value.set(n),X.uniforms.uScale.value=c,X.uniforms.uDensity.value=f,X.uniforms.uPixelJitter.value=g,X.uniforms.uEnableRipples.value=v?1:0,X.uniforms.uRippleIntensity.value=S,X.uniforms.uRippleThickness.value=T,X.uniforms.uRippleSpeed.value=M,X.uniforms.uEdgeFade.value=R,w?X.renderer.setClearAlpha(0):X.renderer.setClearColor(0,1),X.liquidEffect){const z=X.liquidEffect.uniforms.get("uStrength");z&&(z.value=d);const G=X.liquidEffect.uniforms.get("uFreq");G&&(G.value=y)}X.touch&&(X.touch.radiusScale=_)}return N.current=J,()=>{if(b.current&&oe||!b.current)return;const X=b.current;X.resizeObserver?.disconnect(),cancelAnimationFrame(X.raf),X.quad?.geometry.dispose(),X.material.dispose(),X.composer?.dispose(),X.renderer.dispose(),X.renderer.domElement.parentElement===H&&H.removeChild(X.renderer.domElement),b.current=null}},[l,p,O,e,c,f,v,S,T,M,g,R,w,d,_,y,x,s,n,D]),Te.jsx("div",{ref:P,className:`w-full h-full relative overflow-hidden ${a??""}`,style:o,"aria-label":"PixelBlast interactive background"})};function ka(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function jS(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ko={duration:.5,overwrite:!1,delay:0},qm,Gn,tn,ki=1e8,jt=1/ki,gm=Math.PI*2,mw=gm/4,_w=0,ZS=Math.sqrt,gw=Math.cos,vw=Math.sin,Ln=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},Za=function(e){return typeof e=="number"},Wm=function(e){return typeof e>"u"},va=function(e){return typeof e=="object"},oi=function(e){return e!==!1},Ym=function(){return typeof window<"u"},Jc=function(e){return ln(e)||Ln(e)},KS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,vm=/(?:-?\.?\d|\.)+/gi,QS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Do=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,JS=/[+-]=-?[.\d]+/,$S=/[^,'"\[\]\s]+/gi,xw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,an,fa,xm,jm,wi={},hf={},ey,ty=function(e){return(hf=Xo(e,wi))&&fi},Zm=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},au=function(e,n){return!n&&console.warn(e)},ny=function(e,n){return e&&(wi[e]=n)&&hf&&(hf[e]=n)||wi},ru=function(){return 0},Sw={suppressEvents:!0,isStart:!0,kill:!1},rf={suppressEvents:!0,kill:!1},yw={suppressEvents:!0},Km={},Nr=[],Sm={},iy,Mi={},vp={},eS=30,sf=[],Qm="",Jm=function(e){var n=e[0],a,o;if(va(n)||ln(n)||(e=[e]),!(a=(n._gsap||{}).harness)){for(o=sf.length;o--&&!sf[o].targetTest(n););a=sf[o]}for(o=e.length;o--;)e[o]&&(e[o]._gsap||(e[o]._gsap=new Ry(e[o],a)))||e.splice(o,1);return e},bs=function(e){return e._gsap||Jm(Xi(e))[0]._gsap},ay=function(e,n,a){return(a=e[n])&&ln(a)?e[n]():Wm(a)&&e.getAttribute&&e.getAttribute(n)||a},li=function(e,n){return(e=e.split(",")).forEach(n)||e},hn=function(e){return Math.round(e*1e5)/1e5||0},Mn=function(e){return Math.round(e*1e7)/1e7||0},Oo=function(e,n){var a=n.charAt(0),o=parseFloat(n.substr(2));return e=parseFloat(e),a==="+"?e+o:a==="-"?e-o:a==="*"?e*o:e/o},Mw=function(e,n){for(var a=n.length,o=0;e.indexOf(n[o])<0&&++o<a;);return o<a},df=function(){var e=Nr.length,n=Nr.slice(0),a,o;for(Sm={},Nr.length=0,a=0;a<e;a++)o=n[a],o&&o._lazy&&(o.render(o._lazy[0],o._lazy[1],!0)._lazy=0)},$m=function(e){return!!(e._initted||e._startAt||e.add)},ry=function(e,n,a,o){Nr.length&&!Gn&&df(),e.render(n,a,!!(Gn&&n<0&&$m(e))),Nr.length&&!Gn&&df()},sy=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match($S).length<2?n:Ln(e)?e.trim():e},oy=function(e){return e},Di=function(e,n){for(var a in n)a in e||(e[a]=n[a]);return e},Ew=function(e){return function(n,a){for(var o in a)o in n||o==="duration"&&e||o==="ease"||(n[o]=a[o])}},Xo=function(e,n){for(var a in n)e[a]=n[a];return e},tS=function s(e,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=va(n[a])?s(e[a]||(e[a]={}),n[a]):n[a]);return e},pf=function(e,n){var a={},o;for(o in e)o in n||(a[o]=e[o]);return a},Jl=function(e){var n=e.parent||an,a=e.keyframes?Ew(jn(e.keyframes)):Di;if(oi(e.inherit))for(;n;)a(e,n.vars.defaults),n=n.parent||n._dp;return e},Tw=function(e,n){for(var a=e.length,o=a===n.length;o&&a--&&e[a]===n[a];);return a<0},ly=function(e,n,a,o,l){var c=e[o],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=e[a],e[a]=n),n._next?n._next._prev=n:e[o]=n,n._prev=c,n.parent=n._dp=e,n},Mf=function(e,n,a,o){a===void 0&&(a="_first"),o===void 0&&(o="_last");var l=n._prev,c=n._next;l?l._next=c:e[a]===n&&(e[a]=c),c?c._prev=l:e[o]===n&&(e[o]=l),n._next=n._prev=n.parent=null},zr=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},As=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},bw=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},ym=function(e,n,a,o){return e._startAt&&(Gn?e._startAt.revert(rf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,o))},Aw=function s(e){return!e||e._ts&&s(e.parent)},nS=function(e){return e._repeat?qo(e._tTime,e=e.duration()+e._rDelay)*e:0},qo=function(e,n){var a=Math.floor(e=Mn(e/n));return e&&a===e?a-1:a},mf=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Ef=function(e){return e._end=Mn(e._start+(e._tDur/Math.abs(e._ts||e._rts||jt)||0))},Tf=function(e,n){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=Mn(a._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Ef(e),a._dirty||As(a,e)),e},uy=function(e,n){var a;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(a=mf(e.rawTime(),n),(!n._dur||vu(0,n.totalDuration(),a)-n._tTime>jt)&&n.render(a,!0)),As(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-jt}},pa=function(e,n,a,o){return n.parent&&zr(n),n._start=Mn((Za(a)?a:a||e!==an?Gi(e,a,n):e._time)+n._delay),n._end=Mn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),ly(e,n,"_first","_last",e._sort?"_start":0),Mm(n)||(e._recent=n),o||uy(e,n),e._ts<0&&Tf(e,e._tTime),e},cy=function(e,n){return(wi.ScrollTrigger||Zm("scrollTrigger",n))&&wi.ScrollTrigger.create(n,e)},fy=function(e,n,a,o,l){if(t_(e,n,l),!e._initted)return 1;if(!a&&e._pt&&!Gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&iy!==Ti.frame)return Nr.push(e),e._lazy=[l,o],1},Rw=function s(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||s(n))},Mm=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},Cw=function(e,n,a,o){var l=e.ratio,c=n<0||!n&&(!e._start&&Rw(e)&&!(!e._initted&&Mm(e))||(e._ts<0||e._dp._ts<0)&&!Mm(e))?0:1,f=e._rDelay,p=0,d,_,g;if(f&&e._repeat&&(p=vu(0,e._tDur,n),_=qo(p,f),e._yoyo&&_&1&&(c=1-c),_!==qo(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||Gn||o||e._zTime===jt||!n&&e._zTime){if(!e._initted&&fy(e,n,o,a,p))return;for(g=e._zTime,e._zTime=n||(a?jt:0),a||(a=n&&!g),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=p,d=e._pt;d;)d.r(c,d.d),d=d._next;n<0&&ym(e,n,a,!0),e._onUpdate&&!a&&bi(e,"onUpdate"),p&&e._repeat&&!a&&e.parent&&bi(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===c&&(c&&zr(e,1),!a&&!Gn&&(bi(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},ww=function(e,n,a){var o;if(a>n)for(o=e._first;o&&o._start<=a;){if(o.data==="isPause"&&o._start>n)return o;o=o._next}else for(o=e._last;o&&o._start>=a;){if(o.data==="isPause"&&o._start<n)return o;o=o._prev}},Wo=function(e,n,a,o){var l=e._repeat,c=Mn(n)||0,f=e._tTime/e._tDur;return f&&!o&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:Mn(c*(l+1)+e._rDelay*l):c,f>0&&!o&&Tf(e,e._tTime=e._tDur*f),e.parent&&Ef(e),a||As(e.parent,e),e},iS=function(e){return e instanceof $n?As(e):Wo(e,e._dur)},Dw={_start:0,endTime:ru,totalDuration:ru},Gi=function s(e,n,a){var o=e.labels,l=e._recent||Dw,c=e.duration()>=ki?l.endTime(!1):e._dur,f,p,d;return Ln(n)&&(isNaN(n)||n in o)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in o||(o[n]=c),o[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(jn(a)?a[0]:a).totalDuration()),f>1?s(e,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},$l=function(e,n,a){var o=Za(n[1]),l=(o?2:1)+(e<2?0:1),c=n[l],f,p;if(o&&(c.duration=n[1]),c.parent=a,e){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=oi(p.vars.inherit)&&p.parent;c.immediateRender=oi(f.immediateRender),e<2?c.runBackwards=1:c.startAt=n[l-1]}return new yn(n[0],c,n[l+1])},Gr=function(e,n){return e||e===0?n(e):n},vu=function(e,n,a){return a<e?e:a>n?n:a},Wn=function(e,n){return!Ln(e)||!(n=xw.exec(e))?"":n[1]},Uw=function(e,n,a){return Gr(a,function(o){return vu(e,n,o)})},Em=[].slice,hy=function(e,n){return e&&va(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&va(e[0]))&&!e.nodeType&&e!==fa},Nw=function(e,n,a){return a===void 0&&(a=[]),e.forEach(function(o){var l;return Ln(o)&&!n||hy(o,1)?(l=a).push.apply(l,Xi(o)):a.push(o)})||a},Xi=function(e,n,a){return tn&&!n&&tn.selector?tn.selector(e):Ln(e)&&!a&&(xm||!Yo())?Em.call((n||jm).querySelectorAll(e),0):jn(e)?Nw(e,a):hy(e)?Em.call(e,0):e?[e]:[]},Tm=function(e){return e=Xi(e)[0]||au("Invalid scope")||{},function(n){var a=e.current||e.nativeElement||e;return Xi(n,a.querySelectorAll?a:a===e?au("Invalid scope")||jm.createElement("div"):e)}},dy=function(e){return e.sort(function(){return .5-Math.random()})},py=function(e){if(ln(e))return e;var n=va(e)?e:{each:e},a=Rs(n.ease),o=n.from||0,l=parseFloat(n.base)||0,c={},f=o>0&&o<1,p=isNaN(o)||f,d=n.axis,_=o,g=o;return Ln(o)?_=g={center:.5,edges:.5,end:1}[o]||0:!f&&p&&(_=o[0],g=o[1]),function(v,S,T){var M=(T||n).length,y=c[M],x,D,w,R,O,P,L,F,b;if(!y){if(b=n.grid==="auto"?0:(n.grid||[1,ki])[1],!b){for(L=-ki;L<(L=T[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(y=c[M]=[],x=p?Math.min(b,M)*_-.5:o%b,D=b===ki?0:p?M*g/b-.5:o/b|0,L=0,F=ki,P=0;P<M;P++)w=P%b-x,R=D-(P/b|0),y[P]=O=d?Math.abs(d==="y"?R:w):ZS(w*w+R*R),O>L&&(L=O),O<F&&(F=O);o==="random"&&dy(y),y.max=L-F,y.min=F,y.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:d?d==="y"?M/b:b:Math.max(b,M/b))||0)*(o==="edges"?-1:1),y.b=M<0?l-M:l,y.u=Wn(n.amount||n.each)||0,a=a&&M<0?Ty(a):a}return M=(y[v]-y.min)/y.max||0,Mn(y.b+(a?a(M):M)*y.v)+y.u}},bm=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var o=Mn(Math.round(parseFloat(a)/e)*e*n);return(o-o%1)/n+(Za(a)?0:Wn(a))}},my=function(e,n){var a=jn(e),o,l;return!a&&va(e)&&(o=a=e.radius||ki,e.values?(e=Xi(e.values),(l=!Za(e[0]))&&(o*=o)):e=bm(e.increment)),Gr(n,a?ln(e)?function(c){return l=e(c),Math.abs(l-c)<=o?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=ki,_=0,g=e.length,v,S;g--;)l?(v=e[g].x-f,S=e[g].y-p,v=v*v+S*S):v=Math.abs(e[g]-f),v<d&&(d=v,_=g);return _=!o||d<=o?e[_]:c,l||_===c||Za(c)?_:_+Wn(c)}:bm(e))},_y=function(e,n,a,o){return Gr(jn(e)?!n:a===!0?!!(a=0):!o,function(){return jn(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(o=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(n-e+a*.99))/a)*a*o)/o})},Lw=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(o){return n.reduce(function(l,c){return c(l)},o)}},Ow=function(e,n){return function(a){return e(parseFloat(a))+(n||Wn(a))}},Pw=function(e,n,a){return vy(e,n,0,1,a)},gy=function(e,n,a){return Gr(a,function(o){return e[~~n(o)]})},zw=function s(e,n,a){var o=n-e;return jn(e)?gy(e,s(0,e.length),n):Gr(a,function(l){return(o+(l-e)%o)%o+e})},Bw=function s(e,n,a){var o=n-e,l=o*2;return jn(e)?gy(e,s(0,e.length-1),n):Gr(a,function(c){return c=(l+(c-e)%l)%l||0,e+(c>o?l-c:c)})},su=function(e){for(var n=0,a="",o,l,c,f;~(o=e.indexOf("random(",n));)c=e.indexOf(")",o),f=e.charAt(o+7)==="[",l=e.substr(o+7,c-o-7).match(f?$S:vm),a+=e.substr(n,o-n)+_y(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return a+e.substr(n,e.length-n)},vy=function(e,n,a,o,l){var c=n-e,f=o-a;return Gr(l,function(p){return a+((p-e)/c*f||0)})},Iw=function s(e,n,a,o){var l=isNaN(e+n)?0:function(S){return(1-S)*e+S*n};if(!l){var c=Ln(e),f={},p,d,_,g,v;if(a===!0&&(o=1)&&(a=null),c)e={p:e},n={p:n};else if(jn(e)&&!jn(n)){for(_=[],g=e.length,v=g-2,d=1;d<g;d++)_.push(s(e[d-1],e[d]));g--,l=function(T){T*=g;var M=Math.min(v,~~T);return _[M](T-M)},a=n}else o||(e=Xo(jn(e)?[]:{},e));if(!_){for(p in n)e_.call(f,e,p,"get",n[p]);l=function(T){return a_(T,f)||(c?e.p:e)}}}return Gr(a,l)},aS=function(e,n,a){var o=e.labels,l=ki,c,f,p;for(c in o)f=o[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},bi=function(e,n,a){var o=e.vars,l=o[n],c=tn,f=e._ctx,p,d,_;if(l)return p=o[n+"Params"],d=o.callbackScope||e,a&&Nr.length&&df(),f&&(tn=f),_=p?l.apply(d,p):l.call(d),tn=c,_},Kl=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gn),e.progress()<1&&bi(e,"onInterrupt"),e},Uo,xy=[],Sy=function(e){if(e)if(e=!e.name&&e.default||e,Ym()||e.headless){var n=e.name,a=ln(e),o=n&&!a&&e.init?function(){this._props=[]}:e,l={init:ru,render:a_,add:e_,kill:eD,modifier:$w,rawVars:0},c={targetTest:0,get:0,getSetter:i_,aliases:{},register:0};if(Yo(),e!==o){if(Mi[n])return;Di(o,Di(pf(e,l),c)),Xo(o.prototype,Xo(l,pf(e,c))),Mi[o.prop=n]=o,e.targetTest&&(sf.push(o),Km[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}ny(n,o),e.register&&e.register(fi,o,ui)}else xy.push(e)},Yt=255,Ql={aqua:[0,Yt,Yt],lime:[0,Yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Yt],navy:[0,0,128],white:[Yt,Yt,Yt],olive:[128,128,0],yellow:[Yt,Yt,0],orange:[Yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Yt,0,0],pink:[Yt,192,203],cyan:[0,Yt,Yt],transparent:[Yt,Yt,Yt,0]},xp=function(e,n,a){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(a-n)*e*6:e<.5?a:e*3<2?n+(a-n)*(2/3-e)*6:n)*Yt+.5|0},yy=function(e,n,a){var o=e?Za(e)?[e>>16,e>>8&Yt,e&Yt]:0:Ql.black,l,c,f,p,d,_,g,v,S,T;if(!o){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ql[e])o=Ql[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return o=parseInt(e.substr(1,6),16),[o>>16,o>>8&Yt,o&Yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),o=[e>>16,e>>8&Yt,e&Yt]}else if(e.substr(0,3)==="hsl"){if(o=T=e.match(vm),!n)p=+o[0]%360/360,d=+o[1]/100,_=+o[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,o.length>3&&(o[3]*=1),o[0]=xp(p+1/3,l,c),o[1]=xp(p,l,c),o[2]=xp(p-1/3,l,c);else if(~e.indexOf("="))return o=e.match(QS),a&&o.length<4&&(o[3]=1),o}else o=e.match(vm)||Ql.transparent;o=o.map(Number)}return n&&!T&&(l=o[0]/Yt,c=o[1]/Yt,f=o[2]/Yt,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?p=d=0:(S=g-v,d=_>.5?S/(2-g-v):S/(g+v),p=g===l?(c-f)/S+(c<f?6:0):g===c?(f-l)/S+2:(l-c)/S+4,p*=60),o[0]=~~(p+.5),o[1]=~~(d*100+.5),o[2]=~~(_*100+.5)),a&&o.length<4&&(o[3]=1),o},My=function(e){var n=[],a=[],o=-1;return e.split(Lr).forEach(function(l){var c=l.match(Do)||[];n.push.apply(n,c),a.push(o+=c.length+1)}),n.c=a,n},rS=function(e,n,a){var o="",l=(e+o).match(Lr),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!l)return e;if(l=l.map(function(v){return(v=yy(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=My(e),p=a.c,p.join(o)!==_.c.join(o)))for(d=e.replace(Lr,"1").split(Do),g=d.length-1;f<g;f++)o+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=e.split(Lr),g=d.length-1;f<g;f++)o+=d[f]+l[f];return o+d[g]},Lr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ql)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),Fw=/hsl[a]?\(/,Ey=function(e){var n=e.join(" "),a;if(Lr.lastIndex=0,Lr.test(n))return a=Fw.test(n),e[1]=rS(e[1],a),e[0]=rS(e[0],a,My(e[1])),!0},ou,Ti=(function(){var s=Date.now,e=500,n=33,a=s(),o=a,l=1e3/240,c=l,f=[],p,d,_,g,v,S,T=function M(y){var x=s()-o,D=y===!0,w,R,O,P;if((x>e||x<0)&&(a+=x-n),o+=x,O=o-a,w=O-c,(w>0||D)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,c+=w+(w>=l?4:l-w),R=1),D||(p=d(M)),R)for(S=0;S<f.length;S++)f[S](O,v,P,y)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){ey&&(!xm&&Ym()&&(fa=xm=window,jm=fa.document||{},wi.gsap=fi,(fa.gsapVersions||(fa.gsapVersions=[])).push(fi.version),ty(hf||fa.GreenSockGlobals||!fa.gsap&&fa||{}),xy.forEach(Sy)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(y){return setTimeout(y,c-g.time*1e3+1|0)},ou=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),ou=0,d=ru},lagSmoothing:function(y,x){e=y||1/0,n=Math.min(x||33,e)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,x,D){var w=x?function(R,O,P,L){y(R,O,P,L),g.remove(w)}:y;return g.remove(y),f[D?"unshift":"push"](w),Yo(),w},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},g})(),Yo=function(){return!ou&&Ti.wake()},At={},Hw=/^[\d.\-M][\d.\-,\s]/,Gw=/["']/g,Vw=function(e){for(var n={},a=e.substr(1,e.length-3).split(":"),o=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[o]=isNaN(d)?d.replace(Gw,"").trim():+d,o=p.substr(f+1).trim();return n},kw=function(e){var n=e.indexOf("(")+1,a=e.indexOf(")"),o=e.indexOf("(",n);return e.substring(n,~o&&o<a?e.indexOf(")",a+1):a)},Xw=function(e){var n=(e+"").split("("),a=At[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[Vw(n[1])]:kw(e).split(",").map(sy)):At._CE&&Hw.test(e)?At._CE("",e):a},Ty=function(e){return function(n){return 1-e(1-n)}},by=function s(e,n){for(var a=e._first,o;a;)a instanceof $n?s(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?s(a.timeline,n):(o=a._ease,a._ease=a._yEase,a._yEase=o,a._yoyo=n)),a=a._next},Rs=function(e,n){return e&&(ln(e)?e:At[e]||Xw(e))||n},Ds=function(e,n,a,o){a===void 0&&(a=function(p){return 1-n(1-p)}),o===void 0&&(o=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:o},c;return li(e,function(f){At[f]=wi[f]=l,At[c=f.toLowerCase()]=a;for(var p in l)At[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=At[f+"."+p]=l[p]}),l},Ay=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Sp=function s(e,n,a){var o=n>=1?n:1,l=(a||(e?.3:.45))/(n<1?n:1),c=l/gm*(Math.asin(1/o)||0),f=function(_){return _===1?1:o*Math.pow(2,-10*_)*vw((_-c)*l)+1},p=e==="out"?f:e==="in"?function(d){return 1-f(1-d)}:Ay(f);return l=gm/l,p.config=function(d,_){return s(e,d,_)},p},yp=function s(e,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},o=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:Ay(a);return o.config=function(l){return s(e,l)},o};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var n=e<5?e+1:e;Ds(s+",Power"+(n-1),e?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});At.Linear.easeNone=At.none=At.Linear.easeIn;Ds("Elastic",Sp("in"),Sp("out"),Sp());(function(s,e){var n=1/e,a=2*n,o=2.5*n,l=function(f){return f<n?s*f*f:f<a?s*Math.pow(f-1.5/e,2)+.75:f<o?s*(f-=2.25/e)*f+.9375:s*Math.pow(f-2.625/e,2)+.984375};Ds("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ds("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ds("Circ",function(s){return-(ZS(1-s*s)-1)});Ds("Sine",function(s){return s===1?1:-gw(s*mw)+1});Ds("Back",yp("in"),yp("out"),yp());At.SteppedEase=At.steps=wi.SteppedEase={config:function(e,n){e===void 0&&(e=1);var a=1/e,o=e+(n?0:1),l=n?1:0,c=1-jt;return function(f){return((o*vu(0,c,f)|0)+l)*a}}};ko.ease=At["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Qm+=s+","+s+"Params,"});var Ry=function(e,n){this.id=_w++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:ay,this.set=n?n.getSetter:i_},lu=(function(){function s(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Wo(this,+n.duration,1,1),this.data=n.data,tn&&(this._ctx=tn,tn.data.push(this)),ou||Ti.wake()}var e=s.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,Wo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,o){if(Yo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Tf(this,a),!l._dp||l.parent||uy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&pa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!o||this._initted&&Math.abs(this._zTime)===jt||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),ry(this,a,o)),this},e.time=function(a,o){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+nS(this))%(this._dur+this._rDelay)||(a?this._dur:0),o):this._time},e.totalProgress=function(a,o){return arguments.length?this.totalTime(this.totalDuration()*a,o):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,o){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+nS(this),o):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,o){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,o):this._repeat?qo(this._tTime,l)+1:1},e.timeScale=function(a,o){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?mf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-jt?0:this._rts,this.totalTime(vu(-Math.abs(this._delay),this.totalDuration(),l),o!==!1),Ef(this),bw(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=a;var o=this.parent||this._dp;return o&&(o._sort||!this.parent)&&pa(o,this,a-this._delay),this}return this._start},e.endTime=function(a){return this._start+(oi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var o=this.parent||this._dp;return o?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mf(o.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=yw);var o=Gn;return Gn=a,$m(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Gn=o,this},e.globalTime=function(a){for(var o=this,l=arguments.length?a:o.rawTime();o;)l=o._start+l/(Math.abs(o._ts)||1),o=o._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,iS(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var o=this._time;return this._rDelay=a,iS(this),o?this.time(o):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,o){return this.totalTime(Gi(this,a),oi(o))},e.restart=function(a,o){return this.play().totalTime(a?-this._delay:0,oi(o)),this._dur||(this._zTime=-jt),this},e.play=function(a,o){return a!=null&&this.seek(a,o),this.reversed(!1).paused(!1)},e.reverse=function(a,o){return a!=null&&this.seek(a||this.totalDuration(),o),this.reversed(!0).paused(!1)},e.pause=function(a,o){return a!=null&&this.seek(a,o),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-jt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},e.isActive=function(){var a=this.parent||this._dp,o=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=o&&l<this.endTime(!0)-jt)},e.eventCallback=function(a,o,l){var c=this.vars;return arguments.length>1?(o?(c[a]=o,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=o)):delete c[a],this):c[a]},e.then=function(a){var o=this;return new Promise(function(l){var c=ln(a)?a:oy,f=function(){var d=o.then;o.then=null,ln(c)&&(c=c(o))&&(c.then||c===o)&&(o.then=d),l(c),o.then=d};o._initted&&o.totalProgress()===1&&o._ts>=0||!o._tTime&&o._ts<0?f():o._prom=f})},e.kill=function(){Kl(this)},s})();Di(lu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var $n=(function(s){jS(e,s);function e(a,o){var l;return a===void 0&&(a={}),l=s.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=oi(a.sortChildren),an&&pa(a.parent||an,ka(l),o),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&cy(ka(l),a.scrollTrigger),l}var n=e.prototype;return n.to=function(o,l,c){return $l(0,arguments,this),this},n.from=function(o,l,c){return $l(1,arguments,this),this},n.fromTo=function(o,l,c,f){return $l(2,arguments,this),this},n.set=function(o,l,c){return l.duration=0,l.parent=this,Jl(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new yn(o,l,Gi(this,c),1),this},n.call=function(o,l,c){return pa(this,yn.delayedCall(0,o,l),c)},n.staggerTo=function(o,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new yn(o,c,Gi(this,p)),this},n.staggerFrom=function(o,l,c,f,p,d,_){return c.runBackwards=1,Jl(c).immediateRender=oi(c.immediateRender),this.staggerTo(o,l,c,f,p,d,_)},n.staggerFromTo=function(o,l,c,f,p,d,_,g){return f.startAt=c,Jl(f).immediateRender=oi(f.immediateRender),this.staggerTo(o,l,f,p,d,_,g)},n.render=function(o,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=o<=0?0:Mn(o),g=this._zTime<0!=o<0&&(this._initted||!d),v,S,T,M,y,x,D,w,R,O,P,L;if(this!==an&&_>p&&o>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,o+=this._time-f),v=_,R=this._start,w=this._ts,x=!w,g&&(d||(f=this._zTime),(o||!l)&&(this._zTime=o)),this._repeat){if(P=this._yoyo,y=d+this._rDelay,this._repeat<-1&&o<0)return this.totalTime(y*100+o,l,c);if(v=Mn(_%y),_===p?(M=this._repeat,v=d):(O=Mn(_/y),M=~~O,M&&M===O&&(v=d,M--),v>d&&(v=d)),O=qo(this._tTime,y),!f&&this._tTime&&O!==M&&this._tTime-O*y-this._dur<=0&&(O=M),P&&M&1&&(v=d-v,L=1),M!==O&&!this._lock){var F=P&&O&1,b=F===(P&&M&1);if(M<O&&(F=!F),f=F?0:_%d?d:_,this._lock=1,this.render(f||(L?0:Mn(M*y)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,b&&(this._lock=2,f=F?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;by(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=ww(this,Mn(f),Mn(v)),D&&(_-=v-(v=D._start))),this._tTime=_,this._time=v,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=o,f=0),!f&&_&&!l&&!O&&(bi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&o>=0)for(S=this._first;S;){if(T=S._next,(S._act||v>=S._start)&&S._ts&&D!==S){if(S.parent!==this)return this.render(o,l,c);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,l,c),v!==this._time||!this._ts&&!x){D=0,T&&(_+=this._zTime=-jt);break}}S=T}else{S=this._last;for(var N=o<0?o:v;S;){if(T=S._prev,(S._act||N<=S._end)&&S._ts&&D!==S){if(S.parent!==this)return this.render(o,l,c);if(S.render(S._ts>0?(N-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(N-S._start)*S._ts,l,c||Gn&&$m(S)),v!==this._time||!this._ts&&!x){D=0,T&&(_+=this._zTime=N?-jt:jt);break}}S=T}}if(D&&!l&&(this.pause(),D.render(v>=f?0:-jt)._zTime=v>=f?1:-1,this._ts))return this._start=R,Ef(this),this.render(o,l,c);this._onUpdate&&!l&&bi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((o||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&zr(this,1),!l&&!(o<0&&!f)&&(_||f||!p)&&(bi(this,_===p&&o>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(o,l){var c=this;if(Za(l)||(l=Gi(this,l,o)),!(o instanceof lu)){if(jn(o))return o.forEach(function(f){return c.add(f,l)}),this;if(Ln(o))return this.addLabel(o,l);if(ln(o))o=yn.delayedCall(0,o);else return this}return this!==o?pa(this,o,l):this},n.getChildren=function(o,l,c,f){o===void 0&&(o=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-ki);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof yn?l&&p.push(d):(c&&p.push(d),o&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(o){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===o)return l[c]},n.remove=function(o){return Ln(o)?this.removeLabel(o):ln(o)?this.killTweensOf(o):(o.parent===this&&Mf(this,o),o===this._recent&&(this._recent=this._last),As(this))},n.totalTime=function(o,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mn(Ti.time-(this._ts>0?o/this._ts:(this.totalDuration()-o)/-this._ts))),s.prototype.totalTime.call(this,o,l),this._forcing=0,this):this._tTime},n.addLabel=function(o,l){return this.labels[o]=Gi(this,l),this},n.removeLabel=function(o){return delete this.labels[o],this},n.addPause=function(o,l,c){var f=yn.delayedCall(0,l||ru,c);return f.data="isPause",this._hasPause=1,pa(this,f,Gi(this,o))},n.removePause=function(o){var l=this._first;for(o=Gi(this,o);l;)l._start===o&&l.data==="isPause"&&zr(l),l=l._next},n.killTweensOf=function(o,l,c){for(var f=this.getTweensOf(o,c),p=f.length;p--;)Cr!==f[p]&&f[p].kill(o,l);return this},n.getTweensOf=function(o,l){for(var c=[],f=Xi(o),p=this._first,d=Za(l),_;p;)p instanceof yn?Mw(p._targets,f)&&(d?(!Cr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(o,l){l=l||{};var c=this,f=Gi(c,o),p=l,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,S,T=yn.to(c,Di({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||jt,onStart:function(){if(c.pause(),!S){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());T._dur!==y&&Wo(T,y,0,1).render(T._time,!0,!0),S=1}_&&_.apply(T,g||[])}},l));return v?T.render(0):T},n.tweenFromTo=function(o,l,c){return this.tweenTo(l,Di({startAt:{time:Gi(this,o)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(o){return o===void 0&&(o=this._time),aS(this,Gi(this,o))},n.previousLabel=function(o){return o===void 0&&(o=this._time),aS(this,Gi(this,o),1)},n.currentLabel=function(o){return arguments.length?this.seek(o,!0):this.previousLabel(this._time+jt)},n.shiftChildren=function(o,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,d;f;)f._start>=c&&(f._start+=o,f._end+=o),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=o);return As(this)},n.invalidate=function(o){var l=this._first;for(this._lock=0;l;)l.invalidate(o),l=l._next;return s.prototype.invalidate.call(this,o)},n.clear=function(o){o===void 0&&(o=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),o&&(this.labels={}),As(this)},n.totalDuration=function(o){var l=0,c=this,f=c._last,p=ki,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-o:o));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,pa(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Wo(c,c===an&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(o){if(an._ts&&(ry(an,mf(o,an)),iy=Ti.frame),Ti.frame>=eS){eS+=Ri.autoSleep||120;var l=an._first;if((!l||!l._ts)&&Ri.autoSleep&&Ti._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ti.sleep()}}},e})(lu);Di($n.prototype,{_lock:0,_hasPause:0,_forcing:0});var qw=function(e,n,a,o,l,c,f){var p=new ui(this._pt,e,n,0,1,Ly,null,l),d=0,_=0,g,v,S,T,M,y,x,D;for(p.b=a,p.e=o,a+="",o+="",(x=~o.indexOf("random("))&&(o=su(o)),c&&(D=[a,o],c(D,e,n),a=D[0],o=D[1]),v=a.match(gp)||[];g=gp.exec(o);)T=g[0],M=o.substring(d,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),T!==v[_++]&&(y=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:y,c:T.charAt(1)==="="?Oo(y,T)-y:parseFloat(T)-y,m:S&&S<4?Math.round:0},d=gp.lastIndex);return p.c=d<o.length?o.substring(d,o.length):"",p.fp=f,(JS.test(o)||x)&&(p.e=0),this._pt=p,p},e_=function(e,n,a,o,l,c,f,p,d,_){ln(o)&&(o=o(l||0,e,c));var g=e[n],v=a!=="get"?a:ln(g)?d?e[n.indexOf("set")||!ln(e["get"+n.substr(3)])?n:"get"+n.substr(3)](d):e[n]():g,S=ln(g)?d?Kw:Uy:n_,T;if(Ln(o)&&(~o.indexOf("random(")&&(o=su(o)),o.charAt(1)==="="&&(T=Oo(v,o)+(Wn(v)||0),(T||T===0)&&(o=T))),!_||v!==o||Am)return!isNaN(v*o)&&o!==""?(T=new ui(this._pt,e,n,+v||0,o-(v||0),typeof g=="boolean"?Jw:Ny,0,S),d&&(T.fp=d),f&&T.modifier(f,this,e),this._pt=T):(!g&&!(n in e)&&Zm(n,o),qw.call(this,e,n,v,o,S,p||Ri.stringFilter,d))},Ww=function(e,n,a,o,l){if(ln(e)&&(e=eu(e,l,n,a,o)),!va(e)||e.style&&e.nodeType||jn(e)||KS(e))return Ln(e)?eu(e,l,n,a,o):e;var c={},f;for(f in e)c[f]=eu(e[f],l,n,a,o);return c},Cy=function(e,n,a,o,l,c){var f,p,d,_;if(Mi[e]&&(f=new Mi[e]).init(l,f.rawVars?n[e]:Ww(n[e],o,l,c,a),a,o,c)!==!1&&(a._pt=p=new ui(a._pt,l,e,0,1,f.render,f,0,f.priority),a!==Uo))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Cr,Am,t_=function s(e,n,a){var o=e.vars,l=o.ease,c=o.startAt,f=o.immediateRender,p=o.lazy,d=o.onUpdate,_=o.runBackwards,g=o.yoyoEase,v=o.keyframes,S=o.autoRevert,T=e._dur,M=e._startAt,y=e._targets,x=e.parent,D=x&&x.data==="nested"?x.vars.targets:y,w=e._overwrite==="auto"&&!qm,R=e.timeline,O,P,L,F,b,N,H,j,J,oe,X,z,G;if(R&&(!v||!l)&&(l="none"),e._ease=Rs(l,ko.ease),e._yEase=g?Ty(Rs(g===!0?l:g,ko.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!R&&!!o.runBackwards,!R||v&&!o.stagger){if(j=y[0]?bs(y[0]).harness:0,z=j&&o[j.prop],O=pf(o,Km),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!S?M.render(-1,!0):M.revert(_&&T?rf:Sw),M._lazy=0),c){if(zr(e._startAt=yn.set(y,Di({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&oi(p),startAt:null,delay:0,onUpdate:d&&function(){return bi(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Gn||!f&&!S)&&e._startAt.revert(rf),f&&T&&n<=0&&a<=0){n&&(e._zTime=n);return}}else if(_&&T&&!M){if(n&&(f=!1),L=Di({overwrite:!1,data:"isFromStart",lazy:f&&!M&&oi(p),immediateRender:f,stagger:0,parent:x},O),z&&(L[j.prop]=z),zr(e._startAt=yn.set(y,L)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Gn?e._startAt.revert(rf):e._startAt.render(-1,!0)),e._zTime=n,!f)s(e._startAt,jt,jt);else if(!n)return}for(e._pt=e._ptCache=0,p=T&&oi(p)||p&&!T,P=0;P<y.length;P++){if(b=y[P],H=b._gsap||Jm(y)[P]._gsap,e._ptLookup[P]=oe={},Sm[H.id]&&Nr.length&&df(),X=D===y?P:D.indexOf(b),j&&(J=new j).init(b,z||O,e,X,D)!==!1&&(e._pt=F=new ui(e._pt,b,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(q){oe[q]=F}),J.priority&&(N=1)),!j||z)for(L in O)Mi[L]&&(J=Cy(L,O,e,X,b,D))?J.priority&&(N=1):oe[L]=F=e_.call(e,b,L,"get",O[L],X,D,0,o.stringFilter);e._op&&e._op[P]&&e.kill(b,e._op[P]),w&&e._pt&&(Cr=e,an.killTweensOf(b,oe,e.globalTime(n)),G=!e.parent,Cr=0),e._pt&&p&&(Sm[H.id]=1)}N&&Oy(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!G,v&&n<=0&&R.render(ki,!0,!0)},Yw=function(e,n,a,o,l,c,f,p){var d=(e._pt&&e._ptCache||(e._ptCache={}))[n],_,g,v,S;if(!d)for(d=e._ptCache[n]=[],v=e._ptLookup,S=e._targets.length;S--;){if(_=v[S][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Am=1,e.vars[n]="+=0",t_(e,f),Am=0,p?au(n+" not eligible for reset"):1;d.push(_)}for(S=d.length;S--;)g=d[S],_=g._pt||g,_.s=(o||o===0)&&!l?o:_.s+(o||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=hn(a)+Wn(g.e)),g.b&&(g.b=_.s+Wn(g.b))},jw=function(e,n){var a=e[0]?bs(e[0]).harness:0,o=a&&a.aliases,l,c,f,p;if(!o)return n;l=Xo({},n);for(c in o)if(c in l)for(p=o[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},Zw=function(e,n,a,o){var l=n.ease||o||"power1.inOut",c,f;if(jn(n))f=a[e]||(a[e]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:n[c],e:l})},eu=function(e,n,a,o,l){return ln(e)?e.call(n,a,o,l):Ln(e)&&~e.indexOf("random(")?su(e):e},wy=Qm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dy={};li(wy+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Dy[s]=1});var yn=(function(s){jS(e,s);function e(a,o,l,c){var f;typeof o=="number"&&(l.duration=o,o=l,l=null),f=s.call(this,c?o:Jl(o))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,S=p.overwrite,T=p.keyframes,M=p.defaults,y=p.scrollTrigger,x=p.yoyoEase,D=o.parent||an,w=(jn(a)||KS(a)?Za(a[0]):"length"in o)?[a]:Xi(a),R,O,P,L,F,b,N,H;if(f._targets=w.length?Jm(w):au("GSAP target "+a+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,T||v||Jc(d)||Jc(_)){if(o=f.vars,R=f.timeline=new $n({data:"nested",defaults:M||{},targets:D&&D.data==="nested"?D.vars.targets:w}),R.kill(),R.parent=R._dp=ka(f),R._start=0,v||Jc(d)||Jc(_)){if(L=w.length,N=v&&py(v),va(v))for(F in v)~wy.indexOf(F)&&(H||(H={}),H[F]=v[F]);for(O=0;O<L;O++)P=pf(o,Dy),P.stagger=0,x&&(P.yoyoEase=x),H&&Xo(P,H),b=w[O],P.duration=+eu(d,ka(f),O,b,w),P.delay=(+eu(_,ka(f),O,b,w)||0)-f._delay,!v&&L===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),R.to(b,P,N?N(O,b,w):0),R._ease=At.none;R.duration()?d=_=0:f.timeline=0}else if(T){Jl(Di(R.vars.defaults,{ease:"none"})),R._ease=Rs(T.ease||o.ease||"none");var j=0,J,oe,X;if(jn(T))T.forEach(function(z){return R.to(w,z,">")}),R.duration();else{P={};for(F in T)F==="ease"||F==="easeEach"||Zw(F,T[F],P,T.easeEach);for(F in P)for(J=P[F].sort(function(z,G){return z.t-G.t}),j=0,O=0;O<J.length;O++)oe=J[O],X={ease:oe.e,duration:(oe.t-(O?J[O-1].t:0))/100*d},X[F]=oe.v,R.to(w,X,j),j+=X.duration;R.duration()<d&&R.to({},{duration:d-R.duration()})}}d||f.duration(d=R.duration())}else f.timeline=0;return S===!0&&!qm&&(Cr=ka(f),an.killTweensOf(w),Cr=0),pa(D,ka(f),l),o.reversed&&f.reverse(),o.paused&&f.paused(!0),(g||!d&&!T&&f._start===Mn(D._time)&&oi(g)&&Aw(ka(f))&&D.data!=="nested")&&(f._tTime=-jt,f.render(Math.max(0,-_)||0)),y&&cy(ka(f),y),f}var n=e.prototype;return n.render=function(o,l,c){var f=this._time,p=this._tDur,d=this._dur,_=o<0,g=o>p-jt&&!_?p:o<jt?0:o,v,S,T,M,y,x,D,w,R;if(!d)Cw(this,o,l,c);else if(g!==this._tTime||!o||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,w=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+o,l,c);if(v=Mn(g%M),g===p?(T=this._repeat,v=d):(y=Mn(g/M),T=~~y,T&&T===y?(v=d,T--):v>d&&(v=d)),x=this._yoyo&&T&1,x&&(R=this._yEase,v=d-v),y=qo(this._tTime,M),v===f&&!c&&this._initted&&T===y)return this._tTime=g,this;T!==y&&(w&&this._yEase&&by(w,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(Mn(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(fy(this,_?o:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==y))return this;if(d!==this._dur)return this.render(o,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=D=(R||this._ease)(v/d),this._from&&(this.ratio=D=1-D),!f&&g&&!l&&!y&&(bi(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(D,S.d),S=S._next;w&&w.render(o<0?o:w._dur*w._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=o),this._onUpdate&&!l&&(_&&ym(this,o,l,c),bi(this,"onUpdate")),this._repeat&&T!==y&&this.vars.onRepeat&&!l&&this.parent&&bi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&ym(this,o,!0,!0),(o||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&zr(this,1),!l&&!(_&&!f)&&(g||f||x)&&(bi(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(o){return(!o||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(o),s.prototype.invalidate.call(this,o)},n.resetTo=function(o,l,c,f,p){ou||Ti.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||t_(this,d),_=this._ease(d/this._dur),Yw(this,o,l,c,f,_,d,p)?this.resetTo(o,l,c,f,1):(Tf(this,0),this.parent||ly(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(o,l){if(l===void 0&&(l="all"),!o&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(o,l,Cr&&Cr.vars.overwrite!==!0)._first||Kl(this),this.parent&&c!==this.timeline.totalDuration()&&Wo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=o?Xi(o):f,d=this._ptLookup,_=this._pt,g,v,S,T,M,y,x;if((!l||l==="all")&&Tw(f,p))return l==="all"&&(this._pt=0),Kl(this);for(g=this._op=this._op||[],l!=="all"&&(Ln(l)&&(M={},li(l,function(D){return M[D]=1}),l=M),l=jw(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],l==="all"?(g[x]=l,T=v,S={}):(S=g[x]=g[x]||{},T=l);for(M in T)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&Mf(this,y,"_pt"),delete v[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&_&&Kl(this),this},e.to=function(o,l){return new e(o,l,arguments[2])},e.from=function(o,l){return $l(1,arguments)},e.delayedCall=function(o,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:o,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(o,l,c){return $l(2,arguments)},e.set=function(o,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(o,l)},e.killTweensOf=function(o,l,c){return an.killTweensOf(o,l,c)},e})(lu);Di(yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(s){yn[s]=function(){var e=new $n,n=Em.call(arguments,0);return n.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,n)}});var n_=function(e,n,a){return e[n]=a},Uy=function(e,n,a){return e[n](a)},Kw=function(e,n,a,o){return e[n](o.fp,a)},Qw=function(e,n,a){return e.setAttribute(n,a)},i_=function(e,n){return ln(e[n])?Uy:Wm(e[n])&&e.setAttribute?Qw:n_},Ny=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Jw=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Ly=function(e,n){var a=n._pt,o="";if(!e&&n.b)o=n.b;else if(e===1&&n.e)o=n.e;else{for(;a;)o=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+o,a=a._next;o+=n.c}n.set(n.t,n.p,o,n)},a_=function(e,n){for(var a=n._pt;a;)a.r(e,a.d),a=a._next},$w=function(e,n,a,o){for(var l=this._pt,c;l;)c=l._next,l.p===o&&l.modifier(e,n,a),l=c},eD=function(e){for(var n=this._pt,a,o;n;)o=n._next,n.p===e&&!n.op||n.op===e?Mf(this,n,"_pt"):n.dep||(a=1),n=o;return!a},tD=function(e,n,a,o){o.mSet(e,n,o.m.call(o.tween,a,o.mt),o)},Oy=function(e){for(var n=e._pt,a,o,l,c;n;){for(a=n._next,o=l;o&&o.pr>n.pr;)o=o._next;(n._prev=o?o._prev:c)?n._prev._next=n:l=n,(n._next=o)?o._prev=n:c=n,n=a}e._pt=l},ui=(function(){function s(n,a,o,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=o,this.r=f||Ny,this.d=p||this,this.set=d||n_,this.pr=_||0,this._next=n,n&&(n._prev=this)}var e=s.prototype;return e.modifier=function(a,o,l){this.mSet=this.mSet||this.set,this.set=tD,this.m=a,this.mt=l,this.tween=o},s})();li(Qm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Km[s]=1});wi.TweenMax=wi.TweenLite=yn;wi.TimelineLite=wi.TimelineMax=$n;an=new $n({sortChildren:!1,defaults:ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=Ey;var Cs=[],of={},nD=[],sS=0,iD=0,Mp=function(e){return(of[e]||nD).map(function(n){return n()})},Rm=function(){var e=Date.now(),n=[];e-sS>2&&(Mp("matchMediaInit"),Cs.forEach(function(a){var o=a.queries,l=a.conditions,c,f,p,d;for(f in o)c=fa.matchMedia(o[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),Mp("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(o){return a.add(null,o)})}),sS=e,Mp("matchMedia"))},Py=(function(){function s(n,a){this.selector=a&&Tm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=iD++,n&&this.add(n)}var e=s.prototype;return e.add=function(a,o,l){ln(a)&&(l=o,o=a,a=ln);var c=this,f=function(){var d=tn,_=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=Tm(l)),tn=c,g=o.apply(c,arguments),ln(g)&&c._r.push(g),tn=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===ln?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},e.ignore=function(a){var o=tn;tn=null,a(this),tn=o},e.getTweens=function(){var a=[];return this.data.forEach(function(o){return o instanceof s?a.push.apply(a,o.getTweens()):o instanceof yn&&!(o.parent&&o.parent.data==="nested")&&a.push(o)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,o){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof $n?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof yn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),o)for(var c=Cs.length;c--;)Cs[c].id===this.id&&Cs.splice(c,1)},e.revert=function(a){this.kill(a||{})},s})(),aD=(function(){function s(n){this.contexts=[],this.scope=n,tn&&tn.data.push(this)}var e=s.prototype;return e.add=function(a,o,l){va(a)||(a={matches:a});var c=new Py(0,l||this.scope),f=c.conditions={},p,d,_;tn&&!c.selector&&(c.selector=tn.selector),this.contexts.push(c),o=c.add("onMatch",o),c.queries=a;for(d in a)d==="all"?_=1:(p=fa.matchMedia(a[d]),p&&(Cs.indexOf(c)<0&&Cs.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Rm):p.addEventListener("change",Rm)));return _&&o(c,function(g){return c.add(null,g)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(o){return o.kill(a,!0)})},s})(),_f={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];n.forEach(function(o){return Sy(o)})},timeline:function(e){return new $n(e)},getTweensOf:function(e,n){return an.getTweensOf(e,n)},getProperty:function(e,n,a,o){Ln(e)&&(e=Xi(e)[0]);var l=bs(e||{}).get,c=a?oy:sy;return a==="native"&&(a=""),e&&(n?c((Mi[n]&&Mi[n].get||l)(e,n,a,o)):function(f,p,d){return c((Mi[f]&&Mi[f].get||l)(e,f,p,d))})},quickSetter:function(e,n,a){if(e=Xi(e),e.length>1){var o=e.map(function(_){return fi.quickSetter(_,n,a)}),l=o.length;return function(_){for(var g=l;g--;)o[g](_)}}e=e[0]||{};var c=Mi[n],f=bs(e),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;Uo._pt=0,g.init(e,a?_+a:_,Uo,0,[e]),g.render(1,g),Uo._pt&&a_(1,Uo)}:f.set(e,p);return c?d:function(_){return d(e,p,a?_+a:_,f,1)}},quickTo:function(e,n,a){var o,l=fi.to(e,Di((o={},o[n]="+=0.1",o.paused=!0,o.stagger=0,o),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(e){return an.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rs(e.ease,ko.ease)),tS(ko,e||{})},config:function(e){return tS(Ri,e||{})},registerEffect:function(e){var n=e.name,a=e.effect,o=e.plugins,l=e.defaults,c=e.extendTimeline;(o||"").split(",").forEach(function(f){return f&&!Mi[f]&&!wi[f]&&au(n+" effect requires "+f+" plugin.")}),vp[n]=function(f,p,d){return a(Xi(f),Di(p||{},l),d)},c&&($n.prototype[n]=function(f,p,d){return this.add(vp[n](f,va(p)?p:(d=p)&&{},this),d)})},registerEase:function(e,n){At[e]=Rs(n)},parseEase:function(e,n){return arguments.length?Rs(e,n):At},getById:function(e){return an.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var a=new $n(e),o,l;for(a.smoothChildTiming=oi(e.smoothChildTiming),an.remove(a),a._dp=0,a._time=a._tTime=an._time,o=an._first;o;)l=o._next,(n||!(!o._dur&&o instanceof yn&&o.vars.onComplete===o._targets[0]))&&pa(a,o,o._start-o._delay),o=l;return pa(an,a,0),a},context:function(e,n){return e?new Py(e,n):tn},matchMedia:function(e){return new aD(e)},matchMediaRefresh:function(){return Cs.forEach(function(e){var n=e.conditions,a,o;for(o in n)n[o]&&(n[o]=!1,a=1);a&&e.revert()})||Rm()},addEventListener:function(e,n){var a=of[e]||(of[e]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(e,n){var a=of[e],o=a&&a.indexOf(n);o>=0&&a.splice(o,1)},utils:{wrap:zw,wrapYoyo:Bw,distribute:py,random:_y,snap:my,normalize:Pw,getUnit:Wn,clamp:Uw,splitColor:yy,toArray:Xi,selector:Tm,mapRange:vy,pipe:Lw,unitize:Ow,interpolate:Iw,shuffle:dy},install:ty,effects:vp,ticker:Ti,updateRoot:$n.updateRoot,plugins:Mi,globalTimeline:an,core:{PropTween:ui,globals:ny,Tween:yn,Timeline:$n,Animation:lu,getCache:bs,_removeLinkedListItem:Mf,reverting:function(){return Gn},context:function(e){return e&&tn&&(tn.data.push(e),e._ctx=tn),tn},suppressOverwrites:function(e){return qm=e}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return _f[s]=yn[s]});Ti.add($n.updateRoot);Uo=_f.to({},{duration:0});var rD=function(e,n){for(var a=e._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},sD=function(e,n){var a=e._targets,o,l,c;for(o in n)for(l=a.length;l--;)c=e._ptLookup[l][o],c&&(c=c.d)&&(c._pt&&(c=rD(c,o)),c&&c.modifier&&c.modifier(n[o],e,a[l],o))},Ep=function(e,n){return{name:e,headless:1,rawVars:1,init:function(o,l,c){c._onInit=function(f){var p,d;if(Ln(l)&&(p={},li(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}sD(f,l)}}}},fi=_f.registerPlugin({name:"attr",init:function(e,n,a,o,l){var c,f,p;this.tween=a;for(c in n)p=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(p||0)+"",n[c],o,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(e,n){for(var a=n._pt;a;)Gn?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,n){for(var a=n.length;a--;)this.add(e,a,e[a]||0,n[a],0,0,0,0,0,1)}},Ep("roundProps",bm),Ep("modifiers"),Ep("snap",my))||_f;yn.version=$n.version=fi.version="3.13.0";ey=1;Ym()&&Yo();At.Power0;At.Power1;At.Power2;At.Power3;At.Power4;At.Linear;At.Quad;At.Cubic;At.Quart;At.Quint;At.Strong;At.Elastic;At.Back;At.SteppedEase;At.Bounce;At.Sine;At.Expo;At.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var oS,wr,Po,r_,Ms,lS,s_,oD=function(){return typeof window<"u"},Ka={},gs=180/Math.PI,zo=Math.PI/180,Co=Math.atan2,uS=1e8,o_=/([A-Z])/g,lD=/(left|right|width|margin|padding|x)/i,uD=/[\s,\(]\S/,_a={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cm=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},cD=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},fD=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},hD=function(e,n){var a=n.s+n.c*e;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},zy=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},By=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},dD=function(e,n,a){return e.style[n]=a},pD=function(e,n,a){return e.style.setProperty(n,a)},mD=function(e,n,a){return e._gsap[n]=a},_D=function(e,n,a){return e._gsap.scaleX=e._gsap.scaleY=a},gD=function(e,n,a,o,l){var c=e._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},vD=function(e,n,a,o,l){var c=e._gsap;c[n]=a,c.renderTransform(l,c)},rn="transform",ci=rn+"Origin",xD=function s(e,n){var a=this,o=this.target,l=o.style,c=o._gsap;if(e in Ka&&l){if(this.tfm=this.tfm||{},e!=="transform")e=_a[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return a.tfm[f]=Xa(o,f)}):this.tfm[e]=c.x?c[e]:Xa(o,e),e===ci&&(this.tfm.zOrigin=c.zOrigin);else return _a.transform.split(",").forEach(function(f){return s.call(a,f,n)});if(this.props.indexOf(rn)>=0)return;c.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(ci,n,"")),e=rn}(l||n)&&this.props.push(e,n,l[e])},Iy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},SD=function(){var e=this.props,n=this.target,a=n.style,o=n._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?n[e[l]](e[l+2]):n[e[l]]=e[l+2]:e[l+2]?a[e[l]]=e[l+2]:a.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(o_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)o[c]=this.tfm[c];o.svg&&(o.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=s_(),(!l||!l.isStart)&&!a[rn]&&(Iy(a),o.zOrigin&&a[ci]&&(a[ci]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},Fy=function(e,n){var a={target:e,props:[],revert:SD,save:xD};return e._gsap||fi.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(o){return a.save(o)}),a},Hy,wm=function(e,n){var a=wr.createElementNS?wr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wr.createElement(e);return a&&a.style?a:wr.createElement(e)},qi=function s(e,n,a){var o=getComputedStyle(e);return o[n]||o.getPropertyValue(n.replace(o_,"-$1").toLowerCase())||o.getPropertyValue(n)||!a&&s(e,jo(n)||n,1)||""},cS="O,Moz,ms,Ms,Webkit".split(","),jo=function(e,n,a){var o=n||Ms,l=o.style,c=5;if(e in l&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(cS[c]+e in l););return c<0?null:(c===3?"ms":c>=0?cS[c]:"")+e},Dm=function(){oD()&&window.document&&(oS=window,wr=oS.document,Po=wr.documentElement,Ms=wm("div")||{style:{}},wm("div"),rn=jo(rn),ci=rn+"Origin",Ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hy=!!jo("perspective"),s_=fi.core.reverting,r_=1)},fS=function(e){var n=e.ownerSVGElement,a=wm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=e.cloneNode(!0),l;o.style.display="block",a.appendChild(o),Po.appendChild(a);try{l=o.getBBox()}catch{}return a.removeChild(o),Po.removeChild(a),l},hS=function(e,n){for(var a=n.length;a--;)if(e.hasAttribute(n[a]))return e.getAttribute(n[a])},Gy=function(e){var n,a;try{n=e.getBBox()}catch{n=fS(e),a=1}return n&&(n.width||n.height)||a||(n=fS(e)),n&&!n.width&&!n.x&&!n.y?{x:+hS(e,["x","cx","x1"])||0,y:+hS(e,["y","cy","y1"])||0,width:0,height:0}:n},Vy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Gy(e))},ws=function(e,n){if(n){var a=e.style,o;n in Ka&&n!==ci&&(n=rn),a.removeProperty?(o=n.substr(0,2),(o==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(o==="--"?n:n.replace(o_,"-$1").toLowerCase())):a.removeAttribute(n)}},Dr=function(e,n,a,o,l,c){var f=new ui(e._pt,n,a,0,1,c?By:zy);return e._pt=f,f.b=o,f.e=l,e._props.push(a),f},dS={deg:1,rad:1,turn:1},yD={grid:1,flex:1},Br=function s(e,n,a,o){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Ms.style,p=lD.test(n),d=e.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=o==="px",S=o==="%",T,M,y,x;if(o===c||!l||dS[o]||dS[c])return l;if(c!=="px"&&!v&&(l=s(e,n,a,"px")),x=e.getCTM&&Vy(e),(S||c==="%")&&(Ka[n]||~n.indexOf("adius")))return T=x?e.getBBox()[p?"width":"height"]:e[_],hn(S?l/T*g:l/100*T);if(f[p?"width":"height"]=g+(v?c:o),M=o!=="rem"&&~n.indexOf("adius")||o==="em"&&e.appendChild&&!d?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===wr||!M.appendChild)&&(M=wr.body),y=M._gsap,y&&S&&y.width&&p&&y.time===Ti.time&&!y.uncache)return hn(l/y.width*g);if(S&&(n==="height"||n==="width")){var D=e.style[n];e.style[n]=g+o,T=e[_],D?e.style[n]=D:ws(e,n)}else(S||c==="%")&&!yD[qi(M,"display")]&&(f.position=qi(e,"position")),M===e&&(f.position="static"),M.appendChild(Ms),T=Ms[_],M.removeChild(Ms),f.position="absolute";return p&&S&&(y=bs(M),y.time=Ti.time,y.width=M[_]),hn(v?T*l/g:T&&l?g/T*l:0)},Xa=function(e,n,a,o){var l;return r_||Dm(),n in _a&&n!=="transform"&&(n=_a[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ka[n]&&n!=="transform"?(l=cu(e,o),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:vf(qi(e,ci))+" "+l.zOrigin+"px"):(l=e.style[n],(!l||l==="auto"||o||~(l+"").indexOf("calc("))&&(l=gf[n]&&gf[n](e,n,a)||qi(e,n)||ay(e,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Br(e,n,l,a)+a:l},MD=function(e,n,a,o){if(!a||a==="none"){var l=jo(n,e,1),c=l&&qi(e,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=qi(e,"borderTopColor"))}var f=new ui(this._pt,e.style,n,0,1,Ly),p=0,d=0,_,g,v,S,T,M,y,x,D,w,R,O;if(f.b=a,f.e=o,a+="",o+="",o.substring(0,6)==="var(--"&&(o=qi(e,o.substring(4,o.indexOf(")")))),o==="auto"&&(M=e.style[n],e.style[n]=o,o=qi(e,n)||o,M?e.style[n]=M:ws(e,n)),_=[a,o],Ey(_),a=_[0],o=_[1],v=a.match(Do)||[],O=o.match(Do)||[],O.length){for(;g=Do.exec(o);)y=g[0],D=o.substring(p,g.index),T?T=(T+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(T=1),y!==(M=v[d++]||"")&&(S=parseFloat(M)||0,R=M.substr((S+"").length),y.charAt(1)==="="&&(y=Oo(S,y)+R),x=parseFloat(y),w=y.substr((x+"").length),p=Do.lastIndex-w.length,w||(w=w||Ri.units[n]||R,p===o.length&&(o+=w,f.e+=w)),R!==w&&(S=Br(e,n,M,w)||0),f._pt={_next:f._pt,p:D||d===1?D:",",s:S,c:x-S,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=p<o.length?o.substring(p,o.length):""}else f.r=n==="display"&&o==="none"?By:zy;return JS.test(o)&&(f.e=0),this._pt=f,f},pS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ED=function(e){var n=e.split(" "),a=n[0],o=n[1]||"50%";return(a==="top"||a==="bottom"||o==="left"||o==="right")&&(e=a,a=o,o=e),n[0]=pS[a]||a,n[1]=pS[o]||o,n.join(" ")},TD=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,o=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)o.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Ka[f]&&(p=1,f=f==="transformOrigin"?ci:rn),ws(a,f);p&&(ws(a,rn),c&&(c.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",cu(a,1),c.uncache=1,Iy(o)))}},gf={clearProps:function(e,n,a,o,l){if(l.data!=="isFromStart"){var c=e._pt=new ui(e._pt,n,a,0,0,TD);return c.u=o,c.pr=-10,c.tween=l,e._props.push(a),1}}},uu=[1,0,0,1,0,0],ky={},Xy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mS=function(e){var n=qi(e,rn);return Xy(n)?uu:n.substr(7).match(QS).map(hn)},l_=function(e,n){var a=e._gsap||bs(e),o=e.style,l=mS(e),c,f,p,d;return a.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?uu:l):(l===uu&&!e.offsetParent&&e!==Po&&!a.svg&&(p=o.display,o.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,f=e.nextElementSibling,Po.appendChild(e)),l=mS(e),p?o.display=p:ws(e,"display"),d&&(f?c.insertBefore(e,f):c?c.appendChild(e):Po.removeChild(e))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Um=function(e,n,a,o,l,c){var f=e._gsap,p=l||l_(e,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,S=p[0],T=p[1],M=p[2],y=p[3],x=p[4],D=p[5],w=n.split(" "),R=parseFloat(w[0])||0,O=parseFloat(w[1])||0,P,L,F,b;a?p!==uu&&(L=S*y-T*M)&&(F=R*(y/L)+O*(-M/L)+(M*D-y*x)/L,b=R*(-T/L)+O*(S/L)-(S*D-T*x)/L,R=F,O=b):(P=Gy(e),R=P.x+(~w[0].indexOf("%")?R/100*P.width:R),O=P.y+(~(w[1]||w[0]).indexOf("%")?O/100*P.height:O)),o||o!==!1&&f.smooth?(x=R-d,D=O-_,f.xOffset=g+(x*S+D*M)-x,f.yOffset=v+(x*T+D*y)-D):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=O,f.smooth=!!o,f.origin=n,f.originIsAbsolute=!!a,e.style[ci]="0px 0px",c&&(Dr(c,f,"xOrigin",d,R),Dr(c,f,"yOrigin",_,O),Dr(c,f,"xOffset",g,f.xOffset),Dr(c,f,"yOffset",v,f.yOffset)),e.setAttribute("data-svg-origin",R+" "+O)},cu=function(e,n){var a=e._gsap||new Ry(e);if("x"in a&&!n&&!a.uncache)return a;var o=e.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(e),d=qi(e,ci)||"0",_,g,v,S,T,M,y,x,D,w,R,O,P,L,F,b,N,H,j,J,oe,X,z,G,q,ce,_e,B,$,ve,Me,De;return _=g=v=M=y=x=D=w=R=0,S=T=1,a.svg=!!(e.getCTM&&Vy(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(o[rn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[rn]!=="none"?p[rn]:"")),o.scale=o.rotate=o.translate="none"),L=l_(e,a.svg),a.svg&&(a.uncache?(q=e.getBBox(),d=a.xOrigin-q.x+"px "+(a.yOrigin-q.y)+"px",G=""):G=!n&&e.getAttribute("data-svg-origin"),Um(e,G||d,!!G||a.originIsAbsolute,a.smooth!==!1,L)),O=a.xOrigin||0,P=a.yOrigin||0,L!==uu&&(H=L[0],j=L[1],J=L[2],oe=L[3],_=X=L[4],g=z=L[5],L.length===6?(S=Math.sqrt(H*H+j*j),T=Math.sqrt(oe*oe+J*J),M=H||j?Co(j,H)*gs:0,D=J||oe?Co(J,oe)*gs+M:0,D&&(T*=Math.abs(Math.cos(D*zo))),a.svg&&(_-=O-(O*H+P*J),g-=P-(O*j+P*oe))):(De=L[6],ve=L[7],_e=L[8],B=L[9],$=L[10],Me=L[11],_=L[12],g=L[13],v=L[14],F=Co(De,$),y=F*gs,F&&(b=Math.cos(-F),N=Math.sin(-F),G=X*b+_e*N,q=z*b+B*N,ce=De*b+$*N,_e=X*-N+_e*b,B=z*-N+B*b,$=De*-N+$*b,Me=ve*-N+Me*b,X=G,z=q,De=ce),F=Co(-J,$),x=F*gs,F&&(b=Math.cos(-F),N=Math.sin(-F),G=H*b-_e*N,q=j*b-B*N,ce=J*b-$*N,Me=oe*N+Me*b,H=G,j=q,J=ce),F=Co(j,H),M=F*gs,F&&(b=Math.cos(F),N=Math.sin(F),G=H*b+j*N,q=X*b+z*N,j=j*b-H*N,z=z*b-X*N,H=G,X=q),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=hn(Math.sqrt(H*H+j*j+J*J)),T=hn(Math.sqrt(z*z+De*De)),F=Co(X,z),D=Math.abs(F)>2e-4?F*gs:0,R=Me?1/(Me<0?-Me:Me):0),a.svg&&(G=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!Xy(qi(e,rn)),G&&e.setAttribute("transform",G))),Math.abs(D)>90&&Math.abs(D)<270&&(l?(S*=-1,D+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,D+=D<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-_)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=hn(S),a.scaleY=hn(T),a.rotation=hn(M)+f,a.rotationX=hn(y)+f,a.rotationY=hn(x)+f,a.skewX=D+f,a.skewY=w+f,a.transformPerspective=R+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(o[ci]=vf(d)),a.xOffset=a.yOffset=0,a.force3D=Ri.force3D,a.renderTransform=a.svg?AD:Hy?qy:bD,a.uncache=0,a},vf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tp=function(e,n,a){var o=Wn(n);return hn(parseFloat(n)+parseFloat(Br(e,"x",a+"px",o)))+o},bD=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,qy(e,n)},ds="0deg",jl="0px",ps=") ",qy=function(e,n){var a=n||this,o=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,S=a.skewY,T=a.scaleX,M=a.scaleY,y=a.transformPerspective,x=a.force3D,D=a.target,w=a.zOrigin,R="",O=x==="auto"&&e&&e!==1||x===!0;if(w&&(g!==ds||_!==ds)){var P=parseFloat(_)*zo,L=Math.sin(P),F=Math.cos(P),b;P=parseFloat(g)*zo,b=Math.cos(P),c=Tp(D,c,L*b*-w),f=Tp(D,f,-Math.sin(P)*-w),p=Tp(D,p,F*b*-w+w)}y!==jl&&(R+="perspective("+y+ps),(o||l)&&(R+="translate("+o+"%, "+l+"%) "),(O||c!==jl||f!==jl||p!==jl)&&(R+=p!==jl||O?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ps),d!==ds&&(R+="rotate("+d+ps),_!==ds&&(R+="rotateY("+_+ps),g!==ds&&(R+="rotateX("+g+ps),(v!==ds||S!==ds)&&(R+="skew("+v+", "+S+ps),(T!==1||M!==1)&&(R+="scale("+T+", "+M+ps),D.style[rn]=R||"translate(0, 0)"},AD=function(e,n){var a=n||this,o=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,S=a.target,T=a.xOrigin,M=a.yOrigin,y=a.xOffset,x=a.yOffset,D=a.forceCSS,w=parseFloat(c),R=parseFloat(f),O,P,L,F,b;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=zo,d*=zo,O=Math.cos(p)*g,P=Math.sin(p)*g,L=Math.sin(p-d)*-v,F=Math.cos(p-d)*v,d&&(_*=zo,b=Math.tan(d-_),b=Math.sqrt(1+b*b),L*=b,F*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),O*=b,P*=b)),O=hn(O),P=hn(P),L=hn(L),F=hn(F)):(O=g,F=v,P=L=0),(w&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(w=Br(S,"x",c,"px"),R=Br(S,"y",f,"px")),(T||M||y||x)&&(w=hn(w+T-(T*O+M*L)+y),R=hn(R+M-(T*P+M*F)+x)),(o||l)&&(b=S.getBBox(),w=hn(w+o/100*b.width),R=hn(R+l/100*b.height)),b="matrix("+O+","+P+","+L+","+F+","+w+","+R+")",S.setAttribute("transform",b),D&&(S.style[rn]=b)},RD=function(e,n,a,o,l){var c=360,f=Ln(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?gs:1),d=p-o,_=o+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*uS)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*uS)%c-~~(d/c)*c)),e._pt=v=new ui(e._pt,n,a,o,d,cD),v.e=_,v.u="deg",e._props.push(a),v},_S=function(e,n){for(var a in n)e[a]=n[a];return e},CD=function(e,n,a){var o=_S({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,S,T;o.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[rn]=n,f=cu(a,1),ws(a,rn),a.setAttribute("transform",d)):(d=getComputedStyle(a)[rn],c[rn]=n,f=cu(a,1),c[rn]=d);for(p in Ka)d=o[p],_=f[p],d!==_&&l.indexOf(p)<0&&(S=Wn(d),T=Wn(_),g=S!==T?Br(a,p,d,T):parseFloat(d),v=parseFloat(_),e._pt=new ui(e._pt,f,p,g,v-g,Cm),e._pt.u=T||0,e._props.push(p));_S(f,o)};li("padding,margin,Width,Radius",function(s,e){var n="Top",a="Right",o="Bottom",l="Left",c=(e<3?[n,a,o,l]:[n+l,n+a,o+a,o+l]).map(function(f){return e<2?s+f:"border"+f+s});gf[e>1?"border"+s:s]=function(f,p,d,_,g){var v,S;if(arguments.length<4)return v=c.map(function(T){return Xa(f,T,d)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(_+"").split(" "),S={},c.forEach(function(T,M){return S[T]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,S,g)}});var Wy={name:"css",register:Dm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,a,o,l){var c=this._props,f=e.style,p=a.vars.startAt,d,_,g,v,S,T,M,y,x,D,w,R,O,P,L,F;r_||Dm(),this.styles=this.styles||Fy(e),F=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(Mi[M]&&Cy(M,n,a,o,e,l)))){if(S=typeof _,T=gf[M],S==="function"&&(_=_.call(a,o,e,l),S=typeof _),S==="string"&&~_.indexOf("random(")&&(_=su(_)),T)T(this,e,M,_,a)&&(L=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),_+="",Lr.lastIndex=0,Lr.test(d)||(y=Wn(d),x=Wn(_)),x?y!==x&&(d=Br(e,M,d,x)+x):y&&(_+=y),this.add(f,"setProperty",d,_,o,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(S!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,o,e,l):p[M],Ln(d)&&~d.indexOf("random(")&&(d=su(d)),Wn(d+"")||d==="auto"||(d+=Ri.units[M]||Wn(Xa(e,M))||""),(d+"").charAt(1)==="="&&(d=Xa(e,M))):d=Xa(e,M),v=parseFloat(d),D=S==="string"&&_.charAt(1)==="="&&_.substr(0,2),D&&(_=_.substr(2)),g=parseFloat(_),M in _a&&(M==="autoAlpha"&&(v===1&&Xa(e,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),Dr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=_a[M],~M.indexOf(",")&&(M=M.split(",")[0]))),w=M in Ka,w){if(this.styles.save(M),S==="string"&&_.substring(0,6)==="var(--"&&(_=qi(e,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),R||(O=e._gsap,O.renderTransform&&!n.parseTransform||cu(e,n.parseTransform),P=n.smoothOrigin!==!1&&O.smooth,R=this._pt=new ui(this._pt,f,rn,0,1,O.renderTransform,O,0,-1),R.dep=1),M==="scale")this._pt=new ui(this._pt,O,"scaleY",O.scaleY,(D?Oo(O.scaleY,D+g):g)-O.scaleY||0,Cm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(ci,0,f[ci]),_=ED(_),O.svg?Um(e,_,0,P,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==O.zOrigin&&Dr(this,O,"zOrigin",O.zOrigin,x),Dr(this,f,M,vf(d),vf(_)));continue}else if(M==="svgOrigin"){Um(e,_,1,P,0,this);continue}else if(M in ky){RD(this,O,M,v,D?Oo(v,D+_):_);continue}else if(M==="smoothOrigin"){Dr(this,O,"smooth",O.smooth,_);continue}else if(M==="force3D"){O[M]=_;continue}else if(M==="transform"){CD(this,_,e);continue}}else M in f||(M=jo(M)||M);if(w||(g||g===0)&&(v||v===0)&&!uD.test(_)&&M in f)y=(d+"").substr((v+"").length),g||(g=0),x=Wn(_)||(M in Ri.units?Ri.units[M]:y),y!==x&&(v=Br(e,M,d,x)),this._pt=new ui(this._pt,w?O:f,M,v,(D?Oo(v,D+g):g)-v,!w&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?hD:Cm),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=fD);else if(M in f)MD.call(this,e,M,d,D?D+_:_);else if(M in e)this.add(e,M,d||e[M],D?D+_:_,o,l);else if(M!=="parseTransform"){Zm(M,_);continue}w||(M in f?F.push(M,0,f[M]):typeof e[M]=="function"?F.push(M,2,e[M]()):F.push(M,1,d||e[M])),c.push(M)}}L&&Oy(this)},render:function(e,n){if(n.tween._time||!s_())for(var a=n._pt;a;)a.r(e,a.d),a=a._next;else n.styles.revert()},get:Xa,aliases:_a,getSetter:function(e,n,a){var o=_a[n];return o&&o.indexOf(",")<0&&(n=o),n in Ka&&n!==ci&&(e._gsap.x||Xa(e,"x"))?a&&lS===a?n==="scale"?_D:mD:(lS=a||{})&&(n==="scale"?gD:vD):e.style&&!Wm(e.style[n])?dD:~n.indexOf("-")?pD:i_(e,n)},core:{_removeProperty:ws,_getMatrix:l_}};fi.utils.checkPrefix=jo;fi.core.getStyleSaver=Fy;(function(s,e,n,a){var o=li(s+","+e+","+n,function(l){Ka[l]=1});li(e,function(l){Ri.units[l]="deg",ky[l]=1}),_a[o[13]]=s+","+e,li(a,function(l){var c=l.split(":");_a[c[1]]=o[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ri.units[s]="px"});fi.registerPlugin(Wy);var Nm=fi.registerPlugin(Wy)||fi;Nm.core.Tween;const wD=({text:s,as:e="div",typingSpeed:n=50,initialDelay:a=0,pauseDuration:o=2e3,deletingSpeed:l=30,loop:c=!0,className:f="",showCursor:p=!0,hideCursorWhileTyping:d=!1,cursorCharacter:_="|",cursorClassName:g="",cursorBlinkDuration:v=.5,textColors:S=[],variableSpeed:T,onSentenceComplete:M,startOnVisible:y=!1,reverseMode:x=!1,...D})=>{const[w,R]=ct.useState(""),[O,P]=ct.useState(0),[L,F]=ct.useState(!1),[b,N]=ct.useState(0),[H,j]=ct.useState(!y),J=ct.useRef(null),oe=ct.useRef(null),X=ct.useMemo(()=>Array.isArray(s)?s:[s],[s]),z=ct.useCallback(()=>{if(!T)return n;const{min:ce,max:_e}=T;return Math.random()*(_e-ce)+ce},[T,n]),G=()=>S.length===0?"#ffffff":S[b%S.length];ct.useEffect(()=>{if(!y||!oe.current)return;const ce=new IntersectionObserver(_e=>{_e.forEach(B=>{B.isIntersecting&&j(!0)})},{threshold:.1});return ce.observe(oe.current),()=>ce.disconnect()},[y]),ct.useEffect(()=>{p&&J.current&&(Nm.set(J.current,{opacity:1}),Nm.to(J.current,{opacity:0,duration:v,repeat:-1,yoyo:!0,ease:"power2.inOut"}))},[p,v]),ct.useEffect(()=>{if(!H)return;let ce;const _e=X[b],B=x?_e.split("").reverse().join(""):_e,$=()=>{if(L)if(w===""){if(F(!1),b===X.length-1&&!c)return;M&&M(X[b],b),N(ve=>(ve+1)%X.length),P(0),ce=setTimeout(()=>{},o)}else ce=setTimeout(()=>{R(ve=>ve.slice(0,-1))},l);else O<B.length?ce=setTimeout(()=>{R(ve=>ve+B[O]),P(ve=>ve+1)},T?z():n):X.length>1&&(ce=setTimeout(()=>{F(!0)},o))};return O===0&&!L&&w===""?ce=setTimeout($,a):$(),()=>clearTimeout(ce)},[O,w,L,n,l,o,X,b,c,a,H,x,T,M]);const q=d&&(O<X[b].length||L);return ct.createElement(e,{ref:oe,className:`inline-block whitespace-pre-wrap tracking-tight ${f}`,...D},Te.jsx("span",{className:"inline",style:{color:G()},children:w}),p&&Te.jsx("span",{ref:J,className:`ml-1 inline-block opacity-100 ${q?"hidden":""} ${g}`,children:_}))},DD="/StarMobile/assets/team-CiY9y1r8.jpeg",UD="/StarMobile/assets/robot-Bsrn8KhJ.jpeg",lf={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},ND=s=>typeof s=="number"?`${s}px`:s??void 0,Rr=(...s)=>s.filter(Boolean).join(" "),LD=(s,e,n)=>{ct.useEffect(()=>{if(!window.ResizeObserver){const o=()=>s();return window.addEventListener("resize",o),s(),()=>window.removeEventListener("resize",o)}const a=e.map(o=>{if(!o.current)return null;const l=new ResizeObserver(s);return l.observe(o.current),l});return s(),()=>{a.forEach(o=>o?.disconnect())}},n)},OD=(s,e,n)=>{ct.useEffect(()=>{const a=s.current?.querySelectorAll("img")??[];if(a.length===0){e();return}let o=a.length;const l=()=>{o-=1,o===0&&e()};return a.forEach(c=>{const f=c;f.complete?l():(f.addEventListener("load",l,{once:!0}),f.addEventListener("error",l,{once:!0}))}),()=>{a.forEach(c=>{c.removeEventListener("load",l),c.removeEventListener("error",l)})}},n)},PD=(s,e,n,a,o)=>{const l=ct.useRef(null),c=ct.useRef(null),f=ct.useRef(0),p=ct.useRef(0);ct.useEffect(()=>{const d=s.current;if(!d)return;const _=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(n>0&&(f.current=(f.current%n+n)%n,d.style.transform=`translate3d(${-f.current}px, 0, 0)`),_)return d.style.transform="translate3d(0, 0, 0)",()=>{c.current=null};const g=v=>{c.current===null&&(c.current=v);const S=Math.max(0,v-c.current)/1e3;c.current=v;const T=o&&a?0:e,M=1-Math.exp(-S/lf.SMOOTH_TAU);if(p.current+=(T-p.current)*M,n>0){let y=f.current+p.current*S;y=(y%n+n)%n,f.current=y;const x=-f.current;d.style.transform=`translate3d(${x}px, 0, 0)`}l.current=requestAnimationFrame(g)};return l.current=requestAnimationFrame(g),()=>{l.current!==null&&(cancelAnimationFrame(l.current),l.current=null),c.current=null}},[e,n,a,o])},Yy=iT.memo(({logos:s,speed:e=120,direction:n="left",width:a="100%",logoHeight:o=28,gap:l=32,pauseOnHover:c=!0,fadeOut:f=!1,fadeOutColor:p,scaleOnHover:d=!1,ariaLabel:_="Partner logos",className:g,style:v})=>{const S=ct.useRef(null),T=ct.useRef(null),M=ct.useRef(null),[y,x]=ct.useState(0),[D,w]=ct.useState(lf.MIN_COPIES),[R,O]=ct.useState(!1),P=ct.useMemo(()=>{const X=Math.abs(e),z=n==="left"?1:-1,G=e<0?-1:1;return X*z*G},[e,n]),L=ct.useCallback(()=>{const X=S.current?.clientWidth??0,z=M.current?.getBoundingClientRect?.()?.width??0;if(z>0){x(Math.ceil(z));const G=Math.ceil(X/z)+lf.COPY_HEADROOM;w(Math.max(lf.MIN_COPIES,G))}},[]);LD(L,[S,M],[s,l,o]),OD(M,L,[s,l,o]),PD(T,P,y,R,c);const F=ct.useMemo(()=>({"--logoloop-gap":`${l}px`,"--logoloop-logoHeight":`${o}px`,...p&&{"--logoloop-fadeColor":p}}),[l,o,p]),b=ct.useMemo(()=>Rr("relative overflow-x-hidden group","[--logoloop-gap:32px]","[--logoloop-logoHeight:28px]","[--logoloop-fadeColorAuto:#ffffff]","dark:[--logoloop-fadeColorAuto:#0b0b0b]",d&&"py-[calc(var(--logoloop-logoHeight)*0.1)]",g),[d,g]),N=ct.useCallback(()=>{c&&O(!0)},[c]),H=ct.useCallback(()=>{c&&O(!1)},[c]),j=ct.useCallback((X,z)=>{const G="node"in X,q=G?Te.jsx("span",{className:Rr("inline-flex items-center","motion-reduce:transition-none",d&&"transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),"aria-hidden":!!X.href&&!X.ariaLabel,children:X.node}):Te.jsx("img",{className:Rr("h-[var(--logoloop-logoHeight)] w-auto block object-contain","[-webkit-user-drag:none] pointer-events-none","[image-rendering:-webkit-optimize-contrast]","motion-reduce:transition-none",d&&"transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),src:X.src,srcSet:X.srcSet,sizes:X.sizes,width:X.width,height:X.height,alt:X.alt??"",title:X.title,loading:"lazy",decoding:"async",draggable:!1}),ce=G?X.ariaLabel??X.title:X.alt??X.title,_e=X.href?Te.jsx("a",{className:Rr("inline-flex items-center no-underline rounded","transition-opacity duration-200 ease-linear","hover:opacity-80","focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"),href:X.href,"aria-label":ce||"logo link",target:"_blank",rel:"noreferrer noopener",children:q}):q;return Te.jsx("li",{className:Rr("flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",d&&"overflow-visible group/item"),role:"listitem",children:_e},z)},[d]),J=ct.useMemo(()=>Array.from({length:D},(X,z)=>Te.jsx("ul",{className:"flex items-center",role:"list","aria-hidden":z>0,ref:z===0?M:void 0,children:s.map((G,q)=>j(G,`${z}-${q}`))},`copy-${z}`)),[D,s,j]),oe=ct.useMemo(()=>({width:ND(a)??"100%",...F,...v}),[a,F,v]);return Te.jsxs("div",{ref:S,className:b,style:oe,role:"region","aria-label":_,onMouseEnter:N,onMouseLeave:H,children:[f&&Te.jsxs(Te.Fragment,{children:[Te.jsx("div",{"aria-hidden":!0,className:Rr("pointer-events-none absolute inset-y-0 left-0 z-[1]","w-[clamp(24px,8%,120px)]","bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")}),Te.jsx("div",{"aria-hidden":!0,className:Rr("pointer-events-none absolute inset-y-0 right-0 z-[1]","w-[clamp(24px,8%,120px)]","bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")})]}),Te.jsx("div",{className:Rr("flex w-max will-change-transform select-none","motion-reduce:transform-none"),ref:T,children:J})]})});Yy.displayName="LogoLoop";const zD="/StarMobile/assets/spon-yRVgxqrT.svg",BD=[{src:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",alt:"Vite",href:"https://vitejs.dev"},{src:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",alt:"React",href:"https://react.dev/"},{src:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg",alt:"Android Studio",href:"https://developer.android.com/studio"},{src:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Kotlin_icon_%282021-present%29.svg",alt:"Kotlin",href:"https://kotlinlang.org/"},{src:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",alt:"TailwindCSS",href:"https://tailwindcss.com/"},{src:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",alt:"Python",href:"https://www.python.org/"},{src:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/github-light.webp",alt:"GitHub",href:"https://github.com/home"},{src:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/git.webp",alt:"Git",href:"https://git-scm.com/"}];function ID(){return Te.jsxs(Te.Fragment,{children:[Te.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 p-1 backdrop-blur-sm",children:Te.jsxs("div",{className:"text-white bg-transparent flex h-15 w-full justify-center items-center",children:[Te.jsx("div",{className:"bg-transparent flex w-full h-full justify-start items-center",children:Te.jsx("button",{className:"bg-zinc-900 py-2 px-4 rounded-full",children:"Resources"})}),Te.jsx("div",{className:"bg-transparent flex w-full h-full justify-center items-center",children:Te.jsx("button",{className:"bg-linear-to-r from-violet-900 via-indigo-800 to-indigo-700 py-2 px-4 rounded-full",children:"Donate"})}),Te.jsx("div",{className:"bg-transparent flex w-full h-full justify-end items-center",children:Te.jsx("button",{className:"bg-zinc-900 py-2 px-4 rounded-full",children:"Contact"})})]})}),Te.jsxs("div",{className:"w-screen h-screen bg-zinc-950 flex flex-col relative",children:[Te.jsx("div",{className:"absolute inset-0 z-0",children:Te.jsx(Qc,{variant:"circle",pixelSize:3,color:"#B19EEF",patternScale:8,patternDensity:.6,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.6,edgeFade:.25,transparent:!0})}),Te.jsxs("div",{className:"w-full h-full bg-transparent flex flex-col flex-3 relative z-10 justify-center items-center",children:[Te.jsx("img",{className:"w-100 mr-7 mt-4",src:fT,alt:""}),Te.jsxs("div",{className:"bg-transparent  w-full relative z-10 flex flex-row justify-center items-end flex-1 h-full",children:[Te.jsx("p",{className:"text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-violet-600 font-extrabold",children:">_"}),Te.jsx(wD,{className:"text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-widest",text:[" Think It. Build It. Innovate."," Change The Game"],typingSpeed:120,pauseDuration:3500,showCursor:!0,cursorCharacter:"▌",cursorClassName:"text-violet-600"})]})]}),Te.jsx("div",{className:"w-full flex flex-1 relative z-10 h-full bg-transparent"}),Te.jsx("div",{className:"w-full flex flex-1 relative z-10 h-full bg-transparent"})]}),Te.jsxs("div",{className:"w-screen h-screen bg-zinc-950 flex flex-col relative",children:[Te.jsx("div",{className:"absolute inset-0 z-0",children:Te.jsx(Qc,{variant:"circle",pixelSize:3,color:"#B19EEF",patternScale:8,patternDensity:.6,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.6,edgeFade:.25,transparent:!0})}),Te.jsx("div",{className:"w-screen h-30 bg-transparent relative z-10"}),Te.jsx("div",{className:"w-screen h-40 p-20 bg-transparent flex justify-center items-center relative z-10",children:Te.jsx("div",{className:"w-screen h-20 border-l-4 border-r-4 border-indigo-600 flex justify-center items-center backdrop-blur-lg rounded-full",children:Te.jsx("p",{className:"text-zinc-100 text-2xl tracking-widest",children:"Our Mission"})})}),Te.jsx("div",{className:"w-screen h-full p-5 flex justify-center rounded-4xl items-start bg-transparent relative z-10",children:Te.jsx("p",{className:"text-white backdrop-blur-xs",children:"We are a passionate and dedicated group of students who share a common interest in engineering, innovation, and, of course, robots! From design and fabrication to coding and strategy, each member brings unique skills and perspectives to the team. We're not just building machines; we're building friendships, learning valuable lessons, and creating unforgettable experiences as we tackle exciting challenges in the world of robotics competitions. We're proud of our teamwork and the spirit of collaboration that drives us to learn, grow, and achieve our goals, one robot at a time."})}),Te.jsx("div",{className:"w-screen h-full flex justify-center items-center bg-transparent relative z-10",children:Te.jsx("img",{className:"w-100 rounded-4xl",src:DD,alt:""})})]}),Te.jsxs("div",{className:"bg-zinc-950 w-screen h-screen flex flex-col relative",children:[Te.jsx("div",{className:"absolute inset-0 z-0",children:Te.jsx(Qc,{variant:"circle",pixelSize:3,color:"#B19EEF",patternScale:8,patternDensity:.6,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.6,edgeFade:.25,transparent:!0})}),Te.jsx("div",{className:"w-screen h-40 bg-transparent relative z-10"}),Te.jsxs("div",{className:"w-full h-120 flex flex-col justify-center items-center bg-transparent relative z-10",children:[Te.jsx("p",{className:"text-violet-400 text-3xl tracking-widest",children:"Creativity"}),Te.jsx("p",{className:"text-zinc-100 text-2xl tracking-wide",children:"meets"}),Te.jsx("p",{className:"text-indigo-400 text-3xl tracking-widest",children:"Professionalism"})]}),Te.jsxs("div",{className:"w-full h-full flex flex-col justify-start items-center bg-transparent relative z-10",children:[Te.jsx("div",{className:"w-screen flex justify-start items-center p-5 h-40 bg-transparent",children:Te.jsx("p",{className:"text-white",children:"Our Design Team is using Fusion 360 as their workhorse, a profesional 3D CAD software enabling us to deliver precision in each of our robots systems design."})}),Te.jsx("img",{className:"w-70 rounded-4xl border-t-4 border-b-4 border-zinc-950",src:UD,alt:""})]}),Te.jsxs("div",{className:"w-full h-full flex flex-col justify-start items-center bg-transparent relative z-10",children:[Te.jsx("div",{className:"w-screen flex justify-start items-center p-5 h-40 bg-transparent",children:Te.jsx("p",{className:"text-white",children:"Our Programming team works hard on embeded systems as the robot and web development using latest tech soulutions and making sure every code source meets professional criteria."})}),Te.jsx(Yy,{className:"mt-10",logos:BD,speed:60,direction:"left",logoHeight:48,gap:40,pauseOnHover:!0,scaleOnHover:!0,fadeOut:!0,fadeOutColor:"#000000ff",ariaLabel:"Technology partners"})]})]}),Te.jsxs("div",{className:"w-screen h-screen bg-zinc-950 flex flex-col relative",children:[Te.jsx("div",{className:"absolute inset-0 z-0",children:Te.jsx(Qc,{variant:"circle",pixelSize:3,color:"#B19EEF",patternScale:8,patternDensity:.6,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.4,rippleThickness:.12,rippleIntensityScale:1.5,liquidStrength:.12,liquidRadius:1.2,liquidWobbleSpeed:5,speed:.6,edgeFade:.25,transparent:!0})}),Te.jsx("div",{className:"w-full h-20 bg-transparent relative z-10"}),Te.jsx("div",{className:"w-full h-5 bg-transparent relative z-10"}),Te.jsx("div",{className:"w-full h-20 bg-transparent flex justify-center items-center text-white/70 relative z-10",children:Te.jsx("p",{className:"text-xl tracking-widest",children:"Presented To You By"})}),Te.jsx("div",{className:"w-full h-20 bg-transparent flex justify-center items-center text-white relative z-10",children:Te.jsx("p",{className:"text-2xl tracking-widest",children:"The Star B1T0 Robotics Team"})}),Te.jsx("div",{className:"w-full h-5 bg-transparent relative z-10"}),Te.jsxs("div",{className:"w-full h-15 bg-transparent flex flex-col justify-center items-center relative z-10",children:[Te.jsx("p",{className:"text-indigo-300 text-xl",children:"Pavel Oarga"}),Te.jsx("p",{className:"text-violet-400 text-xl",children:"Code Wizard & Team Lead"})]}),Te.jsx("div",{className:"w-full h-5 bg-transparent relative z-10"}),Te.jsxs("div",{className:"w-full h-15 bg-transparent flex flex-col justify-center items-center relative z-10",children:[Te.jsx("p",{className:"text-indigo-300 text-xl",children:"Bogdan Andrei Cernat"}),Te.jsx("p",{className:"text-violet-400 text-xl",children:"Design Master & Team Lead"})]}),Te.jsx("div",{className:"w-full h-10 bg-transparent relative z-10"}),Te.jsxs("div",{className:"w-full h-20 bg-transparent flex flex-col justify-center items-center relative z-10",children:[Te.jsx("p",{className:"text-white text-xl",children:"Miheea Calaban | Ana Filimon"}),Te.jsx("p",{className:"text-white text-xl",children:"Dragos Constandin"}),Te.jsx("p",{className:"text-zinc-200 text-xl",children:"--Programming--"})]}),Te.jsx("div",{className:"w-full h-10 bg-transparent relative z-10"}),Te.jsxs("div",{className:"w-full h-15 bg-transparent flex flex-col justify-center items-center relative z-10",children:[Te.jsx("p",{className:"text-white text-xl",children:"Matei Riurean"}),Te.jsx("p",{className:"text-white text-xl",children:"--Design--"})]}),Te.jsx("div",{className:"w-full h-10 bg-transparent relative z-10"}),Te.jsxs("div",{className:"w-full h-20 bg-transparent flex flex-col justify-center items-center relative z-10",children:[Te.jsx("p",{className:"text-white text-xl",children:"Ana Gabriela Petru | Mihai Ioan Grosu"}),Te.jsx("p",{className:"text-white text-xl",children:"Bogdan Bragar"}),Te.jsx("p",{className:"text-white text-xl",children:"--Assembly--"})]}),Te.jsx("div",{className:"w-full h-40 bg-transparent flex flex-row justify-center items-center relative z-10",children:Te.jsx("img",{className:"w-35",src:zD,alt:""})})]})]})}cT.createRoot(document.getElementById("root")).render(Te.jsx(ct.StrictMode,{children:Te.jsx(ID,{})}));
