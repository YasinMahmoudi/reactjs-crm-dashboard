import {
  Paper,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from '@mui/material';
import { Suspense } from 'react';
import SimpleTable from '../../components/SimpleTable';
import RecentInvoicesSkeleton from '../../components/Skeletons/dashboard/RecentInvoicesSkeleton';
import InvoiceActions from '../invoices/Table/actions';
import { useRecentInvoices } from './useRecentInvoices';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const heads = [
  {
    label: 'Number',
  },
  {
    label: 'Client',
  },
  {
    label: 'Total',
  },
  {
    label: 'Status',
  },
  {
    label: '',
  },
];

export default function RecentInvoices() {
  return (
    <Paper sx={{ p: 5 }}>
      <Typography
        variant="h5"
        mb={4}>
        Recent Invoices
      </Typography>

      <InvoiceRecentTable />
    </Paper>
  );
}

function InvoiceRecentTable() {
  return (
    <SimpleTable>
      <SimpleTable.Head heads={heads} />

      <Suspense fallback={<RecentInvoicesSkeleton />}>
        <RecentInvoicesList />
      </Suspense>
    </SimpleTable>
  );
}

function InvoiceRecentRow({ invoice }) {
  return (
    <StyledTableRow key={invoice._id}>
      <StyledTableCell
        component="th"
        scope="row">
        {invoice.number}
      </StyledTableCell>

      <StyledTableCell>{invoice.client.name}</StyledTableCell>
      <StyledTableCell>
        ${' '}
        {new Intl.NumberFormat('en-US', {
          minimumSignificantDigits: 3,
        }).format(invoice.total)}
      </StyledTableCell>
      <StyledTableCell>{invoice.status}</StyledTableCell>

      <StyledTableCell align="center">
        <InvoiceActions id={invoice._id} />
      </StyledTableCell>
    </StyledTableRow>
  );
}

function RecentInvoicesList() {
  const { recentInvoices } = useRecentInvoices();

  return (
    <SimpleTable.Body
      items={recentInvoices}
      render={(invoice) => (
        <InvoiceRecentRow
          key={invoice._id}
          invoice={invoice}
        />
      )}
    />
  );
}
