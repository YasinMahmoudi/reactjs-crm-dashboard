import { Button, Grid, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import EnhancedDatePicker from '../../components/EnhancedDatePicker';
import FormInput from '../../components/FormInput';

import dayjs from 'dayjs';
import { useIsEditing } from '../../hooks/useIsEditing';
import { PaymentModesDropDown } from '../payments/PaymentUpdateForm';
import { useCreateInvoicepayment } from './useCreateInvoicePayment';
import { useGetInvoice } from './useGetInvoice';

export default function InvoicePaymentUpdateForm() {
  const { control, handleSubmit } = useForm();

  const {
    invoice: { client },
  } = useGetInvoice();

  const { readId } = useIsEditing();

  const { createInvoicePayment, isCreatingInvoicePayment } =
    useCreateInvoicepayment();

  function onSubmit(data) {
    const newData = { ...data, invoice: readId, client: client._id };

    createInvoicePayment(newData);
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
            defaultValue={1}
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
            defaultValue={dayjs()}
            control={control}
            rules={{
              required: 'Please select a date .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Date"
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
            defaultValue={null}
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
          <PaymentModesDropDown
            defaultValue={''}
            control={control}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Controller
            name="ref"
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

        <Grid size={{ xs: 2, sm: 2, md: 6 }}>
          <Button
            variant="contained"
            color="info"
            sx={{
              width: { letterSpacing: 2 },
            }}
            type="submit"
            loading={isCreatingInvoicePayment}
            disabled={isCreatingInvoicePayment}
            loadingPosition="start">
            <Typography variant="h6"> Record Payment </Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
