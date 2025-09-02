import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { getAllCustomersService } from '../../services/customers/customer';

function useGetAllCustomers() {
  const abortControllerRef = useRef();

  const { data: { result } = {}, isLoading: isLoadingAllCustomers } = useQuery({
    queryKey: ['allCustomers'],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return getAllCustomersService({
        signal: abortControllerRef.current.signal,
      });
    },
  });

  return {
    customers: result,
    isLoadingAllCustomers,
  };
}

export { useGetAllCustomers };

