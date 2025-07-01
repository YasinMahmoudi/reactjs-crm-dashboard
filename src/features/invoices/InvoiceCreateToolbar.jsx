import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function InvoiceCreateToolbar() {




  return (
    <Row sx={mainRowStyle}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        <Typography
          sx={{
            bgcolor: blue[900],
            padding: '5px 20px',
            borderRadius: '3px',
            color: blue[100],
            fontSize:'18px'
          }}>
          Create New Invoic
        </Typography>
      </Row>
    </Row>
  );
}
