import type { Analysis } from "@/apps/analysis/types";
import { createContext, type Dispatch, type SetStateAction } from "react";

type SelectedRepo = Analysis.FormattedGithubRepoData | undefined;

export type GithubRepoListContextProps = {
  selectedRepo: SelectedRepo;
  setSelectedRepo: Dispatch<SetStateAction<SelectedRepo>>;
};

export const GithubRepoListContextDefaultValue: GithubRepoListContextProps = {
  selectedRepo: undefined,
  setSelectedRepo: () => {},
};

export const GithubRepoListContext = createContext<GithubRepoListContextProps>(
  GithubRepoListContextDefaultValue,
);
