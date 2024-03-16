import { BaseIconButton } from "myapp_uilib_react";
import { memo, type FC } from "react";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

export type SideMenuToggleButtonProps = {
  isShowSideMenu: boolean;
  toggleSideMenu: () => void;
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
        borderRadius: 14,
      }}
    >
      {isShowSideMenu ? (
        <RiArrowLeftDoubleLine style={{ fontSize: 20 }} />
      ) : (
        <RiArrowRightDoubleLine style={{ fontSize: 20 }} />
      )}
    </BaseIconButton>
  );
};

const SideMenuToggleButtonMemo = memo(SideMenuToggleButton);
export default SideMenuToggleButtonMemo;
