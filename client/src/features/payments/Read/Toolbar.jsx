import Typography from '@mui/material/Typography';
import MoveBackButton from '../../../components/MoveBackButton';
import { Row } from '../../../components/Row';

import { useNavigate } from 'react-router';
import ContextMenu from '../../../components/ContextMenu';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import { Suspense } from 'react';
import PaymentToolbarActionsSkeleton from '../../../components/Skeletons/payments/PaymentToolbarActionsSkeleton';
import TextSkeleton from '../../../components/Skeletons/TextSkeleton';
import { DOWNLOAD_BASE_URL } from '../../../utils/constants';
import { useGetPayment } from '../useGetPayment';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' }, mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function PaymentReadToolbar() {
  return (
    <Row sx={mainRowStyle}>
      <Row>
        <MoveBackButton />

        <Suspense fallback={<TextSkeleton />}>
          <PaymentToolbarStatus />
        </Suspense>
      </Row>

      <Suspense fallback={<PaymentToolbarActionsSkeleton />}>
        <PaymentToolbarActions />
      </Suspense>
    </Row>
  );
}

function PaymentToolbarStatus() {
  const { payment } = useGetPayment();

  const {
    number,
    invoice: { year, paymentStatus },
  } = payment;

  return (
    <Row
      gap={2}
      alignItems="center">
      <Typography
        variant="caption"
        fontWeight={600}
        fontSize="larger">
        payment # {number}/{year}
      </Typography>

      <Typography
        variant="caption"
        textTransform="capitalize"
        fontSize="medium"
        fontWeight={600}>
        {paymentStatus}
      </Typography>
    </Row>
  );
}

function PaymentToolbarActions() {
  const navigate = useNavigate();

  const { payment } = useGetPayment();

  function handleEdit() {
    navigate(`/payment/edit/${payment._id}`);
  }

  function handleDownloadPdf() {
    window.open(
      `${DOWNLOAD_BASE_URL}/payment/payment-${payment._id}.pdf`,
      '_blank'
    );
  }

  return (
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
            onClick: () => navigate('/payment'),
          },
        ]}
      />
    </Row>
  );
}
