import { Skeleton, Stack } from '@mui/material';

export default function InvoiceReadProducsSkeleton() {
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap' }}>
      <Skeleton
        variant="rounded"
        height={200}
        sx={{ flex: 1 }}
        animation="wave"
      />

      <Skeleton
        variant="rounded"
        height={200}
        sx={{ flex: 1 }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        height={200}
        sx={{ flex: '100%' }}
        animation="wave"
      />
    </Stack>
  );
}
