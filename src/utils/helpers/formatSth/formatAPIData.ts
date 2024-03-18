/**
 * @description get Formatted Github Repo's Data
 */
export function getFormattedGithubRepoData(
  data: Array<{ [key: string]: unknown }>,
) {
  return data?.map((item) => ({
    id: item?.id,
    name: item?.name,
    fullName: item?.full_name,
    topicsLanguages: item?.topics,
    mainLanguages: item?.language,
    isPrivate: item?.private,
    createdAt: item?.created_at,
    updatedAt: item?.updated_at,
    pushedAt: item?.pushed_at,
  }));
}
