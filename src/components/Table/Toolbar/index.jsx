import { useTable } from '..';
import TableToolbar from '@mui/material/Toolbar';
import { alpha, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutline';


export default function Toolbar() {
  const {
    selected = [],
    title,
    pagination: { count } = {},
    state,
  } = useTable();

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


