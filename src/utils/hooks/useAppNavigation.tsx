import { useCallback, useMemo } from "react";
import { FiHome } from "react-icons/fi";
import { LuWorkflow } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

export type AppNavigationItem = {
  id: string;
  text: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
};

export const NAVIGATION_ITEMS: Array<
  Pick<AppNavigationItem, "id" | "text" | "icon"> & { link: string }
> = [
  {
    link: "/",
    id: "Home",
    text: "Home",
    icon: <FiHome style={{ fontSize: 20 }} />,
  },
  {
    link: "/analysis",
    id: "Analysis",
    text: "Analysis",
    icon: <TbBrandGoogleAnalytics style={{ fontSize: 20 }} />,
  },
  {
    link: "/scenario",
    id: "Scenario",
    text: "Scenario",
    icon: <LuWorkflow style={{ fontSize: 20 }} />,
  },
];

export default function useAppNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const backToHome = useCallback(() => navigate("/"), [navigate]);
  const backToHomeReplace = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
  );

  const navigationLinks = useMemo<Array<AppNavigationItem>>(
    () =>
      NAVIGATION_ITEMS.map((item) => {
        return {
          id: item.id,
          text: item.text,
          icon: item.icon,
          isActive: pathname.endsWith(item.link),
          onClick: () => navigate(item.link),
        };
      }),
    [pathname, navigate],
  );

  return {
    navigationLinks,
    backToHome,
    backToHomeReplace,
  };
}
