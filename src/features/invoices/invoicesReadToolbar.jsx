import Typography from '@mui/material/Typography';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';

import { useNavigate } from 'react-router';
import ContextMenu from '../../components/ContextMenu';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import { DOWNLOAD_BASE_URL } from '../../utils/constants';

import PropTypes from 'prop-types';

InvoiceReadToolbar.propTypes = {
  invoice: PropTypes.object,
};

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' }, mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function InvoiceReadToolbar({ invoice }) {
  const navigate = useNavigate();

  const {number , year , status , paymentStatus} = invoice

  function handleEdit() {
    navigate(`/invoices/edit/${invoice._id}`);
  }

  function handleDownloadPdf() {
    window.open(
      `${DOWNLOAD_BASE_URL}/invoice/invoice-${invoice._id}.pdf`,
      '_blank'
    );
  }

  return (
    <Row sx={mainRowStyle}>
      <Row>
        <MoveBackButton />
        <Row
          gap={2}
          alignItems="center">
          <Typography
            variant="caption"
            fontWeight={600}
            fontSize="larger">
            Invoice # {number}/{year}
          </Typography>

          <Typography
            variant="caption"
            textTransform='capitalize'
            fontSize="medium"
            fontWeight={600}>
            {status} {paymentStatus}
          </Typography>
        </Row>
      </Row>

      <Row sx={actionRowStyle}>
        <ContextMenu
          options={[
            {
              name: 'Edit',
              icon: <EditIcon fontSize="10px" />,
              onClick: handleEdit,
            },

            {
              name: 'Download Pdf',
              icon: <PictureAsPdfOutlined fontSize="10px" />,
              onClick: handleDownloadPdf,
            },

            {
              name: 'Close',
              icon: <CloseOutlined fontSize="10px" />,
              onClick: () => navigate('/invoices'),
            },
          ]}
        />
      </Row>
    </Row>
  );
}
