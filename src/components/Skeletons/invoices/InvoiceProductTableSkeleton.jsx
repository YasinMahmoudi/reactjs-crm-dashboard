import { Skeleton, TableBody } from '@mui/material';
import {
  StyledTableCell,
  StyledTableRow,
} from '../../../features/dashboard/RecentInvoices';

export default function InvoiceProductTableSkeleton() {
  return (
    <TableBody>
      {Array.from({ length: 3 }, (_v, i) => (
        <InvoiceProductItem key={i} />
      ))}
    </TableBody>
  );
}

function InvoiceProductItem() {
  return (
    <StyledTableRow>
      <StyledTableCell
        component="th"
        scope="row">
        <Skeleton
          width={70}
          height={20}
        />
      </StyledTableCell>

      <StyledTableCell>
        <Skeleton
          width={130}
          height={20}
        />
      </StyledTableCell>
      <StyledTableCell>
        <Skeleton
          width={50}
          height={20}
        />
      </StyledTableCell>
      <StyledTableCell>
        <Skeleton
          width={30}
          height={20}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <Skeleton
          width={50}
          height={20}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
}
