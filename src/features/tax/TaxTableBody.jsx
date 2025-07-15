import DataTable from '../../components/Table';
import TaxTableRow from './TaxTableRow';

export default function TaxTableBody() {
  return (
    <DataTable.Body
      render={(row) => (
        <TaxTableRow
          key={row._id}
          row={row}
        />
      )}
    />
  );
}
