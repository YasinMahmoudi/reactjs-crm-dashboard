import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { FormControlLabel, Switch } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import FormInput from '../../components/FormInput';
import EnhancedModal from '../../components/Modal';
import PaymentModeCreateForm from './PaymentModeCreateForm';
import { useGetPaymentMode } from './useGetPaymentMode';

export default function PaymentModeCreate() {
  const { handleSubmit, control } = useForm();

  const [searchParams] = useSearchParams();

  const { paymentMode, isLoadingPaymentMode } = useGetPaymentMode();

  const isEditing = searchParams.get('edit') === 'true';

  if (isEditing && isLoadingPaymentMode) return <CircularProgress />;

  return (
    <EnhancedModal title={isEditing ? `Edit Payment Mode` : 'Add Payment Mode'}>
      {isEditing && isLoadingPaymentMode ? (
        <CircularProgress />
      ) : (
        <PaymentModeCreateForm handleSubmit={handleSubmit}>
          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="name"
              defaultValue={paymentMode?.name}
              control={control}
              rules={{
                required: 'Please add a name .',
              }}
              render={(field) => (
                <FormInput
                  label="Name"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="description"
              defaultValue={paymentMode?.description}
              control={control}
              rules={{
                required: 'Please add a description .',
                maxLength: {
                  value: 100,
                  message: 'Description can not have more than 100 characters',
                },
              }}
              render={(field) => (
                <FormInput
                  label="Description"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="enabled"
              defaultValue={paymentMode?.enabled ?? true}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Switch
                      {...field}
                      checked={field.value}
                    />
                  }
                  label="Enabled"
                  labelPlacement="top"
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="isDefault"
              defaultValue={paymentMode?.isDefault}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Switch
                      {...field}
                      checked={field.value}
                    />
                  }
                  label="Default"
                  labelPlacement="top"
                />
              )}
            />
          </Grid>
        </PaymentModeCreateForm>
      )}
    </EnhancedModal>
  );
}
