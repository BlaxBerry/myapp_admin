/**
 * @description get Formatted Github Repo's Data
 */
export function getFormattedGithubRepoData(
  data: Array<{ [key: string]: unknown }>,
) {
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
  }));
}
