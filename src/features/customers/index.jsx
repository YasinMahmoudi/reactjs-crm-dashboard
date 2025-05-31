import  Box from '@mui/material/Box';

import CustomersTable from './CustomersTable';
import CustomerToolbar from './CustomerToolbar';

export default function Customers() {
  return (
    <>
      <CustomerToolbar />

      <Box sx={{ mt: 3 }}>
        <CustomersTable />
      </Box>
    </>
  );
}
