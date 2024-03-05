import { memo, type FC } from "react";

import type { Scenario } from "@/apps/scenario/types";
import CustomNodeWrapper from "../../CustomNodeWrapper";

type Props = Scenario.CustomNodeWrapperProps;

const HTMLNode: FC<Props> = ({ id, data, selected }) => {
  return (
    <CustomNodeWrapper {...{ id, data, selected }}>HTML</CustomNodeWrapper>
  );
};

const HTMLNodeMemo = memo(HTMLNode);
export default HTMLNodeMemo;
