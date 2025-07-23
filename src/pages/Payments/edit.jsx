import { Grid } from '@mui/material';
import PaymentUpdateForm from '../../features/payments/paymentUpdateForm';
import PaymentClientInfo from '../../features/payments/PaymentClientInfo';

export default function PaymentEdit() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 1, sm: 4, md: 6 }}
      mt={5}>
      <Grid
        size={{ xs: 2, sm: 2, md: 3 }}
        bgcolor={'orange'}>
        <PaymentUpdateForm />
      </Grid>

      <Grid
        size={{ xs: 2, sm: 2, md: 3 }}
        bgcolor={'cornflowerblue'}>
        <PaymentClientInfo />
      </Grid>
    </Grid>
  );
}
