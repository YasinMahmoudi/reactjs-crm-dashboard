import { Chip, Divider, Grid, Stack } from '@mui/material';
import { BoxItem } from '../../components/BoxItem';
import InvoiceReadProducsSkeleton from '../../components/InvoiceReadProductsSkeleton';
import KeyValueRow from '../../components/KeyValueRow';
import InvoiceReadProductsTable from './invoiceReadProductsTable';
import { useGetInvoice } from './useGetInvoice';
import InvoiceReadToolbar from './invoicesReadToolbar';

export default function InvoiceRead() {
  const { invoice, isLoadingInvoice } = useGetInvoice();

  const products = invoice?.items;
  const client = invoice?.client;

  if (isLoadingInvoice) return <InvoiceReadProducsSkeleton />;

  return (
    <>
      <InvoiceReadToolbar invoice={invoice} />

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
              label="Products"
              size="small"
            />
          </Divider>

          <InvoiceReadProductsTable products={products} />
        </BoxItem>
      </Stack>
    </>
  );
}
