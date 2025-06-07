import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import BorderBox from '../../components/BorderBox';
import FormInput from '../../components/FormInput';
import MainButton from '../../components/MainButton';
import MoveBackButton from '../../components/MoveBackButton';
import { Row } from '../../components/Row';
import { useGetAdmin } from './useGetAdmin';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UPLOAD_URL } from '../../utils/constants';
import { useAdminUpdateProfile } from './useAdminUpdateProfile';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const mainRowStyle = { flexDirection: { xs: 'column', sm: 'row' } };
const actionRowStyle = { gap: '10px', flexWrap: 'wrap' };

function Profile() {
  const { admin, isLoadingAdmin } = useGetAdmin();

  const { updateAdminProfile } = useAdminUpdateProfile();

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

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 1, sm: 4 }}
        mt={8}>
        <Grid
          size={{ xs: 4, sm: 4, md: 12 }}
          mb={8}>
          <Grid
            container
            alignItems="baseline"
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 1, sm: 4 }}>
            {isLoadingAdmin ? (
              <>
                <Skeleton
                  variant="circular"
                  width={100}
                  height={100}
                />
                <Skeleton
                  variant="rounded"
                  width={100}
                  height={30}
                />
              </>
            ) : (
              <>
                <Box
                  width={100}
                  height={100}
                  borderRadius={100}
                  bgcolor="tomato">
                  <img
                    src={`${UPLOAD_URL}/${admin.photo}`}
                    alt={`Admin Photo ${admin.name}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'inherit',
                    }}
                  />
                </Box>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  color="secondary"
                  size="small">
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) =>
                      updateAdminProfile({
                        ...admin,
                        photo: event.target.files[0],
                      })
                    }
                  />
                </Button>
              </>
            )}
          </Grid>
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {isLoadingAdmin ? (
            <Skeleton
              variant="rounded"
              height={56}
            />
          ) : (
            <FormInput
              inputName="Name"
              id="name"
              inputData={admin}
              errors={{}}
              validation={{}}
              onBlur={updateAdminProfile}
            />
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {isLoadingAdmin ? (
            <Skeleton
              variant="rounded"
              height={56}
            />
          ) : (
            <FormInput
              inputName="Last Name"
              id="surname"
              inputData={admin}
              errors={{}}
              validation={{}}
              onBlur={updateAdminProfile}
            />
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {isLoadingAdmin ? (
            <Skeleton
              variant="rounded"
              height={56}
            />
          ) : (
            <FormInput
              inputName="Email"
              id="email"
              inputData={admin}
              errors={{}}
              validation={{}}
              onBlur={updateAdminProfile}
            />
          )}
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {isLoadingAdmin ? (
            <Skeleton
              variant="rounded"
              height={56}
            />
          ) : (
            <FormInput
              inputName="Role"
              id="role"
              inputData={admin}
              errors={{}}
              validation={{}}
              disabled={true}
            />
          )}
        </Grid>
      </Grid>
    </BorderBox>
  );
}

Profile.propTypes = {};

export default Profile;
