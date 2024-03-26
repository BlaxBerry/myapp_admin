import { BaseButton, BasePaper } from "myapp_uilib_react";
import { memo, type FC } from "react";

import { WidgetSubLabel, WidgetSubText } from "@/common/components";

const CardCommonWrapperError: FC<{
  width: number;
  height: number;
  error: Error;
  refetch: () => void;
}> = ({ width, height, error, refetch }) => {
  return (
    <BasePaper
      contentProps={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height,
          width,
        },
      }}
    >
      <WidgetSubLabel>(x_x)</WidgetSubLabel>

      <WidgetSubText color="GrayText">{error.message}</WidgetSubText>

      <BaseButton onClick={refetch}>Retry</BaseButton>
    </BasePaper>
  );
};

const CardCommonWrapperErrorMemo = memo(CardCommonWrapperError);
export default CardCommonWrapperErrorMemo;
