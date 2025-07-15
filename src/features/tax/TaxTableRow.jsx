import TableCell from '@mui/material/TableCell';
import PropTypes from 'prop-types';
import DataTable from '../../components/Table';
import TaxActions from './TaxActions';

TaxTableRow.propTypes = {
  row: PropTypes.object,
};

export default function TaxTableRow({ row }) {
  const labelId = `enhanced-table-checkbox-${row._id}`;

  return (
    <DataTable.Row
      key={row._id}
      rowId={row._id}
      ActionsComponent={<TaxActions id={row._id} />}>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        padding="normal">
        {row?.taxName}
      </TableCell>

      <TableCell>{row?.taxValue} %</TableCell>

      <TableCell>{row?.isDefault}</TableCell>
      <TableCell>{row?.enabled}</TableCell>
    </DataTable.Row>
  );
}
