import { Divider, Paper, Stack, Typography } from '@mui/material';
import PieChartWithCenterLabel from '../../components/PieChartWithCenterLabel';

export default function NewCustomers() {
  return (
    <Paper sx={{ mt: 10, p: 5 }}>
      <Typography
        variant="h5"
        mb={4}
        textAlign='center'>
        Customers
      </Typography>

      <Stack alignItems="center">
        <PieChartWithCenterLabel />

        <Typography>New Customer This Month</Typography>

        <Divider sx={{ width: '100%', my: 5 }} />
      </Stack>
    </Paper>
  );
}
