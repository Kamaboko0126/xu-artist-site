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
  <div class="banner-animation">
    <div class="imgs">
      <img v-for="i in 5" :key="i" :src="bannerImg" class="img" />
    </div>
  </div>
  <section class="banner-container">
    .
    <div class="top">
      <h1>Seaport Handicrafts</h1>
      <h1>Seaport Handicrafts</h1>
      <h6>- Contemporary Knot Art of Hsu Pei-Tzu -</h6>
    </div>
    <div class="bottom">
      <img :src="iconImg" />
    </div>
  </section>

  <main>
    <section class="first">

    </section>
  </main>

  <!-- <header>
    <div class="header-container">
      <h1 :style="{ color: logoColor }">Seaport Handicrafts</h1>
      <h1>Seaport Handicrafts</h1>
      <h6 :style="{ color: logoColor }">
        - Contemporary Knot Art of Hsu Pei-Tzu -
      </h6>
    </div>
  </header> -->
  <!-- <section class="first">
    <div class="bg first">
      <div class="left"></div>

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
  </section> -->
  <!-- <section class="second-for-phone">
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
  </section> -->
</template>

<style scoped lang="scss">
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
  .top {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--logo-padding) 0 0 var(--logo-padding);
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
  .bottom {
    width: 100%;
    height: 40%;
    padding: 0 0 var(--logo-padding) var(--logo-padding);
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    img {
      height: 100%;
    }
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

* {
  box-sizing: border-box;
  user-select: none;
}

.section {
  height: 300vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}

.first{
  background: #fff;
}
</style>
