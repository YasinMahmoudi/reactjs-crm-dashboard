import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import ContextMenu from '../../components/ContextMenu';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

CustomerActions.propTypes = {
  id: PropTypes.string,
};

export default function CustomerActions({ id }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/customers/create?edit=true&id=${id}`);
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
          onClick: () => navigate(`?delete-id=${id}`),
        },
      ]}
    />
  );
}
