import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {
  alpha,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import TableToolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import { useTable } from '../TableContext/useTable';

Toolbar.propTypes = {
  title: PropTypes.string,
  state: PropTypes.bool,
};

export default function Toolbar({ title, state }) {
  const {
    selected = [],
    pagination: { count } = {},
    onDeleteMultipleRecords,
    isDeletingMultipleRecords,
  } = useTable();

  const numSelected = selected.length;

  function handleDeleteMultipleRecords() {
    onDeleteMultipleRecords(selected);
  }

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
        isDeletingMultipleRecords ? (
          <CircularProgress
            size={20}
            color="info"
          />
        ) : (
          <Tooltip title="Delete">
            <IconButton onClick={handleDeleteMultipleRecords}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )
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
