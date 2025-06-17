import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Autocomplete from '@mui/material/Autocomplete';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import { Controller, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput';
import InvoiceCreateToolbar from './InvoiceCreateToolbar';

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
                      label="Movie"
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
            my={5}>
            <Divider sx={{ borderStyle: 'dashed' }} />
          </Grid>

          <Grid size={{ xs: 2, sm: 2, md: 2 }}>
            <Button
              variant="contained"
              color="info"
              sx={{ width: { xs: '100%', sm: 'auto', letterSpacing: 2 } }}
              type="submit"
              loading={false}
              disabled={false}
              loadingPosition="start">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
