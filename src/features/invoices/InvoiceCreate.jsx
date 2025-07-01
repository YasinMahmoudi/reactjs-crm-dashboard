import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import { Controller, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import InvoiceCreateToolbar from './InvoiceCreateToolbar';

import PlusIcon from '@mui/icons-material/Add';
import { FormHelperText } from '@mui/material';
import { useState } from 'react';
import InvoiceItem from '../../components/InvoiceItem';
import InvoiceItemContainer from '../../components/InvoiceItemContainer';
import SearchableSelect from '../../components/SearchableClients';
import { useCreateInvoice } from './useCreateInvoice';

export default function InvoiceCreate() {
  const { control, handleSubmit } = useForm();

  const [items, setItems] = useState([]);

  const { createInvoice, isCreatingInvoice } = useCreateInvoice();

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

  return (
    <>
      <InvoiceCreateToolbar />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 4, md: 6 }}
          mt={5}>
          <Grid size={{ xs: 2, sm: 2, md: 3 }}>
            <Controller
              name="client"
              defaultValue=""
              control={control}
              rules={{
                required: 'Please add a client .',
              }}
              render={(field) => <SearchableSelect field={field} />}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 1 }}>
            <Controller
              name="number"
              defaultValue=""
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={['DatePicker']}
                    sx={{ paddingTop: 0, overflow: 'visible' }}>
                    <DatePicker
                      sx={{ minWidth: '1rem !important', width: '100%' }}
                      label="Year"
                      openTo="year"
                      view="year"
                      views={['year']}
                      onChange={field.field.onChange}
                      onBlur={field.field.onBlur}
                      inputRef={field.field.ref}
                      slotProps={{
                        textField: {
                          error: field.fieldState.error,
                          helperText: field.fieldState.error?.message,
                        },
                      }}
                      control={control}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 1 }}>
            <Controller
              name="status"
              defaultValue=""
              control={control}
              rules={{
                required: 'Please select a status',
              }}
              render={(field) => (
                <FormControl
                  fullWidth
                  onBlur={field.field.onBlur}
                  name={field.field.name}
                  error={field.fieldState.error}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    aria-describedby="statusError"
                    labelId="status"
                    id="status"
                    label="Status"
                    onChange={(event) =>
                      field.field.onChange(event.target.value)
                    }
                    inputRef={field.field.ref}
                    defaultValue="">
                    <MenuItem value="draft"> Draft </MenuItem>
                    <MenuItem value="pending"> Pending </MenuItem>
                    <MenuItem value="sent"> Sent </MenuItem>
                  </Select>
                  <FormHelperText id="statusError">
                    {field.fieldState.error?.message}
                  </FormHelperText>
                </FormControl>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={['DatePicker']}
                    sx={{ paddingTop: 0, overflow: 'visible' }}>
                    <DatePicker
                      sx={{ minWidth: '1rem !important', width: '100%' }}
                      label="Date"
                      control={control}
                      onChange={field.field.onChange}
                      onBlur={field.field.onBlur}
                      inputRef={field.field.ref}
                      slotProps={{
                        textField: {
                          error: field.fieldState.error,
                          helperText: field.fieldState.error?.message,
                        },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={['DatePicker']}
                    sx={{ paddingTop: 0, overflow: 'visible' }}>
                    <DatePicker
                      sx={{ minWidth: '1rem !important', width: '100%' }}
                      label="Expire Date"
                      control={control}
                      onChange={field.field.onChange}
                      onBlur={field.field.onBlur}
                      inputRef={field.field.ref}
                      slotProps={{
                        textField: {
                          error: field.fieldState.error,
                          helperText: field.fieldState.error?.message,
                        },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 3 }}>
            <Controller
              name="note"
              defaultValue=""
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
                <Typography variant="h6">Save</Typography>
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
                    defaultValue={0}
                    control={control}
                    render={(field) => (
                      <FormInput
                        label="Sub Total"
                        control={control}
                        readOnly
                        value={
                          totalPrice > 0
                            ? `$ ${totalPrice.toFixed(2)}`
                            : `$ 1:00`
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
                    defaultValue={0}
                    control={control}
                    render={(field) => (
                      <FormInput
                        label="Total"
                        readOnly
                        control={control}
                        value={
                          totalPrice > 0
                            ? `$ ${totalPrice.toFixed(2)}`
                            : `$ 1:00`
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
    </>
  );
}
