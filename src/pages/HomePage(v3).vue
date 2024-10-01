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

      // 更新 windowWidth 當視窗大小改變時
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });

      Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => console.log("onDown"),
        onUp: () => console.log("onUp"),
      });
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
  <div class="loader">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <header>
    <h1>Seaport Handicrafts</h1>
    <h6>- Contemporary Knot Art of Hsu Pei-Tzu -</h6>
  </header>
  <div class="banner-animation">
    <div class="imgs">
      <img v-for="i in 5" :key="i" :src="bannerImg" class="img" />
    </div>
  </div>
  <section class="banner-container">
    <div class="bottom">
      <img :src="iconImg" />
    </div>
  </section>

  <main>
    <section class="first">
      <div class="text-content">
        <p>
          　　人說：「女人四十一枝花，我八十初頭了」，取名為「二蕊花阿嬤藝術家」；學藝術的職業婦女相當艱辛，在傳統父權至上的家庭更為如此，因此有一股不服輸的精神，所以毅然走上……藝術創作之路。<br /><br />
          　　在學習歷程中，跟著廖明依老師學習，從工筆花鳥到膠彩畫。幸運的我，當年畫作參加兩次中部美展皆得獎，台中縣美展連續三年獲得前三名，因此成為永久免審藝術家，每年都受邀中縣美展，縣市合併後就受邀參加台中市大墩文化中心的女性藝術家聯展。<br /><br />
          　　爾後每年臺中市女性藝術家聯展、松柏國民美展，就成為我生命中最值得分享的經驗。之後又接觸結藝編織，是受到娘家姪女(徐秀鑾)的鼓舞；剛開始做一些小鑰匙圈與人結緣，朋友們看到覺得很精緻，鼓勵我拿去參展。近年來與膠彩畫的玉美、瑞瓊、真真、佳以、文珍、秀梅，等同事朋友共組124畫會研究創作，相互學習鼓勵，開啟女性藝術家藝術文化薪傳的秘密基地—中央路女性藝術家畫室。
        </p>
      </div>
    </section>
    <section class="second"></section>
    <section class="third"></section>
  </main>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  user-select: none;
}

header {
  height: 150px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  flex-direction: column;
  // background: #232323;
  padding: 0 3vw;
  h1 {
    text-transform: uppercase;
    font-family: "Playfair Display";
    line-height: normal;
    font-weight: 500;
    color: #f8bc6e;
  }
  h6 {
    font-family: "Qwigley";
    font-weight: 400;
    color: #fff;
  }
}

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

.banner-container {
  height: 100vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .bottom {
    width: 100%;
    height: 100%;
    padding: 0 0 7vh 7vw;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    @media (max-width: 768px) {
      padding: 0 0 4vh 9vw;
    }
    img {
      height: 50%;
      @media (max-width: 768px) {
        height: 40%;
      }
    }
  }
}

main {
  height: 1000vh;
}

.first {
  background: #ffffff95;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  padding: 10vh 5vw 5vh 5vw;

  @media (max-width: 768px) {
    clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 100%);
    padding: 6vh 8vw 5vh 8vw;
  }
}
.loader {
  position: fixed;
  z-index: 99999;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  display: none;
}

.spinner {
  --radius: 100;
  --size: 50;
  position: relative;
  width: calc(var(--size) * 1px);
  height: calc(var(--size) * 1px);
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #474bff;
    border-radius: 50%;
    transform: rotate(calc(var(--angle) * 1deg))
      translate(0, calc(var(--radius) * 0px));
    animation: spinner-19rk4d 1.5s calc(var(--delay) * 1.2s) infinite ease;
    &:nth-child(1) {
      --angle: 45;
      --delay: 0.1;
    }
    &:nth-child(2) {
      --angle: 90;
      --delay: 0.2;
    }
    &:nth-child(3) {
      --angle: 135;
      --delay: 0.3;
    }

    &:nth-child(4) {
      --angle: 180;
      --delay: 0.4;
    }

    &:nth-child(5) {
      --angle: 225;
      --delay: 0.5;
    }

    &:nth-child(6) {
      --angle: 270;
      --delay: 0.6;
    }

    &:nth-child(7) {
      --angle: 315;
      --delay: 0.7;
    }

    &:nth-child(8) {
      --angle: 360;
      --delay: 0.8;
    }
  }
}
@keyframes spinner-19rk4d {
  0%,
  30%,
  50%,
  100% {
    transform: rotate(calc(var(--angle) * 1deg))
      translate(0, calc(var(--radius) * 0px)) scale(0);
  }

  40% {
    transform: rotate(calc(var(--angle) * 1deg))
      translate(0, calc(var(--radius) * 1px)) scale(1);
  }
}
</style>
