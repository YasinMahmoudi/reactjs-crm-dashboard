import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




import { useSearchParams } from 'react-router';



function DeleteConfirmModal({
  onDelete,
  isDeleting,
  resourceName = 'record',
  deleteMultipleOptions: { params, resetParams },
}) {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const deleteId = searchParams.get('delete-id');
  const isDeleteMultipe = searchParams.has('delete-multiple');

  const lowerCaseResourceName = `${
    isDeleteMultipe
      ? `${resourceName.toLocaleLowerCase()}s`
      : resourceName.toLocaleLowerCase()
  }`;

  useEffect(
    function () {
      const isOpenConfirmModal =
        searchParams.has('delete-id') || searchParams.has('delete-multiple');

      if (isOpenConfirmModal) {
        setOpen(true);
      }
    },
    [searchParams]
  );

  const handleClose = () => {
    setOpen(false);
    searchParams.delete('delete-id');
    searchParams.delete('delete-multiple');
    setSearchParams(searchParams);
  };

  function handleDelete() {
    const deletionParams = isDeleteMultipe ? params : deleteId;

    onDelete(deletionParams, {
      onSuccess() {
        handleClose();

        if (isDeleteMultipe) resetParams();
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
            By deleting {lowerCaseResourceName} all of the informations deleted
            !
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
