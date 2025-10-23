import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from '@mui/utils';
import { useTable } from '../TableContext/useTable';



export default function HeadCell({ headCell }) {
  const { order, setOrder, orderBy, setOrderBy, isDeletingMultipleRecords } =
    useTable();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableCell
      key={headCell.id}
      padding={'normal'}
      sortDirection={orderBy === headCell.id ? order : false}>
      <TableSortLabel
        active={orderBy === headCell.id}
        direction={orderBy === headCell.id ? order : 'asc'}
        onClick={
          !isDeletingMultipleRecords ? createSortHandler(headCell.id) : null
        }>
        {headCell.label}
        {orderBy === headCell.id ? (
          <Box
            component="span"
            sx={visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
    </TableCell>
  );
}
