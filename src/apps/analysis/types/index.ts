import type { DataResponseGithubRepo } from "@/utils/helpers/formatSth";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Analysis {
  export type GithubRepoData = {
    id: string;
    repoName?: string;
    latestCommit?: Date;
    mainSkill?: string;
  };

  export type DataCardsGroupsCommonProps<DataSourceT = undefined> = {
    dataSource?: DataSourceT;
    isLoading: boolean;
    error: Error | null;
    refetch: () => void;
  };
  export type DataCardCommonProps = {
    title: string;
  };

  export type FormattedGithubRepoDataList = Array<FormattedGithubRepoData>;
  export type FormattedGithubRepoData = Omit<DataResponseGithubRepo, "id"> & {
    id: string;
    repoName: string;
    latestCommit: Date;
    mainSkill: string;
  };

  export type GithubRepoSkillList = Array<GithubRepoSkill>;
  export type GithubRepoSkill = {
    id: string | number;
    label: string;
    value?: number;
    color?: string | undefined;
  };
}
