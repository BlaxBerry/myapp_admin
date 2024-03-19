import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

import apis from "@/api";
import { getFormattedGithubRepoData } from "@/utils/helpers/formatSth";
import { queryKeys } from "@/utils/libs/reactQueryClient";
import { useDispatch } from "@/utils/libs/reduxStore/hooks";
import { adminLayoutActions } from "@/utils/libs/reduxStore/slices/adminLayout";

const apiKey = queryKeys.APIS.others.getGithubRepos;
const defaultPageKey = queryKeys.APP_PAGES.analysis;

type UseQueryGithubReposProps = {
  pageKey: string;
};

export default function useQueryGithubRepos({
  pageKey = defaultPageKey,
}: UseQueryGithubReposProps) {
  const dispatch = useDispatch();

  const query = useQuery({
    queryKey: [pageKey, apiKey],
    queryFn: async () => {
      const res = await apis.getGithubRepos();
      return getFormattedGithubRepoData(res?.data?.data);
    },
    retry: 1,
  });

  const { error } = query;

  const storeKey = useMemo(() => `${pageKey}-${apiKey}`, [pageKey]);

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
