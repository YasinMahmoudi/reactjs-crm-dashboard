import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import ContextMenu from '../../../components/ContextMenu';

import { useNavigate, useSearchParams } from 'react-router';

export default function CustomerActions({ id }) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  function handleEdit() {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('edit', true);
    newSearchParams.set('id', id);

    navigate({
      pathname: '/customers/create',
      search: newSearchParams.toString(),
    });
  }

  function handleDelete() {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('delete-id', id);

    navigate({
      pathname: '/customers',
      search: newSearchParams.toString(),
    });
  }

  return (
    <ContextMenu
      options={[
        {
          name: 'Edit',
          icon: <EditIcon fontSize="10px" />,
          onClick: handleEdit,
        },
        {
          name: 'Delete',
          icon: <DeleteIcon fontSize="10px" />,
          onClick: handleDelete,
        },
      ]}
    />
  );
}
