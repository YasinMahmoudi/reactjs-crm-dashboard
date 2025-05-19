import { useQuery } from '@tanstack/react-query';
import { searchCustomerService } from '../../services/customers/customer';
import { useSearchParams } from 'react-router';

function useSearchCustomers() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');


  const { data, isLoading: isLoadingSearchCustomers } = useQuery({
    queryKey: ['searchCustomers' , query],
    queryFn: () => searchCustomerService(query),
    enabled: query !== null,
  });

  return { searchCustomers: data, isLoadingSearchCustomers };
}

export { useSearchCustomers };
