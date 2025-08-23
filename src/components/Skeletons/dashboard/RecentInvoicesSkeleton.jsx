import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Skeleton, TableBody } from '@mui/material';
import {
    StyledTableCell,
    StyledTableRow,
} from '../../../features/dashboard/RecentInvoices';

export default function RecentInvoicesSkeleton() {
  return (
    <TableBody>
      {Array.from({ length: 3 }, (_v, i) => (
        <RecentInvoiceItem key={i} />
      ))}
    </TableBody>
  );
}

function RecentInvoiceItem() {
  return (
    <StyledTableRow>
      <StyledTableCell
        component="th"
        scope="row">
        <Skeleton width={40} height={20} />
      </StyledTableCell>

      <StyledTableCell>
        {' '}
        <Skeleton width={170} height={20} />
      </StyledTableCell>
      <StyledTableCell>
        <Skeleton width={80} height={20}/>
      </StyledTableCell>
      <StyledTableCell>
        <Skeleton width={50} height={20}/>
      </StyledTableCell>

      <StyledTableCell align="center">
        <IconButton>
            <MoreVertIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
}
