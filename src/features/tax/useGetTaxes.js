import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import { getTaxesService } from '../../services/tax';

function useGetTaxes() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const abortControllerRef = useRef();

  const query = searchParams.get('query') || null;

  const page = !searchParams.has('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { result, pagination, pagination: { pages } = {} } = {},
    isLoading: isLoadingTaxes,
  } = useQuery({
    queryKey: ['taxes', page, query],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getTaxesService({
        page,
        query,
        signal: abortControllerRef.current.signal,
      });
    },
  });

  if (page < pages) {
    queryClient.prefetchQuery({
      queryKey: ['taxes', page + 1, query],
      queryFn: () => getTaxesService({ page: page + 1, query }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['taxes', page - 1, query],
      queryFn: () => getTaxesService({ page: page - 1, query }),
    });

  return {
    taxes: result,
    pagination: pagination,
    isLoadingTaxes,
  };
}

export { useGetTaxes };

