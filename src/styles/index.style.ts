import type {
  AppContentContainerWidth,
  AppHeaderContainerWidth,
} from "myapp_uilib_react";

/** header */
const APP_HEADER_HEIGHT = 50;
const APP_HEADER_CONTAINER_WIDTH: AppHeaderContainerWidth = "xl";

/** content */
const APP_CONTENT_HEIGHT = `calc(100vh - ${APP_HEADER_HEIGHT}px)`;
const APP_CONTENT_CONTAINER_WIDTH: AppContentContainerWidth = "xl";

/** side menu */
const APP_SIDE_MENU_HEIGHT = `calc(100vh - ${APP_HEADER_HEIGHT}px - 32px)`;
const APP_SIDE_MENU_WIDTH = 200;

export const APP_STYLES = {
  APP_HEADER_HEIGHT,
  APP_HEADER_CONTAINER_WIDTH,
  APP_CONTENT_HEIGHT,
  APP_CONTENT_CONTAINER_WIDTH,
  APP_SIDE_MENU_HEIGHT,
  APP_SIDE_MENU_WIDTH,
};
