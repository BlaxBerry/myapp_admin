import { memo, type FC } from "react";

import {
  BaseControlledDialog,
  type BaseControlledDialogProps,
} from "myapp_uilib_react";

const LoadingDialog: FC<{
  isOpen: BaseControlledDialogProps["isOpen"];
  message: string;
}> = ({ isOpen, message }) => {
  return (
    <BaseControlledDialog
      isOpen={isOpen}
      handleClose={() => {}}
      dialogContent={{ children: message }}
    />
  );
};

const LoadingDialogMemo = memo(LoadingDialog);
export default LoadingDialogMemo;
