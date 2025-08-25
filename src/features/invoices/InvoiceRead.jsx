import { Chip, Divider, Grid, Stack } from '@mui/material';
import { Suspense } from 'react';
import { BoxItem } from '../../components/BoxItem';
import KeyValueRow from '../../components/KeyValueRow';
import TextSkeleton from '../../components/Skeletons/TextSkeleton';
import InvoiceReadProductsTable from './InvoiceReadProductsTable';
import InvoiceReadToolbar from './invoicesReadToolbar';
import { useGetInvoice } from './useGetInvoice';

export default function InvoiceRead() {
  return (
    <>
      <InvoiceReadToolbar />

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}>
        <InvoiceGeneralInformations />

        <BoxItem sx={{ flex: '100% !important' }}>
          <Divider
            textAlign="left"
            sx={{ mb: 3 }}>
            <Chip
              label="Products"
              size="small"
            />
          </Divider>

          <InvoiceReadProductsTable />
        </BoxItem>
      </Stack>
    </>
  );
}

function InvoiceGeneralInformations() {
  return (
    <>
      <BoxItem>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <KeyValueRow keyName="Status">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue keyValue={'status'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="SubTotal">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue
                keyValue={'subTotal'}
                formater={(value) =>
                  `$ ${new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2,
                  }).format(value)}`
                }
              />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Total">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue
                keyValue={'total'}
                formater={(value) =>
                  `$ ${new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2,
                  }).format(value)}`
                }
              />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Paid">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue
                keyValue={'credit'}
                formater={(value) =>
                  `$ ${new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2,
                  }).format(value)}`
                }
              />
            </Suspense>
          </KeyValueRow>
        </Grid>
      </BoxItem>

      <BoxItem>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <KeyValueRow keyName="Client">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue keyValue={'client.name'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Address">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue keyValue={'client.address'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Email">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue keyValue={'client.email'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Phone">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue keyValue={'client.phone'} />
            </Suspense>
          </KeyValueRow>
        </Grid>
      </BoxItem>
    </>
  );
}

function InvoiceInfoValue({ keyValue, formater }) {
  const { invoice } = useGetInvoice();

  const modifiedKey = keyValue.split('.').map((val) => val);

  const value = modifiedKey.reduce((acc, key) => acc[key], invoice);

  if (formater) return formater(value);

  return value;
}
