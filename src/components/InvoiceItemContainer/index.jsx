import PlusIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { createElement, useState } from 'react';

InvoiceItemContainer.propTypes = {
  children: PropTypes.element,
};

function InvoiceItemContainer({ children }) {
  const [addintionalItemElements, setAddintionalItemElements] = useState([]);

  function InsertItemHandler() {
    const newItem = createElement(children.type, {
      ...children.props,
      position: addintionalItemElements.length + 1,
    });
    setAddintionalItemElements((addintionalItemElements) => [
      ...addintionalItemElements,
      newItem,
    ]);
  }

  return (
    <>
      {children}

      {addintionalItemElements.length > 0 &&
        addintionalItemElements.map((itemElement, i) => (
          <div key={i}> {itemElement} </div>
        ))}

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
