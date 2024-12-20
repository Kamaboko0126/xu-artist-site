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
    const bannerImg = ref(require("@/assets/banner(compressed).jpg"));
    const windowWidth = ref(window.innerWidth);
    const isHomepage = ref(false);
    const bgm = ref(require("@/assets/bgm.mp3"));
    const audioRef = ref(null);
    const isPlaying = ref(false);

    const route = useRoute();
    const router = useRouter();
    var footerAnimation = "";

    const switchMusic = () => {
      if (isPlaying.value) {
        audioRef.value.pause();
        isPlaying.value = false;
      } else {
        audioRef.value.play();
        isPlaying.value = true;
      }
    };

    const checkRoute = () => {
      console.log("Current route:", route.path);
      // 你可以在這裡根據路由做一些處理
      if (route.path === "/") {
        isHomepage.value = true;
      } else {
        isHomepage.value = false;
      }

      if (isHomepage.value) {
        createTl();
      } else {
        console.log("kill animation");
        footerAnimation = null;

        gsap.to(".header", {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    const createTl = () => {
      console.log("create animation");
      footerAnimation = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
        yoyo: true,
      });
      footerAnimation.fromTo(
        ["footer", "footer"],
        { clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 5%, 100% 25%, 100% 100%, 0 100%)",
          duration: 3,
          ease: "linear",
        }
      );
      footerAnimation.fromTo(
        ["footer", "footer"],
        { clipPath: "polygon(0 5%, 100% 25%, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 2%, 100% 15%, 100% 100%, 0 100%)",
          duration: 3,
          ease: "linear",
        }
      );
    };

    onMounted(async () => {
      gsap.registerPlugin(Observer);

      try {
        await nextTick();

        checkRoute();

        // 監聽用戶的第一次互動事件
        const playAudioOnInteraction = () => {
          audioRef.value.play();
          isPlaying.value = true;
          window.removeEventListener("click", playAudioOnInteraction);
          window.removeEventListener("keydown", playAudioOnInteraction);
        };

        window.addEventListener("click", playAudioOnInteraction);
        window.addEventListener("keydown", playAudioOnInteraction);
      

        router.afterEach((to) => {
          checkRoute();
          console.log("Route changed to:", to.path);
          if (to.path === "/") {
            isHomepage.value = true;
          } else {
            isHomepage.value = false;
          }
          //footer animation
          if (isHomepage.value) {
            createTl();
          } else {
            console.log("kill animation");
            footerAnimation = null;

            gsap.to(".header", {
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
          }
        });

        // 更新 windowWidth 當視窗大小改變時
        window.addEventListener("resize", () => {
          windowWidth.value = window.innerWidth;
          if (windowWidth.value < 768) {
            gsap.to(".header", {
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
          }
        });

        //hide header on scroll down
        var scrollDown = () => {
          if (windowWidth.value > 768) {
            gsap.to(".header", {
              opacity: 0,
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
            gsap.to(".header", {
              opacity: 1,
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
      bannerImg,
      bgm,
      switchMusic,
      audioRef,
      isPlaying,
    };
  },
};
</script>

<template>
  <audio ref="audioRef" :src="bgm" loop></audio>
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

  <div
    class="header"
    :style="[{ 'background-image': isHomepage ? 'none' : `url(${bannerImg})` }]"
    :class="{ 'not-homepage': !isHomepage }"
  >
    <router-link to="/">
      <div class="logo">
        <h1>Creation Exhibistion</h1>
        <h6>- Skillful Art of Hsu, Pi-Tze -</h6>
      </div>
    </router-link>
    <div class="navbar">
      <i class="material-icons" @click="switchMusic">{{
        isPlaying ? "volume_up" : "volume_off"
      }}</i>
    </div>
  </div>

  <router-view></router-view>

  <footer
    :style="{ 'background-image': isHomepage ? 'none' : `url(${bannerImg})` }"
    :class="{ 'not-homepage': !isHomepage }"
  >
    <div class="container">
      <p>Copyright © 2024 Hsu Pei-Tzu, All rights reserved.</p>
      <div class="nav">
        <router-link to="/">
          <p>首頁</p>
        </router-link>
        <router-link to="/artworkpage">
          <p>欣賞作品</p>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
:root {
  --main-font-size: 19px;
  --h1-size: 30px;
  --h6-size: 30px;
  --line-height: 2;
  --header-height: 110px;
  --font-color: #545458;
  --accent-color: #f0c362;
  // --accent-color: #f8bc6e;
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

p {
  font-feature-settings: "palt" on;
  letter-spacing: 0.15em;
  display: block;
  unicode-bidi: isolate;
  font-size: var(--main-font-size);
  color: var(--font-color);
}

.text-content p {
  line-height: var(--line-height);
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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

.header {
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 999;
  top: 0;
  left: 0;
  padding: 0;
  padding: 0 3vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: fixed;
  box-sizing: border-box;
  margin: 0;
  &.not-homepage {
    align-items: center;
    height: calc(var(--header-height) * 1.1);
    position: relative;
  }
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    i {
      font-weight: bold;
      font-size: 40px;
      color: var(--font-color);
      background: var(--background-color);
      border-radius: 50%;
      padding: 5px;
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

footer {
  width: 100%;
  padding: 9vh 10% 4vh 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  color: var(--font-color);
  &.not-homepage {
    padding: 2vh 10% 2vh 10%;
    p {
      color: var(--sub-color);
    }
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  p {
    flex-shrink: 1;
    font-weight: 500;
  }
  .nav {
    margin: 0 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    p {
      font-weight: bold;
      font-size: calc(var(--main-font-size) + 3px);
    }
    a:nth-child(2n) p {
      &::before {
        content: "/";
        margin: 0 10px;
      }
    }
  }
}
</style>
