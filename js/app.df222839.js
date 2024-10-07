(function(){"use strict";var e={1406:function(e,n,t){t.a(e,(async function(e,n){try{var r=t(5130),o=t(3676),i=t(9325);const e=(0,r.Ef)(o.A).use(i.A);await i.A.isReady(),e.mount("#app"),n()}catch(a){n(a)}}),1)},9325:function(e,n,t){var r=t(1387);const o=[{path:"/",name:"home",component:()=>Promise.all([t.e(228),t.e(833)]).then(t.bind(t,7833))},{path:"/artworkpage",name:"artworkpage",component:()=>Promise.all([t.e(228),t.e(344)]).then(t.bind(t,4344))},{path:"/artworkpage/class",name:"class",component:()=>t.e(374).then(t.bind(t,8374))},{path:"/artworkpage/artwork",name:"artwork",component:()=>t.e(923).then(t.bind(t,923))}],i=(0,r.aE)({history:(0,r.Bt)(),routes:o});n.A=i},3676:function(e,n,t){t.d(n,{A:function(){return v}});var r=t(6768),o=t(4232);const i={class:"logo"};function a(e,n,t,a,u,c){const f=(0,r.g2)("router-link"),s=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[n[2]||(n[2]=(0,r.Lk)("div",{class:"loader"},[(0,r.Lk)("div",{class:"spinner"},[(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div"),(0,r.Lk)("div")])],-1)),(0,r.Lk)("header",null,[(0,r.bF)(f,{to:"/"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",i,[n[0]||(n[0]=(0,r.Lk)("h1",null,"Seaport Handicrafts",-1)),(0,r.Lk)("h6",{style:(0,o.Tr)({color:a.isHomepage?"#fff":"#232323"})}," - Contemporary Knot Art of Hsu Pei-Tzu - ",4)]),n[1]||(n[1]=(0,r.Lk)("div",{class:"navbar"},null,-1))])),_:1})]),(0,r.bF)(s)],64)}var u=t(144),c=t(4968),f=t(9523),s=t(1387),l={name:"App",setup(){const e=(0,u.KR)();(0,r.Gt)("artworkImgs",e);const n=(0,u.KR)(window.innerWidth),t=(0,u.KR)(!1),o=(0,s.lq)(),i=(0,s.rd)(),a=()=>{console.log("Current route:",o.path),"/"===o.path?t.value=!0:(t.value=!1,c.os.to("header",{yPercent:0,duration:1.5,ease:"power2.out"}))};return(0,r.sV)((async()=>{c.os.registerPlugin(f.nu);try{await(0,r.dY)(),a(),i.afterEach((e=>{a(),console.log("Route changed to:",e.path)})),window.addEventListener("resize",(()=>{n.value=window.innerWidth,n.value<768&&c.os.to("header",{yPercent:0,duration:1.5,ease:"power2.out"})}));var e=()=>{n.value>768?c.os.to("header",{yPercent:-100,duration:1.5,ease:"power2.out"}):c.os.to(".logo",{scrollTrigger:{trigger:".first",start:"top 20",end:"top 0",scrub:!0},opacity:0,duration:1,ease:"power2.out"})},o=()=>{n.value>768&&c.os.to("header",{yPercent:0,duration:1.5,ease:"power2.out"})};f.nu.create({type:"wheel,touch,pointer",wheelSpeed:-1,onDown:()=>t.value&&o(),onUp:()=>t.value&&e()})}catch(u){console.error("Error loading images:",u)}})),{isHomepage:t}}},d=t(1241);const p=(0,d.A)(l,[["render",a]]);var v=p}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=function(e){e&&e.d<1&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},i=function(t){return t.map((function(t){if(null!==t&&"object"===typeof t){if(t[e])return t;if(t.then){var i=[];i.d=0,t.then((function(e){a[n]=e,o(i)}),(function(e){a[r]=e,o(i)}));var a={};return a[e]=function(e){e(i)},a}}var u={};return u[e]=function(){},u[n]=t,u}))};t.a=function(t,a,u){var c;u&&((c=[]).d=-1);var f,s,l,d=new Set,p=t.exports,v=new Promise((function(e,n){l=n,s=e}));v[n]=p,v[e]=function(e){c&&e(c),d.forEach(e),v["catch"]((function(){}))},t.exports=v,a((function(t){var o;f=i(t);var a=function(){return f.map((function(e){if(e[r])throw e[r];return e[n]}))},u=new Promise((function(n){o=function(){n(a)},o.r=0;var t=function(e){e!==c&&!d.has(e)&&(d.add(e),e&&!e.d&&(o.r++,e.push(o)))};f.map((function(n){n[e](t)}))}));return o.r?u:a()}),(function(e){e?l(v[r]=e):s(p),o(c)})),c&&c.d<0&&(c.d=0)}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{228:"ccc4e130",344:"0ede5ceb",374:"a67e6b85",833:"e61fb306",923:"d10d9e30"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{344:"c19bc5d1",374:"d06a9ef3",833:"1cdd0275",923:"85507bd8"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="xu-artist-site:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={344:1,374:1,833:1,923:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkxu_artist_site"]=self["webpackChunkxu_artist_site"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(1406)}));r=t.O(r)})();
//# sourceMappingURL=app.df222839.js.map