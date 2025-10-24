import React from 'react';

import Paper from '@mui/material/Paper';
import Body from './Body';
import Row from './Body/Row';
import DataTable from './DataTable';
import Head from './Head';
import { TableContext } from './TableContext';
import TableDeleteConfirm from './TableDeleteConfirm';
import TableLoader from './TableLoader';



export default function Table({
  children,
  state = true,
  data = [],
  pagination = {},
  hasToolbar = false,
  title = 'Provide your table name here ...',
  isDeletingMultipleRecords,
  onDeleteMultipleRecords,
  hasChechBox = true,
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
        hasChechBox
      }}>
      <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' , background:theme => theme.applyStyles('dark' , theme.palette.background.default), boxShadow:theme => theme.applyStyles('dark', { boxShadow: '0px 0px 1px rgba(255,255,255,0.5)' }) }}>
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
