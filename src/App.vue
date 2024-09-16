<script>
export default {
  name: "App",
};
</script>

<template>
  <router-view></router-view>
</template>

<style>
:root {
  --logo-padding: 80px;
  --banner-main-font-size: 35px;
  --banner-second-font-size: 30.5px;
  --banner-left-width: 430px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "source-han-sans-traditional", sans-serif;
  font-style: normal;
}

.text-content p {
  line-height: 2.4;
  font-feature-settings: "palt" on;
  letter-spacing: 0.15em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
</style>
