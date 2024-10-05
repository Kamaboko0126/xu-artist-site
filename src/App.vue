<script>
export default {
  name: "App",
};
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
:root {
  --main-font-size: 19px;
  --h1-size: 30px;
  --h6-size: 30px;
  --line-height: 2;

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

.text-content p {
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
</style>
