import DataTable from '../../../components/Table';
import CustomerTableRow from './Row';

export default function CustomerTableBody() {
  return <DataTable.Body render={(row) => <CustomerTableRow key={row._id} row={row} />} />;
}
