import type { DataResponseGithubRepoList } from "@/utils/helpers/formatSth";
import type { Analysis } from "../types";

export function getFormattedGithubRepoData(
  typedGithubRepoList: DataResponseGithubRepoList,
): Analysis.FormattedGithubRepoDataList {
  return (
    typedGithubRepoList?.map((item) => ({
      ...item,
      id: String(item?.id) ?? "",
      repoName: item?.name ?? "",
      mainSkill: item?.mainLanguages ?? "",
      latestCommit: new Date(item.pushedAt),
    })) || []
  );
}

/**
 * @description 将 Date 对象转型为`yyyy/mm/dd`字符串
 */
export function formatToDateString(date?: Date): string {
  if (typeof date === "undefined") return "";

  const y = date.getFullYear();
  const _m = date.getMonth() + 1;
  const _d = date.getDate();
  const m = _m < 10 ? `0${_m}` : _m;
  const d = _d < 10 ? `0${_d}` : _d;
  return `${y}/${m}/${d}`;
}
