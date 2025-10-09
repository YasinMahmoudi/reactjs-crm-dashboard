import { Box } from '@mui/material';
import Toolbar from '../core/Toolbar';
import InvoiceSearch from './InvoiceSearch';
import InvoicesTable from './Table';

const tableBoxStyle = { mt: 3 };

export default function Invoices() {
  return (
    <>
      <Toolbar
        buttonLabel="Add New Invoice"
        to="/customers/create">
        <InvoiceSearch id="invoiceSearchInput" />
      </Toolbar>

      <Box sx={tableBoxStyle}>
        <InvoicesTable />
      </Box>
    </>
  );
}
