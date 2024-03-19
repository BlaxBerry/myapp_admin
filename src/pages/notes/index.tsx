import { BaseParagraph } from "myapp_uilib_react";
import { type FC } from "react";

import ScenarioPageLayout from "./layout";

const NotePage: FC = () => {
  return (
    <ScenarioPageLayout>
      <BaseParagraph>Notes Page</BaseParagraph>
    </ScenarioPageLayout>
  );
};

export default NotePage;
