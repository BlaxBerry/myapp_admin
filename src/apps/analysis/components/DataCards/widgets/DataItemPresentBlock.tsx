import { memo, type FC } from "react";

const DataItemPresentBlock: FC = () => {
  return <span></span>;
};

const DataItemPresentBlockMemo = memo(DataItemPresentBlock);
export default DataItemPresentBlockMemo;
