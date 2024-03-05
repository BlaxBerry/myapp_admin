import type { CSSProperties } from "react";

export const CUSTOM_NODE_WIDTH = 200;
export const CUSTOM_NODE_HEIGHT = 100;

/** custom node's styles */
export const CUSTOM_NODE_STYLES: CSSProperties = {
  boxSizing: "border-box",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 16,
  borderRadius: 4,
  borderWidth: "2px",
  borderStyle: "solid",
};

export const getCustomNodeStyle = ({
  selected = false,
  isInvalid = false,
  couldResizeNode = false,
}: {
  selected: boolean;
  isInvalid?: boolean;
  couldResizeNode: boolean;
}): CSSProperties => ({
  ...CUSTOM_NODE_STYLES,
  minWidth: CUSTOM_NODE_WIDTH,
  minHeight: CUSTOM_NODE_HEIGHT,
  width: couldResizeNode ? "100%" : CUSTOM_NODE_WIDTH,
  height: couldResizeNode ? "100%" : CUSTOM_NODE_HEIGHT,

  color: isInvalid ? "red" : "#222",
  borderColor: isInvalid ? "red" : selected ? "black" : "#858585",
  backgroundColor: selected ? "white" : "#f0f0f0",
  boxShadow: selected ? "0 5px 5px 1px rgba(133, 133, 133, 0.2)" : undefined,
});

/** custom node's handle's ( connection dot ) styles */
export const CUSTOM_NODE_HANDLE_STYLES: CSSProperties = {
  width: 15,
  height: 15,
  zIndex: 1,
  background: "#858585",
  border: "2px solid white",
};
