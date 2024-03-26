import { BasePieChart, type BasePieChartDataItem } from "myapp_uilib_react";
import { memo, useContext, useMemo, type FC } from "react";
import { useTranslation } from "react-i18next";

import { SkillArea } from "@/apps/analysis/fixtures/constants";
import { getReposTotalBySkillAreaForPieChart } from "@/apps/analysis/fixtures/utils";
import type { Analysis } from "@/apps/analysis/types";
import { WidgetText } from "@/common/components";
import { GithubRepoGroupContext } from "../../DataCardsGroups/GithubRepoGroup/contexts";
import { commonStyles, smallContainerStyle } from "../../index.styles";
import { CardCommonWrapper } from "../widgets";

const GithubRepoSkillsAmount: FC<Analysis.DataCardCommonProps> = ({
  title,
}) => {
  const { t } = useTranslation();
  const { isLoading, error, refetch, githubRepoLanguages } = useContext(
    GithubRepoGroupContext,
  );

  const skillLabels = useMemo(() => {
    if (githubRepoLanguages) {
      const frontEndSkillRepoAmount = getReposTotalBySkillAreaForPieChart(
        githubRepoLanguages,
        SkillArea.frontEnd,
      );
      const backEndSkillRepoAmount = getReposTotalBySkillAreaForPieChart(
        githubRepoLanguages,
        SkillArea.backEnd,
      );
      const otherSkillRepoAmount = getReposTotalBySkillAreaForPieChart(
        githubRepoLanguages,
        SkillArea.other,
      );
      const allRepoAmount =
        frontEndSkillRepoAmount + backEndSkillRepoAmount + otherSkillRepoAmount;
      return [
        {
          label: t("common.skills.all"),
          amount: allRepoAmount,
        },
        {
          label: t("common.skills.frontend"),
          amount: frontEndSkillRepoAmount,
        },
        {
          label: t("common.skills.backend"),
          amount: backEndSkillRepoAmount,
        },
        {
          label: t("common.skills.others"),
          amount: otherSkillRepoAmount,
        },
      ];
    }
  }, [githubRepoLanguages, t]);

  return (
    <CardCommonWrapper
      cardTitle={title}
      cardSubTitle={undefined}
      isLoadingData={isLoading}
      error={error}
      refetchData={refetch}
      cardWidth={smallContainerStyle.width}
      cardHeight={smallContainerStyle.height}
      cardStyle={undefined}
      cardContentStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {skillLabels?.map(({ label, amount }) => (
          <div key={label} style={{ display: "flex", alignItems: "center" }}>
            <WidgetText
              color="GrayText"
              textAlign="right"
              style={{ width: 100, marginRight: commonStyles.padding }}
            >
              {label}
            </WidgetText>
            <WidgetText fontWeight={600}>
              {amount < 10 ? <>&nbsp;{amount}</> : amount}
            </WidgetText>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BasePieChart
          dataSource={githubRepoLanguages as Array<BasePieChartDataItem>}
          chartProps={{ width: 100, height: 100 }}
          hiddenSideLabel
          commonItemProps={{
            paddingAngle: 3,
            innerRadius: 3,
            cornerRadius: 5,
          }}
        />
      </div>
    </CardCommonWrapper>
  );
};

const GithubRepoSkillsAmountMemo = memo(GithubRepoSkillsAmount);
export default GithubRepoSkillsAmountMemo;
