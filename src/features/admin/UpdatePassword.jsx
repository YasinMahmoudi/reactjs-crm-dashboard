import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import FormInput from '../../components/FormInput';

function UpdatePassword() {
  return (
    <form>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 1, sm: 4 }}
        mt={8}>
        <Grid size={{ xs: 12, sm: 12, md: 2 }}>
          <FormInput
            inputName="New password"
            id="newPassword"
            errors={{}}
            validation={{}}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 2 }}>
          <FormInput
            inputName="Confirm password"
            id="confirmpassword"
            errors={{}}
            validation={{}}
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
