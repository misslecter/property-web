import { createI18n } from "vue-i18n";

// Import or define your messages inline, or import from separate JSON files:
import cs from "../assets/prosek/locales/cs.json";
import en from "../assets/prosek/locales/en.json";

export default createI18n({
  locale: "cs", // The default locale (e.g., "cs" for Czech)
  fallbackLocale: "en", // Fallback locale
  messages: {
    en,
    cs,
  },
});
