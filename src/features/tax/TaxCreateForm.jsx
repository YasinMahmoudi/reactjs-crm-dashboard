import { Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router';
import { useCreateTax } from './useCreateTax';
import { useUpdateTax } from './useUpdateTax';

TaxCreateForm.propTypes = {
  children: PropTypes.object,
  handleSubmit: PropTypes.func,
};

function TaxCreateForm({ children, handleSubmit }) {
  const [searchParams] = useSearchParams();

  const { createTax, isCreatingTax } = useCreateTax();
  const { updateTax, isUpdatingTax } = useUpdateTax();

  const isEditing = searchParams.get('edit') === 'true';

  function onSubmit(data) {
    !isEditing ? createTax(data) : updateTax(data);
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
            loading={isCreatingTax || isUpdatingTax}
            disabled={isCreatingTax || isUpdatingTax}
            loadingPosition="start">
            {isEditing ? 'Update tax' : 'Add tax'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaxCreateForm;
