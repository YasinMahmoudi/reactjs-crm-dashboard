import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {
  alpha,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import TableToolbar from '@mui/material/Toolbar';
import { useTable } from '../TableContext/useTable';
import { useSearchParams } from 'react-router';

export default function Toolbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    selected = [],
    pagination: { count } = {},
    isDeletingMultipleRecords,
    title,
    state,
  } = useTable();

  const numSelected = selected.length;


  function handleDeletModal() {
    searchParams.set('delete-multiple', true);
    setSearchParams(searchParams);

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
            <IconButton onClick={handleDeletModal}>
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
