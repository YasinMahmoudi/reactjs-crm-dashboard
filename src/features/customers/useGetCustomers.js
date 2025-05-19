import { useQuery } from '@tanstack/react-query';
import { getCustomersService } from '../../services/customers/customer';

function useGetCustomers() {
  const { data, isLoading: isLoadingCustomers } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomersService,
  });

  return { customers: data?.result, isLoadingCustomers };
}

export { useGetCustomers };
