import {
  BasePieChart,
  CapsuleButton,
  SelectedCapsuleButton,
} from "myapp_uilib_react";
import {
  memo,
  startTransition,
  useContext,
  useMemo,
  useState,
  type FC,
} from "react";
import { useTranslation } from "react-i18next";

import type { Analysis } from "@/apps/analysis/types";
import { SortAscIcon, SortDescIcon, WidgetSubText } from "@/common/components";
import { GithubRepoGroupContext } from "../../DataCardsGroups/GithubRepoGroup/contexts";
import { commonStyles, doubleContainerStyle } from "../../index.styles";
import { CardCommonWrapper } from "../widgets";

const ScenarioNodeTypes: FC<Analysis.DataCardCommonProps> = ({ title }) => {
  const { t } = useTranslation();
  const { isLoading, error, refetch } = useContext(GithubRepoGroupContext);

  const [isAscOrder, setIsAscOrder] = useState<boolean>(true);

  const nodeTypes = useMemo(
    () => [
      {
        id: "message",
        label: t("apps.Scenario.nodeTypes.message"),
        value: 26,
      },
      {
        id: "html",
        label: t("apps.Scenario.nodeTypes.html"),
        value: 4,
      },
      {
        id: "form",
        label: t("apps.Scenario.nodeTypes.form"),
        value: 16,
      },
      {
        id: "variables",
        label: t("apps.Scenario.nodeTypes.variables"),
        value: 12,
      },
      {
        id: "condition",
        label: t("apps.Scenario.nodeTypes.condition"),
        value: 3,
      },
    ],
    [t],
  );

  return (
    <CardCommonWrapper
      cardTitle={title}
      cardSubTitle={undefined}
      isLoadingData={isLoading}
      error={error}
      refetchData={refetch}
      cardWidth={doubleContainerStyle.width}
      cardHeight={doubleContainerStyle.height}
      cardStyle={undefined}
      cardContentStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: doubleContainerStyle.width - 200,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BasePieChart
          dataSource={nodeTypes}
          hiddenSideLabel
          centerLabel={t("apps.Scenario.nodeText.type")}
          useHighlight
          chartProps={{ width: 300, height: 225 }}
          commonItemProps={{
            paddingAngle: 2,
            innerRadius: 45,
            cornerRadius: 10,
            arcLabel: (item): string => `${item.value}`,
          }}
        />
      </div>

      <div
        style={{
          width: 200,
        }}
      >
        <CapsuleButton
          leftButtonProps={{ children: <SortAscIcon /> }}
          rightButtonProps={{ children: <SortDescIcon /> }}
          defaultSelected={
            isAscOrder
              ? SelectedCapsuleButton.Left
              : SelectedCapsuleButton.Right
          }
          onClick={(selected) => {
            startTransition(() => {
              setIsAscOrder(selected === SelectedCapsuleButton.Left);
            });
          }}
        />
        <div
          style={{
            flex: 1,
            width: "100%",
            height: 200,
            overflowY: "scroll",
          }}
        >
          <div style={{ marginTop: commonStyles.margin * 2 }}>
            {nodeTypes
              ?.sort((a, b) =>
                isAscOrder ? a.value - b.value : b.value - a.value,
              )
              ?.map((item) => (
                <WidgetSubText
                  key={item.id}
                  fontWeight={600}
                  style={{ padding: commonStyles.padding / 2 }}
                >
                  <span style={{ display: "inline-block", width: 30 }}>
                    {item.value < 10 ? <>&nbsp;{item.value}</> : item.value}
                  </span>
                  {item.label}
                </WidgetSubText>
              ))}
          </div>
        </div>
      </div>
    </CardCommonWrapper>
  );
};

const ScenarioNodeTypesMemo = memo(ScenarioNodeTypes);
export default ScenarioNodeTypesMemo;
