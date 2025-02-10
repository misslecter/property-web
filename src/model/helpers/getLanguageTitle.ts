import { Language } from "@/model/Language.ts";

export const getLanguageTitle = (language: Language) => {
  switch (language) {
    case Language.Cs:
      return "cz";
    case Language.En:
      return "en";
  }
};
