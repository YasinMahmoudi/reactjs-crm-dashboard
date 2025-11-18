import { useSuspenseQuery } from '@tanstack/react-query';
import { useIsEditing } from '../../hooks/useIsEditing';

function useGetData({ dataKey = '', dataService }) {
  const { editId, readId, isEditing } = useIsEditing();

  const selectedId = isEditing ? editId : readId;

  const { data = {} } = useSuspenseQuery({
    queryKey: [dataKey, selectedId],
    queryFn: () => selectedId ? dataService(selectedId) : {},
    enabled: selectedId !== null && selectedId !== undefined,
  });

  return { data };
}

export { useGetData };
