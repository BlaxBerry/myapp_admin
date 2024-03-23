import {
  BasePaper,
  BasePieChart,
  CapsuleButton,
  SelectedCapsuleButton,
  type BasePieChartProps,
} from "myapp_uilib_react";
import { memo, startTransition, useState, type FC } from "react";
import { TbSortAscending2, TbSortDescending2 } from "react-icons/tb";

import { WidgetSubText } from "@/common/components";
import { commonStyles, doubleContainerStyle } from "../../../index.styles";

export type ScenarioNodeTypesBoxProps = {
  dataSource: BasePieChartProps["dataSource"];
};

const ScenarioNodeTypesBox: FC<ScenarioNodeTypesBoxProps> = ({
  dataSource,
}) => {
  const [isAscOrder, setIsAscOrder] = useState<boolean>(true);

  return (
    <BasePaper
      contentProps={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: doubleContainerStyle.height,
          width: doubleContainerStyle.width,
        },
      }}
    >
      <div style={{ width: 300 }}>
        <BasePieChart
          dataSource={dataSource}
          hiddenSideLabel
          centerLabel="ノード種類"
          useHighlight
          chartProps={{
            width: 300,
            height: 250,
          }}
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
          flex: 1,
          height: doubleContainerStyle.height - commonStyles.padding * 4,
          marginLeft: commonStyles.margin * 2,
          overflowY: "scroll",
        }}
      >
        <CapsuleButton
          leftButtonProps={{
            children: <TbSortAscending2 style={{ fontSize: 20 }} />,
          }}
          rightButtonProps={{
            children: <TbSortDescending2 style={{ fontSize: 20 }} />,
          }}
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

        <div style={{ marginTop: commonStyles.margin * 2 }}>
          {dataSource
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
    </BasePaper>
  );
};

const ScenarioNodeTypesBoxMemo = memo(ScenarioNodeTypesBox);
export default ScenarioNodeTypesBoxMemo;
