import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import {
  NavAnalysisIcon,
  NavChatIcon,
  NavHomeIcon,
  NavNotesIcon,
  NavScenarioIcon,
} from "@/common/components";
import { APP_PATHS } from "@/router/paths";

export type AppNavigationItem = {
  id: string;
  text: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
};

export default function useAppNavigation() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const backToHome = useCallback(() => navigate("/"), [navigate]);
  const backToHomeReplace = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
  );

  const appNavigationLinks = useMemo<Array<AppNavigationItem>>(
    () =>
      [
        {
          link: APP_PATHS.home,
          id: "pages-home",
          text: t("pages.home"),
          icon: <NavHomeIcon />,
        },
        {
          link: APP_PATHS.analysis.root,
          id: "pages-analysis",
          text: t("pages.analysis"),
          icon: <NavAnalysisIcon />,
        },
        {
          link: APP_PATHS.scenario.root,
          id: "pages-scenario",
          text: t("pages.scenario"),
          icon: <NavScenarioIcon />,
        },
        {
          link: APP_PATHS.chat.root,
          id: "pages-chat",
          text: t("pages.chat"),
          icon: <NavChatIcon />,
        },
        {
          link: APP_PATHS.notes.root,
          id: "pages-notes",
          text: t("pages.notes"),
          icon: <NavNotesIcon />,
        },
      ].map((item) => {
        return {
          id: item.id,
          text: item.text,
          icon: item.icon,
          isActive: pathname.endsWith(item.link),
          onClick: () => navigate(item.link),
        };
      }),
    [pathname, navigate, t],
  );

  return {
    appNavigationLinks,
    backToHome,
    backToHomeReplace,
  };
}
