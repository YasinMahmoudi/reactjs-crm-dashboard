import { Grid } from '@mui/material';
import PaymentUpdateForm from '../../features/payments/PaymentUpdateForm';
import PaymentClientInfo from '../../features/payments/PaymentClientInfo';
import PaymentEditToolbar from '../../features/payments/PaymentEditToolbar';

export default function PaymentEdit() {
  return (
    <>
      <PaymentEditToolbar />

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 2, sm: 4, md: 6 }}
        mt={5}>
        <Grid size={{ xs: 2, sm: 2, md: 3 }}>
          <PaymentUpdateForm />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 3 }}>
          <PaymentClientInfo />
        </Grid>
      </Grid>
    </>
  );
}
