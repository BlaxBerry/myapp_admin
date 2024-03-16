import { memo, useMemo, type FC, type PropsWithChildren } from "react";

import { AdminLayout } from "myapp_uilib_react";

import { useAppNavigation } from "@/utils/hooks";
import {
  NAVIGATION_ITEMS,
  type AppNavigationItem,
} from "@/utils/hooks/useAppNavigation";

const RootPageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { navigationLinks, backToHome } = useAppNavigation();
  const currentRoute = navigationLinks.find((item) => item.isActive);

  const headerBreadcrumbs = useMemo<Array<AppNavigationItem>>(() => {
    const HomeRoute = NAVIGATION_ITEMS[0] as unknown as AppNavigationItem;
    if (currentRoute?.id === HomeRoute.id || !currentRoute) {
      return [HomeRoute];
    } else {
      return [HomeRoute, currentRoute];
    }
  }, [currentRoute]);

  return (
    <AdminLayout
      appSideNavProps={{
        logo: {
          url: import.meta.env.VITE_APP_FAVICON_URL,
          text: import.meta.env.VITE_APP_NAME,
          onClick: backToHome,
        },
        navigation: { list: navigationLinks },
      }}
      appHeaderProps={{
        headerBreadcrumbs: {
          list: headerBreadcrumbs,
        },
        headAccount: {
          avatarProps: {
            alt: "Account",
            src: "https://avatars.githubusercontent.com/u/73395592?v=4",
          },
          listProps: {
            listSubheader: {
              children: "blaxberry@123.example.com",
            },
            data: [
              {
                id: "edit-account",
                text: "编辑资料",
                onClick: () => {},
              },
            ],
            extraData: [
              {
                id: "exit-account",
                text: "退出登陆",
                onClick: () => {},
              },
            ],
          },
        },
      }}
      appFooterProps={{
        copyright: "©2024 BlaxBerry All Rights Reserved",
        socialLinks: ["github", "x"],
      }}
      handleRefreshPageContentData={() => {}}
    >
      {children}
    </AdminLayout>
  );
};

const RootPageLayoutMemo = memo(RootPageLayout);
export default RootPageLayoutMemo;
