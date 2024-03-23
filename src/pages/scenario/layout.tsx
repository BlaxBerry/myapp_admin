import { memo, startTransition, useCallback, useState, type FC } from "react";
import { ReactFlowProvider } from "reactflow";

import { BasePaper } from "myapp_uilib_react";

import { ScenarioGraph, ScenarioSideMenu } from "@/apps/scenario/components";

const ScenarioPageLayout: FC = () => {
  const [isShowSideMenu, setIsShowSideMenu] = useState<boolean>(false);
  const toggleSideMenu = useCallback(() => {
    startTransition(() => setIsShowSideMenu((s) => !s));
  }, []);

  return (
    <BasePaper
      wrapperProps={{
        style: {
          height: "calc(100vh - 203px)",
          width: "100%",
          padding: 0,
          overflow: "hidden",
        },
      }}
      contentProps={{
        variant: "outlined",
        style: {
          height: "100%",
          width: "100%",
          padding: 0,
          overflow: "hidden",
          display: "flex",
        },
      }}
    >
      <ReactFlowProvider>
        <ScenarioSideMenu isShowSideMenu={isShowSideMenu} />
        <ScenarioGraph
          sideMenuToggleButton={{ isShowSideMenu, toggleSideMenu }}
        />
      </ReactFlowProvider>
    </BasePaper>
  );
};

const ScenarioPageLayoutMemo = memo(ScenarioPageLayout);
export default ScenarioPageLayoutMemo;
