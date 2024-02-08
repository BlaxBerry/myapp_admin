import { useQuery } from "@tanstack/react-query";
import { useEffect, type FC } from "react";

import apis from "@/utils/apis";
import AnalysisPageLayout from "./layout";

const AnalysisPage: FC = () => {
  const queryGithubRepos = useQuery({
    queryKey: ["githubRepos"],
    queryFn: async () => {
      try {
        const res = await apis.getGithubRepos();
        return res.data;
      } catch (error) {
        return error;
      }
    },
  });

  const queryScenarioList = useQuery({
    queryKey: ["scenarioList"],
    queryFn: async () => {
      try {
        const res = await apis.getScenarioList();
        return res.data;
      } catch (error) {
        return error;
      }
    },
  });

  /* eslint-disable-next-line no-console */
  console.log(queryScenarioList.data);

  useEffect(() => {
    (async () => {
      // await fetch("/api/scenario/list");
      // await fetch("/api/scenario/list?fields=name,id");
      // await fetch("/api/scenario/123");
      // await fetch("/api/scenario/123", { method: "DELETE" });
      // await fetch("/api/scenario/123", { method: "PATCH" });
      // await fetch("/api/others/github/user");
      // await fetch("/api/others/github/portfolio/languages");
      // await fetch("/api/others/github/repos?name=portfolio");
      // const res = await fetch("/api/others/github/repos");
      // const data = await res.json();
      //   console.log(JSON.parse(data?.data));
      //   function getFormattedGithubRepoData(
      //     data: Array<{ [key: string]: unknown }>,
      //   ): {} {
      //     return data?.map((item) => ({
      //       id: item?.id,
      //       name: item?.name,
      //       fullName: item?.full_name,
      //       topicsLanguages: item?.topics,
      //       mainLanguages: item?.language,
      //       isPrivate: item?.private,
      //       createdAt: item?.created_at,
      //       updatedAt: item?.updated_at,
      //       pushedAt: item?.pushed_at,
      //     }));
      //   }
    })();
  }, []);

  return (
    <AnalysisPageLayout>
      AnalysisPage
      <div>
        GithubRepos:{" "}
        {queryGithubRepos.isLoading
          ? "loading..."
          : queryGithubRepos.data?.data?.length}
      </div>
      <div>
        Scenario List:{" "}
        {queryScenarioList.isLoading
          ? "loading..."
          : queryScenarioList?.data?.data?.length}
      </div>
    </AnalysisPageLayout>
  );
};

export default AnalysisPage;
