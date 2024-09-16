<script>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImgSrc from "@/assets/banner.jpg";

export default {
  setup() {
    const bannerImg = ref(bannerImgSrc);
    onMounted(async () => {
      gsap.registerPlugin(ScrollTrigger);

      await nextTick();

      const imgElement = document.querySelector(".img");
      if (imgElement) {
        imgElement.onload = () => {
          const imgWidth = imgElement.offsetWidth;
          console.log("imgWidth:", imgWidth); // 確認 imgWidth 是否正確
          gsap.to(".imgs", {
            scrollTrigger: {
              trigger: ".imgs",
            },
            x: -imgWidth * 2,
            duration: 50,
            ease: "linear",
            repeat: -1,
          });
        };
      } else {
        console.error("imgElement not found");
      }
    });

    return {
      bannerImg,
    };
  },
};
</script>

<template>
  <div class="banner">
    <div class="imgs">
      <img v-for="i in 5" :key="i" :src="bannerImg" class="img" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  height: 100vh;
  overflow: hidden;
}
.imgs {
  display: flex;
  white-space: nowrap;
}
img {
  height: 100vh;

  &:nth-child(2n) {
    transform: scaleX(-1);
  }
}
</style>