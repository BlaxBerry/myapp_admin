import { BaseBarChart, BasePaper } from "myapp_uilib_react";
import { memo, type FC } from "react";

import type { Analysis } from "@/apps/analysis/types";
import { commonStyles, doubleContainerStyle } from "../../index.styles";
import { DataCardsGroupCommonWrapper } from "../widgets";

export type DataCardGroupNotesProps =
  Analysis.DataCardsGroupsCommonProps<unknown>;

const DataCardGroupNotes: FC<DataCardGroupNotesProps> = () => {
  return (
    <DataCardsGroupCommonWrapper title="Notes">
      <BasePaper
        contentProps={{
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: doubleContainerStyle.width,
            height: doubleContainerStyle.height,
          },
        }}
      >
        <div>
          <BaseBarChart
            dataSource={[
              { id: "No.1", label: "No.1", data: [5, 2, 3, 4, 0, 1, 6] },
              { id: "No.2", label: "No.2", data: [0, 2, 2, 4, 3, 1, 0] },
            ]}
            chartProps={{
              width: doubleContainerStyle.width - commonStyles.padding * 4,
              height: doubleContainerStyle.height - commonStyles.padding * 4,
            }}
            xLabels={[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ]}
          />
        </div>
      </BasePaper>
    </DataCardsGroupCommonWrapper>
  );
};

const DataCardGroupNotesMemo = memo(DataCardGroupNotes);
export default DataCardGroupNotesMemo;
