import { useSuspenseQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getRecentInvoicesService } from '../../services/dashboard/recentInvoices';

function useRecentInvoices() {
  const abortControllerRef = useRef();

  const { data: { result }} =
    useSuspenseQuery({
      queryKey: ['recentInvoices'],
      queryFn: () => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        return getRecentInvoicesService({
          signal: abortControllerRef.current.signal,
        });
      },
    });

  return {
    recentInvoices: result,
  };
}

export { useRecentInvoices };
