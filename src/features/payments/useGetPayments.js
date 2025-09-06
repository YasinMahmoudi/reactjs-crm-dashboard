import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import { getPaymentsService } from '../../services/payment';

function useGetPayments() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const abortControllerRef = useRef();

  const query = searchParams.get('query') || null;

  const clientId = searchParams.get('client-id') || null;

  const clientQuery = clientId ? `equal=${clientId}&filter=client` : null;

  const page = !searchParams.has('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { result, pagination, pagination: { pages } = {} } = {},
    isLoading: isLoadingPayments,
  } = useQuery({
    queryKey: ['payments', page, query, clientQuery],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getPaymentsService({
        page,
        query,
        clientQuery,
        signal: abortControllerRef.current.signal,
      });
    },
  });

  if (page < pages) {
    queryClient.prefetchQuery({
      queryKey: ['payments', page + 1, query],
      queryFn: () => getPaymentsService({ page: page + 1, query }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['payments', page - 1, query],
      queryFn: () => getPaymentsService({ page: page - 1, query }),
    });

  return {
    payments: result,
    pagination: pagination,
    isLoadingPayments,
  };
}

export { useGetPayments };
