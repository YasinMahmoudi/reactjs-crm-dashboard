import { useSearchParams } from 'react-router';
import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';
import PaymentTableBody from './PaymentTableBody';
import { useGetPayments } from './useGetPayments';

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
    id: 'amount',
    disablePadding: true,
    label: 'Amount',
  },
  {
    id: 'year',
    disablePadding: false,
    label: 'Year',
  },
  {
    id: 'paymentMode',
    disablePadding: false,
    label: 'Payment Mode',
  },

  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

export default function InvoicesTable() {
  const { payments, pagination, isLoadingPayments } = useGetPayments();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');


  if (payments?.length === 0)
    return (
      <EmptyResource
        keyWord={query}
        resourceName="Payment"
      />
    );

  return (
    <>
      <DataTable
        state={isLoadingPayments}
        data={payments}
        pagination={pagination}
        hasToolbar={true}
        title="payments">
        <DataTable.Head headCells={headCells} />

        <PaymentTableBody />
      </DataTable>
    </>
  );
}
