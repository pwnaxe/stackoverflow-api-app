import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ backgroundColor: '#f30490', color: 'white' }}>
        Contact Me
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Contact me
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Dear Sir or Madam,
          </Typography>
          <Typography gutterBottom>
            Im gladly happy to see You here. If You have any questions or need help, please contact me.
          </Typography>
          <Typography gutterBottom>
            Jarosław Karpiński <br />
            <a href="tel:+48786874435">+48 786 874 435</a><br />
            <a href="mailto:j.karpinski@itnorsk.pl">j.karpinski@itnorsk.pl</a>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close :(
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}