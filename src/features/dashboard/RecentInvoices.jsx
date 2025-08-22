import { CircularProgress, Paper, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';
import SimpleTable from '../../components/SimpleTable';
import { useRecentInvoices } from './useRecentInvoices';

InvoiceRecentTable.propTypes = {
  invoices: PropTypes.array,
};

InvoiceRecentRow.propTypes = {
  invoice: PropTypes.object,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
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
  const { recentInvoices, isLoadingRecentInvoices } = useRecentInvoices();

  if (isLoadingRecentInvoices) return <CircularProgress />;

  return (
    <Paper sx={{ p: 5 }}>
      <Typography
        variant="h5"
        mb={4}>
        Recent Invoices
      </Typography>

      <InvoiceRecentTable invoices={recentInvoices} />
    </Paper>
  );
}

function InvoiceRecentTable({ invoices }) {
  return (
    <SimpleTable>
      <SimpleTable.Head heads={heads} />

      <SimpleTable.Body
        items={invoices}
        render={(invoice) => (
          <InvoiceRecentRow
            key={invoice._id}
            invoice={invoice}
          />
        )}
      />
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

      <StyledTableCell></StyledTableCell>
    </StyledTableRow>
  );
}
