import { memo, type FC } from "react";

import { APP_STYLES } from "@/styles/index.style";
import { useAppNavigation } from "@/utils/hooks";
import { AppSideMenu, AppSideMenuItem } from "myapp_uilib_react";

const AppSideMenuBar: FC = () => {
  const { navigationLinks } = useAppNavigation();

  return (
    <AppSideMenu
      height={APP_STYLES.APP_SIDE_MENU_HEIGHT}
      width={APP_STYLES.APP_SIDE_MENU_WIDTH}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      {navigationLinks.map(({ link, label, icon, isActive, onClick }) => (
        <AppSideMenuItem
          key={link}
          isActive={isActive}
          icon={icon}
          label={label}
          onClick={onClick}
        />
      ))}
    </AppSideMenu>
  );
};

const AppSideMenuBarMemo = memo(AppSideMenuBar);
export default AppSideMenuBarMemo;
