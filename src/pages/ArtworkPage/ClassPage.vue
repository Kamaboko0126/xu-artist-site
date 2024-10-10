<script>
import { nextTick, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { gsap } from "gsap";

export default {
  setup() {
    const route = useRoute();
    const classType = ref(route.query.class);
    const artworkData = require("@/assets/artworks/data.json");
    const currentData = ref({ type: "", data: [] });

    const getCurrentData = () => {
      const filteredData = artworkData.datas.filter(
        (item) => item.class === classType.value
      );

      let typeName = "";
      if (classType.value === "wooden") {
        typeName = "木板";
      } else if (classType.value === "mixed") {
        typeName = "裱框";
      } else if (classType.value === "solid") {
        typeName = "立體";
      }

      currentData.value = {
        type: typeName,
        data: filteredData,
      };
    };

    // 監聽路由變化
    watch(
      () => route.query.class,
      (newClass) => {
        classType.value = newClass;
        getCurrentData();
        loadAllImages();
      }
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
      gsap.to(".loader", {
        display: "flex",
        autoAlpha: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      const imageSources = currentData.value.data.map((item) =>
        require(`@/assets/artworks/normalized/${item.id}.jpg`)
      );
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

    onMounted(async () => {
      getCurrentData();

      await nextTick();

      try {
        await loadAllImages();
      } catch (error) {
        console.error("Error loading images:", error);
      }
    });

    return {
      classType,
      artworkData,
      currentData,
    };
  },
};
</script>

<template>
  <section>
    <div class="head">
      <div class="head-container">
        <router-link to="/artworkpage" class="btn">
          <span class="material-icons">chevron_left</span>
          <p class="font-style">返回</p>
        </router-link>
        <div class="title">
          <p class="font-style">{{ currentData.type }}</p>
        </div>
        <div></div>
      </div>
    </div>

    <div class="container">
      <div class="cards">
        <div class="cards-container">
          <router-link
            :to="`/artworkpage/artwork?id=${data.id}`"
            class="card"
            v-for="data in currentData.data"
            :key="data.id"
          >
            <div class="top">
              <div class="img-container">
                <div
                  class="img img1"
                  :style="{
                    'background-image': `url(${require(`@/assets/artworks/normalized/${data.id}.jpg`)})`,
                  }"
                ></div>
              </div>
              <div class="bottom">
                <p class="font-style">{{ data.name }}</p>
                <p class="btn font-style">查看更多</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  padding: 6vh 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
}

.head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .head-container {
    max-width: var(--max-width);
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 3% 1.5% 0;
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1% 2%;
      p {
        font-size: calc(var(--h1-size) * .85);
        font-weight: 600;
        color: var(--font-color);
      }
      cursor: pointer;
      span {
        font-size: calc(var(--h1-size) * .85);
      }
    }
    .title {
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      p {
        font-size: var(--h1-size);
        color: var(--font-color);
        font-weight: 600;
      }
    }
  }
}

.container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  .cards {
    --card-width: 30;
    @media (max-width: 1024px) {
      --card-width: 45;
    }
    @media (max-width: 768px) {
      --card-width: 80;
    }
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .cards-container {
      width: 100%;
      max-width: 1400px;
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

        &:nth-child(3n + 2) {
          margin: 0 5% 5% 5%;
        }
        @media (max-width: 1024px) {
          &:nth-child(3n + 2) {
            margin: 0 0% 0% 0%;
          }
          &:nth-child(2n) {
            margin: 0 0 6% 10%;
          }
        }

        @media (max-width: 768px) {
          margin: 0;
          &:not(:first-child) {
            margin: 5% 0;
          }
        }

        .top {
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
              background-size: contain;
              transition: 0.5s ease-in-out;
            }
          }
        }
        .bottom {
          border-top: 1px solid #e8e8e8;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 7% 0;
          p {
            font-size: var(--h1-size);
            color: var(--font-color);
            font-weight: 600;
          }
          .btn {
            color: var(--accent-color);
            padding-top: 15px;
            font-size: var(--main-font-size);
          }
        }
      }
    }
  }
}
</style>
