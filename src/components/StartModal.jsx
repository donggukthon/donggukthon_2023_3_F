import React from 'react';
import { Dialog, Fade, Alert, AlertTitle } from '@mui/material';

function LoginModal({ open, handleClose, message }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      sx={{ height: '200px' }}
    >
      <Alert
        severity="success"
        onClose={handleClose}
        sx={{ width: 500, height: 80, alignItems: 'center' }}
      >
        <AlertTitle>Success</AlertTitle>
        {message}
      </Alert>
    </Dialog>
  );
}

export default LoginModal;
