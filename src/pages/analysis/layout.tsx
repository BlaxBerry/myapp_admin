import { memo, type FC } from "react";

import {
  DataCardGroupGithubRepo,
  DataCardGroupNotes,
  DataCardGroupScenarioNodes,
  type DataCardGroupGithubRepoProps,
} from "@/apps/analysis/components/DataCardsGroups";
import { AppFullPageContentLayout } from "@/common/layouts";

export type AnalysisPageLayoutProps = {
  githubRepos: DataCardGroupGithubRepoProps;
};

const AnalysisPageLayout: FC<AnalysisPageLayoutProps> = ({ githubRepos }) => {
  return (
    <AppFullPageContentLayout>
      <DataCardGroupGithubRepo {...githubRepos} />

      <DataCardGroupScenarioNodes {...githubRepos} />

      <DataCardGroupNotes {...githubRepos} />
    </AppFullPageContentLayout>
  );
};

const AnalysisPageLayoutMemo = memo(AnalysisPageLayout);
export default AnalysisPageLayoutMemo;
