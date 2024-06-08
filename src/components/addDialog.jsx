import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { open_close_add , inpImg , inpText , inpTitle , AddCard} from '../reducer/cardSlice/cardSlice';

import TextField from '@mui/material/TextField';


const AddDialog = () => {

    const open_close = useSelector((state) => state.card.addDialog)
    const dispatch  = useDispatch()

    const inpimg = useSelector((state) => state.card.addimg)
    const inptext = useSelector((state) => state.card.addtext)
    const inptitle = useSelector((state) => state.card.addtitle)


  return (
    <div>
      <Button variant="outlined" onClick={() => dispatch(open_close_add(true))}>
        Open alert dialog
      </Button>
      <Dialog
        open={open_close}
        onClose={() => dispatch(open_close_add(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add User"}
        </DialogTitle>
        <DialogContent>

        <TextField value={inpimg} onChange={(event) => dispatch(inpImg(event.target.value))} id="outlined-basic" type='url' label="Outlined"  />
        <TextField value={inptitle} onChange={(event) => dispatch(inpTitle(event.target.value))}  label="Outlined" variant="outlined" />
        <TextField value={inptext} onChange={(event) => dispatch(inpText(event.target.value))}  label="Outlined" variant="outlined" />

        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(open_close_add(false))}>Close</Button>
          <Button onClick={() => dispatch(AddCard(
            {
                id : Date.now(),
                img : `${inpimg}`,
                title : `${inptext}`,
                desc : `${inptitle}`,
                status : "inactive"
            }
          ))} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddDialog
