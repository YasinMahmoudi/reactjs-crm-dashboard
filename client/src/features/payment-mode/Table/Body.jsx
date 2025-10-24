import DataTable from '../../../components/Table';
import PaymentModeTableRow from './Row';

export default function PaymentModeTableBody() {
  return (
    <DataTable.Body
      render={(row) => (
        <PaymentModeTableRow
          key={row._id}
          row={row}
        />
      )}
    />
  );
}
