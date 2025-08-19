import { Paper, Stack, Typography } from '@mui/material';
import PieChartWithCenterLabel from '../../components/PieChartWithCenterLabel';

export default function NewCustomers() {
  return (
    <Paper sx={{ mt: 10, p: 5 }}>
      <Typography
        variant="h5"
        mb={4}>
        Customers
      </Typography>

      <Stack spacing={3}>
        <PieChartWithCenterLabel />
      </Stack>
    </Paper>
  );
}
