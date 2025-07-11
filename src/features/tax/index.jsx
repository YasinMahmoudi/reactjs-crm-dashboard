import { Box } from '@mui/material';
import TaxTable from './TaxTable';
import TaxToolbar from './TaxToolbar';

const tableBoxStyle = { mt: 3 };

export default function Tax() {
  return (
    <>
      <TaxToolbar />

      <Box sx={tableBoxStyle}>
        <TaxTable />
      </Box>
    </>
  );
}
