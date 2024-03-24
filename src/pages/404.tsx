import { type FC } from "react";

import { BaseButton } from "myapp_uilib_react";

import { PageSubText, PageTitle } from "@/common/components";
import { AppFullPageContentLayout } from "@/common/layouts";
import { useAppNavigation } from "@/utils/hooks";

const NotFoundPage: FC = () => {
  const { backToHomeReplace } = useAppNavigation();

  return (
    <AppFullPageContentLayout isInCenterPosition>
      <PageTitle>404</PageTitle>

      <PageSubText sx={{ textAlign: "center", mt: 2, mb: 4 }}>
        Oops! Page Not Found
        <br />
        The Requested URL was not found on this server
      </PageSubText>

      <BaseButton
        onClick={backToHomeReplace}
        sx={{ width: 120, borderRadius: "16px" }}
      >
        Back Home
      </BaseButton>
    </AppFullPageContentLayout>
  );
};

export default NotFoundPage;
