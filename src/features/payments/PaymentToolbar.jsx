import MoveBackButton from '../../components/MoveBackButton';
import RefreshButton from '../../components/RefreshButton';
import { Row } from '../../components/Row';
import PaymentSearch from './PaymentSearch';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function PaymentToolbar() {
  return (
    <Row sx={mainRowStyle}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        <PaymentSearch />

        <RefreshButton />


      </Row>
    </Row>
  );
}
