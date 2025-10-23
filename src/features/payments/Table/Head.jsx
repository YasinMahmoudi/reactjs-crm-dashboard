import DataTable from '../../../components/Table';

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

export default function PaymentTableHead() {
  return <DataTable.Head headCells={headCells} />;
}
