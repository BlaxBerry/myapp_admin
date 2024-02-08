import { memo, useRef, type FC, type PropsWithChildren } from "react";

import {
  BaseButton,
  UncontrolledDialog,
  UploadButton,
  type UncontrolledDialogRef,
} from "myapp_uilib_react";

import { scenario } from "myapp_protobuf/ts/scenario";

const mockDataInstance = new scenario.MessageNode({
  id: 123,
  title: "xxx",
  text: "xxxx",
});
const mockData = mockDataInstance.toObject();

const printMockData = () => {
  /* eslint-disable-next-line no-console */
  console.log(mockData, {
    id: mockDataInstance.id,
    title: mockDataInstance.title,
  });
};

const ScenarioPageLayout: FC<PropsWithChildren> = () => {
  const ref = useRef<UncontrolledDialogRef>(null);
  const handleOpen = () => ref.current?.handleOpen();
  const handleClose = () => ref.current?.handleClose();

  return (
    <>
      ScenarioPage
      <br />
      <UploadButton color="secondary" size="small">
        xxx
      </UploadButton>
      <br />
      <BaseButton onClick={handleOpen}>show dialog</BaseButton>
      <UncontrolledDialog
        ref={ref}
        dialogProps={{ fullWidth: true }}
        dialogTitle={<div>Title</div>}
        dialogActions={
          <>
            <BaseButton color="error" variant="outlined" onClick={handleClose}>
              Cancel
            </BaseButton>
            <BaseButton
              onClick={() => {
                printMockData();
                handleClose();
              }}
            >
              Ok
            </BaseButton>
          </>
        }
      >
        xxxx
      </UncontrolledDialog>
    </>
  );
};

const ScenarioPageLayoutMemo = memo(ScenarioPageLayout);
export default ScenarioPageLayoutMemo;
