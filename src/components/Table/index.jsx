import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import React, { createContext, useContext } from 'react';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableToolbar from '@mui/material/Toolbar';
import TableHead from '@mui/material/TableHead';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Box, IconButton, Typography } from '@mui/material';
import { getComparator } from '../../utils/getComparator';

DataTable.propTypes = {
  children: PropTypes.array,
  data: PropTypes.array,
  hasPagination: PropTypes.bool,
  hasToolbar: PropTypes.bool,
  title: PropTypes.string,
};

Head.propTypes = {
  headCells: PropTypes.array,
};

Row.propTypes = {
  row: PropTypes.object,
  ActionsComponent: PropTypes.object,
};

Body.propTypes = {
  render: PropTypes.func,
};

const TableContext = createContext();

export function DataTable({
  children,
  data,
  hasPagination = false,
  hasToolbar = false,
  title = 'Provide your table name here ...',
}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContext.Provider
      value={{
        selected,
        setSelected,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
        data,
        order,
        orderBy,
        handleRequestSort,
        handleSelectAllClick,
        title,
      }}>
      <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' }}>
        {hasToolbar && <Toolbar />}

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>{children}</Table>
        </TableContainer>

        {hasPagination && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </TableContext.Provider>
  );
}

function Head({ headCells }) {
  const {
    handleRequestSort,
    handleSelectAllClick,
    order,
    orderBy,
    selected,
    data,
  } = useContext(TableContext);

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const numSelected = selected.length;
  const rowCount = data.length;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={handleSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
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
        ))}
      </TableRow>
    </TableHead>
  );
}

function Body({ render }) {
  const { data, page, rowsPerPage, order, orderBy } = useContext(TableContext);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...data]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <TableBody>
      {visibleRows.map(render)}

      {emptyRows > 0 && (
        <Row
          style={{
            height: 53 * emptyRows,
          }}>
          <TableCell colSpan={6} />
        </Row>
      )}
    </TableBody>
  );
}

function Row({ row, ActionsComponent = <></> }) {
  const { selected, setSelected } = useContext(TableContext);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isItemSelected = selected.includes(row._id);
  const labelId = `enhanced-table-checkbox-${row._id}`;

  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={row._id}
        sx={{ cursor: 'pointer' }}>
        <TableCell padding="checkbox">
          <Checkbox
            onClick={(event) => handleClick(event, row._id)}
            aria-checked={isItemSelected}
            selected={isItemSelected}
            color="primary"
            checked={isItemSelected}
            inputProps={{
              'aria-labelledby': labelId,
            }}
          />
        </TableCell>
        <TableCell
          component="th"
          id={labelId}
          scope="row"
          padding="none">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.country}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">{row.email}</TableCell>

        <TableCell align="right">{ActionsComponent}</TableCell>
      </TableRow>
    </>
  );
}

function Toolbar() {
  const { selected, title } = useContext(TableContext);

  const numSelected = selected.length;

  return (
    <TableToolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div">
          {title ?? 'Table name'}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </TableToolbar>
  );
}

DataTable.Head = Head;
DataTable.Row = Row;
DataTable.Body = Body;

export default DataTable;
