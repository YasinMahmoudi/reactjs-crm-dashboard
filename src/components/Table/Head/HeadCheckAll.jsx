import { Checkbox, TableCell } from '@mui/material';
import { useTable } from '../TableContext/useTable';

HeadCheckAll.propTypes = {};

function HeadCheckAll() {
  const { handleSelectAllClick, selected, data } = useTable();

  const numSelected = selected.length;
  const rowCount = data.length;

  return (
    <TableCell padding="checkbox">
      <Checkbox
        color="primary"
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={handleSelectAllClick}
        inputProps={{
          'aria-label': 'select all desserts',
        }}
        id="check-all-head"
      />
    </TableCell>
  );
}

export default HeadCheckAll;
