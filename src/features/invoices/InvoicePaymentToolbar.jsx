import Typography from '@mui/material/Typography';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';

import { useNavigate } from 'react-router';
import ContextMenu from '../../components/ContextMenu';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import { useGetInvoice } from './useGetInvoice';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' }, mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function InvoicePaymentToolbar() {
  const navigate = useNavigate();

  const { invoice } = useGetInvoice();

  function handleShow() {
    navigate(`/invoices/read/${invoice._id}`);
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
            Record Payment for Invoice # {invoice.number}/{invoice.year}
          </Typography>

          <Typography
            variant="caption"
            textTransform="capitalize"
            fontSize="medium"
            fontWeight={600}>
            {invoice.paymentStatus}
          </Typography>
        </Row>
      </Row>

      <Row sx={actionRowStyle}>
        <ContextMenu
          options={[
            {
              name: 'Show Invoice',
              icon: <DescriptionOutlinedIcon fontSize="10px" />,
              onClick: handleShow,
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
