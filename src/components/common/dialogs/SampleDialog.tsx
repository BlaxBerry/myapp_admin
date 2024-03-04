import { memo, useRef, type FC } from "react";

import {
  BaseButton,
  UncontrolledDialog,
  type UncontrolledDialogRef,
} from "myapp_uilib_react";

const SampleDialog: FC = () => {
  const ref = useRef<UncontrolledDialogRef>(null);
  const handleOpen = () => ref.current?.handleOpen();
  const handleClose = () => ref.current?.handleClose();

  return (
    <>
      <BaseButton onClick={handleOpen}>show dialog</BaseButton>
      <UncontrolledDialog
        ref={ref}
        escapeBackdropClick
        dialogProps={{ fullWidth: true }}
        dialogTitle={<div>Title</div>}
        dialogActions={
          <>
            <BaseButton variant="outlined" onClick={handleClose}>
              Cancel
            </BaseButton>
            <BaseButton onClick={handleClose}>Ok</BaseButton>
          </>
        }
      >
        xxxx
      </UncontrolledDialog>
    </>
  );
};

const SampleDialogMemo = memo(SampleDialog);
export default SampleDialogMemo;
