import Box from '@mui/material/Box';

import CustomersTable from './CustomersTable';
import CustomerToolbar from './CustomerToolbar';

const tableBoxStyle = { mt: 3 };

export default function Customers() {
  return (
    <>
      <CustomerToolbar />

      <Box sx={tableBoxStyle}>
        <CustomersTable />
      </Box>
    </>
  );
}
