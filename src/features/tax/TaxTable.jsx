import { useSearchParams } from 'react-router';
import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';
import { useDeleteCustomer } from '../customers/useDeleteCustomer';
import { useDeleteManyCustomers } from '../customers/useDeleteMany';
import TaxTableBody from './TaxTableBody';
import { useGetTaxes } from './useGetTaxes';

const headCells = [
  {
    id: 'name',
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'value',
    disablePadding: false,
    label: 'Value',
  },
  {
    id: 'default',
    disablePadding: false,
    label: 'Default',
  },

  {
    id: 'enabled',
    disablePadding: false,
    label: 'Enabled',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

export default function TaxTable() {
  const { taxes, isLoadingTaxes, pagination } = useGetTaxes();

  const { deleteCustomer, isDeletingCustomer } = useDeleteCustomer();

  const { deleteManyCustomers, isDeletingManyCustomers } =
    useDeleteManyCustomers();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  const isDeleteMultiple = !!searchParams.get('delete-multiple');

  if (taxes?.length === 0)
    return (
      <EmptyResource
        keyWord={query}
        resourceName="Tax"
      />
    );

  return (
    <>
      <DataTable
        state={isLoadingTaxes}
        data={taxes}
        pagination={pagination}
        hasToolbar={true}
        isDeletingMultipleRecords={
          isDeleteMultiple ? isDeletingManyCustomers : isDeletingCustomer
        }
        onDeleteMultipleRecords={
          isDeleteMultiple ? deleteManyCustomers : deleteCustomer
        }
        title="Taxes">
        <DataTable.Head headCells={headCells} />

        <TaxTableBody />
      </DataTable>
    </>
  );
}
