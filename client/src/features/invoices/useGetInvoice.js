
import { getInvoiceService } from '../../services/invoices';
import { useGetData } from '../core/useGetData';

function useGetInvoice() {
  const { data: invoice } = useGetData({
    dataKey: 'invoice',
    dataService: getInvoiceService,
  });

  return { invoice };
}

export { useGetInvoice };

