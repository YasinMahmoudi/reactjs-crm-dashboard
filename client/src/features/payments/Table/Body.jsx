import DataTable from '../../../components/Table';
import PaymentTableRow from './Row';

export default function InvoiceTableBody() {
  return <DataTable.Body render={(row) => <PaymentTableRow key={row._id} row={row} />} />;
}
