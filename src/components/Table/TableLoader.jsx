import { Table, TableBody, TableContainer } from '@mui/material';
import PropTypes from 'prop-types';
import SkeletonType from './SkeletonType';
import PaginationSkeleton from './SkeletonType/PaginationSkeleton';
import RowSkeleton from './SkeletonType/RowSkeleton';
import Toolbar from './Toolbar';

TableLoader.propTypes = {
  hasToolbar: PropTypes.bool,
};

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
