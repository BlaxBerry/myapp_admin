import { memo, type FC } from "react";

import type { Scenario } from "@/apps/scenario/types";
import CustomNodeWrapper from "../../CustomNodeWrapper";

type Props = Scenario.CustomNodeWrapperProps;

const MessageNode: FC<Props> = ({ id, data, selected }) => {
  return (
    <CustomNodeWrapper {...{ id, data, selected }}>Message</CustomNodeWrapper>
  );
};

const MessageNodeMemo = memo(MessageNode);
export default MessageNodeMemo;
