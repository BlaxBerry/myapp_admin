import {
  memo,
  useMemo,
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from "react";
import { Handle, Position } from "reactflow";

import type { Scenario } from "../../types";
import { CUSTOM_NODE_HANDLE_STYLES, getCustomNodeStyle } from "../index.styles";
import {
  CustomNodeHeadInfo,
  CustomNodeResizer,
  CustomNodeWarningMessage,
} from "./widgets";

type Props = PropsWithChildren<
  Pick<Scenario.CustomNodeWrapperProps, "id" | "selected" | "data"> // avoid re-render
>;

const CustomNodeWrapper: FC<Props> = ({ children, id, selected, data }) => {
  const nodeType = data?.logicData?.nodeType;
  const isInvalid = data?.logicData?.isInvalid;
  const isStartNode = nodeType === "start";
  const couldResizeNode = nodeType === "message"; // FIXME:

  const customNodeWrapperStyle = useMemo<CSSProperties>(
    () => getCustomNodeStyle({ selected, isInvalid, couldResizeNode }),
    [selected, isInvalid, couldResizeNode],
  );

  return (
    <>
      <div style={customNodeWrapperStyle}>
        {isInvalid && <CustomNodeWarningMessage />}
        {!isStartNode && selected && <CustomNodeHeadInfo id={id} />}
        <div>{children}</div>
      </div>

      {/* left position's connection handle dot */}
      {!isStartNode && (
        <Handle
          type="target"
          position={Position.Left}
          style={CUSTOM_NODE_HANDLE_STYLES.targetLeft}
        />
      )}
      {/* right position's connection handle dot */}
      <Handle
        type="source"
        position={Position.Right}
        style={CUSTOM_NODE_HANDLE_STYLES.sourceRight}
      />

      {/* resize node size */}
      {couldResizeNode && <CustomNodeResizer />}
    </>
  );
};

const CustomNodeWrapperMemo = memo(CustomNodeWrapper);
export default CustomNodeWrapperMemo;
