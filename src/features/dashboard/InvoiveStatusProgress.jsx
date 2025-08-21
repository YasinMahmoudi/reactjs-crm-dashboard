import { CircularProgress, Paper, Stack, Typography } from '@mui/material';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel';
import { useInvoicesSummary } from './useInvoiceSummary';

export default function InvoiveStatusProgress() {
  const { invoices, isLoadingInvoicesSummary } = useInvoicesSummary();

  if (isLoadingInvoicesSummary) return <CircularProgress />;

  const { performance } = invoices;

  return (
    <Paper sx={{ p: 5, height: '100%' }}>
      <Typography
        variant="h5"
        mb={4}>
        Invoices
      </Typography>

      <Stack spacing={3}>
        {performance.map((item, index) => (
          <LinearProgressWithLabel
            key={index}
            title={item.status}
            value={item.percentage}
          />
        ))}
      </Stack>
    </Paper>
  );
}
