import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
    meta: { description: "homepage.metaDescription" },
  },
  {
    path: `/:pathMatch(.*)*`,
    name: "notFound",
    component: NotFound,
    meta: { description: "notFoundPage.metaDescription" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
