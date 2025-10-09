import { Box } from '@mui/material';
import SearchField from '../core/SearchField';
import Toolbar from '../core/Toolbar';
import InvoicesTable from './Table';

const tableBoxStyle = { mt: 3 };

export default function Invoices() {
  return (
    <>
      <Toolbar
        buttonLabel="Add New Invoice"
        to="/customers/create">
        <SearchField id="invoiceSearchInput" />
      </Toolbar>

      <Box sx={tableBoxStyle}>
        <InvoicesTable />
      </Box>
    </>
  );
}
