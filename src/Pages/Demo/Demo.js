import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Demo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Give Answer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Put Your Answer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b> Question :- </b> Here the actual question will appear, when our backend developers are ready with their APIs
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Put your answer here"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post Answer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}