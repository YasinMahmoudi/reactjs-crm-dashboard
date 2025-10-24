import EditIcon from '@mui/icons-material/EditOutlined';
import ContextMenu from '../../components/ContextMenu';

import { useNavigate } from 'react-router';

export default function TaxActions({ id }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/taxes/create?edit=true&id=${id}`);
  }

  return (
    <ContextMenu
      options={[
        {
          name: 'Edit',
          icon: <EditIcon fontSize="10px" />,
          onClick: handleEdit,
        },
      ]}
    />
  );
}
