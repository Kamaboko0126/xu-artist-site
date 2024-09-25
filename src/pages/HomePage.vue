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
    const artistImg = ref(require("@/assets/artist.jpg"));
    const artworkImgs = ref([]);
    const logoColor = ref("");
    const windowWidth = ref(window.innerWidth);

    // 動態引入 assets/flat 和 assets/solid 目錄中的所有圖片
    const flatImages = require
      .context("@/assets/flat/normalized/", false, /\.(png|jpe?g|svg)$/)
      .keys()
      .map((key) =>
        require(`@/assets/flat/normalized/${key.replace("./", "")}`)
      );
    const solidImages = require
      .context("@/assets/solid/normalized/", false, /\.(png|jpe?g|svg)$/)
      .keys()
      .map((key) =>
        require(`@/assets/solid/normalized/${key.replace("./", "")}`)
      );

    // 合併並打亂圖片
    artworkImgs.value = [...flatImages, ...solidImages].sort(
      () => Math.random() - 0.5
    );
    // console.log("artworkImgs:", artworkImgs.value);

    onMounted(async () => {
      gsap.registerPlugin(ScrollTrigger, Observer);

      await nextTick();

      const imgElement = document.querySelector(".img");

      var tl = gsap.timeline({});
      if (imgElement) {
        imgElement.onload = () => {
          const imgWidth = imgElement.offsetWidth - 1;
          // console.log("imgWidth:", imgWidth); // 確認 imgWidth 是否正確
          tl.to(".banner-animation .imgs", {
            scrollTrigger: {
              trigger: ".banner-animation .imgs",
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

      gsap.fromTo(
        [".bg.third .container .imgs", ".bg.third .container .imgs"],
        { yPercent: 0 },
        { yPercent: -95, duration: 140, ease: "linear", repeat: -1 },
        "<"
      );

      let sections = document.querySelectorAll("section"),
        images = document.querySelectorAll(".bg"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner"),
        currentIndex = -1,
        wrap = gsap.utils.wrap(0, sections.length),
        animating;

      console.log("sections:", sections);

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      // 更新 windowWidth 當視窗大小改變時
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });

      function gotoSection(index, direction) {
        if (index === 1 && windowWidth.value > 1100 && direction === 1) {
          index = 2;
        } else if (
          index === 1 &&
          windowWidth.value > 1100 &&
          direction === -1
        ) {
          index = 0;
        }

        index = wrap(index); // make sure it's valid
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

        currentIndex = index;
        // console.log("index:", index);

        if (index === 0 && windowWidth.value > 1100) {
          tl.fromTo(
            [".bg.first .right", ".bg.first .right"],
            { xPercent: 40, opacity: 0 },
            { xPercent: 0, opacity: 1, ease: "power4.out" }
          );
          logoColor.value = "#fff";
        } else if (index === 0 && windowWidth.value < 1100) {
          logoColor.value = "#fff";
        }

        if (index === 1 && windowWidth.value < 1100) {
          logoColor.value = "#fff";
        }
        if (index === 1 && windowWidth.value < 500) {
          gsap.to(".header-container", { opacity: 0 });
          return;
        }

        if (index === 2 && windowWidth.value > 1100) {
          tl.fromTo(
            [".bg.second .right .background", ".bg.second .right .background"],
            { xPercent: 40, opacity: 0 },
            { xPercent: 0, opacity: 1, ease: "power2.out", duration: 0.8 }
          );
          tl.fromTo(
            [".bg.second .right .img", ".bg.second .right .img"],
            { xPercent: 70, opacity: 0 },
            { xPercent: 0, opacity: 1, ease: "power2.out", duration: 1.3 }
          );
          tl.fromTo(
            [".bg.second .left .top", ".bg.second .left .top"],
            { yPercent: 130, opacity: 0 },
            { yPercent: 0, opacity: 1, ease: "power4.out", duration: 1.3 },
            "<"
          );
          tl.fromTo(
            [".bg.second .left .bottom", ".bg.second .left .bottom"],
            { yPercent: 40, opacity: 0 },
            { yPercent: 0, opacity: 1, ease: "power4.out", duration: 1 },
            "<"
          );
          logoColor.value = "#fff";
        } else if (index === 2 && windowWidth.value < 1100) {
          logoColor.value = "#000";
        }

        if (index === 3) {
          gsap.to(".header-container", { opacity: 0 });
        } else {
          gsap.to(".header-container", { opacity: 1 });
        }

        if (index === 4) {
          logoColor.value = "#000";
        }
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
    });

    return {
      bannerImg,
      iconImg,
      artistImg,
      artworkImgs,
      logoColor,
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
      <h1 :style="{ color: logoColor }">Seaport Handicrafts</h1>
      <h1>Seaport Handicrafts</h1>
      <h6 :style="{ color: logoColor }">
        - Contemporary Knot Art of Hsu Pei-Tzu -
      </h6>
    </div>
  </header>
  <section class="first">
    <div class="outer">
      <div class="inner">
        <div class="bg first">
          <div class="left">
            <img :src="iconImg" />
          </div>

          <div class="right" id="right">
            <div class="text-content">
              <p>
                　　人說：「女人四十一枝花，我八十初頭了」，取名為「二蕊花阿嬤藝術家」；學藝術的職業婦女相當艱辛，在傳統父權至上的家庭更為如此，因此有一股不服輸的精神，所以毅然走上……藝術創作之路。<br /><br />
                　　在學習歷程中，跟著廖明依老師學習，從工筆花鳥到膠彩畫。幸運的我，當年畫作參加兩次中部美展皆得獎，台中縣美展連續三年獲得前三名，因此成為永久免審藝術家，每年都受邀中縣美展，縣市合併後就受邀參加台中市大墩文化中心的女性藝術家聯展。<br /><br />
                　　爾後每年臺中市女性藝術家聯展、松柏國民美展，就成為我生命中最值得分享的經驗。之後又接觸結藝編織，是受到娘家姪女(徐秀鑾)的鼓舞；剛開始做一些小鑰匙圈與人結緣，朋友們看到覺得很精緻，鼓勵我拿去參展。近年來與膠彩畫的玉美、瑞瓊、真真、佳以、文珍、秀梅，等同事朋友共組124畫會研究創作，相互學習鼓勵，開啟女性藝術家藝術文化薪傳的秘密基地—中央路女性藝術家畫室。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="second-for-phone">
    <div class="outer">
      <div class="inner">
        <div class="bg second-for-phone">
          <div class="text-content">
            <p>
              　　人說：「女人四十一枝花，我八十初頭了」，取名為「二蕊花阿嬤藝術家」；學藝術的職業婦女相當艱辛，在傳統父權至上的家庭更為如此，因此有一股不服輸的精神，所以毅然走上……藝術創作之路。<br /><br />
              　　在學習歷程中，跟著廖明依老師學習，從工筆花鳥到膠彩畫。幸運的我，當年畫作參加兩次中部美展皆得獎，台中縣美展連續三年獲得前三名，因此成為永久免審藝術家，每年都受邀中縣美展，縣市合併後就受邀參加台中市大墩文化中心的女性藝術家聯展。<br /><br />
              　　爾後每年臺中市女性藝術家聯展、松柏國民美展，就成為我生命中最值得分享的經驗。之後又接觸結藝編織，是受到娘家姪女(徐秀鑾)的鼓舞；剛開始做一些小鑰匙圈與人結緣，朋友們看到覺得很精緻，鼓勵我拿去參展。近年來與膠彩畫的玉美、瑞瓊、真真、佳以、文珍、秀梅，等同事朋友共組124畫會研究創作，相互學習鼓勵，開啟女性藝術家藝術文化薪傳的秘密基地—中央路女性藝術家畫室。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="second">
    <div class="outer">
      <div class="inner">
        <div class="bg second">
          <div class="left">
            <div class="top">
              <h1>徐碧姿</h1>
              <h3>Hsu Pei-Tzu</h3>
            </div>
            <div class="bottom">
              <div class="text-content">
                <p>
                  徐老師的編織結藝最與眾不同的是，她將膠彩畫的發光礦物顏料與多色顏料結合於編織作品中，用她敏銳獨到的觀察力，從生活中的花草、蟲、魚、蝶、蔬果等觀察，尋找最貼近生活的題材，在日常的生活中尋找俯拾即是的美感，並運用其巧手編織將所見轉化爲更具美與意的創作，並藉此表達對自然的關懷。<br />
                  (文/柯丁祺)
                </p>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="background"></div>
            <div
              class="img"
              :style="{ 'background-image': `url(${artistImg})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="third">
    <div class="outer">
      <div class="inner">
        <div class="bg third">
          <div class="header-block"></div>
          <div class="container">
            <div class="imgs">
              <img v-for="img in artworkImgs" :key="img" :src="img" />
            </div>
          </div>
          <div class="bottom-block"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="fourth">
    <div class="outer">
      <div class="inner">
        <div class="bg fourth">
          <h1>這是footer，放一些展覽的資訊，如:時間、地點等</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner-animation {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: -2;
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
  z-index: 99;
  transition: 1s;
  @media (max-width: 500px) {
    padding: calc(var(--logo-padding) * 2) 0 0 var(--logo-padding);
  }
  h1 {
    text-transform: uppercase;
    font-family: "Playfair Display";
    line-height: normal;
    font-weight: 500;
    color: #fff;
    transition: 1s;
    &:nth-child(2) {
      color: #f8bc6e;
    }
  }
  h6 {
    font-family: "Qwigley";
    font-weight: 400;
    transition: 1s;
    color: #fff;
    transition: 1s;
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
      padding: 0 0 var(--logo-padding) calc(var(--logo-padding) + 25px);
      @media (max-width: 1100px) {
        width: 100%;
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
      @media (max-width: 1100px) {
        display: none;
      }
      .text-content {
        width: 100%;
        // background: linear-gradient(to left, #efebe5ae 80%, transparent);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        p {
          max-width: 1200px;
          padding: 80px 50px 80px 110px;
        }
      }
    }

    @media (min-width: 1101px) {
      .right .text-content p {
        background: linear-gradient(to left, #efebe5ae 80%, transparent);
      }
    }
    @media (max-width: 1100px) {
      overflow: none;

      flex-direction: column;
      width: 100%;
      height: 100vh;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
        background: linear-gradient(to top, #efebe5ae 80%, transparent);
        .text-content p {
          padding: 110px 50px 80px 50px;
        }
      }
    }
  }
}
.bg.second {
  .left {
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 60px 110px 60px 50px;
    background: linear-gradient(to right, #efebe5ae 80%, transparent);
    .top {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      h1 {
        letter-spacing: 5px;
        overflow: hidden;
      }
      h3 {
        margin-left: 5px;
        color: #9f886b;
      }
    }
  }
  .right {
    width: 65%;
    height: 100%;
    // padding: 100px 80px 100px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .background {
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      width: 40%;
      height: 100%;
      clip-path: polygon(46% 0, 100% 0, 100% 100%, 0% 100%);
      background: #efebe5;
      // background: linear-gradient(to bottom, #efebe5 70%, #efebe5b6);
    }
    .img {
      width: 80%;
      height: 80%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

@media (max-width: 1100px) {
  .bg.second {
    background: #efebe5;
    .left {
      width: 100%;
      justify-content: center;
      padding: 60px 40px 60px 50px;
    }
    .right {
      width: 100%;
      justify-content: center;
      .background {
        display: none;
      }
      .img {
        width: 90%;
        height: 90%;
      }
    }
  }
}

@media (max-width: 700px) {
  .bg.second {
    flex-direction: column;
    .left {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 90%;
      padding: 160px 0 0 0;
      .bottom {
        display: none;
      }
    }
  }
}

.bg.second-for-phone {
  .text-content {
    width: 100%;
    background: #efebe5ae;
    padding: var(--logo-padding) 50px;
    @media (max-width: 1300px) {
      padding: var(--logo-padding) 40px;
    }
    @media (max-width: 900px) {
      padding: var(--logo-padding) 30px;
    }
    @media (max-width: 500px) {
      padding: var(--logo-padding) 20px;
    }
  }
}

.bg.third {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #efebe5;
  .header-block {
    height: calc((var(--logo-padding) * 1.2) + 132px);
    width: 100%;
    background: linear-gradient(to bottom, #efebe5 30%, transparent);
    // background: #efebe5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .bottom-block {
    height: calc(20px);
    background: #efebe5;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .imgs {
      padding: 1rem;
      column-count: 6;
      column-gap: 1rem;
      width: 100%;
      margin: 1rem auto;
      @media (max-width: 1400px) {
        column-count: 4;
      }
      @media (max-width: 1000px) {
        column-count: 2;
      }

      img {
        width: 100%;
        padding: 0.5rem 0;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
      }
    }
  }
}
.bg.fourth {
  background: #efebe5;
}

h2 * {
  will-change: transform;
}
</style>
