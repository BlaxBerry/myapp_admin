import { memo, type FC } from "react";

import DataContainerWrapper, {
  type DataContainerWrapperProps,
} from "../../DataContainerWrapper";
import {
  ScenarioNodeTypesBox,
  type ScenarioNodeTypesBoxProps,
} from "./DataBoxs";

const ScenarioChartsContainer: FC<{
  title: DataContainerWrapperProps["title"];
  scenarioNodeTypes: ScenarioNodeTypesBoxProps["dataSource"];
}> = ({ title, scenarioNodeTypes }) => {
  return (
    <DataContainerWrapper title={title}>
      <div style={{ display: "flex" }}>
        <ScenarioNodeTypesBox dataSource={scenarioNodeTypes} />
      </div>
    </DataContainerWrapper>
  );
};

const ScenarioChartsContainerMemo = memo(ScenarioChartsContainer);
export default ScenarioChartsContainerMemo;
