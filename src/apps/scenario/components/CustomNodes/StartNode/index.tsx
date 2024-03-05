import { memo, type FC } from "react";

import type { Scenario } from "@/apps/scenario/types";
import CustomNodeWrapper from "../../CustomNodeWrapper";

type Props = Scenario.CustomNodeWrapperProps;

const StartNode: FC<Props> = ({ id, data, selected }) => {
  return (
    <CustomNodeWrapper {...{ id, data, selected }}>StartNode</CustomNodeWrapper>
  );
};

const StartNodeMemo = memo(StartNode);
export default StartNodeMemo;
