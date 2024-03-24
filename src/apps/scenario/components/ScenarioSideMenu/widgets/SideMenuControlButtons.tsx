import { BaseButton } from "myapp_uilib_react";
import { memo, type CSSProperties, type FC } from "react";

import {
  ClearIcon,
  FolderDownloadIcon,
  FolderUploadIcon,
  SaveIcon,
} from "@/common/components";
import { adminCommonStyles } from "@/styles/common";

const commonIconStyle: CSSProperties = {
  width: "100%",
  borderRadius: "16px",
  marginBottom: adminCommonStyles.margin / 2,
};

const SideMenuControlButtons: FC = () => {
  return (
    <>
      <BaseButton style={commonIconStyle}>
        <FolderUploadIcon />
      </BaseButton>
      <BaseButton style={commonIconStyle}>
        <FolderDownloadIcon />
      </BaseButton>

      <BaseButton variant="contained" color="error" style={commonIconStyle}>
        <ClearIcon />
      </BaseButton>
      <BaseButton variant="contained" style={commonIconStyle}>
        <SaveIcon />
      </BaseButton>
    </>
  );
};

const SideMenuControlButtonsMemo = memo(SideMenuControlButtons);
export default SideMenuControlButtonsMemo;
