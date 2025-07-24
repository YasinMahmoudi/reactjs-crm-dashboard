import { Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import EnhancedDatePicker from '../../components/EnhancedDatePicker';
import DropDown from '../../components/DropDown';

import dayjs from 'dayjs';

const statusItems = [
  {
    label: 'Test',
    value: 'test',
  },
  {
    label: 'Test 2',
    value: 'test2',
  },
  {
    label: 'Test 3',
    value: 'test3',
  },
];

export default function PaymentUpdateForm() {
  const { control, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 1, sm: 4, md: 6 }}>
        <Grid size={{ xs: 2, sm: 2, md: 3 }}>
          <Controller
            name="number"
            defaultValue={''}
            control={control}
            rules={{
              required: 'Please add a number .',
            }}
            render={(field) => (
              <FormInput
                label="Number"
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 3 }}>
          <Controller
            name="date"
            // defaultValue={dayjs(invoice.date) || dayjs()}
            defaultValue={dayjs()}
            control={control}
            rules={{
              required: 'Please select a date .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Date"
                // defaultValue={dayjs(invoice.date) || dayjs()}
                defaultValue={dayjs()}
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Controller
            name="amount"
            defaultValue={''}
            control={control}
            rules={{
              required: 'Please add a amount .',
            }}
            render={(field) => (
              <FormInput
                label="Amount"
                type="number"
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Controller
            name="paymentMode"
            defaultValue={''}
            control={control}
            rules={{
              required: 'Please slecet a payment mode.',
            }}
            render={(field) => (
              <DropDown
                label="Payment Mode"
                id="paymentMode"
                items={statusItems}
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Controller
            name="reference"
            defaultValue={''}
            control={control}
            render={(field) => (
              <FormInput
                label="Reference"
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Controller
            name="description"
            defaultValue={''}
            control={control}
            render={(field) => (
              <FormInput
                label="Description"
                control={control}
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </form>
  );
}
