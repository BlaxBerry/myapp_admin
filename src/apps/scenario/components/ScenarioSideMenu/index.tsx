import { APP_STYLES } from "@/styles/index.style";
import { Accordion } from "myapp_uilib_react";
import { memo, type FC } from "react";
import { useNodes } from "reactflow";

const ScenarioSideMenu: FC = () => {
  // This hook will only work if the component it's used in is a child of a
  // <ReactFlowProvider />.
  const nodes = useNodes();

  return (
    <aside
      style={{
        width: 150,
        height: APP_STYLES.APP_CONTENT_HEIGHT,
        overflowY: "scroll",
      }}
    >
      <Accordion title="Group 1">
        <ul>
          <li>Node</li>
          <li>Node</li>
          <li>Node</li>
          <li>Node</li>
          <li>Node</li>
          <li>Node</li>
          <li>Node</li>
          <li>Node</li>
          <li>Node</li>
        </ul>
      </Accordion>

      <Accordion title="Group 2">
        {nodes.map((node) => (
          <div key={node.id}>
            NodeID: {node.id}
            <div>x: {node.position.x.toFixed(2)}</div>
            <div>y: {node.position.y.toFixed(2)}</div>
          </div>
        ))}
      </Accordion>
    </aside>
  );
};

const ScenarioSideMenuMemo = memo(ScenarioSideMenu);
export default ScenarioSideMenuMemo;
