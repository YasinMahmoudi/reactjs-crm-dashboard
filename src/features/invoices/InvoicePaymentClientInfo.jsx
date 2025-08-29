import { Grid } from '@mui/material';
import { Suspense } from 'react';
import { BoxItem } from '../../components/BoxItem';
import KeyValueRow from '../../components/KeyValueRow';
import TextSkeleton from '../../components/Skeletons/TextSkeleton';
import { InvoiceInfoValue } from './InvoiceRead';

export default function InvoicePaymentClientInfo() {

  return (
    <>
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

      <BoxItem sx={{ marginTop: '1rem' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <KeyValueRow keyName="Payment Status">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue keyValue={'paymentStatus'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Sub Total">
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

          <KeyValueRow keyName="Discount">
            <Suspense fallback={<TextSkeleton />}>
              <InvoiceInfoValue
                keyValue={'discount'}
                formater={(value) =>
                  `$ ${new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2,
                  }).format(value)}`
                }
              />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Balance">
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
    </>
  );
}
