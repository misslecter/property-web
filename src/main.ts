import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import { createGtag } from "vue-gtag";
import cs from "@/assets/prosek/locales/cs.json";
import en from "@/assets/prosek/locales/en.json";
import { initFacebookPixel } from "@/facebook-pixel.ts";

const gtag = createGtag({
  tagId: "G-YPEWJDJ5NX",
});

const i18n = createI18n({
  legacy: false, // use Composition API style
  locale: "cs", // default locale
  fallbackLocale: "en",
  messages: {
    cs, // the keys/values from info.json
    en, // the keys/values from info-en.json
  },
});

const app = createApp(App);
app.use(i18n);
app.use(gtag);
app.mount("#app");

initFacebookPixel();
