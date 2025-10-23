import { getPaymentModesService } from '../../../services/payment-mode';
import Table from '../../core/Table';
import PaymentModeTableHead from './Head';
import PaymentModeTableBody from './Body';

export default function PaymentModeTable() {
  const options = {
    dataKey: 'paymentModes',
    services: {
      getPaginateDataService: getPaymentModesService,
    },
    invalidateQueryKeys: ['paymentModes'],
  };

  return (
    <Table
      resourceName="Payment Mode"
      options={options}
      hasCheckbox={false}
      >
      <PaymentModeTableHead />

      <PaymentModeTableBody />
    </Table>
  );
}
