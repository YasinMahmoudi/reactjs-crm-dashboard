import { Skeleton, Stack } from '@mui/material';

export default function InvoiceStatusProgressSkeleton() {
  return (
    <Stack spacing={4}>
      {Array.from({ length: 5 }, (_v, i) => (
        <SkeletonItem key={i} />
      ))}
    </Stack>
  );
}

function SkeletonItem() {
  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        justifyContent="space-between">
        <Skeleton
          variant="text"
          width={80}
        />
        <Skeleton
          variant="text"
          width={80}
        />
      </Stack>
      <Skeleton
        sx={{ borderRadius: '10rem' }}
        variant="rounded"
        width={'100%'}
        height={15}
      />
    </Stack>
  );
}
