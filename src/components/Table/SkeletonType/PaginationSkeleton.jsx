import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

export default function PaginationSkeleton() {
  return (
    <Stack
      width={'100%'}
      borderTop={1}
      borderColor={'#e3e3e3'}
      sx={{
        padding: '1.25rem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '10px',
      }}>
      <Skeleton
        width={40}
        height={50}
      />
      <Skeleton
        width={40}
        height={50}
      />
      <Skeleton
        width={40}
        height={50}
      />
      <Skeleton
        width={40}
        height={50}
      />
    </Stack>
  );
}
