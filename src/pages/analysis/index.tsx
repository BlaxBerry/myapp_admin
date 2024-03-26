import { type FC } from "react";

import { useQueryGithubRepos } from "@/apps/analysis/hooks";
import { queryKeys } from "@/utils/libs/reactQueryClient";
import AnalysisPageLayout from "./layout";

const AnalysisPage: FC = () => {
  const queryGithubRepos = useQueryGithubRepos({
    pageKey: queryKeys.APP_PAGES.analysis,
  });
  // const queryScenarioDataById = useQueryScenarioDataById({
  //   pageKey: queryKeys.APP_PAGES.analysis,
  //   id: "222",
  // });

  return (
    <AnalysisPageLayout
      githubRepos={{
        dataSource: queryGithubRepos.data,
        isLoading: queryGithubRepos.isLoading,
        error: queryGithubRepos.error,
        refetch: queryGithubRepos.refetch,
      }}
    />
  );
};

export default AnalysisPage;
