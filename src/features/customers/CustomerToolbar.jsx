import Typography from '@mui/material/Typography';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import RefreshButton from '../../components/RefreshButton';
import { Row } from '../../components/Row';
import CustomerSearch from './CustomerSearch';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function CustomerToolbar() {
  return (
    <Row sx={mainRowStyle}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        <CustomerSearch />

        <RefreshButton />

        <MainButton to="/customers/create">
          <Typography>Add New Client</Typography>
        </MainButton>
      </Row>
    </Row>
  );
}
