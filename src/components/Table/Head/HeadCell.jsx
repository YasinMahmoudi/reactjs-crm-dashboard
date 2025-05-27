import { Box, TableCell, TableSortLabel } from '@mui/material';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import { useTable } from '../TableContext/useTable';

HeadCell.propTypes = {
  headCell: PropTypes.object,
};

export default function HeadCell({ headCell }) {
  const { order, orderBy, handleRequestSort, isDeletingMultipleRecords } =
    useTable();

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
