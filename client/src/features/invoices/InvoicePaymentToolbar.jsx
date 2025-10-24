import Typography from '@mui/material/Typography';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';

import { useNavigate } from 'react-router';
import ContextMenu from '../../components/ContextMenu';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { Suspense } from 'react';
import { useGetInvoice } from './useGetInvoice';
import TextSkeleton from '../../components/Skeletons/TextSkeleton';

const mainRowStyle = { mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };
const movbackStyle = { marginBottom: { xs: 0, sm: 0 } };

export default function InvoicePaymentToolbar() {
  return (
    <Row sx={mainRowStyle}>
      <Row>
        <MoveBackButton sx={movbackStyle} />

        <Suspense fallback={<InvociePaymentToolbarStatusSkeleton />}>
          <Row
            gap={2}
            alignItems="center">
            <InvoicePaymentToolbarStatus />
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
          <InvoiceActions />
        </Suspense>
      </Row>
    </Row>
  );
}

function InvociePaymentToolbarStatusSkeleton() {
  return (
    <>
      <Typography
        variant="caption"
        fontWeight={600}
        fontSize="larger"
        display="flex"
        gap={2}>
        Record Payment for Invoice # <TextSkeleton />
      </Typography>
      <Typography
        variant="caption"
        textTransform="capitalize"
        fontSize="medium"
        fontWeight={600}
        ml={2}>
        <TextSkeleton />
      </Typography>
    </>
  );
}

function InvoicePaymentToolbarStatus() {
  const { invoice } = useGetInvoice();

  return (
    <>
      <Typography
        variant="caption"
        fontWeight={600}
        sx={{ fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
        Record Payment for Invoice # {invoice.number}/{invoice.year}
      </Typography>

      <Typography
        variant="caption"
        textTransform="capitalize"
        fontWeight={600}
        sx={{ fontSize: { xs: '1rem', sm: '1.4rem' } }}>
        {invoice.paymentStatus}
      </Typography>
    </>
  );
}

function InvoiceActions() {
  const navigate = useNavigate();

  const { invoice } = useGetInvoice();

  function handleShow() {
    navigate(`/invoices/read/${invoice._id}`);
  }

  return (
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
  );
}
