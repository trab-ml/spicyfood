import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
    meta: { description: "homepage.description" },
  },
  {
    path: `/:pathMatch(.*)*`,
    name: "notFound",
    component: NotFound,
    meta: { description: "notFoundPage.description" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
