import { memo, type FC, type PropsWithChildren } from "react";

const AnalysisPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const AnalysisPageLayoutMemo = memo(AnalysisPageLayout);
export default AnalysisPageLayoutMemo;
