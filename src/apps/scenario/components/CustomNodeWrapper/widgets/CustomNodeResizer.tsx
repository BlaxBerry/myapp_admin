import { memo, type FC } from "react";
import { NodeResizeControl } from "reactflow";

import { ScenarioNodeResizerArrowIcon } from "@/common/components";
import { CUSTOM_NODE_HEIGHT, CUSTOM_NODE_WIDTH } from "../../index.styles";

const CustomNodeResizer: FC = () => {
  return (
    <NodeResizeControl
      minWidth={CUSTOM_NODE_WIDTH}
      minHeight={CUSTOM_NODE_HEIGHT}
      style={{
        background: "transparent",
        border: "none",
        zIndex: 1,
      }}
    >
      <ScenarioNodeResizerArrowIcon />
    </NodeResizeControl>
  );
};

const CustomNodeResizerMemo = memo(CustomNodeResizer);
export default CustomNodeResizerMemo;
