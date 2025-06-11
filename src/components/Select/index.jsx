import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { countries } from '../../data/countries';

Select.propTypes = {
  isEditing: PropTypes.bool,
  renderOption: PropTypes.func,
  control: PropTypes.object,
};

function Select({ isEditing, renderOption, control, ...fields }) {
  const {
    field,
    fieldState: { error },
    formState: { isSubmitting },
  } = useController({
    name: fields.field.name,
    control,
    ...fields,
  });

  return (
    <Autocomplete
      id={field.name}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      defaultValue={
        isEditing
          ? {
              label: fields.defaultValue,
            }
          : null
      }
      onChange={(_event, data) => field.onChange(data?.label)}
      disabled={isSubmitting}
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
          onBlur={field.onBlur}
          name={field.name}
          inputRef={field.ref}
          error={error}
          helperText={error?.message}
        />
      )}
      renderOption={renderOption}
    />
  );
}

export default Select;
