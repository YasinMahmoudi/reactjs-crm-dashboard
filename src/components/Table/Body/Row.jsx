import PropTypes from 'prop-types';
import { useTable } from '..';
import { Checkbox, TableCell, TableRow } from '@mui/material';

Row.propTypes = {
  row: PropTypes.object,
  ActionsComponent: PropTypes.object,
};
function Row({ row, ActionsComponent = <></> }) {
  const { selected, setSelected } = useTable();

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
            id={`${row._id}`}
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

export default Row;
