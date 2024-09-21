const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    devServer: {
      port: 8080, // 你想要設定的 port 號
    },
  },
  publicPath: process.env.NODE_ENV === "produvtion" ? "/" : "/",
});
