import type { Scenario } from "../types";

export const initCustomNodeFromData = (
  nodeType: Scenario.CustomNodeTypeNames,
): Scenario.CustomNodeData["formData"] => {
  switch (nodeType) {
    case "message":
      return {
        id: "x",
        title: "",
        data: {},
      };
    case "html":
      return {
        id: "x",
        title: "",
        data: {},
      };

    default:
      return;
  }
};
