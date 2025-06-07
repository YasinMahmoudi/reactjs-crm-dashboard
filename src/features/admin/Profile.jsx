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
import { styled } from '@mui/material/styles';

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

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          {isLoadingAdmin ? (
            <Skeleton
              variant="rounded"
              height={56}
            />
          ) : (
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              color="secondary">
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          )}
        </Grid>
      </Grid>
    </BorderBox>
  );
}

Profile.propTypes = {};

export default Profile;
