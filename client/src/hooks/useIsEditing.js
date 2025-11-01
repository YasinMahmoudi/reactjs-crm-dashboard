import { useParams, useSearchParams } from 'react-router';

export function useIsEditing() {
  let { editId, readId } = useParams();
  const [searchParams] = useSearchParams();

  const isEditing = searchParams.get('edit') === 'true';

  if(editId) {
    return { editId, readId, isEditing };
  }


  editId = searchParams.get('id');

  return { editId, readId, isEditing };
}
