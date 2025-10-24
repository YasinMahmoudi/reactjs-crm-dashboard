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

export default function InvoiceTableHead() {
  return <DataTable.Head headCells={headCells} />;
}
