import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import ContextMenu from '../../components/ContextMenu';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { DOWNLOAD_BASE_URL } from '../../utils/constants';

PaymentActions.propTypes = {
  id: PropTypes.string,
};

export default function PaymentActions({ id }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/payment/edit/${id}`);
  }

  function handleDownloadPdf() {
    window.open(`${DOWNLOAD_BASE_URL}/payment/payment-${id}.pdf`, '_blank');
  }

  return (
    <ContextMenu
      options={[
        {
          name: 'Show',
          icon: <EyeIcon fontSize="10px" />,
          onClick: () => navigate(`/payment/read/${id}`),
        },
        {
          name: 'Edit',
          icon: <EditIcon fontSize="10px" />,
          onClick: handleEdit,
        },

        {
          name: 'Download',
          icon: <PictureAsPdfOutlined fontSize="10px" />,
          onClick: handleDownloadPdf,
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
