import { Chip, Divider, Grid, Stack } from '@mui/material';
import { BoxItem } from '../../components/BoxItem';
import KeyValueRow from '../../components/KeyValueRow';
import PaymentReadToolbar from './PaymentReadToolbar';
import { useGetPayment } from './useGetPayment';

export default function PaymentRead() {
  const { payment } = useGetPayment();

  const { invoice, client } = payment;

  return (
    <>
      <PaymentReadToolbar payment={payment} />

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}>
        <BoxItem>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={12}>
            <KeyValueRow
              keyName="Status"
              value={invoice.status}
            />

            <KeyValueRow
              keyName="SubTotal"
              value={`$ ${new Intl.NumberFormat().format(invoice.subTotal)}`}
            />

            <KeyValueRow
              keyName="Total"
              value={`$ ${new Intl.NumberFormat().format(invoice.total)}`}
            />

            <KeyValueRow
              keyName="Paid"
              value={`$ ${new Intl.NumberFormat('en-US', {
                minimumSignificantDigits: 3,
              }).format(invoice.credit)}`}
            />
          </Grid>
        </BoxItem>

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
              keyName="Address"
              value={client.address}
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

        <BoxItem sx={{ flex: '100% !important' }}>
          <Divider
            textAlign="left"
            sx={{ mb: 3 }}>
            <Chip
              label="payment Information"
              size="small"
            />
          </Divider>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={12}>
            <KeyValueRow
              keyName="Paid"
              value={`$ ${new Intl.NumberFormat().format(payment.amount)}`}
            />

            <KeyValueRow
              keyName="Total"
              value={`$ ${new Intl.NumberFormat().format(invoice.total)}`}
            />

            <KeyValueRow
              keyName="Total Paid"
              value={`$ ${new Intl.NumberFormat().format(invoice.credit)}`}
            />

            <KeyValueRow
              keyName="Total Remaining"
              value={`$ ${new Intl.NumberFormat().format(
                invoice.total - invoice.credit
              )}`}
            />
          </Grid>
        </BoxItem>
      </Stack>
    </>
  );
}
