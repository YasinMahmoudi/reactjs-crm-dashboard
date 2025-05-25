import React from 'react';
import PropTypes from 'prop-types';
import { LIMIT_ITEMS } from '../../../services/customers/customer';
import { getComparator } from '../../../utils/getComparator';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useTable } from '../TableContext/useTable';

Body.propTypes = {
  render: PropTypes.func,
};

export default function Body({ render }) {
  const {
    data,
    order,
    orderBy,
    pagination: { page },
  } = useTable();

  // Avoid a layout jump when reaching the last page with empty rows.

  const emptyRows = page > 1 ? Math.max(0, LIMIT_ITEMS - data.length) : 0;

  const visibleRows = React.useMemo(
    () => [...data].sort(getComparator(order, orderBy)),
    [data, order, orderBy]
  );

  return (
    <TableBody>
      {visibleRows.map(render)}

      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 73 * emptyRows,
          }}>
          <TableCell colSpan={10} />
        </TableRow>
      )}
    </TableBody>
  );
}
