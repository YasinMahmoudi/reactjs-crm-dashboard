import { useParams } from 'react-router';

export function useIsEditing() {
  const { editId, readId } = useParams();

  const isEditing = !!editId;

  return { editId, readId, isEditing };
}
