import { memo, type FC, type ReactNode } from "react";

import { WidgetSubLabel, WidgetSubText } from "@/common/components";

export type CardCommonWrapperTitlesProps = {
  title: ReactNode;
  subTitle?: ReactNode;
};

const CardCommonWrapperTitles: FC<CardCommonWrapperTitlesProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div>
      <WidgetSubLabel>{title}</WidgetSubLabel>

      {subTitle && (
        <WidgetSubText color="GrayText" display="flex" alignItems="center">
          {subTitle}
        </WidgetSubText>
      )}
    </div>
  );
};

const CardCommonWrapperTitlesMemo = memo(CardCommonWrapperTitles);
export default CardCommonWrapperTitlesMemo;
