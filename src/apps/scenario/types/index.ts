import type { ComponentType } from "react";
import type {
  Node as ReactFlow_Node,
  NodeProps as ReactFlow_NodeProps,
} from "reactflow";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Scenario {
  /**
   * type of custom node's type name.
   *
   * `Scenario.CustomNode['type']`
   */
  export type CustomNodeTypeNames = "start" | "message" | "html";

  /**
   * type of custom node's data.
   *
   * `Scenario.CustomNode['data']`
   */
  export type CustomNodeData = {
    formData?: CustomNodeFormData;
    logicData?: CustomNodeLogicData;
  };

  /**
   * type of custom node's formData inside data attribute
   *
   * `Scenario.CustomNode['data']['formData']`
   */
  export type CustomNodeFormData = {
    id: string;
    name: string;
    title: string;
  };

  /**
   * type of custom node's logicData inside data attribute
   *
   * `Scenario.CustomNode['data']['logicData']`
   */
  export type CustomNodeLogicData = {
    nodeType: CustomNodeTypeNames;
    groupName?: string;
    isInvalid?: boolean;
  };

  /**
   * type of custom node.
   *
   * extends ReactFlow's Node.
   * - data: CustomNodeData
   * - type: CustomNodeTypeNames
   */
  export type CustomNode = ReactFlow_Node<CustomNodeData, CustomNodeTypeNames>;

  /**
   * type of CustomNodeWrapper component's props.
   *
   * extends ReactFlow's NodeProps, and unity CustomNode.
   */
  export type CustomNodeWrapperProps = ReactFlow_NodeProps<CustomNodeData>;

  /**
   * type of ReactFlow Component's nodeType attribute.
   */
  // export type CustomNodeTypes =ReactFlow_NodeTypes
  export type CustomNodeTypes = {
    [key in CustomNodeTypeNames]: ComponentType<CustomNodeWrapperProps>;
  };
}
