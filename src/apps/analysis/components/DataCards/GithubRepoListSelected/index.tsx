import { memo, useContext, type FC } from "react";
import { useTranslation } from "react-i18next";

import { formatToDateString } from "@/apps/analysis/fixtures/format";
import type { Analysis } from "@/apps/analysis/types";
import { GithubIcon, LinkIcon } from "@/common/components";
import {
  GithubRepoGroupContext,
  GithubRepoListContext,
} from "../../DataCardsGroups/GithubRepoGroup/contexts";
import {
  commonStyles,
  doubleContainerStyle,
  smallContainerStyle,
} from "../../index.styles";
import { CardCommonWrapper, DataItemTextWithLabel } from "../widgets";

const GithubRepoListSelected: FC<Analysis.DataCardCommonProps> = ({
  title,
}) => {
  const { t } = useTranslation();
  const { isLoading, error, refetch } = useContext(GithubRepoGroupContext);
  const { selectedRepo } = useContext(GithubRepoListContext);

  return (
    <CardCommonWrapper
      cardTitle={title}
      cardSubTitle={undefined}
      isLoadingData={isLoading}
      error={error}
      refetchData={refetch}
      cardWidth={smallContainerStyle.width}
      cardHeight={doubleContainerStyle.height}
      cardStyle={undefined}
      cardContentStyle={{
        flex: 1,
        overflowY: "scroll",
        marginTop: commonStyles.margin * 1.5,
      }}
    >
      {/* full name */}
      <DataItemTextWithLabel
        label={t("common.github.fullName")}
        value={selectedRepo?.fullName}
      />

      {/* description */}
      {selectedRepo?.description && (
        <DataItemTextWithLabel
          label={t("common.github.description")}
          value={selectedRepo?.description}
        />
      )}

      {/* topic skills */}
      {!!selectedRepo?.topicsLanguages?.length && (
        <DataItemTextWithLabel
          label={t("common.github.topicSkills")}
          value={selectedRepo?.topicsLanguages?.map((lang, index) => (
            <span key={lang}>
              {lang}
              {index < selectedRepo.topicsLanguages.length - 1 && `、`}
            </span>
            // <span
            //   key={lang}
            //   style={{
            //     display: "inline-block",
            //     border: "1px solid grey",
            //     borderRadius: 10,
            //     padding: commonStyles.margin,
            //     paddingTop: 0,
            //     paddingBottom: 0,
            //   }}
            // >
            //   {lang}
            // </span>
          ))}
        />
      )}

      {/* latest commit */}
      <DataItemTextWithLabel
        label={t("common.github.latestCommit")}
        value={formatToDateString(selectedRepo?.latestCommit)}
      />

      {/* create at */}
      <DataItemTextWithLabel
        label={t("common.github.createAt")}
        value={
          selectedRepo?.createdAt
            ? formatToDateString(new Date(selectedRepo.createdAt))
            : ""
        }
      />

      {/* links */}
      <DataItemTextWithLabel
        label={t("common.github.links")}
        value={
          <>
            <a
              href={selectedRepo?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: commonStyles.margin / 2,
                marginRight: commonStyles.margin,
              }}
            >
              <GithubIcon />
            </a>
            {selectedRepo?.homepage && (
              <a
                href={selectedRepo?.homepage}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: commonStyles.margin / 2,
                }}
              >
                <LinkIcon />
              </a>
            )}
          </>
        }
      />
    </CardCommonWrapper>
  );
};

const GithubRepoListSelectedMemo = memo(GithubRepoListSelected);
export default GithubRepoListSelectedMemo;
