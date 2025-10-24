import DataTable from '../../../components/Table';
import InvoiceTableRow from './Row';

export default function InvoiceTableBody() {
  return <DataTable.Body render={(row) => <InvoiceTableRow key={row._id} row={row} />} />;
}
