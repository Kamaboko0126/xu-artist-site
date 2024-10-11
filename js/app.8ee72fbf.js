(function(){"use strict";var e={1406:function(e,n,t){t.a(e,(async function(e,n){try{var o=t(5130),r=t(6832),a=t(9325);const e=(0,o.Ef)(r.A).use(a.A);await a.A.isReady(),e.mount("#app"),n()}catch(i){n(i)}}),1)},9325:function(e,n,t){var o=t(1387);const r=[{path:"/",name:"home",component:()=>Promise.all([t.e(228),t.e(478)]).then(t.bind(t,9478))},{path:"/artworkpage",name:"artworkpage",component:()=>Promise.all([t.e(228),t.e(302)]).then(t.bind(t,4302))},{path:"/artworkpage/class",name:"class",component:()=>t.e(269).then(t.bind(t,9269))},{path:"/artworkpage/artwork",name:"artwork",component:()=>t.e(223).then(t.bind(t,4223))}],a=(0,o.aE)({history:(0,o.Bt)(),routes:r});n.A=a},6832:function(e,n,t){t.d(n,{A:function(){return g}});var o=t(6768),r=t(4232);const a=["src"],i={class:"navbar"},u={class:"container"},c={class:"nav"};function l(e,n,t,l,s,f){const d=(0,o.g2)("router-link"),p=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("audio",{ref:"audioRef",src:l.bgm,autoplay:"",loop:""},null,8,a),n[5]||(n[5]=(0,o.Lk)("div",{class:"loader"},[(0,o.Lk)("div",{class:"spinner"},[(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div"),(0,o.Lk)("div")])],-1)),(0,o.Lk)("div",{class:(0,r.C4)(["header",{"not-homepage":!l.isHomepage}]),style:(0,r.Tr)([{"background-image":l.isHomepage?"none":`url(${l.bannerImg})`}])},[(0,o.bF)(d,{to:"/"},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.Lk)("div",{class:"logo"},[(0,o.Lk)("h1",null,"Creation Exhibistion"),(0,o.Lk)("h6",null,"- Skillful Art of Hsu, Pi-Tze -")],-1)]))),_:1}),(0,o.Lk)("div",i,[(0,o.Lk)("i",{class:"material-icons",onClick:n[0]||(n[0]=(...e)=>l.switchMusic&&l.switchMusic(...e))},(0,r.v_)(l.isPlaying?"volume_up":"volume_off"),1)])],6),(0,o.bF)(p),(0,o.Lk)("footer",{style:(0,r.Tr)({"background-image":l.isHomepage?"none":`url(${l.bannerImg})`}),class:(0,r.C4)({"not-homepage":!l.isHomepage})},[(0,o.Lk)("div",u,[n[4]||(n[4]=(0,o.Lk)("p",null,"Copyright © 2024 Hsu Pei-Tzu, All rights reserved.",-1)),(0,o.Lk)("div",c,[(0,o.bF)(d,{to:"/"},{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.Lk)("p",null,"首頁",-1)]))),_:1}),(0,o.bF)(d,{to:"/artworkpage"},{default:(0,o.k6)((()=>n[3]||(n[3]=[(0,o.Lk)("p",null,"欣賞作品",-1)]))),_:1})])])],6)],64)}var s=t(144),f=t(4968),d=t(9523),p=t(1387),v={name:"App",setup(){const e=(0,s.KR)();(0,o.Gt)("artworkImgs",e);const n=(0,s.KR)(t(6358)),r=(0,s.KR)(window.innerWidth),a=(0,s.KR)(!1),i=(0,s.KR)(t(6619)),u=(0,s.KR)(null),c=(0,s.KR)(!1),l=(0,p.lq)(),v=(0,p.rd)();var h="";const m=()=>{c.value?(u.value.pause(),c.value=!1):(u.value.play(),c.value=!0)},g=()=>{console.log("Current route:",l.path),"/"===l.path?a.value=!0:a.value=!1,a.value?b():(console.log("kill animation"),h=null,f.os.to(".header",{opacity:1,duration:1.5,ease:"power2.out"}))},b=()=>{console.log("create animation"),h=f.os.timeline({repeat:-1,repeatDelay:0,yoyo:!0}),h.fromTo(["footer","footer"],{clipPath:"polygon(0 0, 100% 10%, 100% 100%, 0 100%)"},{clipPath:"polygon(0 5%, 100% 25%, 100% 100%, 0 100%)",duration:3,ease:"linear"}),h.fromTo(["footer","footer"],{clipPath:"polygon(0 5%, 100% 25%, 100% 100%, 0 100%)"},{clipPath:"polygon(0 2%, 100% 15%, 100% 100%, 0 100%)",duration:3,ease:"linear"})};return(0,o.sV)((async()=>{f.os.registerPlugin(d.nu);try{await(0,o.dY)(),g();const t=()=>{u.value.play(),c.value=!0,window.removeEventListener("click",t),window.removeEventListener("keydown",t)};window.addEventListener("click",t),window.addEventListener("keydown",t),v.afterEach((e=>{g(),console.log("Route changed to:",e.path),"/"===e.path?a.value=!0:a.value=!1,a.value?b():(console.log("kill animation"),h=null,f.os.to(".header",{opacity:1,duration:1.5,ease:"power2.out"}))})),window.addEventListener("resize",(()=>{r.value=window.innerWidth,r.value<768&&f.os.to(".header",{opacity:1,duration:1.5,ease:"power2.out"})}));var e=()=>{r.value>768?f.os.to(".header",{opacity:0,duration:1.5,ease:"power2.out"}):f.os.to(".logo",{scrollTrigger:{trigger:".first",start:"top 20",end:"top 0",scrub:!0},opacity:0,duration:1,ease:"power2.out"})},n=()=>{r.value>768&&f.os.to(".header",{opacity:1,duration:1.5,ease:"power2.out"})};d.nu.create({type:"wheel,touch,pointer",wheelSpeed:-1,onDown:()=>a.value&&n(),onUp:()=>a.value&&e()})}catch(t){console.error("Error loading images:",t)}})),{isHomepage:a,bannerImg:n,bgm:i,switchMusic:m,audioRef:u,isPlaying:c}}},h=t(1241);const m=(0,h.A)(v,[["render",l]]);var g=m},6358:function(e,n,t){e.exports=t.p+"img/banner.8b1d5573.jpg"},6619:function(e,n,t){e.exports=t.p+"media/bgm.434b4e53.mp3"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=function(e){e&&e.d<1&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},a=function(t){return t.map((function(t){if(null!==t&&"object"===typeof t){if(t[e])return t;if(t.then){var a=[];a.d=0,t.then((function(e){i[n]=e,r(a)}),(function(e){i[o]=e,r(a)}));var i={};return i[e]=function(e){e(a)},i}}var u={};return u[e]=function(){},u[n]=t,u}))};t.a=function(t,i,u){var c;u&&((c=[]).d=-1);var l,s,f,d=new Set,p=t.exports,v=new Promise((function(e,n){f=n,s=e}));v[n]=p,v[e]=function(e){c&&e(c),d.forEach(e),v["catch"]((function(){}))},t.exports=v,i((function(t){var r;l=a(t);var i=function(){return l.map((function(e){if(e[o])throw e[o];return e[n]}))},u=new Promise((function(n){r=function(){n(i)},r.r=0;var t=function(e){e!==c&&!d.has(e)&&(d.add(e),e&&!e.d&&(r.r++,e.push(r)))};l.map((function(n){n[e](t)}))}));return r.r?u:i()}),(function(e){e?f(v[o]=e):s(p),r(c)})),c&&c.d<0&&(c.d=0)}}(),function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{223:"9f123e71",228:"ccc4e130",269:"b7f6bf74",302:"5587ff7b",478:"c48db22c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{223:"9c98bfd2",269:"241ecea8",302:"bbcd998d",478:"b0569ee1"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="xu-artist-site:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var o=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=u,i.href=n,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={524:0};t.f.miniCss=function(e,n){var t={223:1,269:1,302:1,478:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var s=c(t)}for(n&&n(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},o=self["webpackChunkxu_artist_site"]=self["webpackChunkxu_artist_site"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(1406)}));o=t.O(o)})();
//# sourceMappingURL=app.8ee72fbf.js.map