import { AppPageContentWrapper } from "myapp_uilib_react";
import { memo, type FC, type PropsWithChildren } from "react";

type Props = PropsWithChildren;

const AnalysisPageLayout: FC<Props> = ({ children }) => {
  return <AppPageContentWrapper>{children}</AppPageContentWrapper>;
};

const AnalysisPageLayoutMemo = memo(AnalysisPageLayout);
export default AnalysisPageLayoutMemo;
