import { BaseParagraph } from "myapp_uilib_react";
import { type FC } from "react";

import ScenarioPageLayout from "./layout";

const ScenarioPage: FC = () => {
  return (
    <ScenarioPageLayout>
      <BaseParagraph>Chat Page</BaseParagraph>
    </ScenarioPageLayout>
  );
};

export default ScenarioPage;
