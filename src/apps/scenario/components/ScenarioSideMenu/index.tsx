import { memo, type FC } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import { RiFolderDownloadLine, RiFolderUploadLine } from "react-icons/ri";

import {
  BaseAccordion,
  BaseButton,
  BaseList,
  BaseListItem,
  BasePaper,
} from "myapp_uilib_react";

const data = [
  {
    id: "message",
    text: "Message",
  },
  {
    id: "html",
    text: "HTML",
  },
];

const SCENARIO_SIDE_MENU_WIDTH = 200;

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
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        },
        onScroll: (e) => e.preventDefault(),
      }}
    >
      <div style={{ flex: 1, width: "100%", overflowY: "scroll" }}>
        <BaseAccordion
          defaultExpanded
          title="Nodes Group 1"
          accordionDetailsProps={{ sx: { p: 1 } }}
        >
          <BaseList>
            {data.map((item) => (
              <BaseListItem
                key={item.id}
                primaryContent={item.text}
                listItemButtonProps={{
                  disableRipple: true, // https://github.com/react-dnd/react-dnd/issues/832
                  disableTouchRipple: true,
                  style: { cursor: "grab" },
                  draggable: true,
                  onDragStart: (e) => {
                    e.stopPropagation();
                    // console.log("onDragStart");
                  },
                  onDragEnd: (e) => {
                    e.stopPropagation();
                    // console.log("onDragEnd");
                  },
                }}
              />
            ))}
          </BaseList>
        </BaseAccordion>
      </div>

      <div style={{ width: "100%", padding: 8 }}>
        <BaseButton sx={{ width: "100%", borderRadius: "16px", mb: 0.5 }}>
          <RiFolderUploadLine style={{ fontSize: 23 }} />
        </BaseButton>
        <BaseButton sx={{ width: "100%", borderRadius: "16px", mb: 0.5 }}>
          <RiFolderDownloadLine style={{ fontSize: 23 }} />
        </BaseButton>

        <BaseButton
          variant="contained"
          color="error"
          sx={{ width: "100%", borderRadius: "16px", mb: 0.5 }}
        >
          <AiOutlineClear style={{ fontSize: 25 }} />
        </BaseButton>
        <BaseButton
          variant="contained"
          sx={{ width: "100%", borderRadius: "16px" }}
        >
          <FaRegSave style={{ fontSize: 20 }} />
        </BaseButton>
      </div>
    </BasePaper>
  );
};

const ScenarioSideMenuMemo = memo(ScenarioSideMenu);
export default ScenarioSideMenuMemo;
