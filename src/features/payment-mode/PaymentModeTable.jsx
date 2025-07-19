import { useSearchParams } from 'react-router';
import EmptyResource from '../../components/EmptyResource';
import DataTable from '../../components/Table';
import PaymentModeTableBody from './PaymentModeTableBody';
import { useGetPaymentModes } from './useGetPaymentModes';

const headCells = [
  {
    id: 'paymentMode',
    disablePadding: false,
    label: 'Payment Mode',
  },
  {
    id: 'description',
    disablePadding: false,
    label: 'Description',
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

export default function PaymentModesTable() {
  const { paymentModes, isLoadingPaymentModes, pagination } =
    useGetPaymentModes();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  if (paymentModes?.length === 0)
    return (
      <EmptyResource
        keyWord={query}
        resourceName="Payment Mode"
      />
    );

  return (
    <>
      <DataTable
        state={isLoadingPaymentModes}
        data={paymentModes}
        pagination={pagination}
        hasToolbar={true}
        hasChechBox={false}
        title="Payment Modes">
        <DataTable.Head headCells={headCells} />

        <PaymentModeTableBody />
      </DataTable>
    </>
  );
}
