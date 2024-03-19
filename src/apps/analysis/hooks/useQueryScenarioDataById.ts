import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

import apis from "@/api";
import { queryKeys } from "@/utils/libs/reactQueryClient";
import { useDispatch } from "@/utils/libs/reduxStore/hooks";
import { adminLayoutActions } from "@/utils/libs/reduxStore/slices/adminLayout";

const apiKey = queryKeys.APIS.scenario.getScenarioDataById;
const defaultPageKey = queryKeys.APP_PAGES.analysis;

type UseQueryScenarioDataByIdProps = {
  id: string;
  pageKey: string;
};

export default function useQueryScenarioDataById({
  id,
  pageKey = defaultPageKey,
}: UseQueryScenarioDataByIdProps) {
  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: [pageKey, apiKey, id],
    queryFn: async () => {
      const res = await apis.getScenarioDataById(id);
      return res?.data?.data;
    },
    retry: 1,
  });

  const { error } = query;

  const storeKey = useMemo(() => `${pageKey}-${apiKey}-${id}`, [pageKey, id]);

  useEffect(() => {
    if (error) {
      dispatch(
        adminLayoutActions.updateGlobalErrors({
          id: storeKey,
          errorName: error?.name,
          errorMessage: error?.message,
        }),
      );
    }
  }, [dispatch, error, storeKey]);

  return {
    ...query,

    refetch: () => {
      dispatch(
        adminLayoutActions.clearGlobalErrorById({
          id: storeKey,
        }),
      );
      query.refetch();
    },
  };
}
