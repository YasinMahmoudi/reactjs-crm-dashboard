import TableCell from '@mui/material/TableCell';
import dayjs from 'dayjs';
import DataTable from '../../../components/Table';
import InvoiceActions from './actions';

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
      <TableCell>{dayjs(row?.date).format('DD/MM/YYYY')}</TableCell>
      <TableCell>{dayjs(row?.expiredDate).format('DD/MM/YYYY')}</TableCell>
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
