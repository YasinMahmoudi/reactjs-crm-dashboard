import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { generateCamelCaseString, generateFirstWordCapitalize } from '../../utils/strings';

FormInput.propTypes = {
  errors: PropTypes.object,
  inputName: PropTypes.string,
  inputData: PropTypes.object,
  validation: PropTypes.object,
};

export default function FormInput({
  errors = {},
  inputName = 'from input',
  inputData = {},
  validation,
}) {


  const inputNameCamelCase = generateCamelCaseString(inputName);
  const inputNameUpperCase = generateFirstWordCapitalize(inputName);


  return (
    <TextField
      id={inputNameCamelCase}
      label={inputNameUpperCase}
      variant="outlined"
      fullWidth
      defaultValue={inputData[inputNameCamelCase] ?? ''}
      {...validation}
      error={errors[inputNameCamelCase]?.type === 'required'}
      helperText={errors[inputNameCamelCase]?.message}
    />
  );
}
