import { memo, type FC } from "react";

import { ScenarioNodeWarningIcon, WidgetSubText } from "@/common/components";

const CustomNodeWarningMessage: FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: -24,
        left: 5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ScenarioNodeWarningIcon />
      <WidgetSubText fontWeight={600}>Node Data Is Not Valid</WidgetSubText>
    </div>
  );
};

const CustomNodeWarningMessageMemo = memo(CustomNodeWarningMessage);
export default CustomNodeWarningMessageMemo;
