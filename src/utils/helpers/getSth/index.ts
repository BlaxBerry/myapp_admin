/**
 * @description
 * 获取`src/assets/`目录下的资源文件的路径
 *
 * @param {string} pathname 位于`assets`目录下的目标文件夹的名称
 * @returns {string} 图片资源的URL
 *
 * @example
 * ```ts
 * // src/assets/images/assets/usa.svg
 * const flag_USA = getAssetsImageURL('images/flags/usa.svg')
 * ```
 */
export function getViteAssetsURL(pathname: string): string {
  return new URL(`../../assets/${pathname}`, import.meta.url).href;
}
