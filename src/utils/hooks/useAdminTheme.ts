import type { SamplePaletteName } from "myapp_uilib_react";
import { useCallback, useContext } from "react";
import {
  AdminThemeContext,
  type AdminThemeContextProps,
} from "../../components/providers/AdminThemeProvider/context";

export default function useAdminTheme() {
  const adminThemeContext =
    useContext<AdminThemeContextProps>(AdminThemeContext);

  const setThemeDarkMode = useCallback(
    (value: boolean) => {
      adminThemeContext?.setThemeValue((s) => ({
        ...s,
        isDarkMode: value,
      }));
    },
    [adminThemeContext],
  );

  const setThemePalette = useCallback(
    (value: SamplePaletteName) => {
      adminThemeContext?.setThemeValue((s) => ({
        ...s,
        paletteName: value,
      }));
    },
    [adminThemeContext],
  );

  return {
    themeValue: adminThemeContext?.themeValue,
    setThemeValue: adminThemeContext?.setThemeValue,

    setThemeDarkMode,
    setThemePalette,
  };
}
