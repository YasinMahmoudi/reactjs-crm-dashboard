import ContextMenu from '../../components/ContextMenu';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useDeleteCustomer } from './useDeleteCustomer';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

CustomerActions.propTypes = {
  id: PropTypes.string,
};

export default function CustomerActions({ id }) {
  const navigate = useNavigate();

  const { deleteCustomer, isDeletingCustomer } = useDeleteCustomer();

  function handleEdit() {
    navigate(`/customers/create?edit=true&id=${id}`);
  }

  return (
    <ContextMenu
      loading={isDeletingCustomer}
      options={[
        {
          name: 'Show',
          icon: <EyeIcon fontSize="10px" />,
          disabled: isDeletingCustomer,
        },
        {
          name: 'Edit',
          icon: <EditIcon fontSize="10px" />,
          disabled: isDeletingCustomer,
          onClick: handleEdit,
        },
        {
          name: 'Delete',
          icon: <DeleteIcon fontSize="10px" />,
          onClick: () => deleteCustomer(id),
          loading: isDeletingCustomer,
          disabled: isDeletingCustomer,
        },
      ]}
    />
  );
}
