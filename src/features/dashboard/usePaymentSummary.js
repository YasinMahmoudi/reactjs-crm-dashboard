import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getPaymentSummaryService } from '../../services/dashboard/paymentSummary';

function usePaymentSummary() {
  const abortControllerRef = useRef();

  const { data: { result } = {}, isLoading: isLoadingPaymentSummary } =
    useQuery({
      queryKey: ['paymentSummary'],
      queryFn: () => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        return getPaymentSummaryService({
          signal: abortControllerRef.current.signal,
        });
      },
    });

  return {
    invoices: result,
    isLoadingPaymentSummary,
  };
}

export { usePaymentSummary };
