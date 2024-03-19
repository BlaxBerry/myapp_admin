/**
 * @description
 * 跟随当前系统判断应用是否应处于黑暗模式
 *
 * @returns {boolean} 系统是否处于黑暗模式
 */
export const checkIsDarkModeOS = (): boolean => {
  const mediaQueryPrefers = matchMedia("(prefers-color-scheme: dark)");
  const isDark = mediaQueryPrefers.matches;
  return isDark;
};
