import TableCell from '@mui/material/TableCell';
import dayjs from 'dayjs';
import DataTable from '../../../components/Table';
import PaymentActions from './Actions';

export default function PaymentTableRow({ row }) {
  const labelId = `enhanced-table-checkbox-${row._id}`;

  return (
    <DataTable.Row
      key={row._id}
      rowId={row._id}
      ActionsComponent={<PaymentActions id={row._id} />}>
      <TableCell
        component="th"
        id={labelId}
        scope="row">
        {row?.number}
      </TableCell>

      <TableCell>{row?.client?.name}</TableCell>
      <TableCell>{dayjs(row?.date).format('DD/MM/YYYY')}</TableCell>
      <TableCell>{row?.amount}</TableCell>
      <TableCell>
        {row?.total} <span>{row?.invoice?.year}</span>
      </TableCell>
      <TableCell>
        {row?.credit} <span>{row?.paymentMode?.name}</span>
      </TableCell>
    </DataTable.Row>
  );
}
