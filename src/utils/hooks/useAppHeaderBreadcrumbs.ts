import { useMemo } from "react";

import { type AppNavigationItem } from "@/utils/hooks/useAppNavigation";

type UseAppHeaderBreadcrumbsProps = {
  navigationLinks: AppNavigationItem[];
};

export default function useAppHeaderBreadcrumbs({
  navigationLinks,
}: UseAppHeaderBreadcrumbsProps) {
  const currentRoute = navigationLinks.find((item) => item.isActive);

  const headerBreadcrumbs = useMemo<Array<AppNavigationItem>>(() => {
    const HomeRoute = navigationLinks.find(
      (item) => item.id === "pages-home",
    ) as unknown as AppNavigationItem;
    if (currentRoute?.id === HomeRoute.id || !currentRoute) {
      return [HomeRoute];
    } else {
      return [HomeRoute, currentRoute];
    }
  }, [currentRoute, navigationLinks]);

  return {
    appHeaderBreadcrumbsProps: {
      list: headerBreadcrumbs,
    },
  };
}
