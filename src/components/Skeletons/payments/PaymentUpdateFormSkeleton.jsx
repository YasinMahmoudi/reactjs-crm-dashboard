import { Button, Grid, Skeleton, Typography } from '@mui/material';

export default function PaymentUpdateFormSkeleton() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 1, sm: 4, md: 6 }}>
      <Grid size={{ xs: 2, sm: 2, md: 3 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 3 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 6 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 6 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 6 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 6 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 6 }}>
        <Button
          variant="contained"
          color="primary"
          disabled
          sx={{
            width: { letterSpacing: 2 },
          }}>
          <Typography variant="h6">Update</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
