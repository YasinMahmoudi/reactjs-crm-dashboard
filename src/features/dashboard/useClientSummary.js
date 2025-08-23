import { useSuspenseQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getClientSummaryService } from '../../services/dashboard/clientSummary';

function useClientSummary() {
  const abortControllerRef = useRef();

  const {
    data: { result },
  } = useSuspenseQuery({
    queryKey: ['clientSummary'],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getClientSummaryService({
        signal: abortControllerRef.current.signal,
      });
    },
  });

  return {
    clientSummary: result,
  };
}

export { useClientSummary };

