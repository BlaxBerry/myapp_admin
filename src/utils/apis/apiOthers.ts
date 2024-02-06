import axiosInstance from "../libs/axiosInstance";

/**
 * @description 获取个人 Github 账号的信息
 * ```ts
 * const { data } = await getGithubUser();
 * ```
 */
const getGithubUser = () => {
  const url = "api/others/github/user";
  return axiosInstance.get(url);
};

/**
 * @description 获取个人 Github 仓库的信息
 * @example
 * ```ts
 * const { data } = await getGithubRepos();
 * const { data } = await getGithubRepos({ repoName: "portfolio" });
 * ```
 */
const getGithubRepos = (param?: { repoName: string }) => {
  const url = param?.repoName
    ? `api/others/github/repos?name=${param.repoName}`
    : `api/others/github/repos`;

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
  const url = `api/others/github/${repoName}/languages`;
  return axiosInstance.get(url);
};

export default {
  getGithubUser,
  getGithubRepos,
  getGithubRepoLanguages,
};
