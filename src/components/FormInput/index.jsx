import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

FormInput.propTypes = {
  label: PropTypes.string,
  control: PropTypes.object,
  fields: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default function FormInput({
  label = 'from input',
  control,
  ...fields
}) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: fields.field.name,
    control,
    ...fields,
  });

  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      defaultValue={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      name={field.name}
      inputRef={field.ref}
      error={error}
      helperText={error?.message}
      disabled={field.disabled}
    />
  );
}
