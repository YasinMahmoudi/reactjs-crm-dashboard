import Summary from '../../features/dashboard/Summary';
import InvoiveStatusProgress from '../../features/dashboard/InvoiveStatusProgress';
import { Grid } from '@mui/material';
import NewCustomers from '../../features/dashboard/NewCustomers';

export default function Dashboard() {
  return (
    <>
      <Summary />

      <Grid
        container
        spacing={2}
        columns={{ xs: 4, md: 8 }}>
        <Grid size={{ xs: 4, md: 4 }}>
          <InvoiveStatusProgress />
        </Grid>

        <Grid size={{ xs: 4, md: 4 }}>
          <NewCustomers />
        </Grid>
      </Grid>
    </>
  );
}
