import { memo, type FC } from "react";

import type { Scenario } from "@/apps/scenario/types";
import { WidgetSubText } from "@/common/components";

type Props = Pick<Scenario.CustomNodeWrapperProps, "id">;

const CustomNodeHeadInfo: FC<Props> = ({ id }) => {
  return (
    <WidgetSubText
      style={{
        position: "absolute",
        top: 5,
        left: 10,
      }}
    >
      ID: {id}
    </WidgetSubText>
  );
};

const CustomNodeHeadInfoMemo = memo(CustomNodeHeadInfo);
export default CustomNodeHeadInfoMemo;
