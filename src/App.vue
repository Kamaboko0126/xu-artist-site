<script>
import { onMounted, provide, ref, nextTick } from "vue";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const artworkImgs = ref();
    provide("artworkImgs", artworkImgs);
    const windowWidth = ref(window.innerWidth);
    const isHomepage = ref(false);

    const route = useRoute();
    const router = useRouter();

    const checkRoute = () => {
      console.log("Current route:", route.path);
      // 你可以在這裡根據路由做一些處理
      if (route.path === "/") {
        isHomepage.value = true;
      } else {
        isHomepage.value = false;
        gsap.to("header", {
          yPercent: 0,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };
    onMounted(async () => {
      gsap.registerPlugin(Observer);

      try {
        await nextTick();

        checkRoute();

        router.afterEach((to) => {
          checkRoute();
          console.log("Route changed to:", to.path);
        });

        // 更新 windowWidth 當視窗大小改變時
        window.addEventListener("resize", () => {
          windowWidth.value = window.innerWidth;
          if (windowWidth.value < 768) {
            gsap.to("header", {
              yPercent: 0,
              duration: 1.5,
              ease: "power2.out",
            });
          }
        });

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
          }
        };

        Observer.create({
          type: "wheel,touch,pointer",
          wheelSpeed: -1,
          onDown: () => isHomepage.value && scrollUp(),
          onUp: () => isHomepage.value && scrollDown(),
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    });

    return {
      isHomepage,
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
    <router-link to="/">
      <div class="logo">
        <h1>Creation Exhibistion</h1>
        <h6 :style="{ color: isHomepage ? '#fff' : '#232323' }">
          - Skillful Art of Hsu, Pi-Tze -
        </h6>
      </div>
      <div class="navbar">
        <!-- <i class="material-icons">menu</i> -->
      </div>
    </router-link>
  </header>

  <router-view></router-view>
</template>

<style lang="scss">
:root {
  --main-font-size: 19px;
  --h1-size: 30px;
  --h6-size: 30px;
  --line-height: 2;
  --header-height: 110px;
  --font-color: #545458;
  --accent-color: #f8bc6e;
  --sub-color: #eff2f1;
  --background-color: #eff2f1;
  --max-width: 1400px;

  @media (max-width: 1024px) {
    --main-font-size: 17px;
    --h1-size: 25px;
    --h6-size: 25px;
    --line-height: 1.85;
  }

  @media (max-width: 768px) {
    --main-font-size: 14px;
    --h1-size: 20px;
    --h6-size: 20px;
    --line-height: 1.7;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "source-han-sans-traditional", sans-serif;
  font-style: normal;
}

a {
  text-decoration: none;
  color: inherit;
}

.text-content p,.font-style {
  line-height: var(--line-height);
  font-feature-settings: "palt" on;
  letter-spacing: 0.15em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  font-size: var(--main-font-size);
}

h1 {
  font-size: var(--h1-size);
}

h6 {
  font-size: var(--h6-size);
}

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
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: flex-end;
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
      color: var(--accent-color);
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
</style>
