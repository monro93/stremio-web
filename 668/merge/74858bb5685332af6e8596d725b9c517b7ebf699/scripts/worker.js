(()=>{var t={56553:(t,e,n)=>{"use strict";var r=n(69926),o=r(n(33167)),a=r(n(15016));t.exports=function(t,e){e.addEventListener("message",(function(){var n=(0,a.default)(o.default.mark((function n(r){var a,i,u,c,f,s,_;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.data.request){n.next=3;break}return n.abrupt("return");case 3:if(i=a.id,u=a.path,c=a.args,n.prev=4,"function"!=typeof(f=u.reduce((function(t,e){return t[e]}),t))){n.next=13;break}return _=u.slice(0,u.length-1).reduce((function(t,e){return t[e]}),t),n.next=10,f.apply(_,c);case 10:s=n.sent,n.next=16;break;case 13:return n.next=15,f;case 15:s=n.sent;case 16:e.postMessage({response:{id:i,result:{data:s}}}),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(4),e.postMessage({response:{id:i,result:{error:n.t0}}});case 22:case"end":return n.stop()}}),n,null,[[4,19]])})));return function(t){return n.apply(this,arguments)}})()),this.call=(function(){var t=(0,a.default)(o.default.mark((function t(n,r){var a;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Math.random().toString(32).slice(2),t.abrupt("return",new Promise((function(t,o){e.addEventListener("message",(function n(r){var i=r.data.response;i&&i.id===a&&(e.removeEventListener("message",n),"error"in i.result?o(i.result.error):t(i.result.data))})),e.postMessage({request:{id:a,path:n,args:r}})})));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}})()}},6489:(t,e,n)=>{"use strict";var r=n(69926);Object.defineProperty(e,"__esModule",{value:!0}),e.analytics=function(t,e){o.analytics(p(t),p(e))},e.decode_stream=function(t){return S(o.decode_stream(p(t)))},e.default=void 0,e.dispatch=function(t,e,n){o.dispatch(p(t),p(e),p(n))},e.get_debug_state=function(){return S(o.get_debug_state())},e.get_state=function(t){return S(o.get_state(p(t)))},e.initialize_runtime=function(t){return S(o.initialize_runtime(p(t)))},e.start=function(){o.start()};var o,a=r(n(33167)),i=r(n(15016)),u=r(n(97606)),c={url:new URL("/stremio_core_web.js",document.baseURI).href},f=new Array(32).fill(void 0);function s(t){return f[t]}function _(t){if("boolean"!=typeof t)throw new Error("expected a boolean argument")}f.push(void 0,null,!0,!1);var l=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();var b=null;function g(){return null!==b&&b.buffer===o.memory.buffer||(b=new Uint8Array(o.memory.buffer)),b}function d(t,e){return l.decode(g().subarray(t,t+e))}var w=f.length;function p(t){w===f.length&&f.push(f.length+1);var e=w;if("number"!=typeof(w=f[e]))throw new Error("corrupt heap");return f[e]=t,e}var h=0,y=new TextEncoder("utf-8"),v="function"==typeof y.encodeInto?function(t,e){return y.encodeInto(t,e)}:function(t,e){var n=y.encode(t);return e.set(n),{read:t.length,written:n.length}};function m(t,e,n){if("string"!=typeof t)throw new Error("expected a string argument");if(void 0===n){var r=y.encode(t),o=e(r.length);return g().subarray(o,o+r.length).set(r),h=r.length,o}for(var a=t.length,i=e(a),u=g(),c=0;c<a;c++){var f=t.charCodeAt(c);if(f>127)break;u[i+c]=f}if(c!==a){0!==c&&(t=t.slice(c)),i=n(i,a,a=c+3*t.length);var s=g().subarray(i+c,i+a),_=v(t,s);if(_.read!==t.length)throw new Error("failed to pass whole string");c+=_.written}return h=c,i}function x(t){return null==t}var E=null;function k(){return null!==E&&E.buffer===o.memory.buffer||(E=new Int32Array(o.memory.buffer)),E}function S(t){var e=s(t);return(function(t){t<36||(f[t]=w,w=t)})(t),e}function L(t){var e=(0,u.default)(t);if("number"==e||"boolean"==e||null==t)return"".concat(t);if("string"==e)return'"'.concat(t,'"');if("symbol"==e){var n=t.description;return null==n?"Symbol":"Symbol(".concat(n,")")}if("function"==e){var r=t.name;return"string"==typeof r&&r.length>0?"Function(".concat(r,")"):"Function"}if(Array.isArray(t)){var o=t.length,a="[";o>0&&(a+=L(t[0]));for(var i=1;i<o;i++)a+=", "+L(t[i]);return a+="]"}var c,f=/\[object ([^\]]+)\]/.exec(toString.call(t));if(!(f.length>1))return toString.call(t);if("Object"==(c=f[1]))try{return"Object("+JSON.stringify(t)+")"}catch(t){return"Object"}return t instanceof Error?"".concat(t.name,": ").concat(t.message,"\n").concat(t.stack):c}function O(t,e,n,r){var a={a:t,b:e,cnt:1,dtor:n},i=function(){a.cnt++;var t=a.a;a.a=0;try{for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(void 0,[t,a.b].concat(n))}finally{0==--a.cnt?o.__wbindgen_export_2.get(a.dtor)(t,a.b):a.a=t}};return i.original=a,i}function j(t,e){try{return t.apply(this,e)}catch(t){var n=(function(){try{return t instanceof Error?"".concat(t.message,"\n\nStack:\n").concat(t.stack):t.toString()}catch(t){return"<failed to stringify thrown value>"}})();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",n),t}}function R(t){if("number"!=typeof t)throw new Error("expected a number argument")}function A(t,e){R(t),R(e),o._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc654a4ef21ec5426(t,e)}function T(t,e,n){R(t),R(e),o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e134e16129d39bd(t,e,p(n))}function I(t,e){try{return t.apply(this,e)}catch(t){o.__wbindgen_exn_store(p(t))}}function M(t,e,n,r){R(t),R(e),o.wasm_bindgen__convert__closures__invoke2_mut__ha7f0cfeaad30c31b(t,e,p(n),p(r))}function P(t,e){return F.apply(this,arguments)}function F(){return(F=(0,i.default)(a.default.mark((function t(e,n){var r,o;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("function"==typeof Response&&e instanceof Response)){t.next=23;break}if("function"!=typeof WebAssembly.instantiateStreaming){t.next=15;break}return t.prev=2,t.next=5,WebAssembly.instantiateStreaming(e,n);case 5:case 20:return t.abrupt("return",t.sent);case 8:if(t.prev=8,t.t0=t.catch(2),"application/wasm"==e.headers.get("Content-Type")){t.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t.t0),t.next=15;break;case 14:throw t.t0;case 15:return t.next=17,e.arrayBuffer();case 17:return r=t.sent,t.next=20,WebAssembly.instantiate(r,n);case 23:return t.next=25,WebAssembly.instantiate(e,n);case 25:if(!((o=t.sent)instanceof WebAssembly.Instance)){t.next=30;break}return t.abrupt("return",{instance:o,module:e});case 30:return t.abrupt("return",o);case 31:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}function N(t){return W.apply(this,arguments)}function W(){return W=(0,i.default)(a.default.mark((function t(e){var r,i,f,l;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===e&&(e=new URL("stremio_core_web_bg.wasm",c.url)),(r={}).wbg={},r.wbg.__wbindgen_is_undefined=function(t){var e=void 0===s(t);return _(e),e},r.wbg.__wbindgen_string_new=function(t,e){return p(d(t,e))},r.wbg.__wbindgen_string_get=function(t,e){var n=s(e),r="string"==typeof n?n:void 0,a=x(r)?0:m(r,o.__wbindgen_malloc,o.__wbindgen_realloc),i=h;k()[t/4+1]=i,k()[t/4+0]=a},r.wbg.__wbg_static_accessor_APP_VERSION_0022585bb05cb8e0=function(){return j((function(t){var e=m(self.app_version,o.__wbindgen_malloc,o.__wbindgen_realloc),n=h;k()[t/4+1]=n,k()[t/4+0]=e}),arguments)},r.wbg.__wbg_static_accessor_SHELL_VERSION_03be13e14504a2db=function(){return j((function(t){var e=self.shell_version,n=x(e)?0:m(e,o.__wbindgen_malloc,o.__wbindgen_realloc),r=h;k()[t/4+1]=r,k()[t/4+0]=n}),arguments)},r.wbg.__wbg_getlocationhash_9096a9401df544ca=function(){return I((function(){return p(self.get_location_hash())}),arguments)},r.wbg.__wbg_localstoragegetitem_9eea25e2c28ed101=function(){return I((function(t,e){try{return p(self.local_storage_get_item(d(t,e)))}finally{o.__wbindgen_free(t,e)}}),arguments)},r.wbg.__wbg_localstoragesetitem_55b40999064d750b=function(){return I((function(t,e,n,r){try{return p(self.local_storage_set_item(d(t,e),d(n,r)))}finally{o.__wbindgen_free(t,e),o.__wbindgen_free(n,r)}}),arguments)},r.wbg.__wbg_localstorageremoveitem_79f09971be24d85e=function(){return I((function(t,e){try{return p(self.local_storage_remove_item(d(t,e)))}finally{o.__wbindgen_free(t,e)}}),arguments)},r.wbg.__wbindgen_object_drop_ref=function(t){S(t)},r.wbg.__wbg_error_09919627ac0992f5=function(){return j((function(t,e){try{console.error(d(t,e))}finally{o.__wbindgen_free(t,e)}}),arguments)},r.wbg.__wbg_new_693216e109162396=function(){return j((function(){return p(new Error)}),arguments)},r.wbg.__wbg_stack_0ddaca5d1abfb52f=function(){return j((function(t,e){var n=m(s(e).stack,o.__wbindgen_malloc,o.__wbindgen_realloc),r=h;k()[t/4+1]=r,k()[t/4+0]=n}),arguments)},r.wbg.__wbindgen_is_object=function(t){var e=s(t),n="object"===(0,u.default)(e)&&null!==e;return _(n),n},r.wbg.__wbindgen_is_string=function(t){var e="string"==typeof s(t);return _(e),e},r.wbg.__wbg_crypto_1dc1c51d9d27e0dd=function(){return j((function(t){return p(s(t).crypto)}),arguments)},r.wbg.__wbg_msCrypto_4ef1b0e1cd4cedbb=function(){return j((function(t){return p(s(t).msCrypto)}),arguments)},r.wbg.__wbg_getRandomValues_3293819ebec805bc=function(){return I((function(t,e){s(t).getRandomValues(s(e))}),arguments)},r.wbg.__wbg_randomFillSync_d84d19ffc1d700ed=function(){return I((function(t,e){s(t).randomFillSync(S(e))}),arguments)},r.wbg.__wbg_require_3f60396135018b0f=function(){return I((function(){return p(l.require)}),arguments)},r.wbg.__wbg_process_65edac0b2f0a8427=function(){return j((function(t){return p(s(t).process)}),arguments)},r.wbg.__wbg_versions_0d0eed1c1b42b216=function(){return j((function(t){return p(s(t).versions)}),arguments)},r.wbg.__wbg_node_82761bdd6eaac7e7=function(){return j((function(t){return p(s(t).node)}),arguments)},r.wbg.__wbg_mark_abc7631bdced64f0=function(){return j((function(t,e){performance.mark(d(t,e))}),arguments)},r.wbg.__wbg_measure_c528ff64085b7146=function(){return I((function(t,e,n,r){try{performance.measure(d(t,e),d(n,r))}finally{o.__wbindgen_free(t,e),o.__wbindgen_free(n,r)}}),arguments)},r.wbg.__wbg_log_02e20a3c32305fb7=function(){return j((function(t,e){try{console.log(d(t,e))}finally{o.__wbindgen_free(t,e)}}),arguments)},r.wbg.__wbg_log_5c7513aa8c164502=function(){return j((function(t,e,n,r,a,i,u,c){try{console.log(d(t,e),d(n,r),d(a,i),d(u,c))}finally{o.__wbindgen_free(t,e)}}),arguments)},r.wbg.__wbindgen_cb_drop=function(t){var e=S(t).original;if(1==e.cnt--)return e.a=0,!0;return _(false),false},r.wbg.__wbindgen_object_clone_ref=function(t){return p(s(t))},r.wbg.__wbg_newwithstrandinit_9b0fa00478c37287=function(){return I((function(t,e,n){return p(new Request(d(t,e),s(n)))}),arguments)},r.wbg.__wbg_instanceof_Response_e1b11afbefa5b563=function(){return j((function(t){var e=s(t)instanceof Response;return _(e),e}),arguments)},r.wbg.__wbg_status_6d8bb444ddc5a7b2=function(){return j((function(t){var e=s(t).status;return R(e),e}),arguments)},r.wbg.__wbg_text_8279d34d73e43c68=function(){return I((function(t){return p(s(t).text())}),arguments)},r.wbg.__wbg_language_cd6e22892ba36a1f=function(){return j((function(t,e){var n=s(e).language,r=x(n)?0:m(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=h;k()[t/4+1]=a,k()[t/4+0]=r}),arguments)},r.wbg.__wbg_log_3445347661d4505e=function(){return j((function(t){console.log(s(t))}),arguments)},r.wbg.__wbg_instanceof_WorkerGlobalScope_f191ca0158f5637b=function(){return j((function(t){var e=s(t)instanceof WorkerGlobalScope;return _(e),e}),arguments)},r.wbg.__wbg_navigator_8bc0889cda8f8500=function(){return j((function(t){return p(s(t).navigator)}),arguments)},r.wbg.__wbg_fetch_b4e81012e07ff95a=function(){return j((function(t,e){return p(s(t).fetch(s(e)))}),arguments)},r.wbg.__wbg_setInterval_a02797f5ab1c7eb1=function(){return I((function(t,e,n){var r=s(t).setInterval(s(e),n);return R(r),r}),arguments)},r.wbg.__wbindgen_number_new=function(t){return p(t)},r.wbg.__wbg_instanceof_Error_561efcb1265706d8=function(){return j((function(t){var e=s(t)instanceof Error;return _(e),e}),arguments)},r.wbg.__wbg_message_9f7d15ff97fc4102=function(){return j((function(t){return p(s(t).message)}),arguments)},r.wbg.__wbg_newnoargs_be86524d73f67598=function(){return j((function(t,e){return p(new Function(d(t,e)))}),arguments)},r.wbg.__wbg_call_888d259a5fefc347=function(){return I((function(t,e){return p(s(t).call(s(e)))}),arguments)},r.wbg.__wbg_call_346669c262382ad7=function(){return I((function(t,e,n){return p(s(t).call(s(e),s(n)))}),arguments)},r.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8=function(){return j((function(t){return s(t).getTimezoneOffset()}),arguments)},r.wbg.__wbg_new_f11872bb9bb9d781=function(){return j((function(t){return p(new Date(s(t)))}),arguments)},r.wbg.__wbg_now_af172eabe2e041ad=function(){return j((function(){return Date.now()}),arguments)},r.wbg.__wbg_new_0b83d3df67ecb33e=function(){return j((function(){return p(new Object)}),arguments)},r.wbg.__wbg_new_b1d61b5687f5e73a=function(){return j((function(t,e){try{var n={a:t,b:e},r=new Promise((function(t,e){var r=n.a;n.a=0;try{return M(r,n.b,t,e)}finally{n.a=r}}));return p(r)}finally{n.a=n.b=0}}),arguments)},r.wbg.__wbg_resolve_d23068002f584f22=function(){return j((function(t){return p(Promise.resolve(s(t)))}),arguments)},r.wbg.__wbg_then_2fcac196782070cc=function(){return j((function(t,e){return p(s(t).then(s(e)))}),arguments)},r.wbg.__wbg_then_8c2d62e8ae5978f7=function(){return j((function(t,e,n){return p(s(t).then(s(e),s(n)))}),arguments)},r.wbg.__wbg_globalThis_3f735a5746d41fbd=function(){return I((function(){return p(globalThis.globalThis)}),arguments)},r.wbg.__wbg_self_c6fbdfc2918d5e58=function(){return I((function(){return p(self.self)}),arguments)},r.wbg.__wbg_window_baec038b5ab35c54=function(){return I((function(){return p(window.window)}),arguments)},r.wbg.__wbg_global_1bc0b39582740e95=function(){return I((function(){return p(n.g.global)}),arguments)},r.wbg.__wbg_new_a7ce447f15ff496f=function(){return j((function(t){return p(new Uint8Array(s(t)))}),arguments)},r.wbg.__wbg_newwithlength_929232475839a482=function(){return j((function(t){return p(new Uint8Array(t>>>0))}),arguments)},r.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff=function(){return j((function(t,e,n){return p(new Uint8Array(s(t),e>>>0,n>>>0))}),arguments)},r.wbg.__wbg_subarray_8b658422a224f479=function(){return j((function(t,e,n){return p(s(t).subarray(e>>>0,n>>>0))}),arguments)},r.wbg.__wbg_set_969ad0a60e51d320=function(){return j((function(t,e,n){s(t).set(s(e),n>>>0)}),arguments)},r.wbg.__wbindgen_is_function=function(t){var e="function"==typeof s(t);return _(e),e},r.wbg.__wbg_buffer_397eaa4d72ee94dd=function(){return j((function(t){return p(s(t).buffer)}),arguments)},r.wbg.__wbg_parse_ccb2cd4fe8ead0cb=function(){return I((function(t,e){return p(JSON.parse(d(t,e)))}),arguments)},r.wbg.__wbg_stringify_d4507a59932eed0c=function(){return I((function(t){return p(JSON.stringify(s(t)))}),arguments)},r.wbg.__wbg_set_82a4e8a85e31ac42=function(){return I((function(t,e,n){var r=Reflect.set(s(t),s(e),s(n));return _(r),r}),arguments)},r.wbg.__wbindgen_debug_string=function(t,e){var n=m(L(s(e)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=h;k()[t/4+1]=r,k()[t/4+0]=n},r.wbg.__wbindgen_throw=function(t,e){throw new Error(d(t,e))},r.wbg.__wbindgen_memory=function(){return p(o.memory)},r.wbg.__wbindgen_closure_wrapper26535=function(){return j((function(t,e,n){return p(O(t,e,1179,A))}),arguments)},r.wbg.__wbindgen_closure_wrapper40338=function(){return j((function(t,e,n){return p(O(t,e,1582,T))}),arguments)},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),t.t0=P,t.next=79,e;case 79:return t.t1=t.sent,t.t2=r,t.next=83,(0,t.t0)(t.t1,t.t2);case 83:return i=t.sent,f=i.instance,l=i.module,o=f.exports,N.__wbindgen_wasm_module=l,o.__wbindgen_start(),t.abrupt("return",o);case 90:case"end":return t.stop()}}),t)}))),W.apply(this,arguments)}e.default=N},36310:(t,e,n)=>{"use strict";t.exports=n.p+"74858bb5685332af6e8596d725b9c517b7ebf699/binaries/stremio_core_web_bg.wasm"},15016:t=>{function e(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function u(t){e(i,o,a,u,c,"next",t)}function c(t){e(i,o,a,u,c,"throw",t)}u(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},69926:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},49685:(t,e,n)=>{var r=n(97606).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},a=Object.prototype,i=a.hasOwnProperty,u=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},f=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",_=c.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,n){return t[e]=n}}function b(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new I(r||[]);return u(a,"_invoke",{value:j(t,n,i)}),a}function g(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=b;var d="suspendedStart",w="executing",p="completed",h={};function y(){}function v(){}function m(){}var x={};l(x,f,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(M([])));k&&k!==a&&i.call(k,f)&&(x=k);var S=m.prototype=y.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,u,c){var f=g(t[o],t,a);if("throw"!==f.type){var s=f.arg,_=s.value;return _&&"object"==r(_)&&i.call(_,"__await")?e.resolve(_.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(_).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(f.arg)}var o;u(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function j(t,n,r){var o=d;return function(a,i){if(o===w)throw Error("Generator is already running");if(o===p){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var u=r.delegate;if(u){var c=R(u,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=w;var f=g(t,n,r);if("normal"===f.type){if(o=r.done?p:"suspendedYield",f.arg===h)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=p,r.method="throw",r.arg=f.arg)}}}function R(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,R(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=g(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function M(t){if(t||""===t){var n=t[f];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(i.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(r(t)+" is not iterable")}return v.prototype=m,u(S,"constructor",{value:m,configurable:!0}),u(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,_,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,_,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},L(O.prototype),l(O.prototype,s,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new O(b(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(S),l(S,_,"Generator"),l(S,f,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=M,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),f=i.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},97606:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},33167:(t,e,n)=>{var r=n(49685)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.g=(function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}})(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../../"})(),(()=>{"use strict";var t=n(69926),e=t(n(33167)),r=t(n(15016)),o=new(n(56553))(self,self);self.init=(function(){var t=(0,r.default)(e.default.mark((function t(a){var i,u,c,f,s,_,l,b,g,d;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a.appVersion,u=a.shellVersion,self.document={baseURI:self.location.href},self.app_version=i,self.shell_version=u,self.get_location_hash=(0,r.default)(e.default.mark((function t(){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.call(["location","hash"],[]));case 1:case"end":return t.stop()}}),t)}))),self.local_storage_get_item=(function(){var t=(0,r.default)(e.default.mark((function t(n){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.call(["localStorage","getItem"],[n]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})(),self.local_storage_set_item=(function(){var t=(0,r.default)(e.default.mark((function t(n,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.call(["localStorage","setItem"],[n,r]));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}})(),self.local_storage_remove_item=(function(){var t=(0,r.default)(e.default.mark((function t(n){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.call(["localStorage","removeItem"],[n]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})(),c=n(6489),f=c.default,s=c.initialize_runtime,_=c.get_state,l=c.get_debug_state,b=c.dispatch,g=c.analytics,d=c.decode_stream,self.getState=_,self.getDebugState=l,self.dispatch=b,self.analytics=g,self.decodeStream=d,t.next=16,f(n(36310));case 16:return t.next=18,s((function(t){return o.call(["onCoreEvent"],[t])}));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()})()})();
//# sourceMappingURL=worker.js.map