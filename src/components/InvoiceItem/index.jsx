import DeleteIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { Controller, useController } from 'react-hook-form';
import FormInput from '../FormInput';
import { useRef } from 'react';

InvoiceItem.propTypes = {
  control: PropTypes.object,
  initial: PropTypes.bool,
  position: PropTypes.string,
  onDelete: PropTypes.func,
  items: PropTypes.array,
  onSetItems: PropTypes.func,
};

export default function InvoiceItem({
  control,
  initial = false,
  position = 0,
  onDelete,
  items,
  onSetItems,
}) {
  const deleteButtonRef = useRef();

  const {
    field: { value: quantity },
  } = useController({
    name: `quantity-${position}`,
    control,
    defaultValue: 1,
  });

  const {
    field: { value: price },
  } = useController({
    name: `price-${position}`,
    control,
    defaultValue: 1,
  });

  const {
    field: { value: name },
  } = useController({
    name: `item-${position}`,
    control,
    defaultValue: '',
  });

  const totlaItemPrice = +quantity * +price;

  function handleChange(changedId) {
    const activeEl = document.activeElement;
    const deleteButton = deleteButtonRef.current;

    if (activeEl === deleteButton) return;

    const newItem = {
      id: position,
      name,
      description: '',
      qty: +quantity,
      price: +price,
      totlaItemPrice,
    };

    if (!items.length) {
      items.push(newItem);
      return;
    }

    onSetItems((items) => {
      const remainingItems = items.filter((item) => item.id !== changedId);

      return [
        ...remainingItems,
        {
          id: position,
          name,
          description: '',
          qty: +quantity,
          price: +price,
          totlaItemPrice,
        },
      ];
    });
  }

  return (
    <>
      <Grid
        container
        spacing={{ md: 2 }}
        columns={{ md: 6 }}
        sx={{ width: '100%' }}
        onClick={() => handleChange(position)}>
        <Grid size={{ xs: 2, sm: 2, md: 1 }}>
          <Controller
            name={`item-${position}`}
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
            name={`description-${position}`}
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
            name={`quantity-${position}`}
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
            name={`price-${position}`}
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
            name={`total-${position}`}
            defaultValue={0}
            control={control}
            rules={{
              required: 'Please add a total price for item .',
            }}
            render={(field) => (
              <FormInput
                label="Total"
                readOnly={true}
                control={control}
                value={
                  totlaItemPrice > 0
                    ? `$ ${totlaItemPrice.toFixed(2)}`
                    : `$ 1:00`
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
              data-id={position}
              onClick={() => {
                onDelete();
                onSetItems((items) =>
                  items.filter((item) => item.id !== position)
                );
              }}>
              <DeleteIcon />
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
