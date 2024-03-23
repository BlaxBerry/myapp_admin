import { BasePaper } from "myapp_uilib_react";
import { memo, type FC } from "react";

import { SKILLS_COLORS } from "@/apps/analysis/fixtures/constants";
import {
  WidgetLabel,
  WidgetSubLabel,
  WidgetSubText,
} from "@/common/components";
import { IoGitCommit } from "react-icons/io5";
import { commonStyles, smallContainerStyle } from "../../../index.styles";

export type GithubRepoLatestCommitProps = {
  title: string;
  dataSource: {
    repoName: string;
    latestCommit: string;
    mainSkill: string;
  };
  isLoading: boolean;
};

const GithubRepoLatestCommit: FC<GithubRepoLatestCommitProps> = ({
  title,
  dataSource,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <BasePaper
        contentProps={{
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: smallContainerStyle.width,
            height: smallContainerStyle.height,
          },
        }}
      >
        <WidgetSubLabel>Loading...</WidgetSubLabel>
      </BasePaper>
    );
  }

  return (
    <BasePaper
      contentProps={{
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: smallContainerStyle.width,
          height: smallContainerStyle.height,
        },
      }}
    >
      <div>
        <WidgetSubLabel>{title}</WidgetSubLabel>
        <WidgetSubText color="GrayText" display="flex" alignItems="center">
          <IoGitCommit style={{ marginRight: commonStyles.padding / 2 }} />
          {dataSource?.latestCommit}
        </WidgetSubText>
        <WidgetLabel textAlign="right">{dataSource?.repoName}</WidgetLabel>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            background: SKILLS_COLORS[dataSource?.mainSkill ?? ""],
            width: 12,
            height: 12,
            marginRight: commonStyles.padding,
          }}
        />
        <WidgetSubText>{dataSource?.mainSkill}</WidgetSubText>
      </div>
    </BasePaper>
  );
};

const GithubRepoLatestCommitMemo = memo(GithubRepoLatestCommit);
export default GithubRepoLatestCommitMemo;
