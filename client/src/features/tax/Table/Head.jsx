import DataTable from '../../../components/Table';

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
export default function PaymentModeTableHead() {
  return <DataTable.Head headCells={headCells} />;
}
