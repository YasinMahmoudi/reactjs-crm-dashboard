import { Grid } from '@mui/material';
import { BoxItem } from '../../components/BoxItem';
import KeyValueRow from '../../components/KeyValueRow';
import { useGetPayment } from './useGetPayment';
import ReadPageSkeleton from '../../components/ReadPageSkeleton';

export default function PaymentClientInfo() {
  const { payment, isLoadingPayment } = useGetPayment();

  if (isLoadingPayment) return <ReadPageSkeleton />;

  const { invoice, client } = payment;

  console.log(payment);

  return (
    <>
      <BoxItem>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <KeyValueRow
            keyName="Client"
            value={client.name}
          />

          <KeyValueRow
            keyName="Email"
            value={client.email}
          />

          <KeyValueRow
            keyName="Phone"
            value={client.phone}
          />
        </Grid>
      </BoxItem>

      <BoxItem sx={{ marginTop: '1rem' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <KeyValueRow
            keyName="Payment Status"
            value={invoice.paymentStatus}
          />

          <KeyValueRow
            keyName="Sub Total"
            value={`$ ${new Intl.NumberFormat('en-Us', {
              minimumFractionDigits: '2',
            }).format(invoice.subTotal)}`}
          />

          <KeyValueRow
            keyName="Total"
            value={`$ ${new Intl.NumberFormat('en-Us', {
              minimumFractionDigits: '2',
            }).format(invoice.total)}`}
          />

          <KeyValueRow
            keyName="Discount"
            value={`$ ${new Intl.NumberFormat('en-Us', {
              minimumFractionDigits: '2',
            }).format(invoice.discount)}`}
          />

          <KeyValueRow
            keyName="Balance"
            value={`$ ${new Intl.NumberFormat('en-Us', {
              minimumFractionDigits: '2',
            }).format(invoice.credit)}`}
          />
        </Grid>
      </BoxItem>
    </>
  );
}
