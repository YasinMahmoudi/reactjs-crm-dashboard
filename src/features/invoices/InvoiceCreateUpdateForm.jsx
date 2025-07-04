import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateInvoice } from './useCreateInvoice';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import FormInput from '../../components/FormInput';

import PlusIcon from '@mui/icons-material/Add';
import { CircularProgress } from '@mui/material';
import dayjs from 'dayjs';
import DropDown from '../../components/DropDown';
import EnhancedDatePicker from '../../components/EnhancedDatePicker';
import InvoiceItem from '../../components/InvoiceItem';
import InvoiceItemContainer from '../../components/InvoiceItemContainer';
import SearchableSelect from '../../components/SearchableClients';
import { useIsEditing } from '../../hooks/useIsEditing';
import { useGetInvoice } from './useGetInvoice';
import { useUpdateInvoice } from './useUpdateInvoice';

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

const initialItems = {
  id: crypto.randomUUID(),
  name: '',
  description: '',
  qty: 1,
  price: 1,
  totlaItemPrice: 1,
};

export default function InvoiceCreateUpdateForm() {
  const { control, handleSubmit } = useForm();
  const [items, setItems] = useState([]);

  const { invoice, isLoadingInvoice } = useGetInvoice();
  const { createInvoice, isCreatingInvoice } = useCreateInvoice();
  const { updateInvoice, isUpdatingInvoice } = useUpdateInvoice();

  const { isEditing } = useIsEditing();

  useEffect(
    function () {
      if (isLoadingInvoice) return;

      const fetchItems = invoice.items?.map((item, index) => ({
        id: index,
        name: item.itemName,
        qty: item.quantity,
        price: item.price,
        totlaItemPrice: item.total,
        description: item.description,
      }));

      fetchItems ? setItems(fetchItems) : setItems([initialItems]);
    },
    [invoice.items, isLoadingInvoice]
  );

  function onSubmit(data) {
    isEditing
      ? updateInvoice({
          data: {
            ...data,
            date: new Date(data.date.$d).toISOString(),
            expireDate: new Date(data.date.$d).toISOString(),
            year: data.year.$y,
          },
          items,
        })
      : createInvoice({
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
            defaultValue={invoice?.client?._id || null}
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
            defaultValue={dayjs().year(invoice.year) || dayjs().year()}
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
                defaultValue={dayjs().year(invoice?.year || dayjs().year())}
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
            defaultValue={invoice.status || ''}
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
            defaultValue={dayjs(invoice.date) || dayjs()}
            control={control}
            rules={{
              required: 'Please select a date .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Date"
                defaultValue={dayjs(invoice.date) || dayjs()}
                control={control}
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 1.5 }}>
          <Controller
            name="expireDate"
            defaultValue={dayjs(invoice.expiredDate) || dayjs()}
            control={control}
            rules={{
              required: 'Please select an expire date .',
            }}
            render={(field) => (
              <EnhancedDatePicker
                label="Expire Date"
                defaultValue={dayjs(invoice.expiredDate) || dayjs()}
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

        <InvoiceItemContainer onAddItems={setItems}>
          {items.map((item, i) => (
            <InvoiceItem
              key={item.id}
              item={item}
              control={control}
              initial={i === 0}
              items={items}
              onSetItems={setItems}
            />
          ))}
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
              loading={isCreatingInvoice || isUpdatingInvoice}
              disabled={isCreatingInvoice || isUpdatingInvoice}
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
                  defaultValue={totalPrice || 0}
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
                  defaultValue={totalPrice || 0}
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
