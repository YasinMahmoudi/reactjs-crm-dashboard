import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';
import Body from './Body';
import Head from './Head';
import Pagination from './Pagination';
import SkeletonType from './SkeletonType';
import PaginationSkeleton from './SkeletonType/PaginationSkeleton';
import RowSkeleton from './SkeletonType/RowSkeleton';
import Toolbar from './Toolbar';
import Row from './Body/Row';

DataTable.propTypes = {
  children: PropTypes.array,
  data: PropTypes.array,
  pagination: PropTypes.object,
  hasPagination: PropTypes.bool,
  hasToolbar: PropTypes.bool,
  title: PropTypes.string,
  state: PropTypes.bool,
};

const TableContext = createContext();

function DataTable({
  children,
  state = true,
  data,
  pagination = {},
  hasToolbar = false,
  title = 'Provide your table name here ...',
}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  if (state)
    return (
      <TableContext.Provider
        value={{
          title,
          state,
        }}>
        <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' }}>
          {hasToolbar && <Toolbar />}

          <TableContainer sx={{ minHeight: 400, maxHeight: 500 }}>
            <Table stickyHeader>
              <TableBody>
                <SkeletonType>
                  <RowSkeleton />
                </SkeletonType>

                <SkeletonType>
                  <RowSkeleton />
                </SkeletonType>

                <SkeletonType>
                  <RowSkeleton />
                </SkeletonType>

                <SkeletonType>
                  <RowSkeleton />
                </SkeletonType>

                <SkeletonType>
                  <RowSkeleton />
                </SkeletonType>
              </TableBody>
            </Table>
          </TableContainer>

          <SkeletonType>
            <PaginationSkeleton />
          </SkeletonType>
        </Paper>
      </TableContext.Provider>
    );

  return (
    <TableContext.Provider
      value={{
        selected,
        setSelected,
        data,
        pagination,
        order,
        orderBy,
        handleRequestSort,
        handleSelectAllClick,
        title,
        state,
      }}>
      <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' }}>
        {hasToolbar && <Toolbar />}

        <TableContainer sx={{ minHeight: 400, maxHeight: 500 }}>
          <Table stickyHeader>{children}</Table>
        </TableContainer>

        {pagination?.count > 1 && <Pagination />}
      </Paper>
    </TableContext.Provider>
  );
}


DataTable.Head = Head;
DataTable.Row = Row;
DataTable.Body = Body;

function useTable() {
  const context = useContext(TableContext);

  if (context === undefined)
    throw new Error('Using context outside of provide !');

  return context;
}

export { DataTable, useTable };
