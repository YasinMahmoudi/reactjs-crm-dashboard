import { Grid } from '@mui/material';
import InvoicePaymentCreateForm from '../../features/invoices/InvoicePaymentCreateForm';
import InvoicePaymentClientInfo from '../../features/invoices/InvoicePaymentClientInfo';
import InvoicePaymentToolbar from '../../features/invoices/InvoicePaymentToolbar';

export default function PaymentRecord() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 4, md: 6 }}
      mt={5}>
      <Grid size={{ xs: 6 }}>
        <InvoicePaymentToolbar />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 3 }}>
        <InvoicePaymentCreateForm />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 3 }}>
        <InvoicePaymentClientInfo />
      </Grid>
    </Grid>
  );
}
