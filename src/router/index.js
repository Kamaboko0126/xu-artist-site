import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage(v3).vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;