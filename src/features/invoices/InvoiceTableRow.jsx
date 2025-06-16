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
        {row?.number}
      </TableCell>

      <TableCell>{row?.client?.name}</TableCell>
      <TableCell>{row?.date}</TableCell>
      <TableCell>{row?.expiredDate}</TableCell>
      <TableCell>
        {row?.total} <span>{row?.currency}</span>
      </TableCell>
      <TableCell>
        {row?.credit} <span>{row?.currency}</span>
      </TableCell>
      <TableCell>{row?.status}</TableCell>
      <TableCell>{row?.paymentStatus}</TableCell>
    </DataTable.Row>
  );
}
