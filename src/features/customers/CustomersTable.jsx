import { useGetCustomers } from './useGetCustomers';

import { useSearchParams } from 'react-router';
import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';
import CustomerTableBody from './CustomerTableBody';
import { useDeleteCustomer } from './useDeleteCustomer';
import { useDeleteManyCustomers } from './useDeleteMany';


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

  const { deleteCustomer, isDeletingCustomer } = useDeleteCustomer();

  const { deleteManyCustomers, isDeletingManyCustomers } =
    useDeleteManyCustomers();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  const isDeleteMultiple = !!searchParams.get('delete-multiple');

  if (customers?.length === 0)
    return (
      <EmptyResource
        keyWord={query}
        resourceName="Customer"
      />
    );

  return (
    <>
      <DataTable
        state={isLoadingCustomers}
        data={customers}
        pagination={pagination}
        hasToolbar={true}
        isDeletingMultipleRecords={isDeleteMultiple ? isDeletingManyCustomers : isDeletingCustomer}
        onDeleteMultipleRecords={isDeleteMultiple ? deleteManyCustomers : deleteCustomer}
        title="Customers">
        <DataTable.Head headCells={headCells} />

        <CustomerTableBody />
      </DataTable>
    </>
  );
}
