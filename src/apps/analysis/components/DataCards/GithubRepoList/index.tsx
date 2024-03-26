import { BaseList, BaseListItem } from "myapp_uilib_react";
import { memo, useContext, useMemo, type FC } from "react";

import { formatToDateString } from "@/apps/analysis/fixtures/format";
import type { Analysis } from "@/apps/analysis/types";
import {
  GithubCommitIcon,
  WidgetSubText,
  WidgetText,
} from "@/common/components";
import {
  GithubRepoGroupContext,
  GithubRepoListContext,
} from "../../DataCardsGroups/GithubRepoGroup/contexts";
import { commonStyles, doubleContainerStyle } from "../../index.styles";
import { CardCommonWrapper, DataItemColorBlock } from "../widgets";

const GithubRepoList: FC<Analysis.DataCardCommonProps> = ({ title }) => {
  const { isLoading, error, refetch, githubRepoList } = useContext(
    GithubRepoGroupContext,
  );
  const { selectedRepo, setSelectedRepo } = useContext(GithubRepoListContext);

  const TotalAmount = useMemo<string>(
    () => `Total ${githubRepoList?.length || 0}`,
    [githubRepoList],
  );

  return (
    <CardCommonWrapper
      cardTitle={title}
      cardSubTitle={TotalAmount}
      isLoadingData={isLoading}
      error={error}
      refetchData={refetch}
      cardWidth={doubleContainerStyle.width}
      cardHeight={doubleContainerStyle.height}
      cardStyle={undefined}
      cardContentStyle={{
        flex: 1,
        display: "flex",
        alignItems: "flex-start",
        overflowY: "scroll",
        marginTop: 4,
      }}
    >
      <BaseList listProps={{ style: { width: "100%" } }}>
        {githubRepoList?.map((item, index) => (
          <BaseListItem
            key={item.id}
            iconComponent={index + 1}
            primaryContent={
              <WidgetText component="span" fontWeight={600}>
                {item.repoName}
              </WidgetText>
            }
            secondaryContent={
              <WidgetSubText
                component="span"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <GithubCommitIcon />
                  {formatToDateString(item.latestCommit)}
                </span>
                <DataItemColorBlock reverse skillName={item?.mainSkill} />
              </WidgetSubText>
            }
            listItemProps={{
              style: { marginBottom: commonStyles.margin },
            }}
            listItemButtonProps={{
              disableRipple: true,
              disableTouchRipple: true,
              style: { paddingTop: 0, paddingBottom: 0 },
              selected: selectedRepo?.id === item?.id,
              onClick: (e) => {
                e.stopPropagation();
                setSelectedRepo(item);
              },
            }}
            listItemIconProps={{
              style: { marginRight: commonStyles.margin * 2 },
            }}
          />
        ))}
      </BaseList>
    </CardCommonWrapper>
  );
};

const GithubRepoListMemo = memo(GithubRepoList);
export default GithubRepoListMemo;
