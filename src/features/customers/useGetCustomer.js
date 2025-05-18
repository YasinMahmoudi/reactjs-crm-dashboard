import { useQuery } from '@tanstack/react-query';
import { getCustomerService } from '../../services/customers/customer';
import { useSearchParams } from 'react-router';

function useGetCustomer() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');


  const { data: customer, isPending: isLoadingCustomer } = useQuery({
    queryKey: ['customer', id],
    queryFn: () => getCustomerService(id),
    enabled: id !== null,
  });

  return { customer, isLoadingCustomer };
}

export { useGetCustomer };
