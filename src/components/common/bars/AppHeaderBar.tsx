import { memo, type FC } from "react";

import {
  AppHeader,
  ThemeDarkModeSwitcher,
  ThemePaletteSwitcher,
  type AppHeaderNavItem,
  type AppHeaderSocialLinkItem,
} from "myapp_uilib_react";

import { APP_STYLES } from "@/styles/index.style";
import { useAdminTheme, useAppNavigation } from "@/utils/hooks";

const APP_NAME = import.meta.env.VITE_APP_NAME;
const LOGO_URL = import.meta.env.VITE_APP_FAVICON_URL;

const AppHeaderBar: FC = () => {
  const { themeValue, setThemeDarkMode, setThemePalette } = useAdminTheme();
  const { navigationLinks, backToHome } = useAppNavigation();

  const navItems = navigationLinks.map<AppHeaderNavItem>(
    ({ label, icon, isActive, isDraft, onClick }) => ({
      text: label,
      icon,
      selected: isActive,
      disabled: !!isDraft,
      onClick,
    }),
  );

  return (
    <AppHeader
      headerHeight={APP_STYLES.APP_HEADER_HEIGHT}
      headerContainerMaxWidth={APP_STYLES.APP_HEADER_CONTAINER_WIDTH}
      logoURL={LOGO_URL}
      title={APP_NAME}
      onClickTitle={backToHome}
      socialLinks={socialLinks}
      navItemsOptionTitle="路由项"
      navItems={navItems}
      showNavItemsInPCScreen={false}
      settingsOptionTitle="设置项"
      settingsOptions={{
        DarkModeSwitcher: (
          <ThemeDarkModeSwitcher
            labelText={"切换主题模式"}
            value={themeValue?.isDarkMode ?? false}
            onChange={(v) => setThemeDarkMode(v)}
          />
        ),
        PaletteSwitcher: (
          <ThemePaletteSwitcher
            labelText={"切换主题色调"}
            value={themeValue?.paletteName}
            onChange={(v) => setThemePalette(v)}
          />
        ),
        // CustomOptions: (
        //   <div>
        //     <section>CustomOption</section>
        //     <section>CustomOption</section>
        //   </div>
        // ),
      }}
    />
  );
};

const socialLinks: Array<AppHeaderSocialLinkItem> = [
  {
    icon: "github",
    link: "https://github.com/BlaxBerry/myapp_admin",
  },
  {
    icon: "facebook",
    link: "https://www.facebook.com/",
  },
  { icon: "x", link: "https://twitter.com/" },
];

const AppHeaderBarMemo = memo(AppHeaderBar);
export default AppHeaderBarMemo;
