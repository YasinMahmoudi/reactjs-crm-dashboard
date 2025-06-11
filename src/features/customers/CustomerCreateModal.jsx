import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';
import FormInput from '../../components/FormInput';
import EnhancedModal from '../../components/Modal';
import Select from '../../components/Select';
import CustomerCreateForm from './CustomerCreateForm';
import { useGetCustomer } from './useGetCustomer';

export default function CustomerCreateModal() {
  const { handleSubmit, control } = useForm();

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
            <Controller
              name="name"
              defaultValue={customer?.name}
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
              name="email"
              defaultValue={customer?.email}
              control={control}
              rules={{
                required: 'Please provide a valid email.',
              }}
              render={(field) => (
                <FormInput
                  label="Email"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              name="phone"
              defaultValue={customer?.phone}
              control={control}
              rules={{
                required: 'Please add a phone number.',
              }}
              render={(field) => (
                <FormInput
                  label="Phone"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Controller
              control={control}
              name="country"
              defaultValue={customer?.country}
              rules={{
                required: 'Please select a country .',
              }}
              render={(field) => (
                <Select
                  isEditing={isEditing}
                  control={control}
                  defaultValue={customer?.country}
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
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 4 }}>
            <Controller
              name="address"
              defaultValue={customer?.address}
              control={control}
              rules={{
                required: 'Please add an address.',
              }}
              render={(field) => (
                <FormInput
                  label="Address"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>
        </CustomerCreateForm>
      )}
    </EnhancedModal>
  );
}
