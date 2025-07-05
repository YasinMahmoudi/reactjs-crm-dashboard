import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import { useParams } from 'react-router';

const SummaryBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function InvoiceRead() {
  const { readId } = useParams();

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap' }}>
      <Item sx={{ flex: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Status</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                pending
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>SubTotal</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                $ 4,473.00
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Total</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                $ 4,473.00
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Paid</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                $ 1,312.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Item>
      <Item sx={{ flex: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={12}>
          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Client </Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                Stephanie Wilkinson
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Address</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                Similique dolore und
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Email</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                cyxacaguz@mailinator.com
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            alignItems="center">
            <Grid size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography>Phone</Typography>
            </Grid>

            <Grid
              size={{ xs: 2, sm: 4, md: 8 }}
              display="flex"
              justifyContent="flex-end">
              <Typography
                variant="h6"
                color="textPrimary"
                fontWeight="600">
                +1 (466) 891-4684
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Item>
      <Item sx={{ flex: '100%' }}>Item 3</Item>
    </Stack>
  );
}
