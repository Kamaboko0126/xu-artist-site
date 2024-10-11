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
      <div class="info">
        <div class="top">
          <p class="name">{{ filteredData.name }}</p>
          <p class="en">{{ filteredData.en_name }}</p>
          <p class="years" v-if="filteredData.years">
            {{ "(" + filteredData.years + ")" }}
          </p>
        </div>
        <div class="bottom" v-if="filteredData.size">
          <p>{{ filteredData.size }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 5vh;
  .container {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}
.btn-container {
  width: 100%;
  .btn {
    padding: 6vh 3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: var(--main-font-size);
    cursor: pointer;
    p {
      font-size: var(--h1-size);
      font-size: calc(var(--main-font-size) + 2px);
    }
    span {
      font-size: calc(var(--main-font-size) + 2px);
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

.info {
  width: 100%;
  padding: 3% 3%;
  .top {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-wrap: wrap;
    p {
      margin-top: 10px;
      font-size: var(--h1-size);
      color: var(--font-color);
      font-weight: 600;
      margin-right: 10px;
      flex-shrink: 0;
    }
    p.en {
      color: var(--accent-color);
      font-size: calc(var(--h1-size) * 0.9);
    }
    p.years {
      font-weight: 100;
      font-size: calc(var(--h1-size) * 0.85);
    }
  }
  .bottom {
    margin-top: 10px;
    font-size: var(--main-font-size);
    color: var(--font-color);
  }
}
</style>
