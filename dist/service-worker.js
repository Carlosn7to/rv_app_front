if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const t=e=>i(e,o),u={module:{uri:o},exports:l,require:t};n[o]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(s(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.09a95dd5.css",revision:null},{url:"/img/foguete.c622bd6c.png",revision:null},{url:"/img/logo.png",revision:"1413f17e0f2de901594f978b89fa122f"},{url:"/img/logo_azul_laranja.28283efc.png",revision:null},{url:"/img/triste.c6b48314.png",revision:null},{url:"/index.html",revision:"50ab100af822b746e477b5d7aa7d7458"},{url:"/js/app.41dd353e.js",revision:null},{url:"/js/chunk-vendors.5f408171.js",revision:null},{url:"/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
