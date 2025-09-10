import Box from '@mui/material/Box';

import Toolbar from '../core/Toolbar';
import CustomerSearch from './CustomerSearch';
import CustomersTable from './CustomersTable';

const tableBoxStyle = { mt: 3 };

export default function Customers() {
  return (
    <>
      <Toolbar buttonLabel="Add New Client">
        <CustomerSearch />
      </Toolbar>

      <Box sx={tableBoxStyle}>
        <CustomersTable />
      </Box>
    </>
  );
}
