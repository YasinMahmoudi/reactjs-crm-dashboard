import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useBack } from '../../hooks/useBack';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(90% , 800px)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function CustomerCreateModal() {
  const moveBack = useBack();

  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    moveBack();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mb={1}
            >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2">
              Create user
            </Typography>

            <IconButton
              aria-label="close"
              color="error">
              <CloseRounded />
            </IconButton>
          </Grid>

          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 1, sm: 4 }}>
            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size=""
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size=""
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size=""
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size=""
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size=""
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size=""
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <Button
                variant="contained"
                color="info">
                Add User
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
