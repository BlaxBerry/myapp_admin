import { memo, type FC } from "react";

const LoadingPage: FC<{
  /** 加载显示文本 */
  message?: string;
}> = ({ message = "loading" }) => {
  return <div>{message}...</div>;
};

const LoadingPageMemo = memo(LoadingPage);
export default LoadingPageMemo;
