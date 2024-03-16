import { memo, type FC } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { NodeResizeControl } from "reactflow";

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
      <CgArrowsExpandLeft
        style={{
          color: "#ff0071",
          position: "absolute",
          right: 5,
          bottom: 5,
        }}
      />
    </NodeResizeControl>
  );
};

const CustomNodeResizerMemo = memo(CustomNodeResizer);
export default CustomNodeResizerMemo;
