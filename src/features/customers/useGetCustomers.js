import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import { getCustomersService } from '../../services/customers/customer';

function useGetCustomers() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const abortControllerRef = useRef();

  const query = searchParams.get('query') || null;

  const page = !searchParams.has('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { result, pagination, pagination: { pages } = {} } = {},
    isLoading: isLoadingCustomers,
  } = useQuery({
    queryKey: ['customers', page, query],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getCustomersService({
        page,
        query,
        signal: abortControllerRef.current.signal,
      });
    },
  });

  if (page < pages) {
    queryClient.prefetchQuery({
      queryKey: ['customers', page + 1, query],
      queryFn: () => getCustomersService({ page: page + 1, query }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['customers', page - 1, query],
      queryFn: () => getCustomersService({ page: page - 1, query }),
    });

  return {
    customers: result,
    pagination: pagination,
    isLoadingCustomers,
  };
}

export { useGetCustomers };
