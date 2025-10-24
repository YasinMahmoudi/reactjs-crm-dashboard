import { Grid } from '@mui/material';
import { Suspense } from 'react';
import { BoxItem } from '../../../components/BoxItem';
import KeyValueRow from '../../../components/KeyValueRow';
import { PaymentInfoValue } from '../../../components/PaymentInfoValue';
import TextSkeleton from '../../../components/Skeletons/TextSkeleton';

export default function PaymentClientInfo() {
  return (
    <>
      <BoxItem>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <KeyValueRow keyName="Client">
            <Suspense fallback={<TextSkeleton />}>
              <PaymentInfoValue keyValue={'client.name'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Email">
            <Suspense fallback={<TextSkeleton />}>
              <PaymentInfoValue keyValue={'client.email'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Phone">
            <Suspense fallback={<TextSkeleton />}>
              <PaymentInfoValue keyValue={'client.phone'} />
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
              <PaymentInfoValue keyValue={'invoice.paymentStatus'} />
            </Suspense>
          </KeyValueRow>

          <KeyValueRow keyName="Sub Total">
            <Suspense fallback={<TextSkeleton />}>
              <PaymentInfoValue
                keyValue={'invoice.subTotal'}
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
              <PaymentInfoValue
                keyValue={'invoice.total'}
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
              <PaymentInfoValue
                keyValue={'invoice.discount'}
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
              <PaymentInfoValue
                keyValue={'invoice.credit'}
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
