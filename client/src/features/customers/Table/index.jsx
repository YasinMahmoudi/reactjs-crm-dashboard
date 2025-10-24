import {
  deleteCustomerService,
  deleteManyCustomersService,
  getCustomersService,
} from '../../../services/customers/customer';
import Table from '../../core/Table';
import CustomerTableBody from './Body';
import CustomerTableHead from './Head';

export default function CustomersTable() {
  const options = {
    dataKey: 'customers',
    services: {
      getPaginateDataService: getCustomersService,
      deleteDataService: deleteCustomerService,
      deleteManyDataService: deleteManyCustomersService,
    },
    invalidateQueryKeys: ['customers'],
  };

  return (
    <Table
      resourceName="Customer"
      options={options}>
      <CustomerTableHead />

      <CustomerTableBody />
    </Table>
  );
}
