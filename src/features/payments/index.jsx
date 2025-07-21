import { Box } from '@mui/material';
import PaymentToolbar from './PaymentToolbar';
import PaymentTable from './PaymentTable';

const tableBoxStyle = { mt: 3 };

export default function Payment() {
  return (
    <>
      <PaymentToolbar />

      <Box sx={tableBoxStyle}>
        <PaymentTable />
      </Box>
    </>
  );
}
