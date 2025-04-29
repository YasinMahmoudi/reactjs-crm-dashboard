import DataTable from '../../components/Table';
import { rows } from './data';



const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'country',
    numeric: true,
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: true,
    label: 'Phone',
  },
  {
    id: 'email',
    numeric: true,
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
  return (
    <DataTable
      data={rows}
      hasPagination={true}
      hasToolbar={true}
      title = "Customers"
      >
      <DataTable.Head headCells={headCells} />
      <DataTable.Body
        render={(row) => (
          <DataTable.Row
            key={row.id}
            row={row}
          />
        )}
      />
    </DataTable>
  );
}
