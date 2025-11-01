import { getTaxService } from '../../services/tax';
import { useGetData } from '../core/useGetData';

function useGetTax() {
  const { data: tax } = useGetData({
    dataKey: 'tax',
    dataService: getTaxService,
  });

  return { tax };
}

export { useGetTax };

