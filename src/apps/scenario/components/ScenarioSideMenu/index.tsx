import { memo, type FC } from "react";

import {
  BaseAccordion,
  BaseList,
  BaseListItem,
  BasePaper,
} from "myapp_uilib_react";

import { MOCK_SIDE_MENU_NODES } from "../../__mocks__";
import { SCENARIO_SIDE_MENU_WIDTH } from "../index.styles";
import { SideMenuControlButtons } from "./widgets";

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
            {MOCK_SIDE_MENU_NODES.map((item) => (
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
        <SideMenuControlButtons />
      </div>
    </BasePaper>
  );
};

const ScenarioSideMenuMemo = memo(ScenarioSideMenu);
export default ScenarioSideMenuMemo;
