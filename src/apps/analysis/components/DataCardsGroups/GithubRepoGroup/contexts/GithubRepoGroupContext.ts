import type { Analysis } from "@/apps/analysis/types";
import { createContext } from "react";

export type GithubRepoGroupContextProps = Pick<
  Analysis.DataCardsGroupsCommonProps,
  "isLoading" | "error" | "refetch"
> & {
  githubRepoList?: Analysis.FormattedGithubRepoDataList;
  githubRepoLatestCommitted?: Analysis.FormattedGithubRepoData;
  githubRepoLanguages?: Analysis.GithubRepoSkillList;
};

export const GithubRepoGroupContextDefaultValue: GithubRepoGroupContextProps = {
  isLoading: false,
  error: null,
  refetch: () => {},
  githubRepoList: [],
  githubRepoLatestCommitted: undefined,
  githubRepoLanguages: undefined,
};

export const GithubRepoGroupContext =
  createContext<GithubRepoGroupContextProps>(
    GithubRepoGroupContextDefaultValue,
  );
