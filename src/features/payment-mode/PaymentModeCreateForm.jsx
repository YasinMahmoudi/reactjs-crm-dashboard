import { Button, Grid } from '@mui/material';
import { useSearchParams } from 'react-router';
import { useCreatePaymentMode } from './useCreatePaymentMode';
import { useUpdatePaymentMode } from './useUpdatePaymentMode';

function PaymentModeCreateForm({ children, handleSubmit }) {
  const [searchParams] = useSearchParams();

  const { createPaymentMode, isCreatingPaymentMode } = useCreatePaymentMode();
  const { updatePaymentMode, isUpdatingPaymentMode } = useUpdatePaymentMode();

  const isEditing = searchParams.get('edit') === 'true';

  function onSubmit(data) {
    !isEditing ? createPaymentMode(data) : updatePaymentMode(data);
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
            loading={isCreatingPaymentMode || isUpdatingPaymentMode}
            disabled={isCreatingPaymentMode || isUpdatingPaymentMode}
            loadingPosition="start">
            {isEditing ? 'Update Payment Mode' : 'Add Payment Mode'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default PaymentModeCreateForm;
