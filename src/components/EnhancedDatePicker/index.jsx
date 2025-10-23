import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useController } from 'react-hook-form';



export default function EnhancedDatePicker({
  label = 'Your label ...',
  view = 'day',
  views = ['month' , 'day' , 'year'],
  openTo = '',
  control,
  defaultValue,
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
          defaultValue={defaultValue}
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
