import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

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
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {
  Box,
  CircularProgress,
  IconButton,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { getComparator } from '../../utils/getComparator';
import { useSearchParams } from 'react-router';
import { LIMIT_ITEMS } from '../../services/customers/customer';

DataTable.propTypes = {
  children: PropTypes.array,
  data: PropTypes.array,
  pagination: PropTypes.object,
  hasPagination: PropTypes.bool,
  hasToolbar: PropTypes.bool,
  title: PropTypes.string,
  state: PropTypes.bool,
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

TablePagination.propTypes = {
  data: PropTypes.array,
  pagination: PropTypes.object,
};

const TableContext = createContext();

export function DataTable({
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
                <RowSkeleton />
                <RowSkeleton />
                <RowSkeleton />
                <RowSkeleton />
                <RowSkeleton />
              </TableBody>
            </Table>
          </TableContainer>

          <PaginationSkeleton />
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

        {pagination?.count > 1 && <TablePagination />}
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
            padding={'normal'}
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
  const {
    data,
    order,
    orderBy,
    pagination: { page },
  } = useContext(TableContext);

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

  const isItemSelected = selected?.includes(row?._id);
  const labelId = `enhanced-table-checkbox-${row?._id}`;

  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={row?._id}
        sx={{ cursor: 'pointer' }}>
        <TableCell padding="checkbox">
          <Checkbox
            onClick={(event) => handleClick(event, row?._id)}
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
          {row?.name}
        </TableCell>
        <TableCell>{row?.country}</TableCell>
        <TableCell>{row?.address}</TableCell>
        <TableCell>{row?.phone}</TableCell>
        <TableCell>{row?.email}</TableCell>

        <TableCell>{ActionsComponent}</TableCell>
      </TableRow>
    </>
  );
}

function RowSkeleton() {
  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={3}
        sx={{ cursor: 'pointer' }}>
        <TableCell>
          <Skeleton
            animation="wave"
            variant="rounded"
            width={20}
            height={20}
          />
        </TableCell>
        <TableCell
          component="th"
          scope="row">
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>

        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
      </TableRow>
    </>
  );
}

function Toolbar() {
  const {
    selected = [],
    title,
    pagination: { count } = {},
    state,
  } = useContext(TableContext);

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
          sx={{ marginRight: 'auto' }}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ marginRight: 'auto' }}
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
        <Typography
          variant="subtitle1"
          sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Totla items :</span>
          {state ? (
            <span>
              <CircularProgress
                color="warning"
                size={15}
              />
            </span>
          ) : (
            <span>{count}</span>
          )}
        </Typography>
      )}
    </TableToolbar>
  );
}

function TablePagination() {
  const { pagination } = useContext(TableContext);

  const { page, pages: count } = pagination;

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(page);

  function handleChange(_e, value) {
    searchParams.set('page', value);
    setSearchParams(searchParams);
  }

  return (
    <Stack
      width={'100%'}
      borderTop={1}
      borderColor={'#e3e3e3'}
      sx={{
        padding: '1.25rem',
        alignItems: 'flex-end',
      }}>
      <Pagination
        count={count}
        page={currentPage}
        shape="rounded"
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
}

function PaginationSkeleton() {
  return (
    <Stack
      width={'100%'}
      borderTop={1}
      borderColor={'#e3e3e3'}
      sx={{
        padding: '1.25rem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '10px',
      }}>
      <Skeleton
        width={40}
        height={50}
      />
      <Skeleton
        width={40}
        height={50}
      />
      <Skeleton
        width={40}
        height={50}
      />
      <Skeleton
        width={40}
        height={50}
      />
    </Stack>
  );
}

DataTable.Head = Head;
DataTable.Row = Row;
DataTable.Body = Body;

export default DataTable;
