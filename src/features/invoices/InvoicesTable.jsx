import { useSearchParams } from 'react-router';
import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';
import { useDeleteManyCustomers } from '../customers/useDeleteMany';
import InvoiceTableBody from './InvoiceTableBody';
import { useDeleteInvoice } from './useDeleteInvoice';
import { useGetInvoices } from './useGetInvoices';

const headCells = [
  {
    id: 'number',
    disablePadding: true,
    label: 'Number',
  },
  {
    id: 'client',
    disablePadding: false,
    label: 'Client',
  },
  {
    id: 'date',
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'expiredDate',
    disablePadding: true,
    label: 'Expired Date',
  },
  {
    id: 'total',
    disablePadding: false,
    label: 'Total',
  },
  {
    id: 'paid',
    disablePadding: false,
    label: 'Paid',
  },
  {
    id: 'status',
    disablePadding: false,
    label: 'Status',
  },

  {
    id: 'payment',
    disablePadding: false,
    label: 'Payment',
  },

  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

export default function InvoicesTable() {
  const { invoices, pagination, isLoadingInvoices } = useGetInvoices();

  const { deleteInvoice, isDeletingInvoice } = useDeleteInvoice();

  const { deleteManyCustomers, isDeletingManyCustomers } =
    useDeleteManyCustomers();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  const isDeleteMultiple = !!searchParams.get('delete-multiple');

  if (invoices?.length === 0)
    return (
      <EmptyResource
        keyWord={query}
        resourceName="Customer"
      />
    );

  return (
    <>
      <DataTable
        state={isLoadingInvoices}
        data={invoices}
        pagination={pagination}
        hasToolbar={true}
        isDeletingMultipleRecords={
          isDeleteMultiple ? isDeletingManyCustomers : isDeletingInvoice
        }
        onDeleteMultipleRecords={
          isDeleteMultiple ? deleteManyCustomers : deleteInvoice
        }
        title="Invoices">
        <DataTable.Head headCells={headCells} />

        <InvoiceTableBody />
      </DataTable>
    </>
  );
}
