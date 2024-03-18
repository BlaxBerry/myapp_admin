export const ENTRYPOINTS = {
  SCENARIO: {
    getScenarioDataById: (id: string) => `/api/scenario/${id}/data` as const,
    deleteScenarioById: (id: string) => `/api/scenario/${id}/data` as const,
    updateScenarioById: (id: string) => `/api/scenario/${id}/data` as const,
  },

  OTHERS: {
    getGithubUser: "/api/others/github/user",
    getGithubRepos: "/api/others/github/repos",
    getGithubRepoByName: (repoName: string) =>
      `/api/others/github/repos?name=${repoName}` as const,
    getGithubRepoLanguages: (repoName: string) =>
      `/api/others/github/${repoName}/languages` as const,
  },
} as const;
