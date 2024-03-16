import { memo, type FC, type PropsWithChildren } from "react";

import { AppFullPageContentLayout } from "@/common/layouts";

type Props = PropsWithChildren;

const AnalysisPageLayout: FC<Props> = ({ children }) => {
  return <AppFullPageContentLayout>{children}</AppFullPageContentLayout>;
};

const AnalysisPageLayoutMemo = memo(AnalysisPageLayout);
export default AnalysisPageLayoutMemo;
