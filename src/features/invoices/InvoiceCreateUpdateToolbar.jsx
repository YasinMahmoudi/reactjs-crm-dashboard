import Typography from '@mui/material/Typography';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';

import { useNavigate } from 'react-router';

import CloseOutlined from '@mui/icons-material/CloseOutlined';

import { Button } from '@mui/material';
import { useGetInvoice } from './useGetInvoice';
import { useIsEditing } from '../../hooks/useIsEditing';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' }, mb: 5 };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function InvoiceCreateUpdateToolbar() {
  const navigate = useNavigate();

  const { invoice } = useGetInvoice();

  const { isEditing } = useIsEditing();

  const pageTitle = isEditing
    ? `Update ${invoice.status}${invoice.paymentStatus} `
    : `New `;

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
            {pageTitle}
          </Typography>
        </Row>
      </Row>

      <Row sx={actionRowStyle}>
        <Button
          variant="outlined"
          color="error"
          onClick={() => navigate('/invoices')}>
          <CloseOutlined />
          Cancel
        </Button>
      </Row>
    </Row>
  );
}
