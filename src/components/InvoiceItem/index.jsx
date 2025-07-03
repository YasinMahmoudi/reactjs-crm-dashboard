import DeleteIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Controller, useController } from 'react-hook-form';
import FormInput from '../FormInput';

InvoiceItem.propTypes = {
  control: PropTypes.object,
  initial: PropTypes.bool,
  position: PropTypes.string,
  item: PropTypes.object,
  onSetItems: PropTypes.func,
};

export default function InvoiceItem({
  control,
  initial = false,
  item,
  onSetItems,
}) {
  const deleteButtonRef = useRef();

  // const {
  //   field: { value: name },
  // } = useController({
  //   name: `item-${position}`,
  //   control,
  // });

  // const {
  //   field: { value: description },
  // } = useController({
  //   name: `description-${position}`,
  //   control,
  // });

  const {
    field: { value: qty },
  } = useController({
    name: `quantity-${item.id}`,
    control,
    defaultValue: item.qty || 1,
  });

  const {
    field: { value: price },
  } = useController({
    name: `price-${item.id}`,
    control,
    defaultValue: item.price || 1,
  });

  // const {
  //   field: { value: totalItemPrice },
  // } = useController({
  //   name: `total-${position}`,
  //   control,
  // });

  function handleChange(changedId) {
    const activeEl = document.activeElement;
    const deleteButton = deleteButtonRef.current;

    if (activeEl === deleteButton) return;

    onSetItems((items) => {
      const modifiedItems = items.map((item) =>
        item.id === changedId
          ? {
              ...item,

              qty: +qty,
              price: +price,
              totlaItemPrice: +totlaItemPrice,
            }
          : item
      );

      return modifiedItems;
    });
  }

  function handleDelete(id) {
    onSetItems((items) => items.filter((item) => item.id !== id));
  }

  const totlaItemPrice = +qty * +price;

  return (
    <>
      <Grid
        container
        spacing={{ md: 2 }}
        columns={{ md: 6 }}
        sx={{ width: '100%' }}
        onClick={() => handleChange(item.id)}>
        <Grid size={{ xs: 2, sm: 2, md: 1 }}>
          <Controller
            name={`item-${item.id}`}
            defaultValue={item.name}
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
            name={`description-${item.id}`}
            defaultValue={item.description}
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

        <Grid size={{ xs: 2, sm: 2, md: 0.5 }}>
          <Controller
            name={`quantity-${item.id}`}
            control={control}
            rules={{
              required: 'Please add a quantity .',
              min: {
                value: 1,
                message: 'Qunatity must be grater than 1',
              },
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
            name={`price-${item.id}`}
            control={control}
            rules={{
              required: 'Please add a price .',
            }}
            render={(field) => (
              <FormInput
                label="Price"
                control={control}
                type="number"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 2, sm: 2, md: 1 }}>
          <Controller
            name={`total-${item.id}`}
            defaultValue={0}
            control={control}
            render={(field) => (
              <FormInput
                label="Total"
                readOnly={true}
                control={control}
                value={
                  totlaItemPrice > 0
                    ? `$ ${totlaItemPrice.toFixed(2)}`
                    : `$ 1.00`
                }
                {...field}
              />
            )}
          />
        </Grid>

        {!initial ? (
          <Grid
            size={{ xs: 2, sm: 2, md: 0.5 }}
            alignSelf="center">
            <Button
              ref={deleteButtonRef}
              color="error"
              onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
