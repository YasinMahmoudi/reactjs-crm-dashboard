import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

function useGetData({
    dataKey = '',
    dataService
}) {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');

  const { data } = useSuspenseQuery({
    queryKey: [dataKey, id],
    queryFn: () => dataService(id),
  });

  return { data };
}

export { useGetData };

