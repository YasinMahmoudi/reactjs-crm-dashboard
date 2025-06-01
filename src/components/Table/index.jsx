import PropTypes from 'prop-types';
import React from 'react';

import Paper from '@mui/material/Paper';
import Body from './Body';
import Row from './Body/Row';
import Head from './Head';
import { TableContext } from './TableContext';
import TableLoader from './TableLoader';
import DataTable from './DataTable';
import TableDeleteConfirm from './TableDeleteConfirm';

Table.propTypes = {
  children: PropTypes.array,
  data: PropTypes.array,
  pagination: PropTypes.object,
  hasPagination: PropTypes.bool,
  hasToolbar: PropTypes.bool,
  title: PropTypes.string,
  state: PropTypes.bool,
  isDeletingMultipleRecords: PropTypes.bool,
  onDeleteMultipleRecords: PropTypes.func,
};

export default function Table({
  children,
  state = true,
  data = [],
  pagination = {},
  hasToolbar = false,
  title = 'Provide your table name here ...',
  isDeletingMultipleRecords,
  onDeleteMultipleRecords,
}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);

  return (
    <TableContext.Provider
      value={{
        selected,
        setSelected,
        data,
        pagination,
        order,
        orderBy,
        setOrder,
        setOrderBy,
        title,
        state,
        isDeletingMultipleRecords,
        onDeleteMultipleRecords,
      }}>
      <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' }}>
        {state ? (
          <TableLoader />
        ) : (
          <>
            <DataTable
              pagination={pagination}
              hasToolbar={hasToolbar}>
              {children}
            </DataTable>
            <TableDeleteConfirm />
          </>
        )}
      </Paper>
    </TableContext.Provider>
  );
}

Table.Head = Head;
Table.Row = Row;
Table.Body = Body;
