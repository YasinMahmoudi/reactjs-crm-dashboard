import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';



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
