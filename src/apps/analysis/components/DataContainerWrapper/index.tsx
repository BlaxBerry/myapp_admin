import { PageSubTitle } from "@/common/components";
import { memo, type FC, type PropsWithChildren } from "react";
import { commonStyles } from "../index.styles";

export type DataContainerWrapperProps = PropsWithChildren<{
  title: string;
}>;

const DataContainerWrapper: FC<DataContainerWrapperProps> = ({
  title,
  children,
}) => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: commonStyles.padding,
          marginBottom: commonStyles.padding,
        }}
      >
        <PageSubTitle marginLeft={2} marginRight={2}>
          {title}
        </PageSubTitle>

        <hr style={{ flex: 1, marginRight: commonStyles.padding * 2 }} />
      </div>

      {children}
    </section>
  );
};

const DataContainerWrapperMemo = memo(DataContainerWrapper);
export default DataContainerWrapperMemo;
