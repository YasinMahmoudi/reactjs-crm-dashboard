import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getPaymentModeService } from '../../services/payment-mode';

function useGetPaymentMode() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');


  const { data: paymentMode, isLoading: isLoadingPaymentMode } = useQuery({
    queryKey: ['paymentMode', id],
    queryFn: () => getPaymentModeService(id),
    enabled: id !== null,
  });

  return { paymentMode, isLoadingPaymentMode };
}

export { useGetPaymentMode };

