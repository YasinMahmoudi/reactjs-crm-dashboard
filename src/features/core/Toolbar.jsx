import { Typography } from '@mui/material';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import RefreshButton from '../../components/RefreshButton';
import { Row } from '../../components/Row';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function Toolbar({ buttonLabel = '', to, children }) {
  return (
    <Row sx={mainRowStyle}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        {children}

        <RefreshButton />

        {buttonLabel && (
          <MainButton to={to}>
            <Typography>{buttonLabel}</Typography>
          </MainButton>
        )}
      </Row>
    </Row>
  );
}
