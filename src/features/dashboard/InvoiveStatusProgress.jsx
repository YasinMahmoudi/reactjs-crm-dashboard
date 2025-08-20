import { Paper, Stack, Typography } from '@mui/material';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel';

export default function InvoiveStatusProgress() {
  return (
    <Paper sx={{ p: 5 }}>
      <Typography
        variant="h5"
        mb={4}>
        Invoices
      </Typography>

      <Stack spacing={3}>
        <LinearProgressWithLabel
          title="Draft"
          value={60}
        />
        <LinearProgressWithLabel
          title="Pending"
          value={0}
        />
        <LinearProgressWithLabel
          title="Overdue"
          value={100}
        />
        <LinearProgressWithLabel
          title="Paid"
          value={33}
        />
        <LinearProgressWithLabel
          title="Unpaid"
          value={5}
        />
        <LinearProgressWithLabel
          title="Partially"
          value={68}
        />
      </Stack>
    </Paper>
  );
}
