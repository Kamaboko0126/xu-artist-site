(self["webpackChunkxu_artist_site"]=self["webpackChunkxu_artist_site"]||[]).push([[223],{4223:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return h}});var n=i(6768),t=i(4232);const p={key:0},a={class:"container"},r={class:"btn-container"},o={class:"img-container"},c={class:"info"},g={class:"top"},m={class:"name"},u={class:"en"},d={key:0,class:"years"},j={key:0,class:"bottom"};function l(e,s,l,f,x,z){const y=(0,n.g2)("router-link");return f.filteredData?((0,n.uX)(),(0,n.CE)("section",p,[(0,n.Lk)("div",a,[(0,n.Lk)("div",r,[(0,n.bF)(y,{to:`/artworkpage/class?class=${f.filteredData.class}`,class:"btn"},{default:(0,n.k6)((()=>s[0]||(s[0]=[(0,n.Lk)("span",{class:"material-icons"},"chevron_left",-1),(0,n.Lk)("p",null,"返回",-1)]))),_:1},8,["to"])]),(0,n.Lk)("div",o,[(0,n.Lk)("div",{class:"img",style:(0,t.Tr)({"background-image":`url(${i(5459)(`./${f.id}.jpg`)})`})},null,4)]),(0,n.Lk)("div",c,[(0,n.Lk)("div",g,[(0,n.Lk)("p",m,(0,t.v_)(f.filteredData.name),1),(0,n.Lk)("p",u,(0,t.v_)(f.filteredData.en_name),1),f.filteredData.years?((0,n.uX)(),(0,n.CE)("p",d,(0,t.v_)("("+f.filteredData.years+")"),1)):(0,n.Q3)("",!0)]),f.filteredData.size?((0,n.uX)(),(0,n.CE)("div",j,[(0,n.Lk)("p",null,(0,t.v_)(f.filteredData.size),1)])):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0)}var f=i(144),x=i(1387),z=i(4968),y={setup(){const e=(0,x.lq)(),s=(0,f.KR)(e.query.id.split(".")[0]),t=i(2345),p=(0,f.KR)(null),a=()=>{p.value=t.datas.find((e=>e.id===s.value)),console.log("filteredData:",p.value)};(0,n.wB)((()=>e.query.id),(e=>{s.value=e.split(".")[0],a(),o()}));const r=e=>new Promise(((s,i)=>{const n=new Image;n.src=e,n.onload=s,n.onerror=i})),o=async()=>{z.os.to(".loader",{display:"flex",autoAlpha:1,duration:.2,ease:"power2.out"});const e=[i(5459)(`./${s.value}.jpg`)];try{await Promise.all(e.map((e=>r(e)))),z.os.to(".loader",{autoAlpha:0,duration:1,ease:"power2.out",onComplete:()=>{z.os.set(".loader",{display:"none"})}})}catch(n){console.error("Error loading images:",n)}};return(0,n.sV)((async()=>{a(),await(0,n.dY)();try{await o()}catch(e){console.error("Error loading images:",e)}})),{id:s,filteredData:p}}},_=i(1241);const b=(0,_.A)(y,[["render",l],["__scopeId","data-v-78d5cbda"]]);var h=b},5459:function(e,s,i){var n={"./01.jpg":4749,"./02.jpg":1842,"./03.jpg":4511,"./04.jpg":7348,"./05.jpg":1073,"./06.jpg":3302,"./07.jpg":1827,"./08.jpg":8328,"./09.jpg":3157,"./10.jpg":8127,"./100.jpg":1759,"./101.jpg":9090,"./102.jpg":8349,"./103.jpg":7424,"./104.jpg":9075,"./105.jpg":550,"./106.jpg":8321,"./107.jpg":4596,"./108.jpg":8423,"./109.jpg":6266,"./11.jpg":1746,"./110.jpg":5232,"./111.jpg":813,"./112.jpg":8533,"./113.jpg":8847,"./114.jpg":884,"./115.jpg":8929,"./12.jpg":9549,"./13.jpg":7808,"./14.jpg":7971,"./15.jpg":3206,"./16.jpg":5345,"./17.jpg":5396,"./18.jpg":6903,"./19.jpg":8618,"./20.jpg":906,"./21.jpg":6743,"./22.jpg":9288,"./23.jpg":7157,"./24.jpg":4686,"./25.jpg":2731,"./26.jpg":748,"./27.jpg":1801,"./28.jpg":7410,"./29.jpg":5471,"./30.jpg":5329,"./31.jpg":7284,"./32.jpg":8915,"./33.jpg":5750,"./34.jpg":7213,"./35.jpg":7984,"./36.jpg":1599,"./37.jpg":3666,"./38.jpg":6025,"./39.jpg":652,"./40.jpg":1772,"./41.jpg":5497,"./42.jpg":9358,"./43.jpg":5819,"./44.jpg":2984,"./45.jpg":3893,"./46.jpg":2906,"./47.jpg":5559,"./48.jpg":3908,"./49.jpg":2433,"./50.jpg":4475,"./51.jpg":3166,"./52.jpg":9113,"./53.jpg":7500,"./54.jpg":3815,"./55.jpg":2650,"./56.jpg":6853,"./57.jpg":2888,"./58.jpg":2003,"./59.jpg":390,"./60.jpg":3542,"./61.jpg":8307,"./62.jpg":5732,"./63.jpg":5681,"./64.jpg":2082,"./65.jpg":8463,"./66.jpg":8144,"./67.jpg":9885,"./68.jpg":3294,"./69.jpg":3451,"./70.jpg":6141,"./71.jpg":4896,"./72.jpg":8623,"./73.jpg":562,"./74.jpg":5793,"./75.jpg":3988,"./76.jpg":51,"./77.jpg":9942,"./78.jpg":6757,"./79.jpg":2440,"./80.jpg":1112,"./81.jpg":3477,"./82.jpg":874,"./83.jpg":5335,"./84.jpg":988,"./85.jpg":6361,"./86.jpg":2654,"./87.jpg":3787,"./88.jpg":8320,"./89.jpg":7549,"./90.jpg":5159,"./91.jpg":9354,"./92.jpg":3493,"./93.jpg":8664,"./94.jpg":2267,"./95.jpg":6430,"./96.jpg":5097,"./97.jpg":8367,"./98.jpg":4847,"./99.jpg":2178,"./normalized/01.jpg":9229,"./normalized/02.jpg":2,"./normalized/03.jpg":8063,"./normalized/04.jpg":3428,"./normalized/05.jpg":5233,"./normalized/06.jpg":9382,"./normalized/07.jpg":9491,"./normalized/08.jpg":1880,"./normalized/09.jpg":6197,"./normalized/10.jpg":8111,"./normalized/100.jpg":2623,"./normalized/101.jpg":914,"./normalized/102.jpg":141,"./normalized/103.jpg":5248,"./normalized/104.jpg":4051,"./normalized/105.jpg":3942,"./normalized/106.jpg":6145,"./normalized/107.jpg":4340,"./normalized/108.jpg":6423,"./normalized/109.jpg":5034,"./normalized/11.jpg":5730,"./normalized/110.jpg":2144,"./normalized/111.jpg":237,"./normalized/112.jpg":6082,"./normalized/113.jpg":2463,"./normalized/114.jpg":6084,"./normalized/115.jpg":9681,"./normalized/12.jpg":5629,"./normalized/13.jpg":4496,"./normalized/14.jpg":7331,"./normalized/15.jpg":870,"./normalized/16.jpg":1217,"./normalized/17.jpg":3172,"./normalized/18.jpg":7591,"./normalized/19.jpg":3754,"./normalized/20.jpg":8794,"./normalized/21.jpg":4599,"./normalized/22.jpg":8104,"./normalized/23.jpg":2933,"./normalized/24.jpg":5870,"./normalized/25.jpg":1707,"./normalized/26.jpg":188,"./normalized/27.jpg":4537,"./normalized/28.jpg":1618,"./normalized/29.jpg":4287,"./normalized/30.jpg":5121,"./normalized/31.jpg":5172,"./normalized/32.jpg":7747,"./normalized/33.jpg":2982,"./normalized/34.jpg":1706,"./normalized/35.jpg":7584,"./normalized/36.jpg":7903,"./normalized/37.jpg":1522,"./normalized/38.jpg":4233,"./normalized/39.jpg":92,"./normalized/40.jpg":524,"./normalized/41.jpg":1577,"./normalized/42.jpg":4462,"./normalized/43.jpg":2507,"./normalized/44.jpg":9064,"./normalized/45.jpg":6933,"./normalized/46.jpg":682,"./normalized/47.jpg":6519,"./normalized/48.jpg":7460,"./normalized/49.jpg":1793,"./normalized/50.jpg":3227,"./normalized/51.jpg":2094,"./normalized/52.jpg":5801,"./normalized/53.jpg":428,"./normalized/54.jpg":4775,"./normalized/55.jpg":314,"./normalized/56.jpg":2917,"./normalized/57.jpg":552,"./normalized/58.jpg":8691,"./normalized/59.jpg":5526,"./normalized/60.jpg":1206,"./normalized/61.jpg":7667,"./normalized/62.jpg":3508,"./normalized/63.jpg":1553,"./normalized/64.jpg":6066,"./normalized/65.jpg":8447,"./normalized/66.jpg":4832,"./normalized/67.jpg":5965,"./normalized/68.jpg":1694,"./normalized/69.jpg":9531,"./normalized/70.jpg":205,"./normalized/71.jpg":3104,"./normalized/72.jpg":444,"./normalized/73.jpg":8066,"./normalized/74.jpg":4625,"./normalized/75.jpg":6100,"./normalized/76.jpg":7907,"./normalized/77.jpg":6854,"./normalized/78.jpg":6085,"./normalized/79.jpg":5176,"./normalized/80.jpg":8344,"./normalized/81.jpg":5957,"./normalized/82.jpg":8730,"./normalized/83.jpg":7015,"./normalized/84.jpg":8047,"./normalized/85.jpg":4569,"./normalized/86.jpg":3070,"./normalized/87.jpg":5608,"./normalized/88.jpg":7920,"./normalized/89.jpg":9661,"./normalized/90.jpg":2199,"./normalized/91.jpg":4458,"./normalized/92.jpg":6533,"./normalized/93.jpg":2216,"./normalized/94.jpg":8955,"./normalized/95.jpg":910,"./normalized/96.jpg":1177,"./normalized/97.jpg":4300,"./normalized/98.jpg":8399,"./normalized/99.jpg":338};function t(e){var s=p(e);return i(s)}function p(e){if(!i.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}t.keys=function(){return Object.keys(n)},t.resolve=p,e.exports=t,t.id=5459},4749:function(e,s,i){"use strict";e.exports=i.p+"img/01.01db863b.jpg"},1842:function(e,s,i){"use strict";e.exports=i.p+"img/02.d8990d76.jpg"},4511:function(e,s,i){"use strict";e.exports=i.p+"img/03.d0df83c8.jpg"},7348:function(e,s,i){"use strict";e.exports=i.p+"img/04.9005f334.jpg"},1073:function(e,s,i){"use strict";e.exports=i.p+"img/05.32ae6ac4.jpg"},3302:function(e,s,i){"use strict";e.exports=i.p+"img/06.0a98200f.jpg"},1827:function(e,s,i){"use strict";e.exports=i.p+"img/07.c920e71f.jpg"},8328:function(e,s,i){"use strict";e.exports=i.p+"img/08.17fb9990.jpg"},3157:function(e,s,i){"use strict";e.exports=i.p+"img/09.b84e7f18.jpg"},8127:function(e,s,i){"use strict";e.exports=i.p+"img/10.92c0c800.jpg"},1759:function(e,s,i){"use strict";e.exports=i.p+"img/100.c11430cc.jpg"},9090:function(e,s,i){"use strict";e.exports=i.p+"img/101.b9fb2a17.jpg"},8349:function(e,s,i){"use strict";e.exports=i.p+"img/102.fa8829fb.jpg"},7424:function(e,s,i){"use strict";e.exports=i.p+"img/103.3d140160.jpg"},9075:function(e,s,i){"use strict";e.exports=i.p+"img/104.8d24f23d.jpg"},550:function(e,s,i){"use strict";e.exports=i.p+"img/105.fd889a9d.jpg"},8321:function(e,s,i){"use strict";e.exports=i.p+"img/106.e5d44158.jpg"},4596:function(e,s,i){"use strict";e.exports=i.p+"img/107.8a363f34.jpg"},8423:function(e,s,i){"use strict";e.exports=i.p+"img/108.52ddfa03.jpg"},6266:function(e,s,i){"use strict";e.exports=i.p+"img/109.000759dc.jpg"},1746:function(e,s,i){"use strict";e.exports=i.p+"img/11.27fb92ae.jpg"},5232:function(e,s,i){"use strict";e.exports=i.p+"img/110.5ec3f3f6.jpg"},813:function(e,s,i){"use strict";e.exports=i.p+"img/111.686f46a2.jpg"},8533:function(e,s,i){"use strict";e.exports=i.p+"img/112.75a9e5f6.jpg"},8847:function(e,s,i){"use strict";e.exports=i.p+"img/113.530f471d.jpg"},884:function(e,s,i){"use strict";e.exports=i.p+"img/114.1beb410f.jpg"},8929:function(e,s,i){"use strict";e.exports=i.p+"img/115.e1f13a82.jpg"},9549:function(e,s,i){"use strict";e.exports=i.p+"img/12.a5563bf0.jpg"},7808:function(e,s,i){"use strict";e.exports=i.p+"img/13.ea70f478.jpg"},7971:function(e,s,i){"use strict";e.exports=i.p+"img/14.3a38ccb9.jpg"},3206:function(e,s,i){"use strict";e.exports=i.p+"img/15.6cdc47e2.jpg"},5345:function(e,s,i){"use strict";e.exports=i.p+"img/16.276ba451.jpg"},5396:function(e,s,i){"use strict";e.exports=i.p+"img/17.5e94792c.jpg"},6903:function(e,s,i){"use strict";e.exports=i.p+"img/18.2929d85b.jpg"},8618:function(e,s,i){"use strict";e.exports=i.p+"img/19.1ad71281.jpg"},906:function(e,s,i){"use strict";e.exports=i.p+"img/20.af7696de.jpg"},6743:function(e,s,i){"use strict";e.exports=i.p+"img/21.ff423a3e.jpg"},9288:function(e,s,i){"use strict";e.exports=i.p+"img/22.0029cb57.jpg"},7157:function(e,s,i){"use strict";e.exports=i.p+"img/23.b245489d.jpg"},4686:function(e,s,i){"use strict";e.exports=i.p+"img/24.8e110941.jpg"},2731:function(e,s,i){"use strict";e.exports=i.p+"img/25.65fba5ab.jpg"},748:function(e,s,i){"use strict";e.exports=i.p+"img/26.10dd4060.jpg"},1801:function(e,s,i){"use strict";e.exports=i.p+"img/27.48f599ef.jpg"},7410:function(e,s,i){"use strict";e.exports=i.p+"img/28.0606e551.jpg"},5471:function(e,s,i){"use strict";e.exports=i.p+"img/29.c1304acb.jpg"},5329:function(e,s,i){"use strict";e.exports=i.p+"img/30.e46fa87c.jpg"},7284:function(e,s,i){"use strict";e.exports=i.p+"img/31.ad18acaf.jpg"},8915:function(e,s,i){"use strict";e.exports=i.p+"img/32.1e2e090c.jpg"},5750:function(e,s,i){"use strict";e.exports=i.p+"img/33.2320231c.jpg"},7213:function(e,s,i){"use strict";e.exports=i.p+"img/34.9f6b4a91.jpg"},7984:function(e,s,i){"use strict";e.exports=i.p+"img/35.c4a26928.jpg"},1599:function(e,s,i){"use strict";e.exports=i.p+"img/36.80801be0.jpg"},3666:function(e,s,i){"use strict";e.exports=i.p+"img/37.ecf9aca3.jpg"},6025:function(e,s,i){"use strict";e.exports=i.p+"img/38.36bc4fc2.jpg"},652:function(e,s,i){"use strict";e.exports=i.p+"img/39.366a8b44.jpg"},1772:function(e,s,i){"use strict";e.exports=i.p+"img/40.5d522c09.jpg"},5497:function(e,s,i){"use strict";e.exports=i.p+"img/41.0b42d2e2.jpg"},9358:function(e,s,i){"use strict";e.exports=i.p+"img/42.365a2129.jpg"},5819:function(e,s,i){"use strict";e.exports=i.p+"img/43.a4948dec.jpg"},2984:function(e,s,i){"use strict";e.exports=i.p+"img/44.a5b2832b.jpg"},3893:function(e,s,i){"use strict";e.exports=i.p+"img/45.a81c02d4.jpg"},2906:function(e,s,i){"use strict";e.exports=i.p+"img/46.f7722d1a.jpg"},5559:function(e,s,i){"use strict";e.exports=i.p+"img/47.34148113.jpg"},3908:function(e,s,i){"use strict";e.exports=i.p+"img/48.ee5f89c1.jpg"},2433:function(e,s,i){"use strict";e.exports=i.p+"img/49.7b73c045.jpg"},4475:function(e,s,i){"use strict";e.exports=i.p+"img/50.f3ab6316.jpg"},3166:function(e,s,i){"use strict";e.exports=i.p+"img/51.55547c9c.jpg"},9113:function(e,s,i){"use strict";e.exports=i.p+"img/52.f5e0399c.jpg"},7500:function(e,s,i){"use strict";e.exports=i.p+"img/53.8e5b4554.jpg"},3815:function(e,s,i){"use strict";e.exports=i.p+"img/54.39779e4c.jpg"},2650:function(e,s,i){"use strict";e.exports=i.p+"img/55.1c204683.jpg"},6853:function(e,s,i){"use strict";e.exports=i.p+"img/56.ed6bdbac.jpg"},2888:function(e,s,i){"use strict";e.exports=i.p+"img/57.0a0a4b85.jpg"},2003:function(e,s,i){"use strict";e.exports=i.p+"img/58.6a058044.jpg"},390:function(e,s,i){"use strict";e.exports=i.p+"img/59.2aee8a4a.jpg"},3542:function(e,s,i){"use strict";e.exports=i.p+"img/60.6f6f7f5f.jpg"},8307:function(e,s,i){"use strict";e.exports=i.p+"img/61.0266314e.jpg"},5732:function(e,s,i){"use strict";e.exports=i.p+"img/62.be9f7fe2.jpg"},5681:function(e,s,i){"use strict";e.exports=i.p+"img/63.5531fda1.jpg"},2082:function(e,s,i){"use strict";e.exports=i.p+"img/64.1e77fa50.jpg"},8463:function(e,s,i){"use strict";e.exports=i.p+"img/65.58f4f548.jpg"},8144:function(e,s,i){"use strict";e.exports=i.p+"img/66.082e44f0.jpg"},9885:function(e,s,i){"use strict";e.exports=i.p+"img/67.827ec453.jpg"},3294:function(e,s,i){"use strict";e.exports=i.p+"img/68.73179116.jpg"},3451:function(e,s,i){"use strict";e.exports=i.p+"img/69.5ac96d80.jpg"},6141:function(e,s,i){"use strict";e.exports=i.p+"img/70.4165ae21.jpg"},4896:function(e,s,i){"use strict";e.exports=i.p+"img/71.f1b229cc.jpg"},8623:function(e,s,i){"use strict";e.exports=i.p+"img/72.6f610b85.jpg"},562:function(e,s,i){"use strict";e.exports=i.p+"img/73.81dc5f81.jpg"},5793:function(e,s,i){"use strict";e.exports=i.p+"img/74.a54f373e.jpg"},3988:function(e,s,i){"use strict";e.exports=i.p+"img/75.21aeb738.jpg"},51:function(e,s,i){"use strict";e.exports=i.p+"img/76.86af5010.jpg"},9942:function(e,s,i){"use strict";e.exports=i.p+"img/77.3a0f46e8.jpg"},6757:function(e,s,i){"use strict";e.exports=i.p+"img/78.7f5a54d9.jpg"},2440:function(e,s,i){"use strict";e.exports=i.p+"img/79.d177a9f3.jpg"},1112:function(e,s,i){"use strict";e.exports=i.p+"img/80.6585f655.jpg"},3477:function(e,s,i){"use strict";e.exports=i.p+"img/81.517fe0c2.jpg"},874:function(e,s,i){"use strict";e.exports=i.p+"img/82.0bb165d2.jpg"},5335:function(e,s,i){"use strict";e.exports=i.p+"img/83.e1340174.jpg"},988:function(e,s,i){"use strict";e.exports=i.p+"img/84.b0518e72.jpg"},6361:function(e,s,i){"use strict";e.exports=i.p+"img/85.c36801f4.jpg"},2654:function(e,s,i){"use strict";e.exports=i.p+"img/86.b518b645.jpg"},3787:function(e,s,i){"use strict";e.exports=i.p+"img/87.ebc990fa.jpg"},8320:function(e,s,i){"use strict";e.exports=i.p+"img/88.41da9528.jpg"},7549:function(e,s,i){"use strict";e.exports=i.p+"img/89.bae3b116.jpg"},5159:function(e,s,i){"use strict";e.exports=i.p+"img/90.84a66ab0.jpg"},9354:function(e,s,i){"use strict";e.exports=i.p+"img/91.a09956cd.jpg"},3493:function(e,s,i){"use strict";e.exports=i.p+"img/92.3003e906.jpg"},8664:function(e,s,i){"use strict";e.exports=i.p+"img/93.50af0385.jpg"},2267:function(e,s,i){"use strict";e.exports=i.p+"img/94.504436a8.jpg"},6430:function(e,s,i){"use strict";e.exports=i.p+"img/95.2c306486.jpg"},5097:function(e,s,i){"use strict";e.exports=i.p+"img/96.b57d7a19.jpg"},8367:function(e,s,i){"use strict";e.exports=i.p+"img/97.1a1f150a.jpg"},4847:function(e,s,i){"use strict";e.exports=i.p+"img/98.05df943c.jpg"},2178:function(e,s,i){"use strict";e.exports=i.p+"img/99.43ddcd15.jpg"},9229:function(e,s,i){"use strict";e.exports=i.p+"img/01.9f6ab1b9.jpg"},2:function(e,s,i){"use strict";e.exports=i.p+"img/02.cd348e15.jpg"},8063:function(e,s,i){"use strict";e.exports=i.p+"img/03.05e6bf60.jpg"},3428:function(e,s,i){"use strict";e.exports=i.p+"img/04.26ff994b.jpg"},5233:function(e,s,i){"use strict";e.exports=i.p+"img/05.4e4c4802.jpg"},9382:function(e,s,i){"use strict";e.exports=i.p+"img/06.e37b340a.jpg"},9491:function(e,s,i){"use strict";e.exports=i.p+"img/07.a7b3e510.jpg"},1880:function(e,s,i){"use strict";e.exports=i.p+"img/08.076a3205.jpg"},6197:function(e,s,i){"use strict";e.exports=i.p+"img/09.3c5f5d01.jpg"},8111:function(e,s,i){"use strict";e.exports=i.p+"img/10.e7974b33.jpg"},2623:function(e,s,i){"use strict";e.exports=i.p+"img/100.1248f86b.jpg"},914:function(e,s,i){"use strict";e.exports=i.p+"img/101.08db3363.jpg"},141:function(e,s,i){"use strict";e.exports=i.p+"img/102.eec445e7.jpg"},5248:function(e,s,i){"use strict";e.exports=i.p+"img/103.4b3ecc35.jpg"},4051:function(e,s,i){"use strict";e.exports=i.p+"img/104.ad6f2536.jpg"},3942:function(e,s,i){"use strict";e.exports=i.p+"img/105.e913c8a7.jpg"},6145:function(e,s,i){"use strict";e.exports=i.p+"img/106.86304ff9.jpg"},4340:function(e,s,i){"use strict";e.exports=i.p+"img/107.60413fd1.jpg"},6423:function(e,s,i){"use strict";e.exports=i.p+"img/108.27cd4987.jpg"},5034:function(e,s,i){"use strict";e.exports=i.p+"img/109.7c8c4982.jpg"},5730:function(e,s,i){"use strict";e.exports=i.p+"img/11.d7787512.jpg"},2144:function(e,s,i){"use strict";e.exports=i.p+"img/110.d2e6d298.jpg"},237:function(e,s,i){"use strict";e.exports=i.p+"img/111.e8e48033.jpg"},6082:function(e,s,i){"use strict";e.exports=i.p+"img/112.b6d1fcde.jpg"},2463:function(e,s,i){"use strict";e.exports=i.p+"img/113.a3e58c48.jpg"},6084:function(e,s,i){"use strict";e.exports=i.p+"img/114.d0541c22.jpg"},9681:function(e,s,i){"use strict";e.exports=i.p+"img/115.9b822869.jpg"},5629:function(e,s,i){"use strict";e.exports=i.p+"img/12.c4807b19.jpg"},4496:function(e,s,i){"use strict";e.exports=i.p+"img/13.438e161c.jpg"},7331:function(e,s,i){"use strict";e.exports=i.p+"img/14.5c601f5f.jpg"},870:function(e,s,i){"use strict";e.exports=i.p+"img/15.70cbd504.jpg"},1217:function(e,s,i){"use strict";e.exports=i.p+"img/16.47fa02b9.jpg"},3172:function(e,s,i){"use strict";e.exports=i.p+"img/17.caff470b.jpg"},7591:function(e,s,i){"use strict";e.exports=i.p+"img/18.a725b51e.jpg"},3754:function(e,s,i){"use strict";e.exports=i.p+"img/19.4b3c7eec.jpg"},8794:function(e,s,i){"use strict";e.exports=i.p+"img/20.c803fc86.jpg"},4599:function(e,s,i){"use strict";e.exports=i.p+"img/21.cb48de2d.jpg"},8104:function(e,s,i){"use strict";e.exports=i.p+"img/22.eb583283.jpg"},2933:function(e,s,i){"use strict";e.exports=i.p+"img/23.181e5cdf.jpg"},5870:function(e,s,i){"use strict";e.exports=i.p+"img/24.80b39635.jpg"},1707:function(e,s,i){"use strict";e.exports=i.p+"img/25.b4ad7c92.jpg"},188:function(e,s,i){"use strict";e.exports=i.p+"img/26.1aa48110.jpg"},4537:function(e,s,i){"use strict";e.exports=i.p+"img/27.780043df.jpg"},1618:function(e,s,i){"use strict";e.exports=i.p+"img/28.47fd837a.jpg"},4287:function(e,s,i){"use strict";e.exports=i.p+"img/29.27c3c2e4.jpg"},5121:function(e,s,i){"use strict";e.exports=i.p+"img/30.02981b7f.jpg"},5172:function(e,s,i){"use strict";e.exports=i.p+"img/31.c9b2deea.jpg"},7747:function(e,s,i){"use strict";e.exports=i.p+"img/32.46e9aa54.jpg"},2982:function(e,s,i){"use strict";e.exports=i.p+"img/33.4c31d69e.jpg"},1706:function(e,s,i){"use strict";e.exports=i.p+"img/34.260364d8.jpg"},7584:function(e,s,i){"use strict";e.exports=i.p+"img/35.8c82ad55.jpg"},7903:function(e,s,i){"use strict";e.exports=i.p+"img/36.1099e2ba.jpg"},1522:function(e,s,i){"use strict";e.exports=i.p+"img/37.b265ecf2.jpg"},4233:function(e,s,i){"use strict";e.exports=i.p+"img/38.1acc067f.jpg"},92:function(e,s,i){"use strict";e.exports=i.p+"img/39.d5853795.jpg"},524:function(e,s,i){"use strict";e.exports=i.p+"img/40.f6ae502f.jpg"},1577:function(e,s,i){"use strict";e.exports=i.p+"img/41.ae779d3f.jpg"},4462:function(e,s,i){"use strict";e.exports=i.p+"img/42.83109bee.jpg"},2507:function(e,s,i){"use strict";e.exports=i.p+"img/43.cc7105a9.jpg"},9064:function(e,s,i){"use strict";e.exports=i.p+"img/44.82da640a.jpg"},6933:function(e,s,i){"use strict";e.exports=i.p+"img/45.a6a1ab8d.jpg"},682:function(e,s,i){"use strict";e.exports=i.p+"img/46.51bca941.jpg"},6519:function(e,s,i){"use strict";e.exports=i.p+"img/47.d33ea02c.jpg"},7460:function(e,s,i){"use strict";e.exports=i.p+"img/48.19c7eb8d.jpg"},1793:function(e,s,i){"use strict";e.exports=i.p+"img/49.28cf6efc.jpg"},3227:function(e,s,i){"use strict";e.exports=i.p+"img/50.02dedec8.jpg"},2094:function(e,s,i){"use strict";e.exports=i.p+"img/51.106efc90.jpg"},5801:function(e,s,i){"use strict";e.exports=i.p+"img/52.f8d72f61.jpg"},428:function(e,s,i){"use strict";e.exports=i.p+"img/53.30050e72.jpg"},4775:function(e,s,i){"use strict";e.exports=i.p+"img/54.6127624f.jpg"},314:function(e,s,i){"use strict";e.exports=i.p+"img/55.8b4a5177.jpg"},2917:function(e,s,i){"use strict";e.exports=i.p+"img/56.14f71ad1.jpg"},552:function(e,s,i){"use strict";e.exports=i.p+"img/57.9603483b.jpg"},8691:function(e,s,i){"use strict";e.exports=i.p+"img/58.0a2fbec0.jpg"},5526:function(e,s,i){"use strict";e.exports=i.p+"img/59.ecaee7c5.jpg"},1206:function(e,s,i){"use strict";e.exports=i.p+"img/60.cd1b9477.jpg"},7667:function(e,s,i){"use strict";e.exports=i.p+"img/61.2095092d.jpg"},3508:function(e,s,i){"use strict";e.exports=i.p+"img/62.fc4d6d06.jpg"},1553:function(e,s,i){"use strict";e.exports=i.p+"img/63.ab729368.jpg"},6066:function(e,s,i){"use strict";e.exports=i.p+"img/64.f840e978.jpg"},8447:function(e,s,i){"use strict";e.exports=i.p+"img/65.360e150f.jpg"},4832:function(e,s,i){"use strict";e.exports=i.p+"img/66.6dee8e5b.jpg"},5965:function(e,s,i){"use strict";e.exports=i.p+"img/67.1be3dce8.jpg"},1694:function(e,s,i){"use strict";e.exports=i.p+"img/68.f5103ddd.jpg"},9531:function(e,s,i){"use strict";e.exports=i.p+"img/69.653e7d7d.jpg"},205:function(e,s,i){"use strict";e.exports=i.p+"img/70.6b028554.jpg"},3104:function(e,s,i){"use strict";e.exports=i.p+"img/71.e777f9c7.jpg"},444:function(e,s,i){"use strict";e.exports=i.p+"img/72.c422ad77.jpg"},8066:function(e,s,i){"use strict";e.exports=i.p+"img/73.95488b70.jpg"},4625:function(e,s,i){"use strict";e.exports=i.p+"img/74.fa3a83bc.jpg"},6100:function(e,s,i){"use strict";e.exports=i.p+"img/75.bee78adb.jpg"},7907:function(e,s,i){"use strict";e.exports=i.p+"img/76.ee62062f.jpg"},6854:function(e,s,i){"use strict";e.exports=i.p+"img/77.6434130c.jpg"},6085:function(e,s,i){"use strict";e.exports=i.p+"img/78.e7660829.jpg"},5176:function(e,s,i){"use strict";e.exports=i.p+"img/79.2f149130.jpg"},8344:function(e,s,i){"use strict";e.exports=i.p+"img/80.6075dd7b.jpg"},5957:function(e,s,i){"use strict";e.exports=i.p+"img/81.3bf04299.jpg"},8730:function(e,s,i){"use strict";e.exports=i.p+"img/82.0f4dcc8f.jpg"},7015:function(e,s,i){"use strict";e.exports=i.p+"img/83.48a95585.jpg"},8047:function(e,s,i){"use strict";e.exports=i.p+"img/84.12f2be1c.jpg"},4569:function(e,s,i){"use strict";e.exports=i.p+"img/85.0757ab2e.jpg"},3070:function(e,s,i){"use strict";e.exports=i.p+"img/86.c6864c4a.jpg"},5608:function(e,s,i){"use strict";e.exports=i.p+"img/87.7dbad48d.jpg"},7920:function(e,s,i){"use strict";e.exports=i.p+"img/88.aba9ab36.jpg"},9661:function(e,s,i){"use strict";e.exports=i.p+"img/89.952c9657.jpg"},2199:function(e,s,i){"use strict";e.exports=i.p+"img/90.d10bdc5e.jpg"},4458:function(e,s,i){"use strict";e.exports=i.p+"img/91.7b2af1ff.jpg"},6533:function(e,s,i){"use strict";e.exports=i.p+"img/92.3052cf2f.jpg"},2216:function(e,s,i){"use strict";e.exports=i.p+"img/93.a1794551.jpg"},8955:function(e,s,i){"use strict";e.exports=i.p+"img/94.02e7b5d2.jpg"},910:function(e,s,i){"use strict";e.exports=i.p+"img/95.4b076d38.jpg"},1177:function(e,s,i){"use strict";e.exports=i.p+"img/96.0576fd0e.jpg"},4300:function(e,s,i){"use strict";e.exports=i.p+"img/97.b9659d39.jpg"},8399:function(e,s,i){"use strict";e.exports=i.p+"img/98.92703fd3.jpg"},338:function(e,s,i){"use strict";e.exports=i.p+"img/99.695bbf29.jpg"},2345:function(e){"use strict";e.exports=JSON.parse('{"datas":[{"id":"01","name":"天作之合","en_name":"A Match Made in Heaven","years":"","size":"80*28.5*2","class":"wooden"},{"id":"02","name":"五彩繽紛","en_name":"Colorful Life","years":"","size":"80*28.5*2","class":"wooden"},{"id":"03","name":"屏之舞","en_name":"A Peacock Flaunting Its Tail","years":"","size":"80*28.5*2","class":"wooden"},{"id":"04","name":"吉利香蕉","en_name":"Lucky Banana","years":"","size":"80*28.5*2","class":"wooden"},{"id":"05","name":"吉慶有餘","en_name":"Auspicious Fish","years":"","size":"80*28.5*2","class":"wooden"},{"id":"06","name":"年年有餘","en_name":"There are Fish in Every Auspicious Year","years":"","size":"80*28.5*2","class":"wooden"},{"id":"07","name":"夜的守護神","en_name":"Guardian of the Night","years":"","size":"80*28.5*2","class":"wooden"},{"id":"08","name":"幸福美滿","en_name":"A Happy and Fulfilling Life","years":"","size":"80*28.5*2","class":"wooden"},{"id":"09","name":"時來運轉","en_name":"The Arrival of Fortune","years":"","size":"80*28.5*2","class":"wooden"},{"id":"10","name":"浪漫花語","en_name":"Romantic and Loving Flowers","years":"","size":"80*28.5*2","class":"wooden"},{"id":"11","name":"除舊佈新","en_name":"Sweep Away the Old and Usher in the New","years":"","size":"80*28.5*2","class":"wooden"},{"id":"12","name":"壽桃","en_name":"Birthday Peach","years":"","size":"80*28.5*2","class":"wooden"},{"id":"13","name":"蒜你厲害","en_name":"Awesome Garlic","years":"","size":"80*28.5*2","class":"wooden"},{"id":"14","name":"龍鳳呈祥","en_name":"Auspicious Dragon and Phoenix","years":"","size":"80*28.5*2","class":"wooden"},{"id":"15","name":"繁花盛開","en_name":"Blooming Flowers","years":"","size":"80*28.5*2","class":"wooden"},{"id":"16","name":"吉祥","en_name":"Auspiciousness","years":"","size":"40*28.5*2","class":"wooden"},{"id":"17","name":"報喜靈鳥","en_name":"The Bird of Annunciation","years":"","size":"40*28.5*2","class":"wooden"},{"id":"18","name":"三寸金蓮","en_name":"Elegant and Petite Shoes","years":"","size":"40*28.5*2","class":"wooden"},{"id":"19","name":"圓滿","en_name":"A Fulfilling Life","years":"","size":"40*28.5*2","class":"wooden"},{"id":"20","name":"豐收","en_name":"Good Harvest","years":"","size":"40*28.5*2","class":"wooden"},{"id":"21","name":"心心相印","en_name":"Heart to Heart","years":"2023","size":"50*40*5","class":"mixed"},{"id":"22","name":"孔雀開屏福氣來","en_name":"Peacock Spreads Its Tail to Bring Good Fortune","years":"2024","size":"123*90*12","class":"mixed"},{"id":"23","name":"吉利","en_name":"Propitiousness","years":"","size":"104*74*9","class":"mixed"},{"id":"24","name":"五福迎春壽","en_name":"The Five Blessings Welcome Spring and Longevity","years":"2024","size":"61*61*4","class":"mixed"},{"id":"25","name":"一帆風順","en_name":"Safe and Smooth Sailing","years":"","size":"60*51","class":"mixed"},{"id":"26","name":"日春曳生","en_name":"Growing Beautifully on a Fine Spring Day","years":"2023","size":"115*54*18","class":"mixed"},{"id":"27","name":"毛利人生","en_name":"Small Profits Bring Great Happiness","years":"","size":"65*57*9.5","class":"mixed"},{"id":"28","name":"母儀椒房","en_name":"Queen of Chili Flowers","years":"","size":"86*75*12","class":"mixed"},{"id":"29","name":"步步青雲","en_name":"Progress Step by Step","years":"2023","size":"60*62*9","class":"mixed"},{"id":"30","name":"火鶴祥瑞","en_name":"Auspicious Flamingo Flower","years":"","size":"85*49*12","class":"mixed"},{"id":"31","name":"朱門和樂","en_name":"Wealthy, Harmonious and Happy Family","years":"","size":"75*68*9","class":"mixed"},{"id":"32","name":"如意","en_name":"Lucky as You Wish","years":"","size":"60*84*4","class":"mixed"},{"id":"33","name":"富貴繡球","en_name":"The Rich Hydrangea","years":"","size":"74*59*6.5","class":"mixed"},{"id":"34","name":"梧棲歸來","en_name":"The Return of Fortune and Success","years":"2023","size":"73*71*6","class":"mixed"},{"id":"35","name":"藍海遨遊","en_name":"Swim in the Blue Ocean","years":"2024","size":"56*76*7","class":"mixed"},{"id":"36","name":"竹籬笆的春天","en_name":"Bamboo Fence in Spring","years":"","size":"65*65*9","class":"mixed"},{"id":"37","name":"美苺生輝","en_name":"Sparkling Strawberries","years":"","size":"56*67*8","class":"mixed"},{"id":"38","name":"雞食無憂","en_name":"Chickens Always Have Plenty of Feed","years":"2023","size":"47*88*10","class":"mixed"},{"id":"39","name":"洋菊化蝶","en_name":"Chamomile Transforms into a Butterfly","years":"","size":"71*61*8","class":"mixed"},{"id":"40","name":"紅花犇放","en_name":"Red Flowers Compete to Bloom","years":"2023","size":"74*86*11.5","class":"mixed"},{"id":"41","name":"紅梅月光","en_name":"Red Plum Blossoms under the Moon","years":"","size":"82*65*9","class":"mixed"},{"id":"42","name":"完苺展出","en_name":"Perfect Strawberries Displaying Themselves","years":"2022","size":"89*78.5*10.5","class":"mixed"},{"id":"43","name":"風姿綽約","en_name":"Elegance and Gracefulness","years":"2024","size":"123*98*12","class":"mixed"},{"id":"44","name":"海中歡樂營","en_name":"Sea Fun Camp","years":"2024","size":"78*73*8","class":"mixed"},{"id":"45","name":"唯樂之舞","en_name":"Just Happy Dancing","years":"","size":"65*65*9","class":"mixed"},{"id":"46","name":"瑰麗呈祥","en_name":"Each Restless Heart","years":"2022","size":"80*28.5*8","class":"mixed"},{"id":"47","name":"黃瑰蝶影","en_name":"Charm of Yellow Roses to Butterflies","years":"2022","size":"69*67*10","class":"mixed"},{"id":"48","name":"喜上加喜","en_name":"Happy Event on Top of Happiness","years":"","size":"74*65*9","class":"mixed"},{"id":"49","name":"覓食","en_name":"Foraging","years":"","size":"72*43*9","class":"mixed"},{"id":"50","name":"喜迎春","en_name":"Welcome Spring Happily","years":"2024","size":"34*30*3","class":"mixed"},{"id":"51","name":"紫菊添壽","en_name":"Beautiful Color of Purple Roses","years":"2024","size":"61*61*6","class":"mixed"},{"id":"52","name":"日春搖曳","en_name":"The Flower of Primula","years":"2024","size":"115*54*8","class":"mixed"},{"id":"53","name":"鬱滿花香","en_name":"Full of Flower Fragrance","years":"","size":"65*75*6.5","class":"mixed"},{"id":"54","name":"暗香橫斜","en_name":"Secret Fragrance of Plum Blossoms at Night","years":"2022","size":"90*67*12","class":"mixed"},{"id":"55","name":"葵占庭芳","en_name":"The fragrance of Sunflower Fills the Courtyard","years":"","size":"91*82*10","class":"mixed"},{"id":"56","name":"葵花向前","en_name":"The Sunflower Stretching towards the Sun","years":"","size":"98*79*10","class":"mixed"},{"id":"57","name":"紫氣瑰來","en_name":"Life Embellished with Roses","years":"","size":"84*142*12","class":"mixed"},{"id":"58","name":"蟹蘭富貴","en_name":"Crab Cactus Brings Wealth","years":"","size":"88*78*9","class":"mixed"},{"id":"59","name":"端節火鶴","en_name":"Flamingo Flower of the Dragon Boat Festival","years":"","size":"74*65*6.5","class":"mixed"},{"id":"60","name":"銀兩滿室 (左)","en_name":"Room Filled with Treasure (Left)","years":"","size":"150*76*12","class":"mixed"},{"id":"61","name":"疏影暗香","en_name":"Secret Fragrance and Sparse Flowers","years":"","size":"90*67*12","class":"mixed"},{"id":"62","name":"椒草紅辣","en_name":"Pepper Grass and Red Chili","years":"","size":"69*67*9","class":"mixed"},{"id":"63","name":"翩翩起舞","en_name":"The Dancing Butterflies","years":"","size":"59*59*3","class":"mixed"},{"id":"64","name":"蝶戀花舞","en_name":"Butterflies Dancing with Flowers","years":"","size":"83*68*16","class":"mixed"},{"id":"65","name":"鴻蘿皎兔","en_name":"White Rabbits Love Carrots","years":"","size":"65*72*8","class":"mixed"},{"id":"66","name":"蝶夢人生","en_name":"Life is Like a Butterfly Dream","years":"","size":"70*61*5","class":"mixed"},{"id":"67","name":"濃情愛意","en_name":"Deep Love","years":"2024","size":"81*71*13","class":"mixed"},{"id":"68","name":"元亨花開","en_name":"The Peony Blossoms when Yuan Heng Returns","years":"","size":"96*72*9","class":"mixed"},{"id":"69","name":"黃金之戀","en_name":"Love of Gold","years":"2023","size":"87*127*9","class":"mixed"},{"id":"70","name":"紫瑰彩麗","en_name":"Beautiful Color of Purple Roses","years":"2023","size":"72*75*12","class":"mixed"},{"id":"71","name":"美麗人生","en_name":"Colorful Life","years":"","size":"88*74*10","class":"mixed"},{"id":"72","name":"花開運來","en_name":"The flowers Bloom to Bring Good Luck","years":"","size":"111*93*12","class":"mixed"},{"id":"73","name":"LUCK歸來","en_name":"The Return of Good Luck","years":"2023","size":"78*73*8","class":"mixed"},{"id":"74","name":"大吉大利","en_name":"Great Fortune","years":"","size":"93*63*10","class":"mixed"},{"id":"75","name":"水仙仙語","en_name":"The Fairy Talk of Daffodils","years":"","size":"94*83*8","class":"mixed"},{"id":"76","name":"好桃出現","en_name":"The Appearance of Good Peaches","years":"","size":"62*100*12","class":"mixed"},{"id":"77","name":"竹籬重葛","en_name":"Fruitful Vines on the Bamboo Fence","years":"","size":"92*110*12.5","class":"mixed"},{"id":"78","name":"百合望月","en_name":"The Lilies Whisper to the Moon","years":"","size":"76*62*9","class":"mixed"},{"id":"79","name":"玫貴松子","en_name":"Planting Wealth and Children","years":"","size":"75*64.5*8","class":"mixed"},{"id":"80","name":"花好月圓","en_name":"Happy Time and Bright Full Moon","years":"","size":"128*95*13","class":"mixed"},{"id":"81","name":"金楓旺月","en_name":"Golden Maple Leaves Make the Moon Brighter","years":"","size":"112*78*12","class":"mixed"},{"id":"82","name":"梅開月滿","en_name":"The Plum Blossoms under a Full Moon","years":"","size":"128*108*15","class":"mixed"},{"id":"83","name":"百年好合","en_name":"A Century-long and Harmonious Marriage","years":"","size":"91*71*9","class":"mixed"},{"id":"84","name":"普普風華","en_name":"The Elegance Contained in the Ordinary","years":"","size":"98*79*10","class":"mixed"},{"id":"85","name":"紫茄東來","en_name":"Purple Eggplants Bring Good Fortune","years":"","size":"113*94*12","class":"mixed"},{"id":"86","name":"勵志滿乾坤","en_name":"Happiness and Beauty of Lychee Season","years":"","size":"118*66*13","class":"mixed"},{"id":"87","name":"濃情密意","en_name":"Be with You","years":"","size":"61*52*5","class":"mixed"},{"id":"88","name":"鵝滿池香","en_name":"A Beautiful Pond Filled with Geese","years":"","size":"81.5*69*7","class":"mixed"},{"id":"89","name":"瑰麗圓滿","en_name":"A Colorful and Fulfilling Life","years":"","size":"81*81*9","class":"mixed"},{"id":"90","name":"愛的交響曲","en_name":"Symphony of Love","years":"2023","size":"94*93*11","class":"mixed"},{"id":"91","name":"薰夏荷風","en_name":"Lotus Swaying in the Summer Breeze","years":"","size":"81*61*10","class":"mixed"},{"id":"92","name":"月伴翠蘆莉","en_name":"The Moon is Whispering to Ruellia Simplex","years":"2024","size":"123*98*12","class":"mixed"},{"id":"93","name":"滿室銀兩 (右)","en_name":"Room Filled with Treasure (Right)","years":"","size":"150*76*12","class":"mixed"},{"id":"94","name":"韻","en_name":"","years":"","size":"","class":"solid"},{"id":"95","name":"水仙迎春","en_name":"","years":"","size":"","class":"solid"},{"id":"96","name":"招財妙妙","en_name":"","years":"","size":"","class":"solid"},{"id":"97","name":"招財蛙","en_name":"","years":"","size":"","class":"solid"},{"id":"98","name":"金福壺泉","en_name":"","years":"","size":"","class":"solid"},{"id":"99","name":"財源滾滾","en_name":"","years":"","size":"","class":"solid"},{"id":"100","name":"天天抽獎-面紙盒(非賣品)","en_name":"","years":"","size":"","class":"solid"},{"id":"101","name":"龍來喜洋洋","en_name":"","years":"","size":"","class":"solid"},{"id":"102","name":"粉紅倚麗","en_name":"","years":"","size":"","class":"solid"},{"id":"103","name":"除舊佈新","en_name":"","years":"","size":"","class":"solid"},{"id":"104","name":"馬爾濟斯","en_name":"","years":"","size":"","class":"solid"},{"id":"105","name":"馬戲團","en_name":"","years":"","size":"","class":"solid"},{"id":"106","name":"捧花","en_name":"","years":"","size":"","class":"solid"},{"id":"107","name":"鼠不完的寶","en_name":"","years":"","size":"","class":"solid"},{"id":"108","name":"大船入港(魚)滿載而歸(蝦)","en_name":"","years":"","size":"","class":"solid"},{"id":"109","name":"貴賓狗","en_name":"","years":"","size":"","class":"solid"},{"id":"110","name":"聖誕老公公","en_name":"","years":"","size":"","class":"solid"},{"id":"111","name":"福氣玉兔","en_name":"","years":"","size":"","class":"solid"},{"id":"112","name":"柳銀(銀兩)","en_name":"","years":"","size":"","class":"solid"},{"id":"113","name":"餅圓月圓","en_name":"","years":"","size":"","class":"solid"},{"id":"114","name":"花中君子","en_name":"","years":"","size":"","class":"solid"},{"id":"115","name":"家有喜事(非賣品)","en_name":"","years":"","size":"","class":"solid"}]}')}}]);
//# sourceMappingURL=223.9f123e71.js.map