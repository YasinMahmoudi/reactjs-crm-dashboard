import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import FormInput from '../../components/FormInput';
import EnhancedModal from '../../components/Modal';
import Select from '../../components/Select';
import CustomerCreateForm from './CustomerCreateForm';
import { useGetCustomer } from './useGetCustomer';

export default function CustomerCreateModal() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [searchParams] = useSearchParams();

  const { customer, isLoadingCustomer } = useGetCustomer();

  const isEditing = searchParams.get('edit') === 'true';



  if (isEditing && isLoadingCustomer) return <CircularProgress />;

  return (
    <EnhancedModal title={isEditing ? `Edit customer` : 'Add new customer'}>
      {isEditing && isLoadingCustomer ? (
        <CircularProgress />
      ) : (
        <CustomerCreateForm handleSubmit={handleSubmit}>
          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <FormInput
              inputName="Name"
              inputData={customer}
              errors={errors}
              validation={{
                ...register('name', {
                  required: { value: true, message: 'Please add a name.' },
                }),
              }}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <FormInput
              inputName="Email"
              inputData={customer}
              errors={errors}
              validation={{
                ...register('email', {
                  required: {
                    value: true,
                    message: 'Please provide a valid email.',
                  },
                }),
              }}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <FormInput
              inputName="Phone"
              inputData={customer}
              errors={errors}
              validation={{
                ...register('phone', {
                  required: {
                    value: true,
                    message: 'Please add a phone number.',
                  },
                }),
              }}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Select
              name="Country"
              data={customer}
              isEditing={isEditing}
              errors={errors}
              renderOption={(props, option) => {
                // eslint-disable-next-line react/prop-types
                const { key, ...optionProps } = props;

                return (
                  <Box
                    key={key}
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...optionProps}>
                    <img
                      loading="lazy"
                      width="20"
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt={`Country ${option.label}`}
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`Choose a country`}
                  slotProps={{
                    htmlInput: {
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    },
                  }}
                  {...register('country', {
                    required: {
                      value: true,
                      message: 'Please select a country .',
                    },
                  })}
                  error={errors?.country?.type === 'required'}
                  helperText={errors?.country?.message}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 4 }}>
            <FormInput
              inputName="Address"
              inputData={customer}
              errors={errors}
              validation={{
                ...register('address', {
                  required: {
                    value: true,
                    message: 'Please add an address.',
                  },
                }),
              }}
            />
          </Grid>

        </CustomerCreateForm>
      )}
    </EnhancedModal>
  );
}
