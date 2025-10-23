import TableCell from '@mui/material/TableCell';
import DataTable from '../../../components/Table';
import PropTypes from 'prop-types';
import PaymentModeActions from './Actions';
import { Switch } from '@mui/material';

PaymentModeTableRow.propTypes = {
  row: PropTypes.object,
};

export default function PaymentModeTableRow({ row }) {
  const labelId = `enhanced-table-checkbox-${row._id}`;

  return (
    <DataTable.Row
      key={row._id}
      rowId={row._id}
      ActionsComponent={<PaymentModeActions id={row._id} />}>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        padding="normal">
        {row?.name}
      </TableCell>

      <TableCell>{row?.description} </TableCell>

      <TableCell>
        <Switch checked={row?.isDefault} />
      </TableCell>
      <TableCell>
        <Switch checked={row?.enabled} />
      </TableCell>
    </DataTable.Row>
  );
}
