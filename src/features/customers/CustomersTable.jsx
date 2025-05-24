import { useGetCustomers } from './useGetCustomers';

import CustomerActions from './CustomerActions';
import { DataTable } from '../../components/Table';

const headCells = [
  {
    id: 'name',
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'country',
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'address',
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'phone',
    disablePadding: true,
    label: 'Phone',
  },
  {
    id: 'email',
    disablePadding: false,
    label: 'Email',
  },

  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

export default function CustomersTable() {
  const { customers, pagination, isLoadingCustomers } = useGetCustomers();

  if (customers?.length === 0) return <p> No data found </p>;

  return (
    <DataTable
      state={isLoadingCustomers}
      data={customers}
      pagination={pagination}
      hasToolbar={true}
      title="Customers">
      <DataTable.Head headCells={headCells} />
      <DataTable.Body
        render={(row) => (
          <DataTable.Row
            key={row._id}
            row={row}
            ActionsComponent={<CustomerActions id={row._id} />}
          />
        )}
      />
    </DataTable>
  );
}
