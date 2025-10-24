import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { searchCustomersService } from '../../services/customers/customer';

function useSearchCustomers({ searchQuery = '' }) {
  const abortControllerRef = useRef();

  const query = searchQuery;

  const {
    data: { result: searchCustomers } = {},
    isLoading: isSearchingCustomers,
  } = useQuery({
    queryKey: ['searchCustomers', query],
    queryFn: () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      return searchCustomersService({
        query,
        signal: abortControllerRef.current.signal,
      });
    },
  });

  return {
    searchCustomers,
    isSearchingCustomers,
  };
}

export { useSearchCustomers };
