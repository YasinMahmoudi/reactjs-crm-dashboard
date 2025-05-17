/* eslint-disable react/prop-types */
import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material';
import EnhancedModal from '../../components/Modal';
import { countries } from '../../data/countries';
import { useForm } from 'react-hook-form';
import { useCreateCustomer } from './useCreateCustomer';

export default function CustomerCreateModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createCustomer, isCreatingCustomer } = useCreateCustomer();

  function onSubmit(data) {
    createCustomer(data);
  }

  return (
    <EnhancedModal title="Add new customer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 4 }}>
          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              {...register('name', {
                required: { value: true, message: 'Please add a name.' },
              })}
              error={errors.name?.type === 'required'}
              helperText={errors.name?.message}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              {...register('email', {
                required: {
                  value: true,
                  message: 'Please provide a valid email.',
                },
              })}
              error={errors.email?.type === 'required'}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              size=""
              fullWidth
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Please add a phone number.',
                },
              })}
              error={errors.phone?.type === 'required'}
              helperText={errors.phone?.message}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Autocomplete
              id="country"
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => {
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
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
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
                  error={errors.country?.type === 'required'}
                  helperText={errors.country?.message}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 4 }}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              fullWidth
              {...register('address', {
                required: {
                  value: true,
                  message: 'Please add an address.',
                },
              })}
              error={errors.address?.type === 'required'}
              helperText={errors.address?.message}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Button
              variant="contained"
              color="info"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
              type="submit"
              loading={isCreatingCustomer}
              disabled={isCreatingCustomer}
              loadingIndicator="Adding user ..."
              loadingPosition="start">
              Add User
            </Button>
          </Grid>
        </Grid>
      </form>
    </EnhancedModal>
  );
}
