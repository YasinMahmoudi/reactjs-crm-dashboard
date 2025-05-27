import { Table, TableContainer } from '@mui/material';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import Pagination from './Pagination';

DataTable.propTypes = {
  children: PropTypes.array,
  pagination: PropTypes.object,
  hasToolbar: PropTypes.bool,
};

function DataTable({ hasToolbar = true, pagination, children }) {
  return (
    <>
      {hasToolbar && <Toolbar />}

      <TableContainer sx={{ minHeight: 400, maxHeight: 500 }}>
        <Table stickyHeader>{children}</Table>
      </TableContainer>

      {pagination.pages > 1 && <Pagination />}
    </>
  );
}

export default DataTable;
