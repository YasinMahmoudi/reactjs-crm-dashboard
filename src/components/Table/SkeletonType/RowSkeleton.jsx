import { Skeleton, TableCell, TableRow } from '@mui/material';

export default function RowSkeleton() {
  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={3}
        style={{ height: 80 }}
        sx={{ cursor: 'pointer' }}>
        <TableCell>
          <Skeleton
            animation="wave"
            variant="rounded"
            width={20}
            height={20}
          />
        </TableCell>
        <TableCell
          component="th"
          scope="row">
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>

        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
      </TableRow>
    </>
  );
}
