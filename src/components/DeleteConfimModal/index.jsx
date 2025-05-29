import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import { useSearchParams } from 'react-router';

DeleteConfirmModal.propTypes = {
  onDelete: PropTypes.func,
  isDeleting: PropTypes.bool,
  resourceName: PropTypes.string,
};

function DeleteConfirmModal({ onDelete, isDeleting, resourceName = 'record' }) {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const deleteId = searchParams.get('delete-id');

  const lowerCaseResourceName = resourceName.toLocaleLowerCase()

  useEffect(
    function () {
      if (searchParams.has('delete-id')) {
        setOpen(true);
      }
    },
    [searchParams]
  );

  const handleClose = () => {
    setOpen(false);
    searchParams.delete('delete-id');
    setSearchParams(searchParams);
  };

  function handleDelete() {
    onDelete(deleteId, {
      onSuccess() {
        handleClose();
      },
    });
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        aria-hidden={open ? 'false' : 'true'}>
        <DialogTitle id="alert-dialog-title">
          {`Are you sure about deleting this ${lowerCaseResourceName} ?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By deleting a {lowerCaseResourceName} all of the informations deleted !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            disabled={isDeleting}
            variant="outlined">
            Cancle
          </Button>
          <Button
            onClick={handleDelete}
            autoFocus
            color="error"
            disabled={isDeleting}
            variant={isDeleting ? 'text' : 'contained'}>
            {isDeleting ? <CircularProgress size={25} /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DeleteConfirmModal;
