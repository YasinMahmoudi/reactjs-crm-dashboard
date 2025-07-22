import { Chip, Divider, Grid, Stack } from '@mui/material';
import { BoxItem } from '../../components/BoxItem';
import KeyValueRow from '../../components/KeyValueRow';

export default function PaymentRead() {
  return (
    <>
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
              value={'pending'}
            />

            <KeyValueRow
              keyName="SubTotal"
              value={`$ ${new Intl.NumberFormat().format(1000)}`}
            />

            <KeyValueRow
              keyName="Total"
              value={`$ ${new Intl.NumberFormat().format(12000)}`}
            />

            <KeyValueRow
              keyName="Paid"
              value={`$ ${new Intl.NumberFormat('en-US', {
                minimumSignificantDigits: 3,
              }).format(40000)}`}
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
              value={"John"}
            />

            <KeyValueRow
              keyName="Address"
              value={'Address'}
            />

            <KeyValueRow
              keyName="Email"
              value={'email'}
            />

            <KeyValueRow
              keyName="Phone"
              value={'phone'}
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
        </BoxItem>
      </Stack>
    </>
  );
}
