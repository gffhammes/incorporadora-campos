import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth='xl' sx={{ height: '100%' }} >
      <Typography>teste</Typography>
    </Dialog>
  );
}
