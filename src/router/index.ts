import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Portfolio from "@/pages/Portfolio.vue";
import SkillSheet from "@/pages/SkillSheet.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/skill-sheet",
    name: "SkillSheet",
    component: SkillSheet
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
