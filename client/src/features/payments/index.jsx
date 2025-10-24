import { Box } from '@mui/material';
import Toolbar from '../core/Toolbar';
import PaymentsTable from './Table';
import PaymentSearch from './Table/Search';

const tableBoxStyle = { mt: 3 };

export default function Payment() {
  return (
    <>
      <Toolbar>
        <PaymentSearch />
      </Toolbar>

      <Box sx={tableBoxStyle}>
        <PaymentsTable />
      </Box>
    </>
  );
}
