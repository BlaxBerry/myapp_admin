import { memo, useEffect, useMemo, useState, type FC } from "react";
import { useTranslation } from "react-i18next";

import { SKILLS_COLORS } from "@/apps/analysis/fixtures/constants";
import type { Analysis } from "@/apps/analysis/types";
import {
  DataCardGithubRepoLatestCommitted,
  DataCardGithubRepoList,
  DataCardGithubRepoListSelected,
  DataCardGithubRepoSkillsAmount,
} from "../../DataCards";
import { DataCardsGroupCommonWrapper } from "../widgets";
import {
  GithubRepoGroupContext,
  GithubRepoListContext,
  type GithubRepoGroupContextProps,
  type GithubRepoListContextProps,
} from "./contexts";

type GithubRepoLatestCommitted =
  GithubRepoGroupContextProps["githubRepoLatestCommitted"];
type GithubRepoLanguages = GithubRepoGroupContextProps["githubRepoLanguages"];

export type DataCardGroupGithubRepoProps =
  Analysis.DataCardsGroupsCommonProps<Analysis.FormattedGithubRepoDataList>;

const DataCardGroupGithubRepo: FC<DataCardGroupGithubRepoProps> = ({
  dataSource,
  isLoading,
  error,
  refetch,
}) => {
  const { t } = useTranslation();

  const githubRepoLatestCommitted = useMemo<GithubRepoLatestCommitted>(() => {
    if (dataSource) {
      const latest = dataSource.sort(
        (a, b) => b.latestCommit.getTime() - a.latestCommit.getTime(),
      )?.[0];
      return latest;
    }
  }, [dataSource]);

  const githubRepoLanguages = useMemo<GithubRepoLanguages>(() => {
    const _map = new Map();
    dataSource?.forEach((item) => {
      const mainSkill = item.mainSkill;
      _map.set(mainSkill, (_map.get(mainSkill) || 0) + 1);
    });

    return Array.from(_map, ([key, value]) => ({
      id: key,
      label: key || "Other Skill",
      value: value,
      color: SKILLS_COLORS[key] || "GreyText",
    }));
  }, [dataSource]);

  const [selectedRepo, setSelectedRepo] =
    useState<GithubRepoListContextProps["selectedRepo"]>(undefined);

  useEffect(() => {
    if (dataSource) {
      setSelectedRepo(dataSource[0]);
    }
  }, [dataSource]);

  return (
    <DataCardsGroupCommonWrapper title={t("apps.Analysis.groups.GithubRepo")}>
      <GithubRepoGroupContext.Provider
        value={{
          isLoading,
          error,
          refetch,
          githubRepoList: dataSource,
          githubRepoLanguages,
          githubRepoLatestCommitted,
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <DataCardGithubRepoSkillsAmount
              title={t("apps.Analysis.cards.GithubRepoTopSkillsAmount")}
            />
            <DataCardGithubRepoLatestCommitted
              title={t("apps.Analysis.cards.GithubRepoLatestCommittedRepo")}
            />
          </div>

          <GithubRepoListContext.Provider
            value={{ selectedRepo, setSelectedRepo }}
          >
            <DataCardGithubRepoList
              title={t("apps.Analysis.cards.GithubRepoList")}
            />
            <DataCardGithubRepoListSelected
              title={t("apps.Analysis.cards.GithubRepoListSelected")}
            />
          </GithubRepoListContext.Provider>
        </div>
      </GithubRepoGroupContext.Provider>
    </DataCardsGroupCommonWrapper>
  );
};

const DataCardGroupGithubRepoMemo = memo(DataCardGroupGithubRepo);
export default DataCardGroupGithubRepoMemo;
