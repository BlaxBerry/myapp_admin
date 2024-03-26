import { BasePaper } from "myapp_uilib_react";
import { memo, type FC } from "react";

import { WidgetSubLabel } from "@/common/components";

const CardCommonWrapperLoading: FC<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  return (
    <BasePaper
      contentProps={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height,
          width,
        },
      }}
    >
      <WidgetSubLabel>Loading...</WidgetSubLabel>
    </BasePaper>
  );
};

const CardCommonWrapperLoadingMemo = memo(CardCommonWrapperLoading);
export default CardCommonWrapperLoadingMemo;
