import Typography from '@mui/material/Typography';
import MoveBackButton from '../../../components/MoveBackButton';
import { Row } from '../../../components/Row';

import { useNavigate } from 'react-router';
import ContextMenu from '../../../components/ContextMenu';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';

import { useGetPayment } from '../useGetPayment';

import TextSkeleton from '../../../components/Skeletons/TextSkeleton';
import { Suspense } from 'react';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' }, mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function PaymentEditToolbar() {
  return (
    <Row sx={mainRowStyle}>
      <Row>
        <MoveBackButton />

        <Suspense fallback={<PaymentEditToolbarStatusSkeleton />}>
          <Row
            gap={2}
            alignItems="center">
            <PaymentEditToolbarStatus />
          </Row>
        </Suspense>
      </Row>

      <Row sx={actionRowStyle}>
        <Suspense
          fallback={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }>
          <PaymentActions />
        </Suspense>
      </Row>
    </Row>
  );
}

function PaymentEditToolbarStatusSkeleton() {
  return (
    <>
      <Typography
        variant="caption"
        fontWeight={600}
        fontSize="larger"
        display='flex'
        gap={2}
        >
        Update Payment # <TextSkeleton />
      </Typography>
      <Typography
        variant="caption"
        textTransform="capitalize"
        fontSize="medium"
        fontWeight={600}
        ml={2}
        >
        <TextSkeleton />
      </Typography>
    </>
  );
}

function PaymentEditToolbarStatus() {
  const { payment } = useGetPayment();

  const {
    number,
    invoice: { year, paymentStatus },
  } = payment;

  return (
    <>
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
    </>
  );
}

function PaymentActions() {
  const navigate = useNavigate();

  const { payment } = useGetPayment();

  const {
    invoice: { _id: invoiceId },
  } = payment;

  function handleShowInvoice() {
    navigate(`/invoices/read/${invoiceId}`);
  }

  return (
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
  );
}
