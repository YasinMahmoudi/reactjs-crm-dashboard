import { Button, Grid, Skeleton } from '@mui/material';
import { useSearchParams } from 'react-router';

export default function CusyomerCreateFormSkeleton() {
  const [searchParams] = useSearchParams();
  const isEditing = searchParams.get('edit') === 'true';

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
          {isEditing ? 'Update user' : 'Add User'}
        </Button>
      </Grid>
    </Grid>
  );
}
