import { memo, type FC, type PropsWithChildren } from "react";

import { AppContentWrapper } from "myapp_uilib_react";

import { AppHeaderBar, AppSideMenuBar } from "@/components/common/bars";
import { APP_STYLES } from "@/styles/index.style";

const RootPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {/* header */}
      <AppHeaderBar />

      <AppContentWrapper
        containerMaxWidth={APP_STYLES.APP_CONTENT_CONTAINER_WIDTH}
        height={APP_STYLES.APP_CONTENT_HEIGHT}
      >
        {/* side menu */}
        <AppSideMenuBar />

        {/* content */}
        <div style={{ flex: 1 }}>{children}</div>
      </AppContentWrapper>

      {/* footer */}
    </>
  );
};

const RootPageLayoutMemo = memo(RootPageLayout);
export default RootPageLayoutMemo;
