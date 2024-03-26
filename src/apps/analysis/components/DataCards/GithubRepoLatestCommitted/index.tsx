import { memo, useContext, type FC } from "react";

import { formatToDateString } from "@/apps/analysis/fixtures/format";
import type { Analysis } from "@/apps/analysis/types";
import { GithubCommitIcon, WidgetLabel } from "@/common/components";
import { GithubRepoGroupContext } from "../../DataCardsGroups/GithubRepoGroup/contexts";
import { commonStyles, smallContainerStyle } from "../../index.styles";
import { CardCommonWrapper, DataItemColorBlock } from "../widgets";

const GithubRepoLatestCommitted: FC<Analysis.DataCardCommonProps> = ({
  title,
}) => {
  const { isLoading, error, refetch, githubRepoLatestCommitted } = useContext(
    GithubRepoGroupContext,
  );

  return (
    <CardCommonWrapper
      cardTitle={title}
      cardSubTitle={
        <>
          <GithubCommitIcon />
          {formatToDateString(githubRepoLatestCommitted?.latestCommit)}
        </>
      }
      isLoadingData={isLoading}
      error={error}
      refetchData={refetch}
      cardWidth={smallContainerStyle.width}
      cardHeight={smallContainerStyle.height}
      cardStyle={undefined}
      cardContentStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <WidgetLabel
        textAlign="right"
        style={{ marginBottom: commonStyles.margin / 2 }}
      >
        {githubRepoLatestCommitted?.repoName}
      </WidgetLabel>
      <DataItemColorBlock skillName={githubRepoLatestCommitted?.mainSkill} />
    </CardCommonWrapper>
  );
};

const GithubRepoLatestCommittedMemo = memo(GithubRepoLatestCommitted);
export default GithubRepoLatestCommittedMemo;
