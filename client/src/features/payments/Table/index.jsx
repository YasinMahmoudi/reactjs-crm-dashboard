import { deleteManyPaymentsService, deletePaymentService, getPaymentsService } from '../../../services/payment';
import Table from '../../core/Table';
import PaymentTableBody from './Body';
import PaymentTableHead from './Head';

export default function PaymentsTable() {
  const options = {
    dataKey: 'payments',
    services: {
      getPaginateDataService: getPaymentsService,
      deleteDataService: deletePaymentService,
      deleteManyDataService: deleteManyPaymentsService,
    },
    invalidateQueryKeys: ['payments'],
  };

  return (
    <Table
      resourceName="Payment"
      options={options}>
      <PaymentTableHead />

      <PaymentTableBody />
    </Table>
  );
}
