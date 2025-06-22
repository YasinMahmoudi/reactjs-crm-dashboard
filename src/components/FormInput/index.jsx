import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

FormInput.propTypes = {
  label: PropTypes.string,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  control: PropTypes.object,
  fields: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default function FormInput({
  label = 'from input',
  readOnly = false,
  type = 'text',
  value = '',
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
      type={type}
      label={label}
      variant="outlined"
      fullWidth
      value={field.value || value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      name={field.name}
      inputRef={field.ref}
      error={error}
      helperText={error?.message}
      disabled={field.disabled || readOnly}
      aria-readonly={readOnly}
    />
  );
}
