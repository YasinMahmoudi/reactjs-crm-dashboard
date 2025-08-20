import Summary from '../../features/dashboard/Summary';
import InvoiveStatusProgress from '../../features/dashboard/InvoiveStatusProgress';
import { Grid } from '@mui/material';
import NewCustomers from '../../features/dashboard/NewCustomers';
import RecentInvoices from '../../features/dashboard/RecentInvoices';

export default function Dashboard() {
  return (
    <>
      <Summary />

      <Grid
        container
        spacing={3}
        columns={{ xs: 4, md: 8 }}
        mt={10}>
        <Grid size={{ xs: 4, md: 4 }}>
          <InvoiveStatusProgress />
        </Grid>

        <Grid size={{ xs: 4, md: 4 }}>
          <NewCustomers />
        </Grid>

        <Grid size={{ xs: 8 }}>
          <RecentInvoices />
        </Grid>
      </Grid>
    </>
  );
}
