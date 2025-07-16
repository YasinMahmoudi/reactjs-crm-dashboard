import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

import PropTypes from 'prop-types';
import HeadCell from './HeadCell';
import HeadCheckAll from './HeadCheckAll';
import { useTable } from '../TableContext/useTable';

Head.propTypes = {
  headCells: PropTypes.array,
};

export default function Head({ headCells }) {
  const { hasChechBox } = useTable();

  return (
    <TableHead>
      <TableRow>
        {hasChechBox && <HeadCheckAll />}

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
