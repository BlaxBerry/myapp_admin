import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function useAppHeaderActions() {
  const { t, i18n } = useTranslation();

  const changeTranslation = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  const translationLanguagesList = useMemo(
    () => [
      {
        id: "en",
        text: t("common.languages.en"),
        avatarSrc:
          "https://as2.ftcdn.net/v2/jpg/00/61/47/33/1000_F_61473310_GwaVCFCKeQdeRj05P88xlnO3dF5HiJRp.jpg",
      },
      {
        id: "ja",
        text: t("common.languages.ja"),
        avatarSrc:
          "https://p1.hiclipart.com/preview/341/890/500/worldcup-flag-balls-32-icons-round-japan-flag.jpg",
      },
      {
        id: "zh",
        text: t("common.languages.zh"),
        avatarSrc: "https://ks-global.jp/img/cn.png",
      },
    ],
    [t],
  );

  return {
    headerActionsProps: {
      toggleTranslation: {
        show: true,
        defaultValue: i18n.language,
        onClick: (language: string) => {
          changeTranslation(language);
        },
        languagesList: translationLanguagesList,
      },
    },
  };
}
