import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { i18n } from "../i18n/i18n.ts";
import { router } from "./router.ts";

const app = createApp(App).use(router).use(i18n);

router.beforeEach((to, _from, next) => {
  const descriptionKey = to.meta.description;

  if (descriptionKey) {
    const translatedDesc = i18n.global.t(descriptionKey as string);
    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", translatedDesc);
  }
  next();
});

app.mount("#app");
