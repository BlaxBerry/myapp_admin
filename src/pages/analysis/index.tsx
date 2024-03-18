import { useQuery } from "@tanstack/react-query";
import { type FC } from "react";

import apis from "@/api";
import { getFormattedGithubRepoData } from "@/utils/helpers/formatSth";
import AnalysisPageLayout from "./layout";

const AnalysisPage: FC = () => {
  const queryGithubRepos = useQuery({
    queryKey: ["githubRepos"],
    queryFn: async () => {
      const res = await apis.getGithubRepos();
      return getFormattedGithubRepoData(res?.data?.data);
    },
  });

  const queryScenarioDataById = useQuery({
    queryKey: ["scenarioList"],
    queryFn: async () => {
      const res = await apis.getScenarioDataById("22");
      return res?.data?.data;
    },
  });

  return (
    <AnalysisPageLayout>
      AnalysisPage
      <div>
        GithubRepos:&nbsp;
        {queryGithubRepos.isLoading
          ? "loading..."
          : queryGithubRepos.isError
            ? "error happened"
            : queryGithubRepos.data?.length}
      </div>
      <div>
        Scenario Data:&nbsp;
        {queryScenarioDataById.isLoading
          ? "loading..."
          : queryScenarioDataById.isError
            ? "error happened"
            : queryScenarioDataById?.data?.nodes?.length}
      </div>
    </AnalysisPageLayout>
  );
};

export default AnalysisPage;
