import { AppPageContentWrapper } from "myapp_uilib_react";
import { memo, type FC } from "react";

type Props = {
  /** 加载显示文本 */
  message?: string;
};

const LoadingPage: FC<Props> = ({ message = "loading" }) => {
  return <AppPageContentWrapper center>{message}...</AppPageContentWrapper>;
};

const LoadingPageMemo = memo(LoadingPage);
export default LoadingPageMemo;
