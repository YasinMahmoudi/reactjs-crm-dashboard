import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { FormControlLabel, Switch } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import FormInput from '../../components/FormInput';
import EnhancedModal from '../../components/Modal';
import TaxCreateForm from './TaxCreateForm';
import { useGetTax } from './useGetTax';

export default function TaxCreate() {
  const { handleSubmit, control } = useForm();

  const [searchParams] = useSearchParams();

  const { tax, isLoadingTax } = useGetTax();

  const isEditing = searchParams.get('edit') === 'true';

  if (isEditing && isLoadingTax) return <CircularProgress />;

  return (
    <EnhancedModal title={isEditing ? `Edit Tax` : 'Add New Tax'}>
      {isEditing && isLoadingTax ? (
        <CircularProgress />
      ) : (
        <TaxCreateForm handleSubmit={handleSubmit}>
          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="taxName"
              defaultValue={tax?.taxName}
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
              name="taxValue"
              defaultValue={tax?.taxValue}
              control={control}
              rules={{
                required: 'Tax need a value.',
              }}
              render={(field) => (
                <FormInput
                  label="Value"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="enabled"
              defaultValue={tax?.enabled ?? true}
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
              defaultValue={tax?.isDefault}
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
        </TaxCreateForm>
      )}
    </EnhancedModal>
  );
}
