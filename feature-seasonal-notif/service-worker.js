if(!self.define){let f,e={};const d=(d,a)=>(d=new URL(d+".js",a).href,e[d]||new Promise((e=>{if("document"in self){const f=document.createElement("script");f.src=d,f.onload=e,document.head.appendChild(f)}else f=d,importScripts(d),e()})).then((()=>{let f=e[d];if(!f)throw new Error(`Module ${d} didn’t register its module`);return f})));self.define=(a,i)=>{const s=f||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let r={};const c=f=>d(f,s),b={module:{uri:s},exports:r,require:c};e[s]=Promise.all(a.map((f=>b[f]||c(f)))).then((f=>(i(...f),r)))}}define(["./workbox-ad8011fb"],(function(f){"use strict";self.skipWaiting(),f.clientsClaim(),f.precacheAndRoute([{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/binaries/stremio_core_web_bg.wasm",revision:"5d5a54011393577e0df464c97ff1e453"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/scripts/main.js",revision:"2f035596b1fd35839e04b6b388b24bb4"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/scripts/worker.js",revision:"4d0dc66f8b572f3a9c91bfda95ce6ed5"},{url:"f89c185d30b7f9f7a5f3a494e765fde343df206f/styles/main.css",revision:"91c1ea2afe2c4ecd276c27d858c80fdd"},{url:"index.html",revision:"132ba0a6b87aa7af04fc5dbfa81d85fe"}],{})}));
//# sourceMappingURL=service-worker.js.map
