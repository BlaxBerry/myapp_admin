import { Suspense, type FC } from "react";
import { Outlet } from "react-router-dom";

import { LoadingPage } from "@/components/common/loadings";
import RootPageLayout from "./layout";

const RootPage: FC = () => {
  return (
    <RootPageLayout>
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </RootPageLayout>
  );
};

export default RootPage;
