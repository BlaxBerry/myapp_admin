import { useMemo, type ReactNode } from "react";
import { FiHome } from "react-icons/fi";
import { LuWorkflow } from "react-icons/lu";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

type AppNavigationItem = {
  link: string;
  label: string;
  isDraft?: boolean;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const navigationItems: Array<Omit<AppNavigationItem, "isActive" | "onClick">> =
  [
    {
      link: "/",
      label: "Home",
      icon: <FiHome style={{ fontSize: 20 }} />,
    },
    {
      link: "/analysis",
      label: "Analysis",
      icon: <TbBrandGoogleAnalytics style={{ fontSize: 20 }} />,
    },
    {
      link: "/scenario",
      label: "Scenario",
      icon: <LuWorkflow style={{ fontSize: 20 }} />,
    },
  ];

export default function useAppNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigationLinks = useMemo<Array<AppNavigationItem>>(
    () =>
      navigationItems.map<AppNavigationItem>((item) => ({
        ...item,
        isActive: pathname.endsWith(item.link),
        onClick: () => navigate(item.link),
      })),
    [pathname, navigate],
  );

  return {
    navigationLinks,
    backToHome: () => navigate("/"),
    backToHomeReplace: () => navigate("/", { replace: true }),
  };
}
