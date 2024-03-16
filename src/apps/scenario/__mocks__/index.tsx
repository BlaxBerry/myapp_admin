import type { Edge } from "reactflow";
import type { Scenario } from "../types";

export const MOCK_INITIAL_NODES: Scenario.CustomNode[] = [
  { id: "0", type: "start", data: {}, position: { x: 100, y: 50 } },
  { id: "1", type: "message", data: {}, position: { x: 350, y: 200 } },
  {
    id: "2",
    type: "message",
    data: { logicData: { isInvalid: true, nodeType: "message" } },
    position: { x: 350, y: 350 },
  },
  { id: "3", type: "html", data: {}, position: { x: 100, y: 200 } },
];

export const MOCK_INITIAL_EDGES: Edge[] = [
  { id: "edge0-3", source: "0", target: "3" },
  { id: "edge3-1", source: "3", target: "1" },
  { id: "edge1-2", source: "1", target: "2" },
];
