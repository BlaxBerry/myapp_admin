import { memo, type FC } from "react";

import DataContainerWrapper, {
  type DataContainerWrapperProps,
} from "../../DataContainerWrapper";
import {
  GithubRepoAmountBySkills,
  GithubRepoLatestCommit,
  type GithubRepoAmountBySkillsProps,
  type GithubRepoLatestCommitProps,
} from "./DataBoxs";

export type GithubRepoDataContainerProps = {
  title: DataContainerWrapperProps["title"];
  githubRepoLanguages: Pick<
    GithubRepoAmountBySkillsProps,
    "dataSource" | "isLoading"
  >;
  githubRepoLatest: Pick<
    GithubRepoLatestCommitProps,
    "dataSource" | "isLoading"
  >;
};

const GithubRepoDataContainer: FC<GithubRepoDataContainerProps> = ({
  title,
  githubRepoLanguages,
  githubRepoLatest,
}) => {
  return (
    <DataContainerWrapper title={title}>
      <div style={{ display: "flex" }}>
        <GithubRepoLatestCommit
          title={"Latest Committed Repo"}
          dataSource={githubRepoLatest.dataSource}
          isLoading={githubRepoLatest.isLoading}
        />

        <GithubRepoAmountBySkills
          title={"Repo & Skill Amount"}
          dataSource={githubRepoLanguages.dataSource}
          isLoading={githubRepoLanguages.isLoading}
        />
      </div>
    </DataContainerWrapper>
  );
};

const GithubRepoDataContainerMemo = memo(GithubRepoDataContainer);
export default GithubRepoDataContainerMemo;
