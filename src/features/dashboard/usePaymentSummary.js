import { useSuspenseQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getPaymentSummaryService } from '../../services/dashboard/paymentSummary';

function usePaymentSummary() {
  const abortControllerRef = useRef();

  const { data: { result }  } =
    useSuspenseQuery({
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
    paymentSummary: result,
  };
}

export { usePaymentSummary };

