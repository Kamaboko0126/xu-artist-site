<script>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

/* eslint-disable no-irregular-whitespace */
export default {
  setup() {
    const bannerImg = ref(require("@/assets/banner.jpg"));
    const iconImg = ref(require("@/assets/icon.png"));
    onMounted(async () => {
      gsap.registerPlugin(ScrollTrigger, Observer);

      await nextTick();

      const imgElement = document.querySelector(".img");

      var tl = gsap.timeline({});
      if (imgElement) {
        imgElement.onload = () => {
          const imgWidth = imgElement.offsetWidth - 1;
          console.log("imgWidth:", imgWidth); // 確認 imgWidth 是否正確
          tl.to(".imgs", {
            scrollTrigger: {
              trigger: ".imgs",
            },
            x: -imgWidth * 2,
            duration: 200,
            ease: "linear",
            repeat: -1,
          });
        };
      } else {
        console.error("imgElement not found");
      }

      let sections = document.querySelectorAll("section"),
        images = document.querySelectorAll(".bg"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner"),
        currentIndex = -1,
        wrap = gsap.utils.wrap(0, sections.length),
        animating;

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      function gotoSection(index, direction) {
        index = wrap(index); // make sure it's valid
        console.log(index, direction);
        animating = true;
        let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => (animating = false),
          });

        if (currentIndex >= 0) {
          // The first time this function runs, current is -1
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -100 * dFactor }).set(
            sections[currentIndex],
            { autoAlpha: 0 }
          );
        }
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo(
          [outerWrappers[index], innerWrappers[index]],
          {
            yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
          },
          {
            yPercent: 0,
          },
          0
        ).fromTo(
          images[index],
          { yPercent: 100 * dFactor },
          { yPercent: 0 },
          0
        );
        if (index === 0) {
          tl.fromTo([".right", ".right"], { xPercent: 100 }, { xPercent: 0 });
        }

        currentIndex = index;
      }

      Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true,
      });

      gotoSection(0, 1);

      // tl.from(".right", {
      //   scrollTrigger: {
      //     start: "top top", // 當 .right 元素的頂部進入視窗底部時觸發
      //     end: "+=800", // 當 .right 元素的頂部到達視窗中心時結束
      //     snap: 1, // 捲動時每次滾動 1/4 螢幕寬度
      //     scrub: true, // 平滑滾動
      //     pin: ".banner-container", // 固定 .right 元素
      //   },
      //   x: window.innerWidth, // 從螢幕右邊滑入
      //   duration: 1,
      //   ease: "power2.out",
      // });

      // ScrollTrigger.create({
      //   trigger: ".block-100",
      //   start: "center bottom",
      //   markers: true,
      //   onEnter: () => {
      //     gsap.to(window, {
      //       scrollTo: { y: ".artist-container", offsetY: 0 },
      //       duration: 1,
      //       ease: "power2.out",
      //     });
      //   },
      // });
    });

    return {
      bannerImg,
      iconImg,
    };
  },
};
</script>

<template>
  <div class="banner-animation">
    <div class="imgs">
      <img v-for="i in 5" :key="i" :src="bannerImg" class="img" />
    </div>
  </div>

  <header>
    <div class="header-container">
      <h1>Seaport Handicrafts</h1>
      <h1>Seaport Handicrafts</h1>
      <h6>- Contemporary Knot Art of Hsu Pei-Tzu -</h6>
    </div>
  </header>
  <section class="first">
    <div class="outer">
      <div class="inner">
        <div class="bg first">
          <div class="left">
            <ul class="rotated-text">
              <li>Contemporary</li>
              <li>Knot</li>
              <li>Art</li>
              <li>of</li>
              <li>Hsu</li>
              <li>Pei-Tzu</li>
            </ul>
            <ul class="vertical-text">
              <li>徐</li>
              <li>碧</li>
              <li>姿</li>
              <li>結</li>
              <li>藝</li>
              <li>編</li>
              <li>織</li>
            </ul>
            <img :src="iconImg" />
          </div>

          <div class="right" id="right">
            <div class="text-content">
              <p>
                　　人說：「女人四十一枝花，我八十初頭了」，取名為「二蕊花阿嬤藝術家」；學藝術的職業婦
                女相當艱辛，在傳統父權至上的家庭更為如此，因此有一股不服輸的精神，所以毅然走
                上……藝術創作之路。<br />
                　　在學習歷程中，跟著廖明依老師學習，從工筆花鳥到膠彩畫。幸運的我，當年畫作參加
                兩次中部美展皆得獎，台中縣美展連續三年獲得前三名，因此成為永久免審藝術家，每
                年都受邀中縣美展，縣市合併後就受邀參加台中市大墩文化中心的女性藝術家聯展。<br />
                　　爾後每年臺中市女性藝術家聯展、松柏國民美展，就成為我生命中最值得分享的經驗
                。之後又接觸結藝編織，是受到娘家姪女(徐秀鑾)的鼓舞；剛開始做一些小鑰匙圈與人結
                緣，朋友們看到覺得很精緻，鼓勵我拿去參展。近年來與膠彩畫的玉美、瑞瓊、真真、佳
                以、文珍、秀梅，等同事朋友共組124畫會研究創作，相互學習鼓勵，開啟女性藝術家藝術
                文化薪傳的秘密基地—中央路女性藝術家畫室。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="second">
    <div class="outer">
      <div class="inner">
        <div class="bg">
          <h2 class="section-heading">Animated with GSAP</h2>
        </div>
      </div>
    </div>
  </section>
  <!--<section class="third">
    <div class="outer">
      <div class="inner">
        <div class="bg">
          <h2 class="section-heading">GreenSock</h2>
        </div>
      </div>
    </div>
  </section>
  <section class="fourth">
    <div class="outer">
      <div class="inner">
        <div class="bg">
          <h2 class="section-heading">Animation platform</h2>
        </div>
      </div>
    </div>
  </section>
  <section class="fifth">
    <div class="outer">
      <div class="inner">
        <div class="bg">
          <h2 class="section-heading">Keep scrolling</h2>
        </div>
      </div>
    </div>
  </section> -->

  <!-- <div class="body">
    <div class="banner-container">
      <div class="components">
        <div class="left">
          <div class="top">
          </div>
          
        </div>
      </div>
    </div>

    <div class="block-200"></div>

    <div class="artist-container">
      <div class="left">
        <div class="text-content">
          <div class="texts">
            <div class="top">
              <h1>徐碧姿</h1>
              <h3>Hsu Pei-Tzu</h3>
            </div>
            <div class="bottom">
              藝術家李貞慧。 永遠的母親、妻子、女兒。教授。創作者。
              柔軔如藤、昂揚似松。 她追逐光影，調皮如精靈玩弄顏料;
              她感悟生命，內觀自省、悠然自得。
              其作品於一筆一畫間完成禪修般的頓悟， 自成生命第三境界。
              (文/游惠遠)
            </div>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.banner-animation {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  .imgs {
    display: flex;
    white-space: nowrap;
    img {
      height: 100vh;
      margin-left: -1px;

      &:nth-child(2n) {
        transform: scaleX(-1);
      }
    }
  }
}

$bg-gradient: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.3) 100%
);

* {
  box-sizing: border-box;
  user-select: none;
}

a {
  color: #fff;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  color: white;
  background: black;
  font-family: "Cormorant Garamond", serif;
  text-transform: uppercase;
}

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--logo-padding) 0 0 var(--logo-padding);
  width: 100%;
  z-index: 3;
  h1 {
    text-transform: uppercase;
    font-family: "Playfair Display";
    line-height: normal;
    font-weight: 500;
    font-size: var(--banner-main-font-size);
    &:nth-child(2) {
      color: #9f886b;
    }
  }
  h6 {
    font-family: "Qwigley";
    font-size: var(--banner-second-font-size);
    font-weight: 400;
  }
}

section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;

  .outer,
  .inner {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }

  .bg {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    overflow: hidden;
  }

  .bg.first {
    .left {
      display: flex;
      width: 30%;
      height: 100%;
      align-items: flex-end;
      justify-content: flex-start;
      padding: 0 0 var(--logo-padding) var(--logo-padding);
      ul {
        display: flex;
        li {
          list-style: none;
          margin: 0;
          padding: 0;
          font-weight: 600;
          color: #232323;
          flex-shrink: 0;
        }
      }
      .rotated-text {
        font-family: "Playfair Display" !important;
        writing-mode: vertical-rl;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        height: 35vh;
        li:not(:first-child) {
          margin-top: 5px;
        }
      }
      .vertical-text {
        line-height: normal;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 15px 25px 15px 0;
        height: 35vh;
      }
      img {
        height: 40vh;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 70%;
      .text-content {
        width: 100%;
        background: linear-gradient(to left, #efebe5ae 80%, transparent);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        p {
          max-width: 1200px;
          padding: 80px 50px 80px 110px;
        }
      }
    }
  }
}

h2 * {
  will-change: transform;
}
</style>

<style scoped lang="scss">
// .body {
//   width: 100%;
//   overflow-x: hidden;
// }

// .banner-container {
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   .components {
//     //   max-width: 1600px;
//     width: 100%;
//     top: 0;
//     left: 0;
//     display: flex;
//     .left {
//       width: var(--banner-left-width);
//       .top {
//         position: absolute;
//         padding: var(--logo-padding) 0 0 var(--logo-padding);
//         h1 {
//           text-transform: uppercase;
//           font-family: "Playfair Display";
//           line-height: normal;
//           font-weight: 500;
//           font-size: var(--banner-main-font-size);
//           &:nth-child(2) {
//             color: #9f886b;
//           }
//         }
//         h6 {
//           font-family: "Qwigley";
//           font-size: var(--banner-second-font-size);
//           font-weight: 400;
//         }
//       }
//       .bottom {
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         padding: 0 0 var(--logo-padding) var(--logo-padding);
//         display: flex;
//         align-items: center;
//         ul {
//           display: flex;
//           li {
//             list-style: none;
//             margin: 0;
//             padding: 0;
//             font-weight: 600;
//             color: #232323;
//             flex-shrink: 0;
//           }
//         }
//         .rotated-text {
//           font-family: "Playfair Display" !important;
//           writing-mode: vertical-rl;
//           justify-content: center;
//           align-items: center;
//           flex-shrink: 0;
//           height: 35vh;
//           li:not(:first-child) {
//             margin-top: 5px;
//           }
//         }
//         .vertical-text {
//           line-height: normal;
//           height: 100%;
//           flex-direction: column;
//           align-items: center;
//           justify-content: space-between;
//           padding: 15px 25px 15px 0;
//           height: 35vh;
//         }
//         img {
//           height: 40vh;
//         }
//       }
//     }
//     .right {
//       height: 100vh;
//       width: calc(100% - var(--banner-left-width));
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//       position: relative;
//       .text-content {
//         background: linear-gradient(to left, #efebe5 80%, transparent);
//         p {
//           max-width: 1000px;
//           padding: 80px 50px 80px 110px;
//         }
//       }
//     }
//   }
// }

// .artist-container {
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   .left {
//     position: relative;
//     height: 100vh;
//     width: 50%;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     position: relative;
//     .text-content {
//       background: linear-gradient(to right, #efebe5 80%, transparent);
//       .texts {
//         padding: 80px 110px 80px 50px;
//       }
//     }
//   }
// }
//
</style>
