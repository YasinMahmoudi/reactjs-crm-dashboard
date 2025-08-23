import { Button, Grid, Skeleton } from '@mui/material';

export default function CusyomerCreateFormSkeleton() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 1, sm: 4 }}>
      <Grid size={{ xs: 2, sm: 2, md: 2 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 2 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 2 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 2 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 4 }}>
        <Skeleton
          variant="rounded"
          height={50}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 2, md: 2 }}>
        <Button
          variant="contained"
          color="info"
          sx={{ width: { xs: '100%', sm: 'auto', letterSpacing: 2 } }}>
          Update user
        </Button>
      </Grid>
    </Grid>
  );
}
