import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'react-router';
import { useSearchCustomers } from '../../features/customers/useSearchCustomers';
import { useIsEditing } from '../../hooks/useIsEditing';

export default function SearchableClients({ field, defaultValue , style={} }) {
  const { searchCustomers = [], isSearchingCustomers } = useSearchCustomers({
    searchQuery: field.field.value,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const { isEditing } = useIsEditing();

  function handleChange(_event, data) {
    field.field.onChange(data?._id);
    searchParams.set('client-id', data?._id);

    if (searchParams.has('client-id') && !data) {
      searchParams.delete('client-id');
      setSearchParams(searchParams);

      return;
    }

    setSearchParams(searchParams);
  }

  return (
    <Autocomplete
      sx={{ width: { xs: '100%', sm: 235 } }}
      style={style}
      loading={isSearchingCustomers}
      id="client"
      disablePortal
      defaultValue={
        isEditing
          ? {
              name: defaultValue,
            }
          : null
      }
      options={searchCustomers}
      getOptionLabel={(option) => option.name}
      fullWidth
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Client"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'off', // disable autocomplete and autofill
              style: {
                paddingBlock: '.2rem',
                lineHeight: '1',
              },
            },
          }}
          onChange={(event) => field.field.onChange(event.target.value)}
          onBlur={field.field.onBlur}
          name={field.field.name}
          inputRef={field.field.ref}
          error={field.fieldState.error}
          helperText={field.fieldState.error?.message}
        />
      )}
    />
  );
}
