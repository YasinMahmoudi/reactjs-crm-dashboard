import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useSearchCustomers } from '../../features/customers/useSearchCustomers';

SearchableClients.propTypes = {
  field: PropTypes.object,
};

export default function SearchableClients({ field }) {
  const { searchCustomers = [], isSearchingCustomers } = useSearchCustomers({
    searchQuery: field.field.value,
  });

  return (
    <Autocomplete
      loading={isSearchingCustomers}
      id="client"
      disablePortal
      options={searchCustomers}
      getOptionLabel={(option) => option.name}
      fullWidth
      onChange={(_event, data) => field.field.onChange(data?.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Client"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: 'off', // disable autocomplete and autofill
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
