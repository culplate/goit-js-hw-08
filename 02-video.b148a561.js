var e,t,n,r,o,i,a,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){y(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,o){var i,a,u=Object.create((t&&t.prototype instanceof h?t:h).prototype);return r(u,"_invoke",{value:(i=new T(o||[]),a="suspendedStart",function(t,r){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw r;return j()}for(i.method=t,i.arg=r;;){var o=i.delegate;if(o){var u=function e(t,n){var r=n.method,o=t.iterator[r];if(void 0===o)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,e(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+r+"' method")),d;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(o,i);if(u){if(u===d)continue;return u}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===a)throw a="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a="executing";var c=f(e,n,i);if("normal"===c.type){if(a=i.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(a="completed",i.method="throw",i.arg=c.arg)}})}),u}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function h(){}function p(){}function v(){}var y={};c(y,i,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==t&&n.call(g,i)&&(y=g);var b=v.prototype=h.prototype=Object.create(y);function w(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var o;r(this,"_invoke",{value:function(r,i){function a(){return new t(function(o,a){!function r(o,i,a,u){var c=f(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,a,u)},function(e){r("throw",e,a,u)}):t.resolve(s).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,u)})}u(c.arg)}(r,i,o,a)})}return o=o?o.then(a,a):a()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,r(b,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:p,configurable:!0}),p.displayName=c(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(k.prototype),c(k.prototype,a,function(){return this}),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),c(b,u,"Generator"),c(b,i,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function f(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){n(e);return}u.done?t(c):Promise.resolve(c).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,u,"next",e)}function u(e){f(i,r,o,a,u,"throw",e)}a(void 0)})}}function h(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function v(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function b(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function w(e,t,n){return(w=b()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&g(o,n.prototype),o}).apply(null,arguments)}function k(e){var t="function"==typeof Map?new Map:void 0;return(k=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return w(e,arguments,m(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,e)})(e)}function E(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}/**
 * @module lib/functions
 *//**
 * Check to see this is a node environment.
 * @type {Boolean}
 *//* global global */var T=void 0!==u&&"[object global]"===({}).toString.call(u);/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */function P(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */function j(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */function O(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(!isNaN(parseFloat(r))&&isFinite(r)&&Math.floor(r)==r)return"https://vimeo.com/".concat(r);if(j(r))return r.replace("http:","https:");if(t)throw TypeError("“".concat(t,"” is not a valid video id."));throw TypeError("“".concat(r,"” is not a vimeo.com url."))}/* eslint-disable max-params *//**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */var S=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"addEventListener",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"removeEventListener",i="string"==typeof t?[t]:t;return i.forEach(function(t){e[r](t,n)}),{cancel:function(){return i.forEach(function(t){return e[o](t,n)})}}},M=void 0!==Array.prototype.indexOf,C="undefined"!=typeof window&&void 0!==window.postMessage;if(!T&&(!M||!C))throw Error("Sorry, the Vimeo Player API is not available in this browser.");var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==u?u:"undefined"!=typeof self?self:{};!/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{// Avoid IE8's broken Object.defineProperty
return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){// ECMA-262 23.3 WeakMap Objects
function e(){if(void 0===this)throw TypeError("Constructor WeakMap requires 'new'");// ECMA-262 23.3.1.1 WeakMap([iterable])
if(r(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw TypeError(n+" method called on incompatible receiver "+typeof e)}function i(){return Math.random().toString().substring(2)}return(// ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
r(e.prototype,"delete",function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!!t&&t[0]===e&&(delete e[this._id],!0)}),// ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
r(e.prototype,"get",function(e){if(n(this,"get"),o(e)){var t=e[this._id];if(t&&t[0]===e)return t[1]}}),// ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
r(e.prototype,"has",function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!!t&&t[0]===e}),// ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
r(e.prototype,"set",function(e,t){if(n(this,"set"),!o(e))throw TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?i[1]=t:r(e,this._id,[e,t]),this}),r(e,"_polyfill",!0),e)}()}function o(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:F);var N=(e=n={exports:{}},n.exports,// special form of UMD for polyfilling across evironments
F[t="Promise"]=F[t]||function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;// dammit, IE8.
try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}// promise duck typing
function a(e){var t,n=typeof e;return null!=e&&("object"==n||"function"==n)&&(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)// NOTE: This is a separate function to isolate
// the `try..catch` so that other code can be
// optimized better
(function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}})(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e){var t,n=this;// already triggered?
if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i(function(){var r=new f(n);try{t.call(e,function(){c.apply(r,arguments)},function(){l.apply(r,arguments)})}catch(e){l.call(r,e)}}):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(e){l.call(new f(n),e)}}}function l(e){var t=this;// already triggered?
!t.triggered&&(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function s(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function f(e){this.def=e,this.triggered=!1}function d(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");// instance shadowing the inherited "brand"
// to signal an already "initialized" promise
this.__NPO__=1;var t=new d(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return(// Note: `then(..)` itself can be borrowed to be used against
// a different promise constructor for making the chained promise,
// by substituting a different `this` binding.
r.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t}),t.chain.push(r),0!==t.state&&i(u,t),r.promise)},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){c.call(t,e)},function(e){l.call(t,e)})}catch(e){l.call(t,e)}}// Note: using a queue instead of array for efficiency
n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=e({},"constructor",h,/*configurable=*/!1);return(// Note: Android 4 cannot use `Object.defineProperty(..)` here
h.prototype=p,// built-in "brand" to signal an "uninitialized" promise
e(p,"__NPO__",0,/*configurable=*/!1),e(h,"resolve",function(e){return(// spec mandated checks
// note: best "isPromise" check that's practical for now
e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))}),e(h,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),e(h,"all",function(e){var t=this;return(// spec mandated checks
"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;s(t,e,function(e,t){i[e]=t,++a===o&&n(i)},r)}))}),e(h,"race",function(e){var t=this;return(// spec mandated checks
"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");s(t,e,function(e,t){n(t)},r)}))}),h)}(),e.exports&&(e.exports=F[t]),n.exports),L=new WeakMap;/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */function A(e,t,n){var r=L.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),L.set(e.element,r)}/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */function R(e,t){return(L.get(e.element)||{})[t]||[]}/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */function I(e,t,n){var r=L.get(e.element)||{};if(!r[t])return!0;// If no callback is passed, remove all callbacks for the event
if(!n)return r[t]=[],L.set(e.element,r),!0;var o=r[t].indexOf(n);return -1!==o&&r[t].splice(o,1),L.set(e.element,r),r[t]&&0===r[t].length}/**
 * @module lib/postmessage
 *//**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */function q(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return(// If the message cannot be parsed, throw the error as a warning
console.warn(e),{})}return e}/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */function V(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);// IE 8 and 9 do not support passing messages, so stringify them
var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}/**
 * @module lib/embed
 */var W=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W.reduce(function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t},t)}/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */function z(e,t){var n=e.html;if(!t)throw TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(r,o){if(!j(e))throw TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404===u.status){o(Error("“".concat(e,"” was not found.")));return}if(403===u.status){o(Error("“".concat(e,"” is not embeddable.")));return}try{var t=JSON.parse(u.responseText);// Check api response for 403 on oembed
if(403===t.domain_status_code){// We still want to create the embed to give users visual feedback
z(t,n),o(Error("“".concat(e,"” is not embeddable.")));return}r(t)}catch(e){o(e)}},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()})}/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls *//** @typedef {import('./timing-object.types').TimingObject} TimingObject *//** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions *//** @typedef {(msg: string) => any} Logger *//** @typedef {import('timing-object.types').TConnectionState} TConnectionState *//**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */var G={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},H=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(t=b(),function(){var e,n=m(a);if(t){var r=m(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return E(e)}(this,e)});/**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */function a(e,t){var n,r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3?arguments[3]:void 0;return h(this,a),y(E(r=i.call(this)),"logger",void 0),y(E(r),"speedAdjustment",0),/**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */y(E(r),"adjustSpeed",(n=d(/*#__PURE__*/s().mark(function e(t,n){var o;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.speedAdjustment!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getPlaybackRate();case 4:return e.t0=e.sent,e.t1=r.speedAdjustment,e.t2=e.t0-e.t1,e.t3=n,o=e.t2+e.t3,r.log("New playbackRate:  ".concat(o)),e.next=12,t.setPlaybackRate(o);case 12:r.speedAdjustment=n;case 13:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})),r.logger=u,r.init(t,e,l(l({},G),o)),r}return v(a,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:(n=d(/*#__PURE__*/s().mark(function e(t,n,r){var o,i,a,u=this;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitForTOReadyState(t,"open");case 2:if("viewer"!==r.role){e.next=10;break}return e.next=5,this.updatePlayer(t,n,r);case 5:o=S(t,"change",function(){return u.updatePlayer(t,n,r)}),i=this.maintainPlaybackPosition(t,n,r),this.addEventListener("disconnect",function(){i.cancel(),o.cancel()}),e.next=14;break;case 10:return e.next=12,this.updateTimingObject(t,n);case 12:a=S(n,["seeked","play","pause","ratechange"],function(){return u.updateTimingObject(t,n)},"on","off"),this.addEventListener("disconnect",function(){return a.cancel()});case 14:case"end":return e.stop()}},e,this)})),function(e,t,r){return n.apply(this,arguments)})},{key:"updateTimingObject",value:(r=d(/*#__PURE__*/s().mark(function e(t,n){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n.getCurrentTime();case 3:return e.t1=e.sent,e.next=6,n.getPaused();case 6:if(!e.sent){e.next=10;break}e.t2=0,e.next=13;break;case 10:return e.next=12,n.getPlaybackRate();case 12:e.t2=e.sent;case 13:e.t3=e.t2,e.t4={position:e.t1,velocity:e.t3},e.t0.update.call(e.t0,e.t4);case 16:case"end":return e.stop()}},e)})),function(e,t){return r.apply(this,arguments)})},{key:"updatePlayer",value:(o=d(/*#__PURE__*/s().mark(function e(t,n,r){var o,i,a;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(o=t.query()).position,a=o.velocity,"number"==typeof i&&n.setCurrentTime(i),"number"!=typeof a){e.next=25;break}if(0!==a){e.next=11;break}return e.next=6,n.getPaused();case 6:if(e.t0=e.sent,!1!==e.t0){e.next=9;break}n.pause();case 9:e.next=25;break;case 11:if(!(a>0)){e.next=25;break}return e.next=14,n.getPaused();case 14:if(e.t1=e.sent,!0!==e.t1){e.next=19;break}return e.next=18,n.play().catch(/*#__PURE__*/function(){var e=d(/*#__PURE__*/s().mark(function e(t){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NotAllowedError"===t.name&&r.autoPlayMuted)){e.next=5;break}return e.next=3,n.setMuted(!0);case 3:return e.next=5,n.play().catch(function(e){return console.error("Couldn't play the video from TimingSrcConnector. Error:",e)});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 18:this.updatePlayer(t,n,r);case 19:return e.next=21,n.getPlaybackRate();case 21:if(e.t2=e.sent,e.t3=a,!(e.t2!==e.t3)){e.next=25;break}n.setPlaybackRate(a);case 25:case"end":return e.stop()}},e,this)})),function(e,t,n){return o.apply(this,arguments)})},{key:"maintainPlaybackPosition",value:function(e,t,n){var r,o=this,i=n.allowedDrift,a=n.maxAllowedDrift,u=n.minCheckInterval,c=n.maxRateAdjustment,l=n.maxTimeToCatchUp,f=(r=d(/*#__PURE__*/s().mark(function n(){var r,u,f,d,h;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=0===e.query().velocity,n.t0){n.next=6;break}return n.next=4,t.getPaused();case 4:n.t1=n.sent,n.t0=!0===n.t1;case 6:if(!n.t0){n.next=8;break}return n.abrupt("return");case 8:return n.t2=e.query().position,n.next=11,t.getCurrentTime();case 11:if(n.t3=n.sent,u=Math.abs(r=n.t2-n.t3),o.log("Drift: ".concat(r)),!(u>a)){n.next=22;break}return n.next=18,o.adjustSpeed(t,0);case 18:t.setCurrentTime(e.query().position),o.log("Resync by currentTime"),n.next=29;break;case 22:if(!(u>i)){n.next=29;break}return h=(f=u/l)<(d=c)?(d-f)/2:d,n.next=28,o.adjustSpeed(t,h*Math.sign(r));case 28:o.log("Resync by playbackRate");case 29:case"end":return n.stop()}},n)})),function(){return r.apply(this,arguments)}),h=setInterval(function(){return f()},1e3*Math.min(l,Math.max(u,a)));return{cancel:function(){return clearInterval(h)}}}},{key:"log",value:function(e){var t;null===(t=this.logger)||void 0===t||t.call(this,"TimingSrcConnector: ".concat(e))}},{key:"waitForTOReadyState",value:/**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */function(e,t){return new Promise(function(n){!function r(){e.readyState===t?n():e.addEventListener("readystatechange",r,{once:!0})}()})}}]),a}(/*#__PURE__*/k(EventTarget)),Y=new WeakMap,$=new WeakMap,Q={},B=/*#__PURE__*/function(){var e;/**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */function t(e){var n,r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};// Not an element!
if(h(this,t),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"undefined"!=typeof document&&"string"==typeof e&&(e=document.getElementById(e)),!((n=e)&&1===n.nodeType&&"nodeName"in n&&n.ownerDocument&&n.ownerDocument.defaultView))throw TypeError("You must pass either a valid element or a valid id.");// Already initialized an embed in this div, so grab the iframe
if("IFRAME"!==e.nodeName){var i=e.querySelector("iframe");i&&(e=i)}// iframe url is not a Vimeo url
if("IFRAME"===e.nodeName&&!j(e.getAttribute("src")||""))throw Error("The player element passed isn’t a Vimeo embed.");// If there is already a player object in the map, return that
if(Y.has(e))return Y.get(e);this._window=e.ownerDocument.defaultView,this.element=e,this.origin="*";var a=new N(function(t,n){if(r._onMessage=function(e){if(j(e.origin)&&r.element.contentWindow===e.source){"*"===r.origin&&(r.origin=e.origin);var o=q(e.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=Error(o.data.message);i.name=o.data.name,n(i);return}var a=o&&"ready"===o.event,u=o&&"ping"===o.method;if(a||u){r.element.setAttribute("data-ready","true"),t();return}!/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */function(e,t){t=q(t);var n,r=[];if(t.event)"error"===t.event&&R(e,t.data.method).forEach(function(n){var r=Error(t.data.message);r.name=t.data.name,n.reject(r),I(e,t.data.method,n)}),r=R(e,"event:".concat(t.event)),n=t.data;else if(t.method){var o=/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */function(e,t){var n=R(e,t);if(n.length<1)return!1;var r=n.shift();return I(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach(function(t){try{if("function"==typeof t){t.call(e,n);return}t.resolve(n)}catch(e){// empty
}})}(r,o)}},r._window.addEventListener("message",r._onMessage),"IFRAME"!==r.element.nodeName){var i=D(e,o);U(_(i),i,e).then(function(t){var n,o,i=z(t,e);return(// Overwrite element with the new iframe,
// but store reference to the original element
r.element=i,r._originalElement=e,n=e,o=L.get(n),L.set(i,o),L.delete(n),Y.set(r.element,r),t)}).catch(n)}});if(// Store a copy of this Player in the map
$.set(this,a),Y.set(this.element,this),"IFRAME"===this.element.nodeName&&V(this,"ping"),Q.isEnabled){var u=function(){return Q.exit()};this.fullscreenchangeHandler=function(){Q.isFullscreen?A(r,"event:exitFullscreen",u):I(r,"event:exitFullscreen",u),// eslint-disable-next-line
r.ready().then(function(){V(r,"fullscreenchange",Q.isFullscreen)})},Q.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return(/**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */v(t,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new N(function(r,o){// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return t.ready().then(function(){A(t,e,{resolve:r,reject:o}),V(t,e,n)}).catch(o)})}},{key:"get",value:function(e){var t=this;return new N(function(n,r){// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return e=P(e,"get"),t.ready().then(function(){A(t,e,{resolve:n,reject:r}),V(t,e)}).catch(r)})}},{key:"set",value:function(e,t){var n=this;return new N(function(r,o){if(e=P(e,"set"),null==t)throw TypeError("There must be a value to set.");// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return n.ready().then(function(){A(n,e,{resolve:r,reject:o}),V(n,e,t)}).catch(o)})}},{key:"on",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(!t)throw TypeError("You must pass a callback function.");if("function"!=typeof t)throw TypeError("The callback must be a function.");0===R(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
}),A(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw TypeError("The callback must be a function.");// If there are no callbacks left, remove the listener
I(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=$.get(this)||new N(function(e,t){t(Error("Unknown player. Probably unloaded."))});return N.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return Q.isEnabled?Q.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return Q.isEnabled?Q.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return Q.isEnabled?N.resolve(Q.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new N(function(t){// If the clip is private there is a case where the element stays the
// div element. Destroy should reset the div and remove the iframe child.
if($.delete(e),Y.delete(e.element),e._originalElement&&(Y.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),Q.isEnabled&&Q.off("fullscreenchange",e.fullscreenchangeHandler),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return N.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"setColors",value:function(e){if(!Array.isArray(e))return new N(function(e,t){return t(TypeError("Argument must be an array."))});var t=new N(function(e){return e(null)}),n=[e[0]?this.set("colorOne",e[0]):t,e[1]?this.set("colorTwo",e[1]):t,e[2]?this.set("colorThree",e[2]):t,e[3]?this.set("colorFour",e[3]):t];return N.all(n)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}},{key:"setTimingSrc",value:(e=d(/*#__PURE__*/s().mark(function e(t,n){var r,o=this;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw TypeError("A Timing Object must be provided.");case 2:return e.next=4,this.ready();case 4:return r=new H(this,t,n),V(this,"notifyTimingObjectConnect"),r.addEventListener("disconnect",function(){return V(o,"notifyTimingObjectDisconnect")}),e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)})),function(t,n){return e.apply(this,arguments)})}]),t)}();T||(o={fullscreenchange:(r=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],// New WebKit
["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],// Old WebKit
["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}()).fullscreenchange,fullscreenerror:r.fullscreenerror},Object.defineProperties(i={request:function(e){return new Promise(function(t,n){var o=function e(){i.off("fullscreenchange",e),t()};i.on("fullscreenchange",o);var a=(e=e||document.documentElement)[r.requestFullscreen]();a instanceof Promise&&a.then(o).catch(n)})},exit:function(){return new Promise(function(e,t){if(!i.isFullscreen){e();return}var n=function t(){i.off("fullscreenchange",t),e()};i.on("fullscreenchange",n);var o=document[r.exitFullscreen]();o instanceof Promise&&o.then(n).catch(t)})},on:function(e,t){var n=o[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=o[e];n&&document.removeEventListener(n,t)}},{isFullscreen:{get:function(){return!!document[r.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){// Coerce to boolean in case of old WebKit
return!!document[r.fullscreenEnabled]}}}),Q=i,/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(e){try{// Skip any that have data-vimeo-defer
if(null!==e.getAttribute("data-vimeo-defer"))return;var t=D(e),r=_(t);U(r,t,e).then(function(t){return z(t,e)}).catch(n)}catch(e){n(e)}})}(),/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;// Prevent execution if users include the player.js script multiple times.
window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(t){if(j(t.origin)&&t.data&&"spacechange"===t.data.event){for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}}}))}(),/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;//  Prevent execution if users include the player.js script multiple times.
window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",function(t){if(j(t.origin)){var n=q(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;O(i.src)&&a&&new B(i).callMethod("appendVideoMetadata",window.location.href)}}}))}(),/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;//  Prevent execution if users include the player.js script multiple times.
if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))};window.addEventListener("message",function(n){if(j(n.origin)){var r=q(n.data);if(r&&"ready"===r.event)for(var o=e.querySelectorAll("iframe"),i=0;i<o.length;i++)!function(){var e=o[i],r=e.contentWindow===n.source;if(O(e.src)&&r){var a=new B(e);a.getVideoId().then(function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var n=decodeURI(t[1]);a.setCurrentTime(n)}}).catch(t)}}()}})}}());var J={},X="Expected a function",K=0/0,Z=/^\s+|\s+$/g,ee=/^[-+]0x[0-9a-f]+$/i,et=/^0b[01]+$/i,en=/^0o[0-7]+$/i,er=parseInt,eo="object"==typeof u&&u&&u.Object===Object&&u,ei="object"==typeof self&&self&&self.Object===Object&&self,ea=eo||ei||Function("return this")(),eu=Object.prototype.toString,ec=Math.max,el=Math.min,es=function(){return ea.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function ef(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function ed(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==eu.call(t))return K;if(ef(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=ef(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Z,"");var r=et.test(e);return r||en.test(e)?er(e.slice(2),r?2:8):ee.test(e)?K:+e}J=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(X);return ef(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var r,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw TypeError(X);function h(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function p(e){var n=e-c,r=e-l;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===c||n>=t||n<0||f&&r>=i}function v(){var e,n,r,o=es();if(p(o))return y(o);// Restart the timer.
u=setTimeout(v,(e=o-c,n=o-l,r=t-e,f?el(r,i-n):r))}function y(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(u=void 0,d&&r)?h(e):(r=o=void 0,a))}function m(){var e,n=es(),i=p(n);if(r=arguments,o=this,c=n,i){if(void 0===u)return(// Reset any `maxWait` timer.
l=e=c,// Start the timer for the trailing edge.
u=setTimeout(v,t),s?h(e):a);if(f)return(// Handle invocations in a tight loop.
u=setTimeout(v,t),h(c))}return void 0===u&&(u=setTimeout(v,t)),a}return t=ed(t)||0,ef(n)&&(s=!!n.leading,i=(f="maxWait"in n)?ec(ed(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},m.flush=function(){return void 0===u?a:y(es())},m}(e,t,{leading:r,maxWait:t,trailing:o})};const eh=document.querySelector("iframe"),ep=new B(eh),ev=((a=J)&&a.__esModule?a.default:a)(({seconds:e})=>{localStorage.setItem("videoplayer-current-time",e)},1e3);ep.on("loaded",function(){// new version, to be tested | WTF
let e=localStorage.getItem("videoplayer-current-time");null!=e&&ep.setCurrentTime(+e)}),ep.on("timeupdate",ev);//# sourceMappingURL=02-video.b148a561.js.map

//# sourceMappingURL=02-video.b148a561.js.map
