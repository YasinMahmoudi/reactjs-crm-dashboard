import { Button, Grid, Skeleton, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import DropDown from '../../components/DropDown';
import EnhancedDatePicker from '../../components/EnhancedDatePicker';
import FormInput from '../../components/FormInput';

import dayjs from 'dayjs';
import { Suspense } from 'react';
import { useGetAllPaymentModes } from '../payment-mode/useGetAllPaymentModes';
import { useGetPayment } from './useGetPayment';
import { useUpdatePayment } from './useUpdatePayment';

export default function PaymentUpdateForm() {
  const { control, handleSubmit } = useForm();

  const { payment } = useGetPayment();

  const { updatePayment, isUpdatingpayment } = useUpdatePayment();

  function onSubmit(data) {
    updatePayment(data);
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
          <Suspense fallback={<Skeleton variant='rounded' height={50}/>}>
            <PaymentModesDropDown
              control={control}
              defaultValue={payment.paymentMode._id}
            />
          </Suspense>
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Controller
            name="ref"
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
            loading={isUpdatingpayment}
            disabled={isUpdatingpayment}
            loadingPosition="start">
            <Typography variant="h6">Update</Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

function PaymentModesDropDown({ control, defaultValue }) {
  const { allPaymentModes } = useGetAllPaymentModes();

  const modifiedPaymentModes = allPaymentModes.map((mode) => {
    return { label: mode.name, value: mode._id };
  });

  return (
    <Controller
      name="paymentMode"
      defaultValue={defaultValue}
      control={control}
      rules={{
        required: 'Please slecet a payment mode.',
      }}
      render={(field) => (
        <DropDown
          label="Payment Mode"
          id="paymentMode"
          items={modifiedPaymentModes}
          control={control}
          {...field}
        />
      )}
    />
  );
}
