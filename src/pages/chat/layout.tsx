import { memo, type FC, type PropsWithChildren } from "react";

import { AppFullPageContentLayout } from "@/common/layouts";

type Props = PropsWithChildren;

const ChatPageLayout: FC<Props> = ({ children }) => {
  return <AppFullPageContentLayout>{children}</AppFullPageContentLayout>;
};

const ChatPageLayoutMemo = memo(ChatPageLayout);
export default ChatPageLayoutMemo;
