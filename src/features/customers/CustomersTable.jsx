import { useSearchParams } from 'react-router';
import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';
import {
  deleteCustomerService,
  deleteManyCustomersService,
  getCustomersService,
} from '../../services/customers/customer';
import { useDeleteData } from '../core/useDeleteData';
import { useDeleteManyData } from '../core/useDeleteManyData';
import { useGetPaginateData } from '../core/useGetPaginateData';
import CustomerTableBody from './CustomerTableBody';

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

  const { deleteManyData, isDeletingManyData } = useDeleteManyData({
    resourceName: 'Customer',
    invalidateQueryKeys: ['customers'],
    apiService: deleteManyCustomersService,
  });

  const [searchParams] = useSearchParams();

  const isDeleteMultiple = !!searchParams.get('delete-multiple');

  if (paginateData?.length === 0)
    return <EmptyResource resourceName="Customer" />;

  return (
    <>
      <DataTable
        state={isLoadingPaginateData}
        data={paginateData}
        pagination={pagination}
        hasToolbar={true}
        isDeletingMultipleRecords={
          isDeleteMultiple ? isDeletingManyData : isDeletingData
        }
        onDeleteMultipleRecords={
          isDeleteMultiple ? deleteManyData : deleteData
        }
        title="Customers">
        <DataTable.Head headCells={headCells} />

        <CustomerTableBody />
      </DataTable>
    </>
  );
}
