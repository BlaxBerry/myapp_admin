import { Suspense, type FC } from "react";
import { Outlet } from "react-router-dom";

import { LoadingPage } from "@/components/common/loadings";

const RootPage: FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Outlet />
    </Suspense>
  );
};

export default RootPage;
