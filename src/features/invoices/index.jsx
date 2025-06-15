import { Box } from '@mui/material';
import InvoiceToolbar from './InvoiceToolbar';
import InvoicesTable from './InvoicesTable';

const tableBoxStyle = { mt: 3 };

export default function Invoices() {
  return (
    <>
      <InvoiceToolbar />

      <Box sx={tableBoxStyle}>
        <InvoicesTable />
      </Box>
    </>
  );
}
