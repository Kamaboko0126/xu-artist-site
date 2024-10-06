<script>
import { inject, onMounted, nextTick, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ArtworkPage",
  setup() {
    const artworkImgs = inject("artworkImgs");
    const classImg1 = ref(require("@/assets/artworks/15.jpg"));
    const classImg2 = ref(require("@/assets/artworks/26.jpg"));
    const classImg3 = ref(require("@/assets/artworks/101.jpg"));
    const switchToClass = ref(false);
    const animating = ref(false);

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
      const imageSources = [classImg1.value, classImg2.value, classImg3.value];
      try {
        await Promise.all(imageSources.map((src) => loadImage(src)));
        console.log("All images loaded successfully from HomePage.vue");
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    const switchTo = (type) => {
      if (animating.value) {
        console.log("Still animating...");
        return;
      }

      if (type === "r") {
        animating.value = true;
        gsap.to("h1.first", {
          color: "#f8bc6e",
          duration: 0.5,
        });
        gsap.to(
          "h1.second",
          {
            color: "#232323",
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
            console.log("Animation completed");
            animating.value = false;
          },
        });
      } else if (type === "c") {
        animating.value = true;

        gsap.to("h1.first", {
          color: "#232323",
          duration: 0.5,
        });
        gsap.to(
          "h1.second",
          {
            color: "#f8bc6e",
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
            console.log("Animation completed");
            animating.value = false;
          },
        });
      }
    };

    onMounted(async () => {
      gsap.registerPlugin(ScrollTrigger);

      await nextTick();

      // show loader
      gsap.to(".loader", {
        display: "flex",
        autoAlpha: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      try {
        await loadAllImages();

        // hide loader
        gsap.to(".loader", {
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(".loader", { display: "none" });
          },
        });

        var imgAnimation = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
          yoyo: true,
        });
        imgAnimation.fromTo(
          [".imgs", ".imgs"],
          { yPercent: 0 },
          { yPercent: -80, duration: 80, ease: "linear", repeat: -1 }
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
      <h1 class="first" @click="switchTo('r')">隨機作品</h1>
      <h1 class="second" @click="switchTo('c')">查看分類</h1>
    </div>
    <div class="container">
      <!-- <div class="animation">
        <div class="imgs">
          <div class="img-container" v-for="img in artworkImgs" :key="img">
            <router-link :to="`/artwork?id=${img.id}`">
              <img :src="img.url" />
            </router-link>
          </div>
        </div>
      </div> -->

      <div class="cards">
        <div class="card">
          <div class="top">
            <div class="img-container">
              <div
                class="img"
                :style="{ 'background-image': `url(${classImg1})` }"
              ></div>
            </div>
          </div>
          <div class="bottom">
            <h1>木板</h1>
            <div class="btn">查看更多</div>
          </div>
        </div>
        <div class="card">
          <div class="top">
            <div class="img-container">
              <!-- <img :src="classImg3" /> -->
              <div
                class="img"
                :style="{ 'background-image': `url(${classImg3})` }"
              ></div>
            </div>
          </div>
          <div class="bottom">
            <h1>裱框</h1>
            <div class="btn">查看更多</div>
          </div>
        </div>
        <div class="card">
          <div class="top">
            <div class="img-container">
              <!-- <img :src="classImg2" /> -->
              <div
                class="img"
                :style="{ 'background-image': `url(${classImg2})` }"
              ></div>
            </div>
          </div>
          <div class="bottom">
            <h1>立體</h1>
            <div class="btn">查看更多</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  margin-top: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .btns {
    display: flex;
    h1 {
      cursor: pointer;
      &:first-child {
        margin-right: 20px;
        color: #f8bc6e;
      }
    }
  }
  .container {
    position: relative;
    height: calc(calc(100vh - var(--header-height)) * 0.9);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .animation {
      height: 90%;
      width: 90%;
      max-width: 1200px;
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
    .cards {
      background: #fff;
      min-height: calc(calc(100vh - var(--header-height)) * 0.9);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      //   display: none;
      .card {
        width: 25vw;
        margin: 0 2vw;
        height: 45vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #232323;
        .top {
          height: 55%;
          width: 100%;
          .img-container {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .img {
              height: 25vw;
              width: 100%;
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
        }
        .bottom {
          height: 45%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
