import { useQuery } from '@tanstack/react-query';
import { getCustomersService } from '../../services/customers/customer';
import { useSearchParams } from 'react-router';

function useGetCustomers() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  const page = searchParams.get('page') ?? 1;

  const { data, isLoading: isLoadingCustomers } = useQuery({
    queryKey: ['customers', page, query],
    queryFn: () => getCustomersService({ page, query }),
  });

  return {
    customers: data?.result,
    pagination: data?.pagination,
    isLoadingCustomers,
  };
}

export { useGetCustomers };
