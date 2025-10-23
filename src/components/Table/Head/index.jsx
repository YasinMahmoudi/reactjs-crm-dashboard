import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useTable } from '../TableContext/useTable';
import HeadCell from './HeadCell';
import HeadCheckAll from './HeadCheckAll';

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
