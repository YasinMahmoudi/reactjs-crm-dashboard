import { Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router';
import { useCreateCustomer } from './useCreateCustomer';
import { useUpdateCustomer } from './useUpdateCustomer';

CustomerCreateForm.propTypes = {
  children: PropTypes.object,
  handleSubmit: PropTypes.func,
};

function CustomerCreateForm({ children, handleSubmit }) {
  const [searchParams] = useSearchParams();

  const { createCustomer, isCreatingCustomer } = useCreateCustomer();
  const { updateCustomer, isUpdatingCustomer } = useUpdateCustomer();

  const isEditing = searchParams.get('edit') === 'true';

  function onSubmit(data) {
    !isEditing ? createCustomer(data) : updateCustomer(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, sm: 4 }}>
        {children}

        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <Button
            variant="contained"
            color="info"
            sx={{ width: { xs: '100%', sm: 'auto', letterSpacing: 2 } }}
            type="submit"
            loading={isCreatingCustomer || isUpdatingCustomer}
            disabled={isCreatingCustomer || isUpdatingCustomer}
            loadingPosition="start">
            {isEditing ? 'Update user' : 'Add User'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CustomerCreateForm;
