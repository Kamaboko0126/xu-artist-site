import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage(v3).vue"),
  },
  {
    path: "/artworkpage",
    name: "artworkpage",
    component: () => import("@/pages/ArtworkPage/index.vue"),
  },
  {
    path: "/artworkpage/class",
    name: "class",
    component: () => import("@/pages/ArtworkPage/ClassPage.vue"),
  },
  {
    path: "/artworkpage/artwork",
    name: "artwork",
    component: () => import("@/pages/ArtworkPage/ArtworkPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
