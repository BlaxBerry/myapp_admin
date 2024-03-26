import { memo, type FC, type PropsWithChildren } from "react";

import { PageSubTitle } from "@/common/components";
import { commonStyles } from "../../index.styles";

const DataCardsGroupCommonWrapperTitle: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: commonStyles.padding,
        marginBottom: commonStyles.padding,
      }}
    >
      <PageSubTitle marginLeft={2} marginRight={2}>
        {children}
      </PageSubTitle>

      <hr
        style={{
          flex: 1,
          marginRight: commonStyles.padding * 2,
        }}
      />
    </div>
  );
};
const DataCardsGroupCommonWrapperTitleMemo = memo(
  DataCardsGroupCommonWrapperTitle,
);
export default DataCardsGroupCommonWrapperTitleMemo;
