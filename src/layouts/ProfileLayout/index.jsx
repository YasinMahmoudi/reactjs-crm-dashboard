import Typography from '@mui/material/Typography';

import { Outlet } from 'react-router';
import BorderBox from '../../components/BorderBox';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';


const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

export default function BoxLayout() {
  return (
    <BorderBox>
      <Row sx={mainRowStyle}>
        <MoveBackButton />

        <Row sx={actionRowStyle}>
          <MainButton to="/update-password">
            <Typography> Update password </Typography>
          </MainButton>
        </Row>
      </Row>

      <Outlet />
    </BorderBox>
  );
}
