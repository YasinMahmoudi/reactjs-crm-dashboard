import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Skeleton, TableBody } from '@mui/material';
import {
  RecentInvoicesHead,
  StyledTableCell,
  StyledTableRow,
} from '../../../features/dashboard/RecentInvoices';
import SimpleTable from '../../SimpleTable';

export default function RecentInvoicesSkeleton() {
  return (
    <SimpleTable>
      <RecentInvoicesHead />
      <TableBody>
        {Array.from({ length: 3 }, (_v, i) => (
          <RecentInvoiceItem key={i} />
        ))}
      </TableBody>
    </SimpleTable>
  );
}

function RecentInvoiceItem() {
  return (
    <StyledTableRow>
      <StyledTableCell
        component="th"
        scope="row">
        <Skeleton
          width={40}
          height={20}
        />
      </StyledTableCell>

      <StyledTableCell>
        {' '}
        <Skeleton
          width={170}
          height={20}
        />
      </StyledTableCell>
      <StyledTableCell>
        <Skeleton
          width={80}
          height={20}
        />
      </StyledTableCell>
      <StyledTableCell>
        <Skeleton
          width={50}
          height={20}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
}
