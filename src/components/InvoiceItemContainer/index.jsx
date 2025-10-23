import PlusIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



function InvoiceItemContainer({ onAddItems, children }) {
  function InsertItemHandler() {
    const newItem = {
      id: crypto.randomUUID(),
      name: '',
      description: '',
      qty: 1,
      price: 1,
      totlaItemPrice: 1,
    };

    onAddItems((items) => [...items, newItem]);
  }

  return (
    <>
      {children}

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
