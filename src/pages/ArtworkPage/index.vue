<script>
import { inject, onMounted, nextTick, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ArtworkPage",
  setup() {
    const artworkImgs = inject("artworkImgs");
    const classImg1 = ref(require("@/assets/artworks/normalized/16.jpg"));
    const classImg2 = ref(require("@/assets/artworks/normalized/82.jpg"));
    const classImg3 = ref(require("@/assets/artworks/normalized/101.jpg"));
    const switchToClass = ref(false);
    const animating = ref(false);

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
      const imageSources = [classImg1.value, classImg2.value, classImg3.value];
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
      if (animating.value) {
        // console.log("Still animating...");
        return;
      }

      if (type === "r") {
        animating.value = true;
        gsap.to("h1.first", {
          color: "var(--accent-color)",
          duration: 0.5,
        });
        gsap.to(
          "h1.second",
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
            animating.value = false;
          },
        });
      } else if (type === "c") {
        animating.value = true;

        gsap.to("h1.first", {
          color: "var(--font-color)",
          duration: 0.5,
        });
        gsap.to(
          "h1.second",
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
            animating.value = false;
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
      classImg1,
      classImg2,
      classImg3,
      switchToClass,
      switchTo,
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
          <h1 class="first" @click="switchTo('r')">隨機作品</h1>
          <h1 class="second" @click="switchTo('c')">查看分類</h1>
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
        <router-link to="/artworkpage/class?class=wooden" class="card">
          <div class="top">
            <div class="img-container">
              <div
                class="img img1"
                :style="{ 'background-image': `url(${classImg1})` }"
              ></div>
            </div>
            <div class="bottom">
              <h1>木板</h1>
              <div class="btn">查看更多</div>
            </div>
          </div>
        </router-link>
        <router-link to="/artworkpage/class?class=mixed" class="card">
          <div class="top">
            <div class="img-container">
              <div
                class="img img2"
                :style="{ 'background-image': `url(${classImg2})` }"
              ></div>
            </div>
          </div>
          <div class="bottom">
            <h1>裱框</h1>
            <div class="btn">查看更多</div>
          </div>
        </router-link>
        <router-link to="/artworkpage/class?class=solid" class="card">
          <div class="top">
            <div class="img-container">
              <div
                class="img img3"
                :style="{ 'background-image': `url(${classImg3})` }"
              ></div>
            </div>
          </div>
          <div class="bottom">
            <h1>立體</h1>
            <div class="btn">查看更多</div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  padding-top: calc(var(--header-height) + 40px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
    .container {
      width: 100%;
      max-width: var(--max-width);
      justify-content: flex-start;
      align-items: center;
      display: flex;
    }
    .left {
      display: flex;
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: calc(var(--h6-size) * 0.8);
        font-weight: 600;
        color: var(--font-color);
        cursor: pointer;
        i {
          font-size: calc(var(--h6-size) * 0.8);
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
      h1 {
        cursor: pointer;
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
    display: flex;
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
      display: none;
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
            .btn {
              color: var(--accent-color);
              padding-top: 20px;
            }
          }
        }
      }
    }
}
</style>
