import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import { getInvoicesService } from '../../services/invoices';

function useGetInvoices() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const abortControllerRef = useRef();

  const query = searchParams.get('query') || null;

  const page = !searchParams.has('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { result, pagination, pagination: { pages } = {} } = {},
    isLoading: isLoadingInvoices,
  } = useQuery({
    queryKey: ['invoices', page, query],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getInvoicesService({
        page,
        query,
        signal: abortControllerRef.current.signal,
      });
    },
  });

  if (page < pages) {
    queryClient.prefetchQuery({
      queryKey: ['invoices', page + 1, query],
      queryFn: () => getInvoicesService({ page: page + 1, query }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['invoices', page - 1, query],
      queryFn: () => getInvoicesService({ page: page - 1, query }),
    });

  return {
    invoices: result,
    pagination: pagination,
    isLoadingInvoices,
  };
}

export { useGetInvoices };

