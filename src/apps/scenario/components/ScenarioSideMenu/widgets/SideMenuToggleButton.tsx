import { BaseIconButton } from "myapp_uilib_react";
import { memo, type CSSProperties, type FC } from "react";

import { LeftDoubleArrowIcon, RightDoubleArrowIcon } from "@/common/components";

export type SideMenuToggleButtonProps = {
  isShowSideMenu: boolean;
  toggleSideMenu: () => void;
};

const commonIconStyle: CSSProperties = {
  color: "inherit",
  fontWeight: 600,
  fontSize: 25,
};

const SideMenuToggleButton: FC<SideMenuToggleButtonProps> = ({
  isShowSideMenu,
  toggleSideMenu,
}) => {
  return (
    <BaseIconButton
      onClick={toggleSideMenu}
      style={{
        backgroundColor: "#fff",
        borderColor: "rgba(0, 0, 0, 0.12)",
        color: "black",
      }}
    >
      {isShowSideMenu ? (
        <LeftDoubleArrowIcon style={commonIconStyle} />
      ) : (
        <RightDoubleArrowIcon style={commonIconStyle} />
      )}
    </BaseIconButton>
  );
};

const SideMenuToggleButtonMemo = memo(SideMenuToggleButton);
export default SideMenuToggleButtonMemo;
