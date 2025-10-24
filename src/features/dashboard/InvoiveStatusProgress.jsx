import { Paper, Stack, Typography } from '@mui/material';
import { Suspense } from 'react';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel';
import InvoiceStatusProgressSkeleton from '../../components/Skeletons/dashboard/InvoiceStatusProgressSkeleton';
import { useInvoicesSummary } from './useInvoiceSummary';

export default function InvoiveStatusProgress() {
  return (
    <Paper
      sx={{
        p: 5,
        height: '100%',
        background: (theme) =>
          theme.applyStyles(
            'dark',
            `linear-gradient(135deg , #141414, #1e1e1e)`
          ),
      }}>
      <Typography
        variant="h5"
        mb={4}>
        Invoices
      </Typography>

      <Suspense fallback={<InvoiceStatusProgressSkeleton />}>
        <InvoiceStatusProgressList />
      </Suspense>
    </Paper>
  );
}

function InvoiceStatusProgressList() {
  const { invoices } = useInvoicesSummary();

  const { performance } = invoices;

  return (
    <Stack spacing={3}>
      {performance.map((item, index) => (
        <LinearProgressWithLabel
          key={index}
          title={item.status}
          value={item.percentage}
        />
      ))}
    </Stack>
  );
}
