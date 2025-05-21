import { CircularProgress } from '@mui/material';
import DataTable from '../../components/Table';
import { useGetCustomers } from './useGetCustomers';

import CustomerActions from './CustomerActions';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'country',
    numeric: true,
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: true,
    label: 'Phone',
  },
  {
    id: 'email',
    numeric: true,
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
  const { customers, isLoadingCustomers } = useGetCustomers();

  if (isLoadingCustomers) return <CircularProgress />;

  if (customers.length === 0) return <p> No data found </p>;

  return (
    <DataTable
      data={customers}
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
