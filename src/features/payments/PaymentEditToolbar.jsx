import Typography from '@mui/material/Typography';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';

import { useNavigate } from 'react-router';
import ContextMenu from '../../components/ContextMenu';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';

import { useGetPayment } from './useGetPayment';
import { CircularProgress } from '@mui/material';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' }, mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function PaymentEditToolbar() {
  const navigate = useNavigate();

  const { payment , isLoadingPayment } = useGetPayment();

  if (isLoadingPayment) return <CircularProgress />;
  

  const {
    number,
    invoice: { year, paymentStatus, _id: invoiceId },
  } = payment;



  function handleShowInvoice() {
    navigate(`/invoices/read/${invoiceId}`);
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
            Update Payment # {number}/{year}
          </Typography>

          <Typography
            variant="caption"
            textTransform="capitalize"
            fontSize="medium"
            fontWeight={600}>
            {paymentStatus}
          </Typography>
        </Row>
      </Row>

      <Row sx={actionRowStyle}>
        <ContextMenu
          options={[
            {
              name: 'Show Invoice',
              icon: <PictureAsPdfOutlined fontSize="10px" />,
              onClick: handleShowInvoice,
            },

            {
              name: 'Close',
              icon: <CloseOutlined fontSize="10px" />,
              onClick: () => navigate('/payment'),
            },
          ]}
        />
      </Row>
    </Row>
  );
}
