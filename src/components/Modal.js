import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Modal({list,setList}) {
  const [open, setOpen] = React.useState(false);
  const [name,setName]= useState("")
  const [age,setAge]= useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = ()=>{
      setList([
          ...list,
          {name:name,age:age}
      ])
      setOpen(false);
      setName("")
      setAge("")
  }

  const nameHandler = (e)=>{
   setName(e.target.value)
  }
  const ageHandler = (e)=>{
    setAge(e.target.value)
   }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add to Table
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add To Table"}
        </DialogTitle>
        <DialogContent>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={nameHandler} value={name} id="outlined-basic" label="Name" variant="standard" />
      <TextField onChange={ageHandler} value={age}  id="filled-basic" label="Age" variant="standard" />
    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}