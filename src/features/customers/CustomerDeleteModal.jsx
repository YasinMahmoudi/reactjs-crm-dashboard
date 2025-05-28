import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
// import PropTypes from 'prop-types';
import React, { createContext, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useDeleteCustomer } from './useDeleteCustomer';

// CustomerDeleteModal.propTypes = {
//   isOpen: PropTypes.bool,
// };

const DeletModalContext = createContext();

export default function CustomerDeleteModal() {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const deleteId = searchParams.get('delete-id');

  useEffect(
    function () {
      if (searchParams.has('delete-id')) {
        setOpen(true);
      }
    },
    [searchParams]
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    searchParams.delete('delete-id');
    setSearchParams(searchParams);
  };

  const { deleteCustomer, isDeletingCustomer } = useDeleteCustomer();

  return (
    <DeletModalContext.Provider
      value={{ open, setOpen, handleClickOpen, handleClose }}>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            {'Are you sure about deletin this customer ?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By deleting a customer all of the informations deleted ! ⚠️
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              disabled={isDeletingCustomer}>
              Cancle
            </Button>
            <Button
              onClick={() => {
                deleteCustomer(deleteId, {
                  onSuccess() {
                    handleClose();
                  },
                });
              }}
              autoFocus
              color="error"
              disabled={isDeletingCustomer}>
              {isDeletingCustomer ? 'Deleting ...' : 'Delete'}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </DeletModalContext.Provider>
  );
}
