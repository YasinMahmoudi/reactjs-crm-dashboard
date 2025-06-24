import PlusIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { cloneElement, createElement, useState } from 'react';

InvoiceItemContainer.propTypes = {
  children: PropTypes.element,
};

function InvoiceItemContainer({ children }) {
  const [addintionalItemElements, setAddintionalItemElements] = useState([]);

  function InsertItemHandler() {
    const position = addintionalItemElements.length + 1;

    const newItem = createElement(children.type, {
      ...children.props,
      initial: false,
      position,
      onDelete: () => handleDelete(position),
    });
    setAddintionalItemElements((addintionalItemElements) => [
      ...addintionalItemElements,
      newItem,
    ]);
  }

  function handleDelete(id) {
    setAddintionalItemElements((addintionalItemElements) =>
      addintionalItemElements.filter((item) => item.props.position !== id)
    );
  }

  return (
    <>
      {children}

      {addintionalItemElements.length > 0 &&
        addintionalItemElements.map((itemElement, i) =>
          cloneElement(itemElement, { key: i + 1 })
        )}

      <Grid
        container
        columns={{ md: 6 }}
        width="100%"
        mt={1}>
        <Button
          onClick={InsertItemHandler}
          variant="outlined"
          sx={{
            py: 1.5,
            fontSize: '18px',
            borderStyle: 'dashed',
            marginLeft: 'auto',
            gap: '10px',
          }}>
          <PlusIcon />

          <span> Add Field</span>
        </Button>
      </Grid>
    </>
  );
}

export default InvoiceItemContainer;
