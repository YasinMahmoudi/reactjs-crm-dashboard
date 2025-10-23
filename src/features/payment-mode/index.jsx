import { Box } from '@mui/material';
import SearchField from '../core/SearchField';
import Toolbar from '../core/Toolbar';
import PaymentModeTable from './Table';

const tableBoxStyle = { mt: 3 };

export default function PaymentMode() {
  return (
    <>
      <Toolbar
        buttonLabel="Add New Payment Mode"
        to="/payment/mode/create">
        <SearchField id="paymentModeSearchInput" />
      </Toolbar>

      <Box sx={tableBoxStyle}>
        <PaymentModeTable />
      </Box>
    </>
  );
}
