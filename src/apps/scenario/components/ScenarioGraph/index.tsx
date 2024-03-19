import { memo, useCallback, useState, type FC } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  ConnectionLineType,
  Controls,
  getOutgoers,
  MarkerType,
  MiniMap,
  Panel,
  useReactFlow,
  type Connection,
  type Edge,
  type Node,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
} from "reactflow";
import "reactflow/dist/style.css";

import "@/styles/over_reactflow.css";

import { MOCK_INITIAL_EDGES, MOCK_INITIAL_NODES } from "../../__mocks__";
import { SCENARIO_NODE_TYPES } from "../CustomNodes";
import { CUSTOM_CONNECTION_HANDLE_WIDTH } from "../index.styles";
import {
  SideMenuToggleButton,
  type SideMenuToggleButtonProps,
} from "../ScenarioSideMenu/widgets";

const initialNodes = [...MOCK_INITIAL_NODES];
const initialEdges = [...MOCK_INITIAL_EDGES];

const ScenarioGraph: FC<{
  sideMenuToggleButton: SideMenuToggleButtonProps;
}> = ({ sideMenuToggleButton }) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const { getNodes, getEdges } = useReactFlow();

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  // avoid connecting self
  const isValidConnection = useCallback(
    (connection: Connection) => {
      // using getNodes and getEdges helpers here to make sure create isValidConnection function only once
      const nodes = getNodes();
      const edges = getEdges();
      const target = nodes.find((node) => node.id === connection.target);
      if (!target) return false;

      const hasCycle = (node: Node, visited = new Set()) => {
        if (visited.has(node.id)) return false;
        visited.add(node.id);

        for (const outgoer of getOutgoers(node, nodes, edges)) {
          if (outgoer.id === connection.source) return true;
          if (hasCycle(outgoer, visited)) return true;
        }
      };

      if (target.id === connection.source) return false;
      return !hasCycle(target);
    },
    [getNodes, getEdges],
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        isValidConnection={isValidConnection}
        // onlyRenderVisibleElements
        nodeTypes={SCENARIO_NODE_TYPES}
        defaultEdgeOptions={{
          animated: true,
          style: {
            strokeWidth: 2,
            // stroke: "#FF0072",
          },
          markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
            // color: "#FF0072",
          },
        }}
        connectionLineType={ConnectionLineType.Bezier}
        connectionLineStyle={{
          strokeWidth: 2,
          // stroke: "#FF0072",
        }}
        connectionRadius={CUSTOM_CONNECTION_HANDLE_WIDTH}
        proOptions={{ hideAttribution: true }}
        minZoom={0.1}
        maxZoom={2}
        snapToGrid
        snapGrid={[10, 10]}
      >
        <Background color="#ccc" variant={BackgroundVariant.Dots} />

        <Controls position="top-left" style={{ top: -15, marginLeft: 0 }} />

        <Panel position="top-left" style={{ top: 140, marginLeft: 0 }}>
          <SideMenuToggleButton {...sideMenuToggleButton} />
        </Panel>

        <MiniMap
          position="bottom-right"
          pannable
          // nodeStrokeColor={(n) => {
          //   if (n.type === "input") return "#0041d0";
          //   if (n.type === "selectorNode") return bgColor;
          //   if (n.type === "output") return "#ff0072";
          // }}
          // nodeColor={(n) => {
          //   if (n.type === "selectorNode") return bgColor;
          //   return "#fff";
          // }}
        />
      </ReactFlow>
    </div>
  );
};

const ScenarioGraphMemo = memo(ScenarioGraph);
export default ScenarioGraphMemo;
