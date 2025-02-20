import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

// Import your two JSON files:
import cs from "@/assets/prosek/locales/cs.json";
import en from "@/assets/prosek/locales/en.json";

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
app.mount("#app");
