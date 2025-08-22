import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getClientSummaryService } from '../../services/dashboard/clientSummary';

function useClientSummary() {
  const abortControllerRef = useRef();

  const { data: { result } = {}, isLoading: isLoadingClientSummary } =
    useQuery({
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
    isLoadingClientSummary,
  };
}

export { useClientSummary };
