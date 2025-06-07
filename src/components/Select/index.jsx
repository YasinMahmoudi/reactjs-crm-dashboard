import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import { countries } from '../../data/countries';
import { generateCamelCaseString } from '../../utils/strings';

Select.propTypes = {
  isEditing: PropTypes.bool,
  validation: PropTypes.object,
  errors: PropTypes.object,
  data: PropTypes.object,
  name: PropTypes.string,
  renderOption: PropTypes.func,
  renderInput: PropTypes.func,
};

function Select({
  isEditing,
  data = {},
  name = '',
  renderOption,
  renderInput,
}) {
  return (
    <Autocomplete
      id={generateCamelCaseString(name)}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      defaultValue={
        isEditing
          ? {
              label: data[name.toLowerCase()],
              code: '',
              phone: '',
            }
          : null
      }
      renderOption={renderOption}
      renderInput={renderInput}
    />
  );
}

export default Select;
