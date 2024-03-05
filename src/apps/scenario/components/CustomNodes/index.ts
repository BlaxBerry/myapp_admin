import type { Scenario } from "../../types";

import HTMLNode from "./HTMLNode";
import MessageNode from "./MessageNode";
import StartNode from "./StartNode";

export const SCENARIO_NODE_TYPES: Scenario.CustomNodeTypes = {
  start: StartNode,
  message: MessageNode,
  html: HTMLNode,
};
