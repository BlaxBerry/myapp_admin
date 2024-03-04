import { useState, type PropsWithChildren } from "react";

import { ThemeProvider } from "myapp_uilib_react";

import { isDarkModeOS } from "@/utils/helpers";
import { AdminThemeContext, type AdminThemeContextValue } from "./context";

function AdminThemeProvider({ children }: PropsWithChildren) {
  const [themeValue, setThemeValue] = useState<AdminThemeContextValue>({
    isDarkMode: isDarkModeOS(),
    paletteName: "INDIGO",
  });

  return (
    <AdminThemeContext.Provider value={{ themeValue, setThemeValue }}>
      <ThemeProvider {...themeValue}>{children}</ThemeProvider>
    </AdminThemeContext.Provider>
  );
}

export default AdminThemeProvider;
