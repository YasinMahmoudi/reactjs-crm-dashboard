import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import CreditCardOutlined from '@mui/icons-material/CreditCardOutlined';

import ContextMenu from '../../components/ContextMenu';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { DOWNLOAD_BASE_URL } from '../../utils/constants';

InvoiceActions.propTypes = {
  id: PropTypes.string,
};

export default function InvoiceActions({ id }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/invoices/edit/${id}`);
  }

  function handleDownloadPdf() {
    window.open(`${DOWNLOAD_BASE_URL}/invoice/invoice-${id}.pdf`, '_blank');
  }

  return (
    <ContextMenu
      options={[
        {
          name: 'Show',
          icon: <EyeIcon fontSize="10px" />,
          onClick: () => navigate(`/invoices/read/${id}`),
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
          name: 'Record Payment',
          icon: <CreditCardOutlined fontSize="10px" />,
          onClick: () => navigate(`/invoices/pay/${id}`),
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
