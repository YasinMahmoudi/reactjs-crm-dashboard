import { Box } from '@mui/material';

import CustomersTable from './CustomersTable';
import CustomerActions from './CustomerActions';

export default function Customers() {
  return (
    <>
      <CustomerActions />

      <Box sx={{ mt: 3 }}>
        <CustomersTable />
      </Box>
    </>
  );
}
