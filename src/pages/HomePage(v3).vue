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
    const artistImg = ref(require("@/assets/artist2.jpg"));
    const eihibitionImg1 = ref(require("@/assets/exhibition6.jpg"));
    const eihibitionImg2 = ref(require("@/assets/exhibition5.jpg"));
    const eihibitionImg3 = ref(require("@/assets/exhibition4.jpg"));
    const artworkImgs = ref([]);
    const logoColor = ref("");
    const windowWidth = ref(window.innerWidth);
    const loading = ref(true);

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

    // 創建一個函數來加載圖片並返回一個 Promise
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    // 等待所有圖片載入完成
    const loadAllImages = async () => {
      const imageSources = [
        bannerImg.value,
        iconImg.value,
        artistImg.value,
        eihibitionImg1.value,
        eihibitionImg2.value,
        eihibitionImg3.value,
        ...artworkImgs.value,
      ];
      await Promise.all(imageSources.map((src) => loadImage(src)));
    };

    onMounted(async () => {
      gsap.registerPlugin(ScrollTrigger, Observer);

      await nextTick();

      try {
        await loadAllImages();

        console.log("All images loaded");
        loading.value = false;

        // hide loader
        gsap.to(".loader", {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(".loader", { display: "none" });
          },
        });

        //load element && banner anition
        const imgElement = document.querySelector(".img");
        if (imgElement) {
          imgElement.onload = () => {};
        } else {
          console.error("imgElement not found");
        }
        const imgWidth = imgElement.offsetWidth - 1;
        gsap.to(".banner-animation .imgs", {
          x: -imgWidth * 2,
          duration: 200,
          ease: "linear",
          repeat: -1,
        });

        //banner animation
        gsap.from(".banner-container .bottom img", {
          opacity: 0,
          duration: 5,
          ease: "power2.out",
        });

        //first section animation
        var firstAnimation = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
          yoyo: true,
        });
        firstAnimation.fromTo(
          ".first",
          {
            clipPath: "polygon(0 0, 100% 8%, 100% 99%, 0 100%)",
          },
          {
            clipPath: "polygon(0 4%, 100% 12%, 100% 92%, 0 95%)",
            duration: 5,
            ease: "linear",
          }
        );
        firstAnimation.fromTo(
          ".first",
          {
            clipPath: "polygon(0 4%, 100% 12%, 100% 92%, 0 95%)",
          },
          {
            delay: 0.5,
            clipPath: "polygon(0 2%, 100% 7%, 100% 98%, 0 98%)",
            duration: 5,
            ease: "linear",
          }
        );

        //second section animation
        var secondAnimation = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
          yoyo: true,
        });
        secondAnimation.fromTo(
          [".first-img", ".first-img"],
          {
            backgroundPositionX: "69%",
          },
          {
            backgroundPositionX: "59%",
            duration: 30,
            ease: "linear",
            yoyo: true,
            repeat: -1,
          }
        );
        secondAnimation.fromTo(
          [".second-img", ".second-img"],
          {
            backgroundPositionX: "5%",
          },
          {
            backgroundPositionX: "30%",
            duration: 10,
            ease: "linear",
            yoyo: true,
            repeat: -1,
          },
          "<"
        );
        secondAnimation.fromTo(
          [".third-img", ".third-img"],
          {
            backgroundPositionX: "20%",
          },
          {
            backgroundPositionX: "50%",
            duration: 15,
            ease: "linear",
            yoyo: true,
            repeat: -1,
          },
          "<"
        );
        var secondTitleAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: ".second .title",
            start: "top 40%",
            end: "bottom 40%",
          },
        });
        secondTitleAnimation.from(".second .title .first-title", {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        secondTitleAnimation.from(
          ".second .title .second-title",
          {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
          },
          "<"
        );
        secondTitleAnimation.from(".second .container .img", {
          opacity: 0,
          duration: 1,
          stagger: 0.5,
        });

        //third section animation
        var thirdTextAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: ".third",
            start: "top 40%",
            end: "bottom 40%",
          },
        });
        thirdTextAnimation.from(".third .top .text-content", {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        thirdTextAnimation.from(
          ".third .bottom .img",
          {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3,
          },
          "<"
        );
        var thirdAnimation = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
          yoyo: true,
        });
        thirdAnimation.fromTo(
          ".third",
          {
            clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 95%)",
          },
          {
            clipPath: "polygon(0 12%, 100% 3%, 100% 98%, 0 92%)",
            duration: 5,
            ease: "linear",
          }
        );
        thirdAnimation.fromTo(
          ".third",
          {
            clipPath: "polygon(0 12%, 100% 3%, 100% 98%, 0 92%)",
          },
          {
            clipPath: "polygon(0 3%, 100% 2%, 100% 98%, 0 94%)",
            duration: 5,
            delay: 0.5,
            ease: "linear",
          }
        );
        // 將 thirdAnimation 加入 thirdTextAnimation
        thirdTextAnimation.add(thirdAnimation, 0);

        //fourth section animation
        var fourthAnimation = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
          yoyo: true,
        });
        fourthAnimation.fromTo(
          [".fourth .container .imgs", ".fourth .container .imgs"],
          { yPercent: 0 },
          { yPercent: -95, duration: 400, ease: "linear", repeat: -1 },
          "<"
        );
        var fourthTitleAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: ".fourth .title",
            start: "top 40%",
            end: "bottom 40%",
          },
        });
        fourthTitleAnimation.from(".fourth .title .first-title", {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
        fourthTitleAnimation.from(
          ".fourth .title .second-title",
          {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
          },
          "<"
        );
        fourthTitleAnimation.from(
          ".fourth .container .imgs",
          {
            opacity: 0,
            duration: 1,
          },
          "<"
        );

        //footer animation
        var footerAnimation = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
          yoyo: true,
        });
        footerAnimation.fromTo(
          ["footer", "footer"],
          { clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 5%, 100% 25%, 100% 100%, 0 100%)",
            duration: 4,
            ease: "linear",
          }
        );
        footerAnimation.fromTo(
          ["footer", "footer"],
          { clipPath: "polygon(0 5%, 100% 25%, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 2%, 100% 15%, 100% 100%, 0 100%)",
            duration: 4,
            ease: "linear",
          }
        );

        //hide header on scroll down
        var scrollDown = () => {
          if (windowWidth.value > 768) {
            gsap.to("header", {
              yPercent: -100,
              duration: 1.5,
              ease: "power2.out",
            });
          } else {
            gsap.to(".logo", {
              scrollTrigger: {
                trigger: ".first",
                start: "top 20",
                end: "top 0",
                scrub: true,
              },
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            });
          }
        };

        //show header on scroll up
        var scrollUp = () => {
          if (windowWidth.value > 768) {
            gsap.to("header", {
              yPercent: 0,
              duration: 1.5,
              ease: "power2.out",
            });
            // } else {
            //   gsap.to("header .logo", {
            //     scrollTrigger: {
            //       trigger: ".first",
            //       start: "bottom top",
            //       end: "top top",
            //     },
            //     opacity: 1,
            //     duration: 1,
            //     ease: "power2.out",
            //   });
          }
        };

        // 更新 windowWidth 當視窗大小改變時
        window.addEventListener("resize", () => {
          windowWidth.value = window.innerWidth;
          if (windowWidth.value < 768) {
            scrollUp();
          }
        });

        Observer.create({
          type: "wheel,touch,pointer",
          wheelSpeed: -1,
          onDown: () => scrollUp(),
          onUp: () => scrollDown(),
        });
      } catch (error) {
        console.error(error);
      }
    });

    return {
      bannerImg,
      iconImg,
      artistImg,
      artworkImgs,
      logoColor,
      eihibitionImg1,
      eihibitionImg2,
      eihibitionImg3,
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
    <div class="logo">
      <h1>Seaport Handicrafts</h1>
      <h6>- Contemporary Knot Art of Hsu Pei-Tzu -</h6>
    </div>
    <div class="navbar">
      <i class="material-icons">menu</i>
    </div>
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

    <section class="second">
      <div class="title">
        <h1 class="first-title">Seaport</h1>
        <h1 class="second-title">Exhibition</h1>
      </div>
      <div class="container">
        <div class="top">
          <div
            class="img first-img"
            :style="{ 'background-image': `url(${eihibitionImg1})` }"
          ></div>
          <div
            class="img second-img"
            :style="{ 'background-image': `url(${eihibitionImg2})` }"
          ></div>
        </div>
        <div class="bottom">
          <div
            class="img third-img"
            :style="{ 'background-image': `url(${eihibitionImg3})` }"
          ></div>
        </div>
      </div>
    </section>

    <section class="third">
      <div class="top">
        <div class="text-content">
          <h1>徐碧姿<span>Hsu Pei-Tzu</span></h1>
          <p>
            徐老師的編織結藝最與眾不同的是，她將膠彩畫的發光礦物顏料與多色顏料結合於編織作品中，用她敏銳獨到的觀察力，從生活中的花草、蟲、魚、蝶、蔬果等觀察，尋找最貼近生活的題材，在日常的生活中尋找俯拾即是的美感，並運用其巧手編織將所見轉化爲更具美與意的創作，並藉此表達對自然的關懷。<br />
            (文/柯丁祺)
          </p>
        </div>
      </div>
      <div class="bottom">
        <div
          class="img"
          :style="{ 'background-image': `url(${artistImg})` }"
        ></div>
      </div>
    </section>
  </main>

  <section class="fourth">
    <div class="top">
      <div class="title">
        <h1 class="first-title">Contemporary</h1>
        <h1 class="second-title">Knot Art</h1>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="imgs">
          <img v-for="img in artworkImgs" :key="img" :src="img" />
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="text-content">
      <p>
        Copyright © 2024 Hsu Pei-Tzu. Designed and maintained by Kamaboko Wu.
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
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
  // display: none;
  .spinner {
    --radius: 90;
    --size: 35;
    @media (max-width: 1024px) {
      --radius: 70;
      --size: 30;
    }
    @media (max-width: 768px) {
      --radius: 50;
      --size: 20;
    }
    position: relative;
    width: calc(var(--size) * 1px);
    height: calc(var(--size) * 1px);
    div {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #232323;
      border-radius: 50%;
      transform: rotate(calc(var(--angle) * 1deg))
        translate(0, calc(var(--radius) * 0px));
      animation: spinner-19rk4d 2s calc(var(--delay) * 1.2s) infinite ease;

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
}

header {
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  // background: #232323;
  padding: 0 3vw;
  .logo {
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
  .navbar {
    i {
      font-weight: bold;
      font-size: 40px;
      color: #232323;
      cursor: pointer;
      @media (max-width: 1024px) {
        font-size: 35px;
      }
      @media (max-width: 768px) {
        font-size: 30px;
      }
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

.first {
  background: #fff;
  padding: 12vh 5vw 8vh 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 8%, 100% 99%, 0 100%);
  .text-content {
    max-width: 1200px;
    color: #545458;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    padding: 12vh 8vw 6vh 8vw;
  }
}

.second {
  .title {
    padding: 10vh 10% 5vh 10%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 768px) {
      padding: 10vh 4% 5vh 4%;
    }
    h1 {
      color: #f8bc6e;
      font-size: 8vw;
      &:last-child {
        color: #232323;
      }
    }
  }

  .container {
    padding: 5vh 8vw 10vh 13vw;
    @media (max-width: 1024px) {
      padding: 5vh 8vw 10vh 13vw;
    }
    @media (max-width: 768px) {
      padding: 0 0 10vh 0;
    }
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 10vw 0 2vw 0;
      @media (max-width: 1024px) {
        padding: 5vw 0 10vw 0;
      }
      @media (max-width: 768px) {
        padding: 0;
        flex-direction: column;
      }
      .first-img {
        width: 28vw;
        height: 50vw;
        // background-image: url("@/assets/exhibition6.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        transform: translateY(20vw);
        @media (max-width: 1024px) {
          width: 60vw;
          height: 55vw;
          transform: translateY(38vw);
        }
      }
      .second-img {
        width: 42vw;
        height: 28vw;
        // background-image: url("@/assets/exhibition5.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width: 1024px) {
          width: 55vw;
          height: 35vw;
          transform: translateX(-34vw);
        }
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0vw 2vw 8vh 0;
      @media (max-width: 1024px) {
        padding: 31vw 2vw 8vh 0;
        flex-shrink: 0;
      }
      @media (max-width: 768px) {
        padding: 0;
        flex-direction: column;
      }
      .third-img {
        width: 28vw;
        height: 27vw;
        // background-image: url("@/assets/exhibition4.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        transform: translateX(-5vw);
        @media (max-width: 1024px) {
          width: 45vw;
          height: 40vw;
          transform: translateX(-5vw);
        }
      }
    }
    .img {
      --img-clip-path: 50px;
      clip-path: polygon(
        var(--img-clip-path) 0,
        0 var(--img-clip-path),
        0 100%,
        calc(100% - var(--img-clip-path)) 100%,
        100% calc(100% - var(--img-clip-path)),
        100% 0
      );
      @media (max-width: 1024px) {
        --img-clip-path: 35px;
        flex-shrink: 0;
      }
      @media (max-width: 768px) {
        margin-top: 2vh;
        width: 100% !important;
        height: 40vh !important;
        transform: translateY(0) !important;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      }
    }
  }
}

.third {
  background: #fff;
  padding: 17vh 2vw 17vh 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #545458;
  font-weight: bold;
  clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 95%);
  .top {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
    .text-content {
      width: 43%;
      @media (max-width: 1024px) {
        width: 60%;
      }
      @media (max-width: 768px) {
        width: 80%;
      }
      @media (min-width: 1024px) {
        p {
          max-width: 500px;
        }
      }
      h1 {
        color: #232323;
        span {
          margin-left: 10px;
          font-size: var(--main-font-size);
        }
      }
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8vh;
    @media (max-width: 1024px) {
      margin-top: 4vh;
    }
    .img {
      width: 100%;
      height: 40vw;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      --img-clip-path: 60px;
      clip-path: polygon(
        var(--img-clip-path) 0,
        0 var(--img-clip-path),
        0 100%,
        calc(100% - var(--img-clip-path)) 100%,
        100% calc(100% - var(--img-clip-path)),
        100% 0
      );
      @media (min-width: 1024px) {
        max-width: 1300px;
        max-height: 650px;
      }
      @media (max-width: 1024px) {
        --img-clip-path: 45px;
        height: 55vw;
      }
      @media (max-width: 768px) {
        --img-clip-path: 30px;
        height: 70vh;
      }
    }
  }
}

.fourth {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 18vh 0;
  @media (max-width: 1024px) {
    padding: 12vh 0;
  }
  @media (max-width: 768px) {
    padding: 8vh 0;
  }
  .top {
    width: 100%;
    .title {
      padding: 0 10% 5vh 10%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      @media (max-width: 768px) {
        padding: 0 4% 3vh 4%;
      }
      h1 {
        color: #f8bc6e;
        font-size: 8vw;
        &:last-child {
          color: #232323;
        }
      }
    }
  }
  .bottom {
    height: 75vh;
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .imgs {
      column-count: 6;
      column-gap: 1vw;
      width: 100%;
      margin: 1rem auto;
      @media (max-width: 1024px) {
        column-count: 4;
      }
      @media (max-width: 768px) {
        column-count: 2;
      }

      img {
        width: 100%;
        padding: 0.5vw 0;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        transition-delay: 0.3s;
      }
    }
  }
}

footer {
  width: 100%;
  padding: 10vh 10% 3vh 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
</style>
