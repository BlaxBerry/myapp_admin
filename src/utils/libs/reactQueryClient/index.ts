import { APP_PATHS } from "@/router/paths";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: Infinity,
    },
  },
});

export const queryKeys = {
  APP_PAGES: {
    analysis: APP_PATHS.analysis.root,
    scenario: APP_PATHS.scenario.root,
  },
  APIS: {
    scenario: {
      getScenarioDataById: "getScenarioDataById",
    },
    others: {
      getGithubUser: "getGithubUser",
      getGithubRepos: "getGithubRepos",
      getGithubRepoByName: "getGithubRepoByName",
      getGithubRepoLanguages: "getGithubRepoLanguages",
    },
  },
} as const;
