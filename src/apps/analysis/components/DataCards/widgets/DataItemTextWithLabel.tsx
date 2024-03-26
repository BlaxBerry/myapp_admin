import { memo, type FC, type ReactNode } from "react";

import { WidgetSubText, WidgetText } from "@/common/components";
import { commonStyles } from "../../index.styles";

const DataItemTextWithLabel: FC<{
  label: string;
  value: ReactNode;
}> = ({ label, value }) => {
  return (
    <div style={{ marginBottom: commonStyles.margin * 1.2 }}>
      <WidgetText color="GrayText" fontWeight={600}>
        {label}
      </WidgetText>

      <WidgetSubText component="div">{value}</WidgetSubText>
    </div>
  );
};

const DataItemTextWithLabelMemo = memo(DataItemTextWithLabel);
export default DataItemTextWithLabelMemo;
