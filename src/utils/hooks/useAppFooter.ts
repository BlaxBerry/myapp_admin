import type { AdminLayoutProps } from "myapp_uilib_react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { APP_PATHS } from "../../router/paths";

const socialLinks: AdminLayoutProps["appFooterProps"]["socialLinks"] = [
  {
    type: "github",
    link: "https://github.com/BlaxBerry/myapp_admin",
  },
  { type: "x", link: "https://twitter.com/chenjiaxu333" },
];

export default function useAppFooter() {
  const { pathname } = useLocation();
  const hiddenTopDivider = useMemo(() => {
    return pathname === APP_PATHS.scenario.root;
  }, [pathname]);

  return {
    appFooterProps: {
      showTopDivider: !hiddenTopDivider,
      copyright: "©2024 BlaxBerry All Rights Reserved",
      socialLinks: socialLinks,
    },
  };
}
