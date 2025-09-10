import { useSearchParams } from 'react-router';
import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';
import {
  deleteCustomerService,
  getCustomersService,
} from '../../services/customers/customer';
import { useDeleteData } from '../core/useDeleteData';
import { useGetPaginateData } from '../core/useGetPaginateData';
import CustomerTableBody from './CustomerTableBody';
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
  const { paginateData, pagination, isLoadingPaginateData } =
    useGetPaginateData({
      dataKey: 'customers',
      dataService: getCustomersService,
    });

  const { deleteData, isDeletingData } = useDeleteData({
    resourceName: 'Customer',
    invalidateQueryKeys: ['customers'],
    deleteService: deleteCustomerService,
  });

  const { deleteManyCustomers, isDeletingManyCustomers } =
    useDeleteManyCustomers();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  const isDeleteMultiple = !!searchParams.get('delete-multiple');

  if (paginateData?.length === 0)
    return (
      <EmptyResource
        keyWord={query}
        resourceName="Customer"
      />
    );

  return (
    <>
      <DataTable
        state={isLoadingPaginateData}
        data={paginateData}
        pagination={pagination}
        hasToolbar={true}
        isDeletingMultipleRecords={
          isDeleteMultiple ? isDeletingManyCustomers : isDeletingData
        }
        onDeleteMultipleRecords={
          isDeleteMultiple ? deleteManyCustomers : deleteData
        }
        title="Customers">
        <DataTable.Head headCells={headCells} />

        <CustomerTableBody />
      </DataTable>
    </>
  );
}
