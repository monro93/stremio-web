(()=>{var e={56553:(e,t,n)=>{"use strict";var r=n(69926),o=r(n(33167)),a=r(n(15016));e.exports=function(e,t){t.addEventListener("message",(function(){var n=(0,a.default)(o.default.mark((function n(r){var a,i,u,c,f,s,_;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.data.request){n.next=3;break}return n.abrupt("return");case 3:if(i=a.id,u=a.path,c=a.args,n.prev=4,"function"!=typeof(f=u.reduce((function(e,t){return e[t]}),e))){n.next=13;break}return _=u.slice(0,u.length-1).reduce((function(e,t){return e[t]}),e),n.next=10,f.apply(_,c);case 10:s=n.sent,n.next=16;break;case 13:return n.next=15,f;case 15:s=n.sent;case 16:t.postMessage({response:{id:i,result:{data:s}}}),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(4),t.postMessage({response:{id:i,result:{error:n.t0}}});case 22:case"end":return n.stop()}}),n,null,[[4,19]])})));return function(e){return n.apply(this,arguments)}})()),this.call=(function(){var e=(0,a.default)(o.default.mark((function e(n,r){var a;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Math.random().toString(32).slice(2),e.abrupt("return",new Promise((function(e,o){t.addEventListener("message",(function n(r){var i=r.data.response;i&&i.id===a&&(t.removeEventListener("message",n),"error"in i.result?o(i.result.error):e(i.result.data))})),t.postMessage({request:{id:a,path:n,args:r}})})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})()}},6489:(e,t,n)=>{"use strict";var r=n(69926);Object.defineProperty(t,"__esModule",{value:!0}),t.analytics=function(e,t){o.analytics(k(e),k(t))},t.decode_stream=function(e){return l(o.decode_stream(k(e)))},t.default=void 0,t.dispatch=function(e,t,n){o.dispatch(k(e),k(t),k(n))},t.get_state=function(e){return l(o.get_state(k(e)))},t.initialize_runtime=function(e){return l(o.initialize_runtime(k(e)))},t.start=function(){o.start()};var o,a=r(n(33167)),i=r(n(15016)),u=r(n(97606)),c={url:new URL("/stremio_core_web.js",document.baseURI).href},f=new Array(32).fill(void 0);function s(e){return f[e]}f.push(void 0,null,!0,!1);var _=f.length;function l(e){var t=s(e);return(function(e){e<36||(f[e]=_,_=e)})(e),t}var b=0,g=null;function w(){return null!==g&&g.buffer===o.memory.buffer||(g=new Uint8Array(o.memory.buffer)),g}var d=new TextEncoder("utf-8"),p="function"==typeof d.encodeInto?function(e,t){return d.encodeInto(e,t)}:function(e,t){var n=d.encode(e);return t.set(n),{read:e.length,written:n.length}};function h(e,t,n){if(void 0===n){var r=d.encode(e),o=t(r.length);return w().subarray(o,o+r.length).set(r),b=r.length,o}for(var a=e.length,i=t(a),u=w(),c=0;c<a;c++){var f=e.charCodeAt(c);if(f>127)break;u[i+c]=f}if(c!==a){0!==c&&(e=e.slice(c)),i=n(i,a,a=c+3*e.length);var s=w().subarray(i+c,i+a);c+=p(e,s).written}return b=c,i}function y(e){return null==e}var v=null;function m(){return null!==v&&v.buffer===o.memory.buffer||(v=new Int32Array(o.memory.buffer)),v}var x=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function E(e,t){return x.decode(w().subarray(e,e+t))}function k(e){_===f.length&&f.push(f.length+1);var t=_;return _=f[t],f[t]=e,t}function S(e){var t=(0,u.default)(e);if("number"==t||"boolean"==t||null==e)return"".concat(e);if("string"==t)return'"'.concat(e,'"');if("symbol"==t){var n=e.description;return null==n?"Symbol":"Symbol(".concat(n,")")}if("function"==t){var r=e.name;return"string"==typeof r&&r.length>0?"Function(".concat(r,")"):"Function"}if(Array.isArray(e)){var o=e.length,a="[";o>0&&(a+=S(e[0]));for(var i=1;i<o;i++)a+=", "+S(e[i]);return a+="]"}var c,f=/\[object ([^\]]+)\]/.exec(toString.call(e));if(!(f.length>1))return toString.call(e);if("Object"==(c=f[1]))try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?"".concat(e.name,": ").concat(e.message,"\n").concat(e.stack):c}function L(e,t,n,r){var a={a:e,b:t,cnt:1,dtor:n},i=function(){a.cnt++;var e=a.a;a.a=0;try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.apply(void 0,[e,a.b].concat(n))}finally{0==--a.cnt?o.__wbindgen_export_2.get(a.dtor)(e,a.b):a.a=e}};return i.original=a,i}function j(e,t){o.wasm_bindgen__convert__closures__invoke0_mut__hcb46d0e3524f5281(e,t)}function O(e,t,n){o.wasm_bindgen__convert__closures__invoke1_mut__h177fef84445a9618(e,t,k(n))}function A(e,t){try{return e.apply(this,t)}catch(e){o.__wbindgen_exn_store(k(e))}}function R(e,t,n,r){o.wasm_bindgen__convert__closures__invoke2_mut__h2eb3760f61d7b7e4(e,t,k(n),k(r))}function T(e,t){return I.apply(this,arguments)}function I(){return(I=(0,i.default)(a.default.mark((function e(t,n){var r,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("function"==typeof Response&&t instanceof Response)){e.next=23;break}if("function"!=typeof WebAssembly.instantiateStreaming){e.next=15;break}return e.prev=2,e.next=5,WebAssembly.instantiateStreaming(t,n);case 5:case 20:return e.abrupt("return",e.sent);case 8:if(e.prev=8,e.t0=e.catch(2),"application/wasm"==t.headers.get("Content-Type")){e.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e.t0),e.next=15;break;case 14:throw e.t0;case 15:return e.next=17,t.arrayBuffer();case 17:return r=e.sent,e.next=20,WebAssembly.instantiate(r,n);case 23:return e.next=25,WebAssembly.instantiate(t,n);case 25:if(!((o=e.sent)instanceof WebAssembly.Instance)){e.next=30;break}return e.abrupt("return",{instance:o,module:t});case 30:return e.abrupt("return",o);case 31:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function P(e){return M.apply(this,arguments)}function M(){return M=(0,i.default)(a.default.mark((function e(t){var r,i,f,_;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=new URL("stremio_core_web_bg.wasm",c.url)),(r={}).wbg={},r.wbg.__wbg_setInterval_a02797f5ab1c7eb1=function(){return A((function(e,t,n){return s(e).setInterval(s(t),n)}),arguments)},r.wbg.__wbindgen_object_drop_ref=function(e){l(e)},r.wbg.__wbg_instanceof_Response_e1b11afbefa5b563=function(e){return s(e)instanceof Response},r.wbg.__wbg_status_6d8bb444ddc5a7b2=function(e){return s(e).status},r.wbg.__wbg_json_88cc6d5cf8f61121=function(){return A((function(e){return k(s(e).json())}),arguments)},r.wbg.__wbindgen_is_undefined=function(e){return void 0===s(e)},r.wbg.__wbg_stringify_d4507a59932eed0c=function(){return A((function(e){return k(JSON.stringify(s(e)))}),arguments)},r.wbg.__wbg_localstoragegetitem_a1cfc9f94b305838=function(){return A((function(e,t){try{return k(self.local_storage_get_item(E(e,t)))}finally{o.__wbindgen_free(e,t)}}),arguments)},r.wbg.__wbindgen_string_get=function(e,t){var n=s(t),r="string"==typeof n?n:void 0,a=y(r)?0:h(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=b;m()[e/4+1]=i,m()[e/4+0]=a},r.wbg.__wbindgen_string_new=function(e,t){return k(E(e,t))},r.wbg.__wbg_new_0b83d3df67ecb33e=function(){return k(new Object)},r.wbg.__wbg_newwithstrandinit_9b0fa00478c37287=function(){return A((function(e,t,n){return k(new Request(E(e,t),s(n)))}),arguments)},r.wbg.__wbg_fetch_b4e81012e07ff95a=function(e,t){return k(s(e).fetch(s(t)))},r.wbg.__wbg_call_346669c262382ad7=function(){return A((function(e,t,n){return k(s(e).call(s(t),s(n)))}),arguments)},r.wbg.__wbg_new0_fd3a3a290b25cdac=function(){return k(new Date)},r.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8=function(e){return s(e).getTimezoneOffset()},r.wbg.__wbg_new_693216e109162396=function(){return k(new Error)},r.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,t){var n=h(s(t).stack,o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;m()[e/4+1]=r,m()[e/4+0]=n},r.wbg.__wbg_error_09919627ac0992f5=function(e,t){try{console.error(E(e,t))}finally{o.__wbindgen_free(e,t)}},r.wbg.__wbg_crypto_0e9b639eaff47699=function(e){return k(s(e).crypto)},r.wbg.__wbindgen_is_object=function(e){var t=s(e);return"object"===(0,u.default)(t)&&null!==t},r.wbg.__wbg_process_c1e9ac005dd29bbc=function(e){return k(s(e).process)},r.wbg.__wbg_versions_6850926753fc88df=function(e){return k(s(e).versions)},r.wbg.__wbg_node_c8026099e4c8fb6f=function(e){return k(s(e).node)},r.wbg.__wbindgen_is_string=function(e){return"string"==typeof s(e)},r.wbg.__wbg_require_39d411311735f255=function(){return A((function(){return k(_.require)}),arguments)},r.wbg.__wbindgen_is_function=function(e){return"function"==typeof s(e)},r.wbg.__wbg_msCrypto_558ee59e36bf4331=function(e){return k(s(e).msCrypto)},r.wbg.__wbg_newwithlength_929232475839a482=function(e){return k(new Uint8Array(e>>>0))},r.wbg.__wbindgen_object_clone_ref=function(e){return k(s(e))},r.wbg.__wbg_self_c6fbdfc2918d5e58=function(){return A((function(){return k(self.self)}),arguments)},r.wbg.__wbg_window_baec038b5ab35c54=function(){return A((function(){return k(window.window)}),arguments)},r.wbg.__wbg_globalThis_3f735a5746d41fbd=function(){return A((function(){return k(globalThis.globalThis)}),arguments)},r.wbg.__wbg_global_1bc0b39582740e95=function(){return A((function(){return k(n.g.global)}),arguments)},r.wbg.__wbg_newnoargs_be86524d73f67598=function(e,t){return k(new Function(E(e,t)))},r.wbg.__wbg_call_888d259a5fefc347=function(){return A((function(e,t){return k(s(e).call(s(t)))}),arguments)},r.wbg.__wbg_set_82a4e8a85e31ac42=function(){return A((function(e,t,n){return Reflect.set(s(e),s(t),s(n))}),arguments)},r.wbg.__wbg_now_af172eabe2e041ad=function(){return Date.now()},r.wbg.__wbg_instanceof_Error_561efcb1265706d8=function(e){return s(e)instanceof Error},r.wbg.__wbg_message_9f7d15ff97fc4102=function(e){return k(s(e).message)},r.wbg.__wbg_instanceof_WorkerGlobalScope_f191ca0158f5637b=function(e){return s(e)instanceof WorkerGlobalScope},r.wbg.__wbindgen_memory=function(){return k(o.memory)},r.wbg.__wbg_buffer_397eaa4d72ee94dd=function(e){return k(s(e).buffer)},r.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff=function(e,t,n){return k(new Uint8Array(s(e),t>>>0,n>>>0))},r.wbg.__wbg_randomFillSync_f8d4e42f84f40e2a=function(){return A((function(e,t){s(e).randomFillSync(l(t))}),arguments)},r.wbg.__wbg_subarray_8b658422a224f479=function(e,t,n){return k(s(e).subarray(t>>>0,n>>>0))},r.wbg.__wbg_getRandomValues_3af6527bb0405f8f=function(){return A((function(e,t){s(e).getRandomValues(s(t))}),arguments)},r.wbg.__wbg_new_a7ce447f15ff496f=function(e){return k(new Uint8Array(s(e)))},r.wbg.__wbg_set_969ad0a60e51d320=function(e,t,n){s(e).set(s(t),n>>>0)},r.wbg.__wbg_parse_ccb2cd4fe8ead0cb=function(){return A((function(e,t){return k(JSON.parse(E(e,t)))}),arguments)},r.wbg.__wbg_navigator_8bc0889cda8f8500=function(e){return k(s(e).navigator)},r.wbg.__wbg_language_cd6e22892ba36a1f=function(e,t){var n=s(t).language,r=y(n)?0:h(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=b;m()[e/4+1]=a,m()[e/4+0]=r},r.wbg.__wbg_static_accessor_SHELL_VERSION_6d62fc58b4571290=function(e){var t=self.shell_version,n=y(t)?0:h(t,o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;m()[e/4+1]=r,m()[e/4+0]=n},r.wbg.__wbg_static_accessor_APP_VERSION_905d1e64f33cecb3=function(e){var t=h(self.app_version,o.__wbindgen_malloc,o.__wbindgen_realloc),n=b;m()[e/4+1]=n,m()[e/4+0]=t},r.wbg.__wbg_new_b1d61b5687f5e73a=function(e,t){try{var n={a:e,b:t},r=new Promise((function(e,t){var r=n.a;n.a=0;try{return R(r,n.b,e,t)}finally{n.a=r}}));return k(r)}finally{n.a=n.b=0}},r.wbg.__wbg_getlocationhash_7599a13e744e49e1=function(){return A((function(){return k(self.get_location_hash())}),arguments)},r.wbg.__wbg_localstoragesetitem_1446025c0e3ce210=function(){return A((function(e,t,n,r){try{return k(self.local_storage_set_item(E(e,t),E(n,r)))}finally{o.__wbindgen_free(e,t),o.__wbindgen_free(n,r)}}),arguments)},r.wbg.__wbg_localstorageremoveitem_b2bb2128ae04268c=function(){return A((function(e,t){try{return k(self.local_storage_remove_item(E(e,t)))}finally{o.__wbindgen_free(e,t)}}),arguments)},r.wbg.__wbg_mark_abc7631bdced64f0=function(e,t){performance.mark(E(e,t))},r.wbg.__wbg_log_02e20a3c32305fb7=function(e,t){try{console.log(E(e,t))}finally{o.__wbindgen_free(e,t)}},r.wbg.__wbg_log_5c7513aa8c164502=function(e,t,n,r,a,i,u,c){try{console.log(E(e,t),E(n,r),E(a,i),E(u,c))}finally{o.__wbindgen_free(e,t)}},r.wbg.__wbg_measure_c528ff64085b7146=function(){return A((function(e,t,n,r){try{performance.measure(E(e,t),E(n,r))}finally{o.__wbindgen_free(e,t),o.__wbindgen_free(n,r)}}),arguments)},r.wbg.__wbindgen_debug_string=function(e,t){var n=h(S(s(t)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;m()[e/4+1]=r,m()[e/4+0]=n},r.wbg.__wbindgen_throw=function(e,t){throw new Error(E(e,t))},r.wbg.__wbindgen_cb_drop=function(e){var t=l(e).original;if(1==t.cnt--)return t.a=0,!0;return!1},r.wbg.__wbg_then_2fcac196782070cc=function(e,t){return k(s(e).then(s(t)))},r.wbg.__wbg_then_8c2d62e8ae5978f7=function(e,t,n){return k(s(e).then(s(t),s(n)))},r.wbg.__wbg_resolve_d23068002f584f22=function(e){return k(Promise.resolve(s(e)))},r.wbg.__wbindgen_closure_wrapper136=function(e,t,n){return k(L(e,t,178,j))},r.wbg.__wbindgen_closure_wrapper5231=function(e,t,n){return k(L(e,t,178,O))},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t)),e.t0=T,e.next=77,t;case 77:return e.t1=e.sent,e.t2=r,e.next=81,(0,e.t0)(e.t1,e.t2);case 81:return i=e.sent,f=i.instance,_=i.module,o=f.exports,P.__wbindgen_wasm_module=_,o.__wbindgen_start(),e.abrupt("return",o);case 88:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}x.decode();t.default=P},36310:(e,t,n)=>{"use strict";e.exports=n.p+"31041b62a8522086444414067256cb8a37510eb3/binaries/stremio_core_web_bg.wasm"},15016:e=>{function t(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function u(e){t(i,o,a,u,c,"next",e)}function c(e){t(i,o,a,u,c,"throw",e)}u(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},69926:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},49685:(e,t,n)=>{var r=n(97606).default;function o(){"use strict";e.exports=o=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var t,n={},a=Object.prototype,i=a.hasOwnProperty,u=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},f=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",_=c.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(t){l=function(e,t,n){return e[t]=n}}function b(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new I(r||[]);return u(a,"_invoke",{value:O(e,n,i)}),a}function g(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=b;var w="suspendedStart",d="executing",p="completed",h={};function y(){}function v(){}function m(){}var x={};l(x,f,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(P([])));k&&k!==a&&i.call(k,f)&&(x=k);var S=m.prototype=y.prototype=Object.create(x);function L(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function n(o,a,u,c){var f=g(e[o],e,a);if("throw"!==f.type){var s=f.arg,_=s.value;return _&&"object"==r(_)&&i.call(_,"__await")?t.resolve(_.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):t.resolve(_).then((function(e){s.value=e,u(s)}),(function(e){return n("throw",e,u,c)}))}c(f.arg)}var o;u(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}})}function O(e,n,r){var o=w;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===p){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var u=r.delegate;if(u){var c=A(u,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===w)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var f=g(e,n,r);if("normal"===f.type){if(o=r.done?p:"suspendedYield",f.arg===h)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=p,r.method="throw",r.arg=f.arg)}}}function A(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=g(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[f];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(i.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return v.prototype=m,u(S,"constructor",{value:m,configurable:!0}),u(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,_,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,_,"GeneratorFunction")),e.prototype=Object.create(S),e},n.awrap=function(e){return{__await:e}},L(j.prototype),l(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new j(b(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(S),l(S,_,"Generator"),l(S,f,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=P,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),f=i.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},n}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},97606:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},33167:(e,t,n)=>{var r=n(49685)();e.exports=r;try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.g=(function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),(()=>{"use strict";var e=n(69926),t=e(n(33167)),r=e(n(15016)),o=new(n(56553))(self,self);self.init=(function(){var e=(0,r.default)(t.default.mark((function e(a){var i,u,c,f,s,_,l,b,g,w;return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.appVersion,u=a.shellVersion,self.document={baseURI:self.location.href},self.app_version=i,self.shell_version=u,self.get_location_hash=(0,r.default)(t.default.mark((function e(){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["location","hash"],[]));case 1:case"end":return e.stop()}}),e)}))),self.local_storage_get_item=(function(){var e=(0,r.default)(t.default.mark((function e(n){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["localStorage","getItem"],[n]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})(),self.local_storage_set_item=(function(){var e=(0,r.default)(t.default.mark((function e(n,r){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["localStorage","setItem"],[n,r]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})(),self.local_storage_remove_item=(function(){var e=(0,r.default)(t.default.mark((function e(n){return t.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.call(["localStorage","removeItem"],[n]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})(),c=n(6489),f=c.default,s=c.initialize_runtime,_=c.get_state,l=c.get_debug_state,b=c.dispatch,g=c.analytics,w=c.decode_stream,self.getState=_,self.getDebugState=l,self.dispatch=b,self.analytics=g,self.decodeStream=w,e.next=16,f(n(36310));case 16:return e.next=18,s((function(e){return o.call(["onCoreEvent"],[e])}));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()})()})();
//# sourceMappingURL=worker.js.map