import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
    meta: { description: "homepage.metaDescription" },
  },
  {
    path: `/${import.meta.env.VITE_REPO_NAME}/`,
    name: "homePathTwo",
    component: HomePage,
  },
  {
    path: `/:pathMatch(.*)*`,
    name: "notFoundPage",
    component: NotFoundPage,
    meta: { description: "notFoundPage.metaDescription" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
