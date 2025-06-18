import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import { Controller, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import InvoiceCreateToolbar from './InvoiceCreateToolbar';

import DeleteIcon from '@mui/icons-material/DeleteOutline';
import PlusIcon from '@mui/icons-material/Add';

export default function InvoiceCreate() {
  const { control, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

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
              render={(field) => (
                <Autocomplete
                  disablePortal
                  options={['Test 1', 'Test 2', 'Test 3', 'Test 4']}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Client"
                    />
                  )}
                  {...field}
                />
              )}
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
                <FormInput
                  label="Year"
                  control={control}
                  {...field}
                />
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
                  {...field}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={''}
                    label="Status"
                    onChange={{}}>
                    <MenuItem value="draft"> Draft </MenuItem>
                    <MenuItem value="pending"> Pending </MenuItem>
                    <MenuItem value="sent"> Sent </MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 3 }}>
            <Controller
              name="date"
              defaultValue=""
              control={control}
              rules={{
                required: 'Please select a date .',
              }}
              render={(field) => (
                <FormInput
                  label="Date"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 1 }}>
            <Controller
              name="expireDate"
              defaultValue=""
              control={control}
              rules={{
                required: 'Please select an expire date .',
              }}
              render={(field) => (
                <FormInput
                  label="Expire Date"
                  control={control}
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
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

          <Grid
            container
            columns={{ md: 6 }}
            sx={{ width: '100%' }}>
            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="item"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a name for item .',
                }}
                render={(field) => (
                  <FormInput
                    label="Item"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <Controller
                name="description"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a description .',
                }}
                render={(field) => (
                  <FormInput
                    label="Description"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 0.5 }}>
              <Controller
                name="quantity"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a quantity .',
                }}
                render={(field) => (
                  <FormInput
                    label="Quantity"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="price"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a price .',
                }}
                render={(field) => (
                  <FormInput
                    label="Price"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="total"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a name for item .',
                }}
                render={(field) => (
                  <FormInput
                    label="Total"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid
              size={{ xs: 2, sm: 2, md: 0.5 }}
              alignSelf="center">
              <Button color="error">
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            columns={{ md: 6 }}
            sx={{ width: '100%' }}>
            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="item"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a name for item .',
                }}
                render={(field) => (
                  <FormInput
                    label="Item"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <Controller
                name="description"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a description .',
                }}
                render={(field) => (
                  <FormInput
                    label="Description"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 0.5 }}>
              <Controller
                name="quantity"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a quantity .',
                }}
                render={(field) => (
                  <FormInput
                    label="Quantity"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="price"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a price .',
                }}
                render={(field) => (
                  <FormInput
                    label="Price"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="total"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a name for item .',
                }}
                render={(field) => (
                  <FormInput
                    label="Total"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid
              size={{ xs: 2, sm: 2, md: 0.5 }}
              alignSelf="center">
              <Button color="error">
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            columns={{ md: 6 }}
            sx={{ width: '100%' }}>
            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="item"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a name for item .',
                }}
                render={(field) => (
                  <FormInput
                    label="Item"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <Controller
                name="description"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a description .',
                }}
                render={(field) => (
                  <FormInput
                    label="Description"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 0.5 }}>
              <Controller
                name="quantity"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a quantity .',
                }}
                render={(field) => (
                  <FormInput
                    label="Quantity"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="price"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a price .',
                }}
                render={(field) => (
                  <FormInput
                    label="Price"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 1 }}>
              <Controller
                name="total"
                defaultValue=""
                control={control}
                rules={{
                  required: 'Please add a name for item .',
                }}
                render={(field) => (
                  <FormInput
                    label="Total"
                    control={control}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid
              size={{ xs: 2, sm: 2, md: 0.5 }}
              alignSelf="center">
              <Button color="error">
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            columns={{ md: 6 }}
            width="100%"
            mt={1}>
            <Button
              variant="outlined"
              sx={{
                py: 1.5,
                fontSize: '18px',
                borderStyle: 'dashed',
                marginLeft: 'auto',
                gap:'10px'
              }}>
              <PlusIcon />

              <span> Add Field</span>
            </Button>
          </Grid>

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
                loading={false}
                disabled={false}
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
                    defaultValue=""
                    control={control}
                    render={(field) => (
                      <FormInput
                        label="Sub Total"
                        control={control}
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid size={{ xs: 2, sm: 2, md: 2 }}>
                  <Controller
                    name="subTotal"
                    defaultValue=""
                    control={control}
                    render={(field) => (
                      <FormInput
                        label="Sub Total"
                        control={control}
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Grid size={{ xs: 2, sm: 2, md: 2 }}>
                  <Controller
                    name="total"
                    defaultValue=""
                    control={control}
                    render={(field) => (
                      <FormInput
                        label="Total"
                        control={control}
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
