import type { ThemeProviderProps } from "myapp_uilib_react";
import { createContext, type Dispatch, type SetStateAction } from "react";

export type AdminThemeContextValue = Pick<
  ThemeProviderProps,
  "isDarkMode" | "paletteName"
>;

export type AdminThemeContextProps = null | {
  themeValue: AdminThemeContextValue;
  setThemeValue: Dispatch<SetStateAction<AdminThemeContextValue>>;
};

export const AdminThemeContext = createContext<AdminThemeContextProps>(null);
