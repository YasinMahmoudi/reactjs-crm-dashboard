import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ContextMenu from '../../components/ContextMenu';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

InvoiceActions.propTypes = {
  id: PropTypes.string,
};

export default function InvoiceActions({ id }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/customers/create?edit=true&id=${id}`);
  }

  return (
    <ContextMenu
      options={[
        {
          name: 'Show',
          icon: <EyeIcon fontSize="10px" />,
        },
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
