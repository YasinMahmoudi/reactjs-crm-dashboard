import DataTable from '../../../components/Table';

const headCells = [
  {
    id: 'name',
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'description',
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'isDefault',
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
