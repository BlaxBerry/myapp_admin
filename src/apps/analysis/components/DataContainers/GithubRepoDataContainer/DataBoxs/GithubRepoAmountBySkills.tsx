import {
  BasePaper,
  BasePieChart,
  type BasePieChartDataItem,
} from "myapp_uilib_react";
import { memo, useMemo, type FC } from "react";

import { SkillArea } from "@/apps/analysis/fixtures/constants";
import { getReposTotalBySkillAreaForPieChart } from "@/apps/analysis/fixtures/utils";
import { WidgetSubLabel, WidgetText } from "@/common/components";
import { commonStyles, smallContainerStyle } from "../../../index.styles";

export type GithubRepoAmountBySkillsProps = {
  title: string;
  dataSource: Array<BasePieChartDataItem>;
  isLoading: boolean;
};

const GithubRepoAmountBySkills: FC<GithubRepoAmountBySkillsProps> = ({
  title,
  dataSource,
  isLoading,
}) => {
  const labels = useMemo(() => {
    const frontEndSkillRepoAmount = getReposTotalBySkillAreaForPieChart(
      dataSource,
      SkillArea.frontEnd,
    );
    const backEndSkillRepoAmount = getReposTotalBySkillAreaForPieChart(
      dataSource,
      SkillArea.backEnd,
    );
    const otherSkillRepoAmount = getReposTotalBySkillAreaForPieChart(
      dataSource,
      SkillArea.other,
    );
    const allRepoAmount =
      frontEndSkillRepoAmount + backEndSkillRepoAmount + otherSkillRepoAmount;
    return [
      {
        label: "All",
        amount: allRepoAmount,
      },
      {
        label: "Frontend",
        amount: frontEndSkillRepoAmount,
      },
      {
        label: "Backend",
        amount: backEndSkillRepoAmount,
      },
      {
        label: "Others",
        amount: otherSkillRepoAmount,
      },
    ];
  }, [dataSource]);

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
      </div>

      <div
        style={{
          height: "100%",
          width: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {labels.map(({ label, amount }) => (
            <div key={label} style={{ display: "flex", alignItems: "center" }}>
              <WidgetText
                color="GrayText"
                textAlign="right"
                style={{ width: 70, marginRight: commonStyles.padding }}
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
            width: 100,
            height: 100,
          }}
        >
          <BasePieChart
            dataSource={dataSource}
            chartProps={{ width: 100, height: 100 }}
            hiddenSideLabel
            commonItemProps={{
              paddingAngle: 3,
              innerRadius: 3,
              cornerRadius: 5,
            }}
          />
        </div>
      </div>
    </BasePaper>
  );
};

const GithubRepoAmountBySkillsMemo = memo(GithubRepoAmountBySkills);
export default GithubRepoAmountBySkillsMemo;
