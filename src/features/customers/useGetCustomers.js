import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCustomersService } from '../../services/customers/customer';
import { useSearchParams } from 'react-router';

function useGetCustomers() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || null;

  const page = parseInt(searchParams.get('page') ?? 1);

  const { data, isLoading: isLoadingCustomers } = useQuery({
    queryKey: ['customers', page, query],
    queryFn: () => getCustomersService({ page, query }),
  });

  if (page < data?.pagination.pages) {
    queryClient.prefetchQuery({
      queryKey: ['customers', page + 1, query],
      queryFn: () => getCustomersService({ page: page + 1, query }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['customers', page - 1, query],
      queryFn: () => getCustomersService({ page: page - 1, query }),
    });

  return {
    customers: data?.result,
    pagination: data?.pagination,
    isLoadingCustomers,
  };
}

export { useGetCustomers };
