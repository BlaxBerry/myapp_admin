import { memo, type FC } from "react";

import { MOCK_CHART_SCENARIO_NODE_TYPES } from "@/apps/analysis/__mocks__";
import {
  GithubRepoDataContainer,
  NotesDataContainer,
  ScenarioDataContainer,
  type GithubRepoDataContainerProps,
} from "@/apps/analysis/components/DataContainers";
import { AppFullPageContentLayout } from "@/common/layouts";

export type AnalysisPageLayoutProps = Pick<
  GithubRepoDataContainerProps,
  "githubRepoLanguages" | "githubRepoLatest"
>;

const AnalysisPageLayout: FC<AnalysisPageLayoutProps> = ({
  githubRepoLanguages,
  githubRepoLatest,
}) => {
  return (
    <AppFullPageContentLayout>
      <GithubRepoDataContainer
        title={"Github Repositories"}
        githubRepoLanguages={githubRepoLanguages}
        githubRepoLatest={githubRepoLatest}
      />

      <ScenarioDataContainer
        title={"Scenario"}
        scenarioNodeTypes={MOCK_CHART_SCENARIO_NODE_TYPES}
      />

      <NotesDataContainer title={"Notes"} />
    </AppFullPageContentLayout>
  );
};

const AnalysisPageLayoutMemo = memo(AnalysisPageLayout);
export default AnalysisPageLayoutMemo;
