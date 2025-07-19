import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import { getPaymentModesService } from '../../services/payment-mode';

function useGetPaymentModes() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const abortControllerRef = useRef();

  const query = searchParams.get('query') || null;

  const page = !searchParams.has('page') ? 1 : Number(searchParams.get('page'));

  const {
    data: { result, pagination, pagination: { pages } = {} } = {},
    isLoading: isLoadingPaymentModes,
  } = useQuery({
    queryKey: ['paymentModes', page, query],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getPaymentModesService({
        page,
        query,
        signal: abortControllerRef.current.signal,
      });
    },
  });

  if (page < pages) {
    queryClient.prefetchQuery({
      queryKey: ['paymentModes', page + 1, query],
      queryFn: () => getPaymentModesService({ page: page + 1, query }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['paymentModes', page - 1, query],
      queryFn: () => getPaymentModesService({ page: page - 1, query }),
    });

  return {
    paymentModes: result,
    pagination: pagination,
    isLoadingPaymentModes,
  };
}

export { useGetPaymentModes };

