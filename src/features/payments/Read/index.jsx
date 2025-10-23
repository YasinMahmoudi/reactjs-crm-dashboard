import { Chip, Divider, Grid, Stack } from '@mui/material';
import { BoxItem } from '../../../components/BoxItem';
import KeyValueRow from '../../../components/KeyValueRow';
import PaymentReadToolbar from './Toolbar';
import { useGetPayment } from '../useGetPayment';
import { Suspense } from 'react';
import TextSkeleton from '../../../components/Skeletons/TextSkeleton';

export default function PaymentRead() {
  return (
    <>
      <PaymentReadToolbar />

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
            <KeyValueRow keyName="Status">
              <Suspense fallback={<TextSkeleton />}>
                <PaymentInfoValue keyValue={'invoice.status'} />
              </Suspense>
            </KeyValueRow>

            <KeyValueRow keyName="SubTotal">
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

            <KeyValueRow keyName="Paid">
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

            <KeyValueRow keyName="Address">
              <Suspense fallback={<TextSkeleton />}>
                <PaymentInfoValue keyValue={'client.address'} />
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
            <KeyValueRow keyName="Paid">
              <Suspense fallback={<TextSkeleton />}>
                <PaymentInfoValue
                  keyValue={'amount'}
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

            <KeyValueRow keyName="Total Paid">
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

            <KeyValueRow keyName="Total Remaining">
              <Suspense fallback={<TextSkeleton />}>
                <PaymentInfoValue
                  keyValue={'invoice.total - invoice.credit'}
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
      </Stack>
    </>
  );
}

export function PaymentInfoValue({ keyValue, formater }) {
  const { payment } = useGetPayment();

  let modifiedKey, value;

  if (keyValue.includes('-')) {
    modifiedKey = keyValue.split('-').map((val) => val.trim());

    const [firstValue, secondValue] = modifiedKey;

    const first = firstValue.split('.').map((val) => val);
    const second = secondValue.split('.').map((val) => val);

    value =
      first.reduce((acc, key) => acc[key], payment) -
      second.reduce((acc, key) => acc[key], payment);
  } else {
    modifiedKey = keyValue.split('.').map((val) => val);

    value = modifiedKey.reduce((acc, key) => acc[key], payment);
  }

  if (formater) return formater(value);

  return value;
}
