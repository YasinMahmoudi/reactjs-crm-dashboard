import { Box } from '@mui/material';
import PaymentToolbar from './PaymentToolbar';

const tableBoxStyle = { mt: 3 };

export default function Payment() {
  return (
    <>
      <PaymentToolbar />

      <Box sx={tableBoxStyle}>

        Payment Table

      </Box>
    </>
  );
}
