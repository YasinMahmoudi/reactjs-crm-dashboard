import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import { useGetAdmin } from './useGetAdmin';
import { useState } from 'react';
import { useAdminUpdateProfile } from './useAdminUpdateProfile';
import { UPLOAD_URL } from '../../utils/constants';
import FileUpload from '../../components/FileUpload';

export default function UpdateProfileForm() {
  const [avatar, setAvatar] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { admin, isLoadingAdmin } = useGetAdmin();

  const { updateAdminProfile, isUpdatingAdminProfile } =
    useAdminUpdateProfile();

  function onSubmit(data) {
    const updatedData = avatar ? { ...data, photo: avatar } : data;
    updateAdminProfile(updatedData, {
      onSuccess() {
        setAvatar(null);
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                    src={
                      avatar
                        ? URL.createObjectURL(avatar)
                        : `${UPLOAD_URL}/${admin.photo}`
                    }
                    alt={`Admin Photo ${admin.name}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 'inherit',
                    }}
                  />
                  {avatar && (
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => setAvatar(null)}>
                      <CloseIcon fontSize="small" />
                    </Button>
                  )}
                </Box>

                <FileUpload onGetFile={setAvatar} />
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
              inputName="First Name"
              id="name"
              inputData={admin}
              errors={errors}
              validation={{
                ...register('name', {
                  required: {
                    value: true,
                    message: 'Please add a first name.',
                  },
                }),
              }}
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
              errors={errors}
              validation={{
                ...register('surname', {
                  required: {
                    value: true,
                    message: 'Please add a last name.',
                  },
                }),
              }}
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
              errors={errors}
              validation={{
                ...register('email', {
                  required: {
                    value: true,
                    message: 'Please add a valid email.',
                  },
                }),
              }}
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
          <Button
            variant="contained"
            color="info"
            sx={{ width: { xs: '100%', sm: 'auto', letterSpacing: 2 } }}
            type="submit"
            loading={isUpdatingAdminProfile}
            disabled={isUpdatingAdminProfile}
            loadingPosition="start">
            Update profile
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
