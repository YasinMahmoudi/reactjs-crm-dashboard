import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useSearchCustomers } from '../../features/customers/useSearchCustomers';
import { useIsEditing } from '../../hooks/useIsEditing';

SearchableClients.propTypes = {
  field: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default function SearchableClients({ field, defaultValue }) {
  const { searchCustomers = [], isSearchingCustomers } = useSearchCustomers({
    searchQuery: field.field.value,
  });

  const { isEditing } = useIsEditing();

  return (
    <Autocomplete
      sx={{ width: { xs: '100%', sm: 235 } }}
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
      onChange={(_event, data) => field.field.onChange(data?._id)}
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
