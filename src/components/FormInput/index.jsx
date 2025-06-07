import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import {
  generateCamelCaseString,
  generateFirstWordCapitalize,
} from '../../utils/strings';

FormInput.propTypes = {
  errors: PropTypes.object,
  inputName: PropTypes.string,
  inputData: PropTypes.object,
  validation: PropTypes.object,
  disabled: PropTypes.bool,
  id: PropTypes.string | null,
};

export default function FormInput({
  errors = {},
  inputName = 'from input',
  id = null,
  inputData = {},
  validation,
  disabled = false,
}) {
  const inputNameCamelCase = generateCamelCaseString(inputName);
  const inputNameUpperCase = generateFirstWordCapitalize(inputName);

  return (
    <TextField
      id={id}
      label={inputNameUpperCase}
      variant="outlined"
      fullWidth
      defaultValue={inputData[id]}
      {...validation}
      error={errors[inputNameCamelCase]?.type === 'required'}
      helperText={errors[inputNameCamelCase]?.message}
      disabled={disabled}
    />
  );
}
