import { Divider, Paper, Stack, Typography } from '@mui/material';
import PieChartWithCenterLabel from '../../components/PieChartWithCenterLabel';
import { ArrowUpwardOutlined } from '@mui/icons-material';

export default function NewCustomers() {
  return (
    <Paper sx={{ mt: 10, p: 5 }}>
      <Typography
        variant="h5"
        mb={4}
        textAlign="center">
        Customers
      </Typography>

      <Stack alignItems="center">
        <PieChartWithCenterLabel />

        <Typography>New Customer This Month</Typography>

        <Divider sx={{ width: '100%', my: 5 }} />

        <Typography
          variant="h6"
          color="textDisabled">
          Active Customer
        </Typography>

        <Stack
          direction="row"
          alignItems="baseline"
          gap={1}
          mt={2}
          >
          <ArrowUpwardOutlined sx={{ fontSize: 'xx-large' }} />

          <Typography
            variant="h4"
            color="textPrimary">
            9.00%
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
