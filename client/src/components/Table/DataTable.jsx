import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import Pagination from './Pagination';
import Toolbar from './Toolbar';


function DataTable({ hasToolbar = true, pagination, children }) {
  return (
    <>
      {hasToolbar && <Toolbar />}

      <TableContainer sx={{ minHeight: 360, maxHeight: 500 }}>
        <Table stickyHeader>{children}</Table>
      </TableContainer>

      {pagination.pages > 1 && <Pagination />}
    </>
  );
}

export default DataTable;
