import DataTable from '../../components/Table';
import PaymentModeTableRow from './PaymentModeTableRow';

export default function TaxTableBody() {
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
