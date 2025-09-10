import Box from '@mui/material/Box';

import SearchField from '../core/SearchField';
import Toolbar from '../core/Toolbar';
import CustomersTable from './Table';

const tableBoxStyle = { mt: 3 };

export default function Customers() {
  return (
    <>
      <Toolbar
        buttonLabel="Add New Client"
        to="/customers/create">
        <SearchField id="customerSearchInput" />
      </Toolbar>

      <Box sx={tableBoxStyle}>
        <CustomersTable />
      </Box>
    </>
  );
}
