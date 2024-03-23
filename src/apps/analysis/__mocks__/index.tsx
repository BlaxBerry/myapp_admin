import type { GithubRepoLatestCommitProps } from "../components/DataContainers/GithubRepoDataContainer/DataBoxs";

export const MOCK_CHART_GITHUB_REPO_LANGUAGES = [
  {
    id: "TypeScript",
    label: "TypeScript",
    value: 4,
    color: "#2762ba",
  },
  {
    id: "Go",
    label: "Go",
    value: 2,
    color: "#139dcf",
  },
  {
    id: "Python",
    label: "Python",
    value: 2,
    color: "#2a5d93",
  },
  {
    id: "Astro",
    label: "Astro",
    value: 1,
    color: "#fc4209",
  },
  {
    id: "JavaScript",
    label: "Javascript",
    value: 1,
    color: "#eddd49",
  },
  {
    id: "Shell",
    label: "Shell",
    value: 1,
    color: "#7add40",
  },
];

export const MOCK_CHART_GITHUB_REPO_LATEST_COMMITTED: GithubRepoLatestCommitProps["dataSource"] =
  {
    repoName: "myapp_uilib_react",
    latestCommit: "2024/03/24",
    mainSkill: "Typescript",
  };

export const MOCK_CHART_SCENARIO_NODE_TYPES = [
  {
    id: "message",
    label: "メッセージノード",
    value: 26,
  },
  {
    id: "html",
    label: "HTMLノード",
    value: 4,
  },
  {
    id: "form",
    label: "フォームノード",
    value: 16,
  },
  {
    id: "variables",
    label: "変数ノード",
    value: 12,
  },
  {
    id: "condition",
    label: "分岐ノード",
    value: 3,
  },
];
