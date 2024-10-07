<script>
import { ref, watch, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { gsap } from "gsap";

export default {
  setup() {
    const route = useRoute();
    const id = ref(route.query.id.split(".")[0]); // 只取前面的部分
    const artworkData = require("@/assets/artworks/data.json");
    const filteredData = ref(null);

    const getCurrentData = () => {
      filteredData.value = artworkData.datas.find(
        (item) => item.id === id.value
      );
      console.log("filteredData:", filteredData.value);
    };

    watch(
      () => route.query.id,
      (newId) => {
        id.value = newId.split(".")[0]; // 只取前面的部分
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

      const imageSources = [require(`@/assets/artworks/${id.value}.jpg`)];
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
      id,
      filteredData,
    };
  },
};
</script>

<template>
  <section v-if="filteredData">
    <div class="container">
      <div class="btn-container">
        <router-link
          :to="`/artworkpage/class?class=${filteredData.class}`"
          class="btn"
        >
          <span class="material-icons">chevron_left</span>
          <p>返回</p>
        </router-link>
      </div>
      <div class="img-container">
        <div
          class="img"
          :style="{
            'background-image': `url(${require(`@/assets/artworks/${id}.jpg`)})`,
          }"
        ></div>
      </div>
      <div class="content-text">
        <h1>
          {{ filteredData.name }}
          <span class="en">{{ filteredData.en_name }}</span>
          <span class="years" v-if="filteredData.years">{{
            "(" + filteredData.years + ")"
          }}</span>
        </h1>
        <p>{{ filteredData.size }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  padding-top: calc(var(--header-height) + 40px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .container {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}
.btn-container {
  width: 100%;
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: calc(var(--h6-size) * 0.8);
    padding: 1% 3%;
    font-weight: 600;
    color: #4b4b4b;
    cursor: pointer;
    span {
      font-size: calc(var(--h6-size) * 0.8);
    }
  }
}

.img-container {
  width: 95%;
  height: 90vh;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.content-text {
  width: 100%;
  padding: 3% 3%;
  h1 {
    color: #232323;
    font-size: calc(var(--h1-size) * 1.1);
    span {
      font-size: calc(var(--h1-size) * 0.9);
      margin-left: 5px;
      &.en {
        color: #a1894c;
      }
      &.years {
        font-weight: 100;
      }
      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
  p {
    margin-top: 10px;
    font-size: calc(var(--main-font-size) * 1.2);
    color: #232323;
  }
}
</style>
