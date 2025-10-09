import { deleteInvoiceService, deleteManyInvoicesService, getInvoicesService } from '../../../services/invoices';
import Table from '../../core/Table';
import CustomerTableBody from './Body';
import CustomerTableHead from './Head';

export default function InvoicesTable() {
  const options = {
    dataKey: 'invoices',
    services: {
      getPaginateDataService: getInvoicesService,
      deleteDataService: deleteInvoiceService,
      deleteManyDataService: deleteManyInvoicesService,
    },
    invalidateQueryKeys: ['invoices'],
  };

  return (
    <Table
      resourceName="Invoices"
      options={options}>
      <CustomerTableHead />

      <CustomerTableBody />
    </Table>
  );
}
