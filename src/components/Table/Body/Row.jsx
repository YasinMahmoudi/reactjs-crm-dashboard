import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

import { useTable } from '../TableContext/useTable';

Row.propTypes = {
  rowId: PropTypes.string,
  ActionsComponent: PropTypes.object,
  hasChechBox: PropTypes.bool,
  children: PropTypes.object,
};
function Row({ rowId, ActionsComponent = <></>, children }) {
  const { selected, setSelected, isDeletingMultipleRecords, hasChechBox } =
    useTable();

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

  const isItemSelected = selected?.includes(rowId);
  const labelId = `enhanced-table-checkbox-${rowId}`;

  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={rowId}
        sx={{ cursor: 'pointer' }}>
        {hasChechBox && (
          <TableCell padding="checkbox">
            <Checkbox
              onClick={(event) => handleClick(event, rowId)}
              aria-checked={isItemSelected}
              selected={isItemSelected}
              color="primary"
              checked={isItemSelected}
              inputProps={{
                'aria-labelledby': labelId,
              }}
              id={`${rowId}`}
              disabled={isDeletingMultipleRecords}
            />
          </TableCell>
        )}

        {children}

        <TableCell>{ActionsComponent}</TableCell>
      </TableRow>
    </>
  );
}

export default Row;
