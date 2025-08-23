import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getCustomerService } from '../../services/customers/customer';

function useGetCustomer() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');


  const { data: customer} = useSuspenseQuery({
    queryKey: ['customer', id],
    queryFn: () => getCustomerService(id),
    enabled: id !== null,
  });

  return { customer };
}

export { useGetCustomer };

