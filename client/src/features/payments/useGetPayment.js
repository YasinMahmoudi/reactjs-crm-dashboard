import { getPaymentService } from '../../services/payment';
import { useGetData } from '../core/useGetData';

function useGetPayment() {
  const { data: payment } = useGetData({
    dataKey: 'payment',
    dataService: getPaymentService,
  });

  return { payment };
}

export { useGetPayment };
