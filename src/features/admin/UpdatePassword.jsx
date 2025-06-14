import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Controller, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import { useAdminUpdatePassword } from './useAdminUpdatePassword';

function UpdatePassword() {
  const { control, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      password: '',
      passwordCheck: '',
    },
  });

  const { updateAdminPassword, isUpdatingAdminPassword } =
    useAdminUpdatePassword();

  function onSubmit(data) {
    updateAdminPassword(data, {
      onSuccess: () => {
        reset();
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
        <Grid size={{ xs: 12, sm: 12, md: 2 }}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 8,
                message:
                  'The password needs to be at least 8 characters long. ',
              },
            }}
            render={(field) => (
              <FormInput
                label="New password"
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 2 }}>
          <Controller
            name="passwordCheck"
            control={control}
            rules={{
              required: 'This field is required',
              validate: (value) =>
                getValues().password === value || 'Passwords need to match',
            }}
            render={(field) => (
              <FormInput
                label="Confirm password"
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <Button
            variant="contained"
            color="info"
            sx={{ width: { xs: '100%', sm: 'auto', letterSpacing: 2 } }}
            type="submit"
            loading={isUpdatingAdminPassword}
            disabled={isUpdatingAdminPassword}
            loadingPosition="start">
            Update password
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UpdatePassword;
