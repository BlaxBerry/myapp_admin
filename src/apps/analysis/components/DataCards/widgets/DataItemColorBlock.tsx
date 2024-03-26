import { memo, type FC } from "react";

import { SKILLS_COLORS } from "@/apps/analysis/fixtures/constants";
import { WidgetSubText } from "@/common/components";
import { commonStyles } from "../../index.styles";

const DataItemColorBlock: FC<{
  skillName?: string;
  reverse?: boolean;
}> = ({ skillName, reverse = false }) => {
  if (!skillName) return null;

  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <span
        style={{
          background: skillName ? SKILLS_COLORS[skillName] : "",
          width: 12,
          height: 12,
          marginRight: reverse ? 0 : commonStyles.padding,
          marginLeft: reverse ? commonStyles.padding : 0,
        }}
      />

      <WidgetSubText component="span">{skillName}</WidgetSubText>
    </span>
  );
};

const DataItemColorBlockMemo = memo(DataItemColorBlock);
export default DataItemColorBlockMemo;
