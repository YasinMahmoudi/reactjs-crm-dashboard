import { getPaymentModeService } from '../../services/payment-mode';
import { useGetData } from '../core/useGetData';

function useGetPaymentMode() {
  const { data: paymentMode } = useGetData({
    dataKey: 'paymentMode',
    dataService: getPaymentModeService,
  });

  return { paymentMode };
}

export { useGetPaymentMode };

