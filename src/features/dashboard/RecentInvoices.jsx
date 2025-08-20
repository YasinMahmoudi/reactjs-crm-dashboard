import { Paper, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';
import SimpleTable from '../../components/SimpleTable';

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
    align: '',
  },
  {
    label: 'Client',
    align: '',
  },
  {
    label: 'Total',
    align: 'center',
  },
  {
    label: 'Status',
    align: 'center',
  },
  {
    label: '',
    align: 'center',
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

      <InvoiceRecentTable invoices={[]}/>
    </Paper>
  );
}

function InvoiceRecentTable({ invoices }) {
  return (
    <SimpleTable>
      <SimpleTable.Head heads={heads} />

      <SimpleTable.Body
        items={invoices}
        render={(product) => (
          <InvoiceRecentRow
            key={product._id}
            product={product}
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

      <StyledTableCell>
        {invoice.client.name}
      </StyledTableCell>
      <StyledTableCell align="center">
        ${' '}
        {new Intl.NumberFormat('en-US', {
          minimumSignificantDigits: 3,
        }).format(invoice.total)}
      </StyledTableCell>
      <StyledTableCell align="center">{invoice.quantity}</StyledTableCell>
      <StyledTableCell align="center">
        {invoice.status}
      </StyledTableCell>
    </StyledTableRow>
  );
}
