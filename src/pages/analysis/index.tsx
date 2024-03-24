import { useMemo, type FC } from "react";

import { SKILLS_COLORS } from "@/apps/analysis/fixtures/constants";
import { useQueryGithubRepos } from "@/apps/analysis/hooks";
import { queryKeys } from "@/utils/libs/reactQueryClient";
import AnalysisPageLayout, { type AnalysisPageLayoutProps } from "./layout";

const AnalysisPage: FC = () => {
  const queryGithubRepos = useQueryGithubRepos({
    pageKey: queryKeys.APP_PAGES.analysis,
  });
  // const queryScenarioDataById = useQueryScenarioDataById({
  //   pageKey: queryKeys.APP_PAGES.analysis,
  //   id: "222",
  // });

  const githubRepoLanguages = useMemo<
    AnalysisPageLayoutProps["githubRepoLanguages"]["dataSource"]
  >(() => {
    const dataSource = queryGithubRepos.data?.map((item) => ({
      id: item.id,
      mainSkill: item.mainLanguages ?? "?",
    }));
    const _map = new Map();
    dataSource?.forEach((item) => {
      const mainSkill = item.mainSkill;
      _map.set(mainSkill, (_map.get(mainSkill) || 0) + 1);
    });
    return Array.from(_map, ([key, value]) => ({
      id: key,
      label: key,
      value,
      color: SKILLS_COLORS[key] || "GreyText",
    }));
  }, [queryGithubRepos?.data]);

  const githubRepoLatest = useMemo<
    AnalysisPageLayoutProps["githubRepoLatest"]["dataSource"]
  >(() => {
    const dataSource = queryGithubRepos?.data?.map((item) => ({
      ...item,
      updatedAt: new Date(item.updatedAt).getTime(),
    }));
    const arr = dataSource?.sort((a, b) => b.updatedAt - a.updatedAt);
    const latest = arr?.[0];
    function formatToDateString(date: Date): string {
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return `${y}/${m}/${d}`;
    }
    return {
      repoName: latest?.name ?? "",
      latestCommit: latest?.updatedAt
        ? formatToDateString(new Date(latest.updatedAt))
        : "",
      mainSkill: latest?.mainLanguages ?? "",
    };
  }, [queryGithubRepos?.data]);

  return (
    <AnalysisPageLayout
      githubRepoLanguages={{
        dataSource: githubRepoLanguages,
        isLoading: queryGithubRepos.isLoading,
      }}
      githubRepoLatest={{
        dataSource: githubRepoLatest,
        isLoading: queryGithubRepos.isLoading,
      }}
    />
  );
  // <>
  //   <div>
  //     GithubRepos:&nbsp;
  //     {queryGithubRepos.isLoading ? (
  //       "loading..."
  //     ) : queryGithubRepos.isError ? (
  //       <>
  //         {"error happened"}
  //         <BaseButton onClick={queryGithubRepos.refetch}>refetch</BaseButton>
  //       </>
  //     ) : (
  //       queryGithubRepos.data?.length
  //     )}
  //   </div>
  //   <div>
  //     Scenario Data:&nbsp;
  //     {queryScenarioDataById.isLoading ? (
  //       "loading..."
  //     ) : queryScenarioDataById.isError ? (
  //       <>
  //         {"error happened"}
  //         <BaseButton onClick={queryScenarioDataById.refetch}>
  //           refetch
  //         </BaseButton>
  //       </>
  //     ) : (
  //       queryScenarioDataById?.data?.nodes?.length
  //     )}
  //   </div>
  // </>;
};

export default AnalysisPage;
