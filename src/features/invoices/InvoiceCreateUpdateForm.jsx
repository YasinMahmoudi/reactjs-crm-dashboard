import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateInvoice } from './useCreateInvoice';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import FormInput from '../../components/FormInput';

import PlusIcon from '@mui/icons-material/Add';
import DropDown from '../../components/DropDown';
import EnhancedDatePicker from '../../components/EnhancedDatePicker';
import InvoiceItem from '../../components/InvoiceItem';
import InvoiceItemContainer from '../../components/InvoiceItemContainer';
import SearchableSelect from '../../components/SearchableClients';
import { useIsEditing } from '../../hooks/useIsEditing';
import { useGetInvoice } from './useGetInvoice';
import { CircularProgress } from '@mui/material';
import dayjs from 'dayjs';

const statusItems = [
  {
    label: 'Draft',
    value: 'draft',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'Sent',
    value: 'sent',
  },
];

export default function InvoiceCreateUpdateForm() {
  const { control, handleSubmit } = useForm();
  const [items, setItems] = useState([]);

  const { isEditing } = useIsEditing();

  const { createInvoice, isCreatingInvoice } = useCreateInvoice();
  const { invoice = {}, isLoadingInvoice } = useGetInvoice();

  function onSubmit(data) {
    createInvoice({
      data: {
        ...data,
        date: new Date(data.date.$d).toISOString(),
        expireDate: new Date(data.date.$d).toISOString(),
        year: data.year.$y,
      },
      items,
    });
  }

  const totalPrice = items.reduce((acc, cur) => acc + cur.totlaItemPrice, 0);

  if (isLoadingInvoice) return <CircularProgress />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 1, sm: 4, md: 6 }}
        mt={5}>
        <Grid size={{ xs: 2, sm: 2, md: 3 }}>
          <Controller
            name="client"
            control={control}
            rules={{
              required: 'Please add a client .',
            }}
            render={(field) => (
              <SearchableSelect
                field={field}
                defaultValue={invoice?.client?.name || null}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 1 }}>
          <Controller
            name="number"
            defaultValue={invoice.number}
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

        <Grid size={{ xs: 2, sm: 2, md: 1 }}>
          <Controller
            name="year"
            defaultValue=""
            control={control}
            rules={{
              required: 'Please select a year .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Year"
                view="year"
                views={['year']}
                openTo="year"
                defaultValue={dayjs(invoice.year) || ''}
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 1 }}>
          <Controller
            name="status"
            control={control}
            rules={{
              required: 'Please select a status',
            }}
            render={(field) => (
              <DropDown
                label="Status"
                id="status"
                items={statusItems}
                control={control}
                defaultValue={invoice.status || ''}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 1.5 }}>
          <Controller
            name="date"
            defaultValue=""
            control={control}
            rules={{
              required: 'Please select a date .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Date"
                defaultValue={dayjs(invoice.date) || ''}
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 1.5 }}>
          <Controller
            name="expireDate"
            defaultValue=""
            control={control}
            rules={{
              required: 'Please select an expire date .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Expire Date"
                defaultValue={dayjs(invoice.expiredDate) || ''}
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 3 }}>
          <Controller
            name="note"
            defaultValue={invoice.notes || ''}
            control={control}
            rules={{
              required: 'Please add a note .',
            }}
            render={(field) => (
              <FormInput
                label="Note"
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid
          size={{ xs: 6, sm: 6, md: 6 }}
          my={3}>
          <Divider sx={{ borderStyle: 'dashed' }} />
        </Grid>

        <InvoiceItemContainer>
          <InvoiceItem
            control={control}
            initial={true}
            items={items}
            onSetItems={setItems}
          />
        </InvoiceItemContainer>

        <Grid
          size={{ xs: 6, sm: 6, md: 6 }}
          my={3}>
          <Divider sx={{ borderStyle: 'dashed' }} />
        </Grid>

        <Grid
          container
          columns={{ md: 6 }}
          width="100%"
          justifyContent="space-between">
          <Grid size={{ xs: 2, sm: 2, md: 1 }}>
            <Button
              variant="contained"
              color="info"
              sx={{
                width: { md: '100%', letterSpacing: 2 },
                padding: '10px',
                gap: '10px',
              }}
              type="submit"
              loading={isCreatingInvoice}
              disabled={isCreatingInvoice}
              loadingPosition="start">
              <PlusIcon />
              <Typography variant="h6">
                {isEditing ? 'Update' : 'Save'}
              </Typography>
            </Button>
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 1.5 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ md: 2 }}>
              <Grid size={{ xs: 2, sm: 2, md: 2 }}>
                <Controller
                  name="subTotal"
                  defaultValue={invoice.subTotal || 0}
                  control={control}
                  render={(field) => (
                    <FormInput
                      label="Sub Total"
                      control={control}
                      readOnly
                      value={
                        totalPrice > 0 ? `$ ${totalPrice.toFixed(2)}` : `$ 1:00`
                      }
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 2, sm: 2, md: 2 }}>
                <Controller
                  name="tax"
                  defaultValue={0}
                  control={control}
                  render={(field) => (
                    <FormInput
                      label="Tax"
                      readOnly
                      control={control}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 2, sm: 2, md: 2 }}>
                <Controller
                  name="total"
                  defaultValue={invoice.total || 0}
                  control={control}
                  render={(field) => (
                    <FormInput
                      label="Total"
                      readOnly
                      control={control}
                      value={
                        totalPrice > 0 ? `$ ${totalPrice.toFixed(2)}` : `$ 1:00`
                      }
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
