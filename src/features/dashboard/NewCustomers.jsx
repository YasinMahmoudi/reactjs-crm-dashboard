import { ArrowUpwardOutlined } from '@mui/icons-material';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import PieChartWithCenterLabel from '../../components/PieChartWithCenterLabel';
import { useClientSummary } from './useClientSummary';
import { Suspense } from 'react';
import ActiveCustomersSkeleton from '../../components/Skeletons/dashboard/ActiveCustomersSkeleton';
import CustomersPieChartSkeleton from '../../components/Skeletons/dashboard/CustomersPieChartSkeleton';

export default function NewCustomers() {
  return (
    <Paper sx={{ p: 5, height: '100%' }}>
      <Typography
        variant="h5"
        mb={4}
        textAlign="center">
        Customers
      </Typography>

      <Stack alignItems="center">
        <Suspense fallback={<CustomersPieChartSkeleton />}>
          <NewMonthyCustomers />
        </Suspense>

        <Typography>New Customer This Month</Typography>

        <Divider sx={{ width: '100%', my: 5 }} />

        <Typography
          variant="h6"
          color="textDisabled">
          Active Customer
        </Typography>

        <Suspense fallback={<ActiveCustomersSkeleton />}>
          <ActiveCustomers />
        </Suspense>
      </Stack>
    </Paper>
  );
}

function NewMonthyCustomers() {
  const { clientSummary } = useClientSummary();

  return (
    <PieChartWithCenterLabel
      label={`${clientSummary.new}%`}
      progressPercentage={clientSummary.new}
    />
  );
}

function ActiveCustomers() {
  const { clientSummary } = useClientSummary();

  return (
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
  );
}
