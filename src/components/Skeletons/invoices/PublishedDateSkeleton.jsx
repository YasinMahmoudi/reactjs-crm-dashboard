import { Skeleton } from '@mui/material';

export default function PublishedDateSkeleton() {
  return (
    <>
      <Skeleton variant="text" width={30} />
      <span>/</span>
      <Skeleton variant="text" width={50}/>
    </>
  );
}
