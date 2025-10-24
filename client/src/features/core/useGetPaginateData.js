import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';

function useGetPaginateData({ dataKey = '', dataService }) {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const abortControllerRef = useRef();

  const query = searchParams.get('query') || null;

  const page = !searchParams.has('page') ? 1 : Number(searchParams.get('page'));


  const {
    data: { result, pagination, pagination: { pages } = {} } = {},
    isLoading: isLoadingPaginateData,
  } = useQuery({
    queryKey: [dataKey, page, query],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return dataService({
        page,
        query,
        signal: abortControllerRef.current.signal,
      });
    },
  });

  if (page < pages) {
    queryClient.prefetchQuery({
      queryKey: [dataKey, page + 1, query],
      queryFn: () => dataService({ page: page + 1, query }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: [dataKey, page - 1, query],
      queryFn: () => dataService({ page: page - 1, query }),
    });

  return {
    paginateData: result,
    pagination: pagination,
    isLoadingPaginateData,
  };
}

export { useGetPaginateData };
