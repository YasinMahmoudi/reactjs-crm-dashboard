import { Box } from '@mui/material';
import PaymentModesTable from './PaymentModeTable';
import PaymentModeToolbar from './PaymentModeToolbar';

const tableBoxStyle = { mt: 3 };

export default function PaymentMode() {
  return (
    <>
      <PaymentModeToolbar />

      <Box sx={tableBoxStyle}>
        <PaymentModesTable />
      </Box>
    </>
  );
}
