import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

import PropTypes from 'prop-types';
import HeadCell from './HeadCell';
import HeadCheckAll from './HeadCheckAll';

Head.propTypes = {
  headCells: PropTypes.array,
};

export default function Head({ headCells }) {
  return (
    <TableHead>
      <TableRow>
        <HeadCheckAll />

        {headCells.map((headCell) => (
          <HeadCell
            key={headCell.id}
            headCell={headCell}
          />
        ))}
      </TableRow>
    </TableHead>
  );
}
