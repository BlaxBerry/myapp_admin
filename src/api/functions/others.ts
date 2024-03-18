import axiosInstance from "../../utils/libs/axiosInstance";
import { ENTRYPOINTS } from "../entrypoints";

/**
 * @description 获取个人 Github 账号的信息
 * ```ts
 * const { data } = await getGithubUser();
 * ```
 */
const getGithubUser = () => {
  return axiosInstance.get(ENTRYPOINTS.OTHERS.getGithubUser);
};

/**
 * @description 获取个人 Github 仓库的信息
 * @example
 * ```ts
 * const { data } = await getGithubRepos();
 * ```
 */
const getGithubRepos = () => {
  return axiosInstance.get(ENTRYPOINTS.OTHERS.getGithubRepos);
};

/**
 * @description 获取个人 Github 仓库的信息
 * @example
 * ```ts
 * const { data } = await getGithubRepos({ repoName: "portfolio" });
 * ```
 */
const getGithubReposByName = (param: { repoName: string }) => {
  const url = ENTRYPOINTS.OTHERS.getGithubRepoByName(param.repoName);

  return axiosInstance.get(url);
};

/**
 * @description 获取个人 Github 指定仓库使用的所有语言
 * @example
 * ```ts
 * const { data } = await getGithubRepoLanguages("portfolio");
 * ```
 */
const getGithubRepoLanguages = (repoName: string) => {
  const url = ENTRYPOINTS.OTHERS.getGithubRepoLanguages(repoName);
  return axiosInstance.get(url);
};

export default {
  getGithubUser,
  getGithubRepos,
  getGithubReposByName,
  getGithubRepoLanguages,
};
