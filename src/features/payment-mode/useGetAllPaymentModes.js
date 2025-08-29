import { useSuspenseQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getAllPaymentModesService } from '../../services/payment-mode';

function useGetAllPaymentModes() {
  const abortControllerRef = useRef();

  const { data: { result } = {} } = useSuspenseQuery({
    queryKey: ['allPaymentModes'],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getAllPaymentModesService({
        signal: abortControllerRef.current.signal,
      });
    },
  });

  return {
    allPaymentModes: result,
  };
}

export { useGetAllPaymentModes };

