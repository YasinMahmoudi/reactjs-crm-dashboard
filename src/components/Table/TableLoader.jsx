import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import SkeletonType from './SkeletonType';
import PaginationSkeleton from './SkeletonType/PaginationSkeleton';
import RowSkeleton from './SkeletonType/RowSkeleton';
import Toolbar from './Toolbar';



function TableLoader({ hasToolbar = true }) {
  return (
    <>
      {hasToolbar && <Toolbar />}

      <TableContainer sx={{ minHeight: 400, maxHeight: 500 }}>
        <Table stickyHeader>
          <TableBody>
            {Array.from({ length: 5 }, (_v, i) => (
              <SkeletonType key={i}>
                <RowSkeleton />
              </SkeletonType>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SkeletonType>
        <PaginationSkeleton />
      </SkeletonType>
    </>
  );
}

export default TableLoader;
