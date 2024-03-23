import { BaseBarChart, BasePaper } from "myapp_uilib_react";
import { memo, type FC } from "react";

import DataContainerWrapper, {
  type DataContainerWrapperProps,
} from "../../DataContainerWrapper";
import { commonStyles, doubleContainerStyle } from "../../index.styles";

const NotesChartsContainer: FC<{
  title: DataContainerWrapperProps["title"];
}> = ({ title }) => {
  return (
    <DataContainerWrapper title={title}>
      <div style={{ display: "flex" }}>
        {/* TODO: */}
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
      </div>
    </DataContainerWrapper>
  );
};

const NotesChartsContainerMemo = memo(NotesChartsContainer);
export default NotesChartsContainerMemo;
