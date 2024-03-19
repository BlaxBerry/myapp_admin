import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "@/utils/translations/en.json";
import translationJa from "@/utils/translations/ja.json";
import translationZh from "@/utils/translations/zh.json";

const resources = {
  en: { translation: translationEn },
  ja: { translation: translationJa },
  zh: { translation: translationZh },
};

i18n.use(initReactI18next).init({
  lng: "zh",
  fallbackLng: "en",
  debug: false,

  resources,

  interpolation: {
    escapeValue: false,
  },
});
