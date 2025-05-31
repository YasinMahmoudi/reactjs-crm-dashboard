import Typography from '@mui/material/Typography';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import RefreshButton from '../../components/RefreshButton';
import { Row } from '../../components/Row';
import CustomerSearch from './CustomerSearch';

export default function CustomerToolbar() {
  return (
    <Row sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
      <MoveBackButton />

      <Row sx={{ gap: '10px', flexWrap: 'wrap' }}>
        <CustomerSearch />

        <RefreshButton />

        <MainButton to="/customers/create">
          <Typography>Add New Client</Typography>
        </MainButton>
      </Row>
    </Row>
  );
}
