import { Typography } from '@mui/material';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import RefreshButton from '../../components/RefreshButton';
import { Row } from '../../components/Row';
import PropTypes from 'prop-types';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function Toolbar({ buttonLabel, children }) {
  return (
    <Row sx={mainRowStyle}>
      <MoveBackButton />

      <Row sx={actionRowStyle}>
        {children}

        <RefreshButton />

        <MainButton to="/customers/create">
          <Typography>{buttonLabel}</Typography>
        </MainButton>
      </Row>
    </Row>
  );
}

Toolbar.propTypes = {
  buttonLabel: PropTypes.string,
  children: PropTypes.object,
};
