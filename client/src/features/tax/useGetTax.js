import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getTaxService } from '../../services/tax';

function useGetTax() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');


  const { data: tax, isLoading: isLoadingTax } = useQuery({
    queryKey: ['tax', id],
    queryFn: () => getTaxService(id),
    enabled: id !== null,
  });

  return { tax, isLoadingTax };
}

export { useGetTax };

