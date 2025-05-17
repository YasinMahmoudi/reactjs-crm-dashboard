import ContextMenu from '../../components/ContextMenu';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useDeleteCustomer } from './useDeleteCustomer';

import PropTypes from 'prop-types';

CustomerActions.propTypes = {
  id: PropTypes.string,
};

export default function CustomerActions({ id }) {
  const { deleteCustomer, isDeletingCustomer } = useDeleteCustomer();

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
