export type DataResponseGithubRepo = {
  id: number;
  name: string;
  fullName: string;
  topicsLanguages: string[];
  mainLanguages: string;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  html_url: string;
  description: string;
  homepage: string;
};

export type DataResponseGithubRepoList = Array<DataResponseGithubRepo>;

/**
 * @description get Github Repo's Data with Type
 */
export function getTypedGithubRepoData(
  data: Array<{ [key: string]: unknown }>,
): DataResponseGithubRepoList {
  return data?.map((item) => ({
    id: item?.id as number,
    name: item?.name as string,
    fullName: item?.full_name as string,
    topicsLanguages: item?.topics as string[],
    mainLanguages: item?.language as string,
    isPrivate: item?.private as boolean,
    createdAt: item?.created_at as string,
    updatedAt: item?.updated_at as string,
    pushedAt: item?.pushed_at as string,
    html_url: item?.html_url as string,
    description: item?.description as string,
    homepage: item?.homepage as string,
  }));
}
