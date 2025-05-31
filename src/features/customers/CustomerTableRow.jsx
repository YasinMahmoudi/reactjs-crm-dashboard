import TableCell from '@mui/material/TableCell';
import DataTable from '../../components/Table';
import CustomerActions from './CustomerActions';
import PropTypes from 'prop-types';

CustomerTableRow.propTypes = {
  row: PropTypes.object,
};

export default function CustomerTableRow({ row }) {
  const labelId = `enhanced-table-checkbox-${row._id}`;

  return (
    <DataTable.Row
      key={row._id}
      rowId={row._id}
      ActionsComponent={<CustomerActions id={row._id} />}>
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
    </DataTable.Row>
  );
}
