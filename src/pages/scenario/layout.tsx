import { memo, type FC, type PropsWithChildren } from "react";

import { AppPageContentWrapper } from "myapp_uilib_react";

import SampleDialog from "@/components/common/dialogs/SampleDialog";

type Props = PropsWithChildren;

const ScenarioPageLayout: FC<Props> = () => {
  return (
    <AppPageContentWrapper>
      ScenarioPage
      <div>
        <SampleDialog />
      </div>
    </AppPageContentWrapper>
  );
};

const ScenarioPageLayoutMemo = memo(ScenarioPageLayout);
export default ScenarioPageLayoutMemo;
