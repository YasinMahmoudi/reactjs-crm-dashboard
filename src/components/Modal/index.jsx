import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseRounded from '@mui/icons-material/CloseRounded';

import { useBack } from '../../hooks/useBack';

import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

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

EnhancedModal.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default function EnhancedModal({ children, title = '', isOpen = true }) {
  const moveBack = useBack();

  const [open, setOpen] = useState(isOpen);

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
            mb={1}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2">
              {title}
            </Typography>

            <IconButton
              aria-label="close"
              color="error"
              onClick={handleClose}>
              <CloseRounded />
            </IconButton>
          </Grid>

          {children}
        </Box>
      </Modal>
    </div>
  );
}
