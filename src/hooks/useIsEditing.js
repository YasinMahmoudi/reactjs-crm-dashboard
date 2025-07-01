import { useParams } from 'react-router';

export function useIsEditing() {
  const { editId } = useParams();
  const isEditing = !!editId;

  return { editId , isEditing };
}
