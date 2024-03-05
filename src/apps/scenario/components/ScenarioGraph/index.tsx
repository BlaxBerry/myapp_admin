import { memo, useCallback, useState, type FC } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  Panel,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  getOutgoers,
  useReactFlow,
  type Connection,
  type Edge,
  type Node,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
} from "reactflow";
import "reactflow/dist/style.css";

import type { Scenario } from "../../types";
import { SCENARIO_NODE_TYPES } from "../CustomNodes";
import ScenarioSideMenu from "../ScenarioSideMenu";

const initialNodes: Scenario.CustomNode[] = [
  { id: "0", type: "start", data: {}, position: { x: 100, y: 50 } },
  { id: "3", type: "message", data: {}, position: { x: 350, y: 300 } },
  {
    id: "4",
    type: "message",
    data: { logicData: { isInvalid: true, nodeType: "message" } },
    position: { x: 100, y: 400 },
  },
  { id: "5", type: "html", data: {}, position: { x: 100, y: 250 } },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const ScenarioGraph: FC = () => {
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
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      isValidConnection={isValidConnection}
      nodeTypes={SCENARIO_NODE_TYPES}
      proOptions={{ hideAttribution: true }}
      onlyRenderVisibleElements
      minZoom={0.1}
    >
      <Background color="#ccc" variant={BackgroundVariant.Dots} />

      <Controls position="top-left" />

      <MiniMap position="bottom-left" />

      <Panel position="top-right" style={{ margin: 0 }}>
        <ScenarioSideMenu />
      </Panel>
    </ReactFlow>
  );
};

const ScenarioGraphMemo = memo(ScenarioGraph);
export default ScenarioGraphMemo;
