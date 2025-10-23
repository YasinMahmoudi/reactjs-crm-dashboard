import EditIcon from '@mui/icons-material/EditOutlined';
import ContextMenu from '../../../components/ContextMenu';

import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router';

PaymentModeActions.propTypes = {
  id: PropTypes.string,
};

export default function PaymentModeActions({ id }) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  function handleEdit() {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('edit', true);
    newSearchParams.set('id', id);

    navigate({
      pathname: '/payment/mode/create',
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
      ]}
    />
  );
}
