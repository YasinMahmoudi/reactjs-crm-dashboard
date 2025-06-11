import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import { useGetAdmin } from './useGetAdmin';
import { useState } from 'react';
import { useAdminUpdateProfile } from './useAdminUpdateProfile';
import { UPLOAD_URL } from '../../utils/constants';
import FileUpload from '../../components/FileUpload';

export default function UpdateProfileForm() {
  const [avatar, setAvatar] = useState(null);

  const { control, handleSubmit } = useForm();

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
            <Controller
              name="name"
              control={control}
              defaultValue={admin.name}
              rules={{
                required: 'This field is required',
              }}
              render={(field) => (
                <FormInput
                  label="Name"
                  control={control}
                  {...field}
                />
              )}
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
            <Controller
              name="surname"
              defaultValue={admin.surname}
              control={control}
              rules={{
                required: 'This field is required',
              }}
              render={(field) => (
                <FormInput
                  label="Last name"
                  control={control}
                  {...field}
                />
              )}
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
            <Controller
              name="email"
              defaultValue={admin.email}
              control={control}
              rules={{
                required: 'This field is required',
              }}
              render={(field) => (
                <FormInput
                  label="Email"
                  control={control}
                  {...field}
                />
              )}
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
            <Controller
              name="role"
              control={control}
              defaultValue={admin.role}
              render={(field) => (
                <FormInput
                  label="Role"
                  control={control}
                  disabled={true}
                  {...field}
                />
              )}
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
