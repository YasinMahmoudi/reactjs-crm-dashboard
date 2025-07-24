import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import DropDown from '../../components/DropDown';
import EnhancedDatePicker from '../../components/EnhancedDatePicker';
import FormInput from '../../components/FormInput';

import dayjs from 'dayjs';
import { useGetPayment } from './useGetPayment';

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

  const { payment, isLoadingPayment } = useGetPayment();

  function onSubmit(data) {
    console.log(data);
  }

  if (isLoadingPayment) return <CircularProgress />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 1, sm: 4, md: 6 }}>
        <Grid size={{ xs: 2, sm: 2, md: 3 }}>
          <Controller
            name="number"
            defaultValue={payment?.number}
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
            defaultValue={dayjs(payment.date)}
            control={control}
            rules={{
              required: 'Please select a date .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Date"
                defaultValue={dayjs(payment.date)}
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Controller
            name="amount"
            defaultValue={payment.amount}
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
            defaultValue={payment.ref}
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
            defaultValue={payment.description}
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

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Button
            variant="contained"
            color="info"
            sx={{
              width: { letterSpacing: 2 },
            }}
            type="submit"
            loading={false}
            disabled={false}
            loadingPosition="start">
            <Typography variant="h6">Update</Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
