import { Checkbox, TableCell } from '@mui/material';
import { useTable } from '../TableContext/useTable';

HeadCheckAll.propTypes = {};

function HeadCheckAll() {
  const { selected, setSelected, data, isDeletingMultipleRecords } = useTable();

  const numSelected = selected.length;
  const rowCount = data.length;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

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
        disabled={isDeletingMultipleRecords}
      />
    </TableCell>
  );
}

export default HeadCheckAll;
