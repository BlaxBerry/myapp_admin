import { memo, type FC, type PropsWithChildren } from "react";
import DataCardsGroupCommonWrapperTitle from "./GroupCommonWrapperTitle";

const DataCardsGroupCommonWrapper: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <section>
      <DataCardsGroupCommonWrapperTitle>
        {title}
      </DataCardsGroupCommonWrapperTitle>

      {children}
    </section>
  );
};

const DataCardsGroupCommonWrapperMemo = memo(DataCardsGroupCommonWrapper);
export default DataCardsGroupCommonWrapperMemo;
