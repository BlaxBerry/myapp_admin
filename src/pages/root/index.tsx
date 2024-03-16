import { Suspense, type FC } from "react";
import { Outlet } from "react-router-dom";

import { LoadingDialog } from "@/common/components";
import RootPageLayout from "./layout";

const RootPage: FC = () => {
  return (
    <RootPageLayout>
      <Suspense fallback={<LoadingDialog isOpen message="Loading..." />}>
        <Outlet />
      </Suspense>
    </RootPageLayout>
  );
};

export default RootPage;
