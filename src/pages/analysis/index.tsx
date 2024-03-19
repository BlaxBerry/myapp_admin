import { BaseButton, BaseParagraph } from "myapp_uilib_react";
import { type FC } from "react";

import {
  useQueryGithubRepos,
  useQueryScenarioDataById,
} from "@/apps/analysis/hooks";
import { queryKeys } from "@/utils/libs/reactQueryClient";
import AnalysisPageLayout from "./layout";

const AnalysisPage: FC = () => {
  const queryGithubRepos = useQueryGithubRepos({
    pageKey: queryKeys.APP_PAGES.analysis,
  });
  const queryScenarioDataById = useQueryScenarioDataById({
    pageKey: queryKeys.APP_PAGES.analysis,
    id: "222",
  });

  return (
    <AnalysisPageLayout>
      <BaseParagraph>Analysis Page</BaseParagraph>

      <div>
        GithubRepos:&nbsp;
        {queryGithubRepos.isLoading ? (
          "loading..."
        ) : queryGithubRepos.isError ? (
          <>
            {"error happened"}
            <BaseButton onClick={queryGithubRepos.refetch}>refetch</BaseButton>
          </>
        ) : (
          queryGithubRepos.data?.length
        )}
      </div>
      <div>
        Scenario Data:&nbsp;
        {queryScenarioDataById.isLoading ? (
          "loading..."
        ) : queryScenarioDataById.isError ? (
          <>
            {"error happened"}
            <BaseButton onClick={queryScenarioDataById.refetch}>
              refetch
            </BaseButton>
          </>
        ) : (
          queryScenarioDataById?.data?.nodes?.length
        )}
      </div>
    </AnalysisPageLayout>
  );
};

export default AnalysisPage;
