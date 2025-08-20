import { Paper, Typography } from "@mui/material";

export default function RecentInvoices() {
  return (
    <Paper sx={{ p: 5 }}>
      <Typography
        variant="h5"
        mb={4}>
        Recent Invoices
      </Typography>
    </Paper>
  );
}
