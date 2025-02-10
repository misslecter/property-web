export enum Language {
  Cs = "cs",
  En = "en",
}

export const getLanguageTitle = (language: Language) => {
  switch (language) {
    case Language.Cs:
      return "cz";
    case Language.En:
      return "en";
  }
};
