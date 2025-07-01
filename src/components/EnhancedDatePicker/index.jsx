import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

EnhancedDatePicker.propTypes = {
  label: PropTypes.string,
  view: PropTypes.string,
  views: PropTypes.array,
  openTo: PropTypes.string,
  control: PropTypes.object,
  fields: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default function EnhancedDatePicker({
  label = 'Your label ...',
  view = 'day',
  views = ['month' , 'day' , 'year'],
  openTo = '',
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker']}
        sx={{ paddingTop: 0, overflow: 'visible' }}>
        <DatePicker
          sx={{ minWidth: '1rem !important', width: '100%' }}
          label={label}
          openTo={openTo}
          view={view}
          views={views}
          onChange={field.onChange}
          onBlur={field.onBlur}
          inputRef={field.ref}
          slotProps={{
            textField: {
              error: error,
              helperText: error?.message,
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
