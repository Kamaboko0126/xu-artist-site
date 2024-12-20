<script>
import { inject, onMounted, nextTick, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ArtworkPage",
  setup() {
    const artworkImgs = inject("artworkImgs");
    const switchToClass = ref(false);
    var animating = false;

    const cardsInfo = [
      {
        class: "木板",
        url: "/artworkpage/class?class=wooden",
        img: require("@/assets/artworks/normalized/16.jpg"),
      },
      {
        class: "裱框",
        url: "/artworkpage/class?class=mixed",
        img: require("@/assets/artworks/normalized/82.jpg"),
      },
      {
        class: "立體",
        url: "/artworkpage/class?class=solid",
        img: require("@/assets/artworks/normalized/101.jpg"),
      },
    ];

    const flatImages = require
      .context("@/assets/artworks/normalized/", false, /\.(jpe?g)$/)
      .keys()
      .map((key) => {
        const fileName = key.replace("./", "");
        return {
          url: require(`@/assets/artworks/normalized/${fileName}`),
          id: fileName,
        };
      });

    // 打亂圖片
    artworkImgs.value = [...flatImages].sort(() => Math.random() - 0.5);

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
      gsap.to(".loader", {
        display: "flex",
        autoAlpha: 1,
        duration: 0.2,
        ease: "power2.out",
      });
      const imageSources = [
        require("@/assets/artworks/normalized/16.jpg"),
        require("@/assets/artworks/normalized/82.jpg"),
        require("@/assets/artworks/normalized/101.jpg"),
        require("@/assets/banner(compressed).jpg"),
      ];
      try {
        await Promise.all(imageSources.map((src) => loadImage(src)));
        gsap.to(".loader", {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(".loader", { display: "none" });
          },
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    const switchTo = (type) => {
      if (animating) {
        // console.log("Still animating...");
        return;
      }

      if (type === "r") {
        animating = true;
        gsap.to("p.first", {
          color: "var(--accent-color)",
          duration: 0.5,
        });
        gsap.to(
          "p.second",
          {
            color: "var(--font-color)",
            duration: 0.5,
          },
          "<"
        );
        gsap.to(
          ".cards",
          {
            opacity: 0,
            display: "none",
            duration: 0.5,
          },
          "<"
        );
        gsap.to(".animation", {
          opacity: 1,
          display: "flex",
          duration: 0.5,
          delay: 0.5,
          onComplete: () => {
            // console.log("Animation completed");
            animating = false;
          },
        });
      } else if (type === "c") {
        animating = true;

        gsap.to("p.first", {
          color: "var(--font-color)",
          duration: 0.5,
        });
        gsap.to(
          "p.second",
          {
            color: "var(--accent-color)",
            duration: 0.5,
          },
          "<"
        );
        gsap.to(
          ".animation",
          {
            opacity: 0,
            display: "none",
            duration: 0.5,
          },
          "<"
        );
        gsap.to(".cards", {
          opacity: 1,
          display: "flex",
          duration: 0.5,
          delay: 0.5,
          onComplete: () => {
            // console.log("Animation completed");
            animating = false;
          },
        });
      }
    };

    onMounted(async () => {
      gsap.registerPlugin(ScrollTrigger);

      await nextTick();

      try {
        await loadAllImages();
        var imgAnimation = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
          yoyo: true,
        });
        imgAnimation.fromTo(
          [".imgs", ".imgs"],
          { yPercent: 0 },
          { yPercent: -80, duration: 200, ease: "linear", repeat: -1 }
        );
      } catch (error) {
        console.error("Error loading images:", error);
      }
    });

    return {
      artworkImgs,
      switchToClass,
      switchTo,
      cardsInfo,
    };
  },
};
</script>

<template>
  <section>
    <div class="btns">
      <div class="container">
        <div class="left">
          <router-link to="/" class="btn">
            <i class="material-icons">chevron_left</i>
            <p>回首頁</p>
          </router-link>
        </div>
        <div class="center">
          <!-- eslint-disable-next-line no-irregular-whitespace -->
          <p class="second" @click="switchTo('c')">作品分類</p>
          <!-- eslint-disable-next-line no-irregular-whitespace -->
          <p class="first" @click="switchTo('r')">作品瀏覽</p>
        </div>
      </div>
    </div>
    <div class="animation">
      <div class="container">
        <div class="imgs">
          <div class="img-container" v-for="img in artworkImgs" :key="img">
            <router-link :to="`/artworkpage/artwork?id=${img.id}`">
              <img :src="img.url" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="cards">
      <div class="cards-container">
        <router-link
          v-for="card in cardsInfo"
          :key="card.id"
          :to="card.url"
          class="card"
        >
          <div class="top">
            <div class="img-container">
              <div
                class="img"
                :style="{ 'background-image': `url(${card.img})` }"
              ></div>
            </div>
          </div>
          <div class="bottom">
            <p>{{ card.class }}</p>
            <p class="btn">更多</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  padding-bottom: 5vh;
  min-height: calc(100vh - var(--header-height));
  .btns {
    padding: 6vh 3%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      width: 100%;
      max-width: var(--max-width);
      justify-content: flex-start;
        align-items: center;
      display: flex;
      @media (max-width: 768px) {
        justify-content: space-between;
      }
    }
    .left {
      display: flex;
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          font-size: calc(var(--main-font-size) + 2px);
        }
        font-weight: 600;
        color: var(--font-color);
        cursor: pointer;
        i {
          font-size: calc(var(--main-font-size) + 2px);
        }
      }
    }
    .center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        position: relative;
        transform: none;
        left: 0;
      }
      p {
        font-size: var(--h1-size);
        font-weight: 600;
        cursor: pointer;
        color: var(--font-color);
        &:first-child {
          margin-right: 20px;
          color: var(--accent-color);
        }
      }
    }
  }

  .animation {
    position: relative;
    height: calc(calc(100vh - var(--header-height)) * 0.9);
    width: 100%;
    display: none;
    justify-content: center;
    .container {
      height: 90%;
      width: 90%;
      max-width: 1400px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      flex-direction: column;
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
        .img-container {
          overflow: hidden; /* 確保超出的部分被隱藏 */
        }

        img {
          width: 100%;
          padding: 0.5vw 0;
          cursor: pointer;
          transition: 0.4s ease-in-out;
          transform-origin: center center; /* 設定放大時的中心點 */
          &:hover {
            transform: scale(1.07);
          }
        }
      }
    }
  }
  .cards {
    --card-width: 30;
    @media (max-width: 1024px) {
      --card-width: 45;
    }
    @media (max-width: 768px) {
      --card-width: 55;
    }
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: flex-start;
    display: flex;
    .cards-container {
      width: 100%;
      max-width: var(--max-width);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0 calc(100% / 4 - var(--card-width) * 1% * 3 / 4.3);
      padding-bottom: 10vh;
      flex-wrap: wrap;
      @media (max-width: 1024px) {
        padding: 0 calc(100% / 3 - var(--card-width) * 1% * 2 / 3.5);
        padding-bottom: 10vh;
      }
      @media (max-width: 768px) {
        padding: 0;
        padding-bottom: 10vh;
        align-items: center;
        flex-direction: column;
      }
      .card {
        &:hover {
          .img {
            transform: scale(1.07);
          }
        }
        width: calc(var(--card-width) * 1%);
        border: 1px solid #e8e8e8;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        overflow: hidden;
        &:nth-child(2) {
          margin: 0 5%;
          @media (max-width: 1024px) {
            margin: 0 0 6% 10%;
          }
          @media (max-width: 768px) {
            margin: 5% 0;
          }
        }
        .top {
          border-bottom: 1px solid #e8e8e8;
          width: 100%;
          .img-container {
            width: 100%;
            height: calc(var(--card-width) * 0.6vw);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            .img {
              width: 100%;
              height: 100%;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              transition: 0.5s ease-in-out;
              &.img1 {
                background-position: center 35%;
              }
              &.img2 {
                background-position: center 40%;
              }
              &.img3 {
                background-position: center bottom;
              }
            }
          }
        }
        .bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 7% 0;
          p {
            font-size: var(--h1-size);
            font-weight: 600;
          }
          .btn {
            color: var(--accent-color);
            padding-top: 20px;
            font-size: var(--main-font-size);
          }
        }
      }
    }
  }
}
</style>
