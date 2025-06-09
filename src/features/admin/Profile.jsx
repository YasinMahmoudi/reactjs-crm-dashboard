import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import BorderBox from '../../components/BorderBox';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';
import { useGetAdmin } from './useGetAdmin';

import UpdateProfileForm from './UpdateProfileForm';

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

function Profile() {
  const { isLoadingAdmin } = useGetAdmin();

  return (
    <BorderBox>
      <Row sx={mainRowStyle}>
        <MoveBackButton />

        {isLoadingAdmin ? (
          <Skeleton
            variant="rounded"
            width={150}
            height={50}
          />
        ) : (
          <Row sx={actionRowStyle}>
            <MainButton to="/customers/create">
              <Typography> Update password </Typography>
            </MainButton>
          </Row>
        )}
      </Row>

      <UpdateProfileForm />
    </BorderBox>
  );
}

Profile.propTypes = {};

export default Profile;
