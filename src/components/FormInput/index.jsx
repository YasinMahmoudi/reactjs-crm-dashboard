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
  onBlur: PropTypes.func | null,
};

export default function FormInput({
  errors = {},
  inputName = 'from input',
  id = null,
  inputData = {},
  validation,
  disabled = false,
  onBlur = null,
}) {
  const inputNameCamelCase = generateCamelCaseString(inputName);
  const inputNameUpperCase = generateFirstWordCapitalize(inputName);

  function handleUpdate(e, field) {
    if (onBlur) {
      const { value } = e.target;

      const modifiedData = { ...inputData, [field]: value };

      onBlur(modifiedData);
    }
  }

  return (
    <TextField
      id={id}
      label={inputNameUpperCase}
      variant="outlined"
      fullWidth
      defaultValue={inputData[id]}
      {...validation}
      error={errors[id]?.type === 'required'}
      helperText={errors[id]?.message}
      disabled={disabled}
      // onBlur={(e) => handleUpdate(e, id)}
    />
  );
}
