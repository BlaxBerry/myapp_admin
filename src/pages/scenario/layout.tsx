import { memo, type FC, type PropsWithChildren } from "react";
import { ReactFlowProvider } from "reactflow";

import { AppPageContentWrapper } from "myapp_uilib_react";

import { ScenarioGraph } from "@/apps/scenario/components";

type Props = PropsWithChildren;

const ScenarioPageLayout: FC<Props> = () => {
  return (
    <ReactFlowProvider>
      <AppPageContentWrapper
        sx={{
          height: "100%",
          width: "100%",
          padding: 0,
        }}
      >
        <ScenarioGraph />
      </AppPageContentWrapper>
    </ReactFlowProvider>
  );
};

const ScenarioPageLayoutMemo = memo(ScenarioPageLayout);
export default ScenarioPageLayoutMemo;
