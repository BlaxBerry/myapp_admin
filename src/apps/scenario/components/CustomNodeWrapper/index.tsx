import { memo, type FC, type PropsWithChildren } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { IoIosWarning } from "react-icons/io";

import { Handle, NodeResizeControl, Position } from "reactflow";
import type { Scenario } from "../../types";
import {
  CUSTOM_NODE_HANDLE_STYLES,
  CUSTOM_NODE_HEIGHT,
  CUSTOM_NODE_WIDTH,
  getCustomNodeStyle,
} from "../CustomNodes/index.styles";

type Props = PropsWithChildren<
  Pick<Scenario.CustomNodeWrapperProps, "id" | "selected" | "data">
>;

const CustomNodeWrapper: FC<Props> = ({ children, id, selected, data }) => {
  const isInvalid = data?.logicData?.isInvalid;
  const nodeType = data?.logicData?.nodeType;

  const isStartNode = nodeType === "start";
  const couldResizeNode = nodeType === "message";

  return (
    <>
      <div style={getCustomNodeStyle({ selected, isInvalid, couldResizeNode })}>
        {isInvalid && (
          <div
            style={{
              position: "absolute",
              top: -24,
              left: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoIosWarning />
            <small style={{ marginLeft: 4 }}>Node Data Is Not Valid</small>
          </div>
        )}
        {!isStartNode && (
          <small style={{ position: "absolute", top: 5, left: 10 }}>
            ID: {id}
          </small>
        )}
        <div>{children}</div>
      </div>

      {/* start connection dot */}
      {!isStartNode && (
        <Handle
          type="target"
          position={Position.Left}
          style={{ ...CUSTOM_NODE_HANDLE_STYLES, left: -6 }}
        />
      )}
      {/* end connection dot */}
      <Handle
        type="source"
        position={Position.Right}
        style={{ ...CUSTOM_NODE_HANDLE_STYLES, right: -6 }}
      />

      {/* resize node size */}
      {couldResizeNode && (
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
      )}
    </>
  );
};

const CustomNodeWrapperMemo = memo(CustomNodeWrapper);
export default CustomNodeWrapperMemo;
