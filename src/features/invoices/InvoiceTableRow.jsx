import TableCell from '@mui/material/TableCell';
import DataTable from '../../components/Table';
import PropTypes from 'prop-types';
import InvoiceActions from './InvoiceActions';

InvoiceTableRow.propTypes = {
  row: PropTypes.object,
};

export default function InvoiceTableRow({ row }) {
  const labelId = `enhanced-table-checkbox-${row._id}`;

  return (
    <DataTable.Row
      key={row._id}
      rowId={row._id}
      ActionsComponent={<InvoiceActions id={row._id} />}>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        padding="none">
        {row?.name}
      </TableCell>

      <TableCell>{row?.country}</TableCell>
      <TableCell>{row?.address}</TableCell>
      <TableCell>{row?.phone}</TableCell>
      <TableCell>{row?.email}</TableCell>
      <TableCell>{row?.email}</TableCell>
      <TableCell>{row?.email}</TableCell>
      <TableCell>{row?.email}</TableCell>

    </DataTable.Row>
  );
}
