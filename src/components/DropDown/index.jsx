import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

DropDown.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  control: PropTypes.object,
  items: PropTypes.array,
  fields: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default function DropDown({
  label = 'Dropdown label ',
  id,
  items,
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
    <FormControl
      fullWidth
      error={error}>
      <InputLabel id={id}> {label} </InputLabel>
      <Select
        aria-describedby={`${label.toLocaleLowerCase()}Error`}
        labelId={id}
        id={id}
        label={label}
        onChange={(event) => field.onChange(event.target.value)}
        inputRef={field.ref}
        onBlur={field.onBlur}
        name={field.name}
        value={field.value}
        disabled={fields.field.disabled}>
        {items.map((item, i) => (
          <MenuItem
            key={i}
            value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id={`${label.toLocaleLowerCase()}Error`}>
        {error?.message}
      </FormHelperText>
    </FormControl>
  );
}
