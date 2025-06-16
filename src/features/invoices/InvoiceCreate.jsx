import { Controller, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import InvoiceCreateToolbar from './InvoiceCreateToolbar';
import { Button, Grid } from '@mui/material';

export default function InvoiceCreate() {
  const { control, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <InvoiceCreateToolbar />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 4 }}
          mt={5}>
          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="client"
              defaultValue=""
              control={control}
              rules={{
                required: 'Please add a client .',
              }}
              render={(field) => (
                <FormInput
                  label="Client"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="number"
              defaultValue=""
              control={control}
              rules={{
                required: 'Please add a number .',
              }}
              render={(field) => (
                <FormInput
                  label="Number"
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
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
