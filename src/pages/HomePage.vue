<script>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* eslint-disable no-irregular-whitespace */
export default {
  setup() {
    const bannerImg = ref(require("@/assets/banner.jpg"));
    const iconImg = ref(require("@/assets/icon.png"));
    onMounted(async () => {
      gsap.registerPlugin(ScrollTrigger);

      await nextTick();

      const imgElement = document.querySelector(".img");
      if (imgElement) {
        imgElement.onload = () => {
          const imgWidth = imgElement.offsetWidth - 1;
          console.log("imgWidth:", imgWidth); // 確認 imgWidth 是否正確
          gsap.to(".imgs", {
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

      gsap.from(".right", {
        scrollTrigger: {
          trigger: ".fist-background",
          start: "top top", // 當 .right 元素的頂部進入視窗底部時觸發
          end: "bottom 100", // 當 .right 元素的頂部到達視窗中心時結束
            // markers: true, // 顯示觸發點
          snap: 1, // 捲動時每次滾動 1/4 螢幕寬度
          pin: ".first-background",
          scrub: true, // 平滑滾動
        },
        x: window.innerWidth, // 從螢幕右邊滑入
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".banner-container",{
        scrollTrigger:{
          trigger:".first-background",
          start:"bottom bottom",
          end:"bottom 100",
          markers:true,
          scrub:1,
          // pin:".first-background",
        },
        y:-window.innerHeight,
        duration:1,
        ease:"power2.out",
      })
    });

    return {
      bannerImg,
      iconImg,
    };
  },
};
</script>

<template>
  <div class="first-background">
    <div class="imgs">
      <img v-for="i in 5" :key="i" :src="bannerImg" class="img" />
    </div>
    <div class="banner-container">
      <div class="components">
        <div class="left">
          <div class="top">
            <h1>Eternal Weavings</h1>
            <h1>Eternal Weavings</h1>
            <h6>- Contemporary Knot Art of Hsu Pei-Tzu -</h6>
          </div>
          <div class="bottom">
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
    <div class="artist-contrainer">
      <div class="left">
        <div class="top">
          <h1>徐碧姿</h1>
          <h3>Hsu Pei-Tzu</h3>
        </div>
        <div class="bottom">
          藝術家李貞慧。 永遠的母親、妻子、女兒。教授。創作者。
          柔軔如藤、昂揚似松。 她追逐光影，調皮如精靈玩弄顏料;
          她感悟生命，內觀自省、悠然自得。 其作品於一筆一畫間完成禪修般的頓悟，
          自成生命第三境界。 (文/游惠遠)
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
  <div class="block"></div>
</template>

<style scoped lang="scss">
.block {
  height: 500vh;
  width: 100%;
}
.first-background {
  height: 100vh;
  overflow: hidden;
}

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

.banner-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .components {
    //   max-width: 1600px;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    .left {
      width: var(--banner-left-width);
      .top {
        position: absolute;
        padding: var(--logo-padding) 0 0 var(--logo-padding);
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
      .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 0 var(--logo-padding) var(--logo-padding);
        display: flex;
        align-items: center;
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
    }
    .right {
      height: 100vh;
      width: calc(100% - var(--banner-left-width));
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .text-content {
        background: linear-gradient(to left, #efebe5 80%, transparent);
        p {
          max-width: 1000px;
          padding: 80px 50px 80px 110px;
        }
      }
    }
  }
}

.artist-contrainer {
  height: 100vh;
  width: 100%;
  background-color: #7e7e7e;
  position: relative;
  z-index: 999;
}
</style>
