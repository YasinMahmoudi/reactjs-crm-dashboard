import { Typography } from '@mui/material';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import RefreshButton from '../../components/RefreshButton';
import { Row } from '../../components/Row';
import PaymentModeSearch from './PaymentModeSearch';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function PaymentModeToolbar() {
  return (
    <Row sx={mainRowStyle}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        <PaymentModeSearch />

        <RefreshButton />

        <MainButton to="create">
          <Typography>Add New Payment Mode</Typography>
        </MainButton>
      </Row>
    </Row>
  );
}
