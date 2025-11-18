import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { useController } from 'react-hook-form';

export default function FormInput({
  label = 'from input',
  readOnly = false,
  type = 'text',
  value = '',
  control,
  onChange,
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

  useEffect(
    function () {
      onChange?.();
    },
    [onChange]
  );

  function handleChange(value) {
    field.onChange(value);
  }

  return (
    <TextField
      type={type}
      label={label}
      variant="outlined"
      fullWidth
      value={field.value || value}
      onChange={handleChange}
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
