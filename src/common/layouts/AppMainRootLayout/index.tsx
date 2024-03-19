import { memo, type FC, type PropsWithChildren } from "react";

import { AdminLayout } from "myapp_uilib_react";

import { checkIsDarkModeOS } from "@/utils/helpers";
import {
  useAppFooter,
  useAppHeaderAccount,
  useAppHeaderActions,
  useAppHeaderBreadcrumbs,
  useAppNavigation,
} from "@/utils/hooks";

const APP_LOGO_URL = import.meta.env.VITE_APP_FAVICON_URL;
const APP_LOGO_TEXT = import.meta.env.VITE_APP_NAME;

const AppMainRootLayout: FC<PropsWithChildren> = ({ children }) => {
  const { appNavigationLinks, backToHome } = useAppNavigation();
  const { appHeaderBreadcrumbsProps } = useAppHeaderBreadcrumbs({
    navigationLinks: appNavigationLinks,
  });
  const { appHeaderAccountProps } = useAppHeaderAccount();
  const { headerActionsProps } = useAppHeaderActions();
  const { appFooterProps } = useAppFooter();

  return (
    <AdminLayout
      appSideNavProps={{
        logo: {
          url: APP_LOGO_URL,
          text: APP_LOGO_TEXT,
          onClick: backToHome,
        },
        navigation: { list: appNavigationLinks },
      }}
      appHeaderProps={{
        headerBreadcrumbs: appHeaderBreadcrumbsProps,
        headAccount: appHeaderAccountProps,
        headerActions: headerActionsProps,
      }}
      appFooterProps={appFooterProps}
      customThemeOptions={{
        customThemeMode: checkIsDarkModeOS() ? "dark" : "light",
      }}
    >
      {children}
    </AdminLayout>
  );
};

const AppMainRootLayoutMemo = memo(AppMainRootLayout);
export default AppMainRootLayoutMemo;
