import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { editImg , editTitle , editText, open_close_edit , edit_dial} from '../reducer/cardSlice/cardSlice';
import { Input } from '@mui/material';




const EditDialog = () => {

    const open_close  = useSelector((state) => state.card.editDialog)
    const dispatch = useDispatch()

    const editimg = useSelector((state) => state.card.editimg)
    const edittitle = useSelector((state) => state.card.edittitle)
    const edittext = useSelector((state) => state.card.edittext)
    

   
  


  return (
    <div>
      <Dialog
        open={open_close}
        onClose={() => dispatch(open_close_edit([false,1]))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Card"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Input value={editimg} onChange={(event) => dispatch(editImg(event.target.value))} type='url'/>
            <Input value={edittitle} onChange={(event) => dispatch(editTitle(event.target.value))}/>
            <Input value={edittext} onChange={(event) => dispatch(editText(event.target.value))}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(open_close_edit([false,1]))}>Close</Button>
          <Button onClick={() => dispatch(edit_dial())} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditDialog
