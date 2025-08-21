import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useInvoicesSummary } from './useInvoiceSummary';
import { usePaymentSummary } from './usePaymentSummary';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  paddingBlock: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Summary() {
  const { invoices, isLoadingInvoicesSummary } = useInvoicesSummary();
  const { paymentSummary, isLoadingPaymentSummary } = usePaymentSummary();

  if (isLoadingInvoicesSummary || isLoadingPaymentSummary)
    return <CircularProgress />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid size={{ xs: 4, sm: 2, md: 4 }}>
          <Item>
            <Typography
              variant="h6"
              fontWeight={600}>
              Invoices
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={2}>
              <Typography
                variant="subtitle1"
                fontWeight={500}>
                This Month
              </Typography>
              <span>
                <Chip
                  label={new Intl.NumberFormat('en-US').format(invoices.total)}
                  color="error"
                  variant="filled"
                />
              </span>
            </Stack>
          </Item>
        </Grid>

        <Grid size={{ xs: 4, sm: 2, md: 4 }}>
          <Item>
            <Typography
              variant="h6"
              fontWeight={600}>
              Paid
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={2}>
              <Typography
                variant="subtitle1"
                fontWeight={500}>
                This Month
              </Typography>
              <span>
                <Chip
                  label={new Intl.NumberFormat('en-US').format(
                    paymentSummary.total
                  )}
                  color="error"
                  variant="filled"
                />
              </span>
            </Stack>
          </Item>{' '}
        </Grid>

        <Grid size={{ xs: 4, sm: 2, md: 4 }}>
          <Item>
            <Typography
              variant="h6"
              fontWeight={600}>
              Unpaid
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={2}>
              <Typography
                variant="subtitle1"
                fontWeight={500}>
                This Month
              </Typography>
              <span>
                <Chip
                  label={new Intl.NumberFormat('en-US').format(
                    invoices.total_undue
                  )}
                  color="error"
                  variant="filled"
                />
              </span>
            </Stack>
          </Item>{' '}
        </Grid>
      </Grid>
    </Box>
  );
}
