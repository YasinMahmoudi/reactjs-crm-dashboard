import EditIcon from '@mui/icons-material/EditOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ContextMenu from '../../components/ContextMenu';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

TaxActions.propTypes = {
  id: PropTypes.string,
};

export default function TaxActions({ id }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/taxes/create?edit=true&id=${id}`);
  }

  return (
    <ContextMenu
      options={[
        {
          name: 'Show',
          icon: <EyeIcon fontSize="10px" />,
          onClick: () => navigate(`/tax/read/${id}`),
        },
        {
          name: 'Edit',
          icon: <EditIcon fontSize="10px" />,
          onClick: handleEdit,
        },
      ]}
    />
  );
}
