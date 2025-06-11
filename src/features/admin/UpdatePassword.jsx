import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import FormInput from '../../components/FormInput';
import { Controller, useForm } from 'react-hook-form';

function UpdatePassword() {
  const { control, handleSubmit, getValues } = useForm();

  function onSubmit(data) {
    console.log(data);
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
            loading={false}
            disabled={false}
            loadingPosition="start">
            Update password
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UpdatePassword;
