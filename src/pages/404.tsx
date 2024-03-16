import { type FC } from "react";

import { BaseIconButton, BaseParagraph } from "myapp_uilib_react";

import { AppFullPageContentLayout } from "@/common/layouts";
import { useAppNavigation } from "@/utils/hooks";

const NotFoundPage: FC = () => {
  const { backToHomeReplace } = useAppNavigation();

  return (
    <AppFullPageContentLayout isInCenterPosition>
      <BaseParagraph variant="h2" sx={{ fontWeight: 700 }}>
        404
      </BaseParagraph>

      <BaseParagraph
        color="GrayText"
        sx={{ textAlign: "center", mt: 2, mb: 4 }}
      >
        Oops! Page Not Found
        <br />
        The Requested URL was not found on this server
      </BaseParagraph>

      <BaseIconButton
        onClick={backToHomeReplace}
        sx={{ width: 120, borderRadius: "16px" }}
      >
        Back Home
      </BaseIconButton>
    </AppFullPageContentLayout>
  );
};

export default NotFoundPage;
