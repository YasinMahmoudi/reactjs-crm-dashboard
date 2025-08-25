import Typography from '@mui/material/Typography';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';

import { useNavigate } from 'react-router';
import ContextMenu from '../../components/ContextMenu';

import CloseOutlined from '@mui/icons-material/CloseOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import { DOWNLOAD_BASE_URL } from '../../utils/constants';

import { Suspense } from 'react';
import PublishedDateSkeleton from '../../components/Skeletons/invoices/PublishedDateSkeleton';
import { useGetInvoice } from './useGetInvoice';
import { Skeleton } from '@mui/material';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' }, mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function InvoiceReadToolbar() {
  const navigate = useNavigate();
  const { invoice } = useGetInvoice();

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
            fontSize="larger"
            display="flex"
            gap={1}>
            Invoice #{' '}
            <Suspense fallback={<PublishedDateSkeleton />}>
              <PublishedDate />
            </Suspense>
          </Typography>

          <Typography
            variant="caption"
            textTransform="capitalize"
            fontSize="medium"
            fontWeight={600}>
            <Suspense fallback={<Skeleton variant='text' width={80}/>}>
              <Status />
            </Suspense>
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

function PublishedDate() {
  const { invoice } = useGetInvoice();

  const { number, year } = invoice;

  return (
    <>
      {number} / {year}
    </>
  );
}

function Status() {
  const { invoice } = useGetInvoice();

  const { status, paymentStatus } = invoice;

  return (
    <>
      {status} {paymentStatus}
    </>
  );
}
