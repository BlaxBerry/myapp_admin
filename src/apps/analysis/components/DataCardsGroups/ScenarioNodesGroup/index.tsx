import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

import type { Analysis } from "@/apps/analysis/types";
import { DataCardScenarioNodeTypes } from "../../DataCards";
import { DataCardsGroupCommonWrapper } from "../widgets";

export type DataCardGroupScenarioNodesProps =
  Analysis.DataCardsGroupsCommonProps<unknown>;

const DataCardGroupScenarioNodes: FC<DataCardGroupScenarioNodesProps> = () => {
  const { t } = useTranslation();

  return (
    <DataCardsGroupCommonWrapper
      title={t("apps.Analysis.groups.ScenarioNodes")}
    >
      <DataCardScenarioNodeTypes
        title={t("apps.Analysis.cards.ScenarioNodeTypes")}
      />
    </DataCardsGroupCommonWrapper>
  );
};

const DataCardGroupScenarioNodesMemo = memo(DataCardGroupScenarioNodes);
export default DataCardGroupScenarioNodesMemo;
