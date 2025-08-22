import {
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import PieChartWithCenterLabel from '../../components/PieChartWithCenterLabel';
import { ArrowUpwardOutlined } from '@mui/icons-material';
import { useClientSummary } from './useClientSummary';

export default function NewCustomers() {
  const { clientSummary, isLoadingClientSummary } = useClientSummary();

  if (isLoadingClientSummary) return <CircularProgress />;

  return (
    <Paper sx={{ p: 5, height: '100%' }}>
      <Typography
        variant="h5"
        mb={4}
        textAlign="center">
        Customers
      </Typography>

      <Stack alignItems="center">
        <PieChartWithCenterLabel
          label={`${clientSummary.new}%`}
          progressPercentage={4}
        />

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
          mt={2}>
          <ArrowUpwardOutlined sx={{ fontSize: 'xx-large' }} />

          <Typography
            variant="h4"
            color="textPrimary">
            {clientSummary.active.toFixed(2)} %
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
