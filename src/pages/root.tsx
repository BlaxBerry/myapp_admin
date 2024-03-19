import { Suspense, type FC } from "react";
import { Outlet } from "react-router-dom";

import { LoadingDialog } from "@/common/components";
import { AppMainRootLayout } from "@/common/layouts";

const RootPage: FC = () => {
  return (
    <AppMainRootLayout>
      <Suspense fallback={<LoadingDialog isOpen message="Loading..." />}>
        <Outlet />
      </Suspense>
    </AppMainRootLayout>
  );
};

export default RootPage;
