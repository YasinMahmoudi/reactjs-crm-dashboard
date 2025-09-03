import Typography from '@mui/material/Typography';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import RefreshButton from '../../components/RefreshButton';
import { Row } from '../../components/Row';
import InvoiceSearch from './InvoiceSearch';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function InvoiceToolbar() {
  return (
    <Row sx={{ ...mainRowStyle, alignItems: { xs: 'stretch !important' } }}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        <InvoiceSearch />

        <RefreshButton />

        <MainButton to="create">
          <Typography>Add New Invoive</Typography>
        </MainButton>
      </Row>
    </Row>
  );
}
