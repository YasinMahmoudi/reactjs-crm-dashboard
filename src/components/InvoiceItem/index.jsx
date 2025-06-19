import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import FormInput from '../FormInput';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

InvoiceItem.propTypes = {
  control: PropTypes.object,
};

export default function InvoiceItem({ control }) {
  return (
    <Grid
      container
      spacing={{ md: 2 }}
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
              type="number"
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
  );
}
