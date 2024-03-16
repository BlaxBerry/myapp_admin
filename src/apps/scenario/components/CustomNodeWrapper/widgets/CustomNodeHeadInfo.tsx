import { BaseParagraph } from "myapp_uilib_react";
import { memo, type FC } from "react";

import type { Scenario } from "@/apps/scenario/types";

type Props = Pick<Scenario.CustomNodeWrapperProps, "id">;

const CustomNodeHeadInfo: FC<Props> = ({ id }) => {
  return (
    <BaseParagraph
      style={{
        position: "absolute",
        top: 5,
        left: 10,
        fontSize: 10,
        color: "GrayText",
      }}
    >
      ID: {id}
    </BaseParagraph>
  );
};

const CustomNodeHeadInfoMemo = memo(CustomNodeHeadInfo);
export default CustomNodeHeadInfoMemo;
