import PropTypes from 'prop-types';
import React from 'react';

import Paper from '@mui/material/Paper';
import Body from './Body';
import Row from './Body/Row';
import Head from './Head';
import { TableContext } from './TableContext';
import TableLoader from './TableLoader';
import DataTable from './DataTable';

Table.propTypes = {
  children: PropTypes.array,
  data: PropTypes.array,
  pagination: PropTypes.object,
  hasPagination: PropTypes.bool,
  hasToolbar: PropTypes.bool,
  title: PropTypes.string,
  state: PropTypes.bool,
};

export default function Table({
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
        {state ? (
          <TableLoader />
        ) : (
          <DataTable
            pagination={pagination}
            hasToolbar={hasToolbar}>
            {children}
          </DataTable>
        )}
      </Paper>
    </TableContext.Provider>
  );
}

Table.Head = Head;
Table.Row = Row;
Table.Body = Body;
