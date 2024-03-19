import { memo, type FC, type PropsWithChildren } from "react";

import { AppFullPageContentLayout } from "@/common/layouts";

type Props = PropsWithChildren;

const NotesLayout: FC<Props> = ({ children }) => {
  return <AppFullPageContentLayout>{children}</AppFullPageContentLayout>;
};

const NotesLayoutMemo = memo(NotesLayout);
export default NotesLayoutMemo;
