import {
  BaseIconButton,
  BaseList,
  BasePaper,
  BaseParagraph,
} from "myapp_uilib_react";
import { memo, type FC } from "react";
import { FaRegSave } from "react-icons/fa";
import { FaCircleNodes } from "react-icons/fa6";
import { RiFolderDownloadLine, RiFolderUploadLine } from "react-icons/ri";

const data = [
  {
    id: "message",
    text: "Message",
    icon: <FaCircleNodes />,
  },
  {
    id: "html",
    text: "HTML",
    icon: <FaCircleNodes />,
  },
];

const SCENARIO_SIDE_MENU_WIDTH = 150;

const ScenarioSideMenu: FC<{
  isShowSideMenu: boolean;
}> = ({ isShowSideMenu }) => {
  return (
    <BasePaper
      wrapperProps={{
        style: {
          padding: 0,
          height: "100%",
          width: SCENARIO_SIDE_MENU_WIDTH,
          minWidth: SCENARIO_SIDE_MENU_WIDTH,
          marginLeft: isShowSideMenu ? 0 : -SCENARIO_SIDE_MENU_WIDTH,
          transition: "margin 0.5s ease",
        },
      }}
      contentProps={{
        style: {
          height: "100%",
          padding: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        },
        onScroll: (e) => e.preventDefault(),
      }}
    >
      <div style={{ flex: 1, width: "100%", overflowY: "scroll" }}>
        <BaseParagraph textAlign="center" sx={{ py: 2 }}>
          Node List
        </BaseParagraph>
        <BaseList data={data} />
      </div>

      <div style={{ width: "100%" }}>
        <BaseIconButton sx={{ width: "100%", borderRadius: "16px" }}>
          <RiFolderUploadLine style={{ fontSize: 23 }} />
        </BaseIconButton>
        <BaseIconButton sx={{ width: "100%", borderRadius: "16px", my: 0.5 }}>
          <RiFolderDownloadLine style={{ fontSize: 23 }} />
        </BaseIconButton>
        <BaseIconButton
          variant="contained"
          sx={{ width: "100%", borderRadius: "16px" }}
        >
          <FaRegSave style={{ fontSize: 20 }} />
        </BaseIconButton>
      </div>
    </BasePaper>
  );
};

const ScenarioSideMenuMemo = memo(ScenarioSideMenu);
export default ScenarioSideMenuMemo;
