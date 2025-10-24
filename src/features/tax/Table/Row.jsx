import { Switch } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import DataTable from '../../components/Table';
import TaxActions from './Actions';

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

      <TableCell>
        <Switch checked={row?.isDefault} />
      </TableCell>
      <TableCell>
        <Switch checked={row?.enabled} />
      </TableCell>
    </DataTable.Row>
  );
}
